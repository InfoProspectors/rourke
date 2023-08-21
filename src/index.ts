import process from 'node:process'
import { closeBrowser } from './utils'
import { spideScreenshot } from '@/spider'

async function main() {
  await spideScreenshot('https://www.baidu.com')

  await closeBrowser()

  process.exit(0)
}

main()
