const { Sequelize, DataType } = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize({
    dialect: "postgres",
    host: process.env.DBhost,
    port: process.env.DBport,
    username: process.env.DBusername,
    password: process.env.DBpassword,
    database: process.env.DBdatabase,
    sync: true,
});
const users = require("./models/user")(sequelize);
const blogs = require("./models/blog")(sequelize);

const init = async function () {
    try {
        await sequelize.sync({ alter: true });
    } catch (error) {
        console.log("db > init > ", error);
    }
};

module.exports = {
    init,
    users,
    blogs,
    sequelize,
};