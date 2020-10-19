const bcrypt = require('bcryptjs')

const Router = require('koa-router')
const {User} = require('../../modules/user')

//路有前缀，省略每一次都要写路由前缀
const router = new Router({ prefix:'/v1/user' }) 

const {RegisterValidator} = require('../../validators/validator')

//新增注册功能
router.post('/register',async (ctx)=>{
    const v = await new RegisterValidator().validate(ctx)
    //这个10的意思是说计算机在生成盐的时候所花费的成本，你可以理解成这个数字越大，计算机生成盐所花费的时间和成本就越来越大
    const salt = bcrypt.genSaltSync(10)
    //对原有密码进行加密，生成新的密码
    const password = bcrypt.hashSync(v.get('body.password2'),salt)
    
    const user = {
        nickname:v.get('body.nickname'),
        email:v.get('body.email'),
        //我们这里直接使用加密之后的密码
        password:password,
    }
    const result = await User.create(user)
})

module.exports = router