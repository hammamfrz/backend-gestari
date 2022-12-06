function createModelInventaris(sequelize, DataTypes) {
  const Inventaris = sequelize.define('Inventaris', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_inventaris: {
        type: DataTypes.STRING,
        unique: true,
        defaultValue: null,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year_of_production: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('Baik', 'Rusak', 'Dalam Perbaikan'),
        defaultValue: null,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: null,
        allowNull: false,
    },
    satuan: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        defaultValue: null,
        allowNull: false,
    },
  }, {
    tableName: 'inventaris',
    timestamps: false
  });
  return Inventaris;
}

module.exports = createModelInventaris;