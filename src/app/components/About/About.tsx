"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function AboutUs() {
  const ref = useRef<HTMLDivElement>(null);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top } = ref.current.getBoundingClientRect();
        const index = Math.min(Math.floor((window.innerHeight - top) / 200), 2);
        setTextIndex(index);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={ref} className="flex h-[100vh] relative overflow-hidden">
      <div className="w-1/2 flex flex-col p-10 space-y-10">
        {["Welcome to Our JourneyWelcome to Our JourneyWelcome to Our JourneyWelcome to Our JourneyWelcome to Our Journey", "Our MissioWelcome to Our JourneyWelcome to Our JourneyWelcome to Our Journeyn", "TEAMTEAMTEAMTEAMTEAMTEAMTEAMTEAM"].map((text, index) => (
          <div
            key={index}
            className={`text-xl transition-opacity duration-500 ${index === textIndex ? "opacity-100" : "opacity-0"}`}
          >
            {text}
          </div>
        ))}
      </div>
    </section>
  );
}
