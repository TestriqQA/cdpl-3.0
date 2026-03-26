/**
 * SEO Validation Utilities
 * 
 * Helper functions to validate and test SEO implementation
 */

// ========================================
// METADATA VALIDATION
// ========================================

export interface SEOValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  suggestions: string[];
}

/**
 * Validate page title
 */
export function validateTitle(title: string): SEOValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const suggestions: string[] = [];

  if (!title) {
    errors.push('Title is missing');
  } else {
    if (title.length < 30) {
      warnings.push(`Title is too short (${title.length} chars). Recommended: 50-60 characters.`);
    }
    if (title.length > 60) {
      warnings.push(`Title is too long (${title.length} chars). It may be truncated in search results.`);
    }
    if (!title.includes('CDPL') && !title.includes('Cinute Digital')) {
      suggestions.push('Consider including brand name (CDPL or Cinute Digital) in title');
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    suggestions,
  };
}

/**
 * Validate meta description
 */
export function validateDescription(description: string): SEOValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const suggestions: string[] = [];

  if (!description) {
    errors.push('Description is missing');
  } else {
    if (description.length < 120) {
      warnings.push(`Description is too short (${description.length} chars). Recommended: 150-160 characters.`);
    }
    if (description.length > 160) {
      warnings.push(`Description is too long (${description.length} chars). It may be truncated in search results.`);
    }
    if (!description.includes('CDPL') && !description.includes('Cinute Digital')) {
      suggestions.push('Consider including brand name in description');
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    suggestions,
  };
}

/**
 * Validate keywords
 */
export function validateKeywords(keywords: string[]): SEOValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const suggestions: string[] = [];

  if (!keywords || keywords.length === 0) {
    warnings.push('No keywords provided');
  } else {
    if (keywords.length < 5) {
      suggestions.push(`Only ${keywords.length} keywords provided. Consider adding more relevant keywords.`);
    }
    if (keywords.length > 20) {
      warnings.push(`Too many keywords (${keywords.length}). Focus on 10-15 most relevant keywords.`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    suggestions,
  };
}

// ========================================
// STRUCTURED DATA VALIDATION
// ========================================

export function validateSchema(schema: Record<string, unknown>): SEOValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const suggestions: string[] = [];

  if (!schema) {
    errors.push('Schema is missing');
    return { isValid: false, errors, warnings, suggestions };
  }

  if (!schema['@context']) {
    errors.push('Schema missing @context property');
  }
  if (!schema['@type']) {
    errors.push('Schema missing @type property');
  }

  const type = schema['@type'] as string | undefined;

  if (type === 'Course') {
    if (!schema.name) errors.push('Course schema missing name');
    if (!schema.description) errors.push('Course schema missing description');
    if (!schema.provider) warnings.push('Course schema missing provider');
  }

  if (type === 'Article') {
    if (!schema.headline) errors.push('Article schema missing headline');
    if (!schema.author) warnings.push('Article schema missing author');
    if (!schema.datePublished) warnings.push('Article schema missing datePublished');
  }

  if (type === 'FAQPage') {
    if (!schema.mainEntity || !Array.isArray(schema.mainEntity)) {
      errors.push('FAQPage schema missing mainEntity array');
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    suggestions,
  };
}

// ========================================
// URL VALIDATION
// ========================================

export function validateURL(url: string): SEOValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const suggestions: string[] = [];

  if (!url) {
    errors.push('URL is missing');
    return { isValid: false, errors, warnings, suggestions };
  }

  if (url.length > 100) {
    warnings.push(`URL is long (${url.length} chars). Consider shorter URLs for better UX.`);
  }

  if (/[^a-z0-9\-\/]/.test(url)) {
    warnings.push('URL contains special characters. Use only lowercase letters, numbers, and hyphens.');
  }

  if (/[A-Z]/.test(url)) {
    warnings.push('URL contains uppercase letters. Use lowercase for consistency.');
  }

  if (url.includes('_')) {
    suggestions.push('Use hyphens (-) instead of underscores (_) in URLs');
  }

  if (url.includes('//') && !url.startsWith('http')) {
    errors.push('URL contains multiple consecutive slashes');
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    suggestions,
  };
}

// ========================================
// CONTENT VALIDATION
// ========================================

