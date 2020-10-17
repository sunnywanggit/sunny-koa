const {LinValidator,Rule} = require('../../core/lin-validator');
const { User } = require('../modules/user');


class PositiveIntegerValidator extends LinValidator{
    constructor(){
        //如果在一个子类里面使用 this 的话，必须要调用 super
        super()
        this.id = [
            new Rule('isInt','需要是正整数',{min:1})
        ]
    }
}

//用户注册规则校验
class RegisterValidator extends LinValidator{
    constructor() {
        super();
        this.email = [
            new Rule('isEmail', '电子邮箱不符合规范，请输入正确的邮箱')
        ]
        this.password1 = [
            // 用户密码指定范围
            new Rule('isLength', '密码至少6个字符，最多22个字符', {
                min: 6,
                max: 22
            }),
            new Rule(
                'matches',
                '密码长度必须在6~22位之间，包含字符、数字和 _ ',
                '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]'
            )
        ]
        this.password2 = this.password1
        this.nickname = [
            new Rule('isLength', '昵称长度必须在4~32之间', {
                min: 4,
                max: 32
            }),
        ]
    }

    //我们可以通过用户传递过来的参数拿到 password1 和 password2 ，然后对二者的相等性进行校验,注意，该函数必须以 validate 开头
    //参数 vals 将包含用户传递过来的所有参数
    validatePassword(vals){
        const psw1 = vals.body.password1
        const psw2 = vals.body.password2
        if(psw1 !== psw2){
            throw new Error('两个密码必须相同')
        }
    }

    //保证 email 的唯一性
    async validateEmail(vals){
        const email = vals.body.email
        const user = await User.findOne({
            where:{
                //数据库的字段必须要等我们传进来的参数 email
                email:email
            }
        })
        if(user){
            throw new Error('email 已存在')
        }
    }
}

module.exports = {
    PositiveIntegerValidator,
    RegisterValidator
}