import React from "react";
import filmGrain from "/assets/filmGrain.svg";

function Home() {
  return (
    <>
      <section
        id="hero-section"
        className="fixed grid h-[85vh] w-full snap-center grid-cols-12 items-center justify-center"
      >
        <div
          id="hero"
          className="col-span-5 flex h-full w-full flex-col justify-center"
        >
          <h1 className="font-head text-dominoivory text-right text-[6.5vw] leading-none uppercase">
            Jordan
            <br /> Keller
          </h1>
          <h2 className="font-head text-dominoivory inline-block text-right text-[3vw] leading-none uppercase">
            Storyteller
            <br />
            Producer
            <br />
            Director
          </h2>
        </div>

        <div className="align-items-right col-span-7 flex flex-col justify-center">
          <img
            id="hero-image"
            src="/hero/hero-image.jpg"
            alt="Jordan Keller: Huge Dweeb"
            className="mask-r-from-70% mask-b-from-80% mask-radial-from-40% mask-radial-to-90% object-contain"
          />
        </div>
        <div className="absolute flex h-full w-full rotate-30 transform items-center justify-center object-contain md:-translate-x-[4vw] md:translate-y-[13vh] lg:-translate-x-[4vw] lg:translate-y-[32vh]">
          <img
            id="huge-creative-dweeb"
            src="/hero/huge-creative-dweeb.png"
            alt="Huge Creative Dweeb"
            className="sm:w-45 md:w-45 lg:w-80"
          />
        </div>
      </section>
    </>
  );
}

export default Home;
