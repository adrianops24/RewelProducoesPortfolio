import Link from "next/link";

const cn = (...classes: Array<string | undefined | false | null>) => classes.filter(Boolean).join(" ");

export type ProjectStyles = Partial<{
  card: string;
  textWrap: string;
  title: string;
  client: string;
  description: string;
  tagsWrap: string;
  tag: string;
  actionsWrap: string;
  actionLink: string;
  mediaWrap: string;
  iframe: string;
  image: string;
  placeholder: string;
}>;

export type SegmentStyles = Partial<{
  container: string;
  aside: string;
  categoria: string;
  highlight: string;
  divider: string;
  projectsWrap: string;
}>;

export type ProjectEntry = {
  title: string;
  client: string;
  description: string;
  tags: string[];
  thumbnail?: string;
  videoUrl?: string;
  styles?: ProjectStyles; // <- por card (mais específico)
};

export type TimelineSegmentData = {
  categoria: string;
  highlight: string;
  projects: ProjectEntry[];
  segmentBorderClassName?: string; // compat
  tagBorderClassName?: string; // compat
  styles?: SegmentStyles; // <- por seção
  projectStyles?: ProjectStyles; // <- default pros cards da seção
};

const defaultSegmentStyles: Required<SegmentStyles> = {
  container: "grid gap-8 rounded-3xl border bg-white/5 p-6 shadow-xl lg:grid-cols-[0.35fr_1fr]",
  aside: "flex flex-col gap-4",
  categoria: "text-sm font-semibold uppercase tracking-[0.4em] text-white/40",
  highlight: "text-white/80",
  divider: "h-px bg-white/10",
  projectsWrap: "space-y-6",
};

const defaultProjectStyles: Required<ProjectStyles> = {
  card: "grid gap-4 rounded-2xl bg-black/30 p-5 lg:grid-cols-[minmax(0,1fr)_1.2fr] lg:gap-6",
  textWrap: "space-y-3",
  title: "text-2xl font-semibold text-white",
  client: "text-sm uppercase tracking-[0.2em] text-white/50",
  description: "text-sm text-white/70",
  tagsWrap: "flex flex-wrap gap-2",
  tag: "rounded-full border px-3 py-1 text-xs uppercase tracking-wide text-white/60",
  actionsWrap: "flex flex-wrap gap-3",
  actionLink:
    "rounded-md border border-white/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10",
  mediaWrap:
    "relative hidden aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-inner lg:block",
  iframe: "h-1/2 w-full",
  image: "h-full w-full object-cover opacity-90",
  placeholder: "flex h-full w-full items-center justify-center text-sm uppercase tracking-[0.4em] text-white/20",
};

export const getEmbedUrl = (url: string): string | null => {
  try {
    const normalized = url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
    const u = new URL(normalized);

    const host = u.hostname.replace(/^www\./, "");
    const pathParts = u.pathname.split("/").filter(Boolean);

    if (host === "youtube.com" || host === "m.youtube.com" || host === "music.youtube.com") {
      const v = u.searchParams.get("v");
      if (v) return `https://www.youtube.com/embed/${v}`;
      if (pathParts[0] === "embed" && pathParts[1]) return `https://www.youtube.com/embed/${pathParts[1]}`;
      if (pathParts[0] === "shorts" && pathParts[1]) return `https://www.youtube.com/embed/${pathParts[1]}`;
      if (pathParts[0]) return `https://www.youtube.com/embed/${pathParts[0]}`;
      return null;
    }

    if (host === "youtu.be") {
      const id = pathParts[0];
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    if (host === "vimeo.com" || host === "player.vimeo.com") {
      const id = host === "player.vimeo.com" && pathParts[0] === "video" ? pathParts[1] : pathParts[0];
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }

    if (u.pathname.includes("embed") || host.startsWith("player.")) return normalized;

    return null;
  } catch {
    return null;
  }
};

export const ProjectsIntro = () => {
  return (
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
  );
};

export const ProjectsTimeline = ({ timeline }: { timeline: TimelineSegmentData[] }) => {
  return (
    <section className="space-y-12">
      {timeline.map((segment) => (
        <TimelineSegment key={segment.categoria} segment={segment} />
      ))}
    </section>
  );
};

export const TimelineSegment = ({ segment }: { segment: TimelineSegmentData }) => {
  const segmentBorder = segment.segmentBorderClassName ?? "border-white/10";
  const tagBorder = segment.tagBorderClassName ?? "border-white/20";

  const segStyles: Required<SegmentStyles> = {
    ...defaultSegmentStyles,
    ...(segment.styles ?? {}),
  };

  const isInstagram = segment.categoria.trim().toLowerCase() === "instagram";

  // Se for Instagram, por padrão deixa as “grades” na horizontal (lado a lado).
  // Se você definir segment.styles.projectsWrap, ele sobrescreve.
  const projectsWrapClassName =
    segment.styles?.projectsWrap ?? (isInstagram ? "grid gap-6 md:grid-cols-2" : segStyles.projectsWrap);

  return (
    <article className={cn(segStyles.container, segmentBorder)}>
      <aside className={segStyles.aside}>
        <span className={segStyles.categoria}>{segment.categoria}</span>
        <p className={segStyles.highlight}>{segment.highlight}</p>
        <div className={segStyles.divider} />
      </aside>

      <div className={projectsWrapClassName}>
        {segment.projects.map((project) => (
          <ProjectCard
            key={`${segment.categoria}-${project.title}`}
            project={project}
            tagBorderClassName={tagBorder}
            segmentProjectStyles={segment.projectStyles}
          />
        ))}
      </div>
    </article>
  );
};

export const ProjectCard = ({
  project,
  tagBorderClassName,
  segmentProjectStyles,
}: {
  project: ProjectEntry;
  tagBorderClassName: string;
  segmentProjectStyles?: ProjectStyles;
}) => {
  const embedSrc = project.videoUrl ? getEmbedUrl(project.videoUrl) : null;

  const styles: Required<ProjectStyles> = {
    ...defaultProjectStyles,
    ...(segmentProjectStyles ?? {}),
    ...(project.styles ?? {}),
  };

  return (
    <div className={styles.card}>
      <div className={styles.textWrap}>
        <div className="space-y-1">
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.client}>{project.client}</p>
        </div>

        <p className={styles.description}>{project.description}</p>

        <div className={styles.tagsWrap}>
          {project.tags.map((tag) => (
            <span key={tag} className={cn(styles.tag, tagBorderClassName)}>
              {tag}
            </span>
          ))}
        </div>

        {(project.videoUrl || project.thumbnail) && (
          <div className={styles.actionsWrap}>
            {project.videoUrl && (
              <Link
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionLink}
              >
                assistir
              </Link>
            )}
            {project.thumbnail && (
              <Link
                href={project.thumbnail}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionLink}
              >
                ver fotos
              </Link>
            )}
          </div>
        )}
      </div>

      <div className={styles.mediaWrap}>
        {embedSrc ? (
          <iframe
            className={styles.iframe}
            src={embedSrc}
            title={`Vídeo - ${project.title}`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : project.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.thumbnail} alt={project.title} className={styles.image} />
        ) : (
          <div className={styles.placeholder}>Visual em breve</div>
        )}
      </div>
    </div>
  );
};
