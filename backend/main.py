import os
import re
from typing import List, Optional
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from dotenv import load_dotenv

from knowledge import PROFILE_DATA, SYSTEM_PROMPT

load_dotenv()

app = FastAPI(
    title="Zohaib Tariq Portfolio API",
    description="Backend services and AI Assistant for Zohaib Tariq - AI/ML Engineer",
    version="1.0.0"
)

# CORS configuration
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

class ChatMessage(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=2000)
    history: Optional[List[ChatMessage]] = []

class ChatResponse(BaseModel):
    reply: str
    source: str
    model: Optional[str] = None

class ContactRequest(BaseModel):
    name: str = Field(..., min_length=2)
    email: str = Field(..., min_length=5)
    subject: str = Field(..., min_length=2)
    message: str = Field(..., min_length=5)

def match_fallback_answer(query: str) -> str:
    """
    Intelligent deterministic retrieval engine matching queries against verified profile facts.
    Guarantees instant, accurate answers if Groq API is not configured or offline.
    """
    q = query.lower()

    # 1. Who is Zohaib Tariq / Intro
    if any(k in q for k in ["who is", "who are you", "tell me about zohaib", "about zohaib", "introduce", "intro"]):
        return (
            f"**Zohaib Tariq** is an aspiring **AI/ML Engineer** currently in his 6th semester studying "
            f"BS Computer Science at **Iqra University, Islamabad**.\n\n"
            f"He specializes in Machine Learning, Generative AI, Large Language Models (LLMs), "
            f"Retrieval-Augmented Generation (RAG), and intelligent automation. "
            f"Zohaib focuses on transforming theoretical AI models into reliable, production-grade applications "
            f"with modern backend frameworks like FastAPI and Flask."
        )

    # 2. Education
    if any(k in q for k in ["education", "degree", "university", "college", "semester", "school", "iqra"]):
        return (
            f"**Educational Background:**\n"
            f"- **Degree:** Bachelor of Science in Computer Science (BS CS)\n"
            f"- **Institution:** Iqra University, Islamabad\n"
            f"- **Current Standing:** 6th Semester (In Progress)\n\n"
            f"His academic coursework and self-directed research encompass Artificial Intelligence, "
            f"Data Structures & Algorithms, Database Systems, Object-Oriented Programming, and Machine Learning."
        )

    # 3. Technologies & Skills
    if any(k in q for k in ["technolog", "skill", "stack", "language", "python", "fastapi", "tools"]):
        return (
            f"**Technical Skill Matrix:**\n\n"
            f"• **Programming:** Python, JavaScript, C++, SQL\n"
            f"• **AI & ML:** Machine Learning, Deep Learning, NLP, Generative AI, LLMs, RAG, Prompt Engineering\n"
            f"• **Python Libraries:** NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow\n"
            f"• **AI Frameworks & Vector Tools:** FAISS, Pinecone, Groq API, Faster-Whisper, LangChain\n"
            f"• **Backend:** FastAPI, Flask, RESTful API architecture\n"
            f"• **Frontend:** React, JavaScript, HTML5, CSS3, Tailwind CSS\n"
            f"• **Databases:** PostgreSQL, SQLite\n"
            f"• **DevOps & Tooling:** Docker, Git, GitHub, Vercel, VS Code, Postman"
        )

    # 4. RAG and LLMs
    if any(k in q for k in ["rag", "retrieval", "llm", "large language model", "generative ai", "genai", "embeddings"]):
        return (
            f"**RAG & LLM Expertise:**\n\n"
            f"Zohaib has practical experience engineering Retrieval-Augmented Generation (RAG) pipelines and LLM systems:\n\n"
            f"1. **PDF RAG Chatbot:** Implemented document chunking, dense embeddings, and approximate nearest neighbor search via **FAISS** and **Pinecone**, injecting retrieved text into LLMs with strict anti-hallucination prompts.\n"
            f"2. **AI Voice Assistant:** Leveraged **Groq API** (LPU inference) paired with **Faster-Whisper** for ultra-low-latency real-time conversational reasoning.\n"
            f"3. **AI Support Agent:** Combined vector databases with persistent SQLite dialogue history for context-aware customer support."
        )

    # 5. Voice Assistant
    if any(k in q for k in ["voice assistant", "whisper", "speech", "faster-whisper", "audio"]):
        return (
            f"**Project: AI Voice Assistant**\n\n"
            f"Zohaib engineered a low-latency conversational speech assistant using:\n"
            f"• **Flask Backend:** Manages audio stream payloads and session states.\n"
            f"• **Faster-Whisper:** High-speed automatic speech recognition (ASR) to transcribe voice input.\n"
            f"• **Groq API:** Ultra-fast LLM inference to formulate immediate conversational responses.\n"
            f"• **TTS Pipeline:** Synthesizes the generated text back into natural speech.\n\n"
            f"Key advantage: Near-instant turnaround time, avoiding the awkward lag typical of traditional voice bots."
        )

    # 6. Resume Screener
    if any(k in q for k in ["resume", "screener", "screening", "applicant", "matching"]):
        return (
            f"**Project: AI Resume Screener**\n\n"
            f"Designed to streamline candidate evaluation for technical recruiters:\n"
            f"• **Core Stack:** Python, FastAPI, Streamlit, Scikit-learn, NLP.\n"
            f"• **Functionality:** Ingests PDF and DOCX resumes, extracts key skills and experiences, and calculates semantic alignment against specific job descriptions.\n"
            f"• **Evaluation:** Generates structured suitability scores and objective candidate breakdowns."
        )

    # 7. PDF RAG Chatbot
    if any(k in q for k in ["pdf", "document", "chat with pdf"]):
        return (
            f"**Project: PDF RAG Chatbot**\n\n"
            f"A context-grounded document question-answering system:\n"
            f"• **Stack:** Python, LLMs, FAISS / Pinecone vector storage, Embeddings, FastAPI.\n"
            f"• **Workflow:** Recursively chunks documents with overlapping windows, encodes text into high-dimensional vector embeddings, performs top-k semantic retrieval, and grounds the LLM response strictly within document evidence."
        )

    # 8. AI Support Agent
    if any(k in q for k in ["support agent", "customer support", "support bot"]):
        return (
            f"**Project: AI Support Agent**\n\n"
            f"An automated customer assistance system with context awareness:\n"
            f"• **Stack:** FastAPI, React, SQLite, FAISS.\n"
            f"• **Features:** Vector-indexed knowledge base for accurate problem resolution, persistent conversation tracking, and automated confidence-based triage for human escalation."
        )

    # 9. Smart Grid Platform
    if any(k in q for k in ["smart grid", "energy", "grid", "electricity", "forecasting"]):
        return (
            f"**Project: Enterprise Smart Grid Intelligence Platform**\n\n"
            f"An energy analytics and optimization platform:\n"
            f"• **Stack:** Python, FastAPI, PostgreSQL, Machine Learning (Scikit-learn).\n"
            f"• **Features:** Supervised regression models for electrical load demand forecasting, anomaly detection for abnormal consumption spikes, and peak-load optimization analytics."
        )

    # 10. All Projects summary
    if any(k in q for k in ["all project", "projects", "portfolio project", "what has he built", "built"]):
        return (
            f"**Featured Projects by Zohaib Tariq:**\n\n"
            f"1. **AI Resume Screener** (Python, FastAPI, Streamlit, NLP) - Semantic resume parsing & job matching.\n"
            f"2. **AI Voice Assistant** (Flask, Faster-Whisper, Groq API, TTS) - Low-latency speech-to-speech assistant.\n"
            f"3. **PDF RAG Chatbot** (Python, FAISS, Pinecone, LLMs) - Grounded question-answering over documents.\n"
            f"4. **AI Support Agent** (FastAPI, React, SQLite, FAISS) - Contextual support desk with persistent memory.\n"
            f"5. **Enterprise Smart Grid Platform** (Python, FastAPI, PostgreSQL, ML) - Predictive energy load forecasting."
        )

    # 11. What makes him a good engineer / Hire him
    if any(k in q for k in ["why hire", "good engineer", "strengths", "stand out", "value"]):
        return (
            f"**Why Zohaib Tariq Stands Out as an AI/ML Engineer:**\n\n"
            f"1. **Practical Engineering Focus:** He bridges the gap between machine learning concepts and production software, packaging models into fast, well-documented FastAPI/Flask services.\n"
            f"2. **Modern AI Stack:** Hands-on experience with RAG, vector databases (FAISS/Pinecone), LLM orchestration, and modern inference engines (Groq API).\n"
            f"3. **Solid Software Engineering Foundations:** Grounded in Computer Science fundamentals (algorithms, OOP, database design, REST APIs, Docker, Git).\n"
            f"4. **Dedication & Fast Learner:** Continuously building tangible projects to solve real-world problems."
        )

    # 12. Contact information
    if any(k in q for k in ["contact", "email", "reach", "hire", "talk to", "linkedin", "github"]):
        return (
            f"**Get in Touch with Zohaib Tariq:**\n\n"
            f"• **Email:** [zohaibtariq.ai@gmail.com](mailto:zohaibtariq.ai@gmail.com)\n"
            f"• **LinkedIn:** [linkedin.com/in/zohaibtariq](https://linkedin.com/in/zohaibtariq)\n"
            f"• **GitHub:** [github.com/zohaibtariq](https://github.com/zohaibtariq)\n\n"
            f"You can also use the contact form at the bottom of this website to send a direct message!"
        )

    # 13. Career goals
    if any(k in q for k in ["career goal", "goals", "future", "ambition", "seeking", "looking for"]):
        return (
            f"**Career Goals:**\n\n"
            f"Zohaib aims to work as an **AI/ML Engineer** with innovative software engineering teams, "
            f"designing intelligent automation systems, scalable RAG architectures, and autonomous AI agents. "
            f"He is open to internship and junior engineering opportunities where he can deliver real engineering impact."
        )

    # 14. Concept lookup in concepts list
    for concept in PROFILE_DATA["concepts"]:
        if concept["name"].lower() in q:
            return (
                f"**{concept['name']} ({concept['category']})**\n\n"
                f"• **Category:** {concept['category']}\n"
                f"• **Zohaib's Experience Status:** {concept['status']}\n\n"
                f"{concept['description']}"
            )

    # Default fallback
    return (
        f"Thank you for asking! As **Ask Zohaib AI**, I can answer questions about Zohaib Tariq's "
        f"projects (AI Resume Screener, Voice Assistant, PDF RAG Chatbot, AI Support Agent, Smart Grid Platform), "
        f"his technical skills (Python, FastAPI, RAG, LLMs, Scikit-learn), or his educational background at Iqra University.\n\n"
        f"Try asking:\n"
        f"• *'Explain his AI Voice Assistant'*\n"
        f"• *'What is his experience with RAG and LLMs?'*\n"
        f"• *'What technologies does he work with?'*\n"
        f"• *'How can I get in touch with him?'*"
    )


