// /src/posts/overfitting-vs-underfitting-with-pictures.ts
// Content for: Overfitting vs Underfitting with Pictures

export const content = {
    introduction: `<p><strong>Overfitting</strong> and <strong>underfitting</strong> are the most common reasons machine learning models fail to generalize. This CDPL picture first guide shows exactly what each one looks like, explains the <em>bias variance trade off</em>, and gives quick checks and fixes you can apply in scikit learn.</p>`,

    sections: [
        {
            title: "Quick Definitions",
            content: `<ul>
        <li><strong>Underfitting:</strong> the model is too simple to learn the pattern. It has <em>high bias</em> and performs poorly on both train and test data.</li>
        <li><strong>Overfitting:</strong> the model is too complex and memorizes noise. It has <em>high variance</em>, high train accuracy, but poor test accuracy.</li>
      </ul>`,
            image: "/blog/section/overfitting-vs-underfitting-with-pictures/section-1.png"
        },
        {
            title: "Visual Intuition: Lines and Curves",
            content: `<p>The same dataset can be modeled with different complexity. The pictures below are the fastest way to build intuition.</p>
      <ul>
        <li><strong>Underfitting (linear line on curved data):</strong> the model misses curvature and shows large errors everywhere.</li>
        <li><strong>Good fit:</strong> the curve follows the trend without chasing every point.</li>
        <li><strong>Overfitting (wiggly curve):</strong> the model bends through every point, including noise, and fails on new data.</li>
      </ul>`,
            image: "/blog/section/overfitting-vs-underfitting-with-pictures/section-2.png"
        },
        {
            title: "Bias Variance Trade Off",
            content: `<p>Model error = <strong>bias²</strong> + <strong>variance</strong> + <strong>irreducible noise</strong>. Increasing complexity reduces bias but increases variance; simplifying reduces variance but increases bias. You want the <em>minimum</em> of total error on <strong>unseen</strong> data.</p>`,
            image: "/blog/section/overfitting-vs-underfitting-with-pictures/section-3.png"
        },
        {
            title: "How to Detect Overfitting and Underfitting",
            content: `<h3>Fast checks</h3>
      <ul>
        <li><strong>Train vs validation gap:</strong> huge gap = overfitting; both bad = underfitting.</li>
        <li><strong>Learning curves:</strong> plot score vs number of training examples.</li>
        <li><strong>Cross validation:</strong> stable scores across folds signal generalization.</li>
      </ul>
      <div class="code-block">
        <pre><code class="language-python"># Learning curve example (scikit-learn)
from sklearn.model_selection import learning_curve
from sklearn.linear_model import Ridge
from sklearn.datasets import make_regression
from sklearn.metrics import r2_score
import numpy as np

X, y = make_regression(n_samples=1500, n_features=20, noise=15, random_state=42)
est = Ridge(alpha=1.0)
train_sizes, train_scores, val_scores = learning_curve(
    est, X, y, cv=5, scoring="r2", train_sizes=np.linspace(0.1, 1.0, 6), random_state=42
)
print(train_sizes, train_scores.mean(axis=1), val_scores.mean(axis=1))</code></pre>
        <p class="code-caption">Use learning curves to see if more data helps and if the gap is shrinking</p>
      </div>`,
            image: "/blog/section/overfitting-vs-underfitting-with-pictures/section-4.png"
        },
        {
            title: "How to Fix Underfitting",
            content: `<ul>
        <li>Increase model capacity (polynomial features, deeper trees, kernels).</li>
        <li>Reduce regularization strength (lower alpha for Ridge/Lasso, lower C in SVM).</li>
        <li>Add better features (domain signals, interactions, non linear transforms).</li>
        <li>Decrease bias in algorithms (switch from linear to tree based or kernel methods).</li>
      </ul>`,
            image: "/blog/section/overfitting-vs-underfitting-with-pictures/section-5.png"
        },
        {
            title: "How to Fix Overfitting",
            content: `<ul>
        <li><strong>Regularize:</strong> L1/L2, dropout for deep nets, pruning for trees.</li>
        <li><strong>Simplify:</strong> reduce depth, fewer parameters, early stopping.</li>
        <li><strong>More and cleaner data:</strong> collect more examples, remove label noise, stratify splits.</li>
        <li><strong>Cross validation and ensembling:</strong> average models to reduce variance.</li>
      </ul>
      <div class="code-block">
        <pre><code class="language-python"># Regularization and polynomial features
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import make_pipeline
from sklearn.linear_model import LassoCV

model = make_pipeline(
    PolynomialFeatures(degree=8, include_bias=False),
    LassoCV(cv=5, random_state=42)
)
model.fit(X, y)  # high-degree curve with regularization to tame variance</code></pre>
        <p class="code-caption">Use regularization when you need expressive features but want control over variance</p>
      </div>`,
            image: "/blog/section/overfitting-vs-underfitting-with-pictures/section-6.png"
        },
        {
            title: "Pictures You Can Recreate Quickly",
            content: `<div class="code-block">
        <pre><code class="language-python"># Underfit vs good fit vs overfit on 1D curve
import numpy as np, matplotlib.pyplot as plt
rng = np.random.default_rng(42)
X = np.linspace(-3, 3, 80).reshape(-1, 1)
y = np.sin(X).ravel() + 0.2 * rng.normal(size=X.shape[0])

from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import make_pipeline
from sklearn.linear_model import Ridge

m_under = LinearRegression()
m_good = make_pipeline(PolynomialFeatures(5), Ridge(alpha=0.5))
m_over = make_pipeline(PolynomialFeatures(16), Ridge(alpha=1e-6))

for m in [m_under, m_good, m_over]:
    m.fit(X, y)

xx = np.linspace(-3, 3, 400).reshape(-1, 1)
plt.scatter(X, y, s=18)
plt.plot(xx, m_under.predict(xx), label="Underfit")
plt.plot(xx, m_good.predict(xx), label="Good fit")
plt.plot(xx, m_over.predict(xx), label="Overfit")
plt.legend(); plt.show()</code></pre>
        <p class="code-caption">Three curves on the same data make the differences obvious for teams and reports</p>
      </div>`,
            image: "/blog/section/overfitting-vs-underfitting-with-pictures/section-7.png"
        },
        {
            title: "Checklist for Projects at CDPL",
            content: `<ul>
        <li>Always keep a validation set separate from training.</li>
        <li>Plot learning curves before scaling up complexity.</li>
        <li>Track train vs validation metrics in one dashboard.</li>
        <li>Prefer simple models that meet the target metric; complexity must justify maintenance cost.</li>
      </ul>`,
            image: "/blog/section/overfitting-vs-underfitting-with-pictures/section-8.png"
        },
        {
            title: "FAQ",
            content: `<p><strong>Does more data always fix overfitting</strong> Often but not always. If labels are noisy or features leak, more data will not help.</p>
      <p><strong>Is regularization mandatory</strong> When features are many or correlated, yes. It stabilizes estimates and improves generalization.</p>
      <p><strong>Tree models do not need scaling; can they still overfit</strong> Yes. Limit depth, use min samples per split, and try ensembles like Random Forests.</p>`,
            image: "/blog/section/overfitting-vs-underfitting-with-pictures/section-9.png"
        }
    ],

    conclusion: `<p>Overfitting and underfitting are two sides of the same generalization problem. Use visuals, validation, and learning curves to diagnose quickly, then apply regularization, data improvements, and the right level of model complexity. With these habits, CDPL learners and partner teams can ship models that perform well on real world data.</p>`,

    relatedPosts: [
        "what-is-data-science",
        "top-data-science-trends-2025-guide",
        "data-science-vs-machine-learning-vs-artificial-intelligence",
        "pandas-30-must-know-functions"
    ]
};

export default content;
