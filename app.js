const Koa = require('koa')
const Router = require('koa-router')
const parser = require('koa-bodyparser')
const InitManager = require('./core/init')
const { params } = require('./app/api/v1/age')
const catchError = require('./middlewares/expection')

const app = new Koa()
//注册全局处理异常中间件
app.use(catchError)
app.use(parser())
process.cwd()
InitManager.initCore(app);


app.listen(3000)

