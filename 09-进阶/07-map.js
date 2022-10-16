
let map = new Map() //强引用
let b = {}
map.set(b, new Array(1024*1024*1024))
b = null   //map的key为null, map对应的value并不会被垃圾回收，取决于map对value是否是强绑定
map = null  //map释放，释放了b, value也会被释放

/**
 * b = null 并不表示释放map,这里取决于是否是强绑定
 * map = null 才会释放内存
 * 
 */