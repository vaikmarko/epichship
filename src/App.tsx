import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  url?: string;
  status: 'active' | 'exited' | 'archived' | 'building';
  image?: string;
  note?: string;
}

const projects: Project[] = [
  {
    title: "The List",
    description: "Digital community platform for Rotermann Quarter.",
    status: "building",
    image: "/projects/thelist/bg.jpg",
  },
  {
    title: "Echo",
    description: "Team wellbeing and burnout prevention tool.",
    url: "https://findyourecho.app",
    status: "building",
  },
  {
    title: "Sovereign Systems",
    description: "Offline-first personal AI for preparedness.",
    url: "https://svgnsystems.com",
    status: "active",
  },
  {
    title: "Sukoda",
    description: "Premium home care subscription service.",
    url: "https://www.sukoda.ee",
    status: "active",
  },
  {
    title: "Sentimental App",
    description: "AI-powered sentiment analysis and journaling platform.",
    url: "https://www.sentimentalapp.com",
    status: "active",
  },
  {
    title: "Päriselt",
    description: "Estonian psychological counseling platform.",
    url: "https://www.päriselt.ee",
    status: "active",
  },
  {
    title: "Air Seal",
    description: "Premium tire sealant for fleets.",
    url: "https://www.air-seal.eu",
    status: "active",
  },
  {
    title: "PEP Checker",
    description: "Politically Exposed Persons verification tool.",
    url: "https://www.pepchecker.com",
    status: "exited",
    image: "/projects/pepchecker/preview.png",
  },
  {
    title: "My Confessions",
    description: "AI-powered biblical guidance and prayer.",
    url: "https://myconfessions.org",
    status: "archived",
  },
];

const otherProjects: Project[] = [
  { title: "Serenity Platform", description: "Estonia's largest mental health counseling platform. Grew to 100+ specialists.", status: "exited" },
  { title: "DataMe", description: "Estonia's first credit bureau. Innovative fintech attempt.", status: "exited" },
  { 
    title: "Vabaks", 
    description: "A bold move to liberate pension funds ahead of time.",
    note: "A story of regulatory rebellion. Detainment, silence, and no guilt admission. For those who understand.",
    status: "archived" 
  },
];

const statusColors = {
  active: "text-emerald-400",
  exited: "text-sky-400", 
  archived: "text-neutral-500",
  building: "text-amber-400",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  // Use image if provided (for sites that block iframes), otherwise use iframe
  const useStaticImage = !!project.image;
  
  const cardContent = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border-b border-neutral-900">
        {project.url && !useStaticImage ? (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <iframe 
              src={project.url}
              title={`${project.title} preview`}
              className="w-[200%] h-[200%] origin-top-left scale-50 border-0"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        ) : project.image ? (
          <img 
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : null}
        <div className="absolute -inset-px bg-gradient-to-t from-neutral-900 via-black/20 to-transparent pointer-events-none" />
        {project.url && (
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <div className="bg-white text-black px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1">
              Open <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </div>
        )}
      </div>
      <div className="flex items-start justify-between gap-4 px-6 py-5 bg-neutral-900 -mt-px">
        <div>
          <p className="text-lg font-semibold text-white">{project.title}</p>
          <p className="mt-1 text-sm text-neutral-400">{project.description}</p>
        </div>
        <span className={`text-[11px] font-semibold uppercase tracking-[0.2em] shrink-0 ${statusColors[project.status]}`}>
          {project.status}
        </span>
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 hover:border-white/20 hover:shadow-xl hover:shadow-white/5 transition-all"
    >
      {project.url ? (
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </motion.div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
        
        {/* Header */}
        <header className="mb-16 sm:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.4em] text-neutral-500"
          >
            Epic Ship
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05]"
          >
            I build and ship digital products.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-2xl text-base sm:text-lg text-neutral-400 leading-relaxed"
          >
            From fintech and mental health platforms to community apps and experiments.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-col gap-1 text-sm"
          >
            <span className="text-neutral-300">Marko Vaik</span>
            <a href="mailto:ship@epicship.ee" className="text-neutral-400 hover:text-white transition-colors">
              ship@epicship.ee
            </a>
            <a href="tel:+37256805509" className="text-neutral-400 hover:text-white transition-colors">
              +372 5680 5509
            </a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-6 text-sm text-neutral-500 max-w-md"
          >
            Open to impactful projects. If you're building something meaningful, let's talk.
          </motion.p>
        </header>

        {/* Featured Projects Grid */}
        <section className="mb-16 sm:mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">Selected work</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section className="border-t border-neutral-800 pt-12">
          <div className="flex items-end justify-between gap-4 mb-8">
            <h2 className="text-sm font-semibold text-neutral-500 uppercase tracking-[0.3em]">Other projects</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className="group flex flex-col rounded-2xl border border-white/5 bg-neutral-900/40 px-5 py-4 hover:border-white/15 hover:bg-neutral-900/70 transition-all"
              >
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-base font-semibold text-white group-hover:text-neutral-300 transition-colors">
                          {project.title}
                        </span>
                        <span className={`text-xs font-medium uppercase tracking-wider ${statusColors[project.status]}`}>
                          {project.status}
                        </span>
                      </div>
                      <span className="text-neutral-500 group-hover:text-white transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-neutral-500">{project.description}</p>
                    {project.note && (
                      <p className="mt-3 pt-3 border-t border-white/5 text-xs text-neutral-600 italic">"{project.note}"</p>
                    )}
                  </a>
                ) : (
                  <>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-base font-semibold text-white">
                          {project.title}
                        </span>
                        <span className={`text-xs font-medium uppercase tracking-wider ${statusColors[project.status]}`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-neutral-500">{project.description}</p>
                    {project.note && (
                      <p className="mt-3 pt-3 border-t border-white/5 text-xs text-neutral-600 italic">"{project.note}"</p>
                    )}
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 text-neutral-600 text-sm">
          © {new Date().getFullYear()} Epic Ship / Marko Vaik
        </footer>

      </div>
    </div>
  );
}

export default App;
