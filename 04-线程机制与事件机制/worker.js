
function fibonacci(n){
    //递归调用
    return n<=2 ? 1 : fibonacci(n-1) + fibonacci(n-2);
}
console.log(this);
var onmessage = function(event){
    var number = event.data;
    console.log('分线程接收到主线程的数据：'+ number)
    var result = fibonacci(number)
    postMessage(result);
    console.log('分线程向主线程发送数据：'+ result)
    alert(result)
    //alert(result)  Uncaught ReferenceError: alert is not defined
    //at onmessage (worker.js:13:5)
    //分线程是看不到window对象的
}