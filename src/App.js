import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Mail,
  ArrowUp,
  Code2,
  Database,
  Server,
  ChevronDown,
  Sparkles,
  ArrowRight,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Phone,
  CheckCircle2,
  Layers,
  Cpu,
  Globe,
  Terminal,
  FileText,
  Send,
  Copy,
  Check,
} from "lucide-react";
import "./App.css";

/* ── SVG Brand Icons ─────────────────────────────────────────── */
const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

/* ── Animation Variants ──────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

/* ── Dynamic Projects Data ────────────────────────────────────── */
const projects = [
  {
    title: "SRMIST eGovernance ERP Portal",
    subtitle: "Faculty Management & Administrative Governance System",
    category: "Enterprise ERP",
    featuredBadge: "SRMIST Production",
    desc: "Built and maintained enterprise-level E-Governance applications running in production across the full MERN stack. Designed robust faculty and administrative workflows covering registration, approval tracking, document verification, and certificate issuance.",
    bulletPoints: [
      "Developed end-to-end faculty modules with role-based access control (RBAC), OAuth integration, and JWT authentication.",
      "Engineered Query Management workflows with smart automatic/manual assignment, RESTful services, and real-time status dashboards.",
      "Optimized MongoDB schemas, indexes, and aggregation pipelines for high throughput under heavy academic load.",
      "Created reusable React components with Hooks, Context API, and Material UI for consistent UI governance.",
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Material UI", "JWT & OAuth", "RBAC"],
    live: "https://egovernance.srmist.edu.in",
    code: "https://github.com/Dineshdel",
    gradient: "linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.22))",
    accentColor: "#6366F1",
    icon: "🏛️",
  },
  {
    title: "Building Management Maintenance System (BMMS)",
    subtitle: "Multi-Tenant Enterprise SaaS Platform",
    category: "Multi-Tenant SaaS",
    featuredBadge: "Live SaaS Platform",
    desc: "Enterprise multi-tenant SaaS platform engineered for large-scale building operations and facility maintenance with organizationId-based isolation, multi-level resource hierarchies, and real-time maintenance workflows.",
    bulletPoints: [
      "Engineered scalable REST APIs with organizationId-based multi-tenant isolation, dynamic RBAC, and comprehensive audit logs.",
      "Structured property assets into a hierarchical model (Buildings → Towers → Units) for frictionless management and data querying.",
      "Built responsive role-based dashboards for maintenance dispatch, complaint ticketing, slot reservations, and technician tracking.",
      "Integrated Prisma ORM with PostgreSQL ensuring strict relational integrity and fast parameterized queries.",
    ],
    tags: ["NestJS", "Next.js", "TypeScript", "Prisma ORM", "PostgreSQL", "Tailwind CSS", "Multi-Tenant"],
    live: "https://sivm-bmms-development.vercel.app/",
    code: "https://github.com/Dineshdel",
    gradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(59, 130, 246, 0.22))",
    accentColor: "#06B6D4",
    icon: "🏢",
  },
  {
    title: "Pavizera Web Application",
    subtitle: "Cloud-Deployed Modern Responsive Platform",
    category: "Cloud Web App",
    featuredBadge: "Live on Firebase",
    desc: "Modern, high-performance web application hosted on Firebase with dynamic client-side interactions, responsive layout optimization, and fluid user journey.",
    bulletPoints: [
      "Built with modular React architecture and Tailwind CSS for mobile-first responsiveness and high performance.",
      "Integrated seamless cloud hosting on Firebase with continuous asset delivery and instant page transitions.",
      "Engineered intuitive interactive components and clean UX patterns designed for engagement.",
    ],
    tags: ["React.js", "Firebase", "Tailwind CSS", "JavaScript", "Responsive Design", "Cloud Hosting"],
    live: "https://pavizera.web.app/",
    code: "https://github.com/Dineshdel",
    gradient: "linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(244, 63, 94, 0.22))",
    accentColor: "#EC4899",
    icon: "✨",
  },
];

/* ── Categorized Skills ──────────────────────────────────────── */
const skillsData = [
  {
    category: "Front-End",
    description: "Component-driven, responsive, accessible UIs",
    items: [
      { name: "React.js", level: 95, tag: "Expert", color: "#61DAFB" },
      { name: "Next.js", level: 88, tag: "Advanced", color: "#ffffff" },
      { name: "TypeScript", level: 85, tag: "Advanced", color: "#3178C6" },
      { name: "JavaScript (ES6+)", level: 95, tag: "Expert", color: "#F7DF1E" },
      { name: "Tailwind CSS", level: 92, tag: "Expert", color: "#38BDF8" },
      { name: "Material UI", level: 90, tag: "Advanced", color: "#007FFF" },
      { name: "HTML5 / CSS3", level: 95, tag: "Mastery", color: "#E34F26" },
      { name: "React Router & Hooks", level: 94, tag: "Expert", color: "#61DAFB" },
    ],
  },
  {
    category: "Back-End & APIs",
    description: "Robust architectures, secure authentication, and microservices",
    items: [
      { name: "Node.js", level: 92, tag: "Expert", color: "#68A063" },
      { name: "Express.js", level: 92, tag: "Expert", color: "#E5E5E5" },
      { name: "NestJS", level: 82, tag: "Advanced", color: "#E0234E" },
      { name: "RESTful API Design", level: 94, tag: "Expert", color: "#00D4FF" },
      { name: "JWT Authentication", level: 95, tag: "Security", color: "#FB7185" },
      { name: "OAuth 2.0 & SSO", level: 88, tag: "Security", color: "#4285F4" },
      { name: "Role-Based Access (RBAC)", level: 92, tag: "Architecture", color: "#A855F7" },
      { name: "MVC Architecture", level: 90, tag: "Pattern", color: "#34D399" },
    ],
  },
  {
    category: "Databases & ORM",
    description: "High-scale schema design, indexing, and transactional integrity",
    items: [
      { name: "MongoDB", level: 92, tag: "NoSQL", color: "#47A248" },
      { name: "Mongoose ODM", level: 94, tag: "Modeling", color: "#880000" },
      { name: "PostgreSQL", level: 85, tag: "Relational", color: "#336791" },
      { name: "Prisma ORM", level: 86, tag: "Type-Safe", color: "#2D3748" },
      { name: "MySQL", level: 80, tag: "Relational", color: "#4479A1" },
      { name: "Index & Query Optimization", level: 90, tag: "Performance", color: "#F59E0B" },
    ],
  },
  {
    category: "Testing, Cloud & Tools",
    description: "DevOps pipelines, cloud infrastructure, and workflows",
    items: [
      { name: "Git & GitHub", level: 92, tag: "Workflow", color: "#F05032" },
      { name: "Postman", level: 92, tag: "API Testing", color: "#FF6C37" },
      { name: "Docker", level: 78, tag: "Container", color: "#2496ED" },
      { name: "AWS (EC2, S3)", level: 80, tag: "Cloud", color: "#FF9900" },
      { name: "CI/CD Pipelines", level: 82, tag: "DevOps", color: "#10B981" },
      { name: "MongoDB Compass", level: 90, tag: "DB Tool", color: "#47A248" },
      { name: "Unit & Manual Testing", level: 85, tag: "QA", color: "#EC4899" },
      { name: "Code Review & Standards", level: 90, tag: "Best Practices", color: "#8B5CF6" },
    ],
  },
];

