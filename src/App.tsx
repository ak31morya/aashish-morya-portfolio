
import { Fragment, useEffect, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  ExternalLink,
  FileDown,
  Linkedin,
  Mail,
  Menu,
  MonitorSmartphone,
  Send,
  Server,
  Sparkles,
  Sun,
  Moon,
  X,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const projects = [
  {
    number: "01",
    name: "TenantForge",
    category: "MULTI-TENANT SAAS",
    description:
      "A multi-tenant SaaS project exploring tenant-aware request handling, separation of concerns, and maintainable backend architecture.",
    stack: [".NET", "ASP.NET Core", "EF Core", "SQL"],
    type: "Backend architecture",
    visual: "tenant",
    link: "https://github.com/ak31morya",
  },
  {
    number: "02",
    name: "Auction Platform",
    category: "FULL-STACK WEB APP",
    description:
      "A full-stack auction application pairing a React interface with an ASP.NET Core API and SQLite persistence.",
    stack: ["React", "ASP.NET Core", "SQLite", "REST API"],
    type: "Full-stack development",
    visual: "auction",
    link: "https://github.com/ak31morya/AuctionPlatform",
  },
  {
    number: "03",
    name: "E-Learning Dashboard",
    category: "EDTECH",
    description:
      "An e-learning dashboard concept with a React frontend, ASP.NET Core Web API, and Microsoft SQL Server data layer.",
    stack: ["React", "C#", "Web API", "SQL Server"],
    type: "Product interface",
    visual: "learning",
    link: "https://github.com/ak31morya",
  },
];

const experience = [
  {
    role: ".NET Full-Stack Developer L2",
    company: "Wipro",
    period: "2025 — Present",
    type: "Professional Experience",
    description:
      "Contribute to full-stack application development, backend API engineering, legacy application modernization, and enterprise software maintenance.",
    responsibilities: [
      "Develop and maintain backend services using C#, .NET, ASP.NET Core Web API, and Entity Framework Core.",
      "Build and integrate RESTful APIs, DTOs, authentication flows, and data-access components.",
      "Contribute to frontend development using React.js, TypeScript, JavaScript, HTML, and CSS.",
      "Work with SQL Server to write queries, manage relational data, and troubleshoot database issues.",
      "Support legacy application migration, code refactoring, debugging, and production issue resolution.",
      "Collaborate with team members on code reviews, version control, testing, and application improvements.",
      "Work with Microsoft Azure services and deployment workflows as required by the application.",
    ],
    technologies: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "React.js",
      "TypeScript",
      "SQL Server",
      "Entity Framework Core",
      "REST APIs",
      "Azure",
      "Git",
    ],
  },
];

const skills = [
  {
    title: "Frontend Development",
    items: [
      "React.js",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive UI",
      "Redux",
    ],
  },
  {
    title: "Backend Development",
    items: [
      "C#",
      ".NET Framework",
      ".NET / .NET Core",
      "ASP.NET Core Web API",
      "REST API Design",
      "Entity Framework Core",
      "LINQ",
      "Dependency Injection",
      "JWT Authentication",
      "OAuth 2.0 Fundamentals",
    ],
  },
  {
    title: "Databases & Data",
    items: [
      "Microsoft SQL Server",
      "SQLite",
      "MongoDB",
      "SQL Queries",
      "Database Design",
      "Entity Relationships",
      "EF Core Migrations",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "Microsoft Azure",
      "Azure App Service",
      "Azure DevOps",
      "CI/CD Pipelines",
      "Git",
      "GitHub",
      "Application Deployment",
    ],
  },
  {
    title: "API & Developer Tools",
    items: [
      "Swagger / OpenAPI",
      "Postman",
      "Visual Studio",
      "VS Code",
      "Chrome DevTools",
      "Debugging",
      "Error Handling",
    ],
  },
  {
    title: "Architecture & Practices",
    items: [
      "Full-Stack Development",
      "Layered Architecture",
      "DTOs",
      "API Integration",
      "Code Refactoring",
      "Bug Fixing",
      "Legacy Migration",
      "Responsive Design",
    ],
  },
];

