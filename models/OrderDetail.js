function createModelOrderDetail(sequelize, DataTypes){
    const OrderDetail = sequelize.define('orderDetail', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      id_order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'order',
          key: 'id'
        }
      },
      id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      id_katalog: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Katalog',
          key:'id'
        }
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total_price: {
        type: DataTypes.INTEGER,
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