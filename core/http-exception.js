
//HttpException 之所以要继承 Error ,是因为我们要抛出 error ，只有是 Error 类型的才能抛出 error
class HttpException extends Error{
    constructor(msg='服务器异常',errorCode=10000,code=400){
        super()
        this.errorCode = errorCode,
        this.code = code,
        this.msg = msg
    }
}

module.exports = HttpException
