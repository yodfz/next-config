# next-config
一些next的插件

## withAlias
用于next别名配置

### 使用方式
在根目录创建 `next.config.js`

```js
const withLess = require('@zeit/next-less')
const withAlias = require('./config/alias')
module.exports = withAlias(withLess({
    cssModules: true
}))
```
注意，alias文件需要配置好路径。
