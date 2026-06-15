// 统一的收藏与浏览历史工具模块
// 收藏/历史持久化在本地存储中，并支持订阅变更事件以实现多页面同步刷新

const FAVORITES_KEY = 'tenno_favorites'
const HISTORY_KEY = 'tenno_history'
const HISTORY_LIMIT = 100
const FAVORITES_LIMIT = 200

const listeners = []

function safeGet(key) {
  try {
    return wx.getStorageSync(key) || []
  } catch (error) {
    console.warn('读取存储失败', key, error)
    return []
  }
}

function safeSet(key, value) {
  try {
    wx.setStorageSync(key, value)
  } catch (error) {
    console.warn('写入存储失败', key, error)
  }
}

function emit(event) {
  listeners.slice().forEach((fn) => {
    try {
      fn(event)
    } catch (error) {
      console.warn('收藏订阅回调执行失败', error)
    }
  })
}

function onChange(fn) {
  if (typeof fn !== 'function') {
    return () => {}
  }
  listeners.push(fn)
  return function off() {
    const index = listeners.indexOf(fn)
    if (index >= 0) {
      listeners.splice(index, 1)
    }
  }
}

function getFavorites() {
  return safeGet(FAVORITES_KEY)
}

function writeFavorites(list) {
  safeSet(FAVORITES_KEY, list)
  emit({ type: 'favorites', list })
}

function isFavorited(id) {
  if (!id) return false
  return getFavorites().some((item) => item.id === id)
}

function toggleFavorite(entry) {
  if (!entry || !entry.id) {
    return false
  }
  const list = getFavorites().slice()
  const index = list.findIndex((item) => item.id === entry.id)
  let favorited
  if (index >= 0) {
    list.splice(index, 1)
    favorited = false
  } else {
    list.unshift({
      id: entry.id,
      title: entry.title || '',
      page: entry.page || '',
      tag: entry.tag || '',
      createdAt: Date.now()
    })
    favorited = true
  }
  writeFavorites(list.slice(0, FAVORITES_LIMIT))
  return favorited
}

function removeFavorite(id) {
  if (!id) return
  const list = getFavorites().filter((item) => item.id !== id)
  writeFavorites(list)
}

function clearFavorites() {
  writeFavorites([])
}

function getHistory() {
  return safeGet(HISTORY_KEY)
}

function writeHistory(list) {
  safeSet(HISTORY_KEY, list)
  emit({ type: 'history', list })
}

function addHistory(entry) {
  if (!entry || !entry.id) {
    return
  }
  const list = getHistory().filter((item) => item.id !== entry.id)
  list.unshift({
    id: entry.id,
    title: entry.title || '',
    page: entry.page || '',
    tag: entry.tag || '',
    visitedAt: Date.now()
  })
  writeHistory(list.slice(0, HISTORY_LIMIT))
}

function removeHistory(id) {
  if (!id) return
  const list = getHistory().filter((item) => item.id !== id)
  writeHistory(list)
}

function clearHistory() {
  writeHistory([])
}

module.exports = {
  FAVORITES_KEY,
  HISTORY_KEY,
  onChange,
  getFavorites,
  isFavorited,
  toggleFavorite,
  removeFavorite,
  clearFavorites,
  getHistory,
  addHistory,
  removeHistory,
  clearHistory
}
