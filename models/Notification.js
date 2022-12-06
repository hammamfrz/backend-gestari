function createModelNotification(sequelize, DataTypes){
    const Notification = sequelize.define('notification', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
          },
          id_user: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          notif_mess: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    }, {
        tableName: 'notification',
    });
    return Notification;
}

module.exports = createModelNotification;