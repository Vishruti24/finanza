import { useEffect, useState } from "react";
import { getAbout } from "../api/api";
import { getImage } from "../utils/getImage";

function About() {

  const [about, setAbout] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await getAbout();
        setAbout(res.data.data[0]);
      } catch (error) {
        console.error("Error fetching about:", error);
      }
    };

    fetchData();

  }, []);

  const imageUrl = getImage(about?.image);

  return (
    <div className="container-xxl py-5">

      <div className="container">

        <div className="row g-4 align-items-center mb-4">

          {/* IMAGE */}
          <div className="col-lg-6">

            {imageUrl && (
              <img
                src={imageUrl}
                alt="about"
                style={{
                  width: "100%",
                  height: "450px",
                  objectFit: "cover",
                  borderRadius: "10px"
                }}
              />
            )}

          </div>


          {/* CONTENT */}
          <div className="col-lg-6">

            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
              About Us
            </p>

            <h1 className="display-5 mb-4">
              {about?.title}
            </h1>

            <p className="mb-4">
              {about?.description}
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
                  <p>{about?.story}</p>
                </div>

                <div className="tab-pane fade" id="mission">
                  <p>{about?.mission}</p>
                </div>

                <div className="tab-pane fade" id="vision">
                  <p>{about?.vision}</p>
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* FEATURES */}
        <div className="border rounded p-4">

          <div className="row g-4">

            {/* Feature 1 */}
            <div className="col-lg-4">

              <div className="d-flex">

                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                  <i className="fa fa-times text-white"></i>
                </div>

                <div className="ps-3">
                  <h4>{about?.feature1Title}</h4>
                  <span>{about?.feature1Desc}</span>
                </div>

              </div>

            </div>


            {/* Feature 2 */}
            <div className="col-lg-4">

              <div className="d-flex">

                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                  <i className="fa fa-users text-white"></i>
                </div>

                <div className="ps-3">
                  <h4>{about?.feature2Title}</h4>
                  <span>{about?.feature2Desc}</span>
                </div>

              </div>

            </div>


            {/* Feature 3 */}
            <div className="col-lg-4">

              <div className="d-flex">

                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                  <i className="fa fa-phone text-white"></i>
                </div>

                <div className="ps-3">
                  <h4>{about?.feature3Title}</h4>
                  <span>{about?.feature3Desc}</span>
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