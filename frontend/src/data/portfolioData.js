export const PERSONAL_INFO = {
  name: "Zohaib Tariq",
  title: "AI/ML Engineer",
  subtitle: "Generative AI | LLMs | Intelligent Automation",
  tagline: "Building Intelligence. Engineering the Future.",
  status: "AVAILABLE FOR AI/ML OPPORTUNITIES",
  bio: "I build intelligent applications using Machine Learning, Generative AI, and modern software engineering technologies to solve real-world problems. Currently in my 6th semester of BS Computer Science at Iqra University, Islamabad, with a dedicated focus on bridging the gap between state-of-the-art AI models and production-ready applications.",
  shortBio: "Transforming ideas into intelligent digital experiences through Machine Learning, Generative AI, and modern software engineering.",
  education: {
    degree: "BS Computer Science",
    institution: "Iqra University, Islamabad",
    semester: "6th Semester",
    status: "In Progress (Final Year Approaching)"
  },
  social: {
    github: "https://github.com/zohaibzohaibtariq3-dev",
    linkedin: "https://www.linkedin.com/in/zohaib-tariq-32646434b/",
    email: "zohaibzohaibtariq3@gmail.com",
  },
  stats: [
    { label: "Academic Standing", value: "6th Sem", detail: "BS Computer Science, Iqra Univ" },
    { label: "Core AI Projects", value: "5 Built", detail: "RAG, Voice, Vision & Analytics" },
    { label: "Specialization", value: "GenAI & ML", detail: "FastAPI, LLMs, Vector DBs" },
    { label: "Engineering Stack", value: "Python / React", detail: "Full-Stack AI Architecture" }
  ]
};

export const SKILL_CATEGORIES = [
  {
    id: "ai_ml",
    name: "AI & Machine Learning",
    description: "Core algorithms, foundation models, and generative intelligence",
    skills: [
      { name: "Machine Learning", level: "Core", practical: true },
      { name: "Deep Learning", level: "Applied", practical: true },
      { name: "Natural Language Processing (NLP)", level: "Specialized", practical: true },
      { name: "Generative AI", level: "Production", practical: true },
      { name: "Large Language Models (LLMs)", level: "Production", practical: true },
      { name: "Retrieval-Augmented Generation (RAG)", level: "Production", practical: true },
      { name: "Prompt Engineering", level: "Advanced", practical: true },
    ]
  },
  {
    id: "programming",
    name: "Programming Languages",
    description: "Core languages for systems, algorithms, and AI modeling",
    skills: [
      { name: "Python", level: "Primary", practical: true },
      { name: "JavaScript", level: "Proficient", practical: true },
      { name: "C++", level: "Foundational", practical: true },
      { name: "SQL", level: "Database", practical: true },
    ]
  },
  {
    id: "libraries",
    name: "Python Libraries",
    description: "Data manipulation, scientific computing, and model architectures",
    skills: [
      { name: "Scikit-learn", level: "ML Modeling", practical: true },
      { name: "TensorFlow", level: "Deep Learning", practical: true },
      { name: "NumPy", level: "Matrix Ops", practical: true },
      { name: "Pandas", level: "Data Pipelines", practical: true },
      { name: "Matplotlib", level: "Visualization", practical: true },
    ]
  },
  {
    id: "ai_tools",
    name: "AI Frameworks & Vector DBs",
    description: "Vector search, speech transcription, and LLM inference engines",
    skills: [
      { name: "FAISS", level: "Vector Indexing", practical: true },
      { name: "Pinecone", level: "Managed Vector DB", practical: true },
      { name: "Groq API", level: "Ultra-Fast Inference", practical: true },
      { name: "Faster-Whisper", level: "Audio Transcription", practical: true },
      { name: "LangChain", level: "Chain Orchestration", practical: true },
    ]
  },
  {
    id: "backend_db",
    name: "Backend & Databases",
    description: "High-throughput asynchronous APIs and relational databases",
    skills: [
      { name: "FastAPI", level: "Asynchronous APIs", practical: true },
      { name: "Flask", level: "Microservices", practical: true },
      { name: "REST APIs", level: "API Contracts", practical: true },
      { name: "PostgreSQL", level: "Relational DB", practical: true },
      { name: "SQLite", level: "Embedded DB", practical: true },
    ]
  },
  {
    id: "frontend_devops",
    name: "Frontend & DevOps",
    description: "Interactive user interfaces and containerized deployment workflows",
    skills: [
      { name: "React", level: "Modern UI", practical: true },
      { name: "Tailwind CSS", level: "Design Systems", practical: true },
      { name: "Docker", level: "Containerization", practical: true },
      { name: "Git & GitHub", level: "Version Control", practical: true },
      { name: "Vercel", level: "Edge Hosting", practical: true },
      { name: "Postman", level: "API Testing", practical: true },
      { name: "VS Code", level: "IDE Workflow", practical: true },
    ]
  }
];

