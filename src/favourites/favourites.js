const saveToFavourites = async (userId, recipeId, recipeName, recipeImage) => {
    try {
      const response = await fetch('/api/saveFavourites', {
        method: 'POST',
        body: JSON.stringify({userId, recipeId, recipeName, recipeImage}),
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('can\'t fetch');
    }
  };

  export default saveToFavourites;
