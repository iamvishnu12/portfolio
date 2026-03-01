import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, Linkedin, Github, X, ArrowUpRight, Award, Sparkles, MessageCircle } from "lucide-react";

/* ─── Intersection Observer Reveal ─── */
const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

const Reveal = ({ children, delay = 0, style = {} }) => {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0px)" : "translateY(28px)",
      transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
      ...style
    }}>{children}</div>
  );
};

/* ─── DESIGN TOKENS ─── */
const G = {
  gold:    "#c9a84c",
  goldDim: "rgba(201,168,76,0.18)",
  goldBdr: "rgba(201,168,76,0.22)",
  bg:      "#07070e",
  bgCard:  "rgba(255,255,255,0.025)",
  bgHov:   "rgba(201,168,76,0.045)",
  bgAlt:   "rgba(201,168,76,0.018)",
  text:    "#ece4d2",
  muted:   "#6e6554",
  soft:    "#b8aa90",
  display: "'Playfair Display', Georgia, serif",
  body:    "'Cormorant Garamond', Georgia, serif",
};

/* ─── RESUME DATA ─── */
const skillGroups = [
  { label: "Languages",            items: ["Java", "JavaScript"] },
  { label: "Frameworks & Libraries", items: ["Spring Boot (MVC)", "Spring Boot (Microservices)", "Spring Data JPA", "Hibernate", "Spring Security (JWT)", "React.js", "Apache Kafka"] },
  { label: "Databases",            items: ["MySQL", "MongoDB"] },
  { label: "Cloud & DevOps",       items: ["AWS EC2", "AWS RDS", "Docker"] },
  { label: "Tools",                items: ["Git", "Maven", "Swagger", "Postman", "Jira"] },
  { label: "Core Concepts",        items: ["Data Structures & Algorithms", "Object-Oriented Programming (OOPs)", "DBMS"] },
  { label: "Development Skills",   items: ["REST API Design", "Authentication & Authorization", "Database Optimization", "Microservices Architecture", "Debugging"] },
];

const experience = [{
  role: "Associate Software Engineer", company: "Tech Mahindra", location: "Bengaluru, India", period: "Sept 2024 – Present",
  bullets: [
    "Refactored backend modules of the Drona Manufacturing System into modular Spring Boot microservices, improving maintainability and increasing uptime by 20%.",
    "Optimized 15+ REST APIs, reducing average response time from 850ms to 320ms using indexing, query optimization, and caching.",
    "Improved transactional efficiency using Spring Data JPA and Hibernate, reducing redundant database operations by 30%.",
    "Enhanced API reliability with validation, centralized exception handling, and Swagger documentation.",
    "Used Git, Maven, Docker, and Jira to support agile development and consistent builds.",
  ],
  tags: ["Spring Boot", "Microservices", "REST API", "JPA", "Hibernate", "Docker", "Swagger", "Git", "Maven", "Jira"],
}];

const education = [
  { degree: "Bachelor of Engineering — Information Science & Engineering", school: "CMR Institute of Technology, Bengaluru", period: "May 2024", grade: "CGPA: 8.08 / 10" },
  { degree: "12th Grade", school: "SRS PU College, Chitradurga, Karnataka", period: "Mar 2020", grade: "86.83%" },
];

const certifications = [
  { name: "Docker for Java Developers", org: "Udemy" },
  { name: "Java Spring Framework 6 with Spring Boot 3", org: "Udemy" },
];

const projects = [
  {
    title: "AI Resume Assistant", subtitle: "RAG-based Chatbot", year: "2024",
    tags: ["FastAPI", "LangChain", "ChromaDB", "Gemini API", "React", "Render"],
    bullets: [
      "Built an AI-powered resume assistant using Retrieval-Augmented Generation (RAG) that allows users to ask natural language questions about experience, skills, and projects.",
      "Developed a FastAPI backend that retrieves relevant resume embeddings from Chroma vector database and generates responses using Gemini LLM.",
      "Implemented document ingestion pipeline to convert resume PDFs into semantic embeddings using LangChain text splitters and Google Generative AI embeddings.",
      "Designed an interactive React chatbot interface integrated with the deployed backend API to enable real-time AI responses.",
      "Deployed the backend on Render with persistent vector storage and public API access.",
      "Optimized retrieval using semantic similarity search to ensure accurate responses based on resume content.",
    ],
    link: "https://portfolio-rag-backend-zons.onrender.com", featured: true,
  },
  {
    title: "E-Commerce Platform", subtitle: "Full-Stack Application", year: "2024",
    tags: ["Java", "Spring Boot", "Spring Security", "MySQL", "React.js", "Kafka", "Docker"],
    bullets: [
      "Built a full-stack eCommerce app supporting authentication, product catalog, cart and order management.",
      "Implemented JWT-based security using Spring Security with role-based access control.",
      "Integrated Apache Kafka for event-driven order and inventory processing.",
      "Developed React.js frontend connected with backend REST APIs.",
      "Containerized services using Docker with optimized MySQL persistence.",
    ],
    link: "https://github.com/iamvishnu12", featured: false,
  },
];

const NAV = ["home","about","skills","experience","education","certifications","projects","contact"];

const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/vishnu-reddy-a-m-333971308",
  github:   "https://github.com/iamvishnu12",
  email:    "mailto:vishnureddyam9@gmail.com",
  phone:    "tel:+919900988387",
};

