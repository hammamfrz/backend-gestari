function createModelOrderDetail(sequelize, DataTypes){
    const OrderDetail = sequelize.define('orderDetail', {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
          },
          id_katalog: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          total_price: {
            type: DataTypes.INTEGER,
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
        tableName: 'orderDetail',
    });
    return OrderDetail;
}

module.exports = createModelOrderDetail;