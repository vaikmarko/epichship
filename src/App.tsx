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
  note?: string; // For special notes like "Vabaks"
}

const projects: Project[] = [
  {
    title: "Sentimental App",
    description: "AI-powered sentiment analysis and journaling platform.",
    url: "https://www.sentimentalapp.com",
    status: "active",
    icon: <Activity className="w-6 h-6" />,
  },
  {
    title: "Päriselt",
    description: "Meaningful connections and conversations. (Mother's project)",
    url: "https://www.päriselt.ee",
    status: "active",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Air Seal",
    description: "Construction and insulation solutions. (Father's project)",
    url: "https://www.air-seal.eu",
    status: "active",
    icon: <Building className="w-6 h-6" />,
  },
  {
    title: "My Confessions",
    description: "Experimental LLM integration project.",
    url: "https://www.myconfessions.org",
    status: "archived",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "Echo",
    description: "Find Your Echo - Personal resonance platform.",
    url: "https://findyourecho.app",
    status: "building",
    icon: <Server className="w-6 h-6" />,
  },
  {
    title: "Sovereign Systems",
    description: "Digital sovereignty and operating systems.",
    url: "https://svgnsystems.com",
    status: "active",
    icon: <ShieldCheck className="w-6 h-6" />,
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
    active: "bg-green-500/10 text-green-500 border-green-500/20",
    exited: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    archived: "bg-gray-500/10 text-gray-500 border-gray-500/20",
    building: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  };

  return (
    <span className={`px-2 py-0.5 text-xs font-medium rounded-full border ${colors[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-epic-black text-epic-white p-8 md:p-12 font-sans selection:bg-epic-accent selection:text-white">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <header className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            <div className="p-3 bg-epic-gray rounded-2xl">
              <Ship className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Epic Ship</h1>
              <p className="text-gray-400">Marko Vaik</p>
            </div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl leading-relaxed"
          >
            I build and ship digital products. From fintech and mental health platforms to personal experiments and community apps. 
            <br className="hidden md:block" />
            Based in Estonia, operating globally.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <a href="mailto:ship@epicship.ee" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              ship@epicship.ee <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.3 }}
              className="group relative bg-epic-gray/50 border border-white/5 rounded-2xl p-6 hover:bg-epic-gray transition-colors hover:border-white/10"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-black/20 rounded-xl text-gray-300 group-hover:text-white transition-colors">
                  {project.icon}
                </div>
                <StatusBadge status={project.status} />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {project.note && (
                 <div className="mt-4 p-3 bg-black/20 rounded-lg border border-white/5 text-xs text-gray-500 italic">
                   "{project.note}"
                 </div>
              )}

              {project.url && (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label={`Visit ${project.title}`}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <footer className="pt-12 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Epic Ship. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}

export default App;
