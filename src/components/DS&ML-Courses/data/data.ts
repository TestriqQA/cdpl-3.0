import { Zap, Users, Briefcase, Award, Clock, ShieldCheck } from 'lucide-react';
import { iconMap } from '@/components/DS&ML-Courses/CoursesSection';

export const features = [
    {
        icon: Zap,
        title: 'Hands-On Live Classes',
        desc: 'Interactive Python & ML sessions with live coding — not just slides.',
    },
    {
        icon: Users,
        title: 'Small Batches & Mentor Support',
        desc: 'Max 15 learners per batch with 1:1 mentor reviews, weekly doubt clears & career coaching.',
    },
    {
        icon: Briefcase,
        title: 'Job-Ready Portfolio & Placement Support',
        desc: '90+ real projects, portfolio reviews, mock interviews & guaranteed interview opportunities.',
    },
    {
        icon: Award,
        title: 'Industry-Aligned Certifications',
        desc: 'Certificates covering Python, ML, Deep Learning & MLOps recognized by hiring partners.',
    },
    {
        icon: Clock,
        title: 'Flexible Batches & Lifetime Access',
        desc: 'Weekend or weekday batches + lifetime access to recordings, notebooks and updates.',
    },
    {
        icon: ShieldCheck,
        title: 'Production & MLOps Training',
        desc: 'Model deployment, Docker, APIs, monitoring & MLOps best practices for real-world ML systems.',
    },
];

export interface Course {
    id: number;
    title: string;
    category: string;
    description: string;
    duration: string;
    students: string;
    rating: number;
    level: string;
    popular: boolean;
    link: string;
    icon: keyof typeof iconMap;
    features: string[];
    /** Optional per-course offer end timestamp (ISO). If omitted, defaults to +48h from mount */
    offerEndsAt?: string;
    syllabusLink?: string;
}

