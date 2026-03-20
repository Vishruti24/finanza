import { useEffect, useState } from "react";

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 45);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`container-fluid px-0 wow fadeIn ${
        sticky ? "sticky-top shadow-sm" : "fixed-top"
      }`}
      data-wow-delay="0.1s"
    >
      {/* Top Bar (UNCHANGED) */}
      <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
        <div className="col-lg-6 px-5 text-start">
          <small>
            <i className="fa fa-map-marker-alt text-primary me-2"></i>
            123 Street, New York, USA
          </small>
          <small className="ms-4">
            <i className="fa fa-clock text-primary me-2"></i>
            9.00 am - 9.00 pm
          </small>
        </div>

        <div className="col-lg-6 px-5 text-end">
          <small>
            <i className="fa fa-envelope text-primary me-2"></i>
            info@example.com
          </small>
          <small className="ms-4">
            <i className="fa fa-phone text-primary me-2"></i>
            +012 345 6789
          </small>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5">

        {/* Logo */}
        <h1
          className="navbar-brand ms-4 ms-lg-0 display-5 text-primary m-0"
          style={{ cursor: "pointer" }}
          onClick={() => scrollToSection("home")}
        >
          Finanza
        </h1>

        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">

            <span className="nav-item nav-link" onClick={() => scrollToSection("home")}>
              Home
            </span>

            <span className="nav-item nav-link" onClick={() => scrollToSection("about")}>
              About
            </span>

            <span className="nav-item nav-link" onClick={() => scrollToSection("services")}>
              Services
            </span>

            <span className="nav-item nav-link" onClick={() => scrollToSection("projects")}>
              Projects
            </span>

            <span className="nav-item nav-link" onClick={() => scrollToSection("contact")}>
              Contact
            </span>

          </div>

          {/* Social Icons (UNCHANGED) */}
          <div className="d-none d-lg-flex ms-2">
            <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="#">
              <small className="fab fa-facebook-f text-primary"></small>
            </a>

            <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="#">
              <small className="fab fa-twitter text-primary"></small>
            </a>

            <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="#">
              <small className="fab fa-linkedin-in text-primary"></small>
            </a>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default Navbar;