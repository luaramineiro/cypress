const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const mysql = require("mysql");

// querying the database from Node
function queryDB(connectionInfo, query) {
  const connection = mysql.createConnection(connectionInfo);

  connection.connect();

  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        console.log(error);
        return reject(error);
      }

      connection.end();
      console.log(results);

      return resolve(results);
    });
  });
}

module.exports = defineConfig({
  projectId: "p3a2wa",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
      on("task", {
        // destructure the argument into the individual fields
        queryDatabase({ dbName, query }) {
          const connectionInfo = config.env.db[dbName];

          if (!connectionInfo) {
            throw new Error(`Do not have DB connection under name ${dbName}`);
          }

          return queryDB(connectionInfo, query);
        },
      });
    },
    specPattern: "**/*.{feature,features}",
  },
});
