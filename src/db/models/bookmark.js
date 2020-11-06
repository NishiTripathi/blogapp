const {DataTypes} = require("sequelize");
module.exports = function(sequelize){
    return sequelize.define(
        "bookmarks",
        {
            id:{
                primaryKey:true,
                autoIncrement:true,
                type : DataTypes.INTEGER,
                
            },
            blog_id:{
                allowNull: false,
                type:DataTypes.INTEGER,
            },
            user_email:{
                allowNull:false,
                type:DataTypes.STRING(100),
                unique:true
            },
        },
        {timestamps :false}
    );

}
