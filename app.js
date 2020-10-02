const Koa = require('koa')
const name = require('./api/v1/name.js')
const age = require('./api/v1/age.js')


const app = new Koa()

app.use(name.routes())
app.use(age.routes())

app.listen(3000)

