// Content for: What Is Data Science? Definition, Examples, Skills, and Career Paths

export const content = {
    introduction: `<p>Data science turns raw data into decisions that improve products and outcomes. For Cinute Digital Pvt Ltd (CDPL) learners and partner teams, this guide explains what data science is, how it works end to end, where it is used, and how to begin a career with the right skills and tools.</p>`,

    sections: [
        {
            title: "Data Science Definition",
            content: `<p>Data science is a multidisciplinary practice that combines statistics, programming, and domain knowledge to extract insights from data and support decisions. It spans data collection, cleaning, analysis, modeling, and communication so teams can act with confidence.</p>`,
            image: "/blog/section/what-is-data-science/section-1.png"
        },
        {
            title: "How Data Becomes Decisions",
            content: `<ol>
        <li><strong>Collect:</strong> logs, databases, spreadsheets, third party sources.</li>
        <li><strong>Clean and prepare:</strong> handle missing values, fix types, engineer features.</li>
        <li><strong>Explore:</strong> summarize data, visualize patterns, test hypotheses.</li>
        <li><strong>Model:</strong> train and evaluate models that predict or classify.</li>
        <li><strong>Explain and deliver:</strong> present insights, quantify impact, recommend actions.</li>
      </ol>
      <p>The output is not only a model. It is a decision with evidence and trade offs the business understands.</p>`,
            image: "/blog/section/what-is-data-science/section-2.png"
        },
        {
            title: "Real World Examples",
            content: `<ul>
        <li><strong>Churn prediction:</strong> identify users likely to cancel so the team can run retention offers.</li>
        <li><strong>Demand forecasting:</strong> plan inventory and staffing with fewer stockouts and idle time.</li>
        <li><strong>Fraud detection:</strong> flag suspicious transactions and reduce financial loss.</li>
        <li><strong>Recommendation systems:</strong> suggest content or products to increase engagement and sales.</li>
        <li><strong>A B testing:</strong> measure the impact of a new feature before global rollout.</li>
      </ul>`,
            image: "/blog/section/what-is-data-science/section-3.png"
        },
        {
            title: "Core Skills for Beginners",
            content: `<ul>
        <li><strong>Python:</strong> data handling with pandas and NumPy.</li>
        <li><strong>SQL:</strong> joins, aggregates, and window functions.</li>
        <li><strong>Math and stats:</strong> descriptive stats, probability, and linear models.</li>
        <li><strong>Visualization:</strong> clear charts and dashboards with Matplotlib or Plotly.</li>
        <li><strong>Communication:</strong> write short summaries with findings and next steps.</li>
      </ul>`,
            image: "/blog/section/what-is-data-science/section-4.png"
        },
        {
            title: "Common Tools You Will Use",
            content: `<ul>
        <li><strong>Environment:</strong> Jupyter or VS Code, Git and GitHub.</li>
        <li><strong>Libraries:</strong> pandas, NumPy, Scikit learn, Matplotlib.</li>
        <li><strong>Data sources:</strong> CSV, databases, and APIs.</li>
        <li><strong>Workflow:</strong> reproducible notebooks, requirements file, version control.</li>
      </ul>`,
            image: "/blog/section/what-is-data-science/section-5.png"
        },
        {
            title: "A Simple Walkthrough",
            content: `<div class="code-block">
        <pre><code class="language-python"># Load and summarize sales by country
import pandas as pd
df = pd.read_csv("sales.csv")
summary = df.groupby("country")["revenue"].agg(["count","mean","sum"]).reset_index()
print(summary.sort_values("sum", ascending=False).head())</code></pre>
        <p class="code-caption">A small pandas example that answers a real question</p>
      </div>`,
            image: "/blog/section/what-is-data-science/section-6.png"
        },
        {
            title: "Roles and Career Paths",
            content: `<ul>
        <li><strong>Data analyst:</strong> reporting and dashboarding with SQL and BI tools.</li>
        <li><strong>Data scientist:</strong> modeling, experimentation, and business insights.</li>
        <li><strong>Machine learning engineer:</strong> deploy and maintain models in production.</li>
        <li><strong>Analytics engineer:</strong> build data models and transform raw data for analysis.</li>
      </ul>
      <p>Start with analyst or junior data scientist, then specialize based on interests and strengths.</p>`,
            image: "/blog/section/what-is-data-science/section-7.png"
        },
        {
            title: "Common Myths",
            content: `<ul>
        <li><strong>You must be a math expert:</strong> foundations are enough to start. Depth grows with practice.</li>
        <li><strong>Only deep learning matters:</strong> many business wins come from clean data and simple models.</li>
        <li><strong>It is all coding:</strong> problem framing and communication are just as important.</li>
      </ul>`,
            image: "/blog/section/what-is-data-science/section-8.png"
        },
        {
            title: "How to Start Learning at CDPL",
            content: `<ul>
        <li><strong>Month 1:</strong> Python, pandas, SQL basics. Build two EDA notebooks.</li>
        <li><strong>Month 2:</strong> regression and classification with Scikit learn. One end to end project.</li>
        <li><strong>Month 3:</strong> time series or NLP basics. Second project and portfolio polish.</li>
      </ul>
      <p>Publish projects on GitHub with a short README that states the problem, dataset, method, results, and chart.</p>`,
            image: "/blog/section/what-is-data-science/section-9.png"
        },
        {
            title: "FAQ",
            content: `<p><strong>Is data science only for large companies</strong> No. Startups use it to find product market fit and grow efficiently.</p>
      <p><strong>Which language should I learn first</strong> Python for flexibility and the ecosystem around it.</p>
      <p><strong>Do I need advanced math</strong> Basic statistics and linear algebra concepts are enough to begin.</p>`,
            image: "/blog/section/what-is-data-science/section-10.png"
        }
    ],

    conclusion: `<p>Data science is the craft of turning data into decisions. With a clear workflow, the right tools, and practice on real questions, you can build skills that employers value. Follow the CDPL learning plan, ship small projects, and keep improving your communication so your insights lead to action.</p>`,

    relatedPosts: [
        "data-science-roadmap-skills-tools-projects-portfolio",
        "top-data-science-trends-2025-guide",
        "how-to-write-test-cases",
        "what-is-software-testing"
    ]
};

export default content;
