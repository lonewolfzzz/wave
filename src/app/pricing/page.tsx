"use client";

import { useState } from "react"; // Import useState
import CheckIcon from "@/assets/check.svg";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
    inverse: false,
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
    inverse: true,
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
    inverse: false,
  },
];

const PricingPage = () => {
  return (
    <section>
      <Header />
      <section className="text-white py-24 -mt-24 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#D91656,#000_100%)]">
        <div className="container">
          <div className="max-w-[540px] mx-auto">
            <motion.h2 
              initial={{ y: 100, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 1, delay: 0.1 }}
              className="section-title text-center mb-4"
            >
              Pricing
            </motion.h2>
            <motion.p 
              initial={{ y: 100, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 1, delay: 0.3 }}
              className="text-center text-xl tracking-tight mb-10"
            >
              Free forever, Upgrade for Unlimited tasks, better security, and exclusive features.
            </motion.p>
          </div>
          <motion.div 
            initial={{ y: 100, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col gap-10 items-center lg:flex-row lg:items-end lg:justify-center"
          >
            {pricingTiers.map(({ title, monthlyPrice, buttonText, inverse, features }) => {
              const [isHovered, setIsHovered] = useState(false); // State for hover effect

              return (
                <div
                  key={title}
                  className={`p-10 border border-[#F1F1F1] rounded-3xl transition-transform duration-300 ease-in-out transform ${
                    (inverse ? 'bg-white text-black' : 'bg-black text-white') +
                    (isHovered ? ' scale-105 shadow-[0_7px_14px_#EAEAEA]' : '')
                  }`}
                >
                  <div className="flex justify-between">
                    <h3 className="text-lg font-bold">{title}</h3>
                    {inverse && (
                      <div className="inline-flex text-md font-bold bg-black px-4 py-1.5 rounded-xl border border-black/20">
                        <motion.span 
                        animate={{
                          backgroundPositionX: '-100%'
                        }}
                        transition={{
                          duration:1,
                          repeat: Infinity,
                          ease: 'linear',
                          repeatType:"loop",
                        }}
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBC892,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBC892,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium">
                          Popular
                        </motion.span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1 mt-[30px]">
                    <span className="text-4xl font-bold tracking-tighter leading-none">
                      ${monthlyPrice}
                    </span>
                    <span className="tracking-tight font-bold">/month</span>
                  </div>
                  <button
                    className={`btn w-full mt-[30px] ${
                      inverse ? 'bg-black text-white' : 'bg-white text-black'
                    }`}
                    onMouseEnter={() => setIsHovered(true)} // Set hover state to true
                    onMouseLeave={() => setIsHovered(false)} // Set hover state to false
                  >
                    {buttonText}
                  </button>
                  <ul className="flex flex-col gap-5 mt-8">
                    {features.map((feature, index) => (
                      <li key={index} className="text-sm flex items-center gap-4">
                        <CheckIcon className="h-6 w-6" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default PricingPage; // Ensure this line is present and correct