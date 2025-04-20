import {defineNuxtPlugin} from "nuxt/app"
import {defineDesktopApp} from "@owdproject/core/runtime/utils/utilsDesktop"
import configAppXterm from '../../owd.config'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:created', async () => {
        await defineDesktopApp(configAppXterm)
    })
})
