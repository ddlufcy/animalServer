const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.NAME, 'postgres', process.env.PASS, {
  host: 'localhost',
  dialect: 'postgres',
})

sequelize.authenticate()
  .then(
    function () {
      console.log('Connected to morningChallenge postgres database!')
    },
    function (err) {
      console.log(err);
    }
  )

module.exports = sequelize;