import Header from "~/components/header";
import Image from "next/image";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-[url('/assets/Banner_do_site.png')] bg-cover bg-center bg-no-repeat text-white">
      <Header />

      {/* PRIMEIRA DOBRA – responsiva (coluna no mobile, linha no desktop) */}
      <section className="relative flex h-[120svh] flex-row justify-end overflow-hidden md:h-auto md:flex-row md:items-center md:justify-between md:gap-10 md:overflow-visible md:px-20 md:py-0">
        {/* Coluna esquerda: imagem */}
        <div className="absolute inset-0 flex items-end justify-center md:static md:w-full md:flex-1 md:justify-start">
          <div className="relative h-full w-full md:h-auto md:max-w-[540px] md:aspect-[4/5]">
            <Image
              src="/assets/Photo-pilotando-drone.png"
              alt="Piloto de drone em evento"
              fill
              className="object-contain object-bottom md:object-left-bottom"
              priority
            />
          </div>
        </div>

        {/* Coluna direita: texto / conteúdo da hero */}
        <div className="relative z-10 flex w-full flex-col items-center justify-start px-6 pb-6 pt-10 sm:px-8 md:w-auto md:items-start md:px-0 md:py-0 md:pr-[10%]">
          <h1 className="font-heading text-8xl font-extrabold leading-none tracking-wider sm:text-9xl md:text-8xl lg:text-[10rem]">Rewel</h1>

          <h2 className="mt-4 w-full text-center font-heading text-5xl font-extrabold text-cyan-400 sm:text-5xl md:mt-0 md:text-right md:text-8xl lg:text-6xl">
            Produções
            <br />
            digitais
          </h2>
        </div>
      </section>

      {/* CONTEÚDO ABAIXO – sem o rapaz no fundo */}
     
    </main>
  );
}