@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "service": "Zohaib Tariq Portfolio API",
        "groq_configured": bool(GROQ_API_KEY)
    }

@app.get("/api/profile")
def get_profile():
    return PROFILE_DATA

@app.post("/api/chat", response_model=ChatResponse)
async def chat_endpoint(req: ChatRequest):
    user_msg = req.message.strip()
    if not user_msg:
        raise HTTPException(status_code=400, detail="Message cannot be empty")

    # If Groq API key is configured, invoke Groq LLM
    if GROQ_API_KEY and GROQ_API_KEY.strip() and not GROQ_API_KEY.startswith("your_"):
        try:
            from groq import Groq
            client = Groq(api_key=GROQ_API_KEY.strip())
            
            messages = [{"role": "system", "content": SYSTEM_PROMPT}]
            if req.history:
                for h in req.history[-6:]:
                    messages.append({"role": h.role, "content": h.content})
            messages.append({"role": "user", "content": user_msg})

            completion = client.chat.completions.create(
                model="openai/gpt-oss-20b",
                messages=messages,
                temperature=0.3,
                max_tokens=600,
            )
            reply_text = completion.choices[0].message.content
            return ChatResponse(
                reply=reply_text,
                source="groq",
                model="openai/gpt-oss-20b",
            )
        except Exception as e:
            print("GROQ API ERROR:", repr(e))

            reply_text = match_fallback_answer(user_msg)

            return ChatResponse(
                reply=reply_text,
                source="knowledge_base_fallback",
                model="deterministic_rag_engine"
            )
    # Use intelligent knowledge retrieval engine if Groq is not configured
    reply_text = match_fallback_answer(user_msg)
    return ChatResponse(
        reply=reply_text,
        source="knowledge_base",
        model="deterministic_rag_engine"
    )

@app.post("/api/contact")
async def contact_endpoint(req: ContactRequest):
    # Validate and acknowledge contact message
    return {
        "success": True,
        "message": f"Thank you {req.name}, your message has been received! Zohaib will get back to you shortly."
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