/* ─── SUB-COMPONENTS ─── */
const SectionEyebrow = ({ children }) => (
  <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:14 }}>
    <span style={{ display:"block", width:36, height:1, background:G.gold, opacity:0.45 }} />
    <span style={{ fontFamily:G.body, fontSize:"0.7rem", letterSpacing:"0.32em", textTransform:"uppercase", color:G.gold, opacity:0.75 }}>{children}</span>
  </div>
);

const SectionTitle = ({ children }) => (
  <h2 style={{ fontFamily:G.display, fontSize:"clamp(2rem,4vw,3rem)", fontWeight:700, color:G.text, lineHeight:1.08, margin:"0 0 3rem" }}>{children}</h2>
);

const Tag = ({ children }) => (
  <span style={{ display:"inline-block", padding:"3px 11px", border:`1px solid ${G.goldBdr}`, color:G.muted, fontSize:"0.66rem", letterSpacing:"0.1em", textTransform:"uppercase", fontFamily:G.body }}>{children}</span>
);

const SkillPill = ({ children }) => {
  const [hov, setHov] = useState(false);
  return (
    <span onMouseOver={() => setHov(true)} onMouseOut={() => setHov(false)} style={{
      display:"inline-flex", alignItems:"center", padding:"7px 16px",
      border:`1px solid ${hov ? G.gold : G.goldBdr}`,
      background: hov ? G.bgHov : G.bgCard,
      color: hov ? G.gold : G.soft,
      fontSize:"0.85rem", fontFamily:G.body, letterSpacing:"0.03em",
      transition:"all 0.25s", cursor:"default",
    }}>{children}</span>
  );
};

const Divider = () => (
  <div style={{ width:"100%", height:1, background:`linear-gradient(90deg, transparent, ${G.goldBdr}, transparent)` }} />
);

