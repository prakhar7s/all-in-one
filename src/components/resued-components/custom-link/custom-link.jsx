import "./custom-link.css";

const CustomLink = (props) => {
  const { name, color, url } = props;
  return (
    <a
      className="custom-link py-1 px-2"
      style={{
        "--bg": color,
        border: `1px solid ${color}`,
        color,
      }}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {name}
    </a>
  );
};

export default CustomLink;
