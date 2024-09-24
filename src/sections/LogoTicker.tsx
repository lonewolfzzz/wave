"use client";
import acmeLogo from "@/assets/blogo-acme.png";
import echoLogo from "@/assets/blogo-echo.png";
import celestialLogo from "@/assets/blogo-celestial.png";
import pulseLogo from "@/assets/blogo-pulse.png";
import apexLogo from "@/assets/blogo-apex.png"; 
import quantumLogo from "@/assets/blogo-logo-quantum.png"; 
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-black">
      <div className="container">
        <div className="flex justify-end overflow-hidden [mask-image:linear-gradient(to_right,transparent,white,transparent)]">
          <motion.div 
            className="flex gap-14 flex-none pr-14" 
            animate={{
              translateX:"50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease:'linear',
              
            }}
          >
            <Image 
              src={acmeLogo} 
              alt="Acme logo" 
              className="logo-ticker-image"
            />
            <Image 
              src={echoLogo} 
              alt="Echo logo" 
              className="logo-ticker-image"
            />
            <Image 
              src={celestialLogo} 
              alt="Celestial logo" 
              className="logo-ticker-image"
            />
            <Image 
              src={pulseLogo} 
              alt="Pulse logo" 
              className="logo-ticker-image"
            />
            <Image 
              src={apexLogo} 
              alt="Apex logo" 
              className="logo-ticker-image"
            />
            <Image 
              src={quantumLogo} 
              alt="Quantum logo" 
              className="logo-ticker-image"
            />

            <Image 
              src={acmeLogo} 
              alt="Acme logo" 
              className="logo-ticker-image"
            />
            <Image 
              src={echoLogo} 
              alt="Echo logo" 
              className="logo-ticker-image"
            />
            <Image 
              src={celestialLogo} 
              alt="Celestial logo" 
              className="logo-ticker-image"
            />
            <Image 
              src={pulseLogo} 
              alt="Pulse logo" 
              className="logo-ticker-image"
            />
            <Image 
              src={apexLogo} 
              alt="Apex logo" 
              className="logo-ticker-image"
            />
            <Image 
              src={quantumLogo} 
              alt="Quantum logo" 
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
        <div className="flex justify-start overflow-hidden [mask-image:linear-gradient(to_left,transparent,white,transparent)] py-4">
          <motion.div 
            className="flex gap-14 flex-none pr-14" 
            animate={{
              translateX:"-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease:'linear',
              repeatType:'loop',
            }}
          >
            <Image 
              src={pulseLogo} 
              alt="Pulse logo" 
              className="logo-ticker-image"
            />
            <Image 
              src={apexLogo} 
              alt="Apex logo" 
              className="logo-ticker-image"
            />
            <Image 
              src={quantumLogo} 
              alt="Quantum logo" 
              className="logo-ticker-image"
            />
            <Image 
              src={acmeLogo} 
              alt="Acme logo" 
              className="logo-ticker-image"
            />
            <Image 
              src={echoLogo} 
              alt="Echo logo" 
              className="logo-ticker-image"
            />
            <Image 
              src={celestialLogo} 
              alt="Celestial logo" 
              className="logo-ticker-image"
            />

            <Image 
              src={pulseLogo} 
              alt="Pulse logo" 
              className="logo-ticker-image"
            />
            <Image 
              src={apexLogo} 
              alt="Apex logo" 
              className="logo-ticker-image"
            />
            <Image 
              src={quantumLogo} 
              alt="Quantum logo" 
              className="logo-ticker-image"
            />
            <Image 
              src={acmeLogo} 
              alt="Acme logo" 
              className="logo-ticker-image"
            />
            <Image 
              src={echoLogo} 
              alt="Echo logo" 
              className="logo-ticker-image"
            />
            <Image 
              src={celestialLogo} 
              alt="Celestial logo" 
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
