const { sequelize } = require("../db/index");
const passport = require("passport");
function Init(app) {
    app.get("/blogs", async function (request, response) {
        const blogs = await sequelize.models.blogs.findAll({});
        response.status(200).send(blogs);
    });
    app.get("/blogs/:id", async function (request, response) {
        const { id } = request.params;
        const blog = await sequelize.models.blogs.findOne({ where: { id } });
        response.status(200).send(blog);
    });
    app.post("/blogs", passport.authenticate("jwt", { session: false }), async function (request, response) {
        const { body } = request;
        const { title, description } = body;
        const createdBlog = await sequelize.models.blogs.create({
            title,
            description,
        });
        response.status(200).send(createdBlog);
    });
    app.put("/blog/:id", passport.authenticate("jwt", { session: false }), async function (request, response) {
        const { id } = request.params;
        const blog = await sequelize.models.blogs.findOne({ where: { id } });
        const { body } = request;
        const { title, description } = body;
        blog.title = title ? title : blog.title;
        blog.description = description ? description : blog.description;
        await blog.save();
        response.status(200).send(blog);
    });
    app.delete("/blog/:id", passport.authenticate("jwt", { session: false }), async function (request, response) {
        const { id } = request.params;
        const blog = await sequelize.models.blogs.findOne({ where: { id } });
        const dest = blog.destroy();
        response.status(200).send({ dest });
    })
}
module.exports = {
    Init
}