import React from "react";
import { StyleSheet, css } from "aphrodite";

function Footer() {
    return(
        <>
        <div className={css(footerStyle.container)}>
            <footer className={css(footerStyle.footer)}>
            <p>ReciApp</p>
            </footer>
        </div>
        </>
    );
}

const footerStyle = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        bottom: '0',
        textAlign: 'center',
        color: '#f7f7d0',
        width: '100%',
        
    },

    footer: {
        
        backgroundColor: 'rgba(85, 125, 96, 0.1)',
        padding: '1px',
        
    }

})

export default Footer;
