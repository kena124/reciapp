import React from "react";
import {insertUser} from "./database";

function trialMode(){
    return (
        <>
        <insertUser 
        name='Leul'
        email='leul@gmail.com'
        password='12345'
        />
        
        </>
    );
}


export default trialMode;
