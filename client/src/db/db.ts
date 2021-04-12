const dbconfig = {
  client: "mysql2",
  connection: {
    database: "dashboard",
    user: "root",
    password: "kim01023",
  },
};

import knex from 'knex';

export default knex(dbconfig);