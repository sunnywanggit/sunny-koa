
//HttpException 之所以要继承 Error ,是因为我们要抛出 error ，只有是 Error 类型的才能抛出 error
class HttpException extends Error{
    constructor(msg='服务器异常',errorCode=10000,code=400){
        super()
        this.errorCode = errorCode,
        this.code = code,
        this.msg = msg
    }
}

class ParameterException extends HttpException{
    constructor(msg,errorCode){
        super()
        this.code = 400
        this.msg = msg || '参数错误'
        this.errorCode = errorCode || 10000

    }
}

class Success extends HttpException{
    constructor(msg,errorCode){
        super()
        //201 操作成功 200 是查询成功的一个标识 ,如果说你提交了一个数据那么应该使用 201 这个状态码
        this.code = 201
        this.msg = msg || '参数错误'
        this.errorCode = errorCode || 10000

    }
}

module.exports = {
    HttpException,
    ParameterException,
    Success
}