const certifications = [
  {
    number: "01",
    issuer: "MICROSOFT",
    name: "Microsoft Certified: Azure Fundamentals",
    code: "AZ-900",
    description:
      "Foundational knowledge of cloud concepts, Azure services, security, governance, and cloud pricing.",
    category: "CLOUD FUNDAMENTALS",
    icon: "AZ",
    verificationUrl: "",
  },
  {
    number: "02",
    issuer: "GITHUB",
    name: "GitHub Copilot Foundations",
    code: "AI-ASSISTED DEVELOPMENT",
    description:
      "Foundational knowledge of GitHub Copilot and AI-assisted software development workflows.",
    category: "DEVELOPER PRODUCTIVITY",
    icon: "GH",
    verificationUrl: "",
  },
  {
    number: "03",
    issuer: "MICROSOFT / FREECODECAMP",
    name: "Foundational C# with Microsoft",
    code: "C# FUNDAMENTALS",
    description:
      "Core C# programming concepts and foundational problem-solving skills.",
    category: "PROGRAMMING",
    icon: "C#",
    verificationUrl: "",
  },
];

const rise = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={rise}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      transition={{
        duration: reduceMotion ? 0 : 0.7,
        delay: reduceMotion ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}

/* Project-specific dashboard previews */
function ProjectArtwork({ variant }: { variant: string }) {
  const projectName =
    variant === "tenant"
      ? "TenantForge"
      : variant === "auction"
        ? "Auction"
        : "LearnHub";

  const browserAddress =
    variant === "tenant"
      ? "console.tenantforge.dev"
      : variant === "auction"
        ? "market.auction.dev"
        : "learn.dashboard.dev";

  const navigation =
    variant === "tenant"
      ? ["Overview", "Tenants", "Usage", "Settings"]
      : variant === "auction"
        ? ["Discover", "My bids", "Watchlist", "Won items"]
        : ["Dashboard", "My courses", "Schedule", "Certificates"];

  const metrics =
    variant === "tenant"
      ? [
          ["Active tenants", "128"],
          ["Monthly usage", "84%"],
          ["System status", "Healthy"],
        ]
      : variant === "auction"
        ? [
            ["Live auctions", "246"],
            ["Watching", "12"],
            ["Ending soon", "08"],
          ]
        : [
            ["My courses", "08"],
            ["Completed", "12"],
            ["Learning time", "24h"],
          ];

  return (
    <div
      className={`project-art ui-preview ui-${variant}`}
      aria-hidden="true"
    >
      <div className="ui-browser">
        <div className="browser-dots">
          <i />
          <i />
          <i />
        </div>
        <span className="browser-address">{browserAddress}</span>
      </div>

      <div className="ui-layout">
        <aside className="ui-sidebar">
          <div className="ui-brand">
            <span className="ui-brand-icon">
              {variant === "tenant"
                ? "T"
                : variant === "auction"
                  ? "A"
                  : "L"}
            </span>
            <b>{projectName}</b>
          </div>

          {navigation.map((item, index) => (
            <div
              key={item}
              className={`ui-nav-item ${index === 0 ? "active" : ""}`}
            >
              <span className="ui-nav-icon">
                {["◫", "▤", "◷", "⚙"][index]}
              </span>
              {item}
            </div>
          ))}
        </aside>

        <div className="ui-main">
          <div className="ui-topline">
            <div>
              <span className="ui-overline">
                {variant === "tenant"
                  ? "WORKSPACE / ADMIN"
                  : variant === "auction"
                    ? "MARKETPLACE / LIVE"
                    : "YOUR LEARNING SPACE"}
              </span>

              <h4>
                {variant === "tenant"
                  ? "Overview"
                  : variant === "auction"
                    ? "Discover items"
                    : "Welcome back"}
              </h4>
            </div>

            <span className="ui-avatar">AM</span>
          </div>

          <div className="ui-metrics">
            {metrics.map(([label, value]) => (
              <div className="ui-metric" key={label}>
                <span>{label}</span>
                <b>{value}</b>
                <i />
              </div>
            ))}
          </div>

          {/* TenantForge: tenant administration table */}
          {variant === "tenant" && (
            <div className="ui-panel">
              <div className="ui-panel-heading">
                <b>Tenant management</b>
                <span>View all ↗</span>
              </div>

              <div className="ui-table-head">
                <span>ORGANIZATION</span>
                <span>STATUS</span>
                <span>USAGE</span>
              </div>

              {[
                "Northstar Labs",
                "Studio Meridian",
                "Vertex Systems",
              ].map((name, index) => (
                <div className="ui-table-row" key={name}>
                  <span className="ui-company">
                    <i>{name[0]}</i>
                    {name}
                  </span>

                  <span className="ui-status">● Active</span>

                  <span className="ui-bar">
                    <i
                      style={{
                        width: `${82 - index * 19}%`,
                      }}
                    />
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Auction Platform: auction listings */}
          {variant === "auction" && (
            <div className="ui-auction-grid">
              {[
                ["Vintage camera", "$240", "LIVE"],
                ["Designer chair", "$510", "LIVE"],
              ].map(([name, price, status], index) => (
                <div className="ui-auction-item" key={name}>
                  <div className={`ui-item-visual item-${index}`}>
                    {index === 0 ? "◎" : "◒"}
                  </div>

                  <span className="ui-live">{status}</span>
                  <b>{name}</b>
                  <span className="ui-muted">Current bid</span>
                  <strong>{price}</strong>
                </div>
              ))}
            </div>
          )}

          {/* E-Learning: course progress */}
          {variant === "learning" && (
            <div className="ui-panel learning-panel">
              <div className="ui-panel-heading">
                <b>Continue learning</b>
                <span>See all ↗</span>
              </div>

              {[
                ["C#", "Build with C#", 72],
                ["R", "React fundamentals", 48],
                ["A", "Azure essentials", 88],
              ].map(([initial, name, progress]) => (
                <div className="ui-course" key={name}>
                  <span className="ui-course-icon">{initial}</span>

                  <div className="ui-course-info">
                    <b>{name}</b>
                    <div className="ui-progress">
                      <i style={{ width: `${progress}%` }} />
                    </div>
                  </div>

                  <span className="ui-progress-value">
                    {progress}%
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="art-caption">
        <span>PRODUCT UI / {variant.toUpperCase()}</span>
        <span>UI CONCEPT ↗</span>
      </div>
    </div>
  );
}

function ExperienceSection() {
  return (
    <section
      className="experience-section section-wrap section-space"
      id="experience"
    >
      <div className="section-heading">
        <div>
          <p className="section-kicker">CAREER JOURNEY</p>
          <h2>
            Professional <span className="serif-word">experience.</span>
          </h2>
        </div>

        <p className="section-description">
          Building and maintaining full-stack applications with a focus on
          reliable backend services, clean code, and scalable solutions.
        </p>
      </div>

      <div className="experience-list">
        {experience.map((item) => (
          <article className="experience-card" key={item.company}>
            <div className="experience-top">
              <div>
                <p className="experience-company">{item.company}</p>
                <h3>{item.role}</h3>
              </div>

              <div className="experience-meta">
                <span>{item.period}</span>
                <span>{item.type}</span>
              </div>
            </div>

            <p className="experience-description">{item.description}</p>

            <ul className="experience-responsibilities">
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>

            <div className="experience-tech">
              {item.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CertificationsSection() {
  return (
    <section
      className="certifications-section section-wrap section-space"
      id="certifications"
    >
      <div className="section-heading">
        <div>
          <span className="section-kicker">05 / CERTIFICATIONS</span>
          <h2>
            Learning with <span className="serif-word">purpose.</span>
          </h2>
        </div>

        <p>
          Professional credentials and structured learning supporting my work
          in cloud, programming, and development.
        </p>
      </div>

      <div className="certifications-grid">
        {certifications.map((cert, index) =>
          index === 0 ? (
            <Fragment key={cert.number}>
              <a
                className="certification-card azure-certification"
                href="https://learn.microsoft.com/en-gb/users/aashishmorya-7251/credentials/4db7fe449e8b8f8c?ref=https%3A%2F%2Fwww.linkedin.com%2F"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Microsoft Certified: Azure Fundamentals credential"
              >
                <div className="certification-image-wrap">
                  <img
                    src="/certificates/azure certi.jpeg"
                    alt="Microsoft Certified: Azure Fundamentals certificate for Aashish Morya"
                    className="certification-image"
                  />
                </div>

                <div className="certification-card-content">
                  <p className="certification-issuer">MICROSOFT</p>
                  <h3>Microsoft Certified: Azure Fundamentals</h3>
                  <p>Earned on 21 May 2025</p>
                  <span className="certification-link">
                    View credential <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </a>

              <a
                className="certification-card aws-certification"
                href="https://aws.amazon.com/verification"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Verify AWS Certified Cloud Practitioner certification"
              >
                <div className="certification-image-wrap">
                  <img
                    src="/certificates/aws-cloud-practitioner.jpeg"
                    alt="AWS Certified Cloud Practitioner certificate awarded to Aashish Morya"
                    className="certification-image"
                  />
                </div>

                <div className="certification-card-content">
                  <p className="certification-issuer">AMAZON WEB SERVICES</p>
                  <h3>AWS Certified Cloud Practitioner</h3>
                  <p>Issued: 3 July 2026</p>
                  <p>Expires: 3 July 2029</p>
                  <span className="certification-link">
                    Verify certification <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </a>
            </Fragment>
          ) : index === 1 ? (
            <a
              className="certification-card github-certification"
              href="https://www.credly.com/go/PbBcRVMC"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Verify GitHub Foundations certification on Credly"
              key={cert.number}
            >
              <div className="certification-image-wrap">
                <img
                  src="/certificates/github-foundations.png"
                  alt="GitHub Foundations certificate awarded to Aashish Morya"
                  className="certification-image"
                  loading="lazy"
                />
              </div>

              <div className="certification-card-content">
                <p className="certification-issuer">GITHUB</p>
                <h3>GitHub Foundations</h3>
                <p>Issued: 19 May 2025</p>
                <p>Expires: 19 May 2028</p>

                <span className="certification-link">
                  Verify credential <span aria-hidden="true">↗</span>
                </span>
              </div>
            </a>
          ) : index === 2 ? (
            <a
              className="certification-card csharp-certification"
              href="https://freecodecamp.org/certification/fccad555550-0688-4e60-bfba-7d42d3e41a97/foundational-c-sharp-with-microsoft"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Verify Foundational C# with Microsoft certification"
              key={cert.number}
            >
              <div className="certification-image-wrap">
                <img
                  src="/certificates/foundational-csharp-microsoft.png"
                  alt="Foundational C# with Microsoft Developer Certification awarded to Aashish Morya on May 11, 2025"
                  className="certification-image"
                  loading="lazy"
                />
              </div>

              <div className="certification-card-content">
                <p className="certification-issuer">
                  MICROSOFT · FREECODECAMP
                </p>
                <h3>Foundational C# with Microsoft</h3>
                <p>Completed: 11 May 2025</p>

                <span className="certification-link">
                  View certificate <span aria-hidden="true">↗</span>
                </span>
              </div>
            </a>
          ) : (
            <article className="certification-card" key={cert.number}>
              <div className="certification-top">
                <span className="certification-number">{cert.number}</span>
                <span className="certification-icon">{cert.icon}</span>
              </div>

              <span className="certification-issuer">{cert.issuer}</span>
              <h3>{cert.name}</h3>
              <span className="certification-code">{cert.code}</span>
              <p>{cert.description}</p>

              <div className="certification-bottom">
                <span>{cert.category}</span>

                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Verify ${cert.name}`}
                  >
                    Verify <ArrowUpRight size={15} />
                  </a>
                ) : (
                  <span className="verification-pending">
                    Add credential link
                  </span>
                )}
              </div>
            </article>
          ),
        )}
        <a
          className="certification-card copilot-certification"
          href="https://www.credly.com/go/Klxm9E9C"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Verify GitHub Copilot certification on Credly"
        >
          <div className="certification-image-wrap">
            <img
              src="/certificates/github-copilot.png"
              alt="GitHub Copilot certification awarded to Aashish Morya"
              className="certification-image"
              loading="lazy"
            />
          </div>

          <div className="certification-card-content">
            <p className="certification-issuer">GITHUB</p>
            <h3>GitHub Copilot</h3>
            <p>Issued: 17 May 2025</p>
            <p>Expires: 17 May 2028</p>

            <span className="certification-link">
              Verify credential <span aria-hidden="true">↗</span>
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}

type FormStatus = "idle" | "loading" | "success" | "error";

function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mdeeorbp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="contact-section section-wrap section-space" id="contact">
      <div className="contact-heading">
        <p className="section-kicker">GET IN TOUCH</p>
        <h2>
          Let's build something{" "}
          <span className="serif-word">meaningful.</span>
        </h2>
        <p className="section-description">
          Have an opportunity, a project idea, or just want to connect? Send me
          a message.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-details">
          <h3>Contact Aashish</h3>
          <p>
            I'm interested in .NET full-stack development, backend engineering,
            cloud technologies, and exciting software projects.
          </p>

          <a
            className="contact-detail-link"
            href="mailto:aashishmorya33@gmail.com"
          >
            <Mail size={18} />
            <span>aashishmorya33@gmail.com</span>
          </a>

          <a
            className="contact-detail-link"
            href="https://www.linkedin.com/in/aashishmorya31/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={18} />
            <span>Connect on LinkedIn</span>
          </a>

          <a
            className="resume-button contact-resume"
            href="/Aashish-Morya-Resume.pdf"
            download="Aashish-Morya-Resume.pdf"
          >
            <FileDown size={18} />
            Download Resume
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field">
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Enter your name"
              autoComplete="name"
              required
              minLength={2}
              maxLength={100}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              maxLength={254}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder="Job opportunity, collaboration..."
              required
              minLength={3}
              maxLength={150}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell me a little about your inquiry..."
              rows={5}
              required
              minLength={10}
              maxLength={5000}
            />
          </div>

          <button
            className="contact-submit"
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              "Sending..."
            ) : (
              <>
                Send Message <Send size={16} />
              </>
            )}
          </button>

          {status === "success" && (
            <p className="form-feedback form-success" role="status">
              Thanks for reaching out! Your message was sent successfully.
            </p>
          )}

          {status === "error" && (
            <p className="form-feedback form-error" role="alert">
              We couldn't send your message. Please try again or email me
              directly at aashishmorya33@gmail.com.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

type Theme = "light" | "dark";

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return localStorage.getItem("portfolio-theme") === "dark"
        ? "dark"
        : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The toggle still works if storage is unavailable.
    }
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
      <span>{isDark ? "Light mode" : "Dark mode"}</span>
    </button>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const closeMenu = () => setMenuOpen(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
    });

    closeMenu();
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Aashish Morya home">
          AM<span className="wordmark-dot">.</span>
        </a>

        <nav
          className={`desktop-nav ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#certifications" onClick={closeMenu}>Certifications</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <ThemeToggle />

          <a
            className="nav-cta"
            href="mailto:aashishmorya33@gmail.com"
            onClick={closeMenu}
          >
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="main">
        {/* Hero */}
        <section className="hero section-wrap" id="home">
          <div className="hero-grid" aria-hidden="true" />

          <div className="hero-copy">
            <motion.div
              className="eyebrow"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.6 }}
            >
              <span className="status-dot" />
              FULL-STACK DEVELOPER
              <span className="eyebrow-line" />
              INDIA
            </motion.div>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.9,
                delay: reduceMotion ? 0 : 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Building digital
              <br />
              <span className="serif-word">things</span> that{" "}
              <span className="outlined-word">work.</span>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : 0.28,
              }}
            >
              I'm <strong>Aashish Morya</strong>, a Full-Stack Developer
              working across C#, .NET, React, and SQL. I enjoy turning
              product requirements into clear interfaces and maintainable APIs.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: reduceMotion ? 0 : 0.4,
              }}
            >
              <button
                className="button button-dark"
                onClick={() => scrollTo("work")}
              >
                Explore my work <ArrowDownRight size={17} />
              </button>

              <a
                className="text-link"
                href="mailto:aashishmorya33@gmail.com"
              >
                Get in touch <ArrowUpRight size={16} />
              </a>

              <a
                href="https://www.linkedin.com/in/aashishmorya31/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-button"
                aria-label="Visit my LinkedIn profile"
              >
                <Linkedin size={18} />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight size={16} />
              </a>

              <a
                href="/Aashish-Morya-Resume.pdf"
                download="Aashish-Morya-Resume.pdf"
                className="resume-button"
              >
                <FileDown size={18} />
                <span>Download Resume</span>
              </a>
            </motion.div>

            <motion.div
              className="hero-meta"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: reduceMotion ? 0 : 0.3,
                delay: reduceMotion ? 0 : 0.75,
              }}
            >
              <span>SCROLL TO EXPLORE</span>
              <div className="scroll-line">
                <motion.i
                  animate={reduceMotion ? {} : { y: [0, 13, 0] }}
                  transition={{
                    duration: reduceMotion ? 0 : 1.5,
                    repeat: reduceMotion ? 0 : Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <span className="hero-meta-right">
                DESIGNING / BUILDING / LEARNING
              </span>
            </motion.div>
          </div>

          <motion.div
            className="hero-orbit"
            aria-hidden="true"
            initial={
              reduceMotion ? false : { opacity: 0, scale: 0.82, rotate: -12 }
            }
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 1.2,
              delay: reduceMotion ? 0 : 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="orbit-ring orbit-ring-one" />
            <div className="orbit-ring orbit-ring-two" />
            <div className="orbit-ring orbit-ring-three" />

            <motion.div
              className="orbit-core"
              animate={reduceMotion ? {} : { rotate: 360 }}
              transition={{
                duration: reduceMotion ? 0 : 36,
                repeat: reduceMotion ? 0 : Infinity,
                ease: "linear",
              }}
            >
              <div className="core-inner">
                <Braces size={44} strokeWidth={1.2} />
                <span>BUILD / LEARN / REPEAT</span>
              </div>
            </motion.div>

            <motion.div
              className="orbit-chip chip-code"
              animate={reduceMotion ? {} : { y: [0, -9, 0] }}
              transition={{
                duration: reduceMotion ? 0 : 4,
                repeat: reduceMotion ? 0 : Infinity,
                ease: "easeInOut",
              }}
            >
              <Code2 size={17} /> C# / .NET
            </motion.div>

            <motion.div
              className="orbit-chip chip-cloud"
              animate={reduceMotion ? {} : { y: [0, 8, 0] }}
              transition={{
                duration: reduceMotion ? 0 : 5,
                repeat: reduceMotion ? 0 : Infinity,
                ease: "easeInOut",
              }}
            >
              <Zap size={16} /> CLOUD-READY
            </motion.div>

            <div className="orbit-cross cross-one">+</div>
            <div className="orbit-cross cross-two">+</div>
          </motion.div>

          <div className="hero-index" aria-hidden="true">
            PORTFOLIO / 2026
          </div>
        </section>

        {/* Moving skills banner */}
        <section className="marquee-band" aria-label="Areas of focus">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div
                className="marquee-content"
                key={copy}
                aria-hidden={copy === 1}
              >
                <span>FULL-STACK DEVELOPMENT</span>
                <i>✳</i>
                <span>THOUGHTFUL UI</span>
                <i>✳</i>
                <span>SCALABLE BACKENDS</span>
                <i>✳</i>
                <span>CLOUD & DEVOPS</span>
                <i>✳</i>
              </div>
            ))}
          </div>
        </section>

        {/* About Me comes first */}
        <section className="about-section" id="about">
          <div className="section-wrap section-space about-layout">
            <Reveal className="about-intro">
              <span className="section-kicker">01 / A LITTLE ABOUT ME</span>
              <h2>
                Good software is
                <br />
                built with <span className="serif-word">curiosity.</span>
              </h2>

              <div className="about-mark" aria-hidden="true">
                <span>AM</span>
                <i>✳</i>
              </div>
            </Reveal>

            <Reveal className="about-copy" delay={0.1}>
              <p className="about-lede">
                I'm a software developer at Wipro with a focus on full-stack
                development in the .NET ecosystem. I enjoy working across the
                stack — from understanding a problem and shaping the interface
                to building the API and data layer behind it.
              </p>

              <p>
                My core toolkit includes C#, ASP.NET Core Web API, React, and
                SQL. I value readable code, architecture with a clear purpose,
                and interfaces that remain usable across screen sizes.
              </p>

              <p>
                I'm continuing to grow in Azure, CI/CD practices, and software
                design, while building hands-on projects that strengthen my
                understanding of dependable application development.
              </p>

              <div className="about-facts">
                <div>
                  <span>ROLE</span>
                  <b>.NET Full-Stack Developer L2 · Wipro</b>
                </div>
                <div>
                  <span>CORE STACK</span>
                  <b>C# · .NET · React · SQL</b>
                </div>
                <div>
                  <span>CLOUD FOCUS</span>
                  <b>Microsoft Azure</b>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Projects / Work comes after About */}
        <section
          className="work-section section-wrap section-space"
          id="work"
        >
          <Reveal className="section-heading">
            <div>
              <span className="section-kicker">02 / SELECTED WORK</span>
              <h2>
                Proof in the <span className="serif-word">projects.</span>
              </h2>
            </div>

            <p>
              Selected work across full-stack product development,
              multi-tenant architecture, and data-backed interfaces.
            </p>
          </Reveal>

          <div className="project-list">
            {projects.map((project, index) => (
              <Reveal key={project.number} delay={index * 0.08}>
                <article className={`project-card project-${project.visual}`}>
                  <a
                    className="project-visual-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <ProjectArtwork variant={project.visual} />
                  </a>

                  <div className="project-details">
                    <div className="project-overline">
                      <span>
                        {project.number} / {project.category}
                      </span>
                      <span>{project.type}</span>
                    </div>

                    <div className="project-title-row">
                      <h3>{project.name}</h3>
                      <a
                        className="round-arrow"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.name} on GitHub`}
                      >
                        <ArrowUpRight size={20} />
                      </a>
                    </div>

                    <p>{project.description}</p>

                    <div className="tag-list">
                      {project.stack.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="all-projects">
            <a
              className="text-link"
              href="https://github.com/ak31morya"
              target="_blank"
              rel="noreferrer"
            >
              Explore GitHub <ExternalLink size={15} />
            </a>
          </Reveal>
        </section>

        <ExperienceSection />

        {/* Skills */}
        <section
          className="skills-section section-wrap section-space"
          id="skills"
        >
          <Reveal className="section-heading">
            <div>
              <span className="section-kicker">04 / MY TOOLKIT</span>
              <h2>
                Tools for the <span className="serif-word">job.</span>
              </h2>
            </div>

            <p>
              The tools I use to shape interfaces, build APIs, work with data,
              and ship software.
            </p>
          </Reveal>

          <div className="skills-grid">
            {skills.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.07}>
                <article className="skill-card">
                  <div className="skill-card-top">
                    <span>0{index + 1}</span>
                    {index === 0 ? (
                      <MonitorSmartphone />
                    ) : index === 1 ? (
                      <Server />
                    ) : index === 2 ? (
                      <Braces />
                    ) : (
                      <Sparkles />
                    )}
                  </div>

                  <h3>{group.title}</h3>

                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>
                        <Check size={14} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

        </section>

        <CertificationsSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home">
          AM<span className="wordmark-dot">.</span>
        </a>

        <span>DESIGNED & BUILT WITH CARE</span>

        <button
          className="back-top"
          onClick={() => scrollTo("home")}
        >
          BACK TO TOP <ArrowDown size={14} />
        </button>

        <span className="footer-year">© 2026 AASHISH MORYA</span>
      </footer>
    </div>
  );
}
