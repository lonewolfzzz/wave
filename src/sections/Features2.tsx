"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { DotLottiePlayer } from "@dotlottie/react-player";
import productImage from "@/assets/product-image-2.png";
import { useRef, useState, useEffect } from 'react';

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "Boost your performance",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click automation",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart Artificial Intelligence",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features2 = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);
  
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end end"], 
  });
  
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.8], [80, 0]), {
    stiffness: 50,
    damping: 20,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="py-20 md:py-24 bg-[radial-gradient(ellipse_100%_160%_at_bottom_left,#AD49E1,#000_60%)]">
      <div className="container text-white">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }} 
          animate={isSmallScreen ? { opacity: 1 } : (inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0.4 })} 
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl font-medium text-center tracking-tighter"
        >
          Elevate your AI efforts
        </motion.h2>
        <motion.p 
          initial={{ y: 20, opacity: 0 }} 
          animate={isSmallScreen ? { opacity: 1 } : (inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0.4 })} 
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/70 text-lg tracking-tight text-center mt-5"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam velit amet perspiciatis dolorem tempora inventore quidem doloribus, eius repellat impedit. Atque ab praesentium, vitae neque tenetur velit odio corporis ex.
        </motion.p>
        <motion.div 
          initial={{ y: 40, opacity: 0 }} 
          animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-10 flex flex-col lg:flex-row gap-3"
        >
          {tabs.map((tab) => (
            <div 
              key={tab.title} 
              className="border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1"
            >
              <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
                <DotLottiePlayer src={tab.icon} className="h-5 w-5" autoplay loop />
              </div>
              <div className="font-medium">{tab.title}</div>
              {tab.isNew && (
                <div className="text-xs rounded-full px-2 py-0.5 bg-purple-700 text-black font-semibold">
                  New
                </div>
              )}
            </div>
          ))}
        </motion.div>
        <motion.div 
          initial={{ y: 40, opacity: 0 }} 
          animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0.4 }} 
          transition={{ duration: 1, delay: 0.6 }}
          className="border border-white/20 p-2.5 rounded-xl mt-3"
        >
          <motion.div
            ref={imageRef}
            style={{
              rotateX: rotateX,  // Rotate the image as the user scrolls
              transformPerspective: "1000px",
            }}
          >
            <Image src={productImage} alt="Product Image" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};