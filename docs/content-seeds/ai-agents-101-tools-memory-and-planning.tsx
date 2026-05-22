// /src/posts/ai-agents-101-tools-memory-and-planning.ts
// Content for: AI Agents 101: Tools, Memory, and Planning

export const content = {
    introduction: `<p><strong>AI agents</strong> are systems that decide what to do next, call tools, remember context, and plan multi step tasks toward a goal. For learners at Cinute Digital Pvt Ltd (CDPL) and partner teams, this guide explains core concepts with code patterns you can run, plus safety and evaluation so agents help rather than hinder production work.</p>`,

    sections: [
        {
            title: "What Is an AI Agent",
            content: `<p>An AI agent is a loop: observe state, reason about options, act with a tool, and update memory before repeating. Unlike a single prompt, agents chain steps and learn from context. A practical agent needs three pillars: <strong>tools</strong> to take actions, <strong>memory</strong> to keep relevant facts, and <strong>planning</strong> to choose the next step.</p>`,
            image: "/blog/section/ai-agents-101-tools-memory-and-planning/section-1.png"
        },
        {
            title: "Agent Architecture at a Glance",
            content: `<ul>
        <li><strong>Inputs:</strong> user goal, environment state, policies and constraints.</li>
        <li><strong>Reasoning:</strong> selection of next action using prompts, search, or rules.</li>
        <li><strong>Tools:</strong> functions for search, database, code execution, email, or business APIs.</li>
        <li><strong>Memory:</strong> short term scratchpad, long term vector store, and episodic logs.</li>
        <li><strong>Planner:</strong> strategies like ReAct, task decomposition, or graph based workflows.</li>
        <li><strong>Evaluator:</strong> quality, cost, latency, and safety checks with fallbacks.</li>
      </ul>`,
            image: "/blog/section/ai-agents-101-tools-memory-and-planning/section-2.png"
        },
        {
            title: "Tools and Function Calling",
            content: `<p>Tools turn thoughts into actions. Define a clear schema and let the model pick a function and arguments. Keep tools idempotent and observable.</p>
<div class="code-block">
<pre><code class="language-python"># Minimal function calling style example
import json

TOOLS = {
  "search_web": {"description": "Search the web", "args": {"query": "string"}},
  "get_weather": {"description": "Weather by city", "args": {"city": "string"}}
}

def call_tool(name, args):
  if name == "search_web":
    return f"Top result for {args['query']}"
  if name == "get_weather":
    return f"{args['city']}: 28C and clear"
  return "Unknown tool"

def agent_step(state, llm):
  # state contains messages and scratchpad
  tool_suggestion = llm.pick_tool(TOOLS, state)  # pseudo API
  result = call_tool(tool_suggestion["name"], tool_suggestion["args"])
  state["scratchpad"].append({"tool": tool_suggestion["name"], "result": result})
  return state</code></pre>
<p class="code-caption">Give tools strong names, concise descriptions, and strict argument schemas</p>
</div>`,
            image: "/blog/section/ai-agents-101-tools-memory-and-planning/section-3.png"
        },
        {
            title: "Memory: Short Term and Long Term",
            content: `<p><strong>Short term memory</strong> lives in the conversation or scratchpad for the current task. <strong>Long term memory</strong> stores reusable knowledge in a vector database for retrieval augmented generation.</p>
<ul>
  <li><strong>Short term:</strong> chain of thought summary, last tool results, current plan.</li>
  <li><strong>Long term:</strong> docs, SOPs, past tickets, user preferences, and embeddings.</li>
</ul>
<div class="code-block">
<pre><code class="language-python"># Simple vector memory with FAISS like pattern (pseudo)
from sklearn.feature_extraction.text import TfidfVectorizer
import numpy as np

docs = ["Refund policy v3", "SLA for enterprise", "How to export reports"]
V = TfidfVectorizer().fit_transform(docs)

def retrieve(q, k=2):
  qv = TfidfVectorizer().fit(docs).transform([q])  # demo only
  scores = (V @ qv.T).toarray().ravel()
  idx = np.argsort(scores)[::-1][:k]
  return [docs[i] for i in idx]</code></pre>
<p class="code-caption">In production use a real embedding model and FAISS, Milvus, or a managed vector DB</p>
</div>`,
            image: "/blog/section/ai-agents-101-tools-memory-and-planning/section-4.png"
        },
        {
            title: "Planning Strategies That Work",
            content: `<h3>ReAct planning</h3>
<p>Alternate between reasoning and action. The agent thinks, selects a tool, observes results, and iterates until done.</p>
<h3>Task decomposition</h3>
<p>Break a large goal into smaller subtasks with milestones and owners. Great for workflows like data pipelines or content production.</p>
<h3>Routing and graphs</h3>
<p>Use decision nodes to route to specialized tools or sub agents. Useful when you have different skills like search, math, and database access.</p>
<div class="code-block">
<pre><code class="language-text">User goal: "Create a weekly sales summary for India and UAE"

Plan:
1) Retrieve last 7 days of orders
2) Aggregate by country and product
3) Generate chart and draft email
4) Ask for confirmation before sending</code></pre>
<p class="code-caption">Keep plans explicit and auditable for users and reviewers</p>
</div>`,
            image: "/blog/section/ai-agents-101-tools-memory-and-planning/section-5.png"
        },
        {
            title: "RAG for Agents",
            content: `<p><strong>Retrieval Augmented Generation</strong> grounds the agent in your knowledge. Retrieve the top passages per step and show citations. Cache frequent lookups to reduce cost and latency.</p>
<ul>
  <li>Chunk size tuned for your doc types</li>
  <li>Hybrid search with dense and keyword</li>
  <li>Citations and confidence in every answer</li>
</ul>`,
            image: "/blog/section/ai-agents-101-tools-memory-and-planning/section-6.png"
        },
        {
            title: "Guardrails and Safety",
            content: `<ul>
        <li><strong>Input filters:</strong> PII detection, allowlists for domains and tools.</li>
        <li><strong>Output checks:</strong> toxicity, hallucination risk, and red team prompts.</li>
        <li><strong>Tool policies:</strong> rate limits, dry run mode, and human approval for high risk actions.</li>
        <li><strong>Observability:</strong> logs, traces, metrics, and cost dashboards.</li>
      </ul>`,
            image: "/blog/section/ai-agents-101-tools-memory-and-planning/section-7.png"
        },
        {
            title: "Evaluate Agents Like a Product",
            content: `<p>Use a benchmark of tasks and hidden test cases. Track success rate, steps to completion, cost, latency, and user ratings.</p>
<div class="code-block">
<pre><code class="language-python"># Tiny evaluator sketch
tests = [
  {"goal": "Summarize refund policy", "oracle": "mentions window and method"},
  {"goal": "Draft weekly sales email", "oracle": "has totals and countries"}
]

def evaluate(agent, tests):
  scores = []
  for t in tests:
    out = agent.run(t["goal"])
    ok = all(kw in out.lower() for kw in t["oracle"].split())
    scores.append(int(ok))
  return sum(scores) / len(scores)</code></pre>
<p class="code-caption">Start simple, then add human review and rubrics per use case</p>
</div>`,
            image: "/blog/section/ai-agents-101-tools-memory-and-planning/section-8.png"
        },
        {
            title: "Real World Patterns",
            content: `<ul>
        <li><strong>Support copilot:</strong> retrieve policy, summarize conversation, and propose replies with citations.</li>
        <li><strong>Data analyst agent:</strong> query warehouse, explain metrics, and generate charts with approval.</li>
        <li><strong>QA workflow agent:</strong> run tests, open issues with evidence, and post results to a channel.</li>
      </ul>`,
            image: "/blog/section/ai-agents-101-tools-memory-and-planning/section-9.png"
        },
        {
            title: "Quick Start Checklist for CDPL Learners",
            content: `<ol>
        <li>Pick one narrow use case with clear success criteria.</li>
        <li>Define 3 to 5 safe tools with strict schemas.</li>
        <li>Add short term scratchpad and a small vector memory.</li>
        <li>Start with ReAct planning and visible step by step logs.</li>
        <li>Ship behind a flag, collect feedback, and iterate weekly.</li>
      </ol>`,
            image: "/blog/section/ai-agents-101-tools-memory-and-planning/section-10.png"
        }
    ],

    conclusion: `<p>AI agents are most effective when tools are well designed, memory is relevant and concise, and planning is transparent. Start with a small workflow, add guardrails and evaluation, and iterate in public with your team. With this approach, CDPL learners and partner teams can ship agents that are useful, reliable, and safe.</p>`,

    relatedPosts: [
        "what-is-artificial-intelligence",
        "data-science-vs-machine-learning-vs-artificial-intelligence",
        "top-data-science-trends-2025-guide",
        "what-is-data-science"
    ]
};

export default content;
