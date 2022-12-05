function createModelTransaction(sequelize, DataTypes) {
  const Transaction = sequelize.define(
    'Transaction', 
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
    timestamps: false,
    tableName: 'transaction',
    });

    Transaction.associate = (models) => {
      // 1 to 1 with orderDetail
      Transaction.hasOne(models.OrderDetail, {
        foreignKey: 'transactionId',
    });

  };
  return Transaction;
}

module.exports = createModelTransaction;