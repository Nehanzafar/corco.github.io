import { useState } from "react";
import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart, FaThumbsUp, FaRegThumbsUp, FaRegThumbsDown, FaThumbsDown } from "react-icons/fa";
import { Link } from "react-router-dom";


// To display the favourite icon
const favourite = (isFavourite) => {

  return isFavourite ? (
    <FaHeart className="absolute top-3 right-3 text-highlight-1 text-center -m-[0.4px] text-[0.95rem] group-hover:text-[#F39C12] animation-home-page" />
  ) : (
    <FaRegHeart className="absolute top-3 right-3 text-highlight-1 text-center -m-[0.4px] text-[0.95rem] group-hover:text-[#F39C12] animation-home-page" />
  );
};

// To display the like and dislike button
const likeDislike = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);


  return (
    <div className="flex flex-row">
      <div
        className={`rounded-full p-2 bg-textColors-1 mx-3 mb-1 shadow-standard hover:text-[#F39C12]`}
        onClick={() => {
          if (isLiked) {
            setIsLiked(false);
          } else {
            setIsLiked(true);
            setIsDisliked(false);
          }
        }}
      >
        {isLiked ? (
          <FaThumbsUp className="text-[0.9rem] text-highlight-1 hover:text-[#F39C12] animation-home-page" />
        ) : (
          <FaRegThumbsUp className="text-[0.9rem] text-highlight-1 hover:text-[#F39C12] animation-home-page" />
        )}
      </div>
      <div
        className={`rounded-full p-2 bg-textColors-1 mx-1 mb-1 shadow-standard`}
        onClick={() => {
          if (isDisliked) {
            setIsDisliked(false);
          } else {
            setIsDisliked(true);
            setIsLiked(false);
          }
        }}
      >
        {isDisliked ? (
          <FaThumbsDown className="text-[0.9rem] text-highlight-1 hover:text-[#F39C12] animation-home-page" />
        ) : (
          <FaRegThumbsDown className="text-[0.9rem] text-highlight-1 hover:text-[#F39C12] animation-home-page" />
        )}
      </div>
    </div>
  );
};

// To check if the image is broken and apply the right styling
const RecipeImage = ({url, title, isFavourite, setIsFavourite, onError}) => {
  return (
    <div
      className="relative rounded-xl shadow-standard group-hover:shadow-none"
      onClick={() => setIsFavourite(!isFavourite)}
    >
      <img
        src={url}
        alt={title}
        width={"270px"}
        height={"163px"}
        className="rounded-xl"
        onError={onError}
      />
      {favourite(isFavourite)}
    </div>
  );
};

// The component which is used in the search results and the home page
/* eslint-disable react/prop-types */
const RecipeDisplay = ({ recipe, onErrorImage }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <div className="rounded-xl w-[270px] h-[318px] bg-backgroundColors-1/80 md:my-4 my-1 md:mx-2 mx-1 group group hover:shadow-lg flex flex-col justify-end animation-home-page">
      <RecipeImage url={recipe?.image} title={recipe?.title} isFavourite={isFavourite} setIsFavourite={setIsFavourite} onError={onErrorImage} />
      <Link to={`/RecipeCard/${recipe?.id || 0}`} >
      <h1 className="font-poppins font-bold text-textColors-1 text-[20px] mt-2 px-2 mx-1 overflow-clip overflow-ellipsis whitespace-nowrap w-[270px] h-[50px]">
        {recipe?.title || "Recipe Title"}
      </h1>
    </Link>

      {likeDislike()}
    </div>
  );
};

RecipeDisplay.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default RecipeDisplay;
