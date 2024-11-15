import React from 'react';
import { Github, Linkedin, Mail, Network, Shield, Server, Code, Award, Rss, Phone, MapPin, Download } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import CertificationCard from './components/CertificationCard';
import WatchCard from './components/WatchCard';
import Contact from './components/Contact';

function App() {
  const projects = [
    {
      title: "Infrastructure Réseau Enterprise",
      description: "Conception et déploiement d'une infrastructure réseau complète incluant VLANs, VPN et QoS",
      icon: <Network className="w-6 h-6" />,
      tags: ["Cisco", "VPN", "VLAN", "QoS"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2574"
    },
    {
      title: "Système de Détection d'Intrusion",
      description: "Mise en place d'un IDS/IPS avec Snort et analyse de logs",
      icon: <Shield className="w-6 h-6" />,
      tags: ["Snort", "IDS", "Cybersécurité"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2670"
    },
    {
      title: "Virtualisation de Serveurs",
      description: "Migration de serveurs physiques vers une infrastructure virtualisée",
      icon: <Server className="w-6 h-6" />,
      tags: ["VMware", "Proxmox", "Docker"],
      image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&q=80&w=2670"
    }
  ];

  const certifications = [
    {
      title: "Cisco CCNA",
      date: "2023",
      icon: <Award className="w-6 h-6" />,
      description: "Certification en réseaux et infrastructure Cisco",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2670"
    },
    {
      title: "CompTIA Security+",
      date: "2023",
      icon: <Shield className="w-6 h-6" />,
      description: "Certification en cybersécurité",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2670"
    }
  ];

  const watches = [
    {
      title: "Zero Trust Security",
      date: "2024",
      icon: <Rss className="w-6 h-6" />,
      description: "Veille sur l'architecture Zero Trust et son implémentation",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2670"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Skills />
      
      <main className="container mx-auto px-4 py-12">
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Projets Réalisés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        <section id="certifications" className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        </section>

        <section id="watch" className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Veille Technologique</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {watches.map((watch, index) => (
              <WatchCard key={index} {...watch} />
            ))}
          </div>
        </section>

        <section id="contact" className="mb-20">
          <Contact />
        </section>
      </main>

      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Abdelhafid</h3>
              <p className="text-gray-400">Étudiant en BTS SIO SISR</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;