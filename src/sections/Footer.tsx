import Image from 'next/image'; // Import the Image component from Next.js
import Logo from '@/assets/starfall.png'; // Import the logo image
import XSocial from '@/assets/social-x.svg';
import InstaSocial from '@/assets/social-insta.svg';
import YTSocial from '@/assets/social-youtube.svg';

export const Footer = () => {
  return (
    <footer className='py-5 border-t border-white/20'>
      <div className='container text-white'>
        <div className='flex flex-col justify-around lg:flex-row gap-8'>
          <div className='flex gap-2 '>
            <Image src={Logo} alt="Logo" className='h-6 w-6'/> {/* Use Image component */}
            <div className='font-medium'>Wave AI by Akbar</div>
          </div>  
          <nav className='flex flex-col lg:flex-row gap-5'>
            <div className='flex flex-col items-start'>
              <a href="#" className='text-white/70 hover:text-white text-xs transition'>Follow Us</a>
              <a href="#" className='text-white/70  hover:text-white text-xs transition'>Tiktok</a>
              <a href="#" className='text-white/70  hover:text-white text-xs transition'>Twitter</a>
              <a href="#" className='text-white/70  hover:text-white text-xs transition'>Instagram</a>
              <a href="#" className='text-white/70  hover:text-white text-xs transition'>LinkedIn</a> {/* Additional text below */}
            </div>
            <div className='flex flex-col items-start'>
              <a href="#" className='text-white/70 hover:text-white text-xs transition'>Information</a>
              <a href='#' className='text-white/70  hover:text-white text-xs transition'>About Us</a>
              <a href='#' className='text-white/70  hover:text-white text-xs transition'>Contact Us</a>
              <a href='#' className='text-white/70  hover:text-white text-xs transition'>FAQs</a>
              <a href='#' className='text-white/70  hover:text-white text-xs transition'>Terms</a> {/* Additional text below */}
            </div>
            <div className='flex flex-col items-start'>
              <a href="#" className='text-white/70 hover:text-white text-xs transition'>Resources</a>
              <a href='#' className='text-white/70  hover:text-white text-xs transition'>Blog</a>
              <a href='#' className='text-white/70  hover:text-white text-xs transition'>News</a> {/* Additional text below */}
            </div>
            <div className='flex flex-col items-start'>
              <a href="#" className='text-white/70 hover:text-white text-xs transition'>Browse</a>
              <a href='#' className='text-white/70  hover:text-white text-xs transition'>Features</a>
              <a href='#' className='text-white/70  hover:text-white text-xs transition'>Price</a>
              <a href='#' className='text-white/70  hover:text-white text-xs transition'>Blog</a>
              <a href='#' className='text-white/70  hover:text-white text-xs transition'>Contact</a> {/* Additional text below */}
            </div>
            <div className='flex flex-col items-start'>
              <a href="#" className='text-white/70 hover:text-white text-xs transition'>Changelog</a>
              <a href='#' className='text-white/70  hover:text-white text-xs transition'>See what's new</a> {/* Additional text below */}
            </div>
          </nav>          
          <div className='flex gap-5'>
            <XSocial className="text-white/70 hover:text-white transition"/>
            <InstaSocial className="text-white/70 hover:text-white transition"/>
            <YTSocial className="text-white/70 hover:text-white transition"/>
          </div>
        </div>
      </div>
    </footer>
  );
};