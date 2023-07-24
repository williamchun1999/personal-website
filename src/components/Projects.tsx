import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, BiLogoGithub } from "react-icons/bi";

import samsushi from "../assets/Group 1.png";
import kea from "../assets/kea.png";
import { LogoItem } from "./LogoItem";

export const Projects = () => {
  return (
    <section id="projects" className="mt-32">
      <h3 className="text-2xl font-semibold text-center">Projects</h3>
      <div className="flex lg:justify-between lg:flex-row flex-col mt-8 bg-neutral-800 p-12 rounded-lg">
        <div className="lg:w-[45%]">
          <a href="https://samsushi.netlify.app" target="_blank">
            <img
              src={samsushi}
              className="object-cover h-64 w-full transition duration-200 hover:opacity-80 sm:hover:-translate-y-[2px] rounded"
            />
          </a>
          <h4 className="mt-4 font-semibold">Sam's Sushi</h4>
          <p className="my-4">
            My first frontend project. In order to give myself the opportunity to freelance, I built Sam's Sushi to showcase my design skills to potential clients.
          </p>
          <p>
            Sam's Sushi is fully responsive and is built using solely the core frontend languages without any framework.
          </p>
          <ul className="flex gap-4  flex-wrap mt-4 text-xl w-full self-center border-b pb-8 border-light-blue">
            <LogoItem LogoImage={BiLogoJavascript} text="Javascript" />
            <LogoItem LogoImage={BiLogoCss3} text="CSS" />
            <LogoItem LogoImage={BiLogoHtml5} text="HTML" />
          </ul>
          <div className="text-4xl mt-4">
            <a href="https://github.com/williamchun1999/restaurantWebsite" target="_blank" className="transition duration-200 hover:opacity-80 sm:hover:-translate-y-[2px]">
              <BiLogoGithub />
            </a>
          </div>
        </div>
        <div className="lg:w-[45%]">
          <a href="https://jade-courageous-perch.cyclic.app" target="_blank">
            <img
              src={kea}
              className="object-cover object-left h-64 w-full transition duration-200 hover:opacity-80 sm:hover:-translate-y-[2px] rounded"
            />
          </a>
          <h4 className="mt-4 font-semibold">Keep Eachother Accountable (KEA)</h4>
          <p className="my-4">
            My passion project! I always felt myself procrastinating or ignoring
            tasks/habits I have written in calendars or task tracking apps, so I
            decided to make a better one.
          </p>
          <p>
            KEA is a full-stack app where users can follow friends and be
            able to view eachother's weekly tasks. A simplistic improvement in
            reinforcing yourself and your friends to get tasks done or habits
            to be formed.
          </p>
          <ul className="flex gap-4  flex-wrap mt-4 text-xl w-full self-center border-b pb-8 border-light-blue">
            <LogoItem LogoImage={BiLogoTypescript} text="Typescript" />
            <LogoItem LogoImage={BiLogoReact} text="React" />
            <LogoItem LogoImage={BiLogoTailwindCss} text="TailwindCSS" />
            <LogoItem LogoImage={BiLogoMongodb} text="MongoDB" />
            <LogoItem LogoImage={BiLogoNodejs} text="NodeJS" />

          </ul>
          <div className="text-4xl mt-4">
            <a href="https://github.com/williamchun1999/kea" target="_blank" className="hover:transition duration-200 hover:opacity-80 sm:hover:-translate-y-[2px]">
              <BiLogoGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