export const PROJECTS = [
  {
    id: "resume-screener",
    title: "AI Resume Screener",
    tagline: "Automated candidate evaluation & semantic resume matching",
    featured: true,
    category: "Generative AI / NLP",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1000&q=80",
    tech: ["Python", "FastAPI", "Streamlit", "Scikit-learn", "NLP"],
    summary: "An intelligent applicant evaluation platform that eliminates manual CV filtering through automated parsing, entity recognition, and semantic similarity matching against role specifications.",
    features: [
      "PDF and DOCX document text extraction with structure normalization",
      "Semantic distance scoring between candidate profile and target job descriptions",
      "Granular matching matrix across core skills, tech stack, and experience relevancy",
      "FastAPI asynchronous backend with an interactive Streamlit evaluation dashboard",
      "Actionable candidate ranking metrics for technical hiring leads"
    ],
    architecture: [
      { step: "1. Resume Ingestion", desc: "PDF/DOCX documents received via FastAPI file upload" },
      { step: "2. NLP Parsing", desc: "Entity extraction to isolate technical skills, work history, and education" },
      { step: "3. Vectorization", desc: "Text embedding & TF-IDF semantic projection against job descriptions" },
      { step: "4. Similarity Metric", desc: "Cosine similarity & weighted domain scoring calculations" },
      { step: "5. Streamlit Dashboard", desc: "Visual comparison matrices, match indicators, and exportable reports" }
    ],
    github: "https://github.com/zohaibtariq/ai-resume-screener",
    demo: "https://resume-screener-demo.vercel.app"
  },
  {
    id: "voice-assistant",
    title: "AI Voice Assistant",
    tagline: "Low-latency conversational speech agent with Groq & Whisper",
    featured: true,
    category: "Speech AI / LLMs",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1000&q=80",
    tech: ["Flask", "Faster-Whisper", "Groq API", "Python", "TTS"],
    summary: "A high-performance conversational voice agent engineered for real-time responsiveness, combining local high-throughput audio transcription with ultra-fast Groq LPU inference.",
    features: [
      "Speech-to-text conversion utilizing optimized Faster-Whisper models",
      "Sub-second natural language reasoning powered by Groq LPU API",
      "Natural voice synthesis via low-latency Text-to-Speech pipeline",
      "Dynamic audio chunk buffering and silence detection for natural pacing",
      "Flask microservice handling audio streaming endpoints"
    ],
    architecture: [
      { step: "1. Audio Stream", desc: "Client microphone input streamed to Flask backend" },
      { step: "2. Faster-Whisper STT", desc: "Local CTranslate2-accelerated Whisper model performs ASR" },
      { step: "3. Context & Reasoning", desc: "Transcribed prompt dispatched to Groq API (LLM) with conversation state" },
      { step: "4. Speech Synthesis", desc: "Generated response synthesized via streaming TTS engine" },
      { step: "5. Audio Playback", desc: "Seamless audio playback returned to user with minimal latency" }
    ],
    github: "https://github.com/zohaibtariq/ai-voice-assistant",
    demo: "https://voice-assistant-demo.vercel.app"
  },
  {
    id: "pdf-rag-chatbot",
    title: "PDF RAG Chatbot",
    tagline: "Context-grounded document question answering system",
    featured: true,
    category: "RAG / Vector Search",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80",
    tech: ["Python", "LLMs", "FAISS", "Pinecone", "Embeddings", "FastAPI"],
    summary: "A reliable Retrieval-Augmented Generation application that allows users to converse with multi-page technical documents, guaranteeing grounded answers and source transparency.",
    features: [
      "Recursive text chunking with sliding window overlap to preserve semantic context",
      "Dense vector embeddings generated and indexed in FAISS and Pinecone",
      "Top-k semantic retrieval with cosine distance scoring",
      "Grounded prompt injection with strict anti-hallucination system constraints",
      "Source chunk citation displaying exact document page and paragraph origin"
    ],
    architecture: [
      { step: "1. Document Splitting", desc: "Recursive character splitter breaks PDF into 500-token chunks with 50-token overlap" },
      { step: "2. Dense Embeddings", desc: "High-dimensional embeddings created for each passage" },
      { step: "3. Vector Indexing", desc: "Vectors stored in FAISS (local) / Pinecone (cloud index)" },
      { step: "4. Semantic Search", desc: "User question is vectorized to retrieve top 4 most relevant chunks" },
      { step: "5. Grounded Synthesis", desc: "Augmented prompt presented to LLM to formulate cited answer" }
    ],
    github: "https://github.com/zohaibtariq/pdf-rag-chatbot",
    demo: "https://pdf-rag-demo.vercel.app"
  },
  {
    id: "ai-support-agent",
    title: "AI Support Agent",
    tagline: "Context-aware automated customer assistance with persistent memory",
    featured: true,
    category: "Intelligent Automation",
    image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1000&q=80",
    tech: ["FastAPI", "React", "SQLite", "FAISS", "Python"],
    summary: "An enterprise customer support bot featuring vector knowledge retrieval across technical documentation, persistent multi-turn session tracking, and intelligent human triage triggers.",
    features: [
      "Vector-indexed support knowledge base for instant answers to complex queries",
      "Persistent conversation session history stored in SQLite",
      "Confidence-score thresholding with automatic human escalation triggers",
      "High-speed FastAPI backend providing authenticated REST API endpoints",
      "Responsive React chat interface with Markdown rendering and suggested topics"
    ],
    architecture: [
      { step: "1. Client Message", desc: "React frontend dispatches chat message with session ID" },
      { step: "2. Session Retrieval", desc: "FastAPI pulls recent interaction history from SQLite" },
      { step: "3. FAISS Search", desc: "Query vectorized against company knowledge base articles" },
      { step: "4. LLM Generation", desc: "Context-augmented response synthesized and confidence verified" },
      { step: "5. State Commit", desc: "Response streamed to React UI and logged to SQLite" }
    ],
    github: "https://github.com/zohaibtariq/ai-support-agent",
    demo: "https://support-agent-demo.vercel.app"
  },
  {
    id: "smart-grid-platform",
    title: "Enterprise Smart Grid Intelligence Platform",
    tagline: "Predictive energy demand forecasting & grid load optimization",
    featured: true,
    category: "Machine Learning / Analytics",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80",
    tech: ["Python", "FastAPI", "PostgreSQL", "Machine Learning", "Scikit-learn"],
    summary: "A smart energy analytics and predictive management platform using supervised machine learning regression to forecast multi-horizon electrical demand and alert operators to grid spikes.",
    features: [
      "Supervised regression models trained on historical time-series consumption data",
      "Real-time consumption anomaly detection to flag power theft and infrastructure stress",
      "PostgreSQL time-series database design optimized for high-frequency telemetry",
      "FastAPI microservices exposing load forecast APIs and optimization alerts",
      "Peak-shaving recommendation engine to reduce energy costs"
    ],
    architecture: [
      { step: "1. Telemetry Ingest", desc: "Smart grid sensor telemetry captured in PostgreSQL" },
      { step: "2. Feature Engineering", desc: "Lag features, rolling moving averages, and weather indicators extracted" },
      { step: "3. Model Inference", desc: "Scikit-learn regression models predict 24-hour kilowatt demand" },
      { step: "4. Anomaly Filter", desc: "Z-score and isolation forest filters identify abnormal power draw" },
      { step: "5. API & Alerts", desc: "FastAPI serves analytics endpoints to operations dashboard" }
    ],
    github: "https://github.com/zohaibtariq/smart-grid-intelligence",
    demo: "https://smart-grid-demo.vercel.app"
  }
];

