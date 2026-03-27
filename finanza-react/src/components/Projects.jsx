import { useEffect, useState } from "react";
import { getProjects } from "../api/api";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProjects();
        console.log("PROJECT API:", res.data);
        setProjects(res.data.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="projects" className="container-xxl py-5">

      <div className="container">

        {/* Section Title */}
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
            Our Projects
          </p>

          <h1 className="display-5 mb-5">
            We Have Completed Latest Projects
          </h1>
        </div>

        <div className="row g-4">

          {projects.map((project, index) => {

            //  image 
            const imageUrl = project.image?.[0]?.url;

            return (
              <div key={project.id} className="col-lg-3 col-md-6">

                <div className="project-item" style={{ cursor: "pointer" }}>

                  {/* Image */}
                  <div
                    className="position-relative overflow-hidden rounded"
                    onMouseEnter={(e) => {
                      e.currentTarget.children[1].style.opacity = 1;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.children[1].style.opacity = 0;
                    }}
                  >

                    {imageUrl && (
                      <img
                        className="img-fluid w-100"
                        src={`http://localhost:1337${imageUrl}`}
                        alt={project.title}
                      />
                    )}

                    {/* Hover Link */}
                    <div
                      className="d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100"
                      style={{
                        background: "rgba(205, 194, 194, 0.5)",
                        opacity: 0,
                        transition: "0.4s",
                      }}
                    >
                      <a href="#">
                        <i className="fa fa-link fa-2x text-primary"></i>
                      </a>
                    </div>

                  </div>

                  {/* Text */}
                  <div className="p-4">

                    <p className="text-primary fw-semi-bold mb-2">
                      {project.category}
                    </p>

                    <h5 className="mb-0">
                      {project.title}
                    </h5>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}

export default Projects;