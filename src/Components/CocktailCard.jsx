import React from "react";

/* ({ movie1 }) is the same as (props) */
const CocktailCard = ({ cocktail }) => {
  return (
    <div className="cocktail">
      <div>
        <p>{cocktail.strCategory}</p>
      </div>
      <div>
        {/*cocktail.strImageSource !== "N/A" checks if there is an image */}
        <img
          src={
            cocktail.strDrinkThumb !== "N/A"
              ? cocktail.strDrinkThumb
              : "https://via.placeholder.com/400"
          }
          alt={cocktail.strDrink}
        />
      </div>
      <div>
        <span>{cocktail.strTags}</span>
        <h3>{cocktail.strDrink}</h3>
      </div>
    </div>
  );
};

export default CocktailCard;
