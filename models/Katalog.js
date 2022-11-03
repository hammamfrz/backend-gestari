function createModelKatalog(sequelize, DataTypes) {
    const Katalog = sequelize.define('Katalog', {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
      },
      type: {
        type: DataTypes.ENUM('kertas', 'plastik', 'kaca', 'logam', 'khusus'),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
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
      tableName: 'katalog',
    });
    return Katalog;
}

module.exports = createModelKatalog;