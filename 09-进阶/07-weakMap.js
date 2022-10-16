/**
 * new Map() 是强引用    key = null ,value不会被释放
 * new weakMap() 是弱引用  key= null, value会被释放
 * 
 */

 let map = new weakMap() //弱引用
 let b = {}
 map.set(b, new Array(1024*1024*1024))
 b = null