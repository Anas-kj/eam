"use client";
import wind from "../../public/wind.jpg";
import Image from "next/image";
import { ButtonSecondary } from "./components/Button/ButtonSecondary";

export default function Home() {

  return (
    <main>
      <section className="relative "> {/* hero section */}
        <Image src={wind} alt="wind turbine" className="w-full"/>
        {/* <h1 className="absolute top-1/2 text-3xl font-bold ">Protecting the Environment for a Sustainable Future</h1>
        <p className="absolute top-60">EAM is committed to environmental protection, providing impactful solutions for a greener world.</p> */}
      </section>

      <section className="flex flex-col gap-4 lg:flex-row  items-center py-6"> {/* about section */}
        <Image src={wind} alt="wind turbine" className="w-2/3 rounded-lg lg:w-1/2"/>
        <div className="flex flex-col text-center p-6 max-w-full">
            <h2 className="text-3xl text-bold">
              Experience 26+ years of leading the environment industry
            </h2>
            <p className="text-md text-center">
            At EAM, we have built a strong reputation based on our extensive 
            experience in the environmental sector. With over 25 years of 
            industry-leading expertise, we are the go-to company for all your environmental needs.
            </p>
            <ButtonSecondary/>
        </div>
        
      </section>

    </main>
  );
}
