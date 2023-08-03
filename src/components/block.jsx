import {Link} from "react-router-dom"

const Block = ({ imageUrl, altText, title, linkTo }) => {
    return (
      <div className="card 1">
        <Link to={linkTo}>
          <div className="card_image">
            <img src={imageUrl} alt={altText} />
          </div>
          <div className="card_title title-white">
            <div id="demoFont">{title}</div>
          </div>
        </Link>
      </div>
    );
  };

export default Block;
  