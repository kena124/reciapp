import React from "react";
import logo from '../assets/logo.jpg';
import { StyleSheet, css } from "aphrodite";
import gotohome from './gotohome'
function Header() {
    return(
        <>
            <header className={css(headerStyle.whole)}>
                <img 
                src={logo}
                alt='logo'
                className={css(headerStyle.logo)}
                onClick={gotohome}
                />
                <div className={css(headerStyle.nav)}>
                    <p className={css(headerStyle.nav1)}>Favourites</p>
                    <p className={css(headerStyle.nav1)}>About</p>
                </div>
            </header>
        </>
    );
}

const headerStyle = StyleSheet.create({
    whole: {
    },
    logo: {
        width: '50px',
        float: 'left',
        margin: '7px 0 0 10px',
        borderRadius: '40%',
        cursor: 'pointer',
        transition: '0.5s',
        ':hover':{
            filter: 'brightness(90%)'
        }
    },
    nav: {
        display: 'flex',
        marginLeft: '40%',
        
    },
    nav1: {
        marginRight: '10%',
        padding: '5px',
        cursor: 'pointer',
        borderRadius: '7%',
        backgroundColor: 'rgba(110,123,65,0.6)',
        textAlign: 'center',
        width: '100px',
        color: '#d1d2a3',
        ':hover':{
            backgroundColor: 'rgba(155,123,65,0.3)'
        }
    }
})

export default Header;
