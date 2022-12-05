function createModelOrder(sequelize, DataTypes){
    const Order = sequelize.define('order', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
          },
          id_member: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
    },{
        tableName: 'order',
    });
    return Order;
}

module.exports = createModelOrder;