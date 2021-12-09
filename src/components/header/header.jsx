import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="position-fixed top-0 p-3 bg-white w-100">
      <div className="container bg-whie d-flex align-items-center justify-content-between">
        <p className="name-sm m-0 sss font-weight-light font-sans-pro">
          Prakhar Shrivastava
        </p>
        <div className="header-links d-flex flex-gap">
          <NavLink to="/" className="">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blogs">Blog</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/resume"> RÉSUMÉ</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
