import React, { useState, useEffect, useMemo } from 'react';
import { 
  Menu, X, Mail, Phone, Palette, Box, Layers, 
  ChevronRight, Layout, Award, Monitor, 
  Linkedin, Facebook, Instagram, Twitter, ExternalLink, Search, Send
} from 'lucide-react';
import { ProjectCategory, PortfolioItem, Skill, Service, Experience } from './types';

// Modal Component for Lightbox Effect
const Modal: React.FC<{ item: PortfolioItem | null; onClose: () => void }> = ({ item, onClose }) => {
  if (!item) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose}>
      <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors z-10 backdrop-blur-md">
          <X size={24} />
        </button>
        <img src={item.image} alt={item.title} className="w-full h-auto max-h-[80vh] object-contain bg-gray-100" />
        <div className="p-8 bg-white">
          <span className="text-blue-600 text-sm font-bold uppercase tracking-widest">{item.category}</span>
          <h3 className="text-2xl font-bold text-gray-900 mt-1">{item.title}</h3>
          <p className="text-gray-600 mt-4 leading-relaxed">
            A specialized project focused on {item.category.toLowerCase()} excellence. Designed with a focus on clean aesthetics and impactful visual communication for Julian D Costa's clients.
          </p>
        </div>
      </div>
    </div>
  );
};

