# Zohaib Tariq – AI/ML Engineer Portfolio

> **"Building Intelligence. Engineering the Future."**  
> Premium, production-grade personal portfolio website for **Zohaib Tariq – AI/ML Engineer**.

---

## 🌟 Executive Overview

Designed with an award-winning Awwwards / Apple-level black & red aesthetic, this portfolio showcases real-world AI applications, machine learning architectures, and modern software engineering capabilities.

- **Name:** Zohaib Tariq
- **Role:** AI/ML Engineer (Generative AI | LLMs | Intelligent Automation)
- **Education:** BS Computer Science, Iqra University, Islamabad (6th Semester)
- **Core Stack:** Python, FastAPI, React, Groq API, FAISS, Faster-Whisper, PostgreSQL, Docker

---

## 🎨 Design System

| Element | Specification |
|---|---|
| **Background** | Deep Black (`#080808`), Secondary (`#111111`) |
| **Accent Red** | Primary Red (`#FF3030`), Bright Red (`#FF4545`), Dark Red (`#8B0000`) |
| **Typography** | `Outfit` (Display Headlines), `Plus Jakarta Sans` (Body UI), `JetBrains Mono` (Code/Data) |
| **Visual Effects** | Interactive 3D Canvas Neural Sphere, Glassmorphism, Red Atmospheric Lighting, Desktop Glowing Cursor |

---

## 🚀 Key Sections & Features

1. **Cinematic Hero Landing Page:**
   - Asymmetrical layout with high-impact typography.
   - Interactive 3D HTML5 Canvas **Neural Intelligence Sphere** with dynamic mouse parallax and synaptic axon connections.
   - Rotating AI specialty ticker and live availability status indicator.
   - Primary CTAs: *Explore My Work*, *Let's Connect*, and *Resume*.
   - Infinite marquee ticker highlighting core AI disciplines.

2. **About Me:**
   - Engineering narrative detailing the journey from foundational algorithms to LLMs and production RAG.
   - Interactive developer profile card with verified CS coursework at Iqra University, Islamabad.
   - 4 core engineering pillars: Applied ML, Generative AI & LLMs, RAG Architectures, Production Backend Systems.

3. **Technical Skills:**
   - Categorized matrix: Programming, AI & ML, Python Libraries, AI Tools & Vector DBs, Backend, Frontend & DevOps.
   - Live interactive search filter and category pills.
   - Honest proficiency tags without arbitrary fake percentages.

4. **Featured Projects:**
   - **AI Resume Screener:** Python, FastAPI, Streamlit, Scikit-learn, NLP.
   - **AI Voice Assistant:** Flask, Faster-Whisper, Groq API, TTS.
   - **PDF RAG Chatbot:** Python, LLMs, FAISS, Pinecone, Embeddings, FastAPI.
   - **AI Support Agent:** FastAPI, React, SQLite, FAISS.
   - **Enterprise Smart Grid Intelligence Platform:** Python, FastAPI, PostgreSQL, Scikit-learn.
   - Dedicated **System Architecture Deep-Dive Modal** with step-by-step pipeline flows and an **Interactive Simulator Sandbox**.

5. **AI/ML Knowledge Index (26 Core Concepts):**
   - Deep-dive into 26 AI technologies across Classical ML, Deep Learning, NLP & Transformers, GenAI, and Vector Retrieval.
   - Clear distinction between *Hands-on Project Work* and *Academic & Theoretical Study*.

6. **Learning Journey Timeline:**
   - Chronological progression from CS fundamentals (C++, OOP, Data Structures) to modern full-stack AI system deployment.

7. **Ask Zohaib AI Chatbot:**
   - Floating red glowing widget with expandable dark glassmorphism dialog.
   - 10 suggested questions for recruiters and hiring managers.
   - Integrates with FastAPI backend (`/api/chat`) and Groq API (`llama-3.3-70b-versatile`), with an automatic local knowledge fallback engine.

8. **Contact & CV Export:**
   - Collaboration inquiry form with client-side validation.
   - One-click email copy button and verified social links.
   - Interactive printable and exportable CV modal.

---

## 🛠️ Quick Start & Running the Project

### Prerequisites
- **Node.js** (v18+) & **npm**
- **Python** (v3.10+)

### 1. Launch Everything with One Click
Double-click `start_all.bat` in the project root:
```bash
start_all.bat
```

### 2. Manual Launch

#### Backend (FastAPI):
```bash
cd backend
python -m pip install -r requirements.txt
python -m uvicorn main:app --host 127.0.0.1 --port 8000 --reload
```
- API Health: `http://127.0.0.1:8000/api/health`
- Interactive Swagger UI: `http://127.0.0.1:8000/docs`

#### Frontend (React + Vite):
```bash
cd frontend
npm install
npm run dev
```
- Web Application: `http://localhost:5173`

---

## 🔑 Environment Variables (Optional)

In `backend/.env`:
```env
# Optional: Provide Groq API key for live real-time LLM inference
GROQ_API_KEY=gsk_your_groq_api_key_here
PORT=8000
HOST=127.0.0.1
```
*(If no API key is provided, the backend seamlessly falls back to the embedded deterministic knowledge matching engine, so the chatbot works flawlessly out of the box!)*
