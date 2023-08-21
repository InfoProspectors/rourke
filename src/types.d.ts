import type { Browser, PuppeteerLaunchOptions } from 'puppeteer'

export interface EvConfig {
  log: string | boolean
  storeDirs: string
  headless: string | boolean
  // puppeteer launch options
  puppeteerOptions: PuppeteerLaunchOptions
}

declare global {
  namespace globalThis {
    var _browser: Browser | null
  }

  interface Window {
    extendsPropName: {
      _browser: Browser | null
    }
  }
}
