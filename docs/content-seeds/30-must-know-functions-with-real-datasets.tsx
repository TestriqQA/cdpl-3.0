// /src/posts/30-must-know-functions-with-real-datasets.ts
// Content for: Pandas Tutorial: 30 Must-Know Functions With Real Datasets

export const content = {
    introduction: `<p>Pandas is the workhorse of data analysis in Python. For Cinute Digital Pvt Ltd (CDPL) learners and partner teams, this tutorial covers the 30 functions that deliver most day to day value. Each snippet uses realistic mini datasets so you can copy, run, and adapt to your projects.</p>
  <p><strong>Tip:</strong> Keep a notebook open and paste each block to build your own cheat sheet.</p>`,

    sections: [
        {
            title: "Setup and Sample Data",
            content: `<div class="code-block">
<pre><code class="language-python">import pandas as pd

# Orders dataset
orders = pd.DataFrame({
    "order_id":[101,102,103,104,105],
    "user_id":[1,1,2,3,2],
    "country":["IN","IN","AE","IN","AE"],
    "amount":[1200,800,560,1500,300],
    "order_date": pd.to_datetime(["2025-10-01","2025-10-02","2025-10-02","2025-10-03","2025-10-03"])
})

# Users dataset
users = pd.DataFrame({
    "user_id":[1,2,3],
    "name":["Asha","Bilal","Chirag"],
    "segment":["pro","basic","pro"]
})</code></pre>
<p class="code-caption">Two small but realistic tables we will reuse through the tutorial</p>
</div>`
        },

        {
            title: "Import, Inspect, and Save",
            content: `<ol>
<li><strong>read_csv</strong> load a CSV</li>
</ol>
<div class="code-block"><pre><code class="language-python">df = pd.read_csv("sales.csv")  # delimiter, dtype, parse_dates are useful args</code></pre></div>

<ol start="2">
<li><strong>to_csv</strong> save a CSV</li>
</ol>
<div class="code-block"><pre><code class="language-python">orders.to_csv("orders_out.csv", index=False)</code></pre></div>

<ol start="3">
<li><strong>head</strong> and <strong>tail</strong> quick peek</li>
</ol>
<div class="code-block"><pre><code class="language-python">orders.head(3); orders.tail(2)</code></pre></div>

<ol start="4">
<li><strong>info</strong> schema and nulls</li>
</ol>
<div class="code-block"><pre><code class="language-python">orders.info()</code></pre></div>

<ol start="5">
<li><strong>describe</strong> stats summary</li>
</ol>
<div class="code-block"><pre><code class="language-python">orders.describe(numeric_only=True)</code></pre></div>`
        },

        {
            title: "Selecting and Filtering",
            content: `<ol>
<li><strong>loc</strong> label based select</li>
</ol>
<div class="code-block"><pre><code class="language-python">orders.loc[orders["country"]=="IN", ["order_id","amount"]]</code></pre></div>

<ol start="7">
<li><strong>iloc</strong> position based select</li>
</ol>
<div class="code-block"><pre><code class="language-python">orders.iloc[:3, :2]</code></pre></div>

<ol start="8">
<li><strong>query</strong> readable filters</li>
</ol>
<div class="code-block"><pre><code class="language-python">orders.query("amount &gt;= 800 and country == 'IN'")</code></pre></div>

<ol start="9">
<li><strong>isin</strong> membership</li>
</ol>
<div class="code-block"><pre><code class="language-python">orders[orders["country"].isin(["IN","AE"])]</code></pre></div>

<ol start="10">
<li><strong>between</strong> numeric ranges</li>
</ol>
<div class="code-block"><pre><code class="language-python">orders[orders["amount"].between(500,1200)]</code></pre></div>`
        },

        {
            title: "Transformation and Features",
            content: `<ol>
<li><strong>assign</strong> create columns</li>
</ol>
<div class="code-block"><pre><code class="language-python">aug = orders.assign(gst=lambda d: d.amount * 0.18, total=lambda d: d.amount * 1.18)</code></pre></div>

<ol start="12">
<li><strong>astype</strong> convert types</li>
</ol>
<div class="code-block"><pre><code class="language-python">orders["user_id"] = orders["user_id"].astype("int64")</code></pre></div>

<ol start="13">
<li><strong>replace</strong> value mapping</li>
</ol>
<div class="code-block"><pre><code class="language-python">orders["country"] = orders["country"].replace({"IN":"India","AE":"UAE"})</code></pre></div>

<ol start="14">
<li><strong>cut</strong> and <strong>qcut</strong> binning</li>
</ol>
<div class="code-block"><pre><code class="language-python">orders["amount_bucket"] = pd.qcut(orders["amount"], q=3, labels=["low","med","high"])</code></pre></div>

<ol start="15">
<li><strong>apply</strong> row or column wise logic</li>
</ol>
<div class="code-block"><pre><code class="language-python">orders["flag_big"] = orders["amount"].apply(lambda x: x &gt;= 1000)</code></pre></div>`
        },

        {
            title: "Missing Data and Cleaning",
            content: `<ol>
<li><strong>isna</strong> and <strong>notna</strong></li>
</ol>
<div class="code-block"><pre><code class="language-python">orders.isna().sum()</code></pre></div>

<ol start="17">
<li><strong>fillna</strong> impute values</li>
</ol>
<div class="code-block"><pre><code class="language-python">orders["amount"] = orders["amount"].fillna(orders["amount"].median())</code></pre></div>

<ol start="18">
<li><strong>dropna</strong> remove null rows</li>
</ol>
<div class="code-block"><pre><code class="language-python">orders = orders.dropna(subset=["amount"])</code></pre></div>

<ol start="19">
<li><strong>drop_duplicates</strong> deduplicate</li>
</ol>
<div class="code-block"><pre><code class="language-python">orders = orders.drop_duplicates(["order_id"])</code></pre></div>

<ol start="20">
<li><strong>rename</strong> readable columns</li>
</ol>
<div class="code-block"><pre><code class="language-python">orders = orders.rename(columns={"order_date":"date"})</code></pre></div>`
        },

        {
            title: "Join, Group, and Pivot",
            content: `<ol>
<li><strong>merge</strong> relational join</li>
</ol>
<div class="code-block"><pre><code class="language-python">joined = orders.merge(users, on="user_id", how="left")</code></pre></div>

<ol start="22">
<li><strong>groupby</strong> aggregate by keys</li>
</ol>
<div class="code-block"><pre><code class="language-python">joined.groupby("country")["amount"].agg(["count","mean","sum"]).reset_index()</code></pre></div>

<ol start="23">
<li><strong>pivot_table</strong> quick reporting</li>
</ol>
<div class="code-block"><pre><code class="language-python">pd.pivot_table(joined, values="amount", index="country", columns="segment", aggfunc="sum", fill_value=0)</code></pre></div>

<ol start="24">
<li><strong>melt</strong> unpivot for tidy data</li>
</ol>
<div class="code-block"><pre><code class="language-python">wide = pd.DataFrame({"city":["Mumbai","Dubai"],"Q1":[10,8],"Q2":[12,11]})
tidy = wide.melt(id_vars="city", var_name="quarter", value_name="sales")</code></pre></div>

<ol start="25">
<li><strong>crosstab</strong> frequency table</li>
</ol>
<div class="code-block"><pre><code class="language-python">pd.crosstab(joined["country"], joined["segment"])</code></pre></div>`
        },

        {
            title: "Dates, Windows, and Sorting",
            content: `<ol>
<li><strong>to_datetime</strong> parse dates</li>
</ol>
<div class="code-block"><pre><code class="language-python">orders["date"] = pd.to_datetime(orders["order_date"])</code></pre></div>

<ol start="27">
<li><strong>dt</strong> accessors for features</li>
</ol>
<div class="code-block"><pre><code class="language-python">orders["dow"] = orders["date"].dt.day_name()</code></pre></div>

<ol start="28">
<li><strong>sort_values</strong> ordering</li>
</ol>
<div class="code-block"><pre><code class="language-python">orders.sort_values(["amount","date"], ascending=[False, True])</code></pre></div>

<ol start="29">
<li><strong>rolling</strong> window metrics</li>
</ol>
<div class="code-block"><pre><code class="language-python">orders.sort_values("date", inplace=True)
orders["rolling_total"] = orders["amount"].rolling(window=2).sum()</code></pre></div>

<ol start="30">
<li><strong>nlargest</strong> and <strong>nsmallest</strong> top k</li>
</ol>
<div class="code-block"><pre><code class="language-python">orders.nlargest(3, "amount")[["order_id","amount"]]</code></pre></div>`
        },

        {
            title: "Mini Project: Daily Revenue by Country and Segment",
            content: `<p>Combine several functions to answer a realistic question.</p>
<div class="code-block"><pre><code class="language-python">report = (
    orders.merge(users, on="user_id", how="left")
          .assign(date=lambda d: pd.to_datetime(d["order_date"]))
          .groupby(["date","country","segment"], as_index=False)["amount"]
          .sum()
)

# Pivot to a dashboard friendly view
dashboard = pd.pivot_table(
    report, values="amount",
    index=["date","country"], columns="segment",
    aggfunc="sum", fill_value=0
).reset_index()

print(dashboard.head())</code></pre>
<p class="code-caption">From raw orders to a tidy report you can chart in seconds</p>
</div>`
        },

        {
            title: "Common Pitfalls and Quick Fixes",
            content: `<ul>
<li><strong>Wrong dtype for ids or codes</strong> use string types to keep leading zeros.</li>
<li><strong>Silent date parsing issues</strong> always run pd.to_datetime with format if known.</li>
<li><strong>Unexpected duplicates on merge</strong> check key uniqueness with value_counts before joining.</li>
<li><strong>Groupby returning index</strong> use as_index=False or reset_index for flat tables.</li>
<li><strong>Chained assignment warnings</strong> prefer .loc for explicit assignment.</li>
</ul>`
        },

        {
            title: "Practice Datasets You Can Try",
            content: `<ul>
<li>Orders and users from your project database export.</li>
<li>Retail sales by month from a public government portal.</li>
<li>Website events CSV from analytics tools.</li>
<li>Helpdesk tickets with status and resolution time.</li>
</ul>
<p>Create a folder with raw, interim, and processed CSVs to mirror a simple data workflow.</p>`
        }
    ],

    conclusion: `<p>You now have a compact toolkit of 30 Pandas functions that handle most everyday analysis. Keep this page as a reference, and turn the mini project into a dashboard or a report. Consistent practice with real data is the fastest way to mastery.</p>`,

    relatedPosts: [
        "what-is-data-science",
        "data-science-roadmap-skills-tools-projects-portfolio",
        "top-data-science-trends-2025-guide",
        "how-to-write-test-cases"
    ]
};

export default content;
