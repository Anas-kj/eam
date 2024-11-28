"use client";
import { useEffect } from "react";
import wind from "../../public/wind.jpg";
import Image from "next/image";
// import ScrollReveal from '@types/scrollreveal';
import { ButtonSecondary } from "./components/Button/ButtonSecondary";
import ScrollingLogos from "./components/ScrollingLogos/ScrollingLogos";
import Link from "next/link";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import { Experience } from "./components/Experience/Experience";
import { SectionHeading } from "./components/Experience/section-heading";

export default function Home() {

  return (
    <main>
      <Hero/>
      <section className="flex flex-col gap-4 lg:flex-row  items-center lg:mx-auto py-6 lg:h-[90vh]"> {/* about section */}
      <div className="lg:grid lg:grid-cols-2 lg:items-center p-6 lg:p-12">
        <Image src={wind} alt="wind turbine" className="w-2/3 rounded-xl lg:w-[350px] lg:h-[350px] mx-auto shadow-2xl"/>
        <div className="flex flex-col text-center p-6 max-w-full mx-auto">
            <h2 className="text-3xl text-bold lg:text-start font-bricolage">
              Experience 26+ years of leading the environment industry
            </h2>
            <p className="text-md text-center lg:text-start mt-4">
            At EAM, we have built a strong reputation based on our extensive 
            experience in the environmental sector. With over 25 years of 
            industry-leading expertise, we are the go-to company for all your environmental needs.
            </p>
            <Link href="/about" className="mt-7">{/*Add more context for better UX*/}
                <ButtonSecondary/>
            </Link>
        </div>
      </div>
       
        
      </section>
      <div className="grid text-center place-content-center overflow-hidden gap-[var(--gap)] w-full min-h-[90vh] font-sans text-base leading-6 text-[var(--color-text)] bg-[var(--color-bg)]">
          <SectionHeading
            heading="Our Partners"
            content="United with our esteemed global partners, EAM is shaping the future of Environment."
          />
          <ScrollingLogos/>
      </div>

      
      <div className="">
        <Experience/>
      </div>
        {/* <div className="h-[100vh] py-6">
            <Card/>
        </div> */}
    </main>
  );
}
