import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Globe, Server, Award, Calendar, GraduationCap, Briefcase, User, ChevronDown, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'certifications', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'Java', level: 90, icon: Code },
    { name: 'Spring Boot', level: 85, icon: Server },
    { name: 'MySQL', level: 80, icon: Database },
    { name: 'React.js', level: 75, icon: Globe },
    { name: 'RESTful APIs', level: 85, icon: Server },
    { name: 'Git', level: 80, icon: Code },
  ];

  const NavItem = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) => (
    <button
      onClick={() => scrollToSection(href)}
      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
        isActive
          ? 'bg-blue-600 text-white shadow-lg'
          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">Vishnu Reddy</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              <NavItem href="home" isActive={activeSection === 'home'}>Home</NavItem>
              <NavItem href="about" isActive={activeSection === 'about'}>About</NavItem>
              <NavItem href="skills" isActive={activeSection === 'skills'}>Skills</NavItem>
              <NavItem href="experience" isActive={activeSection === 'experience'}>Experience</NavItem>
              <NavItem href="education" isActive={activeSection === 'education'}>Education</NavItem>
              <NavItem href="certifications" isActive={activeSection === 'certifications'}>Certifications</NavItem>
              <NavItem href="projects" isActive={activeSection === 'projects'}>Projects</NavItem>
              <NavItem href="contact" isActive={activeSection === 'contact'}>Contact</NavItem>
            </div>

            {/* Mobile Navigation Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
              <div className="flex flex-col space-y-2 p-4">
                <NavItem href="home" isActive={activeSection === 'home'}>Home</NavItem>
                <NavItem href="about" isActive={activeSection === 'about'}>About</NavItem>
                <NavItem href="skills" isActive={activeSection === 'skills'}>Skills</NavItem>
                <NavItem href="experience" isActive={activeSection === 'experience'}>Experience</NavItem>
                <NavItem href="education" isActive={activeSection === 'education'}>Education</NavItem>
                <NavItem href="certifications" isActive={activeSection === 'certifications'}>Certifications</NavItem>
                <NavItem href="projects" isActive={activeSection === 'projects'}>Projects</NavItem>
                <NavItem href="contact" isActive={activeSection === 'contact'}>Contact</NavItem>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                VR
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Vishnu Reddy <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">A M</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">Associate Software Engineer</p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              Backend development specialist with expertise in Java, Spring Boot, and MySQL. 
              Passionate about building scalable enterprise solutions.
            </p>
            <div className="flex justify-center space-x-4 mb-12">
              <a href="mailto:vishnureddy.am@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Get In Touch
              </a>
              <button 
                onClick={() => scrollToSection('projects')}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                View Projects
              </button>
            </div>
            <button 
              onClick={() => scrollToSection('about')}
              className="animate-bounce text-blue-600 hover:text-blue-700 transition-colors duration-300"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl flex items-center justify-center mb-6">
                <User size={120} className="text-blue-600" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Summary</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Detail-oriented and analytical Associate Software Engineer with hands-on experience in backend development using 
                Java, Spring Boot, and MySQL. Proven track record of troubleshooting, enhancing, and supporting manufacturing 
                enterprise systems.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Adept at identifying and resolving application issues in client-focused projects. Knowledgeable in frontend 
                development with React.js. Committed to delivering scalable solutions and collaborating with cross-functional 
                teams to drive process improvement and project success.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                  <MapPin className="text-blue-600" size={20} />
                  <span className="text-gray-700">Bengaluru, India</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-teal-50 rounded-lg">
                  <Briefcase className="text-teal-600" size={20} />
                  <span className="text-gray-700">Tech Mahindra</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{skill.level}% Proficiency</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-teal-600 rounded-full"></div>
            <div className="relative">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-white p-4 rounded-full shadow-lg border-4 border-blue-600">
                  <Briefcase className="text-blue-600" size={24} />
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Associate Software Engineer</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-1">Tech Mahindra</p>
                  <p className="text-gray-500 flex items-center justify-center space-x-2">
                    <Calendar size={16} />
                    <span>September 2024 – Present</span>
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Contributed to the Drona manufacturing enterprise system project, designed to track and manage end-to-end manufacturing processes.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Analyzed incomplete project modules, identified logic gaps, and provided effective solutions to address technical issues within the application lifecycle.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Rectified system integration errors and ensured seamless data flow across various stages of the manufacturing process.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Collaborated with cross-functional teams to understand user requirements and software design constraints for ongoing process improvement.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Provided backend technical support, including debugging, system maintenance, and process optimization to enhance system reliability.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Documented solutions and resolution steps for recurring issues to improve knowledge sharing and future troubleshooting.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex-shrink-0">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Bachelor of Engineering: Information Science and Engineering</h3>
                  <p className="text-blue-600 font-semibold mb-1">CMR Institute of Technology, Bengaluru</p>
                  <div className="flex items-center space-x-4 text-gray-500 mb-2">
                    <span>May 2024</span>
                    <span>•</span>
                    <span className="font-semibold text-green-600">CGPA: 8.08 / 10</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-teal-600 to-blue-600 rounded-lg flex-shrink-0">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">12th Grade</h3>
                  <p className="text-teal-600 font-semibold mb-1">SRS PU College, Chitradurga, Karnataka</p>
                  <div className="flex items-center space-x-4 text-gray-500 mb-2">
                    <span>March 2020</span>
                    <span>•</span>
                    <span className="font-semibold text-green-600">Percentage: 86.83%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex-shrink-0">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">10th Grade</h3>
                  <p className="text-orange-600 font-semibold mb-1">SRS Heritage School, Bengaluru</p>
                  <div className="flex items-center space-x-4 text-gray-500 mb-2">
                    <span>March 2018</span>
                    <span>•</span>
                    <span className="font-semibold text-green-600">Percentage: 73.4%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-green-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-teal-600 to-green-600 rounded-lg flex-shrink-0">
                  <Award className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Docker For Java Developers</h3>
                  <p className="text-teal-600 font-semibold mb-1">Udemy Course</p>
                  <p className="text-gray-500 mb-4">March 2025</p>
                  <a 
                    href="https://drive.google.com/file/d/1uTXrGQ4C-B8y0ua-u-MscCCQpCoI985v/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex-shrink-0">
                  <Award className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Java Spring Framework 6 with Spring Boot 3</h3>
                  <p className="text-blue-600 font-semibold mb-4">Udemy</p>
                  <a 
                    href="https://drive.google.com/file/d/100seWYCBtIRvkakifCRrLzfbQPzrEaZr/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex-shrink-0">
                <Globe className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Full-stack E-commerce Platform</h3>
                <p className="text-orange-600 font-semibold mb-4">Spring Boot | React.js | MySQL | 2025</p>
              </div>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Developed a full-stack e-commerce platform using Spring Boot, React.js, and MySQL.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Designed and implemented backend APIs for product management, user authentication, and order processing.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Built a responsive frontend with React.js for seamless user experience across devices.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Integrated database schema and optimized MySQL queries to ensure efficient data handling.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Applied best practices for security and performance throughout the application.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Spring Boot</span>
              <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">React.js</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">MySQL</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">RESTful APIs</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">Full-Stack</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-blue-200 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just connecting with fellow developers. 
                Feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-700 rounded-lg">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:vishnureddy.am@gmail.com" className="text-blue-200 hover:text-white transition-colors duration-300">
                      vishnureddy.am@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-teal-700 rounded-lg">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+919900988387" className="text-blue-200 hover:text-white transition-colors duration-300">
                      +91-99009 88387
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-orange-700 rounded-lg">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-blue-200">Bengaluru, India – 560100</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Connect on Social</h3>
              <div className="space-y-4">
                <a 
                  href="https://linkedin.com/in/vishnu-reddy-a-m-333971308" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-blue-800/50 hover:bg-blue-700 rounded-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <Linkedin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-blue-200">Professional Network</p>
                  </div>
                  <ExternalLink className="text-blue-200 ml-auto" size={20} />
                </a>
                <a 
                  href="https://github.com/iamvishnu12" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-teal-800/50 hover:bg-teal-700 rounded-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-3 bg-teal-600 rounded-lg">
                    <Github className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-blue-200">Code Repository</p>
                  </div>
                  <ExternalLink className="text-blue-200 ml-auto" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">© 2024 Vishnu Reddy A M. All rights reserved.</p>
            <p className="text-gray-500 mt-2">Built with React.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;