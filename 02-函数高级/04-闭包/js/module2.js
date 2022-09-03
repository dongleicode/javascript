/****
 * IIFE:匿名函数自调用的方式：
 */
(function(window){
    //私有数据
    var msg = 'my baby yiyi'

    //操作数据的函数
    function doSomething(){
        console.log('doSomething() '+ msg.toUpperCase());
    }
    function doOtherthing(){
        console.log('doOtherthing() ' + msg.toLowerCase());
    }

    //暴露给外部的方法
    window.module2 =  {
        doSomething: doSomething,
        doOtherthing: doOtherthing
    }
})(window)