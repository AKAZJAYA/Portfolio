import React, { useEffect, useState } from 'react';
import profileImage from './profile.jpeg';
import logo from './logo1.png'
import AOS from "aos";
// import { FaDownload } from 'react-icons/fa';
import "aos/dist/aos.css";

// Simple SVG Icons
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" x2="12" y1="15" y2="3"/>
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 3h-4v4h4V3z"/>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4v10h-4V12H10V8h4V6c0-2.21 1.79-4 4-4h2v4h-2c-1.1 0-2 .9-2 2v2h4l-1 4z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0z"/>
    <path d="M20.5 5.5h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2z"/>
  </svg>
);

// Add this new component above PersonalPortfolio
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="w-16 h-16 border-4 border-t-4 border-blue-600 border-solid rounded-full animate-spin"></div>
  </div>
);

const PersonalPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Add this at the beginning of the component
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.title = 'Akash Jayasinghe | Portfolio';

    AOS.init({
      duration: 1000,
    });
  }, []);

  // You can add a loading state if needed
  // const [isLoading, setIsLoading] = useState(true);
  
  // If you want to use the spinner conditionally:
  // if (isLoading) return <LoadingSpinner />;

  // Replace these with your personal information
  const personalInfo = {
    name: 'Akash Jayasinghe',
    title: 'Full Stack Developer',
    about: `I’m Akash Jayasinghe, a full-stack developer and Software Engineering student at SLIIT University. With a strong passion for building dynamic web applications, I specialize in front-end technologies like React and back-end frameworks such as Node.js. My focus is on creating seamless, user-friendly experiences while constantly learning and staying updated with new technologies. I believe in the power of collaboration and problem-solving, and outside of coding, I have an interest in astrology, which helps me connect with others and approach challenges with a unique perspective.`,
    skills: [
      'React', 
      'Node.js', 
      'JavaScript', 
      'TypeScript', 
      'MongoDB', 
      'Express', 
      'Tailwind CSS', 
      'Git',
      'RESTful APIs',
      'AWS'
    ],
    contact: {
      github: 'https://github.com/akazjaya',
      linkedin: 'https://www.linkedin.com/in/akash-jayasinghe/',
      email: 'savindu096@gmail.com',
      facebook: 'https://www.facebook.com/akazjaya.15',
      instagram: 'https://www.instagram.com/akazjaya.15/'
    },
    projects: [
      {
        title: 'Portfolio Website',
        description: 'A modern, responsive portfolio built with React and Tailwind CSS, featuring smooth animations and a clean design.',
        technologies: ['React', 'Tailwind', 'JavaScript'],
        link: 'https://github.com/yourusername/portfolio'
      },
      {
        title: 'Customer Management App',
        description: 'Android application for managing customer relationships, built with Flutter for cross-platform compatibility. Features offline data sync, customer tracking, and analytics dashboard. Integrated with Firebase for real-time updates.',
        technologies: ['Flutter', 'Android', 'Firebase'],
        link: '#'
      },
      {
        title: 'E-Commerce Platform',
        description: 'A complete e-commerce solution with product management, shopping cart, and secure payment integration.',
        technologies: ['React', 'Node', 'MongoDB', 'Express'],
        link: '#'
      },
      {
        title: 'Task Management System',
        description: 'Android task management app with team collaboration features, push notifications, and cloud sync. Built with Kotlin for modern Android development.',
        technologies: ['Android', 'Kotlin', 'Firebase'],
        link: '#'
      },
      {
        title: 'Weather Dashboard',
        description: 'Real-time weather application with location-based forecasts, interactive maps, and weather alerts.',
        technologies: ['React', 'JavaScript', 'Node', 'Express'],
        link: '#'
      }
    ],
  };

  // First, add this object at the top of your component for the tech icons
  const techIcons = {
    React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    Node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    Tailwind: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    Android: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
    Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    Kotlin: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    Flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  };

  return (
    
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <img src={logo} alt="logo" className="w-12 h-10 md:w-16 md:h-13 rounded-full" />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="flex items-center hover:text-blue-600 text-gray-700">
                <HomeIcon className="mr-2" /> Home
              </a>
              <a href="#about" className="flex items-center hover:text-blue-600 text-gray-700">
                <UserIcon className="mr-2" /> About
              </a>
              <a href="#projects" className="flex items-center hover:text-blue-600 text-gray-700">
                <BriefcaseIcon className="mr-2" /> Projects
              </a>
              <a href="#contact" className="flex items-center hover:text-blue-600 text-gray-700">
                <MailIcon className="mr-2" /> Contact
              </a>
              <a 
                href="https://mysliit-my.sharepoint.com/:b:/g/personal/it22228062_my_sliit_lk/ETVBCu-61P1KtMQj6vn-hg0BEbdcY2GcBBDRfQ3lh_w75Q?e=XQ8ioK" 
                download="AkashJayasignhe.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-teal-500 text-blue-400"
              >
                <DownloadIcon className="mr-2" /> Download CV
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile menu */}
            <div 
              className={`
                absolute top-full left-0 w-full bg-white shadow-md md:hidden
                transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
              `}
            >
              <div className="flex flex-col p-4">
                {[
                  { href: "#home", icon: <HomeIcon />, text: "Home" },
                  { href: "#about", icon: <UserIcon />, text: "About" },
                  { href: "#projects", icon: <BriefcaseIcon />, text: "Projects" },
                  { href: "#contact", icon: <MailIcon />, text: "Contact" },
                  { 
                    href: "https://mysliit-my.sharepoint.com/:b:/g/personal/it22228062_my_sliit_lk/ETVBCu-61P1KtMQj6vn-hg0BEbdcY2GcBBDRfQ3lh_w75Q?e=XQ8ioK",
                    icon: <DownloadIcon />, 
                    text: "Download CV",
                    isExternal: true
                  }
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center px-4 py-3 hover:bg-gray-50 rounded-lg text-gray-700 hover:text-blue-600"
                    {...(item.isExternal ? {
                      target: "_blank",
                      rel: "noopener noreferrer"
                    } : {})}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="pt-24 md:pt-32 pb-16 text-center bg-gradient-to-r from-indigo-800 via-teal-500 to-teal-400 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow">{personalInfo.name}</h1>
          <h2 className="text-2xl md:text-3xl text-gray-100 mb-8">{personalInfo.title}</h2>
          <img 
            src={profileImage} 
            alt="Profile" 
            className="mx-auto rounded-full w-40 h-40 md:w-56 md:h-56 object-cover mb-8 shadow-lg border-4 border-white"
          />
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
            About <span className="text-teal-500">Me</span>
          </h2>
          
          <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                
                <div className="text-center">
                  <p className="text-xl text-gray-600 leading-relaxed mb-6">
                    {personalInfo.about}
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    {personalInfo.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center gap-6">
                <a 
                  href={personalInfo.contact.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
                >
                  View LinkedIn
                </a>
                <a 
                  href={personalInfo.contact.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {personalInfo.projects.map((project, index) => (
              <div 
                key={index} 
                className="project-card bg-gray-100 rounded-lg shadow-md hover:shadow-xl p-6 transition-all ease-in-out"
              >
                <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex gap-4 mb-4">
                  {project.technologies.map((tech, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center"
                    >
                      <img 
                        src={techIcons[tech]} 
                        alt={tech} 
                        className="w-6 h-6"
                        title={tech}
                      />
                    </div>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="text-teal-600 hover:text-teal-700 hover:underline"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 min-w-max md:min-w-0">
              {[
                { name: 'React', icon: techIcons.React },
                { name: 'JavaScript', icon: techIcons.JavaScript },
                { name: 'Node.js', icon: techIcons.Node },
                { name: 'MongoDB', icon: techIcons.MongoDB },
                { name: 'TypeScript', icon: techIcons.TypeScript },
                { name: 'HTML', icon: techIcons.HTML },
                { name: 'CSS', icon: techIcons.CSS },
                { name: 'Git', icon: techIcons.Git },
                { name: 'Firebase', icon: techIcons.Firebase },
                { name: 'Android', icon: techIcons.Android }
              ].map((skill, index) => (
                <div key={index} className="flex-shrink-0 w-48 md:w-auto text-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={skill.icon}
                    alt={`${skill.name} Logo`} 
                    className="mx-auto mb-4 w-16 h-16 md:w-20 md:h-20" 
                  />
                  <p className="text-xl font-medium text-teal-500">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile scroll indicator */}
          <div className="flex md:hidden justify-center mt-4">
            <div className="text-sm text-gray-500 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Scroll to see more
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 social-icons">
            <a 
              href={`mailto:${personalInfo.contact.email}`} 
              className="text-gray-700 hover:text-blue-600"
            >
              <MailIcon />
            </a>
            <a 
              href={personalInfo.contact.facebook}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-blue-600"
            >
              <FacebookIcon />
            </a>
            <a 
              href={personalInfo.contact.instagram}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-blue-600"
            >
              <InstagramIcon />
            </a>
            <a 
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600"
            >
              <GitHubIcon />
            </a>
            <a 
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="fixed bottom-4 right-4 p-4 bg-teal-400 text-white rounded-full shadow-md hover:bg-teal-600"
        >
          ↑
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-lg">Certified Web Developer | Passionate About Problem-Solving</p>
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.</p>
          <div className="flex justify-center mt-4 gap-6">
            <a 
              href={personalInfo.contact.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-teal-500"
            >
              <GitHubIcon />
            </a>
            <a 
              href={personalInfo.contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-teal-500"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PersonalPortfolio;