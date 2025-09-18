import React, { useState, useEffect, useRef } from "react";
import { FaJava,FaPython } from "react-icons/fa6";
import { SiDotnet } from "react-icons/si";
import { GiSpiderWeb } from "react-icons/gi";
// --- SVG ICONS (Styled for the new theme) ---
const HomeIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

const ProjectIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const ContactIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
  </svg>
);

const SparkleIcon = ({ className, color = "#ffd700" }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50 0L61.226 38.774L100 50L61.226 61.226L50 100L38.774 61.226L0 50L38.774 38.774L50 0Z"
      fill={color}
    />
  </svg>
);

// --- TECHNOLOGY LOGOS ---
const HtmlIcon = ({ className, color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill={color}>
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-13.214-.003.627 7.002h11.25l-.248 2.796-3.203.873-3.202-.875-.207-2.32h-2.608l.381 4.126 5.631 1.513 5.631-1.513.72-8.156h-12.288z" />
  </svg>
);
const CssIcon = ({ className, color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill={color}>
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.438 4.438l-9.922.001-.233-2.623h12.91l-.23 2.622h-2.525zM12 10.75h2.234l.19-2.125H9.624l-.206-2.25h7.33l-.23 2.625H12v2.125h4.438l-.332 3.525-2.106.562-2.106-.562-.125-1.406h-2.25l.302 3.197L12 17.438l4.02-1.075.388-4.125h-4.638v-1.5z" />
  </svg>
);
const JsIcon = ({ className, color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill={color}>
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.584 4.052h-12.72l.256 2.887h11.912l-.256 2.887h-11.912l.256 2.887h11.912l-.348 3.523-4.106 1.09-4.106-1.09-.256-2.887h-2.887l.46 4.885L12 19.488l6.336-1.68.896-10.032h-6.148z" />
  </svg>
);
const ReactIcon = ({ className, color = "currentColor" }) => (
  <svg
    className={className}
    viewBox="-11.5 -10.23174 23 20.46348"
    fill="currentColor"
  >
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);





const SpringBootIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-4-8c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4-4-1.794-4-4z" />
  </svg>
);
const MySqlIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-3-12h6v2h-6v-2zm0 4h6v2h-6v-2zm0 4h6v2h-6v-2z" />
  </svg>
);
const PostgreSqlIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-3-12h6v2h-6v-2zm0 4h6v2h-6v-2zm0 4h6v2h-6v-2z" />
  </svg>
);
const GitIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-3-8c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm-2-5h10v2h-10v-2zm-2 10h14v2h-14v-2z" />
  </svg>
);

