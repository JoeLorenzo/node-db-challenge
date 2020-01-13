// Update with your config settings.

module.exports = {

  ddevelopment: {
    client: 'sqlite3',
    connection: {
      filename: './data/projects.db3'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

};
