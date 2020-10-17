const Sequelize = require('sequelize')
const {dbName,host,port,user,password} = require('../config/config').database

const sequelize = new Sequelize(dbName,user,password,{
    //指定数据库类型
    dialect:'mysql',
    host,
    port,
    //是否在命令行显示具体的 sql 操作
    logging:true,
    //使用北京时间来记录相关时间方面的数据
    timezone:'+08:00',
    define:{
        //carete_time updated_time delete_time
        timestamps:true,
        paranoid:true,
        createdAt:'created_at',
        updatedAt:'updated_at',
        deletedAt:'deleted_at',
        underscored:true
    }
})

//无需重新创建表即可添加新的字段
sequelize.sync({
    force:true
})

module.exports = {sequelize}