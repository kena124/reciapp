/* const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('reciapp.db');

export default function insertUser(props){
    const { name, email, password } = props;
    const insertUser = db.prepare('INSERT INTO users (name, email, password) VALUES (?, ?, ?)');
    insertUser.run(name, email, password);
    insertUser.finalize();
    
}

 */
