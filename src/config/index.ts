import process from 'node:process'
import dotenv from 'dotenv'
import type { EvConfig } from '@/types'

dotenv.config()

export const evConfig: EvConfig = {
  log: process.env.isLog ?? false, // 是否写入日志 默认为false
  storeDirs: process.env.storeDir ?? '', // 文件存储目录 默认为当前目录
  headless: process.env.headless ?? true, // 是否开启无头模式 默认为true
  puppeteerOptions: {
    // executablePath: 'D:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  }, // puppeteer配置项  默认为空 文档参考 https://pptr.dev/browsers-api/browsers.launchoptions/
}
