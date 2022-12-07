function createModelTransaction(sequelize, DataTypes) {
  const Transaction = sequelize.define(
    'transaction', 
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
      status: {
        type: DataTypes.ENUM('PENDING', 'SUCCESS', 'FAILED'),
        defaultValue: 'PENDING',
        allowNull: false,
     },
      date: {
        type: DataTypes.DATE,
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
    tableName: 'transaction',
  });
  Transaction.associate = (models) => {
    // 1 to 1 with orderDetail
    Transaction.hasOne(models.orderDetail, {
      foreignKey: 'transactionId',
    });
Transaction.associate = (models) => {
      // 1 to 1 with orderDetail
      Transaction.belongsTo(models.User, {
        foreignKey: 'id_user',
        as: 'transaction',
    });
  };
  return Transaction;
};

module.exports = createModelTransaction;