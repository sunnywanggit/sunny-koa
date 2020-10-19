const bcrypt = require('bcryptjs')
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
    //set 方法就是典型的观察者模式的应用
    password:{
        type:Sequelize.STRING,
        //只要我们对 password 进行赋值就会调用 set 方法
        set(val){
            //这个10的意思是说计算机在生成盐的时候所花费的成本，你可以理解成这个数字越大，计算机生成盐所花费的时间和成本就越来越大
            const salt = bcrypt.genSaltSync(10)
            //对原有密码进行加密，生成新的密码
            const password = bcrypt.hashSync(val,salt)
            //这样子就可以把加密过之后的密码保存到数据中库去了，同时需要说明的是 setDataValue 是 Model 上的方法,所以我们能直接使用 this 调用
            this.setDataValue('passwrod',password)
        }
    } ,
    openid:{
        type:Sequelize.STRING(64),
        unique:true,
    }
},{
    sequelize,
    tableName:'user'
})

module.exports = {User}



