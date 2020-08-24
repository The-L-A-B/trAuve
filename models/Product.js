module.exports = function (sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
        type: DataTypes.STRING,
        price: DataTypes.INTEGER,
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        size: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
    });
    return Product;
};