function createModelJourney (sequelize, DataTypes) {
  const Journey = sequelize.define('Journey', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'journey'
  });
  return Journey;
}

module.exports = createModelJourney