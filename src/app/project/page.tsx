import Link from "next/link";
import Header from "~/components/header";

type ProjectEntry = {
  title: string;
  client: string;
  description: string;
  tags: string[];
  thumbnail?: string;
  videoUrl?: string;
};

type TimelineYear = {
  year: string;
  highlight: string;
  projects: ProjectEntry[];
};

const timeline: TimelineYear[] = [
  {
    year: "2024",
    highlight: "Documentando grandes eventos e campanhas com storytelling emocional.",
    projects: [
      {
        title: "Festival Pulsar",
        client: "Secretaria de Cultura",
        description:
          "Cobertura completa em tres dias com entregas diarias para redes sociais, incluindo video hero e versoes verticais.",
        tags: ["eventos", "cobertura", "motion"],
        thumbnail: "/assets/projects/pulsar.jpg",
        videoUrl: "https://vimeo.com/placeholder",
      },
      {
        title: "Campanha MOVE",
        client: "Studio26 Fitness",
        description:
          "Serie de videos curtos com atletas reais, explorando luz dramatica e ritmo acelerado para lancamento de colecao.",
        tags: ["comercial", "campanha", "atletas"],
        thumbnail: "/assets/projects/move.jpg",
      },
    ],
  },
  {
    year: "2023",
    highlight: "Expansao para videoclipes autorais e films de marca com narrativas curtas.",
    projects: [
      {
        title: "Videoclipe Horizonte",
        client: "Banda Aurora",
        description:
          "Construcao visual retro futurista combinando LED walls, FX praticos e fotografia noturna.",
        tags: ["videoclipe", "direcao", "fx"],
        thumbnail: "/assets/projects/horizonte.jpg",
      },
      {
        title: "Manifesto Vida Leve",
        client: "Natura",
        description:
          "Mini doc em tres capitulos sobre bem estar, com depoimentos intimos e cenas captadas em locacoes externas.",
        tags: ["mini doc", "lifestyle", "marcas"],
        videoUrl: "https://youtube.com/placeholder",
      },
    ],
  },
  {
    year: "2022",
    highlight: "Consolidacao da estetica autoral e construcao de workflow remoto.",
    projects: [
      {
        title: "Roadtrip Brasil 3.000 km",
        client: "Red Bull",
        description:
          "Serie documental curta acompanhando atletas em uma expedicao pelo litoral brasileiro.",
        tags: ["documental", "aventura", "drone"],
      },
      {
        title: "Campanha Celebrate",
        client: "Chandon",
        description:
          "Pecas verticais e horizontais para redes sociais, com foco em lifestyle premium e slow motion.",
        tags: ["campanha", "slow motion", "lifestyle"],
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0F1117] text-white">
      <Header />

      <section className="container mx-auto flex max-w-6xl flex-col gap-14 px-6 py-16">
        <header className="space-y-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            Projetos e Timeline
          </span>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Cada projeto e um frame da minha trajetoria.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Aqui voce encontra uma linha do tempo com os trabalhos que marcaram minha evolucao como videomaker. De campanhas
            publicitarias a videoclipes, cada producao fortaleceu minha identidade visual e a dos meus parceiros.
          </p>
        </header>

        <section className="space-y-12">
          {timeline.map((segment) => (
            <article
              key={segment.year}
              className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl lg:grid-cols-[0.35fr_1fr]"
            >
              <aside className="flex flex-col gap-4">
                <span className="text-sm font-semibold uppercase tracking-[0.4em] text-white/40">{segment.year}</span>
                <p className="text-white/80">{segment.highlight}</p>
                <div className="h-px bg-white/10" />
              </aside>

              <div className="space-y-6">
                {segment.projects.map((project) => (
                  <div
                    key={`${segment.year}-${project.title}`}
                    className="grid gap-4 rounded-2xl bg-black/30 p-5 lg:grid-cols-[minmax(0,1fr)_1.2fr] lg:gap-6"
                  >
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
                        <p className="text-sm uppercase tracking-[0.2em] text-white/50">{project.client}</p>
                      </div>
                      <p className="text-sm text-white/70">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-wide text-white/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {(project.videoUrl && project.thumbnail) && (
                        <div className="flex flex-wrap gap-3">
                          {project.videoUrl && (
                            <Link
                              href={project.videoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-md border border-white/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
                            >
                              assistir
                            </Link>
                          )}
                          {project.thumbnail && (
                            <Link
                              href={project.thumbnail}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-md border border-white/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
                            >
                              ver fotos
                            </Link>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="relative hidden overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-inner lg:block">
                      {project.thumbnail ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={project.thumbnail} alt={project.title} className="h-full w-full object-cover opacity-90" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-sm uppercase tracking-[0.4em] text-white/20">
                          Visual em breve
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#5626c5]/30 to-[#2630f1]/30 p-10 text-center shadow-xl">
          <h2 className="text-3xl font-bold">Quer ver algo especifico?</h2>
          <p className="mt-4 text-white/75">
            Posso compartilhar rolos completos, breakdown tecnico ou bastidores dos projetos que voce quiser.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contato"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#0F1117] transition hover:bg-white/90"
            >
              Selecionar projetos juntos
            </Link>
            <Link
              href="mailto:contato@rewelproducoes.com"
              className="rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              contato@rewelproducoes.com
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
