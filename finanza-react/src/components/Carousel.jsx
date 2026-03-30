import { useEffect, useState } from "react";
import { getCarousels } from "../api/api";
import { getImage } from "../utils/getImage";

function Carousel() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCarousels()
      .then((res) => {
        setSlides(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("ERROR:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  if (!slides || slides.length === 0) {
    return <h2 style={{ textAlign: "center" }}>No Data Found</h2>;
  }

  return (
    <div className="container-fluid p-0 mb-5 wow fadeIn">
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">

          {slides.map((slide, index) => {
            const imageUrl = getImage(slide.image);

            return (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={slide.id}
              >
                {imageUrl && (
                  <img className="w-100" src={imageUrl} alt="carousel" />
                )}

                <div className="carousel-caption">
                  <div className="container">
                    <div className="row justify-content-start">
                      <div className="col-lg-8">

                        <p className="d-inline-block border border-white rounded text-primary fw-semi-bold py-1 px-3">
                          {slide.subtitle}
                        </p>

                        <h1 className="display-1 mb-4">
                          {slide.title}
                        </h1>

                        <a href="#" className="btn btn-primary py-3 px-5">
                          {slide.buttonText}
                        </a>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>
    </div>
  );
}

export default Carousel;