import "./custom-button.css";

const CustomButton = ({ name, redirect }) => {
  return (
    <a className="custom-button" title={name} href={redirect} target="blank">
      <span className="line left"></span>
      <span className="line top"></span>
      <span className="line right"></span>
      <span className="line bottom"></span>
      {name}
    </a>
  );
};

export default CustomButton;
