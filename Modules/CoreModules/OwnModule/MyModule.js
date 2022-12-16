const { info } = require("console")

class A{
    show(){
        console.log('Test Module with Show..')
    }
    info(){
        console.log('Test Module with info..')
    }
}

module.exports=A