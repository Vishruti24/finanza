import Carousel from "../components/Carousel";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      {/*  Home Section */}
      <section id="home" style={{ scrollMarginTop: "100px" }}>
        <Carousel />
      </section>

      {/* About */}
      <section id="about" style={{ scrollMarginTop: "100px" }}>
        <About />
      </section>

      {/* Services */}
      <section id="services" style={{ scrollMarginTop: "100px" }}>
        <Services />
      </section>

      {/* Projects */}
      <section id="projects" style={{ scrollMarginTop: "100px" }}>
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact" style={{ scrollMarginTop: "100px" }}>
        <Contact />
      </section>
    </>
  );
}

export default Home;