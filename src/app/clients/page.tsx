import Link from "next/link";
import Header from "~/components/header";

type ClientLogo = {
	name: string;
	logo: string;
};

type CaseStudy = {
	title: string;
	client: string;
	summary: string;
	impact: string;
	services: string[];
	thumbnail?: string;
};

type Testimonial = {
	name: string;
	role: string;
	company: string;
	quote: string;
};

const featuredLogos: ClientLogo[] = [
	{ name: "Pulse Festival", logo: "/assets/clients/pulse.svg" },
	{ name: "Studio26", logo: "/assets/clients/studio26.svg" },
	{ name: "Aurora Records", logo: "/assets/clients/aurora.svg" },
	{ name: "Natura", logo: "/assets/clients/natura.svg" },
	{ name: "Red Bull", logo: "/assets/clients/redbull.svg" },
	{ name: "Chandon", logo: "/assets/clients/chandon.svg" },
];

const caseStudies: CaseStudy[] = [
	{
		title: "Festival Pulsar 2024",
		client: "Secretaria de Cultura",
		summary:
			"Cobertura completa do festival com foco em emocao nas entregas diarias para redes sociais.",
		impact: "+6M de visualizacoes e retorno de midia espontanea em 72h.",
		services: ["planejamento", "captacao", "edicao express"],
		thumbnail: "/assets/projects/pulsar.jpg",
	},
	{
		title: "Campanha MOVE",
		client: "Studio26 Fitness",
		summary: "Serie de videos curtos que aproximou a marca da comunidade de atletas locais.",
		impact: "+140% em engajamento e aumento de matrículas no primeiro mes.",
		services: ["direcao", "motion", "versoes verticais"],
		thumbnail: "/assets/projects/move.jpg",
	},
	{
		title: "Manifesto Vida Leve",
		client: "Natura",
		summary: "Mini doc em tres capitulos com depoimentos reais sobre autocuidado.",
		impact: "Conteudo base para campanha de lancamento em 5 paises.",
		services: ["documental", "sound design", "color"],
	},
];

const testimonials: Testimonial[] = [
	{
		name: "Laura Martins",
		role: "Head de Marketing",
		company: "Studio26 Fitness",
		quote:
			"Transformaram uma estrategia ousada em conteudo que fez nossa comunidade vibrar. Agilidade e cuidado em cada entrega.",
	},
	{
		name: "Carlos Nunes",
		role: "Diretor",
		company: "Festival Pulsar",
		quote:
			"Equipe discreta, criativa e com olhar cinematografico. O festival ganhou uma narrativa a altura do palco.",
	},
	{
		name: "Helena Souza",
		role: "Gerente de Marca",
		company: "Natura",
		quote:
			"Desde a pre producao ate a color final, sentimos parceria real. Entregas alinhadas com o DNA da marca.",
	},
];

export default function ClientsPage() {
	return (
		<main className="min-h-screen bg-[#0F1117] text-white">
			<Header />

			<section className="container mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16">
				<header className="space-y-6 text-center">
					<span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
						Clientes
					</span>
					<h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
						Relacoes longas começam com confiança no set.
					</h1>
					<p className="mx-auto max-w-2xl text-lg text-white/70">
						Do briefing ao ultimo frame, criamos experiencias audiovisuais que elevam marcas e artistas. Veja quem ja confiou e como entregamos resultado.
					</p>
				</header>

				<section className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl">
					<h2 className="text-xl font-semibold uppercase tracking-[0.3em] text-white/60">Confiam na producao</h2>
					<div className="mt-8 grid grid-cols-2 gap-6 text-center text-white/60 sm:grid-cols-3 md:grid-cols-6">
						{featuredLogos.map((logo) => (
							<div key={logo.name} className="rounded-2xl bg-black/20 py-6 text-sm font-semibold uppercase tracking-wide">
								{logo.name}
							</div>
						))}
					</div>
					<p className="mt-6 text-sm text-white/50">
						*Logos ilustrativos. Substitua pelos parceiros reais ou links para cases.
					</p>
				</section>

				<section className="space-y-8">
					<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold">Cases em foco</h2>
							<p className="text-white/70">
								Projetos Selecionados que combinaram storytelling, ritmo e entrega rapida.
							</p>
						</div>
						<Link
							href="/project"
							className="rounded-md border border-white/30 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
						>
							Ver todos os projetos
						</Link>
					</div>

					<div className="grid gap-6 lg:grid-cols-3">
						{caseStudies.map((item) => (
							<article key={item.title} className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
								<div className="space-y-4">
									<span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">{item.client}</span>
									<h3 className="text-2xl font-semibold text-white">{item.title}</h3>
									<p className="text-sm text-white/70">{item.summary}</p>
									<p className="text-sm font-semibold text-white/80">{item.impact}</p>
									<div className="flex flex-wrap gap-2">
										{item.services.map((service) => (
											<span
												key={service}
												className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-wide text-white/60"
											>
												{service}
											</span>
										))}
									</div>
								</div>

								{item.thumbnail ? (
									<div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
										{/* Substitua por <Image> se preferir usar assets reais */}
										<div className="aspect-video w-full bg-gradient-to-br from-white/5 to-white/10" />
									</div>
								) : (
									<div className="mt-6 flex aspect-video items-center justify-center rounded-2xl border border-dashed border-white/20 text-xs uppercase tracking-[0.3em] text-white/30">
										Visual em breve
									</div>
								)}
							</article>
						))}
					</div>
				</section>

				<section className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl">
					<h2 className="text-3xl font-bold text-white">O que os clientes dizem</h2>
					<div className="mt-8 grid gap-6 lg:grid-cols-3">
						{testimonials.map((item) => (
							<blockquote key={item.name} className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-black/30 p-6">
								<p className="text-sm text-white/70">“{item.quote}”</p>
								<footer className="mt-6 text-sm text-white/60">
									<div className="font-semibold text-white">{item.name}</div>
									<div>
										{item.role} · {item.company}
									</div>
								</footer>
							</blockquote>
						))}
					</div>
				</section>

				<section className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#5626c5]/30 to-[#2630f1]/30 p-10 text-center shadow-xl">
					<h2 className="text-3xl font-bold">Vamos construir o proximo projeto?</h2>
					<p className="mt-4 text-white/75">
						Conte sua ideia, prazo e referencias. Montamos uma proposta completa em ate 48 horas uteis.
					</p>
					<div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
						<Link
							href="mailto:contato@rewelproducoes.com"
							className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#0F1117] transition hover:bg-white/90"
						>
							Enviar briefing
						</Link>
						<Link
							href="/agenda"
							className="rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
						>
							Agendar call
						</Link>
					</div>
				</section>
			</section>
		</main>
	);
}
