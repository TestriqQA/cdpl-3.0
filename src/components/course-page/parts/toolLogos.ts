// Logos for tool names used in project "stack" tags, keyed by lower-case
// name. CoursePage adds the course's own Tools-section logos on top, so a
// course's tools always match its Tools section; this covers the rest.
const L = "/techstack_logos/";

export const TOOL_LOGOS: Record<string, string> = {
  jira: `${L}jira-logo.svg`,
  postman: `${L}postman-logo.svg`,
  browserstack: `${L}browserstack-logo.svg`,
  testrail: `${L}testrail-logo.svg`,
  zephyr: `${L}zephyr-logo.png`,
  "charles proxy": `${L}charles-proxy-logo.svg`,
  swagger: `${L}OpenAPI-Swagger-logo.png`,
  figma: `${L}figma-logo.svg`,
  mysql: `${L}mysql-logo.svg`,
  "mysql workbench": `${L}mysql-logo.svg`,
  postgresql: `${L}postgresql-logo.svg`,
  python: `${L}python-logo.svg`,
  pandas: `${L}pandas-logo.svg`,
  numpy: `${L}numpy-logo.svg`,
  scipy: `${L}scipy-logo.svg`,
  "scikit-learn": `${L}scikit-learn-logo.svg`,
  matplotlib: `${L}matplotlib-logo.svg`,
  seaborn: `${L}seaborn-logo.png`,
  plotly: `${L}plotly-logo.svg`,
  fastapi: `${L}fastapi-logo.webp`,
  pytorch: `${L}pytorch-logo.svg`,
  spacy: `${L}spacy-logo.svg`,
  transformers: `${L}Hugging-logo.png`,
  "hugging face": `${L}Hugging-logo.png`,
  "power bi": `${L}power-bi-logo.svg`,
  tableau: `${L}tableau-logo.svg`,
  docker: `${L}docker-logo.svg`,
  "apache spark": `${L}apache-spark-logo.svg`,
  github: `${L}github-logo.svg`,
  "github actions": `${L}Github-actions-logo.png`,
  vercel: `${L}vercel-logo.webp`,
  "spring boot": `${L}spring-logo.svg`,
};

/** Lower-case name → logo, from a course's Tools section items. */
export function logosFromTools(items?: { name: string; logo?: string }[]): Record<string, string> {
  const out: Record<string, string> = {};
  for (const t of items ?? []) if (t.logo) out[t.name.toLowerCase()] = t.logo;
  return out;
}
