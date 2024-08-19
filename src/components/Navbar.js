import React from 'react'
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({
          behavior: "smooth"
        });
      };
    
      const [isSocialVisible, setSocialVisible] = useState(false)
    
      const menuRef = useRef(null);
    
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setSocialVisible(false);
        }
      };
    
      useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
          document.removeEventListener("click", handleClickOutside, true);
        };
      }, []);

  return (
    <div>
        <nav className="navbar bg-black text-white py-[11px] text-[13px]">
        <ul className='flex justify-center items-center'>
            <li className='px-8 hover:text-blue-500'>HOME</li>
            <li className='px-8 hover:text-blue-500 border-l border-white'><button onClick={() => scrollToSection('products')}>PRODUCTS</button></li>
            <li className='px-8 hover:text-blue-500 border-l border-white'><button onClick={() => scrollToSection('wallpaper')}>WALLPAPER</button></li>
            <li className=' hover:text-blue-500 border-l border-white'>

            <div id="mainDiv" className="relative" ref={menuRef} onClick={() => setSocialVisible(prev => !prev)}>
                
                <div id="socialDiv" className="bg-black text-white text-center w-32 cursor-pointer">
                    SOCIAL
                </div>
                {isSocialVisible && <div id="dropdownDiv" className="absolute w-32 text-center top-[-8px] left-0 bg-black text-white z-10">
                    <ul className="">
                        <li className="p-2">SOCIAL</li>
                        <li className="p-2 hover:bg-blue-500"><a href="https://www.facebook.com/automarc/">FACEBOOK</a></li>
                        <li className="p-2 hover:bg-blue-500"><a href="https://www.instagram.com/automarc.in/">INSTAGRAM</a></li>
                        <li className="p-2 hover:bg-blue-500"><a href="https://www.youtube.com/c/AutoMarc">YOUTUBE</a></li>
                    </ul>
                </div>}
            </div>

            </li>
            <li className='px-8 hover:text-blue-500 border-l border-white'><button onClick={() => scrollToSection('blog')}>BLOG</button></li>
            <li className='px-8 hover:text-blue-500 border-l border-white'><button onClick={() => scrollToSection('about')}>ABOUT US</button></li>
            <li className='px-8 hover:text-blue-500 border-l border-white'><button onClick={() => scrollToSection('contact')}>CONTACT US</button></li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar