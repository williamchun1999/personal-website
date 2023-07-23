import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"

export const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <header className="w-full flex bg-neutral-800 text-xl h-16 fixed top-0 items-center px-8 font-semibold z-50">
      <div className="sm:basis-1/4 align-middle">
        <a href="index.html" className="hover:text-light-blue">
          William Chun
        </a>
      </div>
      <button onClick={() => {
        setIsNavExpanded(!isNavExpanded);
      }} className="absolute right-8 sm:hidden"><GiHamburgerMenu /></button>
      <nav className={`absolute top-16 left-0 w-full h-[calc(100vh-4rem)]  bg-black ${isNavExpanded ? "": "hidden"} sm:static sm:h-min sm:basis-3/4 sm:block sm:bg-neutral-800`}>
        <ul className="flex flex-col items-center  sm:justify-end sm:flex-row">
          <li className="mt-8 sm:pl-8 sm:mt-0 hover:text-light-blue">
            <a href="#about">About Me</a>
          </li>
          <li className="mt-8 sm:pl-8 sm:mt-0 hover:text-light-blue">
            <a href="#experiences">Experience</a>
          </li>
          <li className="mt-8 sm:pl-8 sm:mt-0 hover:text-light-blue">
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
