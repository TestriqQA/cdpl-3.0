$files = @(
  'src\app\(city-courses)\[slug]\page.tsx',
  'src\app\about-us\page.tsx',
  'src\app\services\page.tsx',
  'src\app\services\[slug]\page.tsx',
  'src\app\contact-us\page.tsx',
  'src\app\mentors\page.tsx',
  'src\app\our-team\page.tsx',
  'src\app\jobs\placements\page.tsx',
  'src\app\jobs\careers\page.tsx',
  'src\app\jobs\live-jobs\page.tsx',
  'src\app\jobs\job-openings\page.tsx',
  'src\app\istqb-registration\page.tsx',
  'src\app\aaa-certification\page.tsx',
  'src\app\actd-certification\page.tsx',
  'src\app\cdpl-affiliate-program\page.tsx',
  'src\app\cdpl-certificate-validation\page.tsx',
  'src\app\privacy-policy\page.tsx',
  'src\app\terms-of-service\page.tsx',
  'src\app\cookies-policy\page.tsx',
  'src\app\cancellation-refund-policy\page.tsx',
  'src\app\courses\software-testing-course\page.tsx',
  'src\app\courses\digital-marketing-courses\ai-in-digital-marketing\page.tsx',
  'src\app\courses\digital-marketing-courses\ai-bootcamp\page.tsx',
  'src\app\courses\ds-ml-courses\machine-learning-using-python\page.tsx',
  'src\app\courses\ds-ml-courses\data-visualization-in-r-programming\page.tsx',
  'src\app\courses\bi-courses\masters-in-data-engineering\page.tsx',
  'src\app\courses\bi-courses\data-analytics-and-visualization\page.tsx',
  'src\app\blog\page.tsx',
  'src\app\blog\[slug]\page.tsx',
  'src\app\blog\all-posts\page.tsx',
  'src\app\blog\search\page.tsx',
  'src\app\blog\categories\page.tsx',
  'src\app\blog\category\[slug]\page.tsx'
)

$baseDir = 'e:\Projects\cdpl-3.0'
$count = 0

foreach ($f in $files) {
  $path = Join-Path $baseDir $f
  if (Test-Path $path) {
    $content = Get-Content $path -Raw
    $newContent = $content -replace '<main\b', '<div'
    $newContent = $newContent -replace '</main>', '</div>'
    if ($newContent -ne $content) {
      Set-Content $path -Value $newContent -NoNewline
      $count++
      Write-Host "Fixed: $f"
    } else {
      Write-Host "No change needed: $f"
    }
  } else {
    Write-Host "NOT FOUND: $f"
  }
}

Write-Host "`nTotal files fixed: $count"
