const {DataTypes} = require("sequelize");
module.exports = function(sequelize){
    return sequelize.define(
        "blogs",
        {
            id:{
                primaryKey:true,
                autoIncrement:true,
                type : DataTypes.INTEGER,
                
            },
            title:{
                defaultValue:"title",
                allowNull: false,
                type:DataTypes.STRING(100),
            },
            description:{
                 defaultValue:"description",
                 allowNull:false,
                 type:DataTypes.STRING(100),
            },
        },
        {timestamps :false}
    );

}
