import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Download,
  MapPin,
  Calendar,
  ChevronRight
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Technical Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Work Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const skills = {
    "Data Platforms": ["Snowflake (Tasks, Streams, Snowpipe, Time Travel, Zero-Copy Cloning, Procedures, UDFs)", "Oracle 10g–21c"],
    "Languages": ["SQL", "PL/SQL", "Python"],
    "Cloud & DevOps": ["AWS (S3)", "SnowSQL", "Git", "CI/CD"],
    "Analytics & AI": ["Snowflake Cortex AI", "Search", "NL2SQL", "Tableau"],
    "Methodologies": ["ELT-first architecture", "Agile / SCRUM", "Data Governance & Security"]
  };

  const experiences = [
    {
      company: "RedIron Technologies",
      role: "Technical Architect",
      period: "Oct 2019 – Present",
      description: "Leading transformation of retail applications from Oracle Forms to Oracle Apex. Spearheading Snowflake architecture design and data platform modernization.",
      highlights: [
        "Snowflake architecture & data platform modernization",
        "Oracle Forms → Oracle APEX modernization",
        "AI-driven analytics enablement"
      ]
    },
    {
      company: "Salesforce India Pvt Ltd",
      role: "Solution Architect (SMTS)",
      period: "Jan 2017 – Oct 2019",
      description: "Enriched skill set with Salesforce technical stack, focusing on B2B Commerce and CRM Analytics.",
      highlights: [
        "Accredited B2B Commerce Administrator",
        "Visualizing large volumes of multi-tenant data using CRM Analytics (Tableau CRM)"
      ]
    },
    {
      company: "Tomax India Pvt Ltd",
      role: "Team Lead",
      period: "Apr 2011 – Dec 2016",
      description: "Managed a team of developers in high-volume OLTP/OLAP environments using Agile SCRUM.",
      highlights: [
        "Led development of RI Commerce (MMSO) product",
        "Expertise in Oracle 19c, SQL, PL/SQL performance tuning"
      ]
    },
    {
      company: "Aris Global India Pvt Ltd",
      role: "Senior Consultant",
      period: "Oct 2009 – Mar 2011",
      description: "Focused on Data Migration and product customization for Pharmacovigilance systems.",
      highlights: [
        "Migrated data from legacy systems to ARISg",
        "Customized systems to suit specific customer requirements"
      ]
    },
    {
      company: "Tomax India Pvt Ltd",
      role: "Module Leader",
      period: "May 2005 – Oct 2009",
      description: "Responsible for module delivery and technical leadership in Oracle-based retail solutions.",
      highlights: []
    },
    {
      company: "Oracle India Pvt Ltd",
      role: "Member Technical Staff",
      period: "Oct 2003 – Apr 2005",
      description: "Key technical member responsible for periodic releases of Oracle Forms (D2K) tool.",
      highlights: []
    }
  ];

  const projects = [
    {
      title: "Oracle → Snowflake Enterprise Migration",
      subtitle: "Retail Analytics Platform",
      role: "Snowflake Data Engineer / Architect",
      tech: ["Oracle", "Snowflake", "AWS S3", "SQL", "PL/SQL", "Python"],
      problem: "Legacy Oracle-based analytics platform faced scalability and performance bottlenecks during peak retail seasons.",
      solution: [
        "Designed Snowflake multi-schema architecture optimized for analytics",
        "Migrated historical and incremental data using AWS S3 stages",
        "Implemented Snowpipe + Streams + Tasks for near real-time ingestion",
        "Converted complex PL/SQL logic into Snowflake-native SQL"
      ],
      impact: "3x query performance improvement, elastic scaling during holiday peaks, reduced operational overhead."
    },
    {
      title: "NL2SQL using Snowflake Cortex AI",
      subtitle: "AI-Driven Data Retrieval",
      role: "Snowflake Cortex AI Developer",
      tech: ["Snowflake Cortex AI", "Search", "Tableau", "Python"],
      problem: "Non-technical users struggled to query complex databases without SQL knowledge.",
      solution: [
        "Built AI agents using Cortex AI Analyst & Search",
        "Designed NL → SQL → Result pipeline",
        "Exposed capabilities via SQL and REST interfaces"
      ],
      impact: "95% query translation accuracy, 30% productivity improvement for analytics teams."
    },
    {
      title: "Continuous Data Ingestion & CDC Framework",
      subtitle: "Real-time Data Pipeline",
      role: "Snowflake Developer",
      tech: ["Snowflake", "Streams", "Tasks", "Time Travel"],
      problem: "Need for a robust framework to handle incremental data loads with auditing capabilities.",
      solution: [
        "Designed CDC pipelines using Streams and Tasks",
        "Implemented zero-copy cloning for safe testing and UAT",
        "Leveraged Time Travel and Fail-Safe for recovery"
      ],
      impact: "Automated routine data retrieval tasks, ensuring data integrity and auditability."
    },
    {
      title: "RI Commerce (MMSO)",
      subtitle: "Retail Management Solution",
      role: "Techno-Functional Resource",
      tech: ["Oracle 19c", "SQL", "PL/SQL", "Oracle Forms", "Jasper Report", "GIT"],
      problem: "Need for a robust retail commerce platform handling complex business logic and large-scale data operations.",
      solution: [
        "Interacted with clients to gather functional specifications and prepare technical designs",
        "Led technical support for team members in developing complex database objects",
        "Performed Data Modeling using normalizing techniques and created optimized schema objects",
        "Developed complex stored procedures, functions, packages, and triggers using SQL and PL/SQL",
        "Implemented materialized views for data replication and partitioned large tables for performance",
        "Applied advanced performance tuning using Explain Plans, Hints, and Indexes"
      ],
      impact: "Delivered a scalable retail solution with optimized data processing and high-performance database operations."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 relative overflow-x-hidden">
      {/* Background Blobs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-emerald-100/40 rounded-full blur-[100px]"></div>
        <div className="absolute top-[30%] right-[10%] w-[25%] h-[25%] bg-violet-100/30 rounded-full blur-[80px]"></div>
      </div>

      {/* Header / Nav */}
      <header className="max-w-4xl mx-auto px-6 pt-12 relative z-10">
        <h1 className="text-2xl font-bold mb-6">
          <a href="/" className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            Techno Functional Architect and Snowflake Data Engineer
          </a>
        </h1>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-slate-500 mb-12 border-b border-slate-200 pb-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="hover:text-indigo-600 transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-[25px] left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pb-24 relative z-10">
        {/* Hero */}
        <section id="home" className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl sm:text-6xl font-extrabold mb-8 tracking-tight leading-[1.1] text-slate-900">
              Girish Rangaiah
            </h2>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
              >
                <Download size={18} /> Download Resume
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 border border-indigo-100 rounded-full text-sm font-bold hover:bg-indigo-50 transition-all shadow-sm"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </section>

        {/* About Me */}
        <section id="about" className="mb-24 scroll-mt-24">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-sm">01</span>
            About Me
          </h3>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 leading-relaxed text-slate-700 text-lg">
            <p>
              I am a Techno Functional Architect with 20+ years of experience in design, development and modernizing enterprise retail product built on Oracle related technologies(SQL, PL/SQL, Oracle Forms, Apex). My current expertise lies in migrating large scale Oracle databases to Snowflake, Data modelling, Normalization, designing cloud native ELT pipelines on AWS, and enabling analytics and AI driven decision making.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm font-bold">
            <a href="mailto:girishrangaiah@gmail.com" className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
              <Mail size={16} className="text-indigo-500" /> girishrangaiah@gmail.com
            </a>
            <a href="tel:+919886480095" className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
              <Phone size={16} className="text-indigo-500" /> +91-9886480095
            </a>
            <a href="https://linkedin.com/in/girish-rangaiah-6bb33719/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
              <Linkedin size={16} className="text-indigo-500" /> LinkedIn
            </a>
          </div>
        </section>

        {/* Technical Skills */}
        <section id="skills" className="mb-24 scroll-mt-24">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white text-sm">02</span>
            Technical Skills
          </h3>
          <div className="grid sm:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], i) => (
              <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:border-indigo-100 transition-colors">
                <h4 className="text-xs font-black text-indigo-600 uppercase tracking-[0.2em] mb-4">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, j) => (
                    <span key={j} className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-bold rounded-lg border border-slate-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-24 scroll-mt-24">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white text-sm">03</span>
            Projects
          </h3>
          <div className="space-y-10">
            {projects.map((project, i) => (
              <motion.div 
                key={i} 
                whileHover={{ x: 10 }}
                className="group relative pl-6 border-l-2 border-slate-200 hover:border-indigo-500 transition-colors"
              >
                <div className="flex flex-wrap justify-between items-baseline mb-2 gap-2">
                  <h4 className="text-xl font-bold text-slate-900">{project.title}</h4>
                  <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest bg-indigo-50 px-2 py-1 rounded">{project.subtitle}</span>
                </div>
                <p className="text-sm font-bold text-slate-400 mb-4 italic">Role: {project.role}</p>
                <p className="text-slate-600 mb-6 leading-relaxed">{project.problem}</p>
                <ul className="space-y-3 mb-6">
                  {project.solution.map((item, j) => (
                    <li key={j} className="text-sm text-slate-600 flex items-start gap-3">
                      <ChevronRight size={16} className="mt-0.5 text-indigo-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, j) => (
                    <span key={j} className="px-2 py-1 bg-white text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="mb-24 scroll-mt-24">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white text-sm">04</span>
            Work Experience
          </h3>
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 group-hover:bg-indigo-100 transition-colors"></div>
                <div className="relative z-10">
                  <div className="flex flex-wrap justify-between items-baseline mb-2 gap-2">
                    <h4 className="text-xl font-bold text-slate-900">{exp.company}</h4>
                    <span className="text-sm font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{exp.period}</span>
                  </div>
                  <div className="text-md font-bold text-slate-700 mb-4">{exp.role}</div>
                  <p className="text-slate-600 mb-6 leading-relaxed">{exp.description}</p>
                  {exp.highlights.length > 0 && (
                    <ul className="space-y-3">
                      {exp.highlights.map((item, j) => (
                        <li key={j} className="text-sm text-slate-600 flex items-start gap-3">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24">
          <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-[2.5rem] p-12 text-white shadow-2xl shadow-indigo-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
              <p className="text-indigo-100 text-lg mb-10 leading-relaxed max-w-xl">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                <a href="mailto:girishrangaiah@gmail.com" className="px-8 py-4 bg-white text-indigo-600 rounded-full font-black hover:bg-indigo-50 transition-all shadow-lg">
                  Say Hello
                </a>
                <div className="flex items-center gap-4">
                  <a href="https://linkedin.com/in/girish-rangaiah-6bb33719/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-12 text-center">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          © {new Date().getFullYear()} Girish Rangaiah • Built with Passion
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
