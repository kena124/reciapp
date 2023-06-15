const express = require("express");
const db = require('../database/databaseconn');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());

let myar = []

db.get('SELECT recipeid FROM favourites WHERE userid = ?', 1, (err, row) => {
    myar = row.recipeid.split(',')
    let num = 715415
    console.log(myar.includes(String(num)))
    console.log(typeof num)

   
});
/* console.log(myar) */



// Start the server


// Close the database connection when the process is terminated
process.on('SIGINT', () => {
    db.close();
});
