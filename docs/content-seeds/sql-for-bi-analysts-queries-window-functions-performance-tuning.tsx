// Content for: SQL for BI Analysts: Queries, Window Functions, and Performance Tuning

export const content = {
  introduction: `<p><strong>SQL for BI analysts</strong> in 2025 means more than SELECT and GROUP BY. You’re expected to write fast, reliable queries, master <strong>window functions</strong> for running totals and cohort metrics, and apply <strong>performance tuning</strong> so dashboards don’t crawl. This SEO-optimized playbook gives you the patterns that matter across <em>PostgreSQL</em>, <em>Snowflake</em>, and <em>BigQuery</em>—including <strong>ROW_NUMBER</strong>, <strong>RANK</strong>, <strong>DENSE_RANK</strong>, <strong>LAG/LEAD</strong>, rolling averages, partitions, indexes, and <strong>EXPLAIN</strong>.</p>
  <p>Use the snippets below to speed up ad-hoc analysis, stabilize production reports, and build a reusable toolkit for <strong>business intelligence</strong> and <strong>analytics engineering</strong>.</p>`,

  sections: [
    {
      title: "1) Query Foundations BI Analysts Use Daily",
      content: `<p>Clean, predictable queries beat clever one-liners. Structure queries with <strong>CTEs</strong> (common table expressions) and explicit columns:</p>
      <div class="code-block">
        <pre><code class="language-sql">WITH orders_clean AS (
  SELECT
    o.order_id,
    o.customer_id,
    o.order_date::date AS order_date,
    o.total_amount::numeric AS total_amount,
    COALESCE(o.channel, 'unknown') AS channel
  FROM raw_orders o
  WHERE o.order_status = 'completed'
)
SELECT
  c.customer_id,
  COUNT(*) AS orders,
  SUM(total_amount) AS revenue
FROM orders_clean c
GROUP BY 1
ORDER BY revenue DESC;</code></pre>
      </div>
      <p><strong>Best practices:</strong> cast early, <code>COALESCE</code> nulls, avoid <code>SELECT *</code>, label metrics clearly (<code>revenue_30d</code>, <code>orders_7d</code>).</p>`
    },

    {
      title: "2) Joins & Aggregations: Patterns That Avoid Pitfalls",
      content: `<p>Most BI bugs come from join cardinality. Use <strong>distinct keys</strong> and pre-aggregate before joining to facts.</p>
      <div class="code-block">
        <pre><code class="language-sql">-- Pre-aggregate sessions before joining to orders (avoids row blow-ups)
WITH session_stats AS (
  SELECT user_id, DATE(session_ts) AS d, COUNT(*) AS sessions
  FROM web_sessions
  GROUP BY 1,2
)
SELECT
  o.customer_id,
  DATE(o.order_date) AS d,
  SUM(o.total_amount) AS revenue,
  COALESCE(s.sessions, 0) AS sessions
FROM orders o
LEFT JOIN session_stats s
  ON s.user_id = o.customer_id AND s.d = DATE(o.order_date)
GROUP BY 1,2,4;</code></pre>
      </div>
      <p><strong>Tip:</strong> When using <code>LEFT JOIN</code>, keep the aggregated side on the right and ensure join keys are indexed/partitioned.</p>`
    },

    {
      title: "3) Window Functions: The BI Superpower",
      content: `<p><strong>Window functions</strong> calculate metrics across partitions (e.g., per customer, per product) without collapsing rows. Core syntax:</p>
      <div class="code-block">
        <pre><code class="language-sql">function() OVER (
  PARTITION BY key_columns
  ORDER BY sort_columns
  ROWS BETWEEN frame_start AND frame_end
)</code></pre>
      </div>
      <p>Common analytics patterns:</p>
      <div class="code-block">
        <pre><code class="language-sql">-- Running total by customer (cumulative revenue)
SELECT
  customer_id,
  order_date,
  total_amount,
  SUM(total_amount) OVER (
    PARTITION BY customer_id
    ORDER BY order_date
    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
  ) AS cum_revenue
FROM orders;

-- Rolling 7-day average (needs day-level grain)
SELECT
  d,
  AVG(revenue) OVER (
    ORDER BY d
    ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
  ) AS rev_avg_7d
FROM daily_revenue;

-- Ranking products by category & month
SELECT
  category,
  month,
  product_id,
  revenue,
  RANK() OVER (
    PARTITION BY category, month
    ORDER BY revenue DESC
  ) AS rank_in_category
FROM monthly_product_revenue;

-- Cohort: time to second order with LAG
SELECT
  customer_id,
  order_date,
  LAG(order_date) OVER (PARTITION BY customer_id ORDER BY order_date) AS prev_order,
  EXTRACT(DAY FROM order_date - LAG(order_date) OVER (PARTITION BY customer_id ORDER BY order_date)) AS days_between
FROM orders;</code></pre>
      </div>
      <p><strong>Guideline:</strong> choose <code>ROWS</code> frames for fixed windows (7 days); use <code>RANGE</code> carefully with numeric/date gaps. Always define <code>ORDER BY</code> for deterministic results.</p>`
    },

    {
      title: "4) Percentiles, Retention & Cohorts (Advanced Windows)",
      content: `<p>BI analyses often need <strong>percentiles</strong> and retention curves.</p>
      <div class="code-block">
        <pre><code class="language-sql">-- Median and P90 order value by month (Postgres/Snowflake)
SELECT
  DATE_TRUNC('month', order_date) AS m,
  PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY total_amount) AS p50,
  PERCENTILE_CONT(0.9) WITHIN GROUP (ORDER BY total_amount) AS p90
FROM orders
GROUP BY 1;

-- BigQuery percentile (approx)
SELECT
  m,
  APPROX_QUANTILES(total_amount, 100)[OFFSET(50)] AS p50,
  APPROX_QUANTILES(total_amount, 100)[OFFSET(90)] AS p90
FROM (
  SELECT DATE_TRUNC(order_date, MONTH) AS m, total_amount FROM orders
)
GROUP BY 1;

-- Simple retention calc: did the user return next month?
WITH firsts AS (
  SELECT customer_id, DATE_TRUNC('month', MIN(order_date)) AS first_month
  FROM orders GROUP BY 1
),
activity AS (
  SELECT customer_id, DATE_TRUNC('month', order_date) AS m
  FROM orders
  GROUP BY 1,2
)
SELECT
  f.first_month,
  a.m AS activity_month,
  COUNT(DISTINCT a.customer_id) AS active_users
FROM firsts f
JOIN activity a ON a.customer_id = f.customer_id
WHERE a.m BETWEEN f.first_month AND f.first_month + INTERVAL '6 months'
GROUP BY 1,2
ORDER BY 1,2;</code></pre>
      </div>`
    },

    {
      title: "5) Reusable CTE Patterns (Metrics, Dedup, SCD-ish)",
      content: `<p>CTEs make complex logic readable and testable.</p>
      <div class="code-block">
        <pre><code class="language-sql">-- Deduplicate by latest timestamp
WITH ranked AS (
  SELECT *,
         ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY updated_at DESC) AS rn
  FROM user_profiles
)
SELECT * FROM ranked WHERE rn = 1;

-- Metrics layer: build once, reuse everywhere
WITH base_orders AS (
  SELECT order_id, customer_id, order_date::date AS d, total_amount FROM orders WHERE order_status='completed'
),
daily AS (
  SELECT d, COUNT(*) AS orders, SUM(total_amount) AS revenue
  FROM base_orders GROUP BY 1
)
SELECT * FROM daily;</code></pre>
      </div>
      <p><strong>Tip:</strong> Materialize heavy CTEs as <em>materialized views</em> (Postgres) or <em>persistent derived tables</em> (Snowflake) to speed dashboards.</p>`
    },

    {
      title: "6) Performance Tuning: Make Dashboards Feel Instant",
      content: `<p>Fast SQL = happy stakeholders. Focus on <strong>scans</strong>, <strong>filters</strong>, <strong>joins</strong>, and <strong>sorts</strong>.</p>
      <ul>
        <li><strong>PostgreSQL:</strong> create B-tree indexes on join keys and high-selectivity filters; analyze with <code>EXPLAIN (ANALYZE, BUFFERS)</code>.</li>
        <li><strong>Snowflake:</strong> clustering keys on large tables improve pruning; use <code>TASKS</code> to precompute aggregates.</li>
        <li><strong>BigQuery:</strong> partition by date, cluster by common filter/join columns; watch scanned bytes, use <code>APPROX</code> functions.</li>
      </ul>
      <div class="code-block">
        <pre><code class="language-sql">-- PostgreSQL index example
CREATE INDEX idx_orders_customer_date ON orders (customer_id, order_date);

-- BigQuery: partition + cluster
CREATE TABLE analytics.daily_revenue
PARTITION BY d
CLUSTER BY customer_id AS
SELECT DATE(order_date) AS d, customer_id, SUM(total_amount) AS revenue
FROM \`proj.dataset.orders\`
GROUP BY 1,2;</code></pre>
      </div>
      <p><strong>General wins:</strong> pre-aggregate to daily grain, avoid functions on indexed columns in WHERE, filter early in CTEs, and limit columns to reduce I/O.</p>`
    },

    {
      title: "7) Explain Plans & Query Smells",
      content: `<p>Learn to read <strong>EXPLAIN</strong> like a profiler. Look for full scans, nested loop explosions, and sorts on huge sets.</p>
      <ul>
        <li><strong>Full table scan</strong> where you expect index/partition pruning → add predicate on partition key or index join column.</li>
        <li><strong>High rows removed by filter</strong> → push filters earlier; pre-aggregate.</li>
        <li><strong>Repeated subqueries</strong> → CTE/materialize once.</li>
      </ul>`
    },

    {
      title: "8) Cheatsheet: Window Functions & When to Use Them",
      content: `<p>Keep this quick reference for everyday BI tasks:</p>
      <div class="overflow-x-auto">
      <table class="min-w-full border border-slate-300 border-collapse">
        <thead class="bg-slate-50">
          <tr>
            <th class="border border-slate-300 px-3 py-2 text-left">Use Case</th>
            <th class="border border-slate-300 px-3 py-2 text-left">Window Function</th>
            <th class="border border-slate-300 px-3 py-2 text-left">Example</th>
            <th class="border border-slate-300 px-3 py-2 text-left">Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr class="odd:bg-white even:bg-slate-50">
            <td class="border border-slate-300 px-3 py-2">Running total</td>
            <td class="border border-slate-300 px-3 py-2">SUM() OVER</td>
            <td class="border border-slate-300 px-3 py-2"><code>SUM(revenue) OVER (PARTITION BY customer ORDER BY d)</code></td>
            <td class="border border-slate-300 px-3 py-2">Define frame to avoid future-looking sums</td>
          </tr>
          <tr class="odd:bg-white even:bg-slate-50">
            <td class="border border-slate-300 px-3 py-2">Rolling average</td>
            <td class="border border-slate-300 px-3 py-2">AVG() OVER</td>
            <td class="border border-slate-300 px-3 py-2"><code>ROWS BETWEEN 6 PRECEDING AND CURRENT ROW</code></td>
            <td class="border border-slate-300 px-3 py-2">Needs contiguous dates at correct grain</td>
          </tr>
          <tr class="odd:bg-white even:bg-slate-50">
            <td class="border border-slate-300 px-3 py-2">Rank top-N</td>
            <td class="border border-slate-300 px-3 py-2">RANK / DENSE_RANK</td>
            <td class="border border-slate-300 px-3 py-2"><code>RANK() OVER (PARTITION BY category ORDER BY revenue DESC)</code></td>
            <td class="border border-slate-300 px-3 py-2"><code>DENSE_RANK</code> has no gaps on ties</td>
          </tr>
          <tr class="odd:bg-white even:bg-slate-50">
            <td class="border border-slate-300 px-3 py-2">Prev/next value</td>
            <td class="border border-slate-300 px-3 py-2">LAG / LEAD</td>
            <td class="border border-slate-300 px-3 py-2"><code>LAG(order_date) OVER (PARTITION BY user ORDER BY order_date)</code></td>
            <td class="border border-slate-300 px-3 py-2">Perfect for churn/retention gaps</td>
          </tr>
          <tr class="odd:bg-white even:bg-slate-50">
            <td class="border border-slate-300 px-3 py-2">Percentiles</td>
            <td class="border border-slate-300 px-3 py-2">PERCENTILE_CONT / APPROX_QUANTILES</td>
            <td class="border border-slate-300 px-3 py-2">Median, P90 by month</td>
            <td class="border border-slate-300 px-3 py-2">Use approximate on big data engines</td>
          </tr>
        </tbody>
      </table>
      </div>`
    },

    {
      title: "9) Common Anti-Patterns (and the Fix)",
      content: `<ul>
        <li><strong>SELECT *</strong> in dashboards → select named columns; reduce I/O and breakage.</li>
        <li><strong>Functions on WHERE columns</strong> (e.g., <code>DATE(created_at)</code>) → compute once in CTE or store derived column to enable pruning.</li>
        <li><strong>Joining fact → fact at raw grain</strong> → aggregate each fact to the join grain first.</li>
        <li><strong>ORDER BY without index/partition alignment</strong> → pre-sort or cache heavy sorts in a materialized table.</li>
      </ul>`
    },

    {
      title: "10) Productionizing BI SQL: Versioning, Tests, and Docs",
      content: `<p>Great analysts ship code like engineers.</p>
      <ul>
        <li><strong>Version control:</strong> keep SQL in Git; use branches + PR review.</li>
        <li><strong>Testing:</strong> assert row counts, null ratios, and primary/foreign key integrity (dbt tests or custom queries).</li>
        <li><strong>Docs:</strong> describe metrics, grains, and caveats in a shared catalog; add owners and SLA for refresh cadence.</li>
      </ul>`
    }
  ],

  conclusion: `<p>Becoming a top-tier <strong>BI analyst</strong> in 2025 means mastering <strong>window functions</strong>, writing readable <strong>CTEs</strong>, and applying <strong>performance tuning</strong> so insights arrive instantly. Use the cheatsheet and snippets here to build faster dashboards, accurate cohorts, and scalable revenue reporting—no matter if you’re on <em>PostgreSQL</em>, <em>Snowflake</em>, or <em>BigQuery</em>.</p>
  <p>Next steps: refactor one slow dashboard query using partitions and pre-aggregations, add rankings/percentiles with windows, and document your metrics. Your stakeholders—and your future self—will thank you.</p>`,

  relatedPosts: [
    "power-bi-vs-tableau-vs-looker-which-bi-tool-wins-2025",
    "ai-in-digital-marketing-prompting-content-ops-personalization-at-scale",
    "2025-digital-marketing-strategy-proven-frameworks-grow-traffic-revenue",
    "ai-for-frontend-developers-llms-generate-code-tests-docs-2025"
  ]
};

export default content;
