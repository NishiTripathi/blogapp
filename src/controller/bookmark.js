// const { sequelize } = require("../db/index");
// const md5 = require("md5");
// function Init(app) {
//     app.post("/bookmark", async function (request, response) {
//         const { body } = request;
//         const { blog } = body;
//         const createdUser = await sequelize.models.users.create({
//             first_name,
//             last_name,
//             email,
//             password: md5(password),
//         });
//         response.status(200).send(createdUser);
//     });
// }
// module.exports = {
//     Init
// }