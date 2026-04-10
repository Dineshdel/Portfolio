import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Mail, ArrowUp, Code2, Database, Server, Cloud, Palette, ChevronDown, Sparkles, ArrowRight, MapPin, Briefcase, GraduationCap } from "lucide-react";
import emailjs from "emailjs-com";
import "./App.css";

/* ── SVG Brand Icons ─────────────────────────────────────────── */
const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

/* ── Animation Variants ──────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

/* ── Data ────────────────────────────────────────────────────── */
const projects = [
  {
    title: "Faculty Management System",
    desc: "Role-based dashboards with secure REST APIs and optimized MongoDB queries. Built a comprehensive admin panel with real-time analytics.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    live: "#",
    code: "#",
    gradient: "from-blue-500/20 to-purple-500/20",
    icon: "🎓",
  },
  {
    title: "Task Manager App",
    desc: "Full-featured task management with JWT authentication, drag-and-drop organization, and real-time collaboration features.",
    tags: ["React", "Node.js", "JWT", "Socket.io"],
    live: "#",
    code: "#",
    gradient: "from-emerald-500/20 to-cyan-500/20",
    icon: "✅",
  },
  {
    title: "Blog Platform",
    desc: "Full-stack blog application with rich text editing, authentication, content management, and SEO optimization.",
    tags: ["Next.js", "MongoDB", "Tailwind"],
    live: "#",
    code: "#",
    gradient: "from-orange-500/20 to-rose-500/20",
    icon: "📝",
  },
];

const skills = [
  { name: "React.js", level: 92, icon: <Code2 size={18} />, color: "#61DAFB" },
  { name: "Node.js", level: 88, icon: <Server size={18} />, color: "#68A063" },
  { name: "MongoDB", level: 85, icon: <Database size={18} />, color: "#47A248" },
  { name: "Express.js", level: 87, icon: <Server size={18} />, color: "#ffffff" },
  { name: "Next.js", level: 80, icon: <Code2 size={18} />, color: "#ffffff" },
  { name: "AWS", level: 75, icon: <Cloud size={18} />, color: "#FF9900" },
  { name: "Tailwind CSS", level: 90, icon: <Palette size={18} />, color: "#38BDF8" },
  { name: "TypeScript", level: 78, icon: <Code2 size={18} />, color: "#3178C6" },
];

const tools = [
  { name: "Git", level: 90, icon: <Code2 size={18} />, color: "#F05032" },
  { name: "Postman", level: 85, icon: <Server size={18} />, color: "#FF6C37" },
  { name: "VS Code", level: 95, icon: <Code2 size={18} />, color: "#007ACC" },
  { name: "AWS (EC2, S3)", level: 75, icon: <Cloud size={18} />, color: "#FF9900" },
  { name: "Docker", level: 70, icon: <Server size={18} />, color: "#2496ED" },
  { name: "MongoDB Compass", level: 70, icon: <Server size={18} />, color: "#2496ED" },

];

const experiences = [
  {
    role: "MERN Stack Developer",
    company: "SRM Institute of Science and Technology, Chennai",
    period: "2024 — Present",
    points: [
      "Developed and maintained scalable modules for an E-Governance system used by faculty and HoDs.",
      "Built responsive and reusable UI components using React.js and Next.js, improving user experience and accessibility.",
      "Designed and developed secure RESTful APIs using Node.js and Express.js.",
    ],
  },
];

/* ── Particle Background Component ──────────────────────────── */
function ParticleField() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="particle-field">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="particle"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
        />
      ))}
    </div>
  );
}

/* ── Magnetic Button Component ───────────────────────────────── */
function MagneticButton({ children, className, ...props }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
    setPosition({ x, y });
  };

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="inline-block"
    >
      <button className={className} {...props}>{children}</button>
    </motion.div>
  );
}

/* ── Animated Counter ────────────────────────────────────────── */
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 30);
    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}{suffix}</span>;
}

