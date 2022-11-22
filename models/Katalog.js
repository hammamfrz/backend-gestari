function createModelKatalog(sequelize, DataTypes) {
    const Katalog = sequelize.define('Katalog', {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
      },
      type: {
        type: DataTypes.ENUM('KERTAS', 'PLASTIK', 'KACA', 'LOGAM', 'KHUSUS'),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      satuan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      kode_katalog: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
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