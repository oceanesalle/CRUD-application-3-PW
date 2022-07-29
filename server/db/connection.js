const mysql = require("mysql2");

const connection = mysql.createConnection({
  user:"root", 
  host:"localhost", 
  password:"password", 
  database:"namedatabase"
}); 

connection.connect((err)=>{
  if(err) throw err;
  console.log("DB connected");
});


module.exports = connection;