"use client";
import { motion } from 'framer-motion';
import ArrowIcon from "@/assets/arrow-right.svg";
import blockImage from "@/assets/18.png";
import starImage from "@/assets/32.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-6 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#371f76,#000_100%)] overflow-x-clip">
      <div className="container ">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <motion.div 
              initial={{ y: 100, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 1, delay: 0.1 }}
              className="text-white text-sm inline-flex border border-white/20 px-3 py-1 rounded-xl tracking-tighter"
            >
              Version 1.0 is Here
            </motion.div>
            <motion.h1 
              initial={{ y: 100, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-purple-800 to-white text-transparent bg-clip-text mt-6"
            >
              Revolutionizing Digital Commerce with Decentralization A.I.
            </motion.h1>
            <motion.p 
              initial={{ y: 100, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl text-white tracking-tight mt-6"
            >
              We've heard exceeding our customers expectations is beyond reach. Instead of reinventing the machine, we've chosen to enhance it.
            </motion.p>
            <motion.div 
              initial={{ y: 100, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 1, delay: 0.9 }}
              className="flex gap-1 text-white items-center mt-[30px]"
            >
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-text flex gap-1 relative learn-more-button">
                <span className="button-text">Learn More</span>
                <ArrowIcon className="h-5 w-5 arrow-icon" />
                <div className="orb"></div>
              </button>
            </motion.div>
          </div>
          <motion.div 
          initial={{ y: 100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.3 }}
            className="mt-20 md:mt-0 md:h-[560px] lg:h-[570px] md:flex-1 relative"
          >
            <motion.div
              initial={{ y: -30 }}
              animate={{ y: [0, 40, 0] }}
              transition={{
                duration: 3, // Slower animation speed
                repeat: Infinity,
                ease: "easeInOut",
                bounce: 0.9, // Higher bounce value
                stiffness: 150, // Adjusted stiffness for a more natural bounce
                damping: 15, // Adjusted damping for a more natural bounce
              }}
              className="md:absolute md:h-full  md:left-6 lg:translate-x-12"
            >
              <Image src={blockImage}  alt="Prisma image"/>
            </motion.div>
            <motion.div
              initial={{ y: -40 }}
              animate={{ y: [0, 50, 0] }}
              transition={{
                duration: 3, // Slower animation speed
                repeat: Infinity,
                ease: "easeInOut",
                bounce: 0.9, // Higher bounce value
                stiffness: 150, // Adjusted stiffness for a more natural bounce
                damping: 15, // Adjusted damping for a more natural bounce
              }}
              className="hidden md:block md:absolute -top-6 lg:left-10"
            >
              <Image src={starImage} width={130} height={130} alt="Cylinder Image" />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        /* Background tombol hitam untuk kontras */
        .learn-more-button {
          position: relative;
          padding: 8px 20px;
          border: 2px solid white;
          border-radius: 9999px;
          background-color: black;
          overflow: hidden;
          z-index: 1;
          transition: background-color 0.4s ease;
          color: white;
        }

        /* Orb mengkilat dan bergerak */
        .learn-more-button .orb {
          position: absolute;
          width: 18px;
          height: 18px;
          background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%);
          border-radius: 50%;
          box-shadow: 0 0 30px 20px rgba(255, 255, 255, 0.8);
          animation: orbMove 6s linear infinite;
          filter: blur(10px);
          transition: opacity 0.5s ease-in-out;
        }

        /* Animasi orb yang bergerak */
        @keyframes orbMove {
          0%, 100% {
            top: 50 %;
            left: 0;
            transform: translateY(-50%) scale(1);
          }
          25% {
            top: 0;
            left: 50%;
            transform: translateX(-50%) scale(1);
          }
          50% {
            top: 50%;
            left: 100%;
            transform: translateY (-50%) scale(1);
          }
          75% {
            top: 100%;
            left: 50%;
            transform: translate
          }
       
        }

        /* Cahaya putih realistis dengan blur yang memenuhi tombol */
        .learn-more-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background: rgba(255,255,255, 0.6);
          filter: blur(8px); /* Blur untuk efek cahaya realistis */
          transition: width 0.8s ease-in-out; /* Smooth saat memenuhi tombol */
          z-index: 0;
        }

        /* Saat hover, cahaya putih blur memenuhi seluruh tombol */
        .learn-more-button:hover::before {
          width: 100%; /* Cahaya memenuhi tombol */
        }

        /* Orb menghilang dengan opacity saat hover */
        .learn-more-button:hover .orb {
          opacity: 0; /* Orb menghilang secara smooth */
        }

        /* Teks dan icon panah tetap terlihat */
        .learn-more-button .button-text,
        .learn-more-button .arrow-icon {
          color: white; /* Teks tetap putih */
          position: relative;
          z-index: 1; /* Pastikan di atas cahaya */
        }

        /* Orb kembali muncul saat kursor keluar */
        .learn-more-button:not(:hover) .orb {
          opacity: 1; /* Orb muncul kembali */
        }

        
      `}</style>
    </section>
  );
};