const { sequelize } = require("../db/index");
const md5 = require("md5");
function Init(app) {
    app.post("/auth/signup", async function (request, response) {
        const { body } = request;
        const { first_name, last_name, email, password } = body;
        const createdUser = await sequelize.models.users.create({
            first_name,
            last_name,
            email,
            password: md5(password),
        });
        response.status(200).send(createdUser);
    });
}
module.exports = {
    Init
}