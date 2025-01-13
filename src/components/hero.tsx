import type { StaticImageData } from "next/image";
import Image from "next/image";

type HeroProps = {
  imageData: StaticImageData;
  alt: string;
  title: string;
};

import React from "react";

const Hero: React.FC<HeroProps> = ({ imageData, alt, title }) => {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image src={imageData} fill alt={alt} style={{ objectFit: "cover" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900"/>
      </div>
      <div className="flex items-center justify-center pt-64">
        <h1 className="font-bold text-6xl">{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
