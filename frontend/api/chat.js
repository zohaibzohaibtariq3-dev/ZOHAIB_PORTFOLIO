const SYSTEM_PROMPT = `You are 'Ask Zohaib AI', the official AI portfolio assistant for Zohaib Tariq.
Your primary role is to inform recruiters, technical leads, hiring managers, and software house engineering managers about Zohaib Tariq's qualifications, projects, skills, education, and technical expertise.

Guidelines:
1. Always maintain a professional, articulate, polite, and confident tone.
2. Zohaib Tariq is an aspiring AI/ML Engineer and BS Computer Science student (6th Semester) at Iqra University, Islamabad.
3. Only cite Zohaib's verified skills, projects, and educational milestones. NEVER invent professional work experiences, company employments, fake awards, fake client names, or fabricated benchmark metrics.
4. If a user asks about a specific project, explain its architecture, tech stack, and key capabilities clearly.
5. If a user asks about an AI/ML concept, provide a high-level concise technical explanation and connect it to how Zohaib has studied or practically applied it in his projects.
6. If the user asks something completely outside of Zohaib's portfolio or AI/ML domain, politely explain your purpose and invite them to ask about Zohaib's projects, skills, or background.
7. Keep responses concise, clear, and structured with clean markdown where appropriate.

ZOHAIB TARIQ'S VERIFIED KNOWLEDGE BASE:
- Name: Zohaib Tariq
- Title: AI/ML Engineer (Generative AI | LLMs | Intelligent Automation)
- Education: Bachelor of Science in Computer Science (BS CS), Iqra University, Islamabad (6th Semester, In Progress)
- Positioning: Aspiring AI/ML Engineer focused on turning advanced Machine Learning and Generative AI research into scalable, production-grade applications, intelligent automation pipelines, and robust backend systems.
- Programming Languages: Python, JavaScript, C++, SQL
- AI/ML Technologies: Machine Learning, Deep Learning, Natural Language Processing (NLP), Generative AI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Prompt Engineering
- Python Libraries: NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow
- Frameworks & Tools: FAISS, Pinecone, Groq API, Faster-Whisper, LangChain, FastAPI, Flask, React, Tailwind CSS, PostgreSQL, SQLite, Docker, Git, GitHub, Vercel
- Links & Contact:
  * Email: zohaibzohaibtariq3@gmail.com
  * GitHub: https://github.com/zohaibzohaibtariq3-dev
  * LinkedIn: https://www.linkedin.com/in/zohaib-tariq-32646434b/

FEATURED PROJECTS:
1. AI Resume Screener (Python, FastAPI, Streamlit, Scikit-learn, NLP):
   - Automated candidate evaluation and resume semantic matching against job specs.
   - Text parsing, entity extraction, TF-IDF/embeddings similarity computation.
2. AI Voice Assistant (Flask, Faster-Whisper, Groq API, Python, TTS):
   - Ultra low-latency conversational speech interface.
   - Near real-time transcription with Faster-Whisper + ultra-fast reasoning with Groq LPU inference.
3. PDF RAG Chatbot (Python, FAISS, Pinecone, LLMs, FastAPI):
   - Context-grounded document question-answering system.
   - Overlapping chunking, high-dimensional vector embeddings, semantic retrieval, anti-hallucination.
4. AI Support Agent (FastAPI, React, SQLite, FAISS):
   - Context-aware automated customer assistance with vector-indexed knowledge base and persistent dialogue history.
5. Enterprise Smart Grid Intelligence Platform (Python, FastAPI, PostgreSQL, Scikit-learn):
   - Energy analytics & predictive load forecasting using supervised regression and anomaly detection.`;

