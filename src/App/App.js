import './App.css';
import Header from '../Header/header';
import React from 'react';
import Footer from '../Footer/footer';
import './App.css'
import AuthComponent from '../Authenticate/loginSingup';
import ShowFavourites from '../favourites/showFavourites';
import SelectPreference from '../preferences/preferences';
function App() {

  
  return (
    <React.Fragment>
      <Header />
      
      <AuthComponent />
      <Footer/>
    </React.Fragment>
  );
}


export default App;
