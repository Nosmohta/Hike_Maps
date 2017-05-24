const pg = require("pg");
const settings = require("./dbsettings"); // settings.json



const config = new pg.Client({
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
});


module.exports = {
  connect: (callback) => {
    const client = new pg.Client(config);

    client.connect((error) => {
      if (error) throw error;
      callback(error, client);
    });
  },
  close: (client) => {
    client.end((error) => {
      if (error) throw error;
    });
  }
}




