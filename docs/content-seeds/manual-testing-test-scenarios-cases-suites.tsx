// Content for: Manual Testing 101: Test Scenarios, Test Cases, and Test Suites

export const content = {
  introduction: `<p>Manual testing validates software by executing actions as a user would and observing actual results. For Cinute Digital Pvt Ltd (CDPL) learners and partner teams, strong manual testing skills improve product quality, clarify requirements, and reduce costly rework.</p>
  
  <p>This guide explains the differences between <em>test scenarios</em>, <em>test cases</em>, and <em>test suites</em>, then shows how to design each one with clear steps, data, and expected results. You will also learn coverage tracking, prioritization, and reporting practices trusted by modern teams.</p>`,

  sections: [
    {
      title: "Definitions and Core Concepts",
      content: `<ul>
        <li><strong>Test Scenario:</strong> a user goal or feature level behavior to validate, for example "user checks out with a saved address". Scenarios group related flows.</li>
        <li><strong>Test Case:</strong> a repeatable procedure with preconditions, steps, test data, and expected results for a single outcome.</li>
        <li><strong>Test Suite:</strong> an organized collection of cases that target a scope such as smoke, regression, or module level coverage.</li>
        <li><strong>Coverage and Traceability:</strong> map cases to requirements and risks to ensure important behavior is tested.</li>
      </ul>`,
      image: "/blog/section/Manual-testing-101/Manual-testing-101-section-1.jpg"
    },
    {
      title: "How to Write Effective Test Scenarios",
      content: `<p>Start from user stories, acceptance criteria, and system risks. Keep scenario statements short and outcome focused.</p>
      <ul>
        <li>Follow the format: <em>As a</em> role, <em>I want</em> action, <em>so that</em> value.</li>
        <li>Cover happy paths and edge cases such as invalid inputs, timeouts, and permissions.</li>
        <li>Prioritize scenarios by business impact and failure probability.</li>
      </ul>
      <div class="code-block">
        <pre><code class="language-text">Scenario: Checkout with saved address
Given a logged in user with a saved address
When the user pays with a valid card
Then the order is created and a receipt email is sent</code></pre>
        <p class="code-caption">Plain English scenario that teams understand</p>
      </div>`,
      image: "/blog/section/Manual-testing-101/Manual-testing-101-section-2.jpg"
    },
    {
      title: "Test Case Template and Writing Guidelines",
      content: `<p>Use a consistent template so cases are easy to execute and review.</p>
      <div class="code-block">
        <pre><code class="language-text">ID: MT-CHK-001
Title: Place order with saved address and valid card
Preconditions: user logged in, cart has 1 item, saved address exists
Priority: High
Steps:
  1. Open Checkout
  2. Select saved address
  3. Choose Card payment
  4. Enter valid card 4111 1111 1111 1111, Exp 12/30, CVV 123
  5. Click Pay
Expected Result:
  - Payment succeeds
  - Order ID is displayed
  - Email receipt is received within 60 seconds
Data:
  - User: buyer@test.com
  - Product: SKU-123 Size M
Postconditions: cart is emptied, order appears in Order History</code></pre>
        <p class="code-caption">Minimal but complete test case template you can reuse</p>
      </div>
      <ul>
        <li>Write steps as actions the tester can follow without guessing.</li>
        <li>Keep one clear expected result per outcome. If there are many, split into separate cases.</li>
        <li>Use realistic data and include boundary values.</li>
      </ul>`,
      image: "/blog/section/Manual-testing-101/Manual-testing-101-section-3.jpg"
    },
    {
      title: "Designing Test Suites that Scale",
      content: `<p>Organize cases by purpose so suites are fast to run and easy to maintain.</p>
      <ul>
        <li><strong>Smoke:</strong> runs in minutes on every build to catch obvious failures.</li>
        <li><strong>Regression:</strong> deeper coverage before release gates. Group by module.</li>
        <li><strong>Exploratory:</strong> charter based, time boxed sessions that discover unknown risks.</li>
        <li><strong>UAT:</strong> business acceptance with production like data and workflows.</li>
      </ul>
      <p>Store suite membership in your test management tool so CI can trigger the right sets automatically.</p>`,
      image: "/blog/section/Manual-testing-101/Manual-testing-101-section-4.jpg"
    },
    {
      title: "Traceability Matrix and Prioritization",
      content: `<p>Link each case to a requirement ID and risk level. This helps leaders at CDPL verify coverage and choose what to run for a given release.</p>
      <div class="code-block">
        <pre><code class="language-text">Requirement  | Cases            | Priority | Status
REQ-CHK-01   | MT-CHK-001..005  | High     | Pass
REQ-PAY-02   | MT-PAY-001..003  | High     | Fail (rollback)
REQ-ADDR-04  | MT-ADR-001..002  | Medium   | Pass</code></pre>
        <p class="code-caption">Simple matrix that maps requirements to cases and status</p>
      </div>`,
      image: "/blog/section/Manual-testing-101/Manual-testing-101-section-5.jpg"
    },
    {
      title: "Exploratory Testing Charters",
      content: `<p>Use structured exploration to find defects that scripts miss.</p>
      <ul>
        <li>Charter example: "Explore checkout error handling with slow network and expired card".</li>
        <li>Record notes, paths taken, and issues found with timestamps and data used.</li>
        <li>Convert valuable findings into repeatable cases and add them to suites.</li>
      </ul>`,
      image: "/blog/section/Manual-testing-101/Manual-testing-101-section-6.jpg"
    },
    {
      title: "Bug Reporting that Engineers Love",
      content: `<p>High quality reports speed up fixes and reduce back and forth.</p>
      <ul>
        <li>Title includes module and symptom, for example "Checkout: payment screen loops on submit".</li>
        <li>Include build version, environment, device or browser, exact steps, actual vs expected, logs or screenshots, and severity.</li>
        <li>Tag with requirement ID and test case ID for traceability.</li>
      </ul>`,
      image: "/blog/section/Manual-testing-101/Manual-testing-101-section-7.jpg"
    },
    {
      title: "Common Pitfalls and How to Avoid Them",
      content: `<ul>
        <li>Ambiguous steps. Fix by using clear verbs and data examples.</li>
        <li>Oversized cases. Split when there are multiple outcomes.</li>
        <li>No maintenance. Review and retire duplicates every release.</li>
        <li>Only happy paths. Add negative and boundary tests.</li>
        <li>Untracked coverage. Always link cases to requirements and risks.</li>
      </ul>`,
      image: "/blog/section/Manual-testing-101/Manual-testing-101-section-8.jpg"
    },
    {
      title: "Recommended Tools for Manual Test Management",
      content: `<p>Use a tool to store scenarios, cases, and suites with status and history.</p>
      <ul>
        <li>Lightweight: spreadsheets with a shared template and review workflow.</li>
        <li>Test management: tools that support suites, traceability, and CI exports.</li>
        <li>Team stack: ticketing for defects, dashboards for quality KPIs, and storage for evidence.</li>
      </ul>`,
      image: "/blog/section/Manual-testing-101/Manual-testing-101-section-9.jpg"
    },
    {
      title: "Checklist for CDPL Learners",
      content: `<ul>
        <li>Write scenario statements for each acceptance criterion.</li>
        <li>Create cases with clear steps, data, and results.</li>
        <li>Group cases into smoke and regression suites.</li>
        <li>Maintain a traceability matrix and update status on every run.</li>
        <li>Report bugs with full context and link to the failing case.</li>
      </ul>`,
      image: "/blog/section/Manual-testing-101/Manual-testing-101-section-10.jpg"
    }
  ],

  conclusion: `<p>Manual testing strengthens product quality when scenarios are meaningful, cases are precise, and suites are organized around risk and release flow. Start with smoke coverage, grow a focused regression suite, and keep traceability visible to the whole team. With these habits, learners and partner teams at CDPL can ship confidently while learning industry grade QA skills.</p>`,

  relatedPosts: [
    "what-is-software-testing",
    "mastering-automated-software-testing-2025",
    "guide-to-playwright-end-to-end-testing",
    "api-contract-testing-microservices"
  ]
};

export default content;
