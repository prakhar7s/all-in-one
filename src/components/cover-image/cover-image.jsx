import "./cover-image.css";

const CoverImage = ({ src }) => {
  return (
    <div className="cover-image-div">
      <img src={src} alt="cover" loading="lazy" />
    </div>
  );
};

export default CoverImage;
