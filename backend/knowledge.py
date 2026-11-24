"""
Structured knowledge base for Zohaib Tariq - AI/ML Engineer
Used by the AI portfolio assistant and the fallback answering engine.
"""

PROFILE_DATA = {
    "name": "Zohaib Tariq",
    "title": "AI/ML Engineer",
    "subtitle": "Generative AI | LLMs | Intelligent Automation",
    "education": {
        "degree": "Bachelor of Science in Computer Science (BS CS)",
        "institution": "Iqra University, Islamabad",
        "current_semester": "6th Semester",
        "status": "In Progress"
    },
    "positioning": "Aspiring AI/ML Engineer focused on turning advanced Machine Learning and Generative AI research into scalable, production-grade applications, intelligent automation pipelines, and robust backend systems.",
    "links": {
        "github": "https://github.com/zohaibzohaibtariq3-dev",
        "linkedin": "https://www.linkedin.com/in/zohaib-tariq-32646434b/",
        "email": "zohaibzohaibtariq3@gmail.com"
    },
    "skills": {
        "programming": ["Python", "JavaScript", "C++", "SQL"],
        "ai_ml": [
            "Machine Learning", "Deep Learning", "Natural Language Processing (NLP)",
            "Generative AI", "Large Language Models (LLMs)", "Retrieval-Augmented Generation (RAG)",
            "Prompt Engineering"
        ],
        "python_libraries": ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow"],
        "ai_frameworks_tools": ["FAISS", "Pinecone", "Groq API", "Faster-Whisper", "LangChain"],
        "backend": ["FastAPI", "Flask", "REST APIs"],
        "frontend": ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
        "databases": ["PostgreSQL", "SQLite"],
        "devops_tools": ["Docker", "Git", "GitHub", "Vercel", "VS Code", "Postman"]
    },
    "projects": [
        {
            "id": "resume-screener",
            "title": "AI Resume Screener",
            "tagline": "Intelligent automated candidate evaluation & resume semantic matching",
            "tech": ["Python", "FastAPI", "Streamlit", "Scikit-learn", "NLP"],
            "description": "An end-to-end AI-powered recruitment pipeline that parses resumes in various document formats, extracts candidate competencies, and performs semantic similarity scoring against job descriptions to assist technical recruiters.",
            "key_features": [
                "Automated PDF and DOCX text parsing & entity extraction",
                "Semantic similarity matching between resumes and job specifications",
                "Scoring breakdown across skills, experience relevancy, and education",
                "FastAPI asynchronous backend with an interactive Streamlit testing dashboard"
            ],
            "architecture": "Client UI (Streamlit) -> FastAPI Backend -> Text Processing & Extraction -> TF-IDF / Embedding Vectorizer -> Similarity Computation -> Ranked Results JSON",
            "github": "https://github.com/zohaibtariq/ai-resume-screener",
            "demo": "https://resume-screener-demo.vercel.app"
        },
        {
            "id": "voice-assistant",
            "title": "AI Voice Assistant",
            "tagline": "Low-latency conversational speech interface powered by Faster-Whisper and Groq",
            "tech": ["Flask", "Faster-Whisper", "Groq API", "Python", "TTS"],
            "description": "A responsive voice-driven AI conversational agent that combines real-time speech transcription via Faster-Whisper, rapid reasoning via Groq LLM inference, and fluid audio synthesis.",
            "key_features": [
                "Near real-time audio transcription with optimized Faster-Whisper models",
                "Ultra-fast conversational reasoning powered by Groq LPU inference",
                "Streaming audio response generation for natural conversation tempo",
                "Audio buffer management and background noise filtering"
            ],
            "architecture": "Microphone Audio Stream -> Faster-Whisper STT -> Prompt Context Assembly -> Groq API (LLM) -> Text-to-Speech Engine -> Audio Output",
            "github": "https://github.com/zohaibtariq/ai-voice-assistant",
            "demo": "https://voice-assistant-demo.vercel.app"
        },
        {
            "id": "pdf-rag-chatbot",
            "title": "PDF RAG Chatbot",
            "tagline": "Context-grounded document question answering system",
            "tech": ["Python", "LLMs", "FAISS", "Pinecone", "Embeddings", "FastAPI"],
            "description": "An enterprise-grade Retrieval-Augmented Generation application enabling users to query complex multi-page PDF documents with accurate, hallucination-resistant answers grounded strictly in retrieved document context.",
            "key_features": [
                "Multi-format document parsing with recursive chunking and sliding window overlaps",
                "High-dimensional vector embeddings with FAISS and Pinecone indexing",
                "Top-k semantic retrieval with reranking and context boundary injection",
                "Hallucination mitigation via strict grounding system instructions"
            ],
            "architecture": "PDF Ingestion -> Recursive Text Chunker -> Embedding Model -> FAISS Vector Store -> Query Vectorization -> Semantic Search -> Augmented Prompt -> LLM Inference",
            "github": "https://github.com/zohaibtariq/pdf-rag-chatbot",
            "demo": "https://pdf-rag-demo.vercel.app"
        },
        {
            "id": "ai-support-agent",
            "title": "AI Support Agent",
            "tagline": "Context-aware automated customer assistance with persistent knowledge indexing",
            "tech": ["FastAPI", "React", "SQLite", "FAISS", "Python"],
            "description": "An intelligent multi-turn customer support system integrating a vector knowledge base for accurate issue resolution, support ticket escalation triggers, and persistent interaction logs.",
            "key_features": [
                "Vector-indexed customer knowledge base for instant troubleshooting answers",
                "Stateful multi-turn dialog tracking with SQLite conversation persistence",
                "Intelligent fallback to human agent escalation upon threshold confidence drops",
                "FastAPI REST endpoints integrated with a responsive React frontend"
            ],
            "architecture": "React Frontend -> FastAPI REST API -> SQLite Session Store & FAISS Knowledge Retrieval -> Prompt Synthesizer -> LLM -> Validated Support Response",
            "github": "https://github.com/zohaibtariq/ai-support-agent",
            "demo": "https://support-agent-demo.vercel.app"
        },
        {
            "id": "smart-grid-platform",
            "title": "Enterprise Smart Grid Intelligence Platform",
            "tagline": "Predictive energy demand forecasting & grid load optimization",
            "tech": ["Python", "FastAPI", "PostgreSQL", "Machine Learning", "Scikit-learn"],
            "description": "An energy analytics platform utilizing supervised machine learning models to forecast regional energy demand, detect consumption anomalies, and provide peak-load optimization recommendations.",
            "key_features": [
                "Supervised regression models for multi-horizon electrical load forecasting",
                "Anomaly detection algorithms to flag abnormal grid spikes and power drain",
                "PostgreSQL time-series schema storing historical telemetric grid logs",
                "RESTful APIs delivering real-time forecast metrics and load-shaving alerts"
            ],
            "architecture": "Smart Meter Telemetry -> PostgreSQL Time-Series DB -> Feature Engineering Pipeline -> ML Regression & Anomaly Models -> FastAPI Services -> Analytics Dashboard",
            "github": "https://github.com/zohaibtariq/smart-grid-intelligence",
            "demo": "https://smart-grid-demo.vercel.app"
        }
    ],
    "concepts": [
        {
            "name": "Supervised Learning",
            "category": "Classical ML",
            "status": "Hands-on Project Work",
            "description": "Training algorithms on labeled datasets where inputs correspond to known targets, learning mapping functions to predict outcomes on unseen data. Applied in Smart Grid energy forecasting."
        },
        {
            "name": "Unsupervised Learning",
            "category": "Classical ML",
            "status": "Academic & Theoretical Study",
            "description": "Discovering hidden patterns, clusters, or intrinsic groupings in unlabeled data without explicit supervision or target guidance."
        },
        {
            "name": "Classification",
            "category": "Classical ML",
            "status": "Hands-on Project Work",
            "description": "Predicting discrete categorical labels for input instances. Utilized in candidate filtering in the AI Resume Screener and anomaly detection."
        },
        {
            "name": "Regression",
            "category": "Classical ML",
            "status": "Hands-on Project Work",
            "description": "Modeling continuous numeric relationships between independent features and target variables. Directly implemented in the Enterprise Smart Grid Platform for kilowatt load forecasting."
        },
        {
            "name": "Clustering",
            "category": "Classical ML",
            "status": "Academic & Theoretical Study",
            "description": "Unsupervised partitioning of data points into cohesive subsets (e.g. K-Means, DBSCAN) based on metric distances in feature space."
        },
        {
            "name": "Decision Trees",
            "category": "Classical ML",
            "status": "Hands-on Project Work",
            "description": "Hierarchical non-parametric model that recursively partitions feature space using optimal split criteria like Gini impurity or Information Gain."
        },
        {
            "name": "Random Forest",
            "category": "Classical ML",
            "status": "Hands-on Project Work",
            "description": "Ensemble learning technique combining multiple randomized decision trees with bagging to reduce variance and improve generalization robustness."
        },
        {
            "name": "Support Vector Machines",
            "category": "Classical ML",
            "status": "Academic & Theoretical Study",
            "description": "Maximal margin classifiers finding optimal hyperplanes to separate classes, utilizing kernel tricks for non-linear boundary mappings."
        },
        {
            "name": "Model Training",
            "category": "Classical ML",
            "status": "Hands-on Project Work",
            "description": "The iterative optimization procedure of adjusting model weights through loss minimization via gradient-based or closed-form solvers."
        },
        {
            "name": "Model Evaluation",
            "category": "Classical ML",
            "status": "Hands-on Project Work",
            "description": "Rigorous performance assessment using cross-validation and metrics such as MSE, RMSE, MAE for regression, and Precision, Recall, F1-Score, ROC-AUC for classification."
        },
        {
            "name": "Feature Engineering",
            "category": "Classical ML",
            "status": "Hands-on Project Work",
            "description": "Transforming raw data into predictive signals through normalization, one-hot encoding, lag feature generation, polynomial features, and domain-specific extraction."
        },
        {
            "name": "Neural Networks",
            "category": "Deep Learning",
            "status": "Hands-on Project Work",
            "description": "Computational graphs inspired by biological neural structures, consisting of interconnected layers of artificial neurons learning non-linear representations via backpropagation."
        },
        {
            "name": "Deep Learning",
            "category": "Deep Learning",
            "status": "Hands-on Project Work",
            "description": "Multi-layered neural architectures capable of hierarchical feature learning directly from raw inputs such as text, audio, and visual tensors."
        },
        {
            "name": "CNN (Convolutional Neural Networks)",
            "category": "Deep Learning",
            "status": "Academic & Theoretical Study",
            "description": "Specialized neural network architectures employing shift-invariant spatial convolutions and pooling filters for image and 2D grid processing."
        },
        {
            "name": "RNN (Recurrent Neural Networks)",
            "category": "Deep Learning",
            "status": "Academic & Theoretical Study",
            "description": "Sequential neural networks with recurrent feedback loops designed to maintain hidden state memory across sequential inputs (text, time-series)."
        },
        {
            "name": "NLP (Natural Language Processing)",
            "category": "NLP & Transformers",
            "status": "Hands-on Project Work",
            "description": "Computational techniques enabling machines to parse, analyze, comprehend, and generate human language. Applied in Resume Screening, Support Agent, and RAG systems."
        },
        {
            "name": "Transformers",
            "category": "NLP & Transformers",
            "status": "Hands-on Project Work",
            "description": "The foundational self-attention based architecture that eliminated recurrence, enabling parallelized sequence processing and powering modern SOTA LLMs."
        },
        {
            "name": "Attention Mechanism",
            "category": "NLP & Transformers",
            "status": "Hands-on Project Work",
            "description": "Mathematical formulation (Scaled Dot-Product Attention) enabling models to dynamically weigh the contextual relevance of all tokens relative to each other."
        },
        {
            "name": "Large Language Models (LLMs)",
            "category": "Generative AI",
            "status": "Hands-on Project Work",
            "description": "Billions-scale parameter foundation models trained on massive corpora, exhibiting emergent reasoning, text synthesis, and zero/few-shot problem solving capabilities."
        },
        {
            "name": "Prompt Engineering",
            "category": "Generative AI",
            "status": "Hands-on Project Work",
            "description": "Systematic design of system instructions, few-shot exemplars, structured schemas, and chain-of-thought prompts to maximize deterministic, accurate LLM outputs."
        },
        {
            "name": "Embeddings",
            "category": "Vector & Retrieval",
            "status": "Hands-on Project Work",
            "description": "Dense high-dimensional vector representations where semantic relationships between text, documents, or concepts correspond to geometric proximity in vector space."
        },
        {
            "name": "Vector Databases",
            "category": "Vector & Retrieval",
            "status": "Hands-on Project Work",
            "description": "Purpose-built storage engines (FAISS, Pinecone) optimized for approximate nearest neighbor (ANN) search over millions of high-dimensional vectors."
        },
        {
            "name": "Retrieval-Augmented Generation (RAG)",
            "category": "Vector & Retrieval",
            "status": "Hands-on Project Work",
            "description": "Architecture combining external document retrieval with LLMs to eliminate hallucinations, inject private proprietary knowledge, and ensure factual citation."
        },
        {
            "name": "Semantic Search",
            "category": "Vector & Retrieval",
            "status": "Hands-on Project Work",
            "description": "Query retrieval based on conceptual meaning and contextual intent rather than naive keyword matching, using cosine similarity or dot product over embeddings."
        },
        {
            "name": "AI Agents",
            "category": "Generative AI",
            "status": "Hands-on Project Work",
            "description": "Autonomous software entities powered by LLMs with access to external tools, memory stores, and reasoning loops to accomplish multi-step objectives."
        },
        {
            "name": "Generative AI",
            "category": "Generative AI",
            "status": "Hands-on Project Work",
            "description": "Broad class of artificial intelligence models capable of generating novel synthetic content, including natural text, audio, structured code, and visual artifacts."
        },
        {
            "name": "API Integration",
            "category": "Production & Engineering",
            "status": "Hands-on Project Work",
            "description": "Architecting resilient, secure RESTful interfaces connecting client applications to machine learning models, external LLM providers (Groq API), and data pipelines."
        }
    ]
}

