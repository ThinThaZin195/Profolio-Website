'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin, FaDownload, FaEnvelope, FaMoon, FaSun, FaBars, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { 
  SiReact, SiNextdotjs, SiHtml5, SiCss, SiJavascript,
  SiNodedotjs, SiExpress, SiPhp, SiLaravel,
  SiMysql,
  SiGit, SiGithub, SiPostman, SiSocketdotio
} from 'react-icons/si';

// Components
const Header = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setDarkTheme(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    if (!darkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="header"
    >
      <div className="logo">
        Portfolio<span>.</span>
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="header-actions">
        <button className="theme-toggle" onClick={toggleTheme}>
           {darkTheme ? <FaSun /> : <FaMoon />}
        </button>
        <a href="#contact" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
          Hire Me
        </a>
      </div>
      <button className="mobile-menu-btn">
        <FaBars />
      </button>
    </motion.header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="section container hero">
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="hero-left"
      >
        <div className="social-icons">
          <a href="#" className="social-icon" style={{ color: '#10E326' }}><FaInstagram /></a>
          <a href="#" className="social-icon" style={{ color: '#10E326' }}><FaFacebook /></a>
          <a href="#" className="social-icon" style={{ color: '#10E326' }}><FaGithub /></a>
          <a href="#" className="social-icon" style={{ color: '#10E326' }}><FaLinkedin /></a>
        </div>
        <h2 className="hero-title">Hi, I'm <div className="text-primary">Thin Tha Zin</div></h2>
        <p style={{ maxWidth: '500px', fontSize: '1.1rem' }}>
          A passionate Web Developer who loves building modern, responsive, and user-focused websites and applications.
        </p>
        <div className="hero-buttons">
          <a href="/CV/Thin_Tha_Zin_Full_Stack_Developer_CV.pdf" download="ThinThaZin_CV.pdf" className="btn btn-primary">
            <FaDownload /> Download CV
          </a>
          <a href="#contact" className="btn btn-outline">
            <FaEnvelope /> Contact Me
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hero-right"
      >
        {/* Placeholder for the 3D Avatar */}
        <div className="hero-image-wrapper">
          <img 
            src="/my_photo.jpeg" 
            alt="Thin Tha Zin" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50px' }} 
          />
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section container">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: '900px', margin: '0 auto' }}
      >
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>About <span className="text-primary">Me</span></h2>
        
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--text-muted)', textAlign: 'justify' }}>
          I am a passionate web developer who enjoys building modern, responsive web applications. I continuously strive to improve my skills in technologies such as <strong>JavaScript, React, Next.js, Node.js, and PHP</strong>. I am always eager to learn new tools and solve real-world problems through clean, efficient code.
        </p>
        
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '3rem', color: 'var(--text-muted)', textAlign: 'justify' }}>
          Although some of my professional projects are confidential, I have built several personal and practice projects that demonstrate my development capabilities, attention to detail, and problem-solving abilities.
        </p>

        <div className="about-stats" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3rem', textAlign: 'center' }}>
          <div className="stat-item">
            <h3>2026</h3>
            <p>L5 Diploma in Computing</p>
          </div>
          <div className="stat-item">
            <h3>2+ Years</h3>
            <p>Learning Web Dev</p>
          </div>
          <div className="stat-item">
            <h3>8 Months</h3>
            <p>Work Experience</p>
          </div>
          <div className="stat-item">
            <h3>10+</h3>
            <p>Personal Projects</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: <SiHtml5 style={{ color: '#E34F26' }} /> },
        { name: 'CSS', icon: <SiCss style={{ color: '#1572B6' }} /> },
        { name: 'JavaScript', icon: <SiJavascript style={{ color: '#F7DF1E' }} /> },
        { name: 'React', icon: <SiReact style={{ color: '#61DAFB' }} /> },
        { name: 'Next.js', icon: <SiNextdotjs /> }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs style={{ color: '#339933' }} /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'PHP', icon: <SiPhp style={{ color: '#777BB4' }} /> },
        { name: 'Laravel', icon: <SiLaravel style={{ color: '#FF2D20' }} /> }
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MySQL', icon: <SiMysql style={{ color: '#4479A1' }} /> }
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: <SiGit style={{ color: '#F05032' }} /> },
        { name: 'GitHub', icon: <SiGithub /> },
        { name: 'Postman', icon: <SiPostman style={{ color: '#FF6C37' }} /> },
        { name: 'Socket.io', icon: <SiSocketdotio /> }
      ]
    }
  ];

  return (
    <section id="skills" className="section container">
      <h2 className="section-title">My <span className="text-primary">Skills</span></h2>
      <p style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
        Technologies and tools I work with to create amazing web experiences.
      </p>
      
      <div className="skills-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        {skillCategories.map((category, index) => (
          <motion.div 
            key={category.title}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="skill-card"
            style={{ padding: '2rem' }}
          >
            <h3 style={{ borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
              {category.title}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {category.skills.map(skill => (
                <span key={skill.name} className="tag" style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', fontSize: '1rem', backgroundColor: 'var(--secondary)', color: 'var(--foreground)' }}>
                  <span style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center' }}>{skill.icon}</span> 
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/ThinThaZin195/repos?sort=updated&per_page=6');
        if (response.ok) {
          const data = await response.json();
          const updatedData = data.map((repo: any) => {
            if (repo.name === 'movie-lists-and-reviews') {
              return { ...repo, homepage: 'https://movie-lists-and-reviews-qxrb.vercel.app' };
            }
            if (repo.name === 'FoodFusion') {
              return { ...repo, homepage: 'https://foodfusion-production.up.railway.app' };
            }
            if (repo.name === 'EduVibe-OnlineEducationPlaform-frontend') {
              return { ...repo, homepage: 'https://eduvibe-onlineeducationplaform-frontend-production.up.railway.app/' };
            }
            if (repo.name === 'EduVibe-OnlineEducationPlaform-backend') {
              return { ...repo, homepage: 'https://eduvibe-onlineeducationplaform-backend-production.up.railway.app/' };
            }
            return repo;
          });
          setProjects(updatedData);
        }
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchRepos();
  }, []);

  return (
    <section id="projects" className="section container">
      <h2 className="section-title">My <span className="text-primary">Projects</span></h2>
      <p style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
        A showcase of my recent work and personal projects.
      </p>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
          Loading projects from GitHub...
        </div>
      ) : (
        <div className="projects-grid">
          {projects.map((project, index) => {
            const projectImages: Record<string, string> = {
              'FoodFusion': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop',
              'NextJs_Frontend_FoodDelievery': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=250&fit=crop',
              'restaurant_UI': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=250&fit=crop',
              'Movie_Backend': 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=250&fit=crop',
              'Movie_Frontend': 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=250&fit=crop',
              'Weather_JS': 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=400&h=250&fit=crop',
              'movie-lists-and-reviews': 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=250&fit=crop',
              'TodoLists': 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop',
              'Profolio-Website': 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=400&h=250&fit=crop',
              'EduVibe-OnlineEducationPlaform-frontend': 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=250&fit=crop',
              'EduVibe-OnlineEducationPlaform-backend': 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=250&fit=crop',
              'MVC-php': 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&h=250&fit=crop'
            };
            
            return (
              <motion.div 
                key={project.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="project-card"
              >
                <img 
                  src={projectImages[project.name] || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop'} 
                  alt={project.name} 
                  className="project-img" 
                />
              <div className="project-content">
                <h3 className="project-title" style={{ textTransform: 'capitalize' }}>
                  {project.name.replace(/-/g, ' ').replace(/_/g, ' ')}
                </h3>
                <p className="project-desc">
                  {project.description || 'A complete project built with modern web technologies and clean code.'}
                </p>
                <div className="project-tags">
                  {project.language && <span className="tag">{project.language}</span>}
                </div>
                <div className="project-links">
                  <a 
                    href={project.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline" 
                    style={{ flex: 1, display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center', padding: '10px', fontSize: '0.875rem' }}
                  >
                    <FaGithub /> Code
                  </a>
                  {project.homepage && (
                    <a 
                      href={project.homepage} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary" 
                      style={{ flex: 1, display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center', padding: '10px', fontSize: '0.875rem' }}
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      )}
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a 
          href="https://github.com/ThinThaZin195?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary"
        >
          View All Projects
        </a>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section container contact">
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img 
          src="/contact.png" 
          alt="Contact Avatar" 
          style={{ width: '100%', maxWidth: '400px', borderRadius: '40px', objectFit: 'cover' }} 
        />
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Get In <span className="text-primary">Touch</span></h2>
        <p>Let's discuss your project and how I can help bring your ideas to life.</p>
        
        <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--secondary)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary)', fontSize: '1.2rem' }}>
              <FaPhone />
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Phone</h4>
              <a href="tel:+66828047735" style={{ margin: 0, color: 'var(--text-muted)', textDecoration: 'none' }}>+66828047735</a>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--secondary)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary)', fontSize: '1.2rem' }}>
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Address</h4>
              <p style={{ margin: 0, color: 'var(--text-muted)' }}>Bangkok</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--secondary)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary)', fontSize: '1.2rem' }}>
              <FaLinkedin />
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: '1.1rem' }}>LinkedIn</h4>
              <a href="https://www.linkedin.com/in/thin-tha-zin-1067b1340?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" style={{ margin: 0, color: 'var(--text-muted)', textDecoration: 'none' }}>Thin Tha Zin</a>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--secondary)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary)', fontSize: '1.2rem' }}>
              <FaFacebook />
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Facebook</h4>
              <a href="https://web.facebook.com/Thinthazinn" target="_blank" rel="noopener noreferrer" style={{ margin: 0, color: 'var(--text-muted)', textDecoration: 'none' }}>Thinthazinn</a>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--secondary)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary)', fontSize: '1.2rem' }}>
              <FaGithub />
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: '1.1rem' }}>GitHub</h4>
              <a href="https://github.com/ThinThaZin195" target="_blank" rel="noopener noreferrer" style={{ margin: 0, color: 'var(--text-muted)', textDecoration: 'none' }}>ThinThaZin195</a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default function Home() {
  return (
    <main style={{ paddingTop: '20px' }}>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <footer style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)', borderTop: '1px solid var(--secondary)', marginTop: '60px' }}>
        <p>© 2026 Thin Tha Zin — Web Developer. All rights reserved.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '16px' }}>
           <a href="#" className="social-icon" style={{ width: '36px', height: '36px', fontSize: '1rem' }}><FaInstagram /></a>
           <a href="#" className="social-icon" style={{ width: '36px', height: '36px', fontSize: '1rem' }}><FaGithub /></a>
           <a href="#" className="social-icon" style={{ width: '36px', height: '36px', fontSize: '1rem' }}><FaLinkedin /></a>
        </div>
      </footer>
    </main>
  );
}
