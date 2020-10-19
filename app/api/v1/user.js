const bcrypt = require('bcryptjs')
const Router = require('koa-router')
const {User} = require('../../modules/user')

//路有前缀，省略每一次都要写路由前缀
const router = new Router({ prefix:'/v1/user' }) 

const {RegisterValidator} = require('../../validators/validator')

//新增注册功能
router.post('/register',async (ctx)=>{
    const v = await new RegisterValidator().validate(ctx)
    const user = {
        nickname:v.get('body.nickname'),
        email:v.get('body.email'),
        //当我们对 password 赋值的时候，sequelize 自动就会调用 User 模型里面 passwrod 字段的 set 方法
        password:v.get('body.password2'),
    }
    const result = await User.create(user)
    //告诉用户他们注册成功了
    throw new global.errs.Success()
})

module.exports = router