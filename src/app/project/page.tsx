import Link from "next/link";
import { ProjectsIntro, ProjectsTimeline, type TimelineSegmentData } from "~/components/projects/ProjectsTimeline";

const timeline: TimelineSegmentData[] = [
  {
    categoria: "Instagram",
    highlight: "Documentando grandes eventos e campanhas com storytelling emocional.",
    segmentBorderClassName: "border-white/10",
    tagBorderClassName: "border-white/20",
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
    categoria: "Cobertura de eventos",
    highlight: "Expansao para videoclipes autorais e films de marca com narrativas curtas.",
    segmentBorderClassName: "border-red-600",
    tagBorderClassName: "border-red-500",
    projects: [
      {
        title: "Videoclipe Horizonte",
        client: "Banda Aurora",
        description:
          "Construcao visual retro futurista combinando LED walls, FX praticos e fotografia noturna.",
        tags: ["videoclipe", "direcao", "fx"],
        thumbnail:
          "https://istoe.com.br/wp-content/uploads/2020/12/73.jpg?ims=1179x663/filters:quality(85)",
      },
      {
        title: "Manifesto Vida Leve",
        client: "Natura",
        description:
          "Mini doc em tres capitulos sobre bem estar, com depoimentos intimos e cenas captadas em locacoes externas.",
        tags: ["mini doc", "lifestyle", "marcas"],
        videoUrl: "https://www.youtube.com/watch?v=BXIt8Dz8lgA",
      },
    ],
  },
  {
    categoria: "podcasts",
    highlight: "Consolidacao da estetica autoral e construcao de workflow remoto.",
    segmentBorderClassName: "border-emerald-500/60",
    tagBorderClassName: "border-emerald-400/60",
    projects: [
      {
        title: "Roadtrip Brasil 3.000 km",
        client: "Red Bull",
        description:
          "Roadtrip Brasil 3.000 km — filme de viagem e aventura. Assista no link.",
        tags: ["filme", "roadtrip", "brand film"],
        videoUrl: "https://www.youtube.com/watch?v=BXIt8Dz8lgA",
        thumbnail:
          "https://istoe.com.br/wp-content/uploads/2020/12/73.jpg?ims=1179x663/filters:quality(85)",
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
      <section className="container mx-auto flex max-w-6xl flex-col gap-14 px-6 py-16">
        <ProjectsIntro />

        <ProjectsTimeline timeline={timeline} />

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
