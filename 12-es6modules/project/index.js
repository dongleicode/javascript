
// export * from './a.js'//a 没有默认名字接受，就没有export default导出的数据
// export * from './b.js'//b 没有默认名字接受，就没有export default导出的数据

export * as a from './a.js'//a: Module  a: "a" default: "a1"
export * as b from './b.js'//b Module  b: "b" default: "b1"