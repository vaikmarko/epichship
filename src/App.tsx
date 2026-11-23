type Status = 'building' | 'live' | 'exited' | 'archived';

interface Project {
  title: string;
  description: string;
  url?: string;
  status: Status;
  image?: string;
  note?: string;
}

const statusLabel: Record<Status, string> = {
  building: 'In progress',
  live: 'Live',
  exited: 'Exited',
  archived: 'Archived',
};

const statusDot: Record<Status, string> = {
  building: 'bg-[#E8A317]',
  live: 'bg-[#1F9D6B]',
  exited: 'bg-[#2F6FDE]',
  archived: 'bg-[#A9B4C0]',
};

const lead: Project = {
  title: 'Klaariks',
  description:
    'Accounting that runs itself for Estonian micro-businesses and freelancers. It files tax declarations, prepares annual reports and shows where the company stands.',
  url: 'https://www.klaariks.ee',
  status: 'building',
  image: '/projects/klaariks/tile.jpg',
};

const featured: Project[] = [
  {
    title: 'Viisik',
    description:
      'Parents invite trusted adults to stay beside a child, with voice notes and visits kept until the child turns 18.',
    url: 'https://viisik.com',
    status: 'building',
    image: '/projects/viisik/tile.jpg',
  },
  {
    title: 'Sumin',
    description:
      'Introduces people nearby for a 30-minute meetup in person, matched by a reason and not by photos.',
    url: 'https://joinsumin.com',
    status: 'building',
    image: '/projects/joinsumin/tile.jpg',
  },
  {
    title: 'Sukoda',
    description: 'A household and its family, on one calendar.',
    url: 'https://www.sukoda.ee',
    status: 'live',
    image: '/projects/sukoda/tile.jpg',
  },
  {
    title: 'The List',
    description: 'Digital community platform for the Rotermann Quarter in Tallinn.',
    status: 'building',
    image: '/projects/thelist/tile.jpg',
  },
];

const more: Project[] = [
  { title: 'Echo', description: 'Team wellbeing and burnout prevention tool.', url: 'https://findyourecho.app', status: 'building' },
  { title: 'Päriselt', description: 'Estonian psychological counseling platform.', url: 'https://www.päriselt.ee', status: 'live' },
  { title: 'Air Seal', description: 'Premium tire sealant for fleets.', url: 'https://www.air-seal.eu', status: 'live' },
  { title: 'Sovereign Systems', description: 'Offline-first personal AI for preparedness.', url: 'https://svgnsystems.com', status: 'live' },
  { title: 'PEP Checker', description: 'Verification tool for politically exposed persons.', url: 'https://www.pepchecker.com', status: 'exited' },
  { title: 'Serenity Platform', description: "Estonia's largest mental health counseling platform. Grew to 100+ specialists.", status: 'exited' },
  { title: 'DataMe', description: "Estonia's first credit bureau.", status: 'exited' },
  { title: 'Sentimental App', description: 'AI-powered sentiment analysis and journaling.', url: 'https://www.sentimentalapp.com', status: 'archived' },
  {
    title: 'Vabaks',
    description: 'A bold move to liberate pension funds ahead of time.',
    note: 'A story of regulatory rebellion. Detainment, silence, and no guilt admission. For those who understand.',
    status: 'archived',
  },
];

function StatusTag({ status }: { status: Status }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm text-[#55657A] whitespace-nowrap">
      <span className={`h-2 w-2 rounded-full ${statusDot[status]}`} aria-hidden="true" />
      {statusLabel[status]}
    </span>
  );
}

function Shot({ project, className = '' }: { project: Project; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl bg-[#EEF2F6] ring-1 ring-[#0B2239]/10 ${className}`}>
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.015] motion-reduce:transition-none"
      />
    </div>
  );
}

function Wrap({ project, className, children }: { project: Project; className?: string; children: React.ReactNode }) {
  return project.url ? (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className={`group block ${className ?? ''}`}>
      {children}
    </a>
  ) : (
    <div className={`group ${className ?? ''}`}>{children}</div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-[#0B2239]">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <header className="flex items-center justify-between py-7">
          <span className="text-lg font-semibold tracking-tight">Epic Ship</span>
          <a href="mailto:ship@epicship.ee" className="link text-sm sm:text-base">
            ship@epicship.ee
          </a>
        </header>

        <main>
          <section className="pt-14 pb-20 sm:pt-24 sm:pb-28">
            <h1 className="hero max-w-[12ch] font-semibold">I build and ship digital products.</h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#55657A] sm:text-xl">
              Marko Vaik, founder in Tallinn. For about a decade I have started companies in fintech,
              mental health and community software. Today they live under Epic Ship OÜ.
            </p>
          </section>

          <section aria-labelledby="work">
            <h2 id="work" className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Selected work
            </h2>

            <Wrap project={lead} className="mt-8 grid items-center gap-8 rounded-2xl bg-[#F3F6F9] p-6 sm:p-10 lg:grid-cols-[5fr_7fr]">
              <div>
                <StatusTag status={lead.status} />
                <h3 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{lead.title}</h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-[#3A4B60]">{lead.description}</p>
                <p className="link mt-6 inline-block text-base">klaariks.ee</p>
              </div>
              <Shot project={lead} className="aspect-[16/10] bg-white" />
            </Wrap>

            <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2">
              {featured.map((p) => (
                <Wrap key={p.title} project={p}>
                  <Shot project={p} className="aspect-[16/10]" />
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <h3 className="text-2xl font-semibold tracking-tight">{p.title}</h3>
                    <StatusTag status={p.status} />
                  </div>
                  <p className="mt-2 max-w-md leading-relaxed text-[#55657A]">{p.description}</p>
                </Wrap>
              ))}
            </div>
          </section>

          <section aria-labelledby="more" className="mt-24 sm:mt-32">
            <h2 id="more" className="text-2xl font-semibold tracking-tight sm:text-3xl">
              More products, past and present
            </h2>
            <ul className="mt-8 border-t border-[#0B2239]/15">
              {more.map((p) => (
                <li key={p.title} className="border-b border-[#0B2239]/15">
                  <Wrap
                    project={p}
                    className="grid gap-x-8 gap-y-1 py-5 sm:grid-cols-[14rem_1fr_auto] sm:items-baseline"
                  >
                    <span className={`text-lg font-semibold tracking-tight ${p.url ? 'row-link' : ''}`}>{p.title}</span>
                    <span className="text-[#55657A]">
                      {p.description}
                      {p.note && <span className="mt-1 block text-sm italic text-[#7C8A9A]">{p.note}</span>}
                    </span>
                    <StatusTag status={p.status} />
                  </Wrap>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="contact" className="mt-24 rounded-2xl bg-[#0B2239] px-6 py-12 text-white sm:mt-32 sm:px-12 sm:py-16">
            <h2 id="contact" className="max-w-[18ch] text-3xl font-semibold tracking-tight sm:text-5xl sm:leading-[1.05]">
              Building something meaningful? Let's talk.
            </h2>
            <div className="mt-8 flex flex-col gap-3 text-lg sm:flex-row sm:gap-10">
              <a href="mailto:ship@epicship.ee" className="link-light">ship@epicship.ee</a>
              <a href="tel:+37256805509" className="link-light">+372 5680 5509</a>
            </div>
          </section>
        </main>

        <footer className="flex flex-col gap-1 py-10 text-sm text-[#55657A] sm:flex-row sm:justify-between">
          <span>Epic Ship OÜ, registry code 14713548</span>
          <span>© {new Date().getFullYear()} Marko Vaik</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
