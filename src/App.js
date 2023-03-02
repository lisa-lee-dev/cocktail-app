import React from "react";
import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import CocktailCard from "./Components/CocktailCard.jsx";
import { useState } from "react";

const cocktail1 = {
  idDrink: "11417",
  strDrink: "Gin Sour",
  strDrinkAlternate: null,
  strTags: "Sour",
  strVideo: null,
  strCategory: "Ordinary Drink",
  strIBA: null,
  strAlcoholic: "Alcoholic",
  strGlass: "Whiskey sour glass",
  strInstructions:
    "In a shaker half-filled with ice cubes, combine the gin, lemon juice, and sugar. Shake well. Strain into a sour glass and garnish with the orange slice and the cherry.",
  "strInstructionsZH-HANS": null,
  "strInstructionsZH-HANT": null,
  strDrinkThumb:
    "https://www.thecocktaildb.com/images/media/drink/noxp7e1606769224.jpg",
  strIngredient1: "Gin",
  strIngredient2: "Lemon juice",
  strIngredient3: "Sugar",
  strIngredient4: "Orange",
  strIngredient5: "Maraschino cherry",
  strIngredient6: null,
  strIngredient7: null,
  strIngredient8: null,
  strIngredient9: null,
  strIngredient10: null,
  strIngredient11: null,
  strIngredient12: null,
  strIngredient13: null,
  strIngredient14: null,
  strIngredient15: null,
  strMeasure1: "2 oz ",
  strMeasure2: "1 oz ",
  strMeasure3: "1/2 tsp superfine ",
  strMeasure4: "1 ",
  strMeasure5: "1 ",
  strMeasure6: null,
  strMeasure7: null,
  strMeasure8: null,
  strMeasure9: null,
  strMeasure10: null,
  strMeasure11: null,
  strMeasure12: null,
  strMeasure13: null,
  strMeasure14: null,
  strMeasure15: null,
  strImageSource:
    "https://pixabay.com/photos/gin-and-tonic-gin-sour-cocktail-4499713/",
};

const API_URL =
  "http://www.thecocktaildb.com/api/json/v1/1/search.php?apikey=1";

const App = () => {
  // useState value [] because it is an empty array
  const [cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchCocktails = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(response);
    console.log(data);
    console.log(`${API_URL}&s=${title}`);

    setCocktails(data.drinks);
  };
  useEffect(() => {
    searchCocktails(``);
  }, []);
  return (
    <div className="app">
      <h1>ThirstDay</h1>
      <div className="search">
        <input
          placeholder="search for coktails"
          //as we have defined a searchTerm now, we pass our Value in the search bar
          value={searchTerm}
          //onChange defines the input we give when we type the cocktail we search - the e is coming from the callback function
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchCocktails(searchTerm)}
        />
      </div>
      {cocktails?.length > 0 ? (
        <div className="container">
          {cocktails.map((cocktail) => (
            <CocktailCard cocktail={cocktail} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No cocktails found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
