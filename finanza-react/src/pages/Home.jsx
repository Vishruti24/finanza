import Carousel from "../components/Carousel";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      {/* 🔥 Home Section (Carousel here) */}
      <section id="home">
        <Carousel />
      </section>

      {/* About */}
      <section id="about">
        <About />
      </section>

      {/* Services */}
      <section id="services">
        <Services />
      </section>

      {/* Projects */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;