function Footer() {
  return (
    <div className="container-fluid bg-dark text-light footer mt-5 py-5">

      <div className="container py-5">
        <div className="row g-5">

          {/* Company Info */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Finanza</h4>

            <p>
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
              Clita erat ipsum et lorem et sit.
            </p>

            <div className="d-flex pt-2">
              <a className="btn btn-square btn-outline-light rounded-circle me-2" href="#">
                <i className="fab fa-twitter"></i>
              </a>

              <a className="btn btn-square btn-outline-light rounded-circle me-2" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>

              <a className="btn btn-square btn-outline-light rounded-circle me-2" href="#">
                <i className="fab fa-youtube"></i>
              </a>

              <a className="btn btn-square btn-outline-light rounded-circle" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Address</h4>

            <p>
              <i className="fa fa-map-marker-alt me-3"></i>
              123 Street, New York, USA
            </p>

            <p>
              <i className="fa fa-phone me-3"></i>
              +012 345 67890
            </p>

            <p>
              <i className="fa fa-envelope me-3"></i>
              info@example.com
            </p>
          </div>

          {/* Quick Links */}
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
              Dolor amet sit justo amet elitr clita ipsum elitr est.
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