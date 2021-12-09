import "./header.css";

const Header = () => {
  return (
    <header className="position-fixed top-0 p-3 bg-white w-100">
      <div className="container bg-whie d-flex align-items-center">
        <p className="name-sm m-0 sss font-weight-light font-sans-pro">
          Prakhar Shrivastava
        </p>
      </div>
    </header>
  );
};

export default Header;
