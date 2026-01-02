import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Ship, Anchor, Lock, LockOpen, Code, Building, Users, Server, Activity, ShieldCheck, Database, Smartphone } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  url?: string;
  status: 'active' | 'exited' | 'archived' | 'building';
  tech?: string[];
  icon: React.ReactNode;
  note?: string;
  image?: string;
  logo?: string;
}

const projects: Project[] = [
  {
    title: "Sentimental App",
    description: "AI-powered sentiment analysis and journaling platform.",
    url: "https://www.sentimentalapp.com",
    status: "active",
    icon: <Activity className="w-6 h-6" />,
    logo: "projects/sentimental/logo.png",
  },
  {
    title: "Päriselt",
    description: "Meaningful connections and conversations. (Mother's project)",
    url: "https://www.päriselt.ee",
    status: "active",
    icon: <Users className="w-6 h-6" />,
    image: "projects/pariselt/bg.jpg",
  },
  {
    title: "Air Seal",
    description: "Construction and insulation solutions. (Father's project)",
    url: "https://www.air-seal.eu",
    status: "active",
    icon: <Building className="w-6 h-6" />,
    logo: "projects/airseal/logo.png",
  },
  {
    title: "My Confessions",
    description: "Experimental LLM integration project.",
    url: "https://www.myconfessions.org",
    status: "archived",
    icon: <Code className="w-6 h-6" />,
    image: "projects/myconfessions/bg.png",
  },
  {
    title: "Echo",
    description: "Find Your Echo - Personal resonance platform.",
    url: "https://findyourecho.app",
    status: "building",
    icon: <Server className="w-6 h-6" />,
    image: "projects/echo/screen.png",
  },
  {
    title: "Sovereign Systems",
    description: "Digital sovereignty and operating systems.",
    url: "https://svgnsystems.com",
    status: "active",
    icon: <ShieldCheck className="w-6 h-6" />,
    image: "projects/sovereign/bg.png",
  },
  {
    title: "PEP Checker",
    description: "Politically Exposed Persons verification tool.",
    url: "https://www.pepchecker.com",
    status: "exited",
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: "Sukoda",
    description: "Partner gift and loyalty platform.",
    url: "https://www.sukoda.ee",
    status: "active",
    icon: <Anchor className="w-6 h-6" />,
    image: "projects/sukoda/bg.jpg",
    logo: "projects/sukoda/logo.svg",
  },
  {
    title: "Serenity Platform",
    description: "Mental health counseling platform. Grew to 100+ specialists.",
    url: "https://www.serenityplatform.com",
    status: "exited",
    icon: <Activity className="w-6 h-6" />,
  },
  {
    title: "DataMe",
    description: "Estonia's first credit bureau. Innovative fintech attempt.",
    status: "exited",
    icon: <Lock className="w-6 h-6" />,
  },
  {
    title: "The List",
    description: "Digital community platform for Rotermann Quarter.",
    status: "building",
    icon: <Smartphone className="w-6 h-6" />,
    image: "projects/thelist/bg.jpg",
  },
  {
    title: "Vabaks",
    description: "A bold move to liberate pension funds ahead of time.",
    note: "A story of regulatory rebellion. Detainment, silence, and no guilt admission. For those who understand.",
    status: "archived",
    icon: <LockOpen className="w-6 h-6" />,
  }
];

const StatusBadge = ({ status }: { status: Project['status'] }) => {
  const colors = {
    active: "bg-green-500/20 text-green-400 border-green-500/30",
    exited: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    archived: "bg-gray-500/20 text-gray-400 border-gray-500/30",
    building: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  };

  return (
    <span className={`px-2.5 py-1 text-xs font-bold rounded-full border backdrop-blur-md ${colors[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-epic-black text-epic-white p-6 md:p-12 font-sans selection:bg-epic-accent selection:text-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Header */}
        <header className="space-y-8 relative z-10 pt-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-5"
          >
            <div className="p-4 bg-gradient-to-br from-epic-gray to-black rounded-2xl border border-white/10 shadow-2xl">
              <Ship className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Epic Ship
              </h1>
              <p className="text-gray-400 font-medium mt-1 text-lg">Marko Vaik</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl"
          >
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              I build and ship digital products. <br />
              <span className="text-gray-500">From fintech and mental health platforms to personal experiments and community apps.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <a href="mailto:ship@epicship.ee" className="inline-flex items-center gap-2 text-base font-medium text-white hover:text-epic-accent transition-colors border-b border-transparent hover:border-epic-accent pb-0.5">
              ship@epicship.ee <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.3 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden bg-epic-gray border border-white/5 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-epic-accent/10 hover:-translate-y-2"
            >
              {/* Background Image */}
              {project.image && (
                <div className="absolute inset-0 z-0">
                  <img 
                    src={project.image} 
                    alt="" 
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
                </div>
              )}

              {/* Content Container */}
              <div className="relative z-10 h-full flex flex-col p-8">
                
                {/* Top Row */}
                <div className="flex justify-between items-start mb-auto">
                   <div className="p-3 bg-black/40 backdrop-blur-md rounded-2xl border border-white/5 text-gray-300 group-hover:text-white group-hover:border-white/20 transition-all shadow-lg">
                      {project.logo ? (
                        <img src={project.logo} alt={`${project.title} logo`} className="w-8 h-8 object-contain" />
                      ) : (
                        project.icon
                      )}
                    </div>
                  <StatusBadge status={project.status} />
                </div>
                
                {/* Bottom Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-epic-accent transition-colors flex items-center gap-2">
                    {project.title}
                    {project.url && <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>

                  {project.note && (
                    <div className="pt-4 mt-2 border-t border-white/10">
                      <p className="text-xs text-gray-500 italic leading-relaxed">
                        "{project.note}"
                      </p>
                    </div>
                  )}
                </div>

                {/* Clickable Link Overlay */}
                {project.url && (
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20 focus:outline-none focus:ring-2 focus:ring-epic-accent focus:ring-inset rounded-3xl"
                    aria-label={`Visit ${project.title}`}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <footer className="pt-20 pb-12 border-t border-white/5 text-center">
          <p className="text-gray-600 text-sm font-medium">&copy; {new Date().getFullYear()} Epic Ship / Marko Vaik. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}

export default App;
