const db = require('./database');
const knex = require("knex");


module.exports = {

  searchName: (name, callback) => {
    db.connect( ( err, client) => {
      if (err) throw err;
      client.query("SELECT * FROM famous_people WHERE (first_name = $1) OR (last_name = $1)", [name], (err, result) => {
        if (err) {return console.error("error running query", err);}
        callback(result.rows[0]);
        db.close(client);
        });
    });
  }




}