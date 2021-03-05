const Pool = require("pg").Pool;

const pool = new Pool({
    user: "madeleinebarr",
    host: "localhost",
    port: 5432,
    database: "testmetdb"
});

module.exports = pool;