/* ── Work Experience ─────────────────────────────────────────── */
const experienceData = [
  {
    role: "MERN Stack Developer",
    company: "SRM Institute of Science and Technology",
    location: "Chennai, Tamil Nadu, India",
    period: "July 2024 – Present",
    type: "Full-Time",
    badge: "Current Role",
    summary:
      "Owning features end-to-end across the full MERN stack for high-traffic enterprise E-Governance systems running in production, from database modeling to responsive frontend UIs.",
    achievements: [
      "Built and maintained enterprise-level E-Governance applications running in production across the full MERN stack (React.js, Node.js, Express.js, MongoDB), owning features from database design to UI.",
      "Developed secure RESTful APIs in Node.js and Express.js with JWT authentication, OAuth login integration, and role-based access control (RBAC).",
      "Designed and optimized MongoDB schemas, indexes, queries, and aggregation pipelines for enhanced query performance and scale under university-wide concurrency.",
      "Built reusable React components using Hooks, Context API, Material UI, and React Router for consistent, maintainable, and accessible UIs.",
      "Implemented comprehensive workflow features covering user registration, approval tracking, document verification, status tracking, and admin review.",
      "Collaborated through Git-based workflows, rigorous code reviews, and CI/CD pipelines to reliably deliver production features across distributed teams.",
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Material UI", "JWT", "OAuth", "RBAC", "Git CI/CD"],
  },
];

/* ── Education & Certifications ──────────────────────────────── */
const educationData = [
  {
    degree: "M.Sc. Information Technology",
    institution: "SRM Institute of Science and Technology",
    location: "Chennai, Tamil Nadu",
    period: "May 2023",
    icon: "🎓",
    type: "Master's Degree",
  },
  {
    degree: "B.Sc. Computer Science",
    institution: "Sacred Heart College",
    location: "Tirupathur, Tamil Nadu",
    period: "April 2021",
    icon: "📜",
    type: "Bachelor's Degree",
  },
];

const certificationData = [
  {
    title: "Full Stack Development",
    issuer: "Guvi Geeks Network",
    year: "2024",
    skills: "JavaScript, React.js, Express.js, MongoDB, Node.js",
    icon: "🏆",
    verified: true,
  },
];

/* ── 3D Interactive Canvas: Celestial Constellation Mesh ──────── */
function Interactive3DUniverse() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight || 800);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // 3D Nodes on a sphere
    const nodeCount = 55;
    const radius = Math.min(width, height) * 0.32;
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = 2 * Math.PI * Math.random();
      nodes.push({
        x: radius * Math.sin(theta) * Math.cos(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(theta),
        color: i % 3 === 0 ? "#6366f1" : i % 3 === 1 ? "#06b6d4" : "#ec4899",
      });
    }

    // 3D Concentric Orbital Rings
    const ringPoints = 60;
    const rings = [
      { r: radius * 1.25, tiltX: 0.7, tiltY: 0.3, speed: 0.007, color: "rgba(99, 102, 241, 0.45)" },
      { r: radius * 1.45, tiltX: -0.5, tiltY: 0.9, speed: -0.006, color: "rgba(6, 182, 212, 0.4)" },
      { r: radius * 1.65, tiltX: 1.1, tiltY: -0.4, speed: 0.005, color: "rgba(236, 72, 153, 0.35)" },
    ];

    let rotX = 0;
    let rotY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const onMouseMove = (e) => {
      const mouseX = e.clientX - window.innerWidth / 2;
      const mouseY = e.clientY - window.innerHeight / 2;
      targetRotY = (mouseX / window.innerWidth) * 0.9;
      targetRotX = -(mouseY / window.innerHeight) * 0.9;
    };

    window.addEventListener("mousemove", onMouseMove);

    let angle = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      rotX += (targetRotX - rotX) * 0.05;
      rotY += (targetRotY - rotY) * 0.05;
      angle += 0.0035;

      const currentRotY = rotY + angle;
      const currentRotX = rotX;
      const focalLength = 480;
      const cx = width / 2;
      const cy = height / 2;

      // Draw 3D Rings
      rings.forEach((ring) => {
        ctx.beginPath();
        ctx.strokeStyle = ring.color;
        ctx.lineWidth = 1.4;
        let first = true;
        for (let j = 0; j <= ringPoints; j++) {
          const theta = (j / ringPoints) * Math.PI * 2 + angle * ring.speed * 20;
          const rx = ring.r * Math.cos(theta);
          const ry = ring.r * Math.sin(theta);
          const rz = 0;

          // Apply ring inclination
          const y1 = ry * Math.cos(ring.tiltX) - rz * Math.sin(ring.tiltX);
          const z1 = ry * Math.sin(ring.tiltX) + rz * Math.cos(ring.tiltX);
          const x2 = rx * Math.cos(ring.tiltY) + z1 * Math.sin(ring.tiltY);
          const z2 = -rx * Math.sin(ring.tiltY) + z1 * Math.cos(ring.tiltY);

          // Apply view rotation
          const xRot = x2 * Math.cos(currentRotY) + z2 * Math.sin(currentRotY);
          const zRot = -x2 * Math.sin(currentRotY) + z2 * Math.cos(currentRotY);
          const yRot = y1 * Math.cos(currentRotX) - zRot * Math.sin(currentRotX);
          const zFinal = y1 * Math.sin(currentRotX) + zRot * Math.cos(currentRotX);

          const scale = focalLength / (focalLength + zFinal + 280);
          const px = cx + xRot * scale;
          const py = cy + yRot * scale;

          if (scale > 0) {
            if (first) {
              ctx.moveTo(px, py);
              first = false;
            } else {
              ctx.lineTo(px, py);
            }
          }
        }
        ctx.stroke();
      });

      // Project Nodes
      const projected = nodes.map((node) => {
        const x1 = node.x * Math.cos(currentRotY) + node.z * Math.sin(currentRotY);
        const z1 = -node.x * Math.sin(currentRotY) + node.z * Math.cos(currentRotY);

        const y2 = node.y * Math.cos(currentRotX) - z1 * Math.sin(currentRotX);
        const z2 = node.y * Math.sin(currentRotX) + z1 * Math.cos(currentRotX);

        const scale = focalLength / (focalLength + z2 + 280);
        return {
          px: cx + x1 * scale,
          py: cy + y2 * scale,
          pz: z2,
          scale,
          color: node.color,
        };
      });

      projected.sort((a, b) => a.pz - b.pz);

      // Draw constellation links
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].px - projected[j].px;
          const dy = projected[i].py - projected[j].py;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 75) {
            const alpha = (1 - dist / 75) * 0.35 * projected[i].scale;
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].px, projected[i].py);
            ctx.lineTo(projected[j].px, projected[j].py);
            ctx.stroke();
          }
        }
      }

      // Draw glowing nodes
      projected.forEach((p) => {
        if (p.scale > 0) {
          ctx.beginPath();
          const r = Math.max(1, 2.8 * p.scale);
          ctx.arc(p.px, p.py, r, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 10;
          ctx.shadowColor = p.color;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-3d-canvas" aria-hidden="true" />;
}

/* ── 3D Tilt Card Wrapper Component ──────────────────────────── */
function TiltCard3D({ children, className = "", maxTilt = 10, style = {} }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -maxTilt;
    const rotY = ((x - centerX) / centerX) * maxTilt;

    setTilt({ x: rotX, y: rotY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.3,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        transformPerspective: 1100,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`tilt-card-3d-root ${className}`}
      style={{ ...style }}
    >
      {/* Dynamic 3D Glare Reflection */}
      <div
        className="tilt-3d-glare"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.22) 0%, transparent 65%)`,
          opacity: glare.opacity,
        }}
        aria-hidden="true"
      />
      <div className="tilt-3d-layer">{children}</div>
    </motion.div>
  );
}

/* ── 3D Interactive Code Terminal Visual ──────────────────────── */
function Hero3DConsole() {
  const [activeSnippet, setActiveSnippet] = useState("api");
  const [copiedCode, setCopiedCode] = useState(false);

  const snippets = {
    api: {
      filename: "routes/faculty.js",
      badge: "Express & JWT",
      code: `// Secure Faculty Workflow Controller
router.post('/workflow/approve', 
  verifyJWT, 
  authorizeRBAC(['HOD', 'DEAN']), 
  async (req, res) => {
    const { facultyId, certificateId } = req.body;
    const updated = await FacultyModel.findOneAndUpdate(
      { _id: facultyId, "docs._id": certificateId },
      { $set: { "docs.$.status": "VERIFIED", verifiedAt: new Date() } },
      { new: true, runValidators: true }
    );
    return res.status(200).json({ success: true, updated });
  }
);`,
    },
    bmms: {
      filename: "services/bmms.tenant.ts",
      badge: "NestJS & Prisma",
      code: `// Multi-Tenant Isolation & Dispatch Service
@Injectable()
export class MaintenanceService {
  constructor(private prisma: PrismaService) {}

  async createDispatch(tenantId: string, payload: DispatchDto) {
    return this.prisma.maintenanceDispatch.create({
      data: {
        ...payload,
        organizationId: tenantId, // Strict Tenant Isolation
        auditLogs: { create: { action: 'DISPATCH_INITIATED' } }
      },
      include: { unit: { select: { tower: true, building: true } } }
    });
  }
}`,
    },
    hooks: {
      filename: "hooks/useFacultyQuery.tsx",
      badge: "React 19 & Hooks",
      code: `// High-Performance Query & State Management
export const useFacultyQuery = (filters: FacultyFilters) => {
  const [data, setData] = useState<FacultyRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const syncPipeline = useCallback(async () => {
    setLoading(true);
    const response = await fetch('/api/egovernance/stream', {
      headers: { Authorization: \`Bearer \${token}\` }
    });
    const parsed = await response.json();
    setData(parsed.results);
    setLoading(false);
  }, [filters]);

  return { data, loading, syncPipeline };
};`,
    },
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(snippets[activeSnippet].code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="hero-3d-console-wrap">
      <div className="hero-3d-console-card">
        {/* Console Header Bar */}
        <div className="console-header-bar">
          <div className="console-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>

          <div className="console-tabs">
            <button
              onClick={() => setActiveSnippet("api")}
              className={`console-tab ${activeSnippet === "api" ? "active" : ""}`}
            >
              <span>faculty.js</span>
            </button>
            <button
              onClick={() => setActiveSnippet("bmms")}
              className={`console-tab ${activeSnippet === "bmms" ? "active" : ""}`}
            >
              <span>bmms.tenant.ts</span>
            </button>
            <button
              onClick={() => setActiveSnippet("hooks")}
              className={`console-tab ${activeSnippet === "hooks" ? "active" : ""}`}
            >
              <span>useFaculty.tsx</span>
            </button>
          </div>

          <button
            onClick={handleCopyCode}
            className="console-copy-btn"
            title="Copy Code Snippet"
            aria-label="Copy snippet"
          >
            {copiedCode ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
          </button>
        </div>

        {/* Code Content View */}
        <div className="console-body">
          <div className="console-status-row">
            <div className="status-indicator">
              <span className="status-beacon" />
              <span>{snippets[activeSnippet].badge}</span>
            </div>
            <span className="console-latency">HTTP 200 OK • 12ms</span>
          </div>

          <pre className="console-code-pre">
            <code>{snippets[activeSnippet].code}</code>
          </pre>
        </div>

        {/* 3D Floating Tech Badges */}
        <div className="floating-badge-3d badge-react">
          <span className="badge-icon">⚛️</span>
          <span>React.js</span>
        </div>
        <div className="floating-badge-3d badge-node">
          <span className="badge-icon">🟢</span>
          <span>Node.js</span>
        </div>
        <div className="floating-badge-3d badge-mongo">
          <span className="badge-icon">🍃</span>
          <span>MongoDB</span>
        </div>
        <div className="floating-badge-3d badge-ts">
          <span className="badge-icon">🔷</span>
          <span>TypeScript</span>
        </div>
      </div>
    </div>
  );
}

/* ── Animated Counter ────────────────────────────────────────── */
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = Math.max(1, Math.floor(target / 30));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 40);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

/* ── Rotating Title Component ────────────────────────────────── */
function RotatingTitle() {
  const titles = [
    "MERN Stack Developer",
    "Full Stack Software Engineer",
    "Scalable Web App Architect",
    "React & Node.js Specialist",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [titles.length]);

  return (
    <div className="rotating-title-container">
      <AnimatePresence mode="wait">
        <motion.span
          key={titles[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="rotating-title-text gradient-text"
        >
          {titles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

/* ── Main Portfolio Component ────────────────────────────────── */
export default function Portfolio() {
  const [activeNav, setActiveNav] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState("All");
  const [copiedItem, setCopiedItem] = useState(null);
  const [formStatus, setFormStatus] = useState("");

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      const sections = ["about", "skills", "projects", "experience", "education", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 220) {
          setActiveNav(id);
        }
      }
      if (window.scrollY < 200) {
        setActiveNav("hero");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus("sending");
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject") || "Inquiry from Portfolio";
    const message = formData.get("message");

    const mailtoUrl = `mailto:dineshdel510@gmail.com?subject=${encodeURIComponent(
      `[Portfolio] ${subject} - from ${name}`
    )}&body=${encodeURIComponent(`Sender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`)}`;

    window.open(mailtoUrl, "_self");
    setFormStatus("sent");
    e.target.reset();
    setTimeout(() => setFormStatus(""), 4000);
  };

  const navLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const filteredSkills =
    activeSkillCategory === "All"
      ? skillsData.flatMap((cat) => cat.items.map((item) => ({ ...item, catName: cat.category })))
      : skillsData
          .find((cat) => cat.category === activeSkillCategory)
          ?.items.map((item) => ({ ...item, catName: activeSkillCategory })) || [];

  return (
    <div className="portfolio-root">
      {/* ── 3D Interactive Celestial Universe ─────────────────── */}
      <Interactive3DUniverse />

      {/* ── Ambient Background Lighting ────────────────────────── */}
      <div className="ambient-glow" aria-hidden="true">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
        <div className="glow-orb glow-orb-3" />
      </div>

      {/* ── Navigation Bar ────────────────────────────────────── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="navbar"
      >
        <div className="navbar-inner">
          <a href="#top" className="logo-link">
            <div className="logo-box">
              <span className="logo-initials">DT</span>
            </div>
            <div className="logo-text-group">
              <span className="logo-text">
                Dinesh<span className="logo-accent">.dev</span>
              </span>
              <span className="logo-role">MERN Stack Engineer</span>
            </div>
          </a>

          <nav className="nav-desktop">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`nav-link ${activeNav === l.id ? "nav-active" : ""}`}
              >
                {l.label}
                {activeNav === l.id && (
                  <motion.div layoutId="navIndicator" className="nav-indicator" />
                )}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a
              href="https://github.com/Dineshdel"
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={19} />
            </a>
            <a
              href="https://linkedin.com/in/dineshdel"
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={19} />
            </a>
            <a href="#contact" className="hire-btn">
              <Sparkles size={14} />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className={`hamburger ${mobileMenuOpen ? "open" : ""}`} />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mobile-menu"
            >
              <div className="mobile-menu-inner">
                {navLinks.map((l) => (
                  <a
                    key={l.id}
                    href={`#${l.id}`}
                    className="mobile-nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
                <div className="mobile-socials">
                  <a
                    href="https://github.com/Dineshdel"
                    target="_blank"
                    rel="noreferrer"
                    className="mobile-social-link"
                  >
                    <GithubIcon size={18} /> GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/dineshdel"
                    target="_blank"
                    rel="noreferrer"
                    className="mobile-social-link"
                  >
                    <LinkedinIcon size={18} /> LinkedIn
                  </a>
                  <a href="/resume.pdf" download className="mobile-social-link accent">
                    <FileText size={18} /> Resume PDF
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ── Hero Section ──────────────────────────────────────── */}
      <section id="top" className="hero-section">
        <div className="hero-mesh-overlay" aria-hidden="true" />

        <div className="hero-dual-grid">
          {/* Left Column: Headlines & CTA */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="hero-content-col">
            {/* Status Badge */}
            <motion.div variants={fadeUp} className="hero-badge">
              <span className="badge-pulse-ring">
                <span className="badge-dot" />
              </span>
              <span>Available for Full-Time Roles & Opportunities</span>
            </motion.div>

            {/* Big Classic Headline */}
            <motion.h1 variants={fadeUp} className="hero-title">
              Hi, I'm <span className="shimmer-text">Dinesh T</span>
            </motion.h1>

            {/* Dynamic Rotating Title */}
            <motion.div variants={fadeUp} className="hero-title-sub">
              <span className="title-prefix">Building Scalable Web Systems as a</span>
              <RotatingTitle />
            </motion.div>

            {/* Bio Summary directly aligned with Resume */}
            <motion.p variants={fadeUp} className="hero-desc">
              MERN Stack Developer with <strong>2+ years of production experience</strong> designing and shipping
              enterprise-grade full stack web applications with <strong>MongoDB, Express.js, React.js, and Node.js</strong>.
              Fluent in JavaScript & TypeScript with deep expertise in REST API architecture, JWT & OAuth authentication,
              and optimized database indexing.
            </motion.p>

            {/* Primary Call to Action Buttons */}
            <motion.div variants={fadeUp} className="hero-cta-group">
              <a href="#projects" className="btn-primary">
                <span>Explore Featured Projects</span>
                <ArrowRight size={17} />
              </a>

              <a href="/resume.pdf" download="Dinesh_T_Resume.pdf" className="btn-secondary">
                <FileText size={17} />
                <span>Download Resume</span>
              </a>

              <a
                href="https://github.com/Dineshdel"
                target="_blank"
                rel="noreferrer"
                className="btn-glass"
                title="View GitHub @Dineshdel"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/dineshdel"
                target="_blank"
                rel="noreferrer"
                className="btn-glass"
                title="View LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Interactive Console Display */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-console-col"
          >
            <Hero3DConsole />
          </motion.div>
        </div>

        {/* Live Metric Stats in Row Format */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="hero-stats-row-container"
        >
          <div className="hero-stats-row-grid">
            <TiltCard3D maxTilt={8} className="stat-row-glass-card">
              <div className="stat-row-inner">
                <div className="stat-row-badge-pill indigo">
                  <span className="stat-row-num">
                    <Counter target={2} suffix="+" />
                  </span>
                </div>
                <div className="stat-row-details">
                  <span className="stat-row-title">Years Experience</span>
                  <span className="stat-row-desc">Enterprise Production</span>
                </div>
              </div>
            </TiltCard3D>

            <TiltCard3D maxTilt={8} className="stat-row-glass-card">
              <div className="stat-row-inner">
                <div className="stat-row-badge-pill cyan">
                  <span className="stat-row-num">
                    <Counter target={3} suffix="+" />
                  </span>
                </div>
                <div className="stat-row-details">
                  <span className="stat-row-title">Deployed Systems</span>
                  <span className="stat-row-desc">Enterprise & SaaS</span>
                </div>
              </div>
            </TiltCard3D>

            <TiltCard3D maxTilt={8} className="stat-row-glass-card">
              <div className="stat-row-inner">
                <div className="stat-row-badge-pill purple">
                  <span className="stat-row-num">
                    <Counter target={15} suffix="+" />
                  </span>
                </div>
                <div className="stat-row-details">
                  <span className="stat-row-title">Core Technologies</span>
                  <span className="stat-row-desc">MERN & Cloud Stack</span>
                </div>
              </div>
            </TiltCard3D>

            <TiltCard3D maxTilt={8} className="stat-row-glass-card">
              <div className="stat-row-inner">
                <div className="stat-row-badge-pill emerald">
                  <span className="stat-row-num highlight-emerald">100%</span>
                </div>
                <div className="stat-row-details">
                  <span className="stat-row-title">Code Ownership</span>
                  <span className="stat-row-desc">Database to UI</span>
                </div>
              </div>
            </TiltCard3D>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="scroll-indicator"
          aria-label="Scroll to About Section"
        >
          <span className="scroll-indicator-text">Scroll Down</span>
          <ChevronDown size={18} />
        </motion.a>
      </section>

      {/* ── About Section ─────────────────────────────────────── */}
      <section id="about" className="section">
        <div className="section-inner">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="about-wrapper"
          >
            <div className="section-header-block">
              <span className="section-kicker">
                <Briefcase size={14} /> Background & Focus
              </span>
              <h2 className="section-heading">
                Engineering <span className="gradient-text">Scalable Solutions</span> with End-to-End Precision
              </h2>
            </div>

            <div className="about-grid">
              <div className="about-text-column">
                <p className="about-lead">
                  I specialize in turning complex organizational workflows into reliable, fast, and secure full stack
                  applications that deliver real business impact.
                </p>
                <p className="about-body">
                  Currently serving as a <strong>MERN Stack Developer at SRM Institute of Science and Technology</strong>,
                  I engineer high-concurrency systems including university-wide E-Governance modules, faculty credential
                  systems, and digital approval tracking. My focus spans database schema optimization in MongoDB & PostgreSQL,
                  fault-tolerant RESTful API architectures, and seamless user experiences in React.js and Next.js.
                </p>
                <p className="about-body">
                  With a master's degree in <strong>Information Technology (M.Sc.)</strong> and formal certification in Full
                  Stack Development, I bring structured algorithmic thinking, clean modular coding practices, and a proactive
                  drive to deliver value at every tier of the stack.
                </p>

                {/* Quick Info Grid */}
                <div className="about-meta-grid">
                  <div className="about-meta-item">
                    <MapPin size={18} className="meta-icon" />
                    <div>
                      <span className="meta-label">Location</span>
                      <span className="meta-val">Ambur & Chennai, India</span>
                    </div>
                  </div>

                  <div className="about-meta-item">
                    <GraduationCap size={18} className="meta-icon" />
                    <div>
                      <span className="meta-label">Education</span>
                      <span className="meta-val">M.Sc. IT & B.Sc. CS</span>
                    </div>
                  </div>

                  <div className="about-meta-item">
                    <Briefcase size={18} className="meta-icon" />
                    <div>
                      <span className="meta-label">Current Role</span>
                      <span className="meta-val">SRM Institute (MERN Dev)</span>
                    </div>
                  </div>

                  <div className="about-meta-item">
                    <Award size={18} className="meta-icon" />
                    <div>
                      <span className="meta-label">Certification</span>
                      <span className="meta-val">Guvi Geeks Full Stack</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Competencies Cards with 3D Depth */}
              <div className="about-cards-column">
                <TiltCard3D maxTilt={8} className="specialty-card">
                  <div className="specialty-icon-box" style={{ background: "rgba(99, 102, 241, 0.15)", color: "#818cf8" }}>
                    <Layers size={22} />
                  </div>
                  <div>
                    <h3 className="specialty-title">Enterprise Full-Stack Architecture</h3>
                    <p className="specialty-desc">
                      Designing robust, modular applications using React.js, Next.js, Node.js, and Express with state
                      management, reusable hooks, and design system integration.
                    </p>
                  </div>
                </TiltCard3D>

                <TiltCard3D maxTilt={8} className="specialty-card">
                  <div className="specialty-icon-box" style={{ background: "rgba(6, 182, 212, 0.15)", color: "#22d3ee" }}>
                    <Server size={22} />
                  </div>
                  <div>
                    <h3 className="specialty-title">Secure APIs, JWT & OAuth</h3>
                    <p className="specialty-desc">
                      Implementing RESTful APIs with fine-grained Role-Based Access Control (RBAC), multi-tenant isolation,
                      and OAuth token authentication for secure enterprise transactions.
                    </p>
                  </div>
                </TiltCard3D>

                <TiltCard3D maxTilt={8} className="specialty-card">
                  <div className="specialty-icon-box" style={{ background: "rgba(16, 185, 129, 0.15)", color: "#34d399" }}>
                    <Database size={22} />
                  </div>
                  <div>
                    <h3 className="specialty-title">Optimized Database Engineering</h3>
                    <p className="specialty-desc">
                      Structuring schemas and compound indexes in MongoDB & PostgreSQL, writing performant aggregation pipelines,
                      and enforcing relational models with Prisma and Mongoose.
                    </p>
                  </div>
                </TiltCard3D>

                <TiltCard3D maxTilt={8} className="specialty-card">
                  <div className="specialty-icon-box" style={{ background: "rgba(244, 63, 94, 0.15)", color: "#fb7185" }}>
                    <Terminal size={22} />
                  </div>
                  <div>
                    <h3 className="specialty-title">DevOps & Team Collaboration</h3>
                    <p className="specialty-desc">
                      Utilizing Git-driven collaborative branching, CI/CD automated deployments, Postman API collections, and
                      containerized setups with Docker.
                    </p>
                  </div>
                </TiltCard3D>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Projects Section (With 3D Tilt Cards) ─────── */}
      <section id="projects" className="section section-alt">
        <div className="section-inner">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="section-header-block center">
              <span className="section-kicker">
                <Code2 size={14} /> Production Portfolio
              </span>
              <h2 className="section-heading">
                Featured <span className="gradient-text">Shipped Applications</span>
              </h2>
              <p className="section-subtext">
                Real-world enterprise systems and production platforms developed with modern full-stack architectures.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <TiltCard3D
                  key={project.title}
                  maxTilt={10}
                  className="project-card"
                  style={{ "--accent-theme": project.accentColor }}
                >
                  {/* Card Header & Banner */}
                  <div className="project-card-header" style={{ background: project.gradient }}>
                    <div className="project-badge-row">
                      <span className="project-category-badge">{project.category}</span>
                      <span className="project-featured-badge">{project.featuredBadge}</span>
                    </div>
                    <div className="project-hero-icon">{project.icon}</div>
                    <div className="project-header-info">
                      <span className="project-index">0{index + 1}</span>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-subtitle">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="project-card-body">
                    <p className="project-desc">{project.desc}</p>

                    <div className="project-highlights">
                      <h4 className="highlights-title">Key Architectural Highlights:</h4>
                      <ul className="highlights-list">
                        {project.bulletPoints.map((point, i) => (
                          <li key={i}>
                            <CheckCircle2 size={15} className="bullet-icon" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="project-tech-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tech-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="project-actions">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="project-btn-primary"
                        title={`Open Live ${project.title}`}
                      >
                        <ExternalLink size={15} />
                        <span>Live Application</span>
                      </a>

                      <a
                        href={project.code}
                        target="_blank"
                        rel="noreferrer"
                        className="project-btn-secondary"
                        title="View GitHub Repository / Profile"
                      >
                        <GithubIcon size={16} />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </TiltCard3D>
              ))}
            </div>

            {/* Direct Verification Callout */}
            <div className="projects-callout">
              <div className="callout-left">
                <Globe size={24} className="callout-icon" />
                <div>
                  <h4 className="callout-title">Looking for deep-dive code reviews or architectural walkthroughs?</h4>
                  <p className="callout-desc">
                    Explore my active GitHub repositories, pull requests, and open-source contributions.
                  </p>
                </div>
              </div>
              <a
                href="https://github.com/Dineshdel"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <GithubIcon size={16} />
                <span>Visit github.com/Dineshdel</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Skills & Tech Stack Section ────────────────────────── */}
      <section id="skills" className="section">
        <div className="section-inner">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="section-header-block center">
              <span className="section-kicker">
                <Cpu size={14} /> Technical Arsenal
              </span>
              <h2 className="section-heading">
                Skills & <span className="gradient-text">Core Technologies</span>
              </h2>
              <p className="section-subtext">
                Tools and technologies I use to build secure, scalable, and responsive production web applications.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="skills-filter-tabs">
              {["All", "Front-End", "Back-End & APIs", "Databases & ORM", "Testing, Cloud & Tools"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveSkillCategory(cat)}
                  className={`skill-tab-btn ${activeSkillCategory === cat ? "active" : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Filtered Skills Grid with 3D Tilt */}
            <motion.div layout className="skills-interactive-grid">
              <AnimatePresence>
                {filteredSkills.map((skill) => (
                  <TiltCard3D
                    key={skill.name}
                    maxTilt={12}
                    className="skill-badge-card"
                  >
                    <div className="skill-card-top">
                      <div className="skill-color-dot" style={{ backgroundColor: skill.color }} />
                      <span className="skill-title">{skill.name}</span>
                      <span className="skill-level-badge">{skill.tag}</span>
                    </div>

                    <div className="skill-progress-bar">
                      <motion.div
                        className="skill-progress-fill"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}55, ${skill.color})`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </TiltCard3D>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Core Competencies Summary Chips */}
            <div className="skills-summary-footer">
              <div className="summary-chip-label">Specializations:</div>
              <div className="summary-chips-wrap">
                <span className="summary-chip">MERN Architecture</span>
                <span className="summary-chip">REST API Design</span>
                <span className="summary-chip">JWT & OAuth Authentication</span>
                <span className="summary-chip">Dynamic RBAC</span>
                <span className="summary-chip">MongoDB Aggregations</span>
                <span className="summary-chip">Multi-Tenant SaaS</span>
                <span className="summary-chip">Prisma & Mongoose ORM</span>
                <span className="summary-chip">Git CI/CD Workflows</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Experience Section ────────────────────────────────── */}
      <section id="experience" className="section section-alt">
        <div className="section-inner">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="section-header-block center">
              <span className="section-kicker">
                <Briefcase size={14} /> Career Timeline
              </span>
              <h2 className="section-heading">
                Work <span className="gradient-text">Experience</span>
              </h2>
              <p className="section-subtext">
                Demonstrated history of engineering high-availability systems in production.
              </p>
            </div>

            <div className="experience-timeline-container">
              {experienceData.map((exp, idx) => (
                <TiltCard3D key={idx} maxTilt={6} className="experience-card">
                  <div className="exp-card-header">
                    <div className="exp-header-left">
                      <div className="exp-role-title">
                        <h3>{exp.role}</h3>
                        <span className="exp-current-badge">{exp.badge}</span>
                      </div>
                      <p className="exp-company-text">
                        <strong>{exp.company}</strong> • {exp.location}
                      </p>
                    </div>

                    <div className="exp-period-badge">
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="exp-summary">{exp.summary}</p>

                  <div className="exp-bullet-section">
                    <h4 className="exp-bullet-title">Key Contributions & Deliverables:</h4>
                    <ul className="exp-bullet-list">
                      {exp.achievements.map((item, i) => (
                        <li key={i}>
                          <span className="bullet-disc" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="exp-skills-row">
                    <span className="exp-skills-label">Technologies Applied:</span>
                    <div className="exp-skills-tags">
                      {exp.skills.map((s) => (
                        <span key={s} className="exp-tech-tag">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard3D>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Education & Certifications Section ─────────────────── */}
      <section id="education" className="section">
        <div className="section-inner">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="section-header-block center">
              <span className="section-kicker">
                <GraduationCap size={14} /> Academic & Credentials
              </span>
              <h2 className="section-heading">
                Education & <span className="gradient-text">Certifications</span>
              </h2>
            </div>

            <div className="education-certs-grid">
              {/* Education Column */}
              <div className="edu-column">
                <h3 className="column-subheading">
                  <GraduationCap size={20} className="icon-indigo" />
                  <span>Academic Degrees</span>
                </h3>

                <div className="edu-cards-stack">
                  {educationData.map((edu, i) => (
                    <TiltCard3D key={i} maxTilt={8} className="credential-card">
                      <div className="credential-icon-box">{edu.icon}</div>
                      <div className="credential-content">
                        <span className="credential-tag">{edu.type}</span>
                        <h4 className="credential-title">{edu.degree}</h4>
                        <p className="credential-inst">{edu.institution}</p>
                        <div className="credential-footer">
                          <span>{edu.location}</span>
                          <span className="credential-year">{edu.period}</span>
                        </div>
                      </div>
                    </TiltCard3D>
                  ))}
                </div>
              </div>

              {/* Certifications Column */}
              <div className="cert-column">
                <h3 className="column-subheading">
                  <Award size={20} className="icon-cyan" />
                  <span>Professional Certifications</span>
                </h3>

                <div className="edu-cards-stack">
                  {certificationData.map((cert, i) => (
                    <TiltCard3D key={i} maxTilt={8} className="credential-card highlight-border">
                      <div className="credential-icon-box gold">{cert.icon}</div>
                      <div className="credential-content">
                        <div className="cert-badge-row">
                          <span className="credential-tag gold">Verified Certification</span>
                          <span className="credential-year">{cert.year}</span>
                        </div>
                        <h4 className="credential-title">{cert.title}</h4>
                        <p className="credential-inst">{cert.issuer}</p>
                        <div className="cert-skills-box">
                          <span className="cert-skills-label">Specialization:</span>
                          <p className="cert-skills-list">{cert.skills}</p>
                        </div>
                      </div>
                    </TiltCard3D>
                  ))}

                  {/* Summary Metric Box */}
                  <div className="credentials-summary-card">
                    <Sparkles size={20} className="icon-indigo" />
                    <div>
                      <h4 className="summary-box-title">Continuously Upskilling</h4>
                      <p className="summary-box-desc">
                        Dedicated to mastering cloud-native paradigms, microservices, containerization, and the evolving
                        modern web ecosystem.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact & Connect Section ──────────────────────────── */}
      <section id="contact" className="section section-alt">
        <div className="section-inner">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="contact-layout"
          >
            {/* Left Contact Information */}
            <div className="contact-details-panel">
              <span className="section-kicker">
                <Mail size={14} /> Direct Channels
              </span>
              <h2 className="section-heading">
                Let's Build Something <span className="gradient-text">Exceptional</span>
              </h2>
              <p className="contact-intro">
                I am actively considering full-time MERN Stack Developer and Full Stack Software Engineer roles. Whether
                you have a project proposal, an open role, or just want to connect, my inbox is always open.
              </p>

              {/* Interactive Contact Cards with 1-click Copy */}
              <div className="contact-cards-list">
                <TiltCard3D
                  maxTilt={6}
                  className="contact-action-card"
                  onClick={() => copyToClipboard("dineshdel510@gmail.com", "email")}
                  title="Click to copy email address"
                >
                  <div className="card-icon-avatar">
                    <Mail size={20} />
                  </div>
                  <div className="card-info-wrap">
                    <span className="card-type-label">Email Address (Click to Copy)</span>
                    <span className="card-primary-val">dineshdel510@gmail.com</span>
                  </div>
                  <button className="copy-action-btn" aria-label="Copy Email">
                    {copiedItem === "email" ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                  </button>
                </TiltCard3D>

                <TiltCard3D
                  maxTilt={6}
                  className="contact-action-card"
                  onClick={() => copyToClipboard("+916382632677", "phone")}
                  title="Click to copy phone number"
                >
                  <div className="card-icon-avatar phone">
                    <Phone size={20} />
                  </div>
                  <div className="card-info-wrap">
                    <span className="card-type-label">Phone / WhatsApp (Click to Copy)</span>
                    <span className="card-primary-val">+91 6382632677</span>
                  </div>
                  <button className="copy-action-btn" aria-label="Copy Phone">
                    {copiedItem === "phone" ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                  </button>
                </TiltCard3D>

                <TiltCard3D maxTilt={6} className="contact-action-card link-card">
                  <a
                    href="https://github.com/Dineshdel"
                    target="_blank"
                    rel="noreferrer"
                    className="card-full-link"
                  >
                    <div className="card-icon-avatar github">
                      <GithubIcon size={20} />
                    </div>
                    <div className="card-info-wrap">
                      <span className="card-type-label">GitHub Profile</span>
                      <span className="card-primary-val">github.com/Dineshdel</span>
                    </div>
                    <ExternalLink size={16} className="external-indicator" />
                  </a>
                </TiltCard3D>

                <TiltCard3D maxTilt={6} className="contact-action-card link-card">
                  <a
                    href="https://linkedin.com/in/dineshdel"
                    target="_blank"
                    rel="noreferrer"
                    className="card-full-link"
                  >
                    <div className="card-icon-avatar linkedin">
                      <LinkedinIcon size={20} />
                    </div>
                    <div className="card-info-wrap">
                      <span className="card-type-label">LinkedIn Network</span>
                      <span className="card-primary-val">linkedin.com/in/dineshdel</span>
                    </div>
                    <ExternalLink size={16} className="external-indicator" />
                  </a>
                </TiltCard3D>

                <div className="contact-action-card static">
                  <div className="card-icon-avatar location">
                    <MapPin size={20} />
                  </div>
                  <div className="card-info-wrap">
                    <span className="card-type-label">Location</span>
                    <span className="card-primary-val">Ambur & Chennai, Tamil Nadu, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="contact-form-panel">
              <TiltCard3D maxTilt={5} className="contact-form-card">
                <h3 className="form-card-title">Send a Direct Message</h3>
                <p className="form-card-desc">
                  Fill in your details below and it will compose a direct email message to Dinesh.
                </p>

                <form onSubmit={sendEmail} className="styled-contact-form">
                  <div className="form-row-2">
                    <div className="styled-input-group">
                      <label htmlFor="name-input">Your Full Name</label>
                      <input
                        id="name-input"
                        name="name"
                        type="text"
                        placeholder="e.g. John Doe"
                        required
                      />
                    </div>

                    <div className="styled-input-group">
                      <label htmlFor="email-input">Email Address</label>
                      <input
                        id="email-input"
                        name="email"
                        type="email"
                        placeholder="e.g. john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="styled-input-group">
                    <label htmlFor="subject-input">Subject / Topic</label>
                    <input
                      id="subject-input"
                      name="subject"
                      type="text"
                      placeholder="e.g. Full Stack Role Opportunity / Project Inquiry"
                      required
                    />
                  </div>

                  <div className="styled-input-group">
                    <label htmlFor="message-input">Message</label>
                    <textarea
                      id="message-input"
                      name="message"
                      rows={5}
                      placeholder="Hi Dinesh, I saw your portfolio and would like to discuss..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className={`form-submit-button ${formStatus}`}
                    disabled={formStatus === "sending"}
                  >
                    {formStatus === "sending" ? (
                      <>
                        <span className="spinner" />
                        <span>Opening Mail Client...</span>
                      </>
                    ) : formStatus === "sent" ? (
                      <>
                        <CheckCircle2 size={18} />
                        <span>Mail Prepared!</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <div className="form-footer-note">
                    Prefer direct email? Reach out at{" "}
                    <a href="mailto:dineshdel510@gmail.com" className="direct-email-link">
                      dineshdel510@gmail.com
                    </a>
                  </div>
                </form>
              </TiltCard3D>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top-row">
            <div className="footer-brand-column">
              <div className="logo-link">
                <div className="logo-box">
                  <span className="logo-initials">DT</span>
                </div>
                <span className="logo-text">
                  Dinesh<span className="logo-accent">.dev</span>
                </span>
              </div>
              <p className="footer-tagline">
                MERN Stack Developer dedicated to building scalable, resilient enterprise applications with clean code
                and modern aesthetics.
              </p>
            </div>

            <div className="footer-nav-column">
              <span className="footer-nav-title">Quick Navigation</span>
              <div className="footer-nav-links">
                {navLinks.map((l) => (
                  <a key={l.id} href={`#${l.id}`} className="footer-nav-link">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-connect-column">
              <span className="footer-nav-title">Direct Profiles</span>
              <div className="footer-social-buttons">
                <a
                  href="https://github.com/Dineshdel"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-pill"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/dineshdel"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-pill"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>
                <a href="/resume.pdf" download className="footer-social-pill">
                  <FileText size={16} />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom-row">
            <p className="footer-copy">
              © {new Date().getFullYear()} Dinesh T. All rights reserved. Built with React & modern web standards.
            </p>
            <p className="footer-location-indicator">
              <span className="status-ping" />
              <span>Available for Relocation & Remote Roles</span>
            </p>
          </div>
        </div>
      </footer>

      {/* ── Scroll To Top Button ───────────────────────────────── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="scroll-top-btn"
            title="Scroll to Top"
            aria-label="Scroll to top of page"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