function getFallbackAnswer(query) {
  const q = query.toLowerCase();

  if (q.includes("who is") || q.includes("who are you") || q.includes("about zohaib") || q.includes("intro")) {
    return "**Zohaib Tariq** is an aspiring **AI/ML Engineer** currently in his 6th semester studying BS Computer Science at **Iqra University, Islamabad**.\\n\\nHe specializes in Machine Learning, Generative AI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and intelligent automation with FastAPI and modern AI frameworks.";
  }
  if (q.includes("education") || q.includes("degree") || q.includes("university") || q.includes("iqra")) {
    return "**Educational Background:**\\n- **Degree:** Bachelor of Science in Computer Science (BS CS)\\n- **Institution:** Iqra University, Islamabad\\n- **Current Standing:** 6th Semester (In Progress)";
  }
  if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("python")) {
    return "**Technical Skill Matrix:**\\n\\n• **Programming:** Python, JavaScript, C++, SQL\\n• **AI/ML:** Generative AI, LLMs, RAG, Machine Learning, Deep Learning, NLP, Prompt Engineering\\n• **Libraries & Frameworks:** NumPy, Pandas, Scikit-learn, TensorFlow, FAISS, Pinecone, Groq API, Faster-Whisper, LangChain\\n• **Backend & Web:** FastAPI, Flask, React, Tailwind CSS, PostgreSQL, SQLite";
  }
  if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("hire") || q.includes("linkedin")) {
    return "**Get in Touch with Zohaib Tariq:**\\n\\n• **Email:** [zohaibzohaibtariq3@gmail.com](mailto:zohaibzohaibtariq3@gmail.com)\\n• **LinkedIn:** [linkedin.com/in/zohaib-tariq-32646434b](https://www.linkedin.com/in/zohaib-tariq-32646434b/)\\n• **GitHub:** [github.com/zohaibzohaibtariq3-dev](https://github.com/zohaibzohaibtariq3-dev)";
  }
  if (q.includes("project") || q.includes("built")) {
    return "**Featured Projects by Zohaib Tariq:**\\n\\n1. **AI Resume Screener** (FastAPI, Streamlit, NLP) - Semantic resume parsing & job matching.\\n2. **AI Voice Assistant** (Flask, Faster-Whisper, Groq API) - Ultra-fast speech-to-speech assistant.\\n3. **PDF RAG Chatbot** (FAISS, Pinecone, LLMs, FastAPI) - Document question-answering.\\n4. **AI Support Agent** (FastAPI, React, SQLite, FAISS) - Contextual support desk.\\n5. **Enterprise Smart Grid Platform** (FastAPI, PostgreSQL, ML) - Predictive energy load forecasting.";
  }

  return "Thank you for asking! I am **Ask Zohaib AI**. You can ask me about Zohaib's projects (AI Resume Screener, Voice Assistant, PDF RAG Chatbot), his AI/ML skills (FastAPI, Python, RAG, LLMs), or his educational background at Iqra University.";
}

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }

  const { message, history } = body || {};
  const userMsg = (message || "").trim();

  if (!userMsg) {
    return res.status(400).json({ error: "Message cannot be empty" });
  }

  const apiKey = process.env.GROQ_API_KEY;

  if (apiKey && apiKey.trim() && !apiKey.startsWith("your_")) {
    try {
      const messages = [{ role: "system", content: SYSTEM_PROMPT }];
      if (Array.isArray(history)) {
        for (const h of history.slice(-6)) {
          if (h && h.role && h.content) {
            messages.push({ role: h.role, content: h.content });
          }
        }
      }
      messages.push({ role: "user", content: userMsg });

      // Try llama-3.3-70b-versatile first, then fallback to openai/gpt-oss-20b
      const modelsToTry = ["llama-3.3-70b-versatile", "openai/gpt-oss-20b", "llama-3.1-8b-instant"];
      let lastError = null;

      for (const model of modelsToTry) {
        try {
          const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey.trim()}`
            },
            body: JSON.stringify({
              model: model,
              messages: messages,
              temperature: 0.3,
              max_tokens: 600
            })
          });

          if (groqResponse.ok) {
            const data = await groqResponse.json();
            const replyText = data.choices?.[0]?.message?.content;
            if (replyText) {
              return res.status(200).json({
                reply: replyText,
                source: "groq",
                model: model
              });
            }
          } else {
            const errBody = await groqResponse.text();
            console.error(`Groq error with ${model}:`, errBody);
            lastError = errBody;
          }
        } catch (innerErr) {
          console.error(`Groq fetch exception with ${model}:`, innerErr);
          lastError = innerErr;
        }
      }
    } catch (err) {
      console.error("Groq execution failed:", err);
    }
  }

  // Graceful deterministic fallback
  const fallbackText = getFallbackAnswer(userMsg);
  return res.status(200).json({
    reply: fallbackText,
    source: "knowledge_base",
    model: "deterministic_engine"
  });
}
