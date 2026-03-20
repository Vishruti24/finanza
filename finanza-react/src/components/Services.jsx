import { useState } from "react";

import service1 from "../assets/img/service-1.jpg";
import service2 from "../assets/img/service-2.jpg";
import service3 from "../assets/img/service-3.jpg";
import service4 from "../assets/img/service-4.jpg";

function Services() {

  const services = [
    {
      title: "Financial Planning",
      image: service1,
      description:
        "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.",
    },
    {
      title: "Cash Investment",
      image: service2,
      description:
        "Clita erat ipsum et lorem et sit. Sed stet lorem sit clita duo justo magna dolore erat amet.",
    },
    {
      title: "Financial Consultancy",
      image: service3,
      description:
        "Diam dolor diam ipsum sit. Aliqu diam amet diam et eos labore lorem ipsum.",
    },
    {
      title: "Business Loans",
      image: service4,
      description:
        "Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit.",
    },
  ];

  const [activeService, setActiveService] = useState(0);

  return (
    <div className="container-xxl py-5">
      <div className="container">

        {/* Title */}
        <div className="text-center mx-auto mb-5 wow fadeInUp" style={{ maxWidth: "600px" }}>
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
            Our Services
          </p>
          <h1 className="display-5 mb-5">
            Awesome Financial Services For Business
          </h1>
        </div>

        <div className="row g-4 align-items-center">

          {/* LEFT BUTTONS */}
          <div className="col-lg-4">

            {services.map((service, index) => (
              <button
                key={index}
                className={`nav-link w-100 text-start mb-3 ${
                  activeService === index ? "active btn btn-primary text-white" : "btn btn-light"
                }`}
                onClick={() => setActiveService(index)}
              >
                <i className="fa fa-bars me-3"></i>
                {service.title}
              </button>
            ))}

          </div>

          {/* IMAGE */}
          <div className="col-lg-4 wow fadeInUp">
            <img
              className="img-fluid rounded"
              src={services[activeService].image}
              alt="service"
            />
          </div>

          {/* CONTENT */}
          <div className="col-lg-4 wow fadeInUp">

            <h3 className="mb-4">
              25 Years Of Experience In Financial Support
            </h3>

            <p className="mb-4">
              {services[activeService].description}
            </p>

            <p>
              <i className="fa fa-check text-primary me-3"></i>
              Secured Loans
            </p>

            <p>
              <i className="fa fa-check text-primary me-3"></i>
              Credit Facilities
            </p>

            <p>
              <i className="fa fa-check text-primary me-3"></i>
              Cash Advanced
            </p>

            <a href="#" className="btn btn-primary py-3 px-5 mt-3">
              Read More
            </a>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Services;