export const AI_KNOWLEDGE_TOPICS = [
  // Classical ML
  {
    name: "Supervised Learning",
    category: "Classical ML",
    status: "Hands-on Project Work",
    summary: "Algorithms trained on labeled datasets to map inputs to verified target outputs.",
    detail: "Zohaib applied supervised regression algorithms in his Enterprise Smart Grid Platform to forecast electrical demand based on historical telemetry and environmental variables."
  },
  {
    name: "Unsupervised Learning",
    category: "Classical ML",
    status: "Academic & Theoretical Study",
    summary: "Techniques for discovering intrinsic patterns, groupings, and structures in unlabeled data.",
    detail: "Studied through BS Computer Science coursework at Iqra University, covering dimensionality reduction (PCA) and clustering algorithms."
  },
  {
    name: "Classification",
    category: "Classical ML",
    status: "Hands-on Project Work",
    summary: "Predicting discrete category labels for data instances.",
    detail: "Employed in the AI Resume Screener to classify candidate competency levels and determine applicant qualification thresholds."
  },
  {
    name: "Regression",
    category: "Classical ML",
    status: "Hands-on Project Work",
    summary: "Modeling continuous mathematical relationships between input features and numerical targets.",
    detail: "Directly implemented in the Smart Grid Platform to predict kilowatt electrical consumption and future load demand curves."
  },
  {
    name: "Clustering",
    category: "Classical ML",
    status: "Academic & Theoretical Study",
    summary: "Partitioning data points into cohesive groups without ground truth labels.",
    detail: "Theoretical study of K-Means, hierarchical clustering, and DBSCAN algorithms for customer segmentation and unsupervised pattern extraction."
  },
  {
    name: "Decision Trees",
    category: "Classical ML",
    status: "Hands-on Project Work",
    summary: "Non-parametric hierarchical models making sequential decisions based on feature split rules.",
    detail: "Used for baseline interpretable classification and feature importance evaluation across tabular datasets."
  },
  {
    name: "Random Forest",
    category: "Classical ML",
    status: "Hands-on Project Work",
    summary: "Ensemble of randomized decision trees aggregated via bootstrap aggregation (bagging).",
    detail: "Utilized in predictive analytics projects to minimize variance, combat overfitting, and calculate robust feature importances."
  },
  {
    name: "Support Vector Machines",
    category: "Classical ML",
    status: "Academic & Theoretical Study",
    summary: "Maximal margin hyperplanes separating distinct classes in high-dimensional space.",
    detail: "Studied conceptually including linear separation, slack variables for soft margins, and kernel tricks (RBF, polynomial)."
  },
  {
    name: "Model Training",
    category: "Classical ML",
    status: "Hands-on Project Work",
    summary: "The iterative optimization loop minimizing cost functions through gradient updates.",
    detail: "Hands-on experience configuring training epochs, learning rates, batch sizes, and optimization solvers using Scikit-learn and TensorFlow."
  },
  {
    name: "Model Evaluation",
    category: "Classical ML",
    status: "Hands-on Project Work",
    summary: "Rigorous quantitative assessment of generalizability on unseen validation data.",
    detail: "Standardized evaluation using K-fold cross-validation, MSE, RMSE, MAE for regression, and Confusion Matrices, Precision, Recall, F1 for classification."
  },
  {
    name: "Feature Engineering",
    category: "Classical ML",
    status: "Hands-on Project Work",
    summary: "Transforming raw data into high-signal numerical representations for models.",
    detail: "Constructed temporal lag features, rolling windows, text embeddings, and normalized scalers in Python with Pandas and NumPy."
  },

  // Deep Learning
  {
    name: "Neural Networks",
    category: "Deep Learning",
    status: "Hands-on Project Work",
    summary: "Multi-layered computational graphs computing non-linear activations via backpropagation.",
    detail: "Implemented multi-layer perceptron (MLP) architectures in TensorFlow for non-linear regression and pattern recognition."
  },
  {
    name: "Deep Learning",
    category: "Deep Learning",
    status: "Hands-on Project Work",
    summary: "Deep architectures capable of hierarchical representation learning from unstructured data.",
    detail: "Explored deep architectures for text and speech processing, including Faster-Whisper ASR models and dense transformer layers."
  },
  {
    name: "CNN (Convolutional Neural Networks)",
    category: "Deep Learning",
    status: "Academic & Theoretical Study",
    summary: "Spatial filter architectures with translation invariance for computer vision.",
    detail: "Studied 2D convolution operations, pooling layers, receptive fields, and architectures like ResNet in computer science curriculum."
  },
  {
    name: "RNN (Recurrent Neural Networks)",
    category: "Deep Learning",
    status: "Academic & Theoretical Study",
    summary: "Sequential networks maintaining hidden recurrent states across time steps.",
    detail: "Explored the mechanics of vanishing gradients in vanilla RNNs and memory cell gates in LSTMs and GRUs for sequence modeling."
  },

  // NLP & Transformers
  {
    name: "Natural Language Processing (NLP)",
    category: "NLP & Transformers",
    status: "Hands-on Project Work",
    summary: "Techniques for computer understanding, tokenization, and processing of natural human language.",
    detail: "Applied across multiple projects including Resume parsing, entity extraction, document chunking, and speech transcription."
  },
  {
    name: "Transformers",
    category: "NLP & Transformers",
    status: "Hands-on Project Work",
    summary: "The foundational self-attention architecture that powers modern generative AI.",
    detail: "Practical experience consuming and fine-tuning prompts for transformer architectures (Llama, Whisper, text embedding models)."
  },
  {
    name: "Attention Mechanism",
    category: "NLP & Transformers",
    status: "Hands-on Project Work",
    summary: "Dynamic mathematical weighting allowing models to compute relationships across all tokens simultaneously.",
    detail: "Studied Scaled Dot-Product Attention (Query, Key, Value) and Multi-Head Attention formulations that underpin modern LLMs."
  },

  // Generative AI & LLMs
  {
    name: "Large Language Models (LLMs)",
    category: "Generative AI",
    status: "Hands-on Project Work",
    summary: "Massive foundation models capable of reasoning, coding, and multi-turn conversational synthesis.",
    detail: "Integrated LLMs via Groq API and OpenAI-compatible interfaces into production backends for high-speed voice and document Q&A."
  },
  {
    name: "Prompt Engineering",
    category: "Generative AI",
    status: "Hands-on Project Work",
    summary: "Disciplined crafting of system prompts, few-shot examples, and output schemas to guide LLMs.",
    detail: "Engineered strict system prompts preventing hallucinations in RAG systems, enforcing JSON response formats, and setting persona guidelines."
  },
  {
    name: "AI Agents",
    category: "Generative AI",
    status: "Hands-on Project Work",
    summary: "Autonomous LLM systems equipped with tools, memory, and multi-step reasoning capabilities.",
    detail: "Architected the AI Support Agent with stateful tool invocation, SQLite conversation memory, and automated ticket escalation."
  },
  {
    name: "Generative AI",
    category: "Generative AI",
    status: "Hands-on Project Work",
    summary: "The umbrella paradigm of generating novel text, code, audio, and visual outputs via deep learning.",
    detail: "Core technical focus: building software applications powered by generative text, streaming voice, and automated intelligence pipelines."
  },

  // Vector & Retrieval Systems
  {
    name: "Embeddings",
    category: "Vector & Retrieval",
    status: "Hands-on Project Work",
    summary: "Dense numerical vectors capturing semantic meaning in continuous geometric space.",
    detail: "Extracted document and query embeddings for similarity matching in the PDF RAG Chatbot and AI Resume Screener."
  },
  {
    name: "Vector Databases",
    category: "Vector & Retrieval",
    status: "Hands-on Project Work",
    summary: "Specialized databases optimized for approximate nearest neighbor (ANN) vector indexing and search.",
    detail: "Configured and queried FAISS for high-speed local indexing and Pinecone for cloud-managed vector storage."
  },
  {
    name: "Retrieval-Augmented Generation (RAG)",
    category: "Vector & Retrieval",
    status: "Hands-on Project Work",
    summary: "Architecture injecting external document search into LLM prompts for factual grounding.",
    detail: "Architected end-to-end PDF RAG Chatbot: recursive text chunking, FAISS vector indexing, top-k retrieval, and grounded answer synthesis."
  },
  {
    name: "Semantic Search",
    category: "Vector & Retrieval",
    status: "Hands-on Project Work",
    summary: "Information retrieval based on conceptual intent and vector proximity rather than keyword matches.",
    detail: "Implemented cosine similarity and inner product search over vector embeddings to match resumes and answer knowledge base queries."
  },

  // Production & Engineering
  {
    name: "API Integration",
    category: "Production & Engineering",
    status: "Hands-on Project Work",
    summary: "Connecting machine learning models and LLMs to client applications via RESTful protocols.",
    detail: "Built asynchronous FastAPI and Flask endpoints connecting frontend applications to Groq LLMs, FAISS vector indices, and PostgreSQL DBs."
  }
];

