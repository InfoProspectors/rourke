export function isUrl(url: string) {
  const reg = /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/
  return reg.test(url)
}
