import {
  BiLogoAws,
  BiLogoReact,
  BiLogoTypescript,
  BiLogoPostgresql,
} from "react-icons/bi";
import spg from "../assets/png-logo-1-1024x537.png";
import gyukaku from "../assets/gyukaku_logo1104_white_horizontal-copy-e1461718107174.png";
import { LogoItem } from "./LogoItem";

export const Experiences = () => {
  return (
    <section id="experiences" className="mt-32">
      <h3 className="text-2xl font-semibold">Experiences</h3>
      <div className="flex my-16">
        <img alt="spg" src={spg} className="max-h-32 w-1/4 object-scale-down" />
        <div className="w-3/4 ml-8">
          <div className="flex justify-between">
            <h4>Full Stack Engineer (Full Time)</h4>
            <span>Apr 2022 - Nov 2022</span>
          </div>
          <div className="flex justify-between">
            <span>Sustainable Projects Group (SPG)</span>
            <span>Vancouver, BC, CAN</span>
          </div>

          <p className="my-4">
            Developed and executed innovative software solutions for energy
            auditing, providing organizations with actionable insights to
            increase energy savings and reduce implementation costs.
          </p>
          <p>
            Built and optimized a comprehensive data analysis and visualization
            system with over 10+ features for the MVP, as well as constructing
            APIs using AWS CDK to streamline access to building and equipment
            data.
          </p>
          <p className="my-4">
            Led Agile sprint review demonstrations amongst engineers, PM and
            CEO, providing real-time feedback and ensuring alignment with
            project goals.
          </p>

          <ul className="flex gap-4  flex-wrap mt-4 text-xl w-full self-center">
            <LogoItem LogoImage={BiLogoTypescript} text="TypeScript" />
            <LogoItem LogoImage={BiLogoReact} text="React" />
            <LogoItem LogoImage={BiLogoAws} text="AWS" />
            <LogoItem LogoImage={BiLogoPostgresql} text="PostgreSQL" />
          </ul>
        </div>
      </div>
      <div className="flex">
        <img
          alt="gyu-kaku"
          src={gyukaku}
          className="max-h-32 w-1/4 object-scale-down"
        />
        <div className="w-3/4 ml-8">
          <div className="flex justify-between">
            <h4>Waiter/Cook/Dishwasher (Part Time)</h4>
            <span>May 2018 - Jun 2019</span>
          </div>
          <div className="flex justify-between">
            <span>Gyu-Kaku Japanese BBQ Restaurant</span>
            <span>Vancouver, BC, CAN</span>
          </div>

          <p className="my-4">
            Served food and drinks at a Japanese BBQ as well as growing in
            customer service and communication skills.
          </p>
          <p>
            Cross-trained in kitchen roles as a cook and dishwasher, increasing
            efficiency during peak dining hours by 25%.
          </p>
        </div>
      </div>
    </section>
  );
};
