"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  Compass,
  GraduationCap,
  Handshake,
  Mail,
  Linkedin,
  MapPin,
  Menu,
  Moon,
  Sun,
  Users,
  X,
} from "lucide-react";

const email = "minhajulmredul88890@gmail.com";
const linkedinUrl = "https://www.linkedin.com/in/minhajulislam01";

const navItems = [
  ["About", "about"],
  ["Leadership", "leadership"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["Contact", "contact"],
];

const stats = [
  { value: "707", label: "Teams coordinated" },
  { value: "1,800+", label: "Event participants" },
  { value: "50+", label: "Judges engaged" },
  { value: "500+", label: "Students reached" },
];

const experiences = [
  {
    role: "President",
    organization: "AIBA Business Club",
    period: "2026 — 2027",
    type: "Leadership",
    current: true,
    points: [
      "Lead the club’s strategic direction, executive operations, and flagship campus initiatives.",
      "Coordinate students, faculty members, corporate professionals, partner organizations, and external stakeholders.",
      "Drive student engagement through professional development, business exposure, competitions, and industry interaction.",
    ],
  },
  {
    role: "Campus Ambassador",
    organization: "Deli",
    period: "Current",
    type: "Campus engagement",
    current: true,
    points: ["Represent the brand and support campus-level engagement initiatives."],
  },
  {
    role: "Campus Lead",
    organization: "LCB",
    period: "Current",
    type: "Campus leadership",
    current: true,
    points: ["Lead campus-level coordination and student engagement initiatives."],
  },
  {
    role: "Additional Communication Secretary (External)",
    organization: "AIBA Business Club",
    period: "2025 — 2026",
    type: "Corporate relations",
    points: [
      "Managed external communication for Showcase 1.0, coordinating with 50+ judges, 707 teams, and approximately 1,800+ participants.",
      "Led the MasterIO 2025 marketing campaign and secured the organization’s first university sponsorship from Modhuful.",
      "Coordinated recruitment activities, including case distribution, focus group discussions, viva sessions, and workshops.",
    ],
  },
  {
    role: "Head of Sponsorship",
    organization: "AIBA Career Club",
    period: "2025 — 2026",
    type: "Partnerships",
    points: [
      "Led sponsorship activities and supported partnership development for club initiatives.",
      "Authored the club constitution and helped define core teams and responsibilities.",
      "Delivered structured training to improve team understanding of departmental roles.",
    ],
  },
  {
    role: "Lead Campus Ambassador",
    organization: "LEAD Academy",
    period: "2024 — 2025",
    type: "Marketing & outreach",
    points: [
      "Directed campus promotional activities reaching 500+ students.",
      "Executed three targeted digital campaigns, contributing to a 25% increase in lead conversions.",
    ],
  },
  {
    role: "Content Writer",
    organization: "The Quoted",
    period: "2024 — 2025",
    type: "Content & communication",
    points: [
      "Authored 20+ SEO-focused articles and brand stories to support reader engagement and digital visibility.",
    ],
  },
  {
    role: "Campus Delegate",
    organization: "The Business Standard Graduates",
    period: "2024",
    type: "Student relations",
    points: [
      "Served as a liaison between the student community and the editorial team.",
    ],
  },
  {
    role: "Vice President — Human Resources",
    organization: "Notre Dame Business Club",
    period: "2021 — 2022",
    type: "People & operations",
    points: [
      "Recruited and coordinated 1,000+ members across four major flagship events.",
      "Introduced a peer mentorship framework to strengthen team retention and engagement.",
    ],
  },
  {
    role: "Vice President — Management",
    organization: "Ongikar",
    period: "2020 — 2021",
    type: "Community initiatives",
    points: [
      "Managed volunteer teams to execute five community awareness programs and social initiatives.",
    ],
  },
];

const initiatives = [
  {
    number: "01",
    eyebrow: "National-level business competition",
    title: "Showcase 1.0",
    description:
      "Coordinated external communication across a large-scale business case competition, working with judges, teams, and participants to support smooth execution.",
    metrics: ["707 teams", "1,800+ participants", "50+ judges"],
    icon: Users,
  },
  {
    number: "02",
    eyebrow: "Marketing & sponsorship",
    title: "MasterIO 2025",
    description:
      "Spearheaded the marketing campaign and helped secure the organization’s first university sponsorship from Modhuful through corporate outreach.",
    metrics: ["Campaign leadership", "First university sponsorship"],
    icon: Handshake,
  },
  {
    number: "03",
    eyebrow: "Industry exposure & student engagement",
    title: "Campus visits",
    description:
      "As President of AIBA Business Club, organized student visits to Earth Lab and Perfetti to create opportunities for learning beyond the classroom.",
    metrics: ["Earth Lab", "Perfetti"],
    icon: Building2,
  },
];

const skillGroups = [
  {
    title: "Leadership & Operations",
    skills: [
      "Team Leadership",
      "Event Planning",
      "Recruitment Coordination",
      "Sponsorship Acquisition",
      "Logistics",
      "Cross-functional Teams",
    ],
  },
  {
    title: "Marketing & Communication",
    skills: [
      "Digital Marketing",
      "Social Media Marketing",
      "Public Relations",
      "Content Writing",
      "Campaign Planning",
      "Brand Communication",
    ],
  },
  {
    title: "Partnerships & Engagement",
    skills: [
      "Campus Outreach",
      "Student Engagement",
      "Stakeholder Management",
      "Corporate Relations",
      "Networking",
      "External Coordination",
    ],
  },
  {
    title: "Tools",
    skills: ["Microsoft Word", "Microsoft Excel", "PowerPoint", "Basic Graphic Design"],
  },
];

const education = [
  {
    institution: "Army Institute of Business Administration",
    qualification: "Bachelor of Business Administration (BBA)",
    period: "2023 — Present",
    result: "Current CGPA: 3.15 / 4.00",
    location: "Sylhet, Bangladesh",
  },
  {
    institution: "Notre Dame College",
    qualification: "Higher Secondary Certificate (HSC)",
    period: "2020 — 2022",
    result: "GPA: 5.00 / 5.00",
    location: "Dhaka, Bangladesh",
  },
  {
    institution: "National Ideal School",
    qualification: "Secondary School Certificate (SSC)",
    period: "2020",
    result: "GPA: 4.61 / 5.00",
    location: "Dhaka, Bangladesh",
  },
];

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Minhajul Islam home">
          <span className="brand-mark">MI</span>
          <span className="brand-name">MINHAJUL ISLAM<span>PERSONAL PORTFOLIO</span></span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => setDark((value) => !value)}
            aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
            title={`Switch to ${dark ? "light" : "dark"} theme`}
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="header-contact" href={`mailto:${email}`}>Let&apos;s talk <ArrowUpRight size={15} /></a>
          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            aria-label="Mobile navigation"
          >
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={15} /></a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.65 }}>
            <div className="availability"><span /> BUSINESS UNDERGRADUATE · CAMPUS LEADER</div>
            <h1>Building connections.<br /><em>Creating opportunities.</em></h1>
            <p className="hero-description">
              I&apos;m <strong>Minhajul Islam</strong> — a business undergraduate and campus leader passionate about bringing people together, building meaningful partnerships, and creating experiences that move ideas forward.
            </p>
            <div className="hero-roles">
              <span>President, AIBA Business Club</span>
              <span>Deli Campus Ambassador</span>
              <span>LCB Campus Lead</span>
            </div>
            <div className="hero-actions">
              <a className="button-primary" href="#leadership">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button-secondary" href={`mailto:${email}`}>Get in touch <ArrowRight size={16} /></a>
            </div>
            <div className="hero-location"><MapPin size={15} /> Sylhet, Bangladesh <span className="location-divider" /> Open to meaningful connections</div>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="portrait-frame">
            <Image
              src="/images/minhajul-islam.jpg"
              alt="Portrait of Minhajul Islam wearing a navy suit"
              fill
              priority
              sizes="(max-width: 800px) 86vw, 42vw"
              className="portrait-image"
            />
            <div className="portrait-shade" />
            <div className="portrait-caption"><span>01 / THE PERSON</span><strong>Curiosity. Connection. Leadership.</strong></div>
          </div>
          <div className="floating-note note-top"><span className="note-icon"><Award size={17} /></span><span><strong>Champion</strong><small>Mind Sparks · 2024</small></span></div>
          <div className="floating-note note-bottom"><span className="note-number">01</span><span><strong>People-first leadership</strong><small>Turning campus ideas into action</small></span></div>
          <div className="visual-orbit" />
        </motion.div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
      </section>

      <section className="stats-band" aria-label="Experience highlights">
        <div className="stats-inner">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell section-pad about-section" id="about">
        <div className="about-aside">
          <span className="vertical-label">A LITTLE ABOUT ME</span>
          <div className="about-index">01<span>/</span>06</div>
        </div>
        <div className="about-content">
          <SectionHeading
            eyebrow="ABOUT ME"
            title="People, purpose & possibilities."
            text="I enjoy working at the intersection of business, communication, and community."
          />
          <div className="about-grid">
            <div className="about-lead">
              <p className="large-copy">I believe the best opportunities begin with a conversation — and the best outcomes come from people working together.</p>
              <p>From leading student organizations and coordinating large-scale competitions to building corporate relationships and running campus campaigns, I enjoy turning plans into well-executed experiences.</p>
            </div>
            <div className="about-details">
              <div className="detail-row"><span>Currently</span><strong>BBA student at Army Institute of Business Administration</strong></div>
              <div className="detail-row"><span>Focus</span><strong>Leadership · Marketing · Corporate Relations</strong></div>
              <div className="detail-row"><span>Based in</span><strong>Sylhet, Bangladesh</strong></div>
              <div className="detail-row"><span>Languages</span><strong>Bengali (Native) · English (Proficient)</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-pad leadership-section" id="leadership">
        <SectionHeading
          eyebrow="LEADERSHIP IN ACTION"
          title="Beyond the title. Into the work."
          text="A selection of initiatives where I brought people, organizations, and ideas together."
        />
        <div className="initiative-grid">
          {initiatives.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                className="initiative-card"
                key={item.number}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="initiative-top"><span>{item.number} / INITIATIVE</span><Icon size={21} strokeWidth={1.6} /></div>
                <span className="initiative-eyebrow">{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="initiative-tags">{item.metrics.map((metric) => <span key={metric}>{metric}</span>)}</div>
                <div className="card-arrow"><ArrowDownRight size={18} /></div>
              </motion.article>
            );
          })}
        </div>
        <div className="leadership-note">
          <div className="leadership-note-icon"><Compass size={22} /></div>
          <div><strong>My approach to leadership</strong><p>Make people feel included, give teams clarity, build relationships with intention, and turn shared goals into action.</p></div>
        </div>
      </section>

      <section className="section-shell section-pad experience-section" id="experience">
        <SectionHeading
          eyebrow="EXPERIENCE"
          title="A journey shaped by people."
          text="Roles and responsibilities that have helped me grow as a communicator, organizer, and team leader."
        />
        <div className="experience-layout">
          <div className="experience-intro">
            <span className="experience-kicker"><BriefcaseBusiness size={16} /> EXPERIENCE TIMELINE</span>
            <p>Each role has taught me something different about ownership, collaboration, and execution.</p>
            <a href={`mailto:${email}`} className="text-link">Connect with me <ArrowUpRight size={16} /></a>
          </div>
          <div className="timeline">
            {experiences.map((item) => (
              <article className="timeline-item" key={`${item.organization}-${item.role}`}>
                <div className="timeline-marker"><span /></div>
                <div className="timeline-card">
                  <div className="timeline-meta"><span>{item.type}</span><span>{item.period}</span></div>
                  <div className="timeline-title-row"><h3>{item.role}</h3>{item.current ? <span className="current-pill"><i /> Current</span> : null}</div>
                  <h4>{item.organization}</h4>
                  <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-band section-shell">
        <div className="skills-heading"><span className="eyebrow"><span className="eyebrow-dot" /> WHAT I BRING</span><h2>Skills that turn<br /><em>ideas into impact.</em></h2></div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div className="skill-group" key={group.title}>
              <span className="skill-index">0{index + 1}</span>
              <h3>{group.title}</h3>
              <div className="skill-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell section-pad education-section" id="education">
        <div className="education-heading">
          <SectionHeading eyebrow="EDUCATION" title="Learning is a journey." text="My academic foundation and the experiences that continue to shape my perspective." />
          <div className="education-icon"><GraduationCap size={36} strokeWidth={1.2} /></div>
        </div>
        <div className="education-list">
          {education.map((item, index) => (
            <article className="education-card" key={item.institution}>
              <span className="education-number">0{index + 1}</span>
              <div className="education-main"><h3>{item.institution}</h3><p>{item.qualification}</p><span><MapPin size={13} /> {item.location}</span></div>
              <div className="education-result"><strong>{item.result}</strong><span>{item.period}</span></div>
            </article>
          ))}
        </div>
        <div className="achievement-strip"><Award size={21} /><div><span>HIGHLIGHT</span><strong>Champion — Mind Sparks Case Competition, 2024</strong></div><ArrowUpRight size={18} /></div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner section-shell">
          <div className="contact-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> LET&apos;S CONNECT</span>
            <h2>Have an idea?<br /><em>Let&apos;s make it happen.</em></h2>
            <p>I&apos;m always interested in meaningful conversations, collaborations, campus initiatives, and opportunities to learn and contribute.</p>
            <a className="contact-email" href={`mailto:${email}`}><Mail size={18} /> {email} <ArrowUpRight size={17} /></a>
            <a className="contact-linkedin" href={linkedinUrl} target="_blank" rel="noreferrer"><Linkedin size={17} /> View my LinkedIn profile <ArrowUpRight size={16} /></a>
          </div>
          <div className="contact-side"><span className="contact-stamp">MI</span><span className="contact-side-label">MINHAJUL ISLAM<br />SYLHET, BANGLADESH</span><span className="contact-side-year">2026 — 2027</span></div>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <a className="footer-brand" href="#home">MINHAJUL ISLAM<span>PERSONAL PORTFOLIO</span></a>
        <span>Designed with purpose. © {new Date().getFullYear()} Minhajul Islam.</span>
        <div className="footer-actions"><a className="footer-linkedin" href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="Minhajul Islam on LinkedIn"><Linkedin size={16} /> LinkedIn</a><a className="back-top" href="#home">Back to top <ChevronDown size={15} /></a></div>
      </footer>
    </main>
  );
}
