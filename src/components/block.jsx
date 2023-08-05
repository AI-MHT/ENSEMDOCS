import { Link } from "react-router-dom";

const Block = ({ imageUrl, altText, title, linkTo }) => {
  const imagePath = process.env.PUBLIC_URL + imageUrl;

  return (
    <div className="card 1">
      <Link to={linkTo}>
        <div className="card_image">
          <img src={imagePath} alt={altText} />
        </div>
        <div className="card_title title-white">
          <div id="demoFont">{title}</div>
        </div>
      </Link>
    </div>
  );
};

export default Block;
