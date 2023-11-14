import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-background2 text-whiter">
      <section id="who" className="h-screen">
        <div className="hero grid md:grid-cols-2">
          <div>imagen</div>
          <div>texto</div>
        </div>
      </section>
      <section id="projects" className="">
        <div className="container grid md:grid-cols-2">
          <div>
            P1
          </div>
          <div>
            P1
          </div>
          <div>
            P2
          </div>
          <div>
            P2
          </div>
        </div>
      </section>
      <section id="contact">

      </section>
    </main>
  );
}
