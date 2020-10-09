const Koa = require('koa')
const Router = require('koa-router')
const parser = require('koa-bodyparser')
const InitManager = require('./core/init')
const { params } = require('./app/api/v1/age')

const app = new Koa()

app.use(parser())

process.cwd()

InitManager.initCore(app);


app.listen(3000)

