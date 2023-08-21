import { getBrowser, isUrl, logger } from '@/utils'

export async function spideScreenshot(url: string) {
  // 校验是否为url
  if (!isUrl(url)) {
    logger.error('请输入正确的url')
    return
  }
  const browser = await getBrowser()
  if (!browser) {
    logger.error('无法获取浏览器实例')
    return
  }

  const page = await browser.newPage()
  logger.info('正在打开页面')
  await page.goto(url)
  logger.info('正在截图')
  await page.screenshot({ path: 'test.png' })
  logger.info('截图完成')
}
