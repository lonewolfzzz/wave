"use client";
import { useRef } from 'react';
import Image from "next/image";
import appScreen from "@/assets/product-image.png";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const ProductShowcase = () => {
  const appImage = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

  // Text animation: move from below to original position
  const textY = useSpring(useTransform(scrollYProgress, [0, 1], [100, 0]), {
    stiffness: 50,
    damping: 20,
  });

  const textOpacity = useSpring(useTransform(scrollYProgress, [0.1, 0.3], [0, 1]), {
    stiffness: 50,
    damping: 20,
  });

  // Zoom-in effect: scale from 0.8 to 1.0 as the text becomes visible
  const textScale = useSpring(useTransform(scrollYProgress, [0, 1], [0.8, 1]), {
    stiffness: 50,
    damping: 20,
  });

  // Image rotate effect
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 1], [60, 0]), {
    stiffness: 50,
    damping: 20,
  });

  return (
    <div className="bg-black text-white bg-[radial-gradient(ellipse_200%_100%_at_top_left,#371f76,#000_98%)] py-[72px]">
      <div className="container" ref={appImage}>
        <motion.h2
          className="text-center text-5xl font-bold tracking-tighter"
          style={{ y: textY, opacity: textOpacity, scale: textScale }}
        >
          Intuitive interface
        </motion.h2>
        <div className="max-w-xl mx-auto">
          <motion.p
            className="text-xl text-center text-white/70 mt-5 mb-5"
            style={{ y: textY, opacity: textOpacity, scale: textScale }}
          >
            Celebrate the joy of accomplishment with an app designed to track your progress
          </motion.p>
        </div>
        <motion.div
          style={{
            opacity: 0.85,
            rotateX: rotateX,
            transformPerspective: "1000px",
          }}
        >
          <Image
            src={appScreen}
            alt="Product screenshot"
            className="-mt-4"
          />
        </motion.div>
      </div>
    </div>
  );
};
