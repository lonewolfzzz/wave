"use client"; // This line is necessary to mark the component as a Client Component

import { motion } from 'framer-motion';
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import Image from 'next/image'; // Import the Image component from Next.js
import IntegrationIcon from "@/assets/starfall.png"; 
import GoalSettingIcon from "@/assets/starfall.png"; 
import EncryptionIcon from "@/assets/starfall.png"; 
import WorkflowsIcon from "@/assets/starfall.png"; 
import CollaborationIcon from "@/assets/starfall.png"; 
import AnalyticsIcon from "@/assets/starfall.png"; 
import satelite from "@/assets/ck.jpg";
import finger from "@/assets/ck.jpg";
import lock from "@/assets/ck.jpg";
import { useState } from 'react'; // Import useState from React

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

const variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      stagger: 0.2,
    },
  },
};

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <section>
        <div className="bg-black text-white sm:mt-10 py-[72px] md:py-24 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#7695FF,#000_100%)]">
          <div className="container">
            <motion.h2 
              initial={{ y: 100, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 1, delay: 0.1 }}
              className="text-center font-bold text-5xl tracking-tighter -mt-20"
            >
              Features we have
            </motion.h2>
            <motion.p 
              initial={{ y: 100, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 1, delay: 0.3 }}
              className="text-center mt-5 text-xl text-white/70"
            >
              Enjoyable customizable lists, teamwork tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.
            </motion.p>
            <motion.div 
              variants={variants}
              initial={{ y: 100, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-16 flex flex-wrap justify-center gap-4 "
              
            >
              {features.map(({ title, description, icon, image }) => {
                // State to track mouse hover
                const [isHovered, setIsHovered] = useState(false);
                return (
                  <div 
                    key={title} 
                    className={`border border-[#F1F1F1] relative rounded-xl flex flex-col items-center md:w-80 overflow-hidden transition-transform duration-300 ease-in-out ${
                      isHovered ? 'bg-[radial-gradient(ellipse_100%_200%_at_bottom_right,#2E073F,#000_60%)] scale-105 shadow-[0_7px_14px_#EAEAEA]' : ''
                    }`}
                    onMouseEnter={() => setIsHovered(true)} // Set hover state to true
                    onMouseLeave={() => setIsHovered(false)} // Set hover state to false
                  >
                    {/* Background Image with Blur */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        zIndex: 0, // Send the blur layer behind other content
                      }}
                    >
                      <Image 
                        src={image} 
                        alt={title} 
                        layout="fill" // Make the image fill the card
                        objectFit="cover " // Cover the entire card
                        className="filter blur-[0px]" // Apply blur effect
                      />
                    </div>
                    {/* Dark Overlay with Smooth Transition */}
                    <div 
                      className="absolute inset-0 bg-black transition-opacity duration-300" // Added transition classes
                      style={{ 
                        zIndex: 1, // Ensure it sits above the blurred image
                        opacity: isHovered ? 1 : 0.7 // Change opacity based on hover state
                      }} 
                    />
                    <div className="relative z-10 p-5 text-center "> {/* Content on top of the blur */}
                      <div className="inline-flex h-14 w-14 bg-black text-white justify-center items-center rounded-lg">
                        <Image src={icon} alt={title} width={40} height={40} />
                      </div>
                      <h3 className="mt-6 font-bold" style={{ fontSize: '30px' }}>{title}</h3>
                      <p className="mt-2 text-white/100 font-semibold" style={{ fontSize: '18px' }}>{description}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}