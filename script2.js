const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"gatobase"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("select Id_sn,Color,edad,Genero,Raza,Peso,Img from gatos_sin_adoptar",function (err,result,fields){
        if (err) throw err;
        gatos=result;
        module.exports={gatos};
        console.log(gatos);
    })
  });

document.addEventListener("DOMContentLoaded", function() {
});