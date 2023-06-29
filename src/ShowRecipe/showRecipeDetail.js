import React, { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite";
import fetchData from "../utils/utils";
import { useSelector } from "react-redux";
import saveToFavourites from "../favourites/favourites";
import ShowFavourites from "../favourites/showFavourites";
import useAuth from "../Authenticate/authenticate";
import useHelper from "./showOrHideDetail";
import ShowRecipe from "./showrecipe";
import { styleDetailRecipe, styleStatics } from "../styles/recipeStyle";
import { FaArrowLeft, FaArrowAltCircleLeft } from 'react-icons/fa';


function ShowRecipeDetail(props) {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const {authentication} = useAuth();
  const {details, hideDetail} = useHelper();
  useEffect(() => {
    fetchData(props.id).then(data => {
      setRecipeDetails(data);
    }).catch(error => {
      console.log(error);
    });
  }, [props.id]);

  const handleSaveFavourite = ({onSubmit, error}) => {
    saveToFavourites(authentication.user.id, props.id, recipeDetails.title, recipeDetails.image);
  }

  const handleShowDetail = () => {
    hideDetail();
  }

  const ingredients = recipeDetails && recipeDetails.extendedIngredients
  ? recipeDetails.extendedIngredients.map((ingredient) => {
      return (
          <label>
        <input type="checkbox" key={ingredient.id}/>
          {ingredient.name}: {ingredient.original}
        </label>
      );
    })
  : null;

  return (
    <>
    <div>
      <FaArrowAltCircleLeft
      onClick={handleShowDetail}
      className={css(styleStatics.arrow)}
       size='23'/>
        <div className={css(styleDetailRecipe.whole)}>
          <div key={recipeDetails.id} className={css(styleDetailRecipe.allRecipes)}>
            <div className={css(styleDetailRecipe.recipe)}>
              <img src={recipeDetails.image} alt={recipeDetails.title} />
              <h2>{recipeDetails.title}</h2>
            </div>
            <div className={css(styleDetailRecipe.detail)}>
          <h3 className={css(styleStatics.h3, styleStatics.decription)}>Description Of The Food</h3>
              <p
                dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}
              ></p>
            </div>
          </div>
          <button
          onClick={handleSaveFavourite}
          className={css(styleStatics.button)}
          >Save To Favourites</button>
          <h3 className={css(styleStatics.h3, styleStatics.followRecipe)}>Follow The Recipe</h3>
      
          <div className={css(styleDetailRecipe.recipeList)}>
            {ingredients}
          </div>
        </div>
    </div>
    </>
  );
}






export default ShowRecipeDetail;
