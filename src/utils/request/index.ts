import https from 'node:https'
import fs from 'node:fs'
import { logger } from '@/utils'

export async function downloadImage(imageUrl: string, savePath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    https
      .get(imageUrl, (response) => {
        const fileStream = fs.createWriteStream(savePath)
        response.pipe(fileStream)
        fileStream.on('finish', () => {
          logger.info(`已下载图片: ${savePath}`)
          fileStream.close()
          resolve()
        })
      })
      .on('error', (error) => {
        logger.error(`下载图片失败: ${savePath}`, error)
        reject(error)
      })
  })
}
