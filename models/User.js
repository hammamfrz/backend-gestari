function createModelUser(sequelize, DataTypes) {
  const User = sequelize.define(
  'user', 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    id_member: {
      unique: true,
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: true,
    },
    NIK: {
      unique: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATE,
      defaultValue: null,
      allowNull: true,
    },
    birthplace: {
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: true,
    },
    gender: {
      type: DataTypes.ENUM('L', 'P'),
      defaultValue: null,
      allowNull: true,
    },
    role: {
      type: DataTypes.ENUM('admin', 'user', 'superadmin'),
      defaultValue: 'user',
      allowNull: true,
    },
    balance: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    profile_picture: {
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    tableName: 'user',
  });
  return User;
}

module.exports = createModelUser;