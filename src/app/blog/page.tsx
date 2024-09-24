"use client";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import Image from "next/image";
import mainImage from "@/assets/bl4.jpg";
import otherImage1 from "@/assets/bl1.jpg";
import otherImage2 from "@/assets/bl2.jpg";
import otherImage3 from "@/assets/bl3.jpg";
import otherImage4 from "@/assets/bl7.jpg";
import otherImage5 from "@/assets/bl5.jpg";
import otherImage6 from "@/assets/bl6.jpg";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

export default function BlogPage() {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [expandSearch, setExpandSearch] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !(modalRef.current as HTMLElement).contains(event.target as Node)) {
        setShowSearchModal(false);
      }
    };
    if (showSearchModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearchModal]);

  const productTitle = "Mastering Frontend with our Creative A.I.";
  const productDate = "January 1, 2023";
  const productLink = "/product-page"; // Example link for product
  const otherImagesData = [
    { src: otherImage1, title: "Mastering Minimalism in Web Design", date: "February 1, 2023", link: "/image-1" },
    { src: otherImage2, title: "The Psychology of Color in Branding", date: "February 2, 2023", link: "/image-2" },
    { src: otherImage3, title: "Unlocking the Power of Typography", date: "February 3, 2023", link: "/image-3" },
    { src: otherImage4, title: "Responsive Design Adapting to Every Screen", date: "February 4, 2023", link: "/image-4" },
    { src: otherImage5, title: "The Art of User Experience design", date: "February 5, 2023", link: "/image-5" },
    { src: otherImage6, title: "Harnessing the Power of Illustration in Design", date: "February 6, 2023", link: "/image-6" },
  ];

  // Framer Motion animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 }, // Hidden state: opacity 0 and shifted down
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Visible state: opacity 1 and shift to original position
  };

  return (
    <>
      <Header />
      <section>
        <div className="py-20 md:py-24 bg-[radial-gradient(ellipse_100%_160%_at_bottom_left,#FF4000,#000_60%)]">
          <div className="container text-white">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="border border-white/20 p-8 rounded-xl bg-black/50"
            >
              <div className="flex flex-col lg:flex-row gap-10">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="lg:w-1/2"
                >
                  <motion.h2 
                    initial={{ y: 40, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-5xl font-medium text-left tracking-tighter"
                  >
                    Escalate your Work with Wave A.I.
                  </motion.h2>
                  <motion.p 
                    initial={{ y: 40, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ duration: 1, delay: 0.7 }}
                    className="text-white/70 text-lg tracking-tight text-left mt-5"
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam velit amet perspiciatis dolorem tempora inventore quidem doloribus, eius repellat impedit. Atque ab praesentium, vitae neque tenetur velit odio corporis ex.
                  </motion.p>
                  <motion.div 
                    initial={{ y: 40, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ duration: 1, delay: 0.9 }}
                    className="mt-6"
                  >
                    <input
                      type="text"
                      placeholder="Search Here"
                      className="w-100 rounded-full px-4 py-2 text-white bg-white/20 cursor-pointer"
                      onClick={() => setShowSearchModal(true)}
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="lg:w-1/2 space-y-4"
                >
                  <div className="border-b border-white/20 py-2">
                    <motion.span 
                      initial={{ y: 40, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      transition={{ duration: 1, delay: 0.5 }}
                      className="font-bold lg:text-lg sm:text-sm"
                    >
                        Categories
                    </motion.span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 py-2 border-b border-white/20">
                    <motion.a  
                      initial={{ y: 10, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      transition={{ duration: 1, delay: 0.7 }}
                      href="/categories/javascript" className="lg:text-lg sm:text-sm text-white hover:text-gray-300 text-left">JavaScript</motion.a>
                    <motion.a 
                      initial={{ y: 10, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      transition={{ duration: 1, delay: 1 }}
                      href="/categories/newest" className="lg:text-lg sm:text-sm text-white hover:text-gray-300 text-left">Newest</motion.a>
                    <motion.a 
                      initial={{ y: 10, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      transition={{ duration: 1, delay: 1.3 }}
                      href="/categories/responsive" className="lg:text-lg sm:text-sm text-white hover:text-gray-300 text-left">Responsive</motion.a>
                  </div>
                  <div className="grid grid-cols-3 gap-4 py-2 border-b border-white/20">
                    <motion.a 
                      initial={{ y: 10, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      transition={{ duration: 1, delay: 1.6 }}
                      href="/categories/front-end" className="lg:text-lg sm:text-sm text-white hover:text-gray-300 text-left">Front-End</motion.a>
                    <motion.a 
                      initial={{ y: 10, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      transition={{ duration: 1, delay: 1.9 }}
                      href="/categories/back-end" className="lg:text-lg sm:text-sm text-white hover:text-gray-300 text-left">Back-End</motion.a>
                    <motion.a 
                      initial={{ y: 10, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      transition={{ duration: 1, delay: 2.2 }}
                      href="/categories/full-stack" className="lg:text-lg sm:text-sm text-white hover:text-gray-300 text-left">Full-Stack</motion.a>
                  </div>
                  <div className="grid grid-cols-3 gap-4 py-2">
                    <motion.a 
                      initial={{ y: 10, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      transition={{ duration: 1, delay: 2.5 }}
                      href="/categories/devops" className="lg:text-lg sm:text-sm text-white hover:text-gray-300 text-left">DevOps</motion.a>
                    <motion.a 
                      initial={{ y: 10, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      transition={{ duration: 1, delay: 2.8 }}
                      href="/categories/ux-ui" className="lg:text-lg sm:text-sm text-white hover:text-gray-300 text-left">UX/UI</motion.a>
                    <motion.a 
                      initial={{ y: 10, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      transition={{ duration: 1, delay: 3.1 }}
                      href="/categories/mobile" className="lg:text-lg sm:text-sm text-white hover:text-gray-300 text-left">Mobile</motion.a>
                  </div>

                </motion.div>
              </div>
            </motion.div>

            {/* Product Image Section */}
            <motion.a
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              href={productLink}
              className="block"
            >
              <div className="relative border border-white/20 rounded-xl mt-10 mx-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_7px_14px_#EAEAEA]">
                <div className="relative pt-[40%] overflow-hidden rounded-xl">
                  <Image
                    src={mainImage}
                    alt="Product Image"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 w-full h-full"
                  />
                  <div className="absolute top-0 left-0 bg-black sm:p-3 lg:p-6 w-1/3 h-full flex flex-col justify-start">
                    <motion.p 
                      initial={{ y: 40, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      transition={{ duration: 1, delay: 0.5 }}
                      className="sm:text-[12px] lg:text-lg text-gray-300">{productDate}</motion.p>
                    <motion.h3 
                      initial={{ y: 40, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      transition={{ duration: 1, delay: 0.8 }}
                      className="sm:text-sm lg:text-5xl font-bold mb-3">{productTitle}</motion.h3>
                    <motion.p 
                      initial={{ y: 40, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      transition={{ duration: 1, delay: 1.1 }}
                      className="sm:hidden lg:block lg:text-md text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum reiciendis voluptate, pariatur eveniet obcaecati cumque culpa cupiditate fugiat animi officia.
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Grid of Images */}
            <div className="grid grid-cols-3 gap-4 mt-6 mx-auto">
              {otherImagesData.map((imageData, index) => (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  key={index}
                  className="group"
                >
                  <a href={imageData.link} className="block">
                    <div className="relative border border-white/20 rounded-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3 group-hover:shadow-[0_7px_14px_#EAEAEA]">
                      <div className="relative pt-[56.25%] overflow-hidden rounded-lg">
                        <Image
                          src={imageData.src}
                          alt={`Other Image ${index + 1}`}
                          layout="fill"
                          objectFit="cover"
                          className="absolute inset-0 w-full h-full"
                        />
                      </div>
                    </div>
                  </a>
                  <div className="mt-2">
                    <motion.p 
                      initial={{ y: 40, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      transition={{ duration: 1, delay: 0.5 }}
                      className="sm:text-[12px]  lg:text-md text-gray-400">{imageData.date}</motion.p>
                    <motion.h3 
                      initial={{ y: 40, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      transition={{ duration: 1, delay: 0. }}
                      className="sm:text-sm lg:text-3xl font-bold">{imageData.title}</motion.h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {showSearchModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/70 z-50 transition-opacity duration-300">
          <div
            ref={modalRef}
            className={`bg-gray-900 p-6 rounded-t-3xl rounded-b-lg shadow-xl relative w-full max-w-md transition-all duration-300 ${expandSearch ? "h-44" : "h-24"}`}
            onClick={() => setExpandSearch(false)}
          >
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-3 rounded-full text-lg text-gray-100 bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              autoFocus
              onClick={(e) => {
                e.stopPropagation();
                setExpandSearch(true);
              }}
            />
            {expandSearch && (
              <button
                className="mt-4 w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300 opacity-100"
                onClick={() => {
                  setShowSearchModal(false);
                  setExpandSearch(false);
                }}
              >
                Search
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
