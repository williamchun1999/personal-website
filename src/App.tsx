import { Navbar } from "./components/navbar";
import { Banner } from "./components/Banner";
import { AboutMe } from "./components/AboutMe";
import { Experiences } from "./components/Experiences";
import { Projects } from "./components/Projects";

export const App = () => {

  return (

    <div className="mx-12">
      <Navbar />
      <Banner />
      <AboutMe />
      <Experiences />
      <Projects />

      <footer id="footer">
        <ul className="icons">
          <li><a href="#" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="#" className="icon brands alt fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
          <li><a href="#" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
          <li><a href="#" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
          <li><a href="#" className="icon solid alt fa-envelope"><span className="label">Email</span></a></li>
        </ul>
      </footer>

    </div>
  )
}

