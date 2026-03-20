import aboutImg from "../assets/img/about.jpg";

function About() {
  return (
    <div className="container-xxl py-5">
      <div className="container">

        <div className="row g-4 align-items-end mb-4">

          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <img className="img-fluid rounded" src={aboutImg} alt="about" />
          </div>

          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">

            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
              About Us
            </p>

            <h1 className="display-5 mb-4">
              We Help Our Clients To Grow Their Business
            </h1>

            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. 
              Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, 
              sed stet lorem sit clita duo justo magna dolore erat amet
            </p>

            <div className="border rounded p-4">

              <nav>
                <div className="nav nav-tabs mb-3">

                  <button
                    className="nav-link fw-semi-bold active"
                    data-bs-toggle="tab"
                    data-bs-target="#story"
                  >
                    Story
                  </button>

                  <button
                    className="nav-link fw-semi-bold"
                    data-bs-toggle="tab"
                    data-bs-target="#mission"
                  >
                    Mission
                  </button>

                  <button
                    className="nav-link fw-semi-bold"
                    data-bs-toggle="tab"
                    data-bs-target="#vision"
                  >
                    Vision
                  </button>

                </div>
              </nav>

              <div className="tab-content">

                <div className="tab-pane fade show active" id="story">
                  <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum 
                    et tempor sit. Aliqu diam amet diam et eos labore.
                  </p>
                  <p className="mb-0">
                    Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam 
                    et eos labore. Clita erat ipsum et lorem et sit
                  </p>
                </div>

                <div className="tab-pane fade" id="mission">
                  <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum 
                    et tempor sit. Aliqu diam amet diam et eos labore.
                  </p>
                  <p className="mb-0">
                    Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam 
                    et eos labore. Clita erat ipsum et lorem et sit
                  </p>
                </div>

                <div className="tab-pane fade" id="vision">
                  <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum 
                    et tempor sit. Aliqu diam amet diam et eos labore.
                  </p>
                  <p className="mb-0">
                    Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam 
                    et eos labore. Clita erat ipsum et lorem et sit
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

        <div className="border rounded p-4 wow fadeInUp" data-wow-delay="0.1s">

          <div className="row g-4">

            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">

              <div className="h-100">

                <div className="d-flex">

                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                    <i className="fa fa-times text-white"></i>
                  </div>

                  <div className="ps-3">
                    <h4>No Hidden Cost</h4>
                    <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                  </div>

                  <div className="border-end d-none d-lg-block"></div>

                </div>

                <div className="border-bottom mt-4 d-block d-lg-none"></div>

              </div>

            </div>

            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">

              <div className="h-100">

                <div className="d-flex">

                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                    <i className="fa fa-users text-white"></i>
                  </div>

                  <div className="ps-3">
                    <h4>Dedicated Team</h4>
                    <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                  </div>

                  <div className="border-end d-none d-lg-block"></div>

                </div>

                <div className="border-bottom mt-4 d-block d-lg-none"></div>

              </div>

            </div>

            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">

              <div className="h-100">

                <div className="d-flex">

                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                    <i className="fa fa-phone text-white"></i>
                  </div>

                  <div className="ps-3">
                    <h4>24/7 Available</h4>
                    <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default About;