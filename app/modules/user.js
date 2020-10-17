const {Sequelize,Model} = require('sequelize')
const {sequelize} = require('../../core/db')

class User extends Model{ }

User.init({
    id:{
        type:Sequelize.INTEGER,
        //主键最基本的两个条件：不能重复、不能为空
        primaryKey:true,
        autoIncrement:true
    },
    nickname:Sequelize.STRING,
    email:Sequelize.STRING,
    password:Sequelize.STRING,
    openid:{
        type:Sequelize.STRING(64),
        unique:true,
    }
},{
    sequelize,
    tableName:'user'
})



