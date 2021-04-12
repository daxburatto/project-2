const { Model, DataTypes } = require('sequelize');
<<<<<<< HEAD
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create our User model
class User extends Model {
  // set up method to run on instance data (per user) to check password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// create fields/columns for User model
User.init(
  {
=======

const sequelize = require('../config/connection.js');

class User extends Model {}

User.init(
  {
    // define columns
>>>>>>> fc8380b90b83a50e348f8bb26231bcf1b594241b
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
<<<<<<< HEAD
    name: {
      type: DataTypes.STRING,
      defaultValue: "Anonomous",
      allowNull: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      }
    },
    profileImage: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true,
      }
    },
  },
  {
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },

      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      }
    },
=======
    dog_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    owner_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dog_age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dog_breed: {
        type: DataTypes.STRING,
        allowNull: false
    },
  },
  {
>>>>>>> fc8380b90b83a50e348f8bb26231bcf1b594241b
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
<<<<<<< HEAD
    modelName: 'user'
=======
    modelName: 'user',
>>>>>>> fc8380b90b83a50e348f8bb26231bcf1b594241b
  }
);

module.exports = User;