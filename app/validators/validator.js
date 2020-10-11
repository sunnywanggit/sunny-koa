
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

module.exports = {
    PositiveIntegerValidator
}