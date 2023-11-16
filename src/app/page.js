import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-background2">
      <section id="who" className="h-screen">
        <div className="hero grid md:grid-cols-2">
          <div>
            <h1 className="text-lg font-bold mt-2 ml-2 text-text1">
              Luis Matus
            </h1>
          </div>
          <Hero />
        </div>
      </section>
      <section id="projects" className="">
        <div className="container md:grid md:grid-cols-2">
          <div>
            <h1>Beachy Nicaragua</h1>
          </div>
          <div>
            <p>
              Desarrollo de aplicación web para compra y venta de vestimentas
              importadas a Nicaragua
            </p>
          </div>
          <div>
            <h1>Rally Latinoamericano</h1>
          </div>
          <div>
            <p>
              Ganador de 1er lugar en categoría de impacto social con grupo
              multi disciplinario con proyecto en desafío "Movilidad
              sustentable"
            </p>
          </div>
        </div>
      </section>
      <section id="contact"></section>
    </main>
  );
}
