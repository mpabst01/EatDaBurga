// create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll()
// insertOne()
// updateOne()
const connection = require("./connection.js");
const { table } = require("console");

function questionMarks(num) {
  const array = [];

  for (var x = 0; x < num; x++) {
    array.push("?");
  }
  return array.toString();
}

function objToMySql(ob) {
  const array = [];

  for (var key in ob) {
    array.push(key + "=" + ob[key]);
  }
  return array.toString();
}
const orm = {
  selectAll: (tableInput, colToSearch, valOfCol) => {
    const queryString = "SELECT * FROM " + tableInput + ";";
    const values = [tableInput, colToSearch, valOfCol];

    connection.query(queryString, values, (err, result) => {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  insertOne: (tableInput, colToSearch, valOfCol) => {
    const queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += colToSearch.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += questionMarks(valOfCol.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, valOfCol, function (err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  updateBurgas: (tableInput, columnValue, condition) => {
    const queryString = "UPDATE " + tableInput;
    queryString += " SET ";
    queryString += objToMySql(columnValue);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }
        callback(result);
    });
  }
};

module.exports = orm;
