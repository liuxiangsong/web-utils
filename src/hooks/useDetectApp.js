export default function () {
  let readyToDetect = false
  let existApp = false

  /**
   * 启动检测应用是否存在，如果存在则返回true
   * @param {String} protocolName 应用协议名称
   */
  const startDetectApp = async protocolName => {
    readyToDetect = true
    existApp = false
    window.addEventListener('blur', blurFunc)
    window.open(`${protocolName}:\\`, '_self')
    return await new Promise(resolve => {
      setTimeout(() => {
        readyToDetect = false
        window.removeEventListener('blur', blurFunc)
        resolve(existApp)
      }, 300)
    })
  }

  const blurFunc = () => {
    if (readyToDetect) {
      existApp = true
    }
  }

  return {
    startDetectApp
  }
}
