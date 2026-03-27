import { useEffect, useState } from "react";
import { getFooter } from "../api/api";

function Footer() {
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getFooter();
        setFooter(res.data.data[0]); // only one entry
      } catch (error) {
        console.error("Error fetching footer:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid bg-dark text-light footer mt-5 py-5">

      <div className="container py-5">
        <div className="row g-5">

          {/* Company Info */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">
              {footer?.companyName}
            </h4>

            <p>
              {footer?.description}
            </p>

            <div className="d-flex pt-2">
              <a className="btn btn-square btn-outline-light rounded-circle me-2" href={footer?.twitter}>
                <i className="fab fa-twitter"></i>
              </a>

              <a className="btn btn-square btn-outline-light rounded-circle me-2" href={footer?.facebook}>
                <i className="fab fa-facebook-f"></i>
              </a>

              <a className="btn btn-square btn-outline-light rounded-circle me-2" href={footer?.youtube}>
                <i className="fab fa-youtube"></i>
              </a>

              <a className="btn btn-square btn-outline-light rounded-circle" href={footer?.linkedin}>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Address</h4>

            <p>
              <i className="fa fa-map-marker-alt me-3"></i>
              {footer?.address}
            </p>

            <p>
              <i className="fa fa-phone me-3"></i>
              {footer?.phone}
            </p>

            <p>
              <i className="fa fa-envelope me-3"></i>
              {footer?.email}
            </p>
          </div>

          {/* Quick Links (STATIC OK) */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Quick Links</h4>

            <a className="btn btn-link" href="#">About Us</a>
            <a className="btn btn-link" href="#">Contact Us</a>
            <a className="btn btn-link" href="#">Our Services</a>
            <a className="btn btn-link" href="#">Terms & Condition</a>
            <a className="btn btn-link" href="#">Support</a>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Newsletter</h4>

            <p>
              {footer?.newsletterText}
            </p>

            <div className="position-relative w-100">
              <input
                className="form-control bg-transparent border-light w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />

              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Footer;