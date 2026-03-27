import { useEffect, useState } from "react";
import { getServices } from "../api/api";

function Services() {
  const [services, setServices] = useState([]);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getServices();
        console.log("SERVICE API:", res.data);
        setServices(res.data.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  //  IMAGE PATH
  const imageUrl = services[activeService]?.image?.[0]?.url;

  return (
    <div className="container-xxl py-5">
      <div className="container">

        {/* TITLE */}
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
                key={service.id}
                className={`nav-link w-100 text-start mb-3 ${
                  activeService === index
                    ? "active btn btn-primary text-white"
                    : "btn btn-light"
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

            {imageUrl && (
              <img
                className="img-fluid rounded"
                src={`http://localhost:1337${imageUrl}`}
                alt="service"
              />
            )}

          </div>

          {/* CONTENT */}
          <div className="col-lg-4 wow fadeInUp">

            <h3 className="mb-4">
              25 Years Of Experience In Financial Support
            </h3>

            <p className="mb-4">
              {services[activeService]?.description}
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