// --- NAVIGATION ---
const BottomNav = ({ activeSection }) => {
  const navItems = [
    { id: "home", name: "Home", icon: HomeIcon },
    { id: "projects", name: "Projects", icon: ProjectIcon },
    { id: "contact", name: "Contact", icon: ContactIcon },
  ];

  const handleNavClick = (sectionId) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-black/50 backdrop-blur-sm border-t-4 border-lime-400 flex justify-center z-50">
      <div className="flex justify-around items-center w-full max-w-md">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex flex-col items-center justify-center w-24 h-full text-sm font-black uppercase tracking-wider transition-all duration-300 ${
                isActive
                  ? "text-lime-300 drop-shadow-[0_0_8px_#a3e635]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Icon className="h-7 w-7 mb-1" />
              <span>{item.name}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

// --- MAIN APP COMPONENT ---

function App() {
  const skillStacks = [
  { name: 'Java', technologies: ['Servlet', 'Spring Boot', 'Hibernate'], icon: FaJava, color: '#007396' },
  
  { name: '.NET Framework', technologies: ['C#',"ASP"], icon:  SiDotnet, color: '#007396' },
    {
      name: "MERN Stack",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      icon: GiSpiderWeb,
      color: "#61DAFB",
    },
    { name: 'Python', technologies: ['Flask', 'Django'], icon: FaPython, color: '#007396' },
  ];


  const achievements = [
    {
      title: "Global Hackathon Winner 2024",
      desc: "Led a team to victory by developing a decentralized AI-driven logistics platform.",
    },
    {
      title: "Top 0.1% Contributor on GitHub",
      desc: "Recognized for significant contributions to several major open-source projects.",
    },
    {
      title: "Keynote Speaker at DevCon",
      desc: "Invited to speak on the future of polyglot programming and microservices architecture.",
    },
  ];
  const qualifications = [
    {
      title: "Master of Computer Science",
      school: "Stanford University",
      year: "2022",
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      org: "The Linux Foundation",
      year: "2023",
    },
    {
      title: "AWS Certified Solutions Architect - Professional",
      org: "Amazon Web Services",
      year: "2023",
    },
  ];
  const projects = [
    {
      title: "QuantumLeap AI",
      desc: "A framework for building quantum machine learning models.",
      tech: ["Python", "Qiskit", "PyTorch", "Rust"],
    },
    {
      title: "NexusDB",
      desc: "A high-performance, distributed graph database built from scratch.",
      tech: ["Go", "Raft", "gRPC", "Docker"],
    },
    {
      title: "Project Chimera",
      desc: "A real-time collaborative code editor with built-in multi-language interpreters.",
      tech: ["TypeScript", "React", "WebSockets", "Kubernetes"],
    },
    {
      title: "Helios Visualizer",
      desc: "3D data visualization tool for astronomical data sets, running entirely in the browser.",
      tech: ["JavaScript", "Three.js", "WebAssembly"],
    },
  ];

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div
      className="bg-gradient-to-br from-fuchsia-600 via-blue-800 to-green-500 text-white min-h-screen font-sans relative overflow-x-hidden"
      style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}
    >
      {/* Decorative Elements */}
      <SparkleIcon className="absolute top-[10%] left-[5%] w-16 h-16 opacity-80 animate-pulse" />
      <SparkleIcon
        className="absolute top-[20%] right-[10%] w-8 h-8 opacity-80 animate-pulse animation-delay-300"
        color="#39ff14"
      />
      <SparkleIcon
        className="absolute top-[50%] left-[15%] w-12 h-12 opacity-80 animate-pulse animation-delay-500"
        color="#ff00ff"
      />
      <SparkleIcon className="absolute bottom-[20%] right-[5%] w-20 h-20 opacity-80 animate-pulse animation-delay-700" />
      <SparkleIcon
        className="absolute bottom-[5%] left-[10%] w-10 h-10 opacity-80 animate-pulse animation-delay-200"
        color="#0ff"
      />

      <main className="pb-24">
        {/* --- HOME SECTION --- */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center p-6 md:p-12 animate-fade-in relative z-10"
        >
          <div className="text-center mb-16">
            <h1
              className="text-6xl md:text-9xl font-black uppercase"
              style={{
                WebkitTextStroke: "3px #171717",
                color: "transparent",
                textShadow: "6px 6px 0px #39ff14",
              }}
            >
              PhenomenaL
            </h1>
            <p className="text-xl md:text-2xl text-yellow-300 mt-2 font-bold tracking-widest drop-shadow-[0_2px_2px_#000]">
              The Polyglot Developer
            </p>
          </div>

          <div className="mb-12 bg-black/30 backdrop-blur-sm p-6 rounded-2xl border-4 border-yellow-300 shadow-lg">
            <h2
              className="text-4xl font-black mb-4 text-center text-yellow-300"
              style={{ textShadow: "3px 3px 0px #000" }}
            >
              About Me
            </h2>
            <p className="text-slate-200 leading-relaxed max-w-4xl mx-auto text-center font-semibold">
              A results-driven developer with a passion for solving complex
              problems using a vast arsenal of programming languages and
              technologies. My philosophy is to choose the right tool for the
              job, never being limited by a single stack.
            </p>
          </div>

       
          <div className="mb-12">
            <h3 className="text-3xl font-black mb-12 text-center text-lime-300 drop-shadow-[0_0_8px_#a3e635]">
              Top Skills !!!
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {skillStacks.map(({ name, technologies, icon: Icon, color }) => (
                <div
                  key={name}
                  className="bg-black/30 backdrop-blur-md border-4 border-yellow-300 rounded-2xl p-6 shadow-lg hover:shadow-yellow-400/30 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <Icon className="h-12 w-12 mr-4" color={color} />
                    <h4 className="text-3xl font-black text-yellow-300">
                      {name}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-yellow-400/10 text-yellow-300 text-sm font-bold px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section
          id="projects"
          className="min-h-screen flex flex-col justify-center p-6 md:p-12 animate-fade-in relative z-10"
        >
          <h2
            className="text-6xl font-black text-center text-lime-300 mb-12"
            style={{ textShadow: "4px 4px 0px #000" }}
          >
            My Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((p) => (
              <div
                key={p.title}
                className="bg-black/30 backdrop-blur-md border-4 border-lime-400 rounded-2xl overflow-hidden shadow-2xl shadow-lime-500/20 hover:shadow-lime-500/40 hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <div className="p-6 flex-grow">
                  <h3 className="text-3xl font-black text-yellow-300 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-slate-200 mb-4 font-semibold">{p.desc}</p>
                </div>
                <div className="p-6 bg-black/20">
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-yellow-400/10 text-yellow-300 text-sm font-bold px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section
          id="contact"
          className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 animate-fade-in relative z-10"
        >
          <div className="w-full max-w-xl text-center bg-black/40 backdrop-blur-lg p-8 rounded-3xl border-4 border-yellow-300 shadow-2xl shadow-yellow-400/20">
            <h2
              className="text-6xl font-black text-yellow-300 mb-4"
              style={{ textShadow: "4px 4px 0px #000" }}
            >
              Let's Connect
            </h2>
            <p className="text-slate-200 mb-8 font-semibold">
              Have a project in mind, an interesting opportunity, or just want
              to talk tech? My inbox is always open.
            </p>

            <a
              href="mailto:phenomenal.dev@email.com"
              className="inline-block bg-gradient-to-r from-lime-400 to-green-600 text-black font-black uppercase tracking-wider py-4 px-10 rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(163,230,53,0.6)] border-2 border-black"
            >
              Say Hello!!!
            </a>

            <div className="mt-12 flex justify-center space-x-8">
              <a
                href="https://github.com/Phenomenals619"
                className="text-slate-200 hover:text-yellow-300 hover:scale-110 transition-all duration-300"
              >
                <GithubIcon />
              </a>
              <a
                href="mailto:thephenomenals619@gmail.com"
                className="text-slate-200 hover:text-yellow-300 hover:scale-110 transition-all duration-300"
              >
                <EmailIcon />
              </a>
            </div>
          </div>
        </section>
      </main>
      <BottomNav activeSection={activeSection} />
    </div>
  );
}

export default App;
