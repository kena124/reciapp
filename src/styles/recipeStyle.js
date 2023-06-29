import { StyleSheet } from "aphrodite";
const styleRecipe = StyleSheet.create({
    allRecipes: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '15px'
      
    },
    
    recipe: {
      margin: '50px 0 10px 0',
      padding: '10px',
      border: '10px none rgba(41, 74, 48,0.2)',
      borderRadius: '13%',
      width: '380px',
      textAlign: 'center',
      color: '#999fc4',
      cursor: 'pointer',
      
      
      
    },
    h3: {
      width: '180px',
      textAlign: 'center',
      color: 'rgba(169, 255, 196,0.7)',
      cursor: 'pointer',
      transition: '0.3s',
      ":hover": {
        color: 'rgba(190, 255, 196,0.4)'
      }
    },
  
    image: {
      borderRadius: '5%',
      ':hover':{
        width: '101%'
      }
    }
  });

  const styleStatics = StyleSheet.create({
    h3: {
      border: '10px none rgba(41, 74, 48,0.2)',
      borderRadius: '13%',
      width: '200px',
      textAlign: 'center',
      color: '#999fc4',
    },
  
    decription: {
      margin: '0 0 0 20%',
    },
  
    followRecipe: {
      margin: '0 0 0 30%',
    },
  
     button: {
        marginBottom: '15px',
        background: 'rgba(125,123,65,0.6)',
        width: '150px',
        cursor: 'pointer',
        marginLeft: '180px',
        borderColor: 'rgba(155,123,65,0.3)',
        color: 'rgba(238, 245, 181,0.8)',
        ':hover': {
          background: 'rgba(155,123,65,0.3)',
        }
    },
    arrow: {
      color: 'rgba(28, 245, 181,0.8)',
      cursor: 'pointer',
      marginLeft: '20px',
      ":hover": {
        marginLeft: '17px',
        color: 'rgba(8, 245, 181,0.5)'
      }
    }
  })
  
  const styleDetailRecipe = StyleSheet.create({
    allRecipes: {
      display: 'flex',
      /* justifyContent: 'space-between', */
      alignItems: 'center',
      marginBottom: '10px',
      paddingLeft: '100px',
      '@media (max-width: 800px)': {
        display: 'flex',
        flexDirection: 'column',
        flexFlow: 'column-reverse wrap',
        alignItems: 'center',
        width: '70%',
    }
        
      
    },
    recipe: {
      display: 'flex',
      flexDirection: 'column',
      margin: '50px 0 10px 0',
      padding: '5px',
      border: '10px none rgba(41, 74, 48,0.2)',
      borderRadius: '13%',
      width: '30%',
      textAlign: 'center',
      color: '#999fc4',
      '@media (max-width: 800px)':{
        width: '70%',
      }
    },
  
    
  
    detail: {
        paddingLeft: '20px',
        paddingRight: '300px',
        '@media (max-width: 800px)':{
          display: 'flex',
          flexDirection: 'column',
          width: '70%',
          paddingLeft: '0',
          paddingRight: '0'
        }
    },
  
    whole: {
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '60px',
        '@media (max-width: 800px)': {
          width: '100%'
        }
    },
  
    recipeList: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '25%',
        width: '40%',
        '@media (max-width: 800px)':{
          width: '70%',
        }
    }
  
   
  });
    
  export {styleDetailRecipe, styleRecipe, styleStatics}
