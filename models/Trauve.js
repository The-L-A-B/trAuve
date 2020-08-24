module.exports = function (sequelize, DataTypes) {
    var Trauve = sequelize.define("Trauve", {
        type: DataTypes.STRING,
        price: DataTypes.INTEGER,
        name: DataTypes.STRING,
        size: DataTypes.STRING
    });
    return Trauve;
};