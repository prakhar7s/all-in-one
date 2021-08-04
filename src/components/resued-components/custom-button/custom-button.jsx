import "./custom-button.css";

const CustomButton = ({ name, redirect }) => {
  return (
    <a className="custom-button" href={redirect} target="blank">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {name}
    </a>
  );
};

export default CustomButton;
