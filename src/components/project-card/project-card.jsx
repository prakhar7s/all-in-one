import { useRef } from "react";
import CustomButton from "../resued-components/custom-button/custom-button";
import "./project-card.css";
import { useMediaQuery } from "react-responsive";

const ProjectCard = ({ data }) => {
  const projectCardRef = useRef();
  const effectRef = useRef();
  const isBigScreen = useMediaQuery({ query: "(min-width: 1224px)" });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const add = (e) => {
    const { pageX, pageY } = e;
    const { offsetTop, offsetLeft } = projectCardRef.current;
    const x = pageX - offsetLeft;
    const y = pageY - offsetTop;

    if (effectRef.current)
      effectRef.current.style.cssText = `left: ${x}px; top: ${y}px`;
  };

  const { images, liveLink, codeLink } = data;

  return (
    <figure ref={projectCardRef} onMouseEnter={add} className="project-card">
      <div className="project-thumbnail">
        {isBigScreen && (
          <>
            <div className="d-flex jusc-around options">
              <CustomButton redirect={codeLink} name="Code" />
              <CustomButton redirect={liveLink} name="Live Demo" />
            </div>
            <span className="effect" ref={effectRef} />
          </>
        )}
        <img src={images && images.props.src} alt="thumbnail" />
      </div>

      <figcaption className="about-project">
        <div className="d-flex project-information">
          <div className="project-type-icon"></div>
          <div className="content">
            <h1>Social media website</h1>
            <h2>
              C C++ CSS JAVASCRIPT | <span>Website</span>
            </h2>
          </div>
        </div>
        {isTabletOrMobile && (
          <div className="d-flex jusc-between">
            <CustomButton name="Code" />
            <CustomButton name="Live Demo" />
          </div>
        )}
      </figcaption>
    </figure>
  );
};

export default ProjectCard;
