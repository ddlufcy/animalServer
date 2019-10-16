module.exports = (sequelize, DataTypes) =>{
  const Animal = sequelize.define('animal', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    legNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    predator: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  })
  return Animal;
}