export const COURSES: Course[] = [
    {
        id: 1,
        title: 'Machine Learning and Data Science with Python - Hero Program',
        category: 'Data Science',
        description: 'Master Machine Learning & Data Science with Python in our Hero Program! Hands-on projects, expert mentorship & job-ready skills. Enroll now & launch your tech career!',
        duration: '95 Hours',
        students: '2,200+',
        rating: 4.8,
        level: 'Beginner',
        popular: true,
        link: '/machine-learning-course',
        icon: 'TrendingUp',
        features: ['Machine Learning Python', 'Data Science Hero', 'Python ML Program', 'MLOps & Production-Ready ML Systems'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/machine-learning-and-data-science-with-python-hero-program.pdf',
    },
    {
        id: 2,
        title: 'Deep Learning, NLP and Generative AI',
        category: 'Data Science',
        description: 'Dive into Deep Learning, NLP & Generative AI! Master neural networks, text processing & AI creation with hands-on projects. Enroll now & lead the AI revolution!',
        duration: '55 Hours',
        students: '2,217+',
        rating: 4.8,
        level: 'Beginner',
        popular: true,
        link: '/generative-ai-course',
        icon: 'TrendingUp',
        features: ['Deep Learning Basics', 'NLP Mastery Course', 'Clustering', 'Generative AI Skills'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/deep-learning-nlp-and-generativeai.pdf',
    },
    {
        id: 3,
        title: 'Advanced Data Science and Machine Learning Masterclass',
        category: 'Data Science',
        description: 'Elevate your career with Advanced Data Science & Machine Learning Masterclass! Deep-dive into algorithms, big data & AI. Expert-led, project-based. Enroll today!',
        duration: '200 Hours',
        students: '2,234+',
        rating: 4.8,
        level: 'Beginner',
        popular: false,
        link: '/data-science-course',
        icon: 'TrendingUp',
        features: ['Advanced Data Science', 'Machine Learning Masterclass', 'AI Algorithms Pro', 'Generative AI & LLM Engineering in Practice'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/advanced-data-science-and-machine-learning-masterclass.pdf',
    },
    {
        id: 4,
        title: 'Comprehensive Data Science and AI - Master Program',
        category: 'Data Science',
        description: 'Unlock expertise in Comprehensive Data Science & AI Master Program! From ML to deep learning, big data & ethics. Hands-on, industry-aligned. Enroll now & shape the future!',
        duration: '255 Hours',
        students: '2,251+',
        rating: 4.8,
        level: 'Beginner',
        popular: true,
        link: '/ai-course',
        icon: 'TrendingUp',
        features: ['Data Science Mastery', 'AI Master Program', 'Comprehensive ML AI'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/comprehensive-data-science-and-ai-master-program.pdf',
    },
    {
        id: 5,
        title: 'Machine Learning Algorithms using python Programming',
        category: 'Data Science',
        description: 'Master Machine Learning Algorithms using Python Programming! Implement regression, classification, clustering & more with scikit-learn. Hands-on code, real projects. Enroll now!',
        duration: '45 Hours',
        students: '2,285+',
        rating: 4.8,
        level: 'Beginner',
        popular: true,
        link: '/machine-learning-using-python',
        icon: 'TrendingUp',
        features: ['ML Algorithms Python', 'Python ML Coding', 'Scikit-Learn Mastery'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/machine-learning-algorithms-using-python-programming.pdf',
    },
    {
        id: 6,
        title: 'Machine Learning and Data Visualization using R Programming',
        category: 'Data Science',
        description: 'Master Machine Learning & Data Visualization using R Programming! Explore ggplot2, tidyverse, ML models & interactive dashboards. Hands-on projects. Enroll now & excel in data!',
        duration: '20 Hours',
        students: '2,302+',
        rating: 4.8,
        level: 'Beginner',
        popular: true,
        link: '/data-visualization-in-r-programming',
        icon: 'TrendingUp',
        features: ['R ML Visualization', 'Data Viz R', 'R Programming ML'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/machine-learning-and-data-visualization-using-r-programming.pdf',
    },

    // Python Programming — MOVED TO LAST IN DATA SCIENCE (as requested)
    {
        id: 8,
        title: 'Python Programming',
        category: 'Data Science',
        description: 'Master Python Programming from absolute basics all the way to advanced and professional-level concepts! Dive deep into Python syntax, data structures, object-oriented programming, functional programming, automation scripting, and real-world problem-solving through engaging, hands-on projects that reinforce every concept.',
        duration: '30 Hours',
        students: '2,268+',
        rating: 4.8,
        level: 'Beginner',
        popular: true,
        link: '/python-course',
        icon: 'TrendingUp',
        features: ['Python Basics Guide', 'Advanced Python Coding', 'Learn Python Fast', 'Real-World Python Projects & Automation Mastery'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/python-programming.pdf',
    },
]



export const curriculumContent = {
    title: "Detailed Curriculum",
    subtitle: "Structured for maximum learning and career readiness.",
    tracks: [
        {
            id: "ml-ds-python-hero",
            title: "Machine Learning and Data Science with Python - Hero Program",
            weeks: [
                {
                    number: "01-04",
                    title: "Python Mastery & DS Foundations",
                    description:
                        "Python environment setup, core programming concepts, data types, control structures, functions, and an introduction to Data Science workflows and ethics.",
                    deliverables: ["Python Scripting Project", "DS Fundamentals Quiz"]
                },
                {
                    number: "05-08",
                    title: "Data Wrangling & Exploratory Analysis",
                    description:
                        "Advanced Pandas for data manipulation, NumPy for numerical computing, data cleaning techniques, and exploratory data analysis (EDA) principles.",
                    deliverables: ["EDA Notebook", "Data Cleaning Report"]
                },
                {
                    number: "09-12",
                    title: "Statistical Modeling & Visualization",
                    description:
                        "Probability, hypothesis testing, statistical inference, and creating insightful visualizations using Matplotlib, Seaborn, and Plotly.",
                    deliverables: ["Statistical Analysis Project", "Interactive Dashboard"]
                },
                {
                    number: "13-16",
                    title: "Supervised Learning Essentials",
                    description:
                        "Regression (linear, logistic, polynomial), classification algorithms (Decision Trees, SVM, KNN), model evaluation metrics, and cross-validation with Scikit-learn.",
                    deliverables: ["Regression Model Deployment", "Classification Benchmark Study"]
                },
                {
                    number: "17-20",
                    title: "Unsupervised Learning & Feature Engineering",
                    description:
                        "Clustering (K-Means, DBSCAN), dimensionality reduction (PCA, t-SNE), association rules, and advanced feature selection/engineering techniques.",
                    deliverables: ["Clustering Analysis Project", "Feature Engineering Pipeline"]
                },
                {
                    number: "21-24",
                    title: "Ensemble Methods & Model Deployment",
                    description:
                        "Bagging, Boosting (Random Forest, XGBoost, LightGBM), stacking, hyperparameter tuning, and deploying models using Flask/FastAPI on Heroku/AWS.",
                    deliverables: ["Ensemble Model API", "Production-Ready Deployment"]
                },
                {
                    number: "25-28",
                    title: "Time Series & Advanced ML",
                    description:
                        "ARIMA, Prophet, LSTM for forecasting, anomaly detection, and introduction to reinforcement learning concepts with real-world case studies.",
                    deliverables: ["Time Series Forecasting Model", "Anomaly Detection System"]
                },
                {
                    number: "29-32",
                    title: "Big Data Tools & Scalable ML",
                    description:
                        "Spark MLlib for distributed computing, Dask for parallel processing, handling large datasets, and MLOps basics with MLflow.",
                    deliverables: ["Scalable ML Pipeline", "MLOps Workflow Demo"]
                },
                {
                    number: "33-36",
                    title: "Hero Capstone & Professional Growth",
                    description:
                        "Full end-to-end industry-level project, portfolio optimization, mock interviews, resume building, and career strategies in ML/DS roles.",
                    deliverables: ["Hero Capstone Project", "Professional Portfolio & Mock Interview"]
                }
            ]
        },
        {
            id: "dl-nlp-genai",
            title: "Deep Learning, NLP and GenerativeAI",
            weeks: [
                {
                    number: "01-04",
                    title: "Python & Deep Learning Foundations",
                    description:
                        "Python refresh, NumPy/Pandas basics, neural network fundamentals, activation functions, and gradient descent with TensorFlow/Keras and PyTorch.",
                    deliverables: ["MLP Classifier Project", "Backpropagation Notebook"]
                },
                {
                    number: "05-08",
                    title: "CNNs & Computer Vision",
                    description:
                        "Convolutional layers, pooling, transfer learning with ResNet/VGG, data augmentation, and building image classifiers on CIFAR-10/ImageNet subsets.",
                    deliverables: ["Custom CNN Model", "Transfer Learning Report"]
                },
                {
                    number: "09-12",
                    title: "RNNs, LSTMs & Sequence Modeling",
                    description:
                        "Recurrent architectures, vanishing gradients, LSTM/GRU cells, sequence-to-sequence models, and time-series prediction tasks.",
                    deliverables: ["LSTM Forecasting App", "Seq2Seq Translation Demo"]
                },
                {
                    number: "13-16",
                    title: "Transformers & Attention Mechanisms",
                    description:
                        "Self-attention, multi-head attention, BERT architecture, Hugging Face Transformers library, and fine-tuning on downstream tasks.",
                    deliverables: ["BERT Sentiment Classifier", "Attention Visualization Study"]
                },
                {
                    number: "17-20",
                    title: "Advanced NLP Pipelines",
                    description:
                        "Tokenization strategies, POS tagging, NER, question answering, text summarization, and building end-to-end NLP systems with spaCy and Transformers.",
                    deliverables: ["NER + QA Pipeline", "Summarization Model API"]
                },
                {
                    number: "21-24",
                    title: "Diffusion Models & Generative Basics",
                    description:
                        "VAEs, GANs fundamentals, DCGAN, conditional generation, and introduction to diffusion processes with Denoising Diffusion Probabilistic Models (DDPM).",
                    deliverables: ["GAN Image Generator", "VAE Latent Space Explorer"]
                },
                {
                    number: "25-28",
                    title: "Stable Diffusion & Modern Generatives",
                    description:
                        "Latent diffusion, CLIP guidance, Stable Diffusion fine-tuning, ControlNet, LoRA adapters, and text-to-image customization workflows.",
                    deliverables: ["Custom Stable Diffusion Model", "LoRA Training Pipeline"]
                },
                {
                    number: "29-32",
                    title: "LLMs & Prompt Engineering",
                    description:
                        "GPT architectures, in-context learning, prompt tuning, RLHF basics, LlamaIndex/RAG, and deploying open-source LLMs with vLLM/TGI.",
                    deliverables: ["RAG-Powered Chatbot", "Prompt Optimization Study"]
                },
                {
                    number: "33-36",
                    title: "Capstone & Production Deployment",
                    description:
                        "End-to-end multimodal project (e.g., image captioning + generation), ONNX/TensorRT optimization, FastAPI/Gradio UIs, and cloud deployment on AWS/GCP.",
                    deliverables: ["Multimodal Generative App", "Production Deployment Portfolio"]
                }
            ]
        },
        {
            id: "advanced-ds-ml-masterclass",
            title: "Advanced Data Science and Machine Learning Masterclass",
            weeks: [
                {
                    number: "01-04",
                    title: "Advanced Python & Scientific Computing",
                    description:
                        "Memory-efficient NumPy, vectorized operations, Cython acceleration, advanced Pandas (multi-index, window functions), and parallel processing with Dask.",
                    deliverables: ["High-Performance Data Pipeline", "Cython Optimization Benchmark"]
                },
                {
                    number: "05-08",
                    title: "Statistical Learning Theory & Experimentation",
                    description:
                        "Bias-variance tradeoff, PAC learning, concentration inequalities, A/B testing frameworks, causal inference with DoWhy, and Bayesian statistics with PyMC.",
                    deliverables: ["Causal Impact Analysis", "Bayesian A/B Test Dashboard"]
                },
                {
                    number: "09-12",
                    title: "Feature Engineering Mastery",
                    description:
                        "Automated feature generation with Featuretools, target encoding, interaction features, time-based embeddings, and feature store implementation with Feast.",
                    deliverables: ["Automated Feature Pipeline", "Feature Store Prototype"]
                },
                {
                    number: "13-16",
                    title: "Gradient Boosting at Scale",
                    description:
                        "XGBoost internals, LightGBM histogram optimization, CatBoost categorical handling, monotonic constraints, and distributed training with Dask-ML.",
                    deliverables: ["XGBoost SHAP Explainer", "Distributed GBDT Model"]
                },
                {
                    number: "17-20",
                    title: "Deep Learning Optimization",
                    description:
                        "Custom training loops in PyTorch, mixed precision (AMP), gradient accumulation, learning rate schedulers, and advanced optimizers (AdamW, LAMB, Sophia).",
                    deliverables: ["Custom Optimizer Implementation", "Mixed-Precision Training Suite"]
                },
                {
                    number: "21-24",
                    title: "Model Interpretability & Robustness",
                    description:
                        "SHAP/LIME deep dive, counterfactual explanations, adversarial training, uncertainty quantification with Deep Ensembles, and model calibration techniques.",
                    deliverables: ["Adversarial Robustness Study", "Uncertainty-Aware Predictor"]
                },
                {
                    number: "25-28",
                    title: "MLOps & Production Engineering",
                    description:
                        "MLflow tracking, Kubeflow pipelines, model registry, continuous training, monitoring with Prometheus/Grafana, and drift detection with Alibi Detect.",
                    deliverables: ["End-to-End MLflow Pipeline", "Model Monitoring Dashboard"]
                },
                {
                    number: "29-32",
                    title: "Scalable Architectures & Big Data ML",
                    description:
                        "Spark MLlib for petabyte-scale data, Ray for distributed hyperparameter tuning, Delta Lake for feature consistency, and streaming ML with Kafka + Flink.",
                    deliverables: ["Spark ML Pipeline", "Ray Tune Optimization Cluster"]
                },
                {
                    number: "33-36",
                    title: "Masterclass Capstone & Leadership",
                    description:
                        "Industry-scale project (e.g., recommendation system at 100M+ users), technical whitepaper, stakeholder presentation, and ML team leadership simulation.",
                    deliverables: ["Production-Scale ML System", "Technical Whitepaper & Defense"]
                }
            ]
        },
        {
            id: "comprehensive-ds-ai-master",
            title: "Comprehensive Data Science and AI - Master Program",
            weeks: [
                {
                    number: "01-04",
                    title: "Python Ecosystem & Data Engineering Foundations",
                    description:
                        "Advanced Python (type hints, async, decorators), SQL/NoSQL mastery, ETL pipelines with Airflow, and data modeling for analytics/AI.",
                    deliverables: ["Scalable ETL DAG", "Data Warehouse Schema"]
                },
                {
                    number: "05-08",
                    title: "Mathematics & Statistics for AI",
                    description:
                        "Linear algebra, calculus, probability distributions, Bayesian inference, and hypothesis testing with SciPy and StatsModels.",
                    deliverables: ["Bayesian Inference Model", "Statistical Simulation Suite"]
                },
                {
                    number: "09-12",
                    title: "Exploratory Data Analysis & Visualization Mastery",
                    description:
                        "Pandas profiling, interactive dashboards with Plotly Dash, geospatial analysis with GeoPandas, and storytelling with data.",
                    deliverables: ["Executive Dashboard App", "EDA Narrative Report"]
                },
                {
                    number: "13-16",
                    title: "Machine Learning Core & Scikit-learn",
                    description:
                        "Full ML workflow, pipelines, cross-validation, hyperparameter tuning (Optuna), and ensemble methods with Scikit-learn.",
                    deliverables: ["AutoML Pipeline", "Model Selection Framework"]
                },
                {
                    number: "17-20",
                    title: "Deep Learning with PyTorch & TensorFlow",
                    description:
                        "Neural network architectures, custom layers/losses, transfer learning, and distributed training with PyTorch Lightning and TF.Keras.",
                    deliverables: ["Custom NN Architecture", "Multi-GPU Training Demo"]
                },
                {
                    number: "21-24",
                    title: "Natural Language Processing & Transformers",
                    description:
                        "Tokenization, BERT/RoBERTa fine-tuning, Hugging Face ecosystem, text generation, and multilingual NLP with XLM-R.",
                    deliverables: ["Multilingual Sentiment API", "Transformer Fine-Tuning Study"]
                },
                {
                    number: "25-28",
                    title: "Computer Vision & Multimodal AI",
                    description:
                        "CNNs, Vision Transformers (ViT), object detection (YOLOv8), segmentation, and CLIP-based zero-shot classification.",
                    deliverables: ["YOLO Detection System", "Multimodal Search Engine"]
                },
                {
                    number: "29-32",
                    title: "Generative AI & Diffusion Models",
                    description:
                        "GANs, VAEs, Stable Diffusion XL, DreamBooth/LoRA, music generation with AudioCraft, and video synthesis basics.",
                    deliverables: ["Personalized Diffusion Model", "Generative Art Portfolio"]
                },
                {
                    number: "33-36",
                    title: "Time Series, Reinforcement Learning & AutoML",
                    description:
                        "Prophet, LSTM, Temporal Fusion Transformers, RL basics (PPO, DQN), and Neural Architecture Search with AutoKeras.",
                    deliverables: ["Hybrid Forecasting System", "RL Trading Agent"]
                },
                {
                    number: "37-40",
                    title: "Big Data AI & Distributed Systems",
                    description:
                        "Spark MLlib, Ray Serve, Dask-ML, Delta Lake, streaming analytics with Kafka, and federated learning with Flower.",
                    deliverables: ["Distributed Training Cluster", "Real-Time ML Stream"]
                },
                {
                    number: "41-44",
                    title: "MLOps, Ethics & Governance",
                    description:
                        "Kubeflow, MLflow, model cards, bias auditing, responsible AI frameworks, and data privacy (GDPR, differential privacy).",
                    deliverables: ["Responsible AI Audit Report", "Kubeflow CI/CD Pipeline"]
                },
                {
                    number: "45-48",
                    title: "Master Capstone & Industry Integration",
                    description:
                        "End-to-end AI system for a real-world enterprise problem, technical documentation, stakeholder presentation, and job-ready portfolio.",
                    deliverables: ["Enterprise AI Solution", "Master Thesis & Defense"]
                }
            ]
        },
        {
            id: "python-programming",
            title: "Python Programming",
            weeks: [
                {
                    number: "01-04",
                    title: "Python Setup & Core Syntax",
                    description:
                        "Installation, virtual environments, basic I/O, variables, data types, operators, and control structures (if/else, loops).",
                    deliverables: ["Interactive Calculator Script", "Control Flow Quiz"]
                },
                {
                    number: "05-08",
                    title: "Functions & Modular Code",
                    description:
                        "Defining functions, parameters, return values, lambda expressions, scope, modules, and packages with pip.",
                    deliverables: ["Modular Utility Library", "Function Documentation Report"]
                },
                {
                    number: "09-12",
                    title: "Data Structures Mastery",
                    description:
                        "Lists, tuples, dictionaries, sets, comprehensions, slicing, and built-in methods for efficient data handling.",
                    deliverables: ["Custom Data Structure Implementation", "Collection Performance Benchmark"]
                },
                {
                    number: "13-16",
                    title: "File Handling & Error Management",
                    description:
                        "Reading/writing text and binary files, context managers, JSON/CSV processing, exceptions, and custom error classes.",
                    deliverables: ["File Processor CLI Tool", "Error Handling Framework"]
                },
                {
                    number: "17-20",
                    title: "Object-Oriented Programming",
                    description:
                        "Classes, objects, inheritance, polymorphism, encapsulation, dunder methods, and property decorators.",
                    deliverables: ["OOP Game Engine Base", "Class Design Case Study"]
                },
                {
                    number: "21-24",
                    title: "Advanced Python Features",
                    description:
                        "Iterators, generators, decorators, context managers, metaclasses, and type hints with mypy.",
                    deliverables: ["Custom Decorator Suite", "Typed Module with mypy"]
                },
                {
                    number: "25-28",
                    title: "Standard Library Deep Dive",
                    description:
                        "os, sys, pathlib, datetime, collections, itertools, functools, multiprocessing, and threading.",
                    deliverables: ["System Automation Script", "Parallel Processing Demo"]
                },
                {
                    number: "29-32",
                    title: "Testing, Debugging & Logging",
                    description:
                        "unittest, pytest, mock, debugging with pdb, logging configuration, and code coverage with coverage.py.",
                    deliverables: ["Full Test Suite Project", "Debugging Workflow Guide"]
                },
                {
                    number: "33-36",
                    title: "Capstone Project & Best Practices",
                    description:
                        "Building a complete command-line application, code reviews, PEP 8, virtualenv, and packaging with setuptools.",
                    deliverables: ["Published CLI Package", "Code Review & Refactor Report"]
                }
            ]
        },
        {
            id: "ml-algorithms-python",
            title: "Machine Learning Algorithms using python Programming",
            weeks: [
                {
                    number: "01-04",
                    title: "Python for ML & Data Setup",
                    description:
                        "Python environment, NumPy arrays, Pandas DataFrames, Matplotlib/Seaborn basics, and ML workflow overview with Scikit-learn.",
                    deliverables: ["Data Preprocessing Pipeline", "Exploratory Visualization Notebook"]
                },
                {
                    number: "05-08",
                    title: "Linear Regression & Regularization",
                    description:
                        "Simple/multiple linear regression from scratch, gradient descent, Ridge, Lasso, ElasticNet implementation and evaluation.",
                    deliverables: ["Custom Linear Regressor", "Regularization Comparison Study"]
                },
                {
                    number: "09-12",
                    title: "Logistic Regression & Classification Metrics",
                    description:
                        "Sigmoid function, binary/multiclass logistic regression, confusion matrix, ROC-AUC, precision-recall curves using Scikit-learn.",
                    deliverables: ["Logistic Model API", "Classification Metrics Dashboard"]
                },
                {
                    number: "13-16",
                    title: "Decision Trees & Ensemble Basics",
                    description:
                        "CART algorithm, entropy/Gini impurity, tree pruning, bagging, Random Forest implementation and feature importance.",
                    deliverables: ["Decision Tree Visualizer", "Random Forest Benchmark"]
                },
                {
                    number: "17-20",
                    title: "Gradient Boosting Machines",
                    description:
                        "Boosting theory, XGBoost, LightGBM, CatBoost, histogram-based splitting, and handling categorical features.",
                    deliverables: ["XGBoost Hyperparameter Tuner", "GBDT SHAP Explainer"]
                },
                {
                    number: "21-24",
                    title: "Support Vector Machines & Kernel Tricks",
                    description:
                        "Linear/non-linear SVM, kernel functions (RBF, polynomial), SMO algorithm, and multiclass strategies with libsvm.",
                    deliverables: ["SVM Kernel Experiment", "Margin Visualization Tool"]
                },
                {
                    number: "25-28",
                    title: "K-Nearest Neighbors & Instance-Based Learning",
                    description:
                        "Distance metrics, brute-force vs KD/Ball Tree, curse of dimensionality, and weighted KNN variants.",
                    deliverables: ["Custom KNN Classifier", "Nearest Neighbor Search Demo"]
                },
                {
                    number: "29-32",
                    title: "Unsupervised Learning: Clustering & Dimensionality",
                    description:
                        "K-Means, DBSCAN, hierarchical clustering, PCA, t-SNE, UMAP for visualization and preprocessing.",
                    deliverables: ["Clustering Analysis Pipeline", "Dimensionality Reduction Study"]
                },
                {
                    number: "33-36",
                    title: "Model Evaluation, Tuning & Capstone",
                    description:
                        "Cross-validation, grid/random search, pipelines, stacking, and building an end-to-end ML system with deployment.",
                    deliverables: ["Stacked Ensemble Model", "ML Algorithm Portfolio App"]
                }
            ]
        },
        {
            id: "ml-dataviz-r",
            title: "Machine Learning and Data Visualization using R Programming",
            weeks: [
                {
                    number: "01-04",
                    title: "R Setup & Core Programming",
                    description:
                        "R installation, RStudio IDE, vectors, data frames, factors, control structures, functions, and tidyverse basics with dplyr and tidyr.",
                    deliverables: ["Data Wrangling Script", "R Markdown Intro Report"]
                },
                {
                    number: "05-08",
                    title: "Advanced Data Manipulation & Pipelines",
                    description:
                        "Reshaping with pivot_longer/wider, joins, stringr, lubridate, functional programming with purrr, and magrittr pipelines.",
                    deliverables: ["Tidyverse ETL Pipeline", "Nested Data Processing Notebook"]
                },
                {
                    number: "09-12",
                    title: "Exploratory Visualization with ggplot2",
                    description:
                        "Grammar of graphics, geoms, scales, themes, facets, coord systems, and building layered publication-quality plots.",
                    deliverables: ["Interactive ggplot Dashboard", "Visualization Grammar Study"]
                },
                {
                    number: "13-16",
                    title: "Interactive & Web-Based Visualization",
                    description:
                        "Plotly for hover/zoom, Shiny apps, flexdashboard, leaflet for maps, and highcharter for dynamic financial plots.",
                    deliverables: ["Shiny Data Explorer App", "Interactive Map Dashboard"]
                },
                {
                    number: "17-20",
                    title: "Statistical Modeling & Linear Regression",
                    description:
                        "lm() deep dive, model diagnostics, ANOVA, multicollinearity, generalized linear models (GLM), and broom for tidy results.",
                    deliverables: ["Regression Diagnostics Report", "GLM Prediction API"]
                },
                {
                    number: "21-24",
                    title: "Classification Algorithms in R",
                    description:
                        "Logistic regression, LDA/QDA, Naive Bayes, caret for unified modeling, ROC analysis, and confusion matrices.",
                    deliverables: ["Caret Classification Workflow", "Model Performance Dashboard"]
                },
                {
                    number: "25-28",
                    title: "Tree-Based Models & Ensembles",
                    description:
                        "rpart, randomForest, gbm, xgboost R API, variable importance, partial dependence plots, and model stacking.",
                    deliverables: ["Random Forest Explainer", "XGBoost Tuning Study"]
                },
                {
                    number: "29-32",
                    title: "Unsupervised Learning & Clustering",
                    description:
                        "kmeans, pam, dbscan, hierarchical clustering, PCA, t-SNE via Rtsne, and cluster validation metrics.",
                    deliverables: ["Clustering Visualization App", "Dimensionality Reduction Pipeline"]
                },
                {
                    number: "33-36",
                    title: "Capstone: End-to-End ML + Viz Project",
                    description:
                        "Full ML project in R: data ingest, EDA, modeling with caret/xgboost, Shiny deployment, and automated R Markdown report.",
                    deliverables: ["Deployed Shiny ML App", "Reproducible Capstone Report"]
                }
            ]
        }
    ]
};


export const careerPathContent = {
    title: "Career Opportunities",
    description: "Explore diverse career paths after completing the course.",
    subtitle: "Launch your career in Data Science and Analytics.",
    paths: [
        {
            id: 1,
            role: "Data Scientist",
            trending: true,
            demandLevel: "Very High",
            experience: "1-3+ Years",
            description:
                "Design and implement machine learning models to solve complex business problems.",
            salaryRange: "₹8L - ₹25L+",
            skills: ["ML", "Python", "Statistics", "AI"],
            responsibilities: [
                "Build predictive models",
                "Analyze complex datasets",
                "Collaborate with stakeholders"
            ],
            opportunities: ["Top Tech Companies", "Global Consulting Firms"],
            hiringCompanies: ["Google", "Amazon", "Microsoft", "Deloitte"]
        },
        {
            id: 2,
            role: "Data Analyst",
            trending: false,
            demandLevel: "High",
            experience: "0-2 Years",
            description:
                "Analyze large datasets to extract actionable insights and create reports.",
            salaryRange: "₹5L - ₹12L+",
            skills: ["SQL", "Excel", "Visualization", "Business Intelligence"],
            responsibilities: [
                "Create dashboards",
                "Clean and transform data",
                "Generate business reports"
            ],
            opportunities: ["E-commerce", "Finance", "Healthcare"],
            hiringCompanies: ["Flipkart", "Myntra", "HDFC Bank", "Accenture"]
        },
        {
            id: 3,
            role: "Machine Learning Engineer",
            trending: true,
            demandLevel: "Very High",
            experience: "2-4+ Years",
            description:
                "Build and deploy scalable machine learning systems in production.",
            salaryRange: "₹10L - ₹30L+",
            skills: ["MLOps", "Cloud", "Deployment", "Software Engineering"],
            responsibilities: [
                "Deploy ML models",
                "Optimize model performance",
                "Build ML pipelines"
            ],
            opportunities: ["Product Companies", "FinTech", "AI Startups"],
            hiringCompanies: ["Uber", "Swiggy", "Zomato", "Cred"]
        }
    ]
};


export const projectsContent = {
    title: "Hands-On Projects",
    description: "Build real-world projects to strengthen your portfolio.",
    subtitle: "Apply your learning through practical, industry-relevant projects.",

    projects: [
        {
            name: "Predictive Maintenance",
            description: "Predict equipment failure using time-series data and deep learning.",
            skills: ["Time Series", "Deep Learning", "TensorFlow", "Python"],
            difficulty: "Advanced"
        },
        {
            name: "Customer Churn Analysis",
            description: "Identify and predict customers likely to leave a telecom company.",
            skills: ["Classification", "Pandas", "Scikit-learn", "Statistics"],
            difficulty: "Intermediate"
        },
        {
            name: "Image Recognition System",
            description: "Develop a deep learning model for image classification.",
            skills: ["Deep Learning", "CNN", "Keras/PyTorch", "Computer Vision"],
            difficulty: "Advanced"
        },
        {
            name: "Stock Price Forecasting",
            description: "Use time-series models to predict future stock prices.",
            skills: ["Time Series", "ARIMA", "LSTM", "Financial Data"],
            difficulty: "Intermediate"
        }
    ]
};
