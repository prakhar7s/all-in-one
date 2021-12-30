import "./cover-image.css";

const CoverImage = ({ src }) => {
  return (
    <div
      className="bg-gray position-absolute w-100 h-100"
      style={{
        background: "black",
      }}
    ></div>
  );
};

export default CoverImage;
