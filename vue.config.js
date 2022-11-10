// vue.config.js
const path = require('path');

module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "~@/scss/generic.scss";`
            }
        }
    }
}