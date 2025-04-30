import React from 'react';
import filmGrain from '/assets/filmGrain.svg';

function Home() {
return (
    
    <section
        id="hero-section"
        className="h-[85vh] w-full grid grid-cols-12 items-center justify-center fixed snap-center">
        <div id="hero" className="w-full h-full flex flex-col col-span-5 justify-center text-right font-head dark:text-dominoivory text-fadedblack">
            <h1 className="uppercase text-8xl">
                Jordan
                <br /> Keller
            </h1>
            <h2 className="uppercase inline-block text-4xl">
                Storyteller<br /> 
                Producer<br /> 
                Director
            </h2>
          
        </div>
        
        <div className="flex flex-col col-span-7 justify-center align-items-right">
       <img
                id="hero-image"
                src="/hero/hero-image.jpg"
                alt="Jordan Keller: Huge Dweeb"
                className="mask-r-from-70% mask-b-from-80% mask-radial-from-40% mask-radial-to-90% object-contain"
            />
         
        </div>
        <div className="absolute object-contain w-full h-full flex items-center justify-center transform -translate-x-45 translate-y-60 rotate-40">
            <img
                id="huge-creative-dweeb"
                src="/hero/huge-creative-dweeb.png"
                alt="Huge Creative Dweeb"
                className="w-60"
            />
        </div>
    </section>


);
}

export default Home;