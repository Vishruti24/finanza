import { useEffect, useState } from "react";
import { getProjects } from "../api/api";
import { getImage } from "../utils/getImage";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getProjects();
      setProjects(res.data.data);
    };

    fetchData();
  }, []);

  return (
    <div id="projects" className="container-xxl py-5">

      <div className="container">

        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
            Our Projects
          </p>

          <h1 className="display-5 mb-5">
            We Have Completed Latest Projects
          </h1>
        </div>

        <div className="row g-4">

          {projects.map((project) => {

            const imageUrl = getImage(project.image);

            return (
              <div key={project.id} className="col-lg-3 col-md-6">

                <div className="project-item">

                  <div className="position-relative overflow-hidden rounded">

                    {imageUrl && (
                      <img
                        className="img-fluid w-100"
                        src={imageUrl}
                        alt={project.title}
                      />
                    )}

                  </div>

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