/* ─── WELCOME POPUP ─── */
const WelcomePopup = ({ onClose, onOpenChat }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small delay so the animation feels intentional
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  const handleOpenChat = () => {
    onClose();
    onOpenChat();
  };

  const suggestions = [
    "What are Vishnu's core skills?",
    "Tell me about his experience",
    "What projects has he built?",
    "Is he open to opportunities?",
  ];

  return (
    <>
      {/* Backdrop */}
      <div style={{
        position:"fixed", inset:0, background:"rgba(0,0,0,0.75)", zIndex:300,
        backdropFilter:"blur(6px)",
        opacity: visible ? 1 : 0,
        transition:"opacity 0.5s ease",
      }} onClick={onClose} />

      {/* Modal */}
      <div style={{
        position:"fixed", top:"50%", left:"50%",
        transform: visible ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -48%) scale(0.96)",
        zIndex:301, width:"min(520px, 92vw)",
        background:"#0c0c18",
        border:`1px solid rgba(201,168,76,0.35)`,
        boxShadow:`0 40px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(201,168,76,0.08)`,
        opacity: visible ? 1 : 0,
        transition:"all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        overflow:"hidden",
      }}>

        {/* top gold bar */}
        <div style={{ height:2, background:`linear-gradient(90deg, transparent, ${G.gold}, transparent)` }} />

        {/* close button */}
        <button onClick={onClose} style={{
          position:"absolute", top:16, right:16,
          background:"none", border:"none", color:G.muted, cursor:"pointer",
          padding:4, transition:"color 0.2s", zIndex:1,
        }}
          onMouseOver={e => e.currentTarget.style.color=G.gold}
          onMouseOut={e => e.currentTarget.style.color=G.muted}
        ><X size={18}/></button>

        <div style={{ padding:"2.5rem 2.5rem 2rem" }}>

          {/* AI badge */}
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:"1.5rem" }}>
            <div style={{
              width:42, height:42, borderRadius:"50%",
              background:`linear-gradient(135deg, ${G.gold}, #8c6820)`,
              display:"flex", alignItems:"center", justifyContent:"center",
              boxShadow:`0 0 20px rgba(201,168,76,0.3)`,
              flexShrink:0,
            }}>
              <span style={{ fontSize:"1.2rem" }}>🤖</span>
            </div>
            <div>
              <div style={{ fontFamily:G.display, color:G.text, fontSize:"0.95rem" }}>AI Portfolio Assistant</div>
              <div style={{ display:"flex", alignItems:"center", gap:5, marginTop:2 }}>
                <span style={{ width:6, height:6, borderRadius:"50%", background:"#4ade80", display:"inline-block", boxShadow:"0 0 6px #4ade80" }} />
                <span style={{ fontSize:"0.65rem", color:"#4ade80", letterSpacing:"0.1em", fontFamily:G.body }}>Online · RAG-powered</span>
              </div>
            </div>
          </div>

          {/* Heading */}
          <h2 style={{ fontFamily:G.display, fontSize:"clamp(1.6rem,4vw,2.1rem)", fontWeight:700, color:G.text, lineHeight:1.12, margin:"0 0 1rem" }}>
            Welcome to<br/>Vishnu's Portfolio
          </h2>

          {/* Intro text */}
          <p style={{ color:G.muted, fontSize:"1rem", lineHeight:1.78, fontStyle:"italic", marginBottom:"1.75rem" }}>
            I'm an AI assistant trained on Vishnu's resume, projects, and experience. Ask me anything — I'll give you real answers instantly.
          </p>

          {/* Suggestion chips */}
          <div style={{ marginBottom:"2rem" }}>
            <div style={{ fontSize:"0.65rem", letterSpacing:"0.22em", textTransform:"uppercase", color:G.muted, marginBottom:"0.75rem", fontFamily:G.body }}>Try asking</div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
              {suggestions.map(s => (
                <button key={s} onClick={handleOpenChat} style={{
                  padding:"6px 14px", border:`1px solid ${G.goldBdr}`,
                  background:G.bgCard, color:G.soft, fontFamily:G.body,
                  fontSize:"0.82rem", cursor:"pointer", transition:"all 0.2s",
                  textAlign:"left",
                }}
                  onMouseOver={e => { e.currentTarget.style.borderColor=G.gold; e.currentTarget.style.color=G.gold; e.currentTarget.style.background=G.bgHov; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor=G.goldBdr; e.currentTarget.style.color=G.soft; e.currentTarget.style.background=G.bgCard; }}
                >"{s}"</button>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div style={{ display:"flex", gap:"0.75rem", flexWrap:"wrap" }}>
            <button onClick={handleOpenChat} style={{
              flex:1, minWidth:180,
              padding:"13px 24px",
              background:`linear-gradient(135deg, ${G.gold}, #8c6820)`,
              border:"none", color:G.bg, cursor:"pointer",
              fontFamily:G.body, fontSize:"0.82rem", letterSpacing:"0.14em",
              textTransform:"uppercase", transition:"opacity 0.2s",
              display:"flex", alignItems:"center", justifyContent:"center", gap:8,
              boxShadow:`0 4px 20px rgba(201,168,76,0.3)`,
            }}
              onMouseOver={e => e.currentTarget.style.opacity="0.88"}
              onMouseOut={e => e.currentTarget.style.opacity="1"}
            >
              <MessageCircle size={15} /> Chat with AI
            </button>
            <button onClick={onClose} style={{
              padding:"13px 24px",
              border:`1px solid ${G.goldBdr}`,
              background:"transparent", color:G.muted, cursor:"pointer",
              fontFamily:G.body, fontSize:"0.82rem", letterSpacing:"0.14em",
              textTransform:"uppercase", transition:"all 0.2s",
            }}
              onMouseOver={e => { e.currentTarget.style.color=G.gold; e.currentTarget.style.borderColor=G.gold; }}
              onMouseOut={e => { e.currentTarget.style.color=G.muted; e.currentTarget.style.borderColor=G.goldBdr; }}
            >
              Explore Portfolio
            </button>
          </div>
        </div>

        {/* bottom band */}
        <div style={{ padding:"1rem 2.5rem", borderTop:`1px solid rgba(201,168,76,0.08)`, background:"rgba(201,168,76,0.02)", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <span style={{ fontSize:"0.68rem", color:G.muted, letterSpacing:"0.08em", fontFamily:G.body, fontStyle:"italic" }}>
            Powered by FastAPI · LangChain · Gemini
          </span>
          <div style={{ display:"flex", gap:8 }}>
            {["🔒 Private","⚡ Real-time"].map(t => (
              <span key={t} style={{ fontSize:"0.62rem", color:G.muted, letterSpacing:"0.08em", fontFamily:G.body }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

/* ─── MAIN APP ─── */
export default function App() {
  const [active, setActive]       = useState("home");
  const [scrolled, setScrolled]   = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [chatOpen, setChatOpen]   = useState(false);
  const [messages, setMessages]   = useState([
    { role:"assistant", content:"Hi! 👋 I'm Vishnu's AI assistant, trained on his resume and projects. What would you like to know?" }
  ]);
  const [input, setInput]     = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 50);
      const cur = NAV.find(s => {
        const el = document.getElementById(s);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 130 && r.bottom >= 130;
      });
      if (cur) setActive(cur);
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior:"smooth" }); }, [messages, loading]);

  const goto = id => {
    document.getElementById(id)?.scrollIntoView({ behavior:"smooth", block:"start" });
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role:"user", content: input };
    setMessages(p => [...p, userMsg]);
    const q = input; setInput(""); setLoading(true);
    try {
      const res = await fetch("https://portfolio-rag-backend-zons.onrender.com/ask", {
        method:"POST", headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({ question: q })
      });
      const data = await res.json();
      setMessages(p => [...p, { role:"assistant", content: data.answer }]);
    } catch {
      setMessages(p => [...p, { role:"assistant", content:"Something went wrong. Please try again." }]);
    }
    setLoading(false);
  };

  const openChat = () => { setChatOpen(true); };

  return (
    <div style={{ fontFamily:G.body, background:G.bg, color:G.text, minHeight:"100vh", overflowX:"hidden" }}>

      {/* ══════════ WELCOME POPUP ══════════ */}
      {showWelcome && (
        <WelcomePopup
          onClose={() => setShowWelcome(false)}
          onOpenChat={() => { setShowWelcome(false); openChat(); }}
        />
      )}

      {/* ══════════ NAV ══════════ */}
      <nav style={{
        position:"fixed", top:0, width:"100%", zIndex:100,
        background: scrolled ? "rgba(7,7,14,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? `1px solid ${G.goldBdr}` : "1px solid transparent",
        transition:"all 0.4s ease",
      }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 2rem", display:"flex", alignItems:"center", justifyContent:"space-between", height:60 }}>
          <span style={{ fontFamily:G.display, fontSize:"1.15rem", color:G.gold, letterSpacing:"0.06em" }}>VR</span>
          <div style={{ display:"flex", gap:2, flexWrap:"wrap" }}>
            {NAV.map(link => (
              <button key={link} onClick={() => goto(link)} style={{
                padding:"5px 13px", border:"none",
                borderBottom:`1px solid ${active===link ? G.gold : "transparent"}`,
                background:"transparent", cursor:"pointer", fontFamily:G.body,
                fontSize:"0.72rem", letterSpacing:"0.14em", textTransform:"uppercase",
                color: active===link ? G.gold : G.muted, transition:"all 0.2s",
              }}
                onMouseOver={e => { if (active!==link) e.currentTarget.style.color = G.soft; }}
                onMouseOut={e => { if (active!==link) e.currentTarget.style.color = G.muted; }}
              >{link}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* ══════════ HERO ══════════ */}
      <section id="home" style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 70% 55% at 50% 42%, rgba(201,168,76,0.065) 0%, transparent 68%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", top:"18%", left:"7%", width:1, height:"58%", background:`linear-gradient(to bottom, transparent, ${G.goldBdr}, transparent)` }} />
        <div style={{ position:"absolute", top:"18%", right:"7%", width:1, height:"58%", background:`linear-gradient(to bottom, transparent, ${G.goldBdr}, transparent)` }} />

        <div style={{ textAlign:"center", padding:"0 2rem", zIndex:1, maxWidth:720 }}>
          <div style={{
            width:100, height:100, margin:"0 auto 2.5rem",
            border:`1px solid rgba(201,168,76,0.5)`,
            borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center",
            fontFamily:G.display, fontSize:"2.2rem", color:G.gold,
            animation:"heroGlow 3.5s ease-in-out infinite",
          }}>VR</div>

          <div style={{ fontSize:"0.68rem", letterSpacing:"0.38em", textTransform:"uppercase", color:G.gold, opacity:0.75, marginBottom:"1.1rem" }}>
            Associate Software Engineer · Tech Mahindra · Bengaluru
          </div>

          <h1 style={{
            fontFamily:G.display, fontSize:"clamp(3.2rem,8vw,5.8rem)", fontWeight:700,
            lineHeight:1.04, margin:"0 0 1.4rem",
            background:`linear-gradient(140deg, #f2e8cc 0%, ${G.gold} 50%, #f2e8cc 100%)`,
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
          }}>
            Vishnu<br/>Reddy A M
          </h1>

          <p style={{ color:G.muted, fontSize:"1.05rem", lineHeight:1.78, fontStyle:"italic", marginBottom:"2.8rem" }}>
            Backend specialist — designing secure REST APIs, scalable microservices<br/>
            and reliable enterprise systems with Java &amp; Spring Boot.
          </p>

          <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap", marginBottom:"2.5rem" }}>
            {[["View Projects","projects",true],["Get In Touch","contact",false]].map(([label,id,primary]) => (
              <button key={id} onClick={() => goto(id)} style={{
                padding:"11px 30px", fontFamily:G.body,
                border:`1px solid ${primary ? G.gold : G.goldBdr}`,
                background:"transparent", color: primary ? G.gold : G.muted,
                cursor:"pointer", fontSize:"0.78rem", letterSpacing:"0.16em", textTransform:"uppercase", transition:"all 0.3s",
              }}
                onMouseOver={e => { e.currentTarget.style.background=primary?G.gold:"transparent"; e.currentTarget.style.color=primary?G.bg:G.gold; e.currentTarget.style.borderColor=G.gold; }}
                onMouseOut={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.color=primary?G.gold:G.muted; e.currentTarget.style.borderColor=primary?G.gold:G.goldBdr; }}
              >{label}</button>
            ))}
          </div>

          <div style={{ display:"flex", gap:"1.5rem", justifyContent:"center" }}>
            {[
              { icon:<Linkedin size={16}/>, href:SOCIALS.linkedin, label:"LinkedIn" },
              { icon:<Github size={16}/>,   href:SOCIALS.github,   label:"GitHub"   },
              { icon:<Mail size={16}/>,     href:SOCIALS.email,    label:"Email"    },
              { icon:<Phone size={16}/>,    href:SOCIALS.phone,    label:"Phone"    },
            ].map(({ icon, href, label }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" title={label}
                style={{ color:G.muted, display:"flex", alignItems:"center", transition:"color 0.2s" }}
                onMouseOver={e => e.currentTarget.style.color=G.gold}
                onMouseOut={e => e.currentTarget.style.color=G.muted}
              >{icon}</a>
            ))}
          </div>
        </div>

        <div style={{ position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)" }}>
          <div style={{ width:1, height:52, background:`linear-gradient(to bottom, ${G.gold}, transparent)`, margin:"0 auto", animation:"scrollLine 2s ease-in-out infinite", opacity:0.5 }} />
        </div>
      </section>

      <Divider />

      {/* ══════════ ABOUT ══════════ */}
      <section id="about" style={{ padding:"120px 2rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <Reveal>
            <SectionEyebrow>About</SectionEyebrow>
            <div style={{ display:"grid", gridTemplateColumns:"1.1fr 0.9fr", gap:"5rem", alignItems:"start" }}>
              <div>
                <SectionTitle>Backend-focused<br/>engineer at heart</SectionTitle>
                <p style={{ color:G.muted, lineHeight:1.85, fontSize:"1.05rem", marginBottom:"1.4rem" }}>
                  Backend-focused Software Engineer with strong experience in Java, Spring Boot, and MySQL. Proven ability to design secure REST APIs, implement JWT-based authentication, optimize databases, and build scalable microservices.
                </p>
                <p style={{ color:G.muted, lineHeight:1.85, fontSize:"1.05rem" }}>
                  Passionate about performance, maintainability, and delivering reliable enterprise systems — currently contributing to mission-critical manufacturing software at Tech Mahindra.
                </p>
                <div style={{ display:"flex", gap:"2.5rem", marginTop:"2.5rem", paddingTop:"2rem", borderTop:`1px solid ${G.goldBdr}` }}>
                  {[["20%","Uptime Improved"],["15+","APIs Optimized"],["30%","DB Ops Reduced"]].map(([n,l]) => (
                    <div key={l}>
                      <div style={{ fontFamily:G.display, fontSize:"2rem", color:G.gold, lineHeight:1 }}>{n}</div>
                      <div style={{ fontSize:"0.68rem", letterSpacing:"0.14em", textTransform:"uppercase", color:G.muted, marginTop:5 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ position:"relative" }}>
                <div style={{ border:`1px solid ${G.goldBdr}`, background:G.bgCard, padding:"2.25rem", position:"relative" }}>
                  <div style={{ position:"absolute", top:-10, right:-10, width:20, height:20, border:`1px solid ${G.goldBdr}`, background:G.bg }} />
                  <div style={{ position:"absolute", bottom:-10, left:-10, width:20, height:20, border:`1px solid ${G.goldBdr}`, background:G.bg }} />
                  {[
                    ["📍","Location","Bengaluru, India"],
                    ["📧","Email","vishnureddyam9@gmail.com"],
                    ["📞","Phone","+91 9900988387"],
                    ["🏢","Company","Tech Mahindra"],
                    ["🎓","Education","CMR Institute of Technology, 2024"],
                    ["✅","Status","Open to Opportunities"],
                  ].map(([icon,label,value]) => (
                    <div key={label} style={{ display:"flex", gap:"1rem", padding:"0.9rem 0", borderBottom:`1px solid rgba(201,168,76,0.07)` }}>
                      <span style={{ fontSize:"1rem", opacity:0.65, flexShrink:0 }}>{icon}</span>
                      <div>
                        <div style={{ fontSize:"0.64rem", letterSpacing:"0.15em", textTransform:"uppercase", color:G.muted }}>{label}</div>
                        <div style={{ color:"#c0b090", fontSize:"0.88rem", marginTop:2 }}>{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Divider />

      {/* ══════════ SKILLS ══════════ */}
      <section id="skills" style={{ padding:"110px 2rem", background:G.bgAlt }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <Reveal>
            <SectionEyebrow>Skills</SectionEyebrow>
            <SectionTitle>Technical Arsenal</SectionTitle>
          </Reveal>
          <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
            {skillGroups.map((group, gi) => (
              <Reveal key={group.label} delay={gi * 0.07}>
                <div style={{ display:"grid", gridTemplateColumns:"220px 1fr", gap:"2rem", alignItems:"start", padding:"2.2rem 0", borderBottom:`1px solid rgba(201,168,76,0.08)` }}>
                  <div>
                    <div style={{ fontFamily:G.display, fontSize:"1.05rem", color:G.gold, marginBottom:6 }}>{group.label}</div>
                    <div style={{ width:24, height:1, background:G.gold, opacity:0.3 }} />
                  </div>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"0.55rem" }}>
                    {group.items.map(item => <SkillPill key={item}>{item}</SkillPill>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ══════════ EXPERIENCE ══════════ */}
      <section id="experience" style={{ padding:"120px 2rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <Reveal>
            <SectionEyebrow>Experience</SectionEyebrow>
            <SectionTitle>Work History</SectionTitle>
          </Reveal>
          <div style={{ position:"relative", paddingLeft:"2.5rem", borderLeft:`1px solid ${G.goldBdr}` }}>
            {experience.map((exp, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{ marginBottom:"3rem", position:"relative" }}>
                  <div style={{ position:"absolute", left:-42, top:8, width:14, height:14, borderRadius:"50%", background:G.gold, border:`2px solid ${G.bg}`, boxShadow:`0 0 0 4px rgba(201,168,76,0.18)` }} />
                  <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", flexWrap:"wrap", gap:"0.5rem", marginBottom:"0.6rem" }}>
                    <div>
                      <h3 style={{ fontFamily:G.display, fontSize:"1.55rem", color:G.text, margin:0 }}>{exp.role}</h3>
                      <div style={{ color:G.gold, fontSize:"0.9rem", marginTop:4, opacity:0.85 }}>{exp.company} · {exp.location}</div>
                    </div>
                    <div style={{ fontSize:"0.7rem", letterSpacing:"0.14em", textTransform:"uppercase", color:G.muted, paddingTop:4 }}>{exp.period}</div>
                  </div>
                  <ul style={{ padding:0, margin:"1rem 0 1.25rem", display:"flex", flexDirection:"column", gap:"0.6rem" }}>
                    {exp.bullets.map((b,bi) => (
                      <li key={bi} style={{ color:G.muted, lineHeight:1.78, fontSize:"0.97rem", listStyle:"none", position:"relative", paddingLeft:"1.2rem" }}>
                        <span style={{ position:"absolute", left:0, top:"0.65em", display:"block", width:5, height:5, borderRadius:"50%", background:G.gold, opacity:0.5 }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                    {exp.tags.map(t => <Tag key={t}>{t}</Tag>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ══════════ EDUCATION ══════════ */}
      <section id="education" style={{ padding:"110px 2rem", background:G.bgAlt }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <Reveal>
            <SectionEyebrow>Education</SectionEyebrow>
            <SectionTitle>Academic Background</SectionTitle>
          </Reveal>
          <div style={{ display:"flex", flexDirection:"column", gap:"1.5rem" }}>
            {education.map((edu, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{ border:`1px solid ${G.goldBdr}`, padding:"2rem 2.5rem", background:G.bgCard, position:"relative", maxWidth:800, transition:"all 0.3s" }}
                  onMouseOver={e => { e.currentTarget.style.borderColor="rgba(201,168,76,0.42)"; e.currentTarget.style.background=G.bgHov; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor=G.goldBdr; e.currentTarget.style.background=G.bgCard; }}
                >
                  <div style={{ position:"absolute", top:0, left:0, width:3, height:"100%", background:`linear-gradient(to bottom, ${G.gold}, transparent)` }} />
                  <div style={{ display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:"0.5rem", marginBottom:6 }}>
                    <h3 style={{ fontFamily:G.display, fontSize:"1.2rem", color:G.text, margin:0 }}>{edu.degree}</h3>
                    <span style={{ fontSize:"0.7rem", letterSpacing:"0.14em", color:G.muted, textTransform:"uppercase" }}>{edu.period}</span>
                  </div>
                  <div style={{ color:G.muted, fontSize:"0.9rem", marginBottom:"0.85rem" }}>{edu.school}</div>
                  <div style={{ fontFamily:G.display, fontSize:"1.5rem", color:G.gold }}>{edu.grade}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ══════════ CERTIFICATIONS ══════════ */}
      <section id="certifications" style={{ padding:"120px 2rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <Reveal>
            <SectionEyebrow>Certifications</SectionEyebrow>
            <SectionTitle>Credentials</SectionTitle>
          </Reveal>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:"1.5rem" }}>
            {certifications.map((c, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{ border:`1px solid ${G.goldBdr}`, padding:"2rem", background:G.bgCard, transition:"all 0.3s", cursor:"default" }}
                  onMouseOver={e => { e.currentTarget.style.borderColor="rgba(201,168,76,0.42)"; e.currentTarget.style.background=G.bgHov; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor=G.goldBdr; e.currentTarget.style.background=G.bgCard; }}
                >
                  <Award size={20} color={G.gold} style={{ opacity:0.7, marginBottom:"1.1rem" }} />
                  <h4 style={{ fontFamily:G.display, fontSize:"1.1rem", color:G.text, margin:"0 0 0.5rem", lineHeight:1.35 }}>{c.name}</h4>
                  <div style={{ color:G.muted, fontSize:"0.82rem", letterSpacing:"0.06em" }}>{c.org}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ══════════ PROJECTS ══════════ */}
      <section id="projects" style={{ padding:"110px 2rem", background:G.bgAlt }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <Reveal>
            <SectionEyebrow>Projects</SectionEyebrow>
            <SectionTitle>Selected Work</SectionTitle>
          </Reveal>
          <div style={{ display:"flex", flexDirection:"column", gap:"1.5rem" }}>
            {projects.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{
                  border:`1px solid ${p.featured ? "rgba(201,168,76,0.38)" : G.goldBdr}`,
                  padding:"2.5rem",
                  background: p.featured ? "rgba(201,168,76,0.03)" : G.bgCard,
                  position:"relative", overflow:"hidden", transition:"all 0.3s",
                }}
                  onMouseOver={e => { e.currentTarget.style.borderColor="rgba(201,168,76,0.55)"; e.currentTarget.style.background="rgba(201,168,76,0.055)"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor=p.featured?"rgba(201,168,76,0.38)":G.goldBdr; e.currentTarget.style.background=p.featured?"rgba(201,168,76,0.03)":G.bgCard; }}
                >
                  <div style={{ position:"absolute", top:0, left:0, right:0, height:p.featured?2:1, background:`linear-gradient(90deg, transparent, ${p.featured?G.gold:"rgba(201,168,76,0.55)"}, transparent)` }} />
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"1.4rem", flexWrap:"wrap", gap:"0.75rem" }}>
                    <div>
                      <div style={{ display:"flex", alignItems:"center", gap:"0.75rem", marginBottom:4 }}>
                        <h3 style={{ fontFamily:G.display, fontSize:p.featured?"1.65rem":"1.4rem", color:G.text, margin:0 }}>{p.title}</h3>
                        {p.featured && <span style={{ fontSize:"0.6rem", letterSpacing:"0.2em", textTransform:"uppercase", color:G.bg, background:G.gold, padding:"3px 8px", fontFamily:G.body }}>Featured</span>}
                      </div>
                      <div style={{ display:"flex", alignItems:"center", gap:"0.75rem" }}>
                        <span style={{ fontSize:"0.72rem", color:G.gold, letterSpacing:"0.1em", opacity:0.75, fontStyle:"italic" }}>{p.subtitle}</span>
                        <span style={{ width:3, height:3, borderRadius:"50%", background:G.muted, display:"inline-block", opacity:0.5 }} />
                        <span style={{ fontSize:"0.68rem", color:G.muted, letterSpacing:"0.15em" }}>{p.year}</span>
                      </div>
                    </div>
                    <a href={p.link} target="_blank" rel="noopener noreferrer"
                      style={{ display:"flex", alignItems:"center", gap:6, color:G.gold, opacity:0.6, textDecoration:"none", fontSize:"0.72rem", letterSpacing:"0.12em", textTransform:"uppercase", fontFamily:G.body, transition:"opacity 0.2s" }}
                      onMouseOver={e => e.currentTarget.style.opacity=1}
                      onMouseOut={e => e.currentTarget.style.opacity=0.6}
                    >View <ArrowUpRight size={14} /></a>
                  </div>
                  <ul style={{ padding:0, margin:"0 0 1.75rem", display:"grid", gridTemplateColumns:p.featured?"1fr 1fr":"1fr", gap:"0.55rem 2rem" }}>
                    {p.bullets.map((b,bi) => (
                      <li key={bi} style={{ color:G.muted, fontSize:"0.92rem", lineHeight:1.72, listStyle:"none", position:"relative", paddingLeft:"1.1rem" }}>
                        <span style={{ position:"absolute", left:0, top:"0.65em", width:4, height:4, borderRadius:"50%", background:G.gold, opacity:0.45, display:"block" }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:7 }}>
                    {p.tags.map(t => <Tag key={t}>{t}</Tag>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ══════════ CONTACT ══════════ */}
      <section id="contact" style={{ padding:"140px 2rem", textAlign:"center" }}>
        <div style={{ maxWidth:560, margin:"0 auto" }}>
          <Reveal>
            <SectionEyebrow>Contact</SectionEyebrow>
            <h2 style={{ fontFamily:G.display, fontSize:"clamp(2.2rem,5vw,3.2rem)", fontWeight:700, color:G.text, lineHeight:1.08, margin:"0 0 1.4rem" }}>
              Let's Build<br/>Something Together
            </h2>
            <p style={{ color:G.muted, lineHeight:1.82, fontSize:"1.02rem", fontStyle:"italic", marginBottom:"3rem" }}>
              I'm open to new opportunities. Whether you have a role in mind or just want to connect, I'd love to hear from you.
            </p>
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"1.1rem" }}>
              {[
                { icon:<Mail size={15}/>,     label:"vishnureddyam9@gmail.com",                   href:SOCIALS.email },
                { icon:<Phone size={15}/>,    label:"+91 9900988387",                              href:SOCIALS.phone },
                { icon:<Linkedin size={15}/>, label:"linkedin.com/in/vishnu-reddy-a-m-333971308", href:SOCIALS.linkedin },
                { icon:<Github size={15}/>,   label:"github.com/iamvishnu12",                     href:SOCIALS.github },
              ].map(({ icon, label, href }) => (
                <a key={label} href={href} target={href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer"
                  style={{ display:"flex", alignItems:"center", gap:"0.65rem", color:G.muted, textDecoration:"none", fontSize:"0.95rem", transition:"color 0.2s" }}
                  onMouseOver={e => e.currentTarget.style.color=G.gold}
                  onMouseOut={e => e.currentTarget.style.color=G.muted}
                >
                  <span style={{ color:G.gold, opacity:0.65 }}>{icon}</span>{label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer style={{ borderTop:`1px solid ${G.goldBdr}`, padding:"1.75rem 2rem", textAlign:"center", color:"#2e2a1e", fontSize:"0.75rem", letterSpacing:"0.1em" }}>
        © {new Date().getFullYear()} Vishnu Reddy A M — Crafted with intention.
      </footer>

      {/* ══════════ CHAT FAB ══════════ */}
      {!chatOpen && (
        <div style={{ position:"fixed", bottom:28, right:28, zIndex:200, display:"flex", flexDirection:"column", alignItems:"flex-end", gap:10 }}>
          {/* Tooltip bubble */}
          <div style={{
            background:"#0c0c18", border:`1px solid rgba(201,168,76,0.3)`,
            padding:"8px 14px", fontSize:"0.78rem", color:G.soft,
            fontFamily:G.body, whiteSpace:"nowrap",
            boxShadow:"0 4px 20px rgba(0,0,0,0.5)",
            position:"relative",
            animation:"floatTooltip 3s ease-in-out infinite",
          }}>
            💬 Ask me anything!
            {/* arrow */}
            <div style={{ position:"absolute", bottom:-6, right:22, width:10, height:10, background:"#0c0c18", border:"1px solid rgba(201,168,76,0.3)", borderTop:"none", borderLeft:"none", transform:"rotate(45deg)" }} />
          </div>

          <button onClick={() => setChatOpen(true)} style={{
            width:56, height:56, borderRadius:"50%",
            background:`linear-gradient(135deg, ${G.gold}, #8c6820)`,
            border:"none", cursor:"pointer", fontSize:"1.4rem",
            boxShadow:`0 4px 24px rgba(201,168,76,0.4)`,
            transition:"transform 0.2s, box-shadow 0.2s",
            display:"flex", alignItems:"center", justifyContent:"center",
          }}
            onMouseOver={e => { e.currentTarget.style.transform="scale(1.1)"; e.currentTarget.style.boxShadow="0 6px 36px rgba(201,168,76,0.6)"; }}
            onMouseOut={e => { e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.boxShadow="0 4px 24px rgba(201,168,76,0.4)"; }}
          >🤖</button>
        </div>
      )}

      {/* ══════════ CHAT WINDOW ══════════ */}
      {chatOpen && (
        <div style={{
          position:"fixed", bottom:28, right:28, width:348, height:520,
          background:"#0c0c16", border:`1px solid rgba(201,168,76,0.28)`,
          borderRadius:3, display:"flex", flexDirection:"column", zIndex:200,
          boxShadow:"0 28px 64px rgba(0,0,0,0.7)",
          animation:"slideUp 0.3s cubic-bezier(0.16,1,0.3,1)",
        }}>
          {/* Header */}
          <div style={{ padding:"1rem 1.25rem", background:"rgba(201,168,76,0.08)", borderBottom:`1px solid rgba(201,168,76,0.18)`, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <div style={{ width:32, height:32, borderRadius:"50%", background:`linear-gradient(135deg, ${G.gold}, #8c6820)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.9rem" }}>🤖</div>
              <div>
                <div style={{ fontFamily:G.display, color:G.gold, fontSize:"0.95rem" }}>AI Assistant</div>
                <div style={{ display:"flex", alignItems:"center", gap:5, marginTop:1 }}>
                  <span style={{ width:5, height:5, borderRadius:"50%", background:"#4ade80", display:"inline-block" }} />
                  <span style={{ fontSize:"0.6rem", color:"#4ade80", letterSpacing:"0.1em", fontFamily:G.body }}>Online · RAG-powered</span>
                </div>
              </div>
            </div>
            <button onClick={() => setChatOpen(false)} style={{ background:"none", border:"none", color:G.muted, cursor:"pointer", padding:4, transition:"color 0.2s" }}
              onMouseOver={e => e.currentTarget.style.color=G.gold}
              onMouseOut={e => e.currentTarget.style.color=G.muted}
            ><X size={17} /></button>
          </div>

          {/* Messages */}
          <div style={{ flex:1, overflowY:"auto", padding:"1rem", display:"flex", flexDirection:"column", gap:"0.7rem" }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                alignSelf:msg.role==="user"?"flex-end":"flex-start",
                maxWidth:"82%", padding:"9px 14px",
                background:msg.role==="user"?`linear-gradient(135deg, ${G.gold}, #8c6820)`:"rgba(201,168,76,0.07)",
                border:msg.role==="user"?"none":`1px solid rgba(201,168,76,0.14)`,
                color:msg.role==="user"?G.bg:G.soft,
                fontSize:"0.85rem", lineHeight:1.55, fontFamily:G.body,
              }}>{msg.content}</div>
            ))}
            {loading && (
              <div style={{ alignSelf:"flex-start", padding:"9px 14px", background:"rgba(201,168,76,0.07)", border:`1px solid rgba(201,168,76,0.14)`, color:G.muted, fontSize:"0.85rem" }}>
                Thinking…
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div style={{ padding:"0.75rem", borderTop:`1px solid rgba(201,168,76,0.12)`, display:"flex", gap:"0.5rem" }}>
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key==="Enter" && sendMessage()}
              placeholder="Ask about Vishnu…"
              style={{ flex:1, background:"rgba(201,168,76,0.05)", border:`1px solid rgba(201,168,76,0.18)`, padding:"8px 12px", color:"#c0b090", fontSize:"0.85rem", outline:"none", fontFamily:G.body, borderRadius:0, transition:"border-color 0.2s" }}
              onFocus={e => e.target.style.borderColor="rgba(201,168,76,0.5)"}
              onBlur={e => e.target.style.borderColor="rgba(201,168,76,0.18)"}
            />
            <button onClick={sendMessage} style={{ background:`linear-gradient(135deg, ${G.gold}, #8c6820)`, border:"none", padding:"8px 18px", color:G.bg, cursor:"pointer", fontSize:"0.8rem", letterSpacing:"0.06em", fontFamily:G.body, transition:"opacity 0.2s" }}
              onMouseOver={e => e.currentTarget.style.opacity="0.82"}
              onMouseOut={e => e.currentTarget.style.opacity="1"}
            >Send</button>
          </div>
        </div>
      )}

      {/* ══════════ GLOBAL STYLES ══════════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #07070e; }
        ::-webkit-scrollbar-thumb { background: rgba(201,168,76,0.3); border-radius: 2px; }
        ::selection { background: rgba(201,168,76,0.22); color: #c9a84c; }
        @keyframes heroGlow {
          0%,100% { box-shadow: 0 0 0 8px rgba(201,168,76,0.04), 0 0 40px rgba(201,168,76,0.10); }
          50%      { box-shadow: 0 0 0 8px rgba(201,168,76,0.09), 0 0 64px rgba(201,168,76,0.22); }
        }
        @keyframes scrollLine {
          0%,100% { opacity: 0.4; }
          50%      { opacity: 0.85; }
        }
        @keyframes floatTooltip {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-4px); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          nav > div > div:nth-child(2) { display: none; }
        }
      `}</style>
    </div>
  );
}