export const LEARNING_JOURNEY = [
  {
    year: "Semester 1 - 2",
    phase: "Computer Science Foundations & OOP",
    institution: "Iqra University, Islamabad",
    summary: "Built strong fundamentals in programming, problem-solving, and computational thinking.",
    highlights: [
      "Mastered C++ and Object-Oriented Programming principles (inheritance, polymorphism, abstraction)",
      "Studied foundational Data Structures (arrays, linked lists, trees, graphs) and algorithm complexities",
      "Gained working proficiency in Git, GitHub, and modular code organization"
    ]
  },
  {
    year: "Semester 3",
    phase: "Python Ecosystem & Database Engineering",
    institution: "Iqra University, Islamabad",
    summary: "Transitioned to Python as the primary language for scientific computing and backend systems.",
    highlights: [
      "Extensive scripting with NumPy, Pandas, and Matplotlib for data processing",
      "Relational database design, schema normalization, and complex queries in SQL & PostgreSQL",
      "Built RESTful microservices using Flask and connected them to relational storage"
    ]
  },
  {
    year: "Semester 4",
    phase: "Classical Machine Learning & Analytics",
    institution: "Iqra University & Self-Directed Labs",
    summary: "Deep dive into statistical learning theory, supervised/unsupervised models, and feature engineering.",
    highlights: [
      "Implemented Regression, Decision Trees, Random Forests, and SVM using Scikit-learn",
      "Developed the Enterprise Smart Grid Intelligence Platform for energy load forecasting",
      "Formulated rigorous model evaluation practices (cross-validation, precision/recall, RMSE)"
    ]
  },
  {
    year: "Semester 5",
    phase: "Deep Learning, NLP & Foundation Models",
    institution: "Iqra University & AI Research Projects",
    summary: "Exploration of neural architectures, transformers, and automated speech recognition.",
    highlights: [
      "Trained neural network models in TensorFlow and studied Transformer attention mechanisms",
      "Engineered the AI Voice Assistant utilizing Faster-Whisper ASR and Flask audio pipelines",
      "Built the AI Resume Screener using text extraction, NLP, and semantic similarity scoring"
    ]
  },
  {
    year: "Semester 6 (Current)",
    phase: "Generative AI, RAG & Production Full-Stack AI",
    institution: "Iqra University, Islamabad",
    summary: "Architecting end-to-end intelligent systems, vector databases, and real-time LLM applications.",
    highlights: [
      "Developed the PDF RAG Chatbot using FAISS, Pinecone, and context-grounded prompting",
      "Built the AI Support Agent with FastAPI, React, SQLite session persistence, and FAISS",
      "Mastered low-latency inference orchestration using Groq API and asynchronous FastAPI microservices",
      "Actively seeking AI/ML engineering roles to deliver real-world software impact"
    ]
  }
];

export const CHATBOT_SUGGESTED_QUESTIONS = [
  "Who is Zohaib Tariq?",
  "What AI/ML projects has he built?",
  "What technologies does he know?",
  "Does he have experience with RAG and LLMs?",
  "Explain his AI Voice Assistant.",
  "Tell me about his Resume Screener.",
  "What makes him a good AI/ML Engineer?",
  "How can I contact him?",
  "What is his educational background?",
  "What are his career goals?"
];
