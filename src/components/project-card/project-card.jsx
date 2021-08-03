import { useRef } from "react";
import "./project-card.css";

const ProjectCard = () => {
  const projectCardRef = useRef();
  const effectRef = useRef();

  const add = (e) => {
    const { pageX, pageY } = e;
    // console.log(pageX, pageY);

    const { offsetTop, offsetLeft } = projectCardRef.current;

    console.log(offsetTop, offsetLeft);

    const x = pageX - offsetLeft;
    const y = pageY - offsetTop;

    effectRef.current.style.cssText = `left: ${x}px; top: ${y}px`;
  };

  return (
    <figure ref={projectCardRef} onMouseEnter={add} className="project-card">
      <div className="project-thumbnail">
        <div className="d-flex jusc-between options">
          <button>Code</button>
          <button>Live demo</button>
        </div>
        <div className="effect" ref={effectRef}></div>
        <img
          src="https://images.unsplash.com/photo-1627727240040-c07d7f6f24b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=670&q=80"
          alt="thumbnail"
        />
      </div>

      <figcaption className="about-project">
        <div className="d-flex project-information">
          <div className="project-type-icon"></div>
          <div>
            <h1>Social media website</h1>
            <h2>
              C C++ CSS JAVASCRIPT | <span>Website</span>
            </h2>
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

export default ProjectCard;
