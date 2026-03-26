const fs = require('fs');
const path = require('path');

const filePath = path.resolve('src/lib/schema-generators.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// ========================================================================
// STEP 1: Replace all 13 hardcoded aggregateRatingSchema blocks
// Keep variable name as "aggregateRatingSchema" to avoid breaking return refs
// ========================================================================
const SEARCH = 'const aggregateRatingSchema: WithContext<Record<string, unknown>> = {';

let blockCount = 0;
let idx = 0;
while (true) {
  idx = content.indexOf(SEARCH, idx);
  if (idx === -1) break;
  
  // Find end of block by counting braces
  let braceCount = 0, foundOpen = false, endIdx = idx;
  for (let i = idx; i < content.length; i++) {
    if (content[i] === '{') { braceCount++; foundOpen = true; }
    else if (content[i] === '}') {
      braceCount--;
      if (foundOpen && braceCount === 0) {
        endIdx = content.indexOf(';', i) + 1;
        break;
      }
    }
  }
  
  // Also include the comment line above if it's about AggregateRating
  let replaceStart = idx;
  const lineStart = content.lastIndexOf('\n', idx - 1) + 1;
  if (lineStart > 1) {
    const prevLineEnd = lineStart - (content[lineStart - 2] === '\r' ? 2 : 1);
    const prevLineStart = content.lastIndexOf('\n', prevLineEnd - 1) + 1;
    const prevLine = content.substring(prevLineStart, prevLineEnd + 1).trim();
    if (prevLine.toLowerCase().includes('aggregate') || prevLine.toLowerCase().includes('rating')) {
      replaceStart = prevLineStart;
    }
  }
  
  const replacement = '  // AggregateRating — standardized via generateReviewSchema\r\n' +
    '  const aggregateRatingSchema = generateReviewSchema({\r\n' +
    '    ratingValue: STATISTICS.rating,\r\n' +
    '    reviewCount: STATISTICS.reviewCount,\r\n' + 
    '  });';
  
  content = content.substring(0, replaceStart) + replacement + content.substring(endIdx);
  blockCount++;
  idx = replaceStart + replacement.length;
}

console.log('Step 1: Replaced ' + blockCount + ' hardcoded blocks');

// ========================================================================
// STEP 2: Add aggregateRatingSchema to return arrays that don't have it
// These are course/category/Home/All Courses generators
// ========================================================================
const lines = content.split(/\r?\n/);
const output = [];
let addCount = 0;

for (let i = 0; i < lines.length; i++) {
  const trimmed = lines[i].trim();
  
  // Check if this is a spread of siteNav at end of return array
  const isSpread = (trimmed === '...siteNavigationSchema' || trimmed === '...siteNavSchemas');
  const nextIdx = i + 1;
  const nextIsEnd = nextIdx < lines.length && 
    (lines[nextIdx].trim().startsWith('].filter') || lines[nextIdx].trim() === '];');
  
  if (isSpread && nextIsEnd) {
    // Check if aggregateRatingSchema is in this return array
    let hasRating = false;
    for (let j = i - 1; j >= Math.max(0, i - 20); j--) {
      if (lines[j].includes('aggregateRatingSchema')) { hasRating = true; break; }
      if (lines[j].trim().startsWith('return [')) break;
    }
    
    if (!hasRating) {
      // Find the siteNav/siteNavSchemas declaration above
      let navLine = -1;
      for (let j = i - 1; j >= Math.max(0, i - 15); j--) {
        if (lines[j].includes('const siteNavigationSchema') || lines[j].includes('const siteNavSchemas')) {
          navLine = j;
          break;
        }
      }
      
      if (navLine >= 0) {
        // Insert declaration in result array after where navLine was pushed
        const resultNavIdx = output.length - (i - navLine);
        
        // Skip any blank lines after nav declaration in result
        let insertAt = resultNavIdx + 1;
        while (insertAt < output.length && output[insertAt].trim() === '') insertAt++;
        
        output.splice(insertAt, 0,
          '',
          '  // AggregateRating — standardized via generateReviewSchema',
          '  const aggregateRatingSchema = generateReviewSchema({',
          '    ratingValue: STATISTICS.rating,',
          '    reviewCount: STATISTICS.reviewCount,',
          '  });'
        );
        
        // Add to return array before spread
        output.push('    aggregateRatingSchema,');
        addCount++;
      }
    }
  }
  
  output.push(lines[i]);
}

content = output.join('\r\n');
console.log('Step 2: Added aggregateRatingSchema to ' + addCount + ' functions');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Done! Total: ' + blockCount + ' replaced, ' + addCount + ' added.');
