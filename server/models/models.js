const sequelize = require ("../db/db.js")
const {DataTypes} = require ("sequelize")

const Todo = sequelize.define('todo', {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    }

});

module.exports = {
    Todo
}