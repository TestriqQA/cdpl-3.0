// /src/posts/what-is-artificial-intelligence.ts
// Content for: What Is Artificial Intelligence? Types, Examples, and Use Cases

export const content = {
  introduction: `<p><strong>Artificial intelligence (AI)</strong> is software that performs tasks we associate with human intelligence such as understanding language, recognizing images, making decisions, and creating content. This CDPL guide explains <em>what AI is</em>, the <em>types of artificial intelligence</em>, <em>AI examples</em> you already use, and <em>use cases</em> that deliver value in products.</p>`,

  sections: [
    {
      title: "What Is Artificial Intelligence",
      content: `<p>Artificial intelligence is the field of building systems that can perceive, reason, and act toward a goal. Modern AI often uses <strong>machine learning</strong> and <strong>deep learning</strong> to learn from data, while classic approaches use <strong>symbolic rules</strong> and knowledge graphs. In practice, teams blend methods to meet accuracy, speed, and safety requirements.</p>`,
      image: "/blog/section/what-is-artificial-intelligence/section-1.png"
    },
    {
      title: "Types of Artificial Intelligence",
      content: `<h3>By technique</h3>
      <ul>
        <li><strong>Symbolic AI:</strong> hand written rules and knowledge bases for deterministic reasoning and planning.</li>
        <li><strong>Machine Learning:</strong> models that learn patterns from data to predict outcomes like churn or demand.</li>
        <li><strong>Deep Learning:</strong> neural networks that power vision, speech, and language at scale.</li>
        <li><strong>Generative AI:</strong> models that create text, images, code, or audio from prompts.</li>
      </ul>
      <h3>By capability</h3>
      <ul>
        <li><strong>Narrow AI:</strong> excels at a single task such as speech to text.</li>
        <li><strong>General AI:</strong> a broad research goal of human level flexibility (not available today).</li>
      </ul>`,
      image: "/blog/section/what-is-artificial-intelligence/section-2.png"
    },
    {
      title: "AI vs Machine Learning vs Deep Learning",
      content: `<p><strong>AI</strong> is the umbrella goal of intelligent behavior. <strong>Machine learning</strong> is a set of algorithms that learn from data. <strong>Deep learning</strong> is a subset of ML that uses neural networks. Many AI features are powered by ML or deep learning, but rule based AI still matters where determinism and auditability are essential.</p>`,
      image: "/blog/section/what-is-artificial-intelligence/section-3.png"
    },
    {
      title: "How AI Systems Work",
      content: `<ol>
        <li><strong>Perception:</strong> read inputs such as text, images, audio, or sensor streams.</li>
        <li><strong>Understanding:</strong> extract structure and meaning, for example entities, intents, or objects.</li>
        <li><strong>Decision:</strong> choose actions using rules, predictions, prompts, or search.</li>
        <li><strong>Action:</strong> respond with an answer, a recommendation, or a next step in a workflow.</li>
        <li><strong>Feedback:</strong> log outcomes, evaluate quality, and iterate with safe updates.</li>
      </ol>
      <p>Production AI also needs observability, red teaming, rate limits, and fallback behavior when confidence is low.</p>`,
      image: "/blog/section/what-is-artificial-intelligence/section-4.png"
    },
    {
      title: "Everyday AI Examples",
      content: `<ul>
        <li><strong>Recommendations:</strong> personalized videos, articles, or products based on behavior.</li>
        <li><strong>Smart search:</strong> query understanding, synonyms, and semantic ranking.</li>
        <li><strong>Language assistants:</strong> summarization, translation, and drafting.</li>
        <li><strong>Vision:</strong> face blur, document OCR, and defect detection on assembly lines.</li>
        <li><strong>Speech:</strong> live captions and call transcription.</li>
      </ul>`,
      image: "/blog/section/what-is-artificial-intelligence/section-5.png"
    },
    {
      title: "AI Use Cases by Industry",
      content: `<div class="grid-usecases">
        <h4>Education and EdTech</h4>
        <ul>
          <li>Personalized learning paths and quiz generation with explanations.</li>
          <li>Automated grading assistance and feedback summaries.</li>
          <li>Question answering over course notes with citations.</li>
        </ul>
        <h4>Ecommerce</h4>
        <ul>
          <li>Search and recommendation, dynamic pricing, and inventory forecasting.</li>
          <li>Fraud detection and return triage.</li>
        </ul>
        <h4>Finance</h4>
        <ul>
          <li>Risk scoring, anomaly detection, and KYC automation.</li>
          <li>Customer assistants for routine queries.</li>
        </ul>
        <h4>Healthcare</h4>
        <ul>
          <li>Image assisted diagnostics and triage chatbots.</li>
          <li>Clinical note summarization and coding support.</li>
        </ul>
        <h4>Operations</h4>
        <ul>
          <li>Demand forecasting, logistics routing, and document processing.</li>
          <li>RPA with AI checks and human in the loop review.</li>
        </ul>
      </div>`,
      image: "/blog/section/what-is-artificial-intelligence/section-6.png"
    },
    {
      title: "Benefits and Risks",
      content: `<h3>Benefits</h3>
      <ul>
        <li>Faster decisions, reduced costs, and always on support.</li>
        <li>Better personalization and higher conversion.</li>
        <li>Automation of repetitive, error prone work.</li>
      </ul>
      <h3>Risks</h3>
      <ul>
        <li>Bias and fairness issues from skewed training data.</li>
        <li>Privacy and security concerns for sensitive inputs.</li>
        <li>Hallucinations or overconfidence in generative systems.</li>
      </ul>
      <p>Mitigate with data governance, evaluations, human oversight, and clear escalation paths.</p>`,
      image: "/blog/section/what-is-artificial-intelligence/section-7.png"
    },
    {
      title: "Common AI Techniques",
      content: `<div class="mx-auto px-4 sm:px-6 lg:px-8">
        <div class="overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full align-middle">
            <table class="min-w-full divide-y divide-slate-300 border border-slate-300">
              <thead class="bg-slate-50">
                <tr>
                  <th scope="col" class="sticky left-0 z-10 bg-slate-50 border-r border-slate-300 px-4 py-3 text-left text-sm font-semibold text-slate-900">Technique</th>
                  <th scope="col" class="border-r border-slate-300 px-4 py-3 text-left text-sm font-semibold text-slate-900">What it does</th>
                  <th scope="col" class="border-r border-slate-300 px-4 py-3 text-left text-sm font-semibold text-slate-900">Typical tools</th>
                  <th scope="col" class="px-4 py-3 text-left text-sm font-semibold text-slate-900">Example</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 bg-white">
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="sticky left-0 z-10 bg-white border-r border-slate-300 px-4 py-3 text-sm font-medium text-slate-900 whitespace-nowrap">Classification</td>
                  <td class="border-r border-slate-300 px-4 py-3 text-sm text-slate-700">Assign a label to an input</td>
                  <td class="border-r border-slate-300 px-4 py-3 text-sm text-slate-700">Scikit learn, PyTorch</td>
                  <td class="px-4 py-3 text-sm text-slate-700">Spam vs not spam</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="sticky left-0 z-10 bg-white border-r border-slate-300 px-4 py-3 text-sm font-medium text-slate-900 whitespace-nowrap">Regression</td>
                  <td class="border-r border-slate-300 px-4 py-3 text-sm text-slate-700">Predict a number</td>
                  <td class="border-r border-slate-300 px-4 py-3 text-sm text-slate-700">Scikit learn, XGBoost</td>
                  <td class="px-4 py-3 text-sm text-slate-700">Demand forecasting</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="sticky left-0 z-10 bg-white border-r border-slate-300 px-4 py-3 text-sm font-medium text-slate-900 whitespace-nowrap">NLP</td>
                  <td class="border-r border-slate-300 px-4 py-3 text-sm text-slate-700">Understand or generate text</td>
                  <td class="border-r border-slate-300 px-4 py-3 text-sm text-slate-700">Tokenizers, LLM frameworks</td>
                  <td class="px-4 py-3 text-sm text-slate-700">Summarize a support ticket</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="sticky left-0 z-10 bg-white border-r border-slate-300 px-4 py-3 text-sm font-medium text-slate-900 whitespace-nowrap">Vision</td>
                  <td class="border-r border-slate-300 px-4 py-3 text-sm text-slate-700">Understand images or video</td>
                  <td class="border-r border-slate-300 px-4 py-3 text-sm text-slate-700">OpenCV, PyTorch</td>
                  <td class="px-4 py-3 text-sm text-slate-700">Defect detection</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="sticky left-0 z-10 bg-white border-r border-slate-300 px-4 py-3 text-sm font-medium text-slate-900 whitespace-nowrap">Recommendation</td>
                  <td class="border-r border-slate-300 px-4 py-3 text-sm text-slate-700">Rank items for a user</td>
                  <td class="border-r border-slate-300 px-4 py-3 text-sm text-slate-700">LightFM, implicit</td>
                  <td class="px-4 py-3 text-sm text-slate-700">Product suggestions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>`,
      image: "/blog/section/what-is-artificial-intelligence/section-8.png"
    },
    {
      title: "Minimal Working Example",
      content: `<div class="code-block">
        <pre><code class="language-python"># Tiny text classifier (toy)
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import make_pipeline

X = ["great course", "loved the lesson", "bad audio", "confusing topic"]
y = [1,1,0,0]

model = make_pipeline(TfidfVectorizer(), LogisticRegression())
model.fit(X, y)
print(model.predict(["great lesson but a bit long"]))</code></pre>
        <p class="code-caption">Run locally to see an end to end AI pattern in minutes</p>
      </div>`,
      image: "/blog/section/what-is-artificial-intelligence/section-9.png"
    },
    {
      title: "What Stack Teams Use",
      content: `<ul>
        <li><strong>Core:</strong> Python, NumPy, pandas, Scikit learn, PyTorch or TensorFlow.</li>
        <li><strong>LLM building blocks:</strong> tokenizers, vector databases, retrieval, prompts, evaluation harness, content filters.</li>
        <li><strong>Ops:</strong> experiment tracking, model registry, monitoring, cost and latency dashboards.</li>
      </ul>`,
      image: "/blog/section/what-is-artificial-intelligence/section-10.png"
    },
    {
      title: "How to Start Learning at CDPL",
      content: `<ol>
        <li><strong>Month 1:</strong> Python and data analysis. Two notebooks on text and tables.</li>
        <li><strong>Month 2:</strong> classic ML with Scikit learn. Ship a small classifier and a regression model.</li>
        <li><strong>Month 3:</strong> intro to LLMs and retrieval. Build a Q and A bot over your notes with basic evaluations.</li>
      </ol>
      <p>Keep scope small, measure quality, and write short READMEs so mentors can review quickly.</p>`,
      image: "/blog/section/what-is-artificial-intelligence/section-11.png"
    },
    {
      title: "FAQ",
      content: `<p><strong>Is AI the same as machine learning</strong> No. ML is one approach inside AI. AI also includes rules and planning.</p>
      <p><strong>Does AI replace jobs</strong> AI changes workflows. It automates repetitive tasks and increases demand for roles that design, evaluate, and govern AI systems.</p>
      <p><strong>Do I need advanced math</strong> Not to start. Begin with Python, data handling, and a few ML projects. Add math depth as you grow.</p>`,
      image: "/blog/section/what-is-artificial-intelligence/section-12.png"
    }
  ],

  conclusion: `<p>AI is a practical toolkit for building intelligent behavior into software. Use this guide to explain what AI is, pick the right type for your use case, and plan a safe rollout. With steady practice, CDPL learners and partner teams can design AI features that are useful, reliable, and responsible.</p>`,

  relatedPosts: [
    "data-science-vs-machine-learning-vs-artificial-intelligence",
    "what-is-data-science",
    "top-data-science-trends-2025-guide",
    "how-to-write-test-cases"
  ]
};

export default content;
