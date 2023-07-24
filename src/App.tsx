import { BiLogoLinkedin, BiLogoGithub, BiLogoGmail } from "react-icons/bi"
import { IoMdDocument } from "react-icons/io"

import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { AboutMe } from "./components/AboutMe";
import { Experiences } from "./components/Experiences";
import { Projects } from "./components/Projects";
import { LogoItem } from "./components/LogoItem";

export const App = () => {

  return (

    <div className="flex w-full flex-col items-center justify-center bg-black text-white">
      <Navbar />
      <div className="max-w-[1024px] flex flex-col sm:w-5/6">
        <Banner />
        <AboutMe />
        <Experiences />
        <Projects />
        <footer id="footer" className="w-3/4 mx-auto my-16 rounded-lg border border-light-green bg-gradient-to-br from-light-green to-black p-4">
          <h4 className="text-2xl font-semibold">Connect With Me!</h4>
          <ul className="flex gap-4  flex-wrap mt-4 text-xl w-full self-center">
            <a href="https://www.linkedin.com/in/william-chun99/" target="_blank">
              <LogoItem text="LinkedIn" LogoImage={BiLogoLinkedin} />

            </a>
            <a href="https://github.com/williamchun1999" target="_blank">
              <LogoItem text="GitHub" LogoImage={BiLogoGithub} />

            </a>
            <a href="mailto:williamchun1999@gmail.com" target="_blank">
              <LogoItem text="Email" LogoImage={BiLogoGmail} />

            </a>
            <a href="/williamchun_resume.pdf" target="_blank" rel="noreferrer">
              <LogoItem text="Resume" LogoImage={IoMdDocument} />

            </a>

          </ul>
        </footer>
      </div>




    </div>
  )
}

