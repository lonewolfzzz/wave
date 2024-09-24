"use client";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import Image, { StaticImageData } from 'next/image';
import imageSrc from '@/assets/bl6.jpg';
import XSocial from '@/assets/social-x.svg';
import InstaSocial from '@/assets/social-insta.svg';
import YTSocial from '@/assets/social-youtube.svg';
import { motion } from 'framer-motion'; // Import motion from framer-motion

interface CardProps {
    title: string;
    description: string;
    image: StaticImageData;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
    return (
        <motion.div 
            className="gap-6 p-10 bg-black flex flex-col md:flex-row max-w-[1000px] justify-center text-white border border-gray-300 rounded-3xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }} // Initial state for the whole card
            animate={{ opacity: 1, y: 0 }} // Final state for the whole card
            transition={{ duration: 0.5 }} // Transition properties for the whole card
        >
            {/* Left Side: Title and Description */}
            <div className="flex-1 p-4">
                <motion.h3 
                    className="sm:text-7xl lg:text-9xl font-bold mb-8"
                    initial={{ opacity: 0, y: 20 }} // Initial state for title
                    animate={{ opacity: 1, y: 0 }} // Final state for title
                    transition={{ duration: 0.5, delay: 0.2 }} // Delay for title animation
                >
                    {title}
                </motion.h3>
                <motion.p 
                    className="sm:text-lg lg:text-xl text-bold text-white/60"
                    initial={{ opacity: 0, y: 20 }} // Initial state for description
                    animate={{ opacity: 1, y: 0 }} // Final state for description
                    transition={{ duration: 0.5, delay: 0.4 }} // Delay for description animation
                >
                    {description}
                </motion.p>
            </div>
            {/* Right Side: Image and Social Media Icons */}
            <div className="flex flex-col md:flex-row w-full md:w-1/2 lg:max-w-full">
                <div className="flex justify-center items-center image-container">
                    <Image 
                        src={image} 
                        alt={title} 
                        width={500} 
                        height={200} 
                        className="object-cover rounded-lg h-full hover:zoom-rotate"
                    />
                </div>
                {/* Social Media Icons with Text */}
                <div className='flex flex-col items-start justify-center md:ml-4 mt-4 md:mt-0'> 
                    <div className="flex items-center mb-4"> 
                        <XSocial className="text-white hover:text-gray-700 transition" />
                        <a href="">
                          <span className="text-white text-lg hover:text-gray-700 transition ml-2">Twitter</span>
                        </a>
                    </div>
                    <div className="flex items-center mb-4"> 
                        <InstaSocial className="text-white hover:text-gray-700 transition" />
                        <a href="">
                          <span className="text-white text-lg hover:text-gray-700 transition ml-2">Instagram</span>
                        </a>
                    </div>
                    <div className="flex items-center"> 
                      <YTSocial className="text-white hover:text-gray-700 transition" />
                      <a href="">
                        <span className="text-white text-lg hover:text-gray-700 transition ml-2">YouTube</span>
                      </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function ContactPage() {
    return (
        <>
            <Header />
            <div className="flex justify-center items-center py-6 mb-20 mx-4 md:mx-8 lg:mx-0">
                <Card 
                    title="Contact" 
                    description="Lorem ipsum dolor sit, by Akbar. Lorem ipsum dolor sit, by Akbar. Lorem ipsum dolor sit, by Akbar. Lorem ipsum dolor sit, by Akbar. Lorem ipsum dolor sit, by Akbar." 
                    image={imageSrc} 
                />
            </div>
            <Footer />
        </>
    );
}