SYSTEM_PROMPT = f"""You are 'Ask Zohaib AI', the official AI portfolio assistant for Zohaib Tariq.
Your primary role is to inform recruiters, technical leads, hiring managers, and software house engineering managers about Zohaib Tariq's qualifications, projects, skills, education, and technical expertise.

Guidelines:
1. Always maintain a professional, articulate, polite, and confident tone.
2. Zohaib Tariq is an AI/ML Engineer and BS Computer Science student (6th Semester) at Iqra University, Islamabad.
3. Only cite Zohaib's verified skills, projects, and educational milestones. NEVER invent professional work experiences, company employments, fake awards, fake client names, or fabricated benchmark metrics.
4. If a user asks about a specific project, explain its architecture, tech stack, and key capabilities clearly.
5. If a user asks about an AI/ML concept, provide a high-level concise technical explanation and connect it to how Zohaib has studied or practically applied it in his projects.
6. If the user asks something completely outside of Zohaib's portfolio or AI/ML domain, politely explain your purpose and invite them to ask about Zohaib's projects, skills, or background.
7. Keep responses concise, clear, and structured with clean markdown where appropriate.

ZOHAIB TARIQ'S VERIFIED KNOWLEDGE BASE:
- Name: {PROFILE_DATA['name']}
- Title: {PROFILE_DATA['title']} ({PROFILE_DATA['subtitle']})
- Education: {PROFILE_DATA['education']['degree']}, {PROFILE_DATA['education']['institution']} ({PROFILE_DATA['education']['current_semester']})
- Core Positioning: {PROFILE_DATA['positioning']}
- Programming Languages: {', '.join(PROFILE_DATA['skills']['programming'])}
- AI/ML Technologies: {', '.join(PROFILE_DATA['skills']['ai_ml'])}
- Python Libraries: {', '.join(PROFILE_DATA['skills']['python_libraries'])}
- Frameworks & Tools: {', '.join(PROFILE_DATA['skills']['ai_frameworks_tools'])}, {', '.join(PROFILE_DATA['skills']['backend'])}, {', '.join(PROFILE_DATA['skills']['frontend'])}
- Databases & DevOps: {', '.join(PROFILE_DATA['skills']['databases'])}, {', '.join(PROFILE_DATA['skills']['devops_tools'])}

PROJECTS:
1. AI Resume Screener: Python, FastAPI, Streamlit, Scikit-learn, NLP. Automated PDF resume extraction, candidate semantic matching, scoring against job descriptions.
2. AI Voice Assistant: Flask, Faster-Whisper, Groq API, Python, TTS. Near real-time speech-to-text, fast Groq LLM inference, fluid speech synthesis.
3. PDF RAG Chatbot: Python, LLMs, FAISS, Pinecone, Embeddings, FastAPI. Context-grounded Q&A over PDF documents with recursive chunking and semantic vector search.
4. AI Support Agent: FastAPI, React, SQLite, FAISS. Intelligent customer support with vector-indexed knowledge retrieval, multi-turn dialogue, and ticket triage.
5. Enterprise Smart Grid Intelligence Platform: Python, FastAPI, PostgreSQL, Scikit-learn. Machine learning time-series energy forecasting and anomaly detection.
"""
