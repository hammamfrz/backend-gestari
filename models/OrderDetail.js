function createModelOrderDetail(sequelize, DataTypes){
    const OrderDetail = sequelize.define('orderDetail', {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
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
    OrderDetail.associate = (models) => {
      // 1 to Many with orderDetail
      OrderDetail.hasMany(models.Katalog, {
        foreignKey: 'katalogId',
    });

  };
    return OrderDetail;
}



module.exports = createModelOrderDetail;