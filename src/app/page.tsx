import Header from "~/components/header";
import Image from "next/image";


export default function HomePage() {
  return (
    <main className="h-screen bg-[url('/assets/Banner_do_site.png')] bg-cover bg-center bg-no-repeat text-white">
      <Header />

      {/* PRIMEIRA DOBRA – rapaz + texto, ocupando 100% da altura da tela */}
      <section className="flex max-h-screen items-center justify-between px-8 md:px-16">
        {/* Coluna esquerda: imagem do rapaz usando Next/Image */}
        <div className="flex-1 flex items-end">
          <div className="relative w-full max-w-[440px] aspect-[4/5]">
            <Image
              src="/assets/Photo-pilotando-drone.png"
              alt="Piloto de drone em evento"
              fill
              className="object-contain object-left-bottom"
              priority
            />
          </div>
        </div>

        {/* Coluna direita: texto / conteúdo da hero */}
        <div className="flex flex-col items-start pr-[10%]   justify-start">
          <h1 className="font-heading text-[10rem]  font-extrabold tracking-wider">Rewel</h1>

            <h2 className="font-heading text-6xl w-full text-right font-extrabold text-cyan-400">
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