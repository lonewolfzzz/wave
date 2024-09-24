"use client";
import { useState, useEffect, useRef } from "react";
import ArrorRight from "@/assets/arrow-right.svg";
import Logo2 from "@/assets/starfall.png";
import Image from "next/image";
import MenuIcon2 from "@/assets/menu2.svg";
import Link from 'next/link'; // Import Link from Next.js

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 backdrop-blur-lg z-20">
      <div className="flex justify-center items-center py-3 bg-white text-black text-sm gap-3">
        <p className="text-black/60 hidden md:block">by Akbar</p>
        <div className="inline-flex gap-1 items-center">
          <p>Let's get started into my world</p>
          <ArrorRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between py-3">
            <Image src={Logo2} alt="Logo" className="h-8 w-8 mr-1" />
            <h1 className="text-white font-extrabold text-2xl">Wave</h1>
            <MenuIcon2 className="h-5 w-5 md:hidden cursor-pointer" onClick={toggleMenu} />
            <nav className="hidden md:flex justify-center flex-1 gap-3 text-white/80 text-bold text-lg items-center ml-16">
              <Link href="/about" className="relative group">About</Link>
              <Link href="/features" className="relative group">Features</Link>
              <Link href="/pricing" className="relative group">Pricing</Link>
              <Link href="/blog" className="relative group">Blog</Link>
              <Link href="/contact" className="relative group">Contact</Link>
            </nav>
            {/* Always display the button */}
            <button className="get-template-button relative px-4 py-2 rounded-3xl font-extrabold tracking-tight hidden md:block">
              Get This Template
            </button>
          </div>
        </div>
      </div>
      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30">
          <div ref={overlayRef} className="bg-black rounded-lg p-6 w-3/4 md:w-1/2 lg:w-1/3 mt-80">
            <nav className="flex flex-col items-center">
              <Link href="/about" className="py-2 text-lg text-white hover:text-blue-500" onClick={closeMenu}>About</Link>
              <Link href="/features" className="py-2 text-lg text-white hover:text-blue-500" onClick={closeMenu}>Features</Link>
              <Link href="/pricing" className="py-2 text-lg text-white hover:text-blue-500" onClick={closeMenu}>Pricing</Link>
              <Link href="/blog" className="py-2 text-lg text-white hover:text-blue-500" onClick={closeMenu}>Blog</Link>
              <Link href="/contact" className="py-2 text-lg text-white hover:text-blue-500" onClick={closeMenu}>Contact</Link>
            </nav>
          </div>
        </div>
      )}
      <style jsx>{`
        nav a {
          position: relative;
          overflow: hidden;
          color: white;
        }
        nav a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: white;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }
        nav a:hover::after {
          transform: translateX(0);
        }
        nav a.active::after {
          transform: translateX(0);
        }
        .get-template-button {
          background-color: transparent;
          border: 2px solid white;
          color: white;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: background-color 0.4s, box-shadow 0.4s;
        }
        .get-template-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -300%;
          width: 400%;
          height: 200%;
          background: linear-gradient(
            120deg, 
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 1) 30%,
            rgba(255, 255, 255, 0) 60%
          );
          opacity: 0.9; 
          transform: skewX(-20deg); 
          animation: lightMove 2.5s ease-in-out infinite; 
        }
        .get-template-button:hover::before {
          opacity: 1;
        }
        .get-template-button:hover {
          background-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.8), 0 0 35px rgba(255, 255, 255, 0.5);
        }
        @keyframes lightMove {
          0% {
            left: -300%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </header>
  );
};