import React, { useState, useEffect, useReducer } from 'react';
import fetchData from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import ShowRecipeDetail from './showRecipeDetail';
import SelectPreference from '../preferences/preferences';
import { useSelector } from 'react-redux';
import useHelper from './showOrHideDetail';
import ShowFavourites from '../favourites/showFavourites';
import { styleRecipe } from '../styles/recipeStyle';

function ShowRecipe() {
  const [recipes, setRecipes] = useState([]);
  const [visibleSelected, setVisibleSelected] =useState(null);
  const preferneces = useSelector(state => state.preferences);
  const [showPrefer, setShowPrefer] = useState(false);
  const {details, showDetail, hideDetail} = useHelper();

  useEffect(() => {
    fetchData('',preferneces.type,preferneces.diet,preferneces.intolerance,preferneces.maxTime).then(data => {
      setRecipes(data.results);
    }).catch(error => {
      console.log(error);
    });
  }, [preferneces]);

  const handleRecipeClick = (recipe) => {
    setVisibleSelected(recipe);
    showDetail();
  }

  const handleShowPrefer = () => {
    setShowPrefer(!showPrefer);
  }
  

  

  return (
    <div>
      {details.ShowFavourites ?
      <ShowFavourites /> :
      details.showDetail ? (
        <ShowRecipeDetail
        id={visibleSelected}
        />
      ) : (
        <>

          <p
          onClick={handleShowPrefer}
          className={css(styleRecipe.h3)}>{showPrefer ? 'Hide Preference':'Show Preference'}</p>
            {showPrefer && <SelectPreference />}
                <div className={css(styleRecipe.allRecipes)}>
          {recipes.map(recipe => (
            <div
            key={recipe.id}
            className={css(styleRecipe.recipe)}
            onClick={() => handleRecipeClick(recipe.id)}
            >
              <img
              src={recipe.image}
              alt={recipe.title}
              className={css(styleRecipe.image)}
              />
              <h2>{recipe.title}</h2>
            </div>
          ))}
                </div>
        </>
      )}
    </div>
  );
}



export default ShowRecipe;
