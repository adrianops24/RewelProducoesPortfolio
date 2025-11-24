import Link from "next/link";
import Header from "~/components/header";

const stats = [
  { label: "Anos capturando histórias", value: "8+" },
  { label: "Projetos concluídos", value: "120" },
  { label: "Clientes satisfeitos", value: "75" },
  { label: "Prêmios e reconhecimentos", value: "11" },
];

const services = [
  {
    title: "Filmes Comerciais",
    description:
      "Roteiro, direção e captação para marcas que precisam emocionar e converter.",
  },
  {
    title: "Eventos & Coberturas",
    description:
      "Registros cinematográficos que eternizam momentos corporativos e sociais.",
  },
  {
    title: "Videoclipes e Conteúdo Artístico",
    description:
      "Narrativas ousadas para artistas que querem transformar música em experiência visual.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Briefing & Conceito",
    details:
      "Tradução da identidade da marca para um roteiro que conversa com o público certo.",
  },
  {
    step: "02",
    title: "Produção & Captação",
    details:
      "Equipe enxuta, equipamentos cine e direção focada em performance e storytelling.",
  },
  {
    step: "03",
    title: "Pós & Entrega",
    details:
      "Edição, color grading, motion e versões otimizadas para cada plataforma.",
  },
];

const clients = ["Red Bull", "Adidas", "Warner Music", "Senai", "Porto Seguro", "Natura"];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0F1117] text-white">
      <Header />

      <section className="container mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Sobre Mim
            </span>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              Transformo visões em filmes que conectam marcas e pessoas.
            </h1>
            <p className="text-lg text-white/70">
              Sou um videomaker apaixonado por histórias intensas. Há quase uma década produzo filmes para
              marcas, artistas e eventos que buscam impacto visual e autenticidade. Da pré-produção à
              entrega final, meu foco é criar narrativas que reflitam propósito e provoquem emoção.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projetos"
                className="rounded-md bg-white px-5 py-2 text-sm font-semibold text-[#0F1117] transition hover:bg-white/90"
              >
                Ver Portfólio Completo
              </Link>
              <Link
                href="/contato"
                className="rounded-md border border-white/40 px-5 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Agendar uma chamada
              </Link>
            </div>
          </div>

          <div className="relative h-full w-full">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#5626c5]/40 via-[#2630f1]/30 to-transparent p-8 shadow-xl backdrop-blur">
              <p className="text-lg italic text-white/80">
                “Cada quadro precisa carregar a energia do momento. Meu trabalho é garantir que essa energia
                continue viva em cada vez que você revisitar o filme.”
              </p>
              <div className="mt-6 text-right text-sm uppercase tracking-[0.4em] text-white/50">
                Adriano Rewel — Videomaker
              </div>
            </div>
          </div>
        </div>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <article key={item.label} className="rounded-2xl bg-black/20 p-6 text-center shadow-inner">
              <p className="text-3xl font-bold text-white">{item.value}</p>
              <p className="mt-2 text-sm uppercase tracking-wide text-white/60">{item.label}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">O que eu entrego</h2>
            <p className="text-white/70">
              Do conceito à distribuição, assumo cada etapa com a mesma atenção a detalhes. Essas são as
              frentes onde posso potencializar seu projeto:
            </p>
            <div className="space-y-4">
              {services.map((service) => (
                <article key={service.title} className="rounded-2xl bg-black/30 p-5">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-white/70">{service.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">Workflow cinematográfico</h2>
            <p className="text-white/70">
              Transparência e colaboração em cada estágio garantem que sua visão se mantenha intacta.
            </p>
            <div className="space-y-4">
              {processSteps.map((step) => (
                <article key={step.title} className="flex gap-4 rounded-2xl bg-black/30 p-4">
                  <span className="text-3xl font-black text-white/30">{step.step}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    <p className="text-sm text-white/70">{step.details}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Marcas que já filmaram comigo</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {clients.map((client) => (
              <div
                key={client}
                className="flex h-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-semibold text-white/80"
              >
                {client}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#5626c5]/30 to-[#2630f1]/30 p-10 text-center shadow-xl">
          <h2 className="text-3xl font-bold">Pronto para lançar seu próximo filme?</h2>
          <p className="mt-4 text-white/75">
            Vamos conversar sobre o impacto que você quer causar. Eu cuido da parte visual, você foca na
            mensagem.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contato"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#0F1117] transition hover:bg-white/90"
            >
              Falar sobre meu projeto
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
