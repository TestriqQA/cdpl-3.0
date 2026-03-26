// /src/posts/data-science-vs-machine-learning-vs-artificial-intelligence.ts
// Content for: Data Science vs Machine Learning vs AI: The Clear Difference

export const content = {
  introduction: `<p>Data science, machine learning, and artificial intelligence are related but not the same. For learners at Cinute Digital Pvt Ltd (CDPL) and our partner teams, this article provides a crisp mental model, practical examples, and the skills and tools you need for each area. By the end, you will know which path to choose and how they work together in real products.</p>`,

  sections: [
    {
      title: "Simple Definitions",
      content: `<ul>
        <li><strong>Data Science:</strong> the end to end discipline of turning raw data into decisions. It covers collection, cleaning, analysis, modeling, and communication.</li>
        <li><strong>Machine Learning:</strong> a subset of AI that learns patterns from data to make predictions or decisions without hard coded rules.</li>
        <li><strong>Artificial Intelligence:</strong> systems that perform tasks that need human like intelligence such as perception, reasoning, and planning. ML is one way to build AI, not the only way.</li>
      </ul>
      <p>Think of it this way: <em>AI is the goal</em>, <em>ML is a set of techniques</em>, and <em>Data Science is the process and practice around data driven decisions</em>.</p>`,
      image: "/blog/section/ds-vs-ml-vs-ai/section_1.png"
    },
    {
      title: "How They Overlap",
      content: `<p>In many teams, a data scientist explores data and frames the problem, a machine learning engineer builds and ships a model, and the broader AI system wraps the model with logic, prompts, or rules to act in the product.</p>
      <ul>
        <li><strong>Data Science ↔ ML:</strong> data scientists often prototype ML models for insights and forecasting.</li>
        <li><strong>ML ↔ AI:</strong> ML models power AI features like recommendations or speech recognition.</li>
        <li><strong>Data Science ↔ AI:</strong> AI features still require analytics, monitoring, and A B tests to measure impact.</li>
      </ul>`,
      image: "/blog/section/ds-vs-ml-vs-ai/section_2.png"
    },
    {
      title: "Clear Differences at a Glance",
      content: `<div class="mx-auto px-4 sm:px-6 lg:px-8">
        <div class="overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full align-middle">
            <table class="min-w-full divide-y divide-slate-300 border border-slate-300">
              <thead class="bg-slate-50">
                <tr>
                  <th scope="col" class="sticky left-0 z-10 bg-slate-50 border-r border-slate-300 px-4 py-3 text-left text-sm font-semibold text-slate-900">Aspect</th>
                  <th scope="col" class="border-r border-slate-300 px-4 py-3 text-left text-sm font-semibold text-slate-900">Data Science</th>
                  <th scope="col" class="border-r border-slate-300 px-4 py-3 text-left text-sm font-semibold text-slate-900">Machine Learning</th>
                  <th scope="col" class="px-4 py-3 text-left text-sm font-semibold text-slate-900">Artificial Intelligence</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 bg-white">
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="sticky left-0 z-10 bg-white border-r border-slate-300 px-4 py-3 text-sm font-medium text-slate-900 whitespace-nowrap">Primary goal</td>
                  <td class="border-r border-slate-300 px-4 py-3 text-sm text-slate-700">Insights and decisions</td>
                  <td class="border-r border-slate-300 px-4 py-3 text-sm text-slate-700">Predictions from data</td>
                  <td class="px-4 py-3 text-sm text-slate-700">Human like intelligent behavior</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="sticky left-0 z-10 bg-white border-r border-slate-300 px-4 py-3 text-sm font-medium text-slate-900 whitespace-nowrap">Typical outputs</td>
                  <td class="border-r border-slate-300 px-4 py-3 text-sm text-slate-700">Reports, dashboards, experiments, baseline models</td>
                  <td class="border-r border-slate-300 px-4 py-3 text-sm text-slate-700">Trained models, features, evaluation metrics</td>
                  <td class="px-4 py-3 text-sm text-slate-700">Agents, assistants, perception and planning systems</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="sticky left-0 z-10 bg-white border-r border-slate-300 px-4 py-3 text-sm font-medium text-slate-900 whitespace-nowrap">Core skills</td>
                  <td class="border-r border-slate-300 px-4 py-3 text-sm text-slate-700">SQL, statistics, visualization, communication</td>
                  <td class="border-r border-slate-300 px-4 py-3 text-sm text-slate-700">Feature engineering, model tuning, MLOps basics</td>
                  <td class="px-4 py-3 text-sm text-slate-700">Reasoning, search, prompts, multimodal inputs, safety</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="sticky left-0 z-10 bg-white border-r border-slate-300 px-4 py-3 text-sm font-medium text-slate-900 whitespace-nowrap">Common tools</td>
                  <td class="border-r border-slate-300 px-4 py-3 text-sm text-slate-700">Python, pandas, SQL, BI tools</td>
                  <td class="border-r border-slate-300 px-4 py-3 text-sm text-slate-700">Scikit learn, XGBoost, PyTorch, TensorFlow</td>
                  <td class="px-4 py-3 text-sm text-slate-700">LLM frameworks, vector DB, RL, orchestration</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="sticky left-0 z-10 bg-white border-r border-slate-300 px-4 py-3 text-sm font-medium text-slate-900 whitespace-nowrap">Example use</td>
                  <td class="border-r border-slate-300 px-4 py-3 text-sm text-slate-700">Revenue analysis by region</td>
                  <td class="border-r border-slate-300 px-4 py-3 text-sm text-slate-700">Churn prediction model</td>
                  <td class="px-4 py-3 text-sm text-slate-700">Chat assistant that answers support queries</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>`,
      image: "/blog/section/ds-vs-ml-vs-ai/section_3.png"
    },
    {
      title: "Real Examples You Can Relate To",
      content: `<ul>
        <li><strong>Ecommerce search:</strong> data science analyses search funnels, ML ranks results, AI adds conversational search with a chat layer.</li>
        <li><strong>Fraud prevention:</strong> data science profiles risk, ML flags suspicious transactions, AI orchestrates multi step checks and moderator review.</li>
        <li><strong>Learning platform at CDPL:</strong> data science tracks learner progress, ML recommends lessons, AI tutors explain concepts with step by step hints.</li>
      </ul>`,
      image: "/blog/section/ds-vs-ml-vs-ai/section_4.png"
    },
    {
      title: "Skills and Tools by Role",
      content: `<h3>Data Scientist</h3>
      <ul>
        <li><strong>Skills:</strong> SQL, statistics, data cleaning, experimentation, storytelling.</li>
        <li><strong>Tools:</strong> Python, pandas, NumPy, Matplotlib or Plotly, notebooks, BI.</li>
      </ul>
      <h3>Machine Learning Engineer</h3>
      <ul>
        <li><strong>Skills:</strong> model training, feature pipelines, evaluation, deployment.</li>
        <li><strong>Tools:</strong> Scikit learn, PyTorch or TensorFlow, ML pipelines, Docker, basic MLOps.</li>
      </ul>
      <h3>AI Engineer</h3>
      <ul>
        <li><strong>Skills:</strong> LLM prompting, retrieval, tool use, agents, monitoring and safety.</li>
        <li><strong>Tools:</strong> vector databases, orchestration frameworks, evaluation harness, latency and cost analysis.</li>
      </ul>`,
      image: "/blog/section/ds-vs-ml-vs-ai/section_5.png"
    },
    {
      title: "A Quick Workflow Comparison",
      content: `<div class="code-block">
        <pre><code class="language-python"># Data science style: quick descriptive analysis
import pandas as pd
df = pd.read_csv("orders.csv")
summary = df.groupby("country")["amount"].agg(["count","mean","sum"]).reset_index()
print(summary.sort_values("sum", ascending=False).head())</code></pre>
        <p class="code-caption">Data science focuses on questions and insights</p>
      </div>
      <div class="code-block">
        <pre><code class="language-python"># Machine learning style: small supervised model
from sklearn.model_selection import train_test_split
from sklearn.metrics import roc_auc_score
from sklearn.ensemble import GradientBoostingClassifier
import pandas as pd

df = pd.read_csv("churn.csv")
X = df.drop("churn", axis=1)
y = df["churn"]

X_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2, random_state=42)
model = GradientBoostingClassifier()
model.fit(X_tr, y_tr)
pred = model.predict_proba(X_te)[:,1]
print("AUC:", roc_auc_score(y_te, pred))</code></pre>
        <p class="code-caption">ML focuses on predictive performance and validation</p>
      </div>`,
      image: "/blog/section/ds-vs-ml-vs-ai/section_6.png"
    },
    {
      title: "When to Use What",
      content: `<ul>
        <li><strong>Choose Data Science</strong> to understand what is happening and why, quantify impact, and guide decisions.</li>
        <li><strong>Choose ML</strong> when you need repeatable predictions such as risk scores or demand forecasts.</li>
        <li><strong>Choose AI</strong> when the task needs reasoning or multi step interactions such as chat support or agents.</li>
      </ul>
      <p>Most products blend all three. Start with data science to frame the problem, use ML for prediction, and add AI for interactive experiences.</p>`,
      image: "/blog/section/ds-vs-ml-vs-ai/section_7.png"
    },
    {
      title: "Study Paths for CDPL Learners",
      content: `<ul>
        <li><strong>Path 1 Data Science first:</strong> Python and pandas, SQL, visualization, experimentation. Ship two analysis projects.</li>
        <li><strong>Path 2 ML ready:</strong> add Scikit learn, model evaluation, and a small deployment.</li>
        <li><strong>Path 3 AI assistant:</strong> basics of LLMs and retrieval, build a small Q and A bot over your notes.</li>
      </ul>
      <p>Whichever path you choose, keep a clean portfolio with READMEs that state the problem, data, method, results, and a single compelling chart or demo.</p>`,
      image: "/blog/section/ds-vs-ml-vs-ai/section_8.png"
    },
    {
      title: "FAQ",
      content: `<p><strong>Is ML required for data science</strong> No, many high value data science projects are analytics and experimentation without ML.</p>
      <p><strong>Is AI only about large language models</strong> No, AI includes classic planning, search, and rule based systems. LLMs are a powerful recent approach.</p>
      <p><strong>Can one person do all three</strong> In small teams yes. In larger teams roles specialize to move faster and scale safely.</p>`,
      image: "/blog/section/ds-vs-ml-vs-ai/section_9.png"
    }
  ],

  conclusion: `<p>Data science, machine learning, and AI are complementary. Use data science to ask the right questions and measure results, use machine learning to predict at scale, and use AI to deliver intelligent experiences. With this mental model, CDPL learners and partner teams can plan skills, projects, and careers with clarity.</p>`,

  relatedPosts: [
    "what-is-data-science",
    "data-science-roadmap-skills-tools-projects-portfolio",
    "top-data-science-trends-2025-guide",
    "how-to-write-test-cases"
  ]
};

export default content;
