module.exports = {
  lintOnSave: false,
  devServer: {
    overlay: {
      warning: false,
      errors: false
    }
  },
  transpileDependencies: ['vuetify'],
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
}
