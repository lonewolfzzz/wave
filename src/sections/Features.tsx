"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import IntegrationIcon from "@/assets/starfall.png"; 
import GoalSettingIcon from "@/assets/starfall.png"; 
import EncryptionIcon from "@/assets/starfall.png"; 
import WorkflowsIcon from "@/assets/starfall.png"; 
import CollaborationIcon from "@/assets/starfall.png"; 
import AnalyticsIcon from "@/assets/starfall.png"; 
import satelite from "@/assets/b1.png";
import finger from "@/assets/b2.png";
import lock from "@/assets/b3.png";

const features = [
  {
    title: 'Integration Ecosystem',
    description: 'Enhance your productivity by connecting with your tools, keeping your essentials in one place',
    icon: IntegrationIcon,
    image: satelite,
  },
  {
    title: 'Goal Setting and Tracking',
    description: 'Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight',
    icon: GoalSettingIcon,
    image: finger,
  },
  {
    title: 'Secure Data Encryption',
    description: 'With end-to-end encryption, your data is securely stored and protected from unauthorized access',
    icon: EncryptionIcon,
    image: lock,
  },
  {
    title: 'Customizable Workflows',
    description: 'Easily tailor your workflows to fit your unique team needs and processes.',
    icon: WorkflowsIcon,
    image: lock,
  },
  {
    title: 'Real-time Collaboration',
    description: 'Work together with your team in real-time, no matter where you are.',
    icon: CollaborationIcon,
    image: finger,
  },
  {
    title: 'Advanced Analytics Tracking',
    description: 'Gain insights through advanced analytics to improve your productivity.',
    icon: AnalyticsIcon,
    image: satelite,
  },
];

export const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
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
    <div className="bg-black text-white py-[72px] md:py-24" ref={sectionRef}>
      <div className="container">
        <motion.h2 
          initial={{ y: 40, opacity: 0 }} 
          animate={isSmallScreen ? { opacity: 1 } : (isVisible ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 })} 
          transition={{ duration: 1, delay: 0.1 }}
          className="text-center font-bold text-5xl tracking-tighter"
        >
          Unlock the Potential Featured
        </motion.h2>

        <div className="max-w-xl mx-auto">
          <motion.p 
            initial={{ y: 40, opacity: 0 }} 
            animate={isSmallScreen ? { opacity: 1 } : (isVisible ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 })} 
            transition={{ duration: 1, delay: 0.4 }}
            className="text-center mt-5 text-xl text-white/70"
          >
            Enjoyable customizable lists, teamwork tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.
          </motion.p>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {features.map(({ title, description, icon, image }) => {
            const [isHovered, setIsHovered] = useState(false);

            return (
              <motion.div 
                key={title} 
                className="border border-white/30 px-5 py-10 text-center rounded-xl flex flex-col items-center md:w-80 transition-all duration-300 ease-in-out hover:bg-[radial-gradient(ellipse_100%_200%_at_bottom_right,#2E073F,#000_60%)] hover:scale-105 hover:shadow-[0_7px_14px_#EAEAEA]"
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)} 
              >
                <div className="inline-flex h-14 w-14 bg-black text-white justify-center items-center rounded-lg">
                  <Image src={icon} alt={title} width={40} height={40} />
                </div>

                <motion.h3 
                  initial={{ y: 40, opacity: 0 }} 
                  animate={isSmallScreen ? { opacity: 1 } : (isVisible ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 })} 
                  transition={{ duration: 1, delay: 0.1 }}
                  className="lg:mt-6 font-bold" 
                  style={{ fontSize: '30px' }}
                >
                  {title}
                </motion.h3>
                <motion.p 
                  initial={{ y: 60, opacity: 0 }} 
                  animate={isSmallScreen ? { opacity: 1 } : (isVisible ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 })} 
                  transition={{ duration: 1, delay: 0.4 }}
                  className="mt-2 text-white/70"
                >
                  {description}
                </motion.p>

                <motion.div 
                  className='mt-4'
                  initial={{ y: 0 }}
                  animate={isHovered ? { y: -10 } : { y: 0 }}
                  transition={{ type: 'spring', stiffness: 600, damping: 10 }}
                >
                  <Image src={image} alt={title} width={100} height={100} className='sm:mt-16' />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
