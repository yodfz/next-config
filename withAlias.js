const path = require('path')
module.exports = (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
        webpack(config, options) {
            config.resolve.alias['Components'] = path.join(__dirname, 'components')
            if (typeof nextConfig.webpack === 'function') {
                return nextConfig.webpack(config, options)
            }
            return config
        }
    })
})
