// Content for: What Is Software Testing? Types, Levels, and Examples

export const content = {
  introduction: `<p>Software testing is the practice of evaluating a system to find defects, verify requirements, and increase confidence in quality before and after release. At Cinute Digital Pvt Ltd (CDPL), a clear testing strategy reduces risk, accelerates delivery, and builds trust with learners and enterprise clients.</p>
  
  <p>From quick unit checks to realistic end-to-end scenarios, testing spans many techniques and levels. This guide clarifies the essentials, testing <em>types</em> vs <em>levels</em>, where each fits in the SDLC, and how to start with practical examples you can apply today.</p>`,

  sections: [
    {
      title: "Fundamentals: Purpose, Principles, and the SDLC",
      content: `<p><strong>Purpose:</strong> prevent defects, detect regressions, document expected behavior, and provide actionable feedback. Testing does not prove the absence of bugs, it increases confidence that critical risks are controlled.</p>
      <h3>Core Principles</h3>
      <ul>
        <li><strong>Risk-based:</strong> test deeper where impact and probability are higher.</li>
        <li><strong>Early and continuous:</strong> shift-left and automate feedback loops.</li>
        <li><strong>Context-driven:</strong> tailor the strategy to product, team, and constraints.</li>
        <li><strong>Balanced approach:</strong> blend manual exploration with automation.</li>
      </ul>
      <h3>Testing Across the SDLC</h3>
      <p>Plan strategy during requirements, design tests alongside development, automate critical paths in CI/CD, and monitor in production with synthetic and observability-led checks.</p>`,
      image: "/blog/section/what-is-software-testing-section-1.jpg"
    },
    {
      title: "Testing Types: Functional vs Non-Functional",
      content: `<p>Testing <em>types</em> describe <strong>what</strong> you validate.</p>
      <h3>Functional Testing</h3>
      <ul>
        <li><strong>Unit Tests:</strong> verify small, isolated functions or classes.</li>
        <li><strong>Integration Tests:</strong> validate modules working together, for example service plus database.</li>
        <li><strong>API Testing:</strong> request and response, contracts, error paths, and authentication.</li>
        <li><strong>UI and End-to-End:</strong> user workflows in browsers and devices.</li>
        <li><strong>Regression:</strong> ensure existing features still work after change.</li>
      </ul>
      <h3>Non-Functional Testing</h3>
      <ul>
        <li><strong>Performance and Load:</strong> response times, throughput, scalability.</li>
        <li><strong>Security:</strong> authentication, authorization, OWASP risks, dependency vulnerabilities.</li>
        <li><strong>Usability and Accessibility:</strong> WCAG, keyboard navigation, ARIA.</li>
        <li><strong>Reliability and Resilience:</strong> fault injection and chaos scenarios.</li>
        <li><strong>Compatibility:</strong> devices, browsers, operating systems, network conditions.</li>
      </ul>`,
      image: "/blog/section/what-is-software-testing-section-2.jpg"
    },
    {
      title: "Testing Levels: Unit to Integration to System to Acceptance",
      content: `<p>Testing <em>levels</em> describe <strong>where</strong> you validate in the architecture.</p>
      <ol>
        <li><strong>Unit:</strong> smallest testable parts, fast and deterministic.</li>
        <li><strong>Integration:</strong> contracts between modules and services, including database and queues.</li>
        <li><strong>System:</strong> the whole application in a production-like environment.</li>
        <li><strong>Acceptance:</strong> business-oriented checks against requirements.</li>
      </ol>
      <div class="code-block">
        <pre><code class="language-ts">import { sum } from "./math";
// Simple unit test with Vitest or Jest
test("sum adds numbers", () => {
  expect(sum(2, 3)).toBe(5);
});</code></pre>
        <p class="code-caption">Example unit test verifying a pure function</p>
      </div>`,
      image: "/blog/section/what-is-software-testing-section-3.jpg"
    },
    {
      title: "Best Practices: Strategy, Automation, and CI/CD",
      content: `<ul>
        <li><strong>Define a test strategy:</strong> risks, scope, environments, and responsibilities.</li>
        <li><strong>Test pyramid:</strong> many fast unit tests, fewer integration tests, minimal end-to-end that cover critical journeys.</li>
        <li><strong>Automate in pipelines:</strong> run unit and integration on each pull request; nightly end-to-end and performance baselines.</li>
        <li><strong>Data management:</strong> seed known datasets, isolate tests, and reset state.</li>
        <li><strong>Observability:</strong> logs, metrics, and traces plus synthetic monitors after release.</li>
        <li><strong>Accessibility first:</strong> catch issues early with linters and audits.</li>
      </ul>
      <div class="code-block">
        <pre><code class="language-yaml"># Example: GitHub Actions test job
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run test:ci</code></pre>
        <p class="code-caption">Automated tests wired into CI for fast feedback</p>
      </div>`,
      image: "/blog/section/what-is-software-testing-section-4.jpg"
    },
    {
      title: "Common Pitfalls, and How to Avoid Them",
      content: `<ul>
        <li><strong>Flaky tests:</strong> fix timing, network reliance, and shared state, and use test doubles where it helps.</li>
        <li><strong>End-to-end only anti-pattern:</strong> slow and brittle suites; rebalance toward unit and integration layers.</li>
        <li><strong>Unclear ownership:</strong> define who writes and maintains tests per layer.</li>
        <li><strong>Poor data setup:</strong> use factories and fixtures; reset the database per test; avoid cross-test coupling.</li>
        <li><strong>Ignoring accessibility and security:</strong> add automated checks and periodic expert reviews.</li>
      </ul>`,
      image: "/blog/section/what-is-software-testing-section-5.jpg"
    },
    {
      title: "Advanced Techniques",
      content: `<ul>
        <li><strong>Contract testing:</strong> keep microservices aligned with Pact.</li>
        <li><strong>Mutation testing:</strong> measure test strength by introducing code mutants.</li>
        <li><strong>Visual regression:</strong> detect UI diffs with snapshot images.</li>
        <li><strong>AI-assisted testing:</strong> generate scenarios, prioritize cases, and detect anomalies.</li>
        <li><strong>Chaos and resilience:</strong> inject failures to validate recovery and service level objectives.</li>
      </ul>`,
      image: "/blog/section/what-is-software-testing-section-6.jpg"
    },
    {
      title: "Tools and Quick Examples",
      content: `<p><strong>Unit and Integration:</strong> Jest or Vitest, Testing Library, Supertest.</p>
      <p><strong>End-to-End and UI:</strong> Playwright, Cypress, Selenium and WebDriver.</p>
      <p><strong>API and Contract:</strong> Postman and Newman, Pact.</p>
      <p><strong>Performance:</strong> k6, JMeter, Artillery.</p>
      <p><strong>Security:</strong> OWASP ZAP and dependency scanning with npm audit or Snyk.</p>
      <div class="code-block">
        <pre><code class="language-ts">// API integration test with Supertest and Express
import request from "supertest";
import { app } from "../app";
it("returns 201 on creating a user", async () => {
  await request(app).post("/api/users").send({ email: "a@b.com", password: "pass" }).expect(201);
});</code></pre>
        <p class="code-caption">API test verifying happy-path behavior</p>
      </div>`,
      image: "/blog/section/what-is-software-testing-section-7.jpg"
    },
    {
      title: "Real-World Scenarios",
      content: `<ul>
        <li><strong>Checkout flow end-to-end:</strong> login to cart to payment to receipt, guarded by smoke tests on every deploy.</li>
        <li><strong>API compatibility:</strong> consumer-driven contracts prevent breaking changes across services.</li>
        <li><strong>Performance objectives:</strong> baseline 95th percentile response time and fail the pipeline on regression.</li>
      </ul>`,
      image: "/blog/section/what-is-software-testing-section-8.jpg"
    },
    {
      title: "Future Outlook",
      content: `<p>Expect tighter DevTestOps loops, AI-generated tests guided by risk, and production verification with feature flags and observability. The goal is managed risk and continuous, confident delivery.</p>`,
      image: "/blog/section/what-is-software-testing-section-9.jpg"
    }
  ],

  conclusion: `<p>Testing is a system of practices. Choose the right tests at the right level, automate where it pays off, and guide priorities with risk. Stabilize unit and integration tests, automate a critical user journey, and add performance and security gates to CI/CD.</p>
  <p>From there, evolve toward contract testing, visual checks, and AI-assisted prioritization. Quality becomes a shared habit, not a last-minute phase.</p>`,

  relatedPosts: [
    "mastering-automated-software-testing-2025",
    "api-contract-testing-microservices",
    "guide-to-playwright-end-to-end-testing",
    "shift-left-security-for-node-and-react"
  ]
};

export default content;
