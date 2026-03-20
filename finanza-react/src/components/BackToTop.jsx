import { useEffect, useState } from "react";

function BackToTop() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggle);

    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollTop}
        className="btn btn-lg btn-primary btn-lg-square back-to-top"
      >
        ↑
      </button>
    )
  );
}

export default BackToTop;