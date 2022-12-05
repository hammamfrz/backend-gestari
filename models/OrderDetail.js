function createModelOrderDetail(sequelize, DataTypes){
    const OrderDetail = sequelize.define('orderDetail', {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
          },
          id_katalog: {
            type: Sequelize.INTEGER,
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
            type: Sequelize.DATE,
            allowNull: false,
          },
          updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
          },
    },{
        tableName: 'orderDetail',
    });
    return OrderDetail;
}

module.exports = createModelOrderDetail;