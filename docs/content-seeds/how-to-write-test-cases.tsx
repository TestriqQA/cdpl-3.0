// Content for: How to Write Test Cases: Step-by-Step Template and Examples

export const content = {
    introduction: `<p>Clear test cases help teams at Cinute Digital Pvt Ltd (CDPL) move fast without breaking quality. A good test case is easy to read, repeatable by anyone on the team, and tied to a requirement or risk. This guide shows the anatomy, good vs bad examples, a copy ready template, common mistakes to avoid, and practical QA tips.</p>`,

    sections: [
        {
            title: "Anatomy of a High Quality Test Case",
            content: `<ul>
        <li><strong>ID:</strong> unique and meaningful, for example <code>TC-LOGIN-001</code>.</li>
        <li><strong>Title:</strong> short action oriented description.</li>
        <li><strong>Purpose or Requirement ID:</strong> trace to user story or spec.</li>
        <li><strong>Preconditions:</strong> state, role, or data required before running.</li>
        <li><strong>Test Data:</strong> concrete values and boundary values.</li>
        <li><strong>Steps:</strong> numbered actions a tester can follow without guessing.</li>
        <li><strong>Expected Result:</strong> observable outcome that proves success or failure.</li>
        <li><strong>Priority and Tags:</strong> risk, module, release, smoke or regression.</li>
        <li><strong>Attachments or Evidence:</strong> screenshots, logs, or recordings when needed.</li>
      </ul>`,
            image: "/blog/section/how-to-write-test-cases/section_1.png"
        },
        {
            title: "Good vs Bad Test Case Examples",
            content: `<h3>Login example</h3>
      <div class="code-block">
        <pre><code class="language-text">Bad
Title: Login
Steps: Try to login
Expected: Works

Good
ID: TC-LOGIN-001
Title: Login with valid email and password
Requirement: REQ-AUTH-01
Preconditions: user exists and is verified
Data: email user@test.com, password Passw0rd!
Steps:
  1. Open /login
  2. Enter email user@test.com
  3. Enter password Passw0rd!
  4. Click Sign in
Expected:
  - User is redirected to /dashboard
  - Profile name is visible in header</code></pre>
        <p class="code-caption">Specific steps and outcomes remove ambiguity</p>
      </div>

      <h3>Checkout example</h3>
      <div class="code-block">
        <pre><code class="language-text">Bad
Title: Checkout
Steps: Buy item
Expected: Success

Good
ID: TC-CHK-002
Title: Checkout with saved address and valid card
Requirement: REQ-CHK-01
Preconditions: user logged in, cart has 1 item, saved address exists
Data: Visa 4111 1111 1111 1111, Exp 12/30, CVV 123
Steps:
  1. Open /checkout
  2. Select saved address
  3. Choose Card payment
  4. Enter card number, expiry, CVV
  5. Click Pay
Expected:
  - Order confirmation shows Order ID
  - Email receipt sent within 60 seconds</code></pre>
        <p class="code-caption">Good cases are deterministic and verifiable</p>
      </div>`,
            image: "/blog/section/how-to-write-test-cases/section_2.png"
        },
        {
            title: "Free Test Case Template",
            content: `<p>Use this lightweight template in your test management tool or spreadsheet.</p>
      <div class="code-block">
        <pre><code class="language-text">ID:
Title:
Requirement:
Module:
Priority: High | Medium | Low
Tags: Smoke, Regression, Security, Performance
Preconditions:
Data:
Steps:
Expected Result:
Notes:
Attachments:</code></pre>
        <p class="code-caption">Minimal template that fits most projects</p>
      </div>
      <p>Tip for CDPL learners: keep IDs stable across releases and add a changelog note when steps or expected results change.</p>`,
            image: "/blog/section/how-to-write-test-cases/section_3.png"
        },
        {
            title: "Common Mistakes to Avoid",
            content: `<ul>
        <li><strong>Vague steps:</strong> write actions a new tester can follow.</li>
        <li><strong>Multiple outcomes in one case:</strong> split into separate cases.</li>
        <li><strong>No test data:</strong> add real and boundary values.</li>
        <li><strong>Missing traceability:</strong> always link to a story or requirement ID.</li>
        <li><strong>Unmaintained suites:</strong> review and retire duplicates every release.</li>
      </ul>`,
            image: "/blog/section/how-to-write-test-cases/section_4.png"
        },
        {
            title: "QA Tips that Raise Quality",
            content: `<ul>
        <li><strong>Start with smoke coverage:</strong> a small set that runs on every build.</li>
        <li><strong>Use a checklist for consistency:</strong> preconditions, data, steps, expected result, and evidence.</li>
        <li><strong>Pair on first runs:</strong> author and reviewer execute once to validate clarity.</li>
        <li><strong>Track status with a matrix:</strong> map cases to requirements and show pass or fail per release.</li>
        <li><strong>Promote high value cases to automation:</strong> focus on stable critical paths like login and checkout.</li>
      </ul>`,
            image: "/blog/section/how-to-write-test-cases/section_5.png"
        }
    ],

    conclusion: `<p>Great test cases are short, clear, and repeatable. Use the template, model your writing on the good examples, and link every case to a requirement so leaders can see coverage at a glance. With these habits, CDPL learners and partner teams can collaborate smoothly and ship reliable features.</p>`,

    relatedPosts: [
        "manual-testing-test-scenarios-cases-suites",
        "what-is-software-testing",
        "mastering-automated-software-testing-2025",
        "guide-to-playwright-end-to-end-testing"
    ]
};

export default content;
