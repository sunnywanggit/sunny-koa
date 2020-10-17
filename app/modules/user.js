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
    email:{
        type:Sequelize.STRING(128),
        unique:true,
    },
    password:Sequelize.STRING,
    openid:{
        type:Sequelize.STRING(64),
        unique:true,
    }
},{
    sequelize,
    tableName:'user'
})

module.exports = {User}



