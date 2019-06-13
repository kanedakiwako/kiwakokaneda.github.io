export function getCurrentYear() {
  const currentDate = new Date()
  return currentDate.getFullYear()
}

export function formatDate(date) {
  const year = Number(date.substr(0, 4))
  const month = Number(date.substr(5, 1)) === 0 ? date.substr(6, 1) : date.substr(5, 2)
  const day = Number(date.substr(8, 1)) === 0 ? date.substr(9, 1) : date.substr(9, 2)
  return `${year}年${month}月${day}日`
}