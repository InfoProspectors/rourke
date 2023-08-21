export async function setPageCookie(
  // page: { setCookie: (arg0: any) => any },
  page: { setCookie: (arg0: any) => any },
  cookie: string,
  domain: string,
) {
  // 将cookie字符串按照分号分割，并将每一项转换为对象
  const cookies = cookie.split(';').map((pair) => {
    const name = pair.trim().slice(0, pair.trim().indexOf('='))
    const value = pair.trim().slice(pair.trim().indexOf('=') + 1)
    return { name, value, domain }
  })
  // 调用page.setCookie函数，传入cookies
  await page.setCookie(...cookies)
}
