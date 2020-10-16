// create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll()
// insertOne()
// updateOne()



// Export the ORM object in module.exports
const connection = require("./connection.js");

const orm = {
  // Update this function so that it accepts a callback parameter and passes the
  // MySQL query result to the callback.
  select: (whatToSelect, tableInput) => {
    const queryString = "SELECT ?? FROM ??";
    const values = [whatToSelect, tableInput];
    connection.query(queryString, values, (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result);
    });
  },
  // Update this function so that it accepts a callback parameter and passes the
  // MySQL query result to the callback.
  selectWhere: (tableInput, colToSearch, valOfCol) => {
    const queryString = "SELECT * FROM ?? WHERE ?? = ?";
    const values = [tableInput, colToSearch, valOfCol];
    connection.query(queryString, values, (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result);
    });
  },
  // Update this function so that it accepts a callback parameter and passes the
  // MySQL query result to the callback.
  leftJoin: (
    whatToSelect,
    tableOne,
    tableTwo,
    onTableOneCol,
    onTableTwoCol
  ) => {
    const queryString = `
      SELECT ?? FROM ?? AS a
      LEFT JOIN ?? AS b
      ON a.?? = b.??`;
    const values = [
      whatToSelect,
      tableOne,
      tableTwo,
      onTableOneCol,
      onTableTwoCol,
    ];

    connection.query(queryString, values, (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result);
    });
  },
};

module.exports = orm;