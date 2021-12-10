import { NavLink } from "react-router-dom";
import "./header.css";
import { useMediaQuery } from "react-responsive";
import { useContext } from "react";
import { HeaderContext } from "../../context/header-context";

const Header = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 724px)",
  });

  const { isScrolled, isHomePage } = useContext(HeaderContext);
  // "55, 71, 79"
  return (
    <header
      className="header position-fixed top-0 p-3 w-100"
      style={{
        backgroundColor: isScrolled ? "white" : "transparent",
        "--headerColor":
          isScrolled && isHomePage
            ? "55, 71, 79"
            : !isHomePage && !isScrolled
            ? "255,255,255"
            : "55,71,79",
      }}
    >
      <div className="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between">
        <p className="name-sm m-0 font-weight-light font-sans-pro">
          Prakhar Shrivastava
        </p>
        {isDesktop && (
          <div className="header-links d-flex flex-gap">
            <NavLink to="/" className="">
              Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blogs">Blog</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/resume"> RÉSUMÉ</NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
