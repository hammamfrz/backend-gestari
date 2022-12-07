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

    Order.associate = (models) => {
        // 1 to 1 with orderDetail
        Order.belongsToMany(models.user, {
          foreignKey: 'id_user',
          as: 'order',
      });
      Order.belongsToMany(models.orderDetail, {
        foreignKey: 'id_user',
        as: 'orderDetail',
    });
  
    };
    return Order;
}

module.exports = createModelOrder;