const CLOUD_IMAGE_BASE = 'cloud://cloud1-d5gj26hlf342afe88.636c-cloud1-d5gj26hlf342afe88-1433985605'
const MAX_BATCH_SIZE = 50
const cache = {}

function isImagePath(path) {
  return typeof path === 'string' && /^\/?images\//.test(path)
}

function toCloudFileID(path) {
  if (!isImagePath(path)) {
    return path
  }

  return `${CLOUD_IMAGE_BASE}/${path.replace(/^\//, '')}`
}

function getTempFileURLs(paths) {
  if (!paths.length) {
    return Promise.resolve()
  }

  return wx.cloud.getTempFileURL({
    fileList: paths.slice(0, MAX_BATCH_SIZE).map(toCloudFileID)
  }).then((res) => {
    const tempFiles = res.fileList || []

    paths.slice(0, MAX_BATCH_SIZE).forEach((path, index) => {
      const tempFile = tempFiles[index]
      if (tempFile && tempFile.tempFileURL) {
        cache[path] = tempFile.tempFileURL
      } else {
        cache[path] = path
        console.warn('云图片加载失败', path, tempFile && tempFile.errMsg)
      }
    })

    return getTempFileURLs(paths.slice(MAX_BATCH_SIZE))
  })
}

function resolveCloudImages(paths) {
  const imagePaths = Array.from(new Set(paths.filter(isImagePath)))
  const missingPaths = imagePaths.filter((path) => !cache[path])

  if (!missingPaths.length) {
    return Promise.resolve({ ...cache })
  }

  return getTempFileURLs(missingPaths).then(() => ({ ...cache })).catch((error) => {
    missingPaths.forEach((path) => {
      cache[path] = path
    })
    console.warn('云图片批量加载失败', error)
    return { ...cache }
  })
}

function resolveCloudImage(path) {
  if (!isImagePath(path)) {
    return Promise.resolve(path)
  }

  return resolveCloudImages([path]).then((map) => map[path] || path)
}

module.exports = {
  resolveCloudImage,
  resolveCloudImages,
  toCloudFileID
}
