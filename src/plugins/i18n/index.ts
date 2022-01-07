import { createI18n, LocaleMessages, LocaleMessageValue, VueMessageType } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'
function getLocalLanguage(): LocaleMessages<Record<string, LocaleMessageValue<VueMessageType>>> {
  const locales: LocaleMessages<Record<string, LocaleMessageValue<VueMessageType>>> = {}
  const langList = import.meta.globEager('./language/*.json')

  Object.keys(langList).forEach(item => {
    const modulesKey = item.match(/language\/([\S]+).json/)
    if (modulesKey) {
      locales[modulesKey[1]] = langList[item].default
    }
  })

  return locales
}

export default createI18n({
  locale: 'zh',
  legacy: false,
  fallbackLocale: 'zh',
  globalInjection: true,
  messages
})