export function validateHeadings(headings: { level: number; text: string }[]): SEOValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const suggestions: string[] = [];

  if (!headings || headings.length === 0) {
    errors.push('No headings found');
    return { isValid: false, errors, warnings, suggestions };
  }

  const h1Count = headings.filter(h => h.level === 1).length;
  if (h1Count === 0) {
    errors.push('No H1 heading found');
  } else if (h1Count > 1) {
    warnings.push(`Multiple H1 headings found (${h1Count}). Use only one H1 per page.`);
  }

  for (let i = 1; i < headings.length; i++) {
    const prev = headings[i - 1];
    const curr = headings[i];
    if (curr.level > prev.level + 1) {
      warnings.push(`Heading hierarchy skip: H${prev.level} followed by H${curr.level}. Use sequential heading levels.`);
    }
  }

  headings.forEach((heading, index) => {
    if (heading.text.length < 10) {
      suggestions.push(`Heading ${index + 1} is very short. Consider more descriptive headings.`);
    }
    if (heading.text.length > 70) {
      suggestions.push(`Heading ${index + 1} is long (${heading.text.length} chars). Consider shorter headings.`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    suggestions,
  };
}

export function validateContentLength(content: string): SEOValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const suggestions: string[] = [];

  const wordCount = content.split(/\s+/).filter(Boolean).length;

  if (wordCount < 300) {
    warnings.push(`Content is short (${wordCount} words). Aim for at least 300 words for better SEO.`);
  }

  if (wordCount > 2000) {
    suggestions.push(`Content is long (${wordCount} words). Consider breaking into multiple pages or sections.`);
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    suggestions,
  };
}

// ========================================
// IMAGE VALIDATION
// ========================================

export function validateImageAlt(images: { src: string; alt?: string }[]): SEOValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const suggestions: string[] = [];

  if (!images || images.length === 0) {
    return { isValid: true, errors, warnings, suggestions };
  }

  images.forEach((img, index) => {
    if (!img.alt) {
      errors.push(`Image ${index + 1} (${img.src}) missing alt text`);
    } else if (img.alt.length < 5) {
      warnings.push(`Image ${index + 1} alt text is too short: "${img.alt}"`);
    } else if (img.alt.length > 125) {
      warnings.push(`Image ${index + 1} alt text is too long (${img.alt.length} chars)`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    suggestions,
  };
}

// ========================================
// COMPREHENSIVE PAGE VALIDATION
// ========================================

export interface PageSEOData {
  title: string;
  description: string;
  keywords?: string[];
  url: string;
  headings?: { level: number; text: string }[];
  content?: string;
  images?: { src: string; alt?: string }[];
  schema?: Record<string, unknown>;
}

export function validatePageSEO(data: PageSEOData): {
  isValid: boolean;
  results: {
    title: SEOValidationResult;
    description: SEOValidationResult;
    keywords?: SEOValidationResult;
    url: SEOValidationResult;
    headings?: SEOValidationResult;
    content?: SEOValidationResult;
    images?: SEOValidationResult;
    schema?: SEOValidationResult;
  };
  summary: {
    totalErrors: number;
    totalWarnings: number;
    totalSuggestions: number;
  };
} {
  const results: ReturnType<typeof validatePageSEO>['results'] = {
    title: validateTitle(data.title),
    description: validateDescription(data.description),
    url: validateURL(data.url),
  };

  if (data.keywords) {
    results.keywords = validateKeywords(data.keywords);
  }

  if (data.headings) {
    results.headings = validateHeadings(data.headings);
  }

  if (data.content) {
    results.content = validateContentLength(data.content);
  }

  if (data.images) {
    results.images = validateImageAlt(data.images);
  }

  if (data.schema) {
    results.schema = validateSchema(data.schema);
  }

  let totalErrors = 0;
  let totalWarnings = 0;
  let totalSuggestions = 0;

  Object.values(results).forEach((result: SEOValidationResult) => {
    totalErrors += result.errors.length;
    totalWarnings += result.warnings.length;
    totalSuggestions += result.suggestions.length;
  });

  return {
    isValid: totalErrors === 0,
    results,
    summary: {
      totalErrors,
      totalWarnings,
      totalSuggestions,
    },
  };
}

// ========================================
// CONSOLE LOGGER
// ========================================

export function logValidationResults(results: ReturnType<typeof validatePageSEO>) {
  console.group('SEO Validation Results');
  
  console.log(`\nValid: ${results.isValid ? 'YES' : 'NO'}`);
  console.log(`Errors: ${results.summary.totalErrors}`);
  console.log(`Warnings: ${results.summary.totalWarnings}`);
  console.log(`Suggestions: ${results.summary.totalSuggestions}`);

  Object.entries(results.results).forEach(([key, result]) => {
    if (result.errors.length > 0 || result.warnings.length > 0 || result.suggestions.length > 0) {
      console.group(`\n${key.toUpperCase()}`);
      
      if (result.errors.length > 0) {
        console.error('Errors:', result.errors);
      }
      if (result.warnings.length > 0) {
        console.warn('Warnings:', result.warnings);
      }
      if (result.suggestions.length > 0) {
        console.info('Suggestions:', result.suggestions);
      }
      
      console.groupEnd();
    }
  });

  console.groupEnd();
}
