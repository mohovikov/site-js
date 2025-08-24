import { format } from 'timeago.js'

export default function initTimeago() {
  document.querySelectorAll('time.js-timeago').forEach(el => {
    let utcStr = el.dataset.utc
    if (!utcStr) return

    let isoString = utcStr.replace(' ', 'T').split('.')[0] + 'Z'
    let date = new Date(isoString)

    el.textContent = format(date, 'ru')

    el.setAttribute("data-bs-title", date.toLocaleString("ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short"
    }))
  })
}