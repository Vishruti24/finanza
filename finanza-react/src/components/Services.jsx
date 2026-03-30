import { useEffect, useState } from "react";
import { getServices } from "../api/api";
import { getImage } from "../utils/getImage";

function Services() {

  const [services, setServices] = useState([]);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getServices();
      setServices(res.data.data);
    };

    fetchData();
  }, []);

  const imageUrl = getImage(services[activeService]?.image);

  return (
    <div className="container-xxl py-5">

      <div className="container">

        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
            Our Services
          </p>

          <h1 className="display-5 mb-5">
            Awesome Financial Services For Business
          </h1>
        </div>

        <div className="row g-4 align-items-center">

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
                {service.title}
              </button>
            ))}

          </div>

          <div className="col-lg-4">

            {imageUrl && (
  <img
    src={imageUrl}
    alt="service"
    loading="lazy"
    style={{
      width: "100%",
      height: "350px",
      objectFit: "cover",
      borderRadius: "10px"
    }}
  />
)}

          </div>

          <div className="col-lg-4">

            <h3 className="mb-4">
              25 Years Of Experience In Financial Support
            </h3>

            <p className="mb-4">
              {services[activeService]?.description}
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