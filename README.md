# next-config
一些next的插件

## withAlias
use next setting webpack alias
用于next别名配置

### 使用方式
cd [rootdir]
vi next.config.js
in root director,create next.config.js
在根目录创建 `next.config.js`

编写配置
```js
const withLess = require('@zeit/next-less')
const withAlias = require('./config/alias')
module.exports = withAlias(withLess({
    cssModules: true
}))
```
注意，alias文件需要配置好路径。
