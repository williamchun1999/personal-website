import { BiLogoLinkedin, BiLogoGithub, BiLogoGmail } from "react-icons/bi";
import { IoMdDocument } from "react-icons/io";
import profilePhoto from "../assets/DSC02531.jpg";
import { LogoItem } from "./LogoItem";

export const Banner = () => {
  return (
    <main
      id="banner"
      className="mt-32 py-16 w-5/6 m-auto"
    >
      <div className="flex w-full flex-col items-center sm:flex-row sm:justify-between">
        <div className="flex flex-col mb-12 sm:mr-24 sm:mb-0 ease-in transition-transform">
          <h2 className="text-3xl font-bold mb-2 text-light-blue">
            William Chun
          </h2>

          <span className="relative h-8 overflow-hidden text-xl">
            <span className="absolute h-full w-full -translate-y-full animate-slide leading-8 text-white">
              Software Developer
            </span>
            <span className="absolute h-full w-full -translate-y-full animate-slide leading-8 text-white [animation-delay:1.67s]">
              Korean RnB Enthusiast
            </span>
            <span className="absolute h-full w-full -translate-y-full animate-slide leading-8 text-white [animation-delay:3.33s]">
              Social Drinker + Gamer
            </span>
          </span>

          <p>
            I like writing code, trying new music, and connecting with people!
          </p>
          <p>Reach out to me and tell me your favorite song ontop :)</p>
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
        </div>

        <img
          src={profilePhoto}
          alt="Profile Picture"
          className="h-80 border-light-blue border-2 rounded-md"
        />
      </div>
    </main>
  );
};
