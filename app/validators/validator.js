
const {LinValidator,Rule} = require('../../core/lin-validator')

class PositiveIntegerValidator extends LinValidator{
    constructor(){
        //如果在一个子类里面使用 this 的话，必须要调用 super
        super()
        this.id = [
            new Rule('isInt','需要是正整数',{min:1})
        ]
    }
}

class RegisterValidator extends LinValidator{
    constructor(){
        super()
        this.email = [
            new Rule('isEmail','请填写正确的 Email',)
        ]
        this.password1 = [
            new Rule('isLength','最少6个字符，最多32个字符',{min:6,max:32}),
            //我们不希望用户的密码里面存在危险的字符，所以我们要指定用户密码的字符范围
            new Rule('matchs','密码长度必须在6~22位之间，包含字符、数字和 _','^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]'),
        ]
        this.password2 = this.password1
        this.nickname = [
            new Rule('isLength','昵称不符合长度规范',{min:2,max:10}),
        ]
        
    }

    //我们可以通过用户传递过来的参数拿到 password1 和 password2 ，然后对二者的相等性进行校验,注意，该函数必须以 validate 开头
    validatePassword(vals){
        const psw1 = vals.body.password1
        const psw2 = vals.body.password2
        if(psw1 !== psw2){
            throw new Error('两个密码必须相同')
        }
    }
}

module.exports = {
    PositiveIntegerValidator
}