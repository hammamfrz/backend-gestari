function createModelTransaction(sequelize, DataTypes) {
  const Transaction = sequelize.define('Transaction', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_katalog: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    kertas_qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    plastik_qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    kaca_qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    logam_qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    khusus_qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total_qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('PENDING', 'SUCCESS', 'FAILED'),
        defaultValue: 'PENDING',
        allowNull: false,
    },
  }, {
    timestamps: false,
    tableName: 'transactions',
  });
  return Transaction;
}

module.exports = createModelTransaction;