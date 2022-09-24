#前端的储存方式
##前端的储存方式
>存储类
>> - Web存储 （Web Storage）：HTML 5 中提出的存储方式，容量有 5 M。    
   localStorage
   sessionStorage
>> - cookie: 浏览器普遍支持的基于HTTP协议的存储方式，但容量只有4KB
>> - 数据库存储：indexDB Web SQL

>缓存类
>> - Cache Storage: 在 Service Worker 的规范中提出，一般配合 Service Worker 进行离线缓存。
>> - Application Cache： 在 HTML5.1提出的缓存方式，可用来构建离线应用。

###cookie的优点：
- 1. 可以控制过期时间，不会永久有效，有一定的安全保障。
- 2. 可进行扩展，可跨域共享。
- 3. 通过加密与安全传输技术 （SSL） ，可以减少 Cookie 被破解的可能性。
- 4. 有较高的兼容性。
###cookie的缺点：
- 1. 有一定的数量与长度限制，每个 Cookie 长度不能超过 4 KB ，否则超出部分会被截掉。
- 2. 请求头上的数据容易被拦截攻击。
- 3. cookie是如何产生的：
- 3.1 在浏览器访问服务器时由服务器返回一个Set-Cookie响应头，当浏览器解析这个响应头时设置cookie
- 3.2 通过浏览器js脚本设置document.cookie = 'name=monsterooo';
**设置cookie**
`$.cookie('name', 'value', { expires: 7, path: '/', domain: 'example.com', secure: false});`
**读取cookie**
`$.cookie('name'); //name存在返回对应value,不存在返回null`
**删除cookie**
`$.removeCookie('name');`

注意：删除cookie时，必须传递用于设置cookie的完全相同的路径，域和安全选项，除非您依赖于默认选项。

即：设置cookie时如果设置了path属性或secure属性，删除的时候要带着这些属性，否则无法成功删除cookie。

**Web Storage（localStorage和sessionStorage）**
出现原因：

- 克服 Cookie 的一些限制，同时存储一些需要严格控制在客户端，不需要发送给服务器的一些数据。
- 提供了除 Cookie 之外的另一种存储会话的途径。
- 提供了一种大容量存储空间来跨回话存储数据的途径。
- 它们都是直接作为 window对象的属性存在的，我们可以直接通过 window.localStorage 与 window.sessionStorage 来访问。

注： Web Storage 只能储存字符串，如果用 Web Storage 存储对象，会出现 [Object Object], 可以用 JSON.stringify 与 JSON.parse方法来解决这个问题。

**Web Storage 实例方法:**
- clear：删除所有值
- getItem(name): 根据传入的键来获取对应的值。
- key(index): 获得所对应索引的键，名称。
- removeItem(name): 删除键对应的键值对
- setItem(name, value): 为指定的 name 设置一个对应的值。

**sessionStorage:**
- 同源策略： 不同于 Cookie， sessionStorage 访问限制更高，只有当前设定了 sessionStorage 的域下才能访问
- 单标签页： 两个相同域下的标签页不能互通。
- 在关闭标签页或者新开的标签页下都不能访问之前写下的 sessionStorage, 刷新标签页依然可以访问 sessionStorage。

使用的场景：

持久性的保存客户端数据，只能通过 JavaScript 删除或者用户清除浏览器缓存。
如果有一些稍大量的数据，例如编辑器的自动保存等。
多页面间访问共同数据。 sessionStorage 只能用于一个标签页，而localStorage可以在多个标签页之间共享。

sessionStorage 与 localStorage 的区别:

生命周期：localStorage 是本地存储，没有期限，只能用户自己操作来删除。 sessionStroage 是会话存储，页面关闭数据就会丢失。
sessionStorage 有单标签页的限制，localStorage则没有。

Storage 事件：
我们对 Storage 对象进行任何的操作，都会在文档上触发 Storage 事件， 这个事件的 event 对象有以下属性：

domain：发生变化的存储空间的域名。
key：设置或删除的键名
newValue： 如果是设置值，则是新值。如果是删除键，则为null。
oldValue：键被更改之前的值。

IndexDB 与 Web SQL
特点：

- 访问：indexDB 和 Web SQL 和 Web Storage 一样，均是只能在创建数据库的域名下才能访问。
- 存储时间：存储时间为永久，除非用户清除数据，他可用作长期的存储。
- 大小限制：二者其实没有强制限制。只是 indexDB 在数据超过 50 M 之后会从浏览器弹出一个框让你确认。
- 性能： indexDB 查询速度会相对较慢，而 Web SQL 的性能相对较快。
IndexDB 特点：

- 它的数据保存在对象存储空间中。
- 创建对象存储空间，首先先定义一个键，之后添加数据。
- 可以使用游标查询。

Cache Storage和Application Cache

- Cache Storage：
- Cache Storage 是用来存储 Response 对象 ，也就是对 HTTP 响应进行缓存。 Cache Storage 是多个 cache 的集合，每个 cache 可以存储多个响应对象。它基于 Promise。
- Application Cache：
- 它是 HTML5 中新引入的应用程序换粗技术，它的出现意味着 web 应用可以通过缓存，在没有网络的环境下运行，构建离线应用。
**优点:**
- 离线浏览
- 提升页面的载入速度
- 降低服务器的压力