/* ── Main Portfolio Component ────────────────────────────────── */
export default function Portfolio() {
  const [activeNav, setActiveNav] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      const sections = ["about", "experience", "projects", "skills", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) setActiveNav(id);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.open(`mailto:dineshdel510@gmail.com?subject=${subject}&body=${body}`, "_self");
    setFormStatus("sent");
    e.target.reset();
    setTimeout(() => setFormStatus(""), 3000);
  };

  const navLinks = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="portfolio-root">
      <ParticleField />

      {/* ── Ambient Glow ──────────────────────────────────────── */}
      <div className="ambient-glow">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
        <div className="glow-orb glow-orb-3" />
      </div>

      {/* ── Navbar ────────────────────────────────────────────── */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="navbar"
      >
        <div className="navbar-inner">
          <a href="#" className="logo-link">
            <div className="logo-box">D</div>
            <span className="logo-text">Dinesh<span className="logo-accent">.dev</span></span>
          </a>

          <nav className="nav-desktop">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`nav-link ${activeNav === l.id ? "nav-active" : ""}`}
              >
                {l.label}
                {activeNav === l.id && <motion.div layoutId="navIndicator" className="nav-indicator" />}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon-btn">
              <GithubIcon size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn">
              <LinkedinIcon size={18} />
            </a>
            <a href="#contact" className="hire-btn">
              <Sparkles size={14} />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className={`hamburger ${mobileMenuOpen ? "open" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mobile-menu"
            >
              {navLinks.map((l) => (
                <a key={l.id} href={`#${l.id}`} className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                  {l.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ── Hero Section ──────────────────────────────────────── */}
      <section className="hero-section">
        <motion.div variants={stagger} initial="hidden" animate="show" className="hero-content">
          <motion.div variants={fadeUp} className="hero-badge">
            <span className="badge-dot" />
            Available for opportunities
          </motion.div>

          <motion.h1 variants={fadeUp} className="hero-title">
            Hi, I'm <span className="gradient-text">Dinesh T</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="hero-subtitle-wrapper">
            <h2 className="hero-subtitle">
              I build <span className="typewriter">exceptional digital experiences</span>
            </h2>
          </motion.div>

          <motion.p variants={fadeUp} className="hero-desc">
            A passionate MERN Stack Developer crafting performant, scalable, and
            beautifully designed web applications that make a difference.
          </motion.p>

          <motion.div variants={fadeUp} className="hero-cta">
            <MagneticButton className="btn-primary">
              <a href="/resume.pdf" download className="btn-inner">
                Download Resume
                <ArrowRight size={16} />
              </a>
            </MagneticButton>
            <MagneticButton className="btn-outline">
              <a href="#projects" className="btn-inner">
                View Projects
                <ExternalLink size={16} />
              </a>
            </MagneticButton>
          </motion.div>

          <motion.div variants={fadeUp} className="hero-stats">
            <div className="stat-item">
              <span className="stat-number"><Counter target={2} suffix="+" /></span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number"><Counter target={1} suffix="+" /></span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number"><Counter target={10} suffix="+" /></span>
              <span className="stat-label">Technologies</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="scroll-indicator"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* ── About Section ─────────────────────────────────────── */}
      <section id="about" className="section">
        <div className="section-inner">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="about-grid">
            <motion.div variants={slideInLeft} className="about-left">
              <span className="section-tag">About</span>
              <h3 className="section-title">Passionate about building <span className="gradient-text">meaningful products</span></h3>
              <p className="about-text">
                I'm a dedicated MERN Stack Developer with a strong focus on building secure, scalable, and user-centric applications. My journey in web development has equipped me with deep expertise in modern JavaScript frameworks and cloud technologies.
              </p>
              <p className="about-text">
                I specialize in React.js, Node.js, and MongoDB, with a strong emphasis on clean architecture, performance optimization, and exceptional user experiences. I believe great software is built at the intersection of elegant code and thoughtful design.
              </p>
              <div className="about-details">
                <div className="about-detail-item">
                  <MapPin size={16} />
                  <span>India</span>
                </div>
                <div className="about-detail-item">
                  <Briefcase size={16} />
                  <span>Full Stack Developer</span>
                </div>
                <div className="about-detail-item">
                  <GraduationCap size={16} />
                  <span>Computer Science</span>
                </div>
              </div>
            </motion.div>
            <motion.div variants={slideInRight} className="about-right">
              <div className="about-card">
                <div className="about-card-grid">
                  {["Frontend Development", "Backend Architecture", "Database Design", "Cloud & DevOps"].map((item, i) => (
                    <motion.div key={item} whileHover={{ scale: 1.05, y: -5 }} className="about-specialty">
                      <span className="specialty-number">0{i + 1}</span>
                      <span className="specialty-name">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Experience Section ────────────────────────────────── */}
      <section id="experience" className="section section-alt">
        <div className="section-inner">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="section-tag center">Experience</motion.span>
            <motion.h3 variants={fadeUp} className="section-title center">Professional <span className="gradient-text">Journey</span></motion.h3>
            <div className="timeline">
              {experiences.map((exp, i) => (
                <motion.div key={i} variants={fadeUp} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-card">
                    <div className="timeline-header">
                      <div>
                        <h4 className="timeline-role">{exp.role}</h4>
                        <p className="timeline-company">{exp.company}</p>
                      </div>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                    <ul className="timeline-points">
                      {exp.points.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Projects Section ──────────────────────────────────── */}
      <section id="projects" className="section">
        <div className="section-inner">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="section-tag center">Portfolio</motion.span>
            <motion.h3 variants={fadeUp} className="section-title center">Featured <span className="gradient-text">Projects</span></motion.h3>

            <div className="projects-grid">
              {projects.map((p, i) => (
                <motion.div key={p.title} variants={fadeUp} whileHover={{ y: -8 }} className="project-card">
                  <div className={`project-thumbnail bg-gradient-to-br ${p.gradient}`}>
                    <span className="project-icon">{p.icon}</span>
                    <div className="project-overlay">
                      <a href={p.live} className="project-overlay-btn">
                        <ExternalLink size={18} />
                      </a>
                      <a href={p.code} className="project-overlay-btn">
                        <GithubIcon size={18} />
                      </a>
                    </div>
                  </div>
                  <div className="project-body">
                    <div className="project-number">0{i + 1}</div>
                    <h4 className="project-title">{p.title}</h4>
                    <p className="project-desc">{p.desc}</p>
                    <div className="project-tags">
                      {p.tags.map((t) => (
                        <span key={t} className="project-tag">{t}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={p.live} className="project-link-btn primary">
                        <ExternalLink size={14} /> Live Demo
                      </a>
                      <a href={p.code} className="project-link-btn secondary">
                        <GithubIcon size={14} /> Source
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Skills Section ────────────────────────────────────── */}
      <section id="skills" className="section section-alt">
        <div className="section-inner">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="section-tag center">Skills</motion.span>
            <motion.h3 variants={fadeUp} className="section-title center">Tech <span className="gradient-text">Stack</span></motion.h3>

            <div className="skills-grid">
              {skills.map((s) => (
                <motion.div key={s.name} variants={scaleUp} whileHover={{ scale: 1.03 }} className="skill-card">
                  <div className="skill-header">
                    <div className="skill-icon" style={{ color: s.color }}>{s.icon}</div>
                    <span className="skill-name">{s.name}</span>
                    {/* <span className="skill-percent" style={{ color: s.color }}>{s.level}%</span> */}
                  </div>
                  <div className="skill-bar-bg">
                    <motion.div
                      className="skill-bar-fill"
                      style={{ background: `linear-gradient(90deg, ${s.color}44, ${s.color})` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Tools Section ─────────────────────────────────────── */}
      <section id="tools" className="section section-alt">
        <div className="section-inner">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="section-tag center">Skills</motion.span>
            <motion.h3 variants={fadeUp} className="section-title center">Tools <span className="gradient-text"></span></motion.h3>

            <div className="skills-grid">
              {tools.map((s) => (
                <motion.div key={s.name} variants={scaleUp} whileHover={{ scale: 1.03 }} className="skill-card">
                  <div className="skill-header">
                    <div className="skill-icon" style={{ color: s.color }}>{s.icon}</div>
                    <span className="skill-name">{s.name}</span>
                    {/* <span className="skill-percent" style={{ color: s.color }}>{s.level}%</span> */}
                  </div>
                  <div className="skill-bar-bg">
                    <motion.div
                      className="skill-bar-fill"
                      style={{ background: `linear-gradient(90deg, ${s.color}44, ${s.color})` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Section ───────────────────────────────────── */}
      <section id="contact" className="section">
        <div className="section-inner">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="contact-wrapper">
            <motion.div variants={slideInLeft} className="contact-info">
              <span className="section-tag">Contact</span>
              <h3 className="section-title">Let's work <span className="gradient-text">together</span></h3>
              <p className="contact-desc">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's create something extraordinary.
              </p>
              <div className="contact-links">
                <a href="mailto:dineshdel510@gmail.com" className="contact-link-item">
                  <div className="contact-link-icon"><Mail size={20} /></div>
                  <div>
                    <span className="contact-link-label">Email</span>
                    <span className="contact-link-value">dineshdel510@gmail.com</span>
                  </div>
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-link-item">
                  <div className="contact-link-icon"><GithubIcon size={20} /></div>
                  <div>
                    <span className="contact-link-label">GitHub</span>
                    <span className="contact-link-value">github.com/dinesh</span>
                  </div>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-link-item">
                  <div className="contact-link-icon"><LinkedinIcon size={20} /></div>
                  <div>
                    <span className="contact-link-label">LinkedIn</span>
                    <span className="contact-link-value">linkedin.com/in/dinesh</span>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div variants={slideInRight} className="contact-form-wrapper">
              <form onSubmit={sendEmail} className="contact-form">
                <div className="form-group">
                  <label>Your Name</label>
                  <input name="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input name="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" placeholder="Tell me about your project..." rows={5} required />
                </div>
                <button type="submit" className={`submit-btn ${formStatus}`} disabled={formStatus === "sending"}>
                  {formStatus === "sending" ? (
                    <><span className="spinner" /> Sending...</>
                  ) : formStatus === "sent" ? (
                    <>✓ Message Sent!</>
                  ) : formStatus === "error" ? (
                    <>✕ Failed. Try Again</>
                  ) : (
                    <><Mail size={16} /> Send Message</>
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="logo-box">D</div>
              <span className="logo-text">Dinesh<span className="logo-accent">.dev</span></span>
            </div>
            <div className="footer-nav">
              {navLinks.map((l) => (
                <a key={l.id} href={`#${l.id}`} className="footer-link">{l.label}</a>
              ))}
            </div>
            <div className="footer-socials">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon-btn"><GithubIcon size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn"><LinkedinIcon size={18} /></a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Dinesh T. Crafted with passion & precision.</p>
          </div>
        </div>
      </footer>

      {/* ── Scroll to Top ─────────────────────────────────────── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="scroll-top-btn"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
