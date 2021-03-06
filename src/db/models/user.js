const { DataTypes } = require("sequelize");
module.exports = function (sequelize) {
    return sequelize.define(
        "users",
        {
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,

            },
            first_name: {
                defaultValue: "first name",
                allowNull: false,
                type: DataTypes.STRING(100),
            },
            last_name: {
                defaultValue: "last name",
                allowNull: false,
                type: DataTypes.STRING(100),
            },
            email: {
                unique: true,
                allowNull: false,
                type: DataTypes.STRING(50),
            },
            password: {
                allowNull: false,
                type: DataTypes.STRING(100),
            }
        },
        { timestamps: false }
    );

}