// Abstract Background Shapes
const BackgroundShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
    <div className="absolute top-[10%] left-[-5%] w-96 h-96 bg-blue-100/30 rounded-full blur-[100px]"></div>
    <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px]"></div>
    <div className="absolute bottom-0 left-[20%] w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-[100px]"></div>
    <svg className="absolute top-0 right-0 opacity-[0.03]" width="400" height="400" viewBox="0 0 400 400">
      <circle cx="400" cy="0" r="400" fill="#1E3A8A" />
    </svg>
  </div>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-[60] transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 group">
            <h1 className={`text-2xl font-black tracking-tight transition-colors duration-300 ${scrolled ? 'text-[#1E3A8A]' : 'text-white'}`}>
              JULIAN <span className="text-blue-500 group-hover:text-blue-400 transition-colors uppercase">D Costa</span>
            </h1>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-all duration-300 hover:text-blue-500 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all hover:after:w-full ${scrolled ? 'text-gray-700' : 'text-gray-100'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-2xl absolute w-full left-0 animate-in slide-in-from-top duration-300 border-t border-gray-100">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-4 text-lg font-bold text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 blue-gradient overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-96 h-96 bg-blue-400/20 rounded-full blur-[80px] animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-blue-100 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
              Open for Collaboration
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1]">
              Julian D Costa <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white opacity-90 italic font-light text-4xl md:text-5xl">Graphics Designer</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 max-w-xl font-light leading-relaxed">
              Creative Branding & Print Design Specialist. Julian creates clean, impactful, and purpose-driven visual identities for organizations and communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <a href="#portfolio" className="group px-10 py-5 bg-white text-[#1E3A8A] font-bold rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:bg-blue-50 transition-all flex items-center justify-center transform hover:-translate-y-1">
                View My Work <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a href="#contact" className="px-10 py-5 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-center backdrop-blur-sm transform hover:-translate-y-1">
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end animate-in fade-in zoom-in duration-700 delay-300">
            <div className="relative z-10 w-full max-w-[450px] aspect-[4/5] bg-gray-200 rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" 
                alt="Julian D Costa Profile" 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
            </div>
            {/* Experience Badge */}
            <div className="absolute top-20 -left-12 lg:-left-20 bg-white p-6 rounded-3xl shadow-2xl animate-bounce-slow hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                  <Award size={28} />
                </div>
                <div>
                  <p className="text-3xl font-black text-[#1E3A8A]">2023</p>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Since Pro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white relative">
      <BackgroundShapes />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800" 
                alt="Design workspace" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 glass-card p-10 rounded-[2rem] shadow-xl border border-gray-100 hidden sm:block max-w-[280px]">
              <div className="flex items-center gap-4 mb-4">
                <Monitor className="text-blue-600" size={32} />
                <h4 className="font-bold text-lg leading-tight text-[#1E3A8A]">Branding Specialist</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Expert in transforming complex ideas into clean, functional visual identities.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm">About Me</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A] leading-tight">Crafting Identities with <span className="text-blue-500 underline decoration-blue-100 underline-offset-8">Purpose</span></h2>
            </div>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Julian is a Graphics Designer experienced in <span className="font-bold text-blue-600">logo design, brochures, banners, certificates, and social media design</span>. He currently serves as a Graphics Designer at <span className="font-bold text-gray-900">Chattogram Catholic Archdiocese</span> (2023–Present).
              </p>
              <p>
                His contribution to organizational branding and youth initiatives has defined his professional path, focusing on clean and impactful visual communication that resonates with communities and organizations alike.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              <div className="p-8 bg-blue-50/50 rounded-3xl border border-blue-100 group hover:bg-blue-100 transition-colors">
                <h3 className="font-bold text-[#1E3A8A] mb-2 flex items-center gap-2">
                  <Award size={20} className="text-blue-600" /> Education
                </h3>
                <p className="text-gray-900 font-bold">Honours in Management</p>
                <p className="text-sm text-gray-500">National University</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 group hover:bg-white hover:shadow-lg transition-all">
                <h3 className="font-bold text-gray-900 mb-2">Philosophy</h3>
                <p className="text-gray-600 italic">"Design is not just what it looks like and feels like. Design is how it works."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Adobe Illustrator', icon: <Palette className="w-10 h-10" /> },
    { name: 'Adobe Photoshop', icon: <Box className="w-10 h-10" /> },
    { name: 'Branding', icon: <Layout className="w-10 h-10" /> },
    { name: 'Print Design', icon: <Layers className="w-10 h-10" /> },
  ];

  return (
    <section id="skills" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Skills & Expertise</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A]">What I Master</h2>
          <div className="w-24 h-2 bg-blue-600 rounded-full mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group bg-white p-12 rounded-[3rem] shadow-sm border border-transparent hover:border-blue-500 hover:shadow-2xl transition-all duration-500 text-center transform hover:-translate-y-2"
            >
              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8 text-blue-600 group-hover:bg-[#1E3A8A] group-hover:text-white transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(30,58,138,0.3)]">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#1E3A8A] transition-colors">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Logo Design',
      description: 'Professional and memorable logo creation tailored to represent your brand identity uniquely.',
      icon: <Palette className="w-12 h-12" />,
    },
    {
      title: 'Branding Solutions',
      description: 'Complete branding systems including visual identity, typography, and color guidelines.',
      icon: <Layers className="w-12 h-12" />,
    },
    {
      title: 'Social Media Design',
      description: 'Creative and engaging designs for social platforms to boost your online presence.',
      icon: <Monitor className="w-12 h-12" />,
    },
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Services I Offer</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A]">My Creative Services</h2>
          <div className="w-24 h-2 bg-blue-600 rounded-full mx-auto mt-6"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-12 rounded-[3rem] bg-white border border-gray-100 hover:bg-gray-50 hover:shadow-xl transition-all duration-500 text-center"
            >
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-8">{service.description}</p>
              <a href="#contact" className="inline-flex items-center gap-2 font-bold text-blue-600 hover:gap-4 transition-all">
                Hire Me <ChevronRight size={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories: ProjectCategory[] = ['All', 'Logo', 'Branding', 'Print', 'Social Media'];

  const projects: PortfolioItem[] = useMemo(() => [
    { id: 1, title: 'Corporate Identity', category: 'Branding', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'Event Logo Design', category: 'Logo', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'Professional Brochure', category: 'Print', image: 'https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?auto=format&fit=crop&q=80&w=800' },
    { id: 4, title: 'Large Format Banner', category: 'Print', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800' },
    { id: 5, title: 'Social Media Kit', category: 'Social Media', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800' },
    { id: 6, title: 'Merit Certificate', category: 'Print', image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=800' },
  ], []);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Selected Works</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A]">Portfolio Gallery</h2>
          <div className="w-24 h-2 bg-blue-600 rounded-full mx-auto mt-6"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all duration-300 transform hover:scale-105 ${
                filter === cat 
                  ? 'bg-[#1E3A8A] text-white shadow-xl shadow-blue-900/20' 
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedItem(project)}
              className="group relative overflow-hidden rounded-[2.5rem] shadow-lg aspect-square cursor-pointer animate-in fade-in zoom-in duration-500"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#1E3A8A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-10 text-center">
                <span className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                <div className="mt-6 w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1E3A8A]">
                  <Search size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
};

const ExperienceTimeline: React.FC = () => {
  const experiences: Experience[] = [
    {
      role: 'Graphics Designer',
      company: 'Chattogram Catholic Archdiocese',
      period: '2023 – Present',
      description: 'Currently serving as the lead designer for organizational branding materials, youth initiatives, event banners, certificates, and promotional visuals. Responsible for maintaining consistent visual identity across all communication channels.',
    },
  ];

  return (
    <section id="experience" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Timeline</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A]">Professional Experience</h2>
          <div className="w-24 h-2 bg-blue-600 rounded-full mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12 md:pl-20 border-l-4 border-blue-600 pb-12 last:border-0 last:pb-0">
              <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-white border-4 border-blue-600 shadow-md"></div>
              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <span className="text-blue-600 font-bold text-sm bg-blue-50 px-4 py-1 rounded-full uppercase tracking-widest">{exp.period}</span>
                    <h3 className="text-3xl font-black text-[#1E3A8A] mt-4">{exp.role}</h3>
                    <p className="text-xl font-bold text-gray-700 mt-1">{exp.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{exp.description}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {['Branding', 'Event Design', 'Promotional Materials'].map(tag => (
                    <span key={tag} className="px-4 py-1 bg-white border border-gray-200 rounded-lg text-xs text-gray-500 font-medium">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 blue-gradient text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 p-20 opacity-10">
        <Box size={400} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-blue-200 font-bold uppercase tracking-[0.2em] text-sm block">Let's Work Together</span>
              <h2 className="text-5xl md:text-7xl font-black leading-tight">Bring Your Brand to <span className="text-blue-200 italic">Life</span></h2>
              <p className="text-xl text-blue-50 max-w-lg leading-relaxed">
                Ready to start a new project or just want to say hi? Feel free to reach out. I'm always open to new opportunities and creative collaborations.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-[#1E3A8A] transition-all">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-blue-200 text-sm font-bold uppercase tracking-widest">Email Me</p>
                  <a href="mailto:juliandcosta.bd@gmail.com" className="text-xl md:text-2xl font-bold hover:underline">juliandcosta.bd@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-[#1E3A8A] transition-all">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-blue-200 text-sm font-bold uppercase tracking-widest">Call Me</p>
                  <a href="tel:01844692914" className="text-xl md:text-2xl font-bold hover:underline">01844692914</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl text-gray-900">
            <form className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-5 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-0 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-5 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-0 transition-all outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                <textarea rows={5} placeholder="Tell me about your project..." className="w-full px-6 py-5 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-0 transition-all outline-none resize-none"></textarea>
              </div>
              <button className="w-full py-5 blue-gradient text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-[#1E3A8A]">
              JULIAN <span className="text-blue-500">D COSTA</span>
            </h2>
            <p className="text-gray-500 mt-2">Professional Graphics Designer specializing in Branding & Print Design.</p>
          </div>
          
          <div className="flex gap-4">
            {[
              { icon: <Facebook size={24} />, href: "#" },
              { icon: <Linkedin size={24} />, href: "#" },
              { icon: <Instagram size={24} />, href: "#" },
              { icon: <Twitter size={24} />, href: "#" }
            ].map((social, idx) => (
              <a key={idx} href={social.href} className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-sm">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-gray-400">
          <p>© {new Date().getFullYear()} Julian D Costa. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <ExperienceTimeline />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;