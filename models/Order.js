function createModelOrder(sequelize, DataTypes){
    const Order = sequelize.define('orders', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
          },
          id_user: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'users',
              key: 'id'
            }
          },
          status: {
            type: DataTypes.ENUM('PENDING', 'SUCCESS', 'FAILED'),
            defaultValue: 'PENDING',
            allowNull: false,
         },
          dateOrdered: {
           type: DataTypes.DATE,
            allowNull: false,
         },
          dateRequired: {
           type: DataTypes.DATE,
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
        tableName: 'orders',
    });
    return Order;
}

module.exports = createModelOrder;