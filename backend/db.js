const Pool = require("pg").Pool;
const pool = new Pool({
  // user: "me",
  // host: "localhost",
  // database: "api",
  // password: "password",
  user: "dhanshree",
  host: "localhost",
  database: "payroll",
  password: "5678@bits",
  port: 5432,
});

const query = (text, params) => {
  return new Promise((resolve, reject) => {
    pool
      .query(text, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
module.exports = { query };
