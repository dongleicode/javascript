let arr = []

function MyObject() {
    console.log('堆内存溢出。。。');
}
while (true) {
    arr.push(MyObject)
}