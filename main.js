import * as bootstrap from "bootstrap"

import './js/ajax/logs'
import './js/chart'
import './js/price'
import './js/privileges'
import initTimeago from './js/timeago'
import './js/userpage'

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
  new bootstrap.Tooltip(el)
})

document.querySelectorAll('.toast').forEach(function (toastEl, index) {
  let delay = 3000 + (index * 500)
  let toast = new bootstrap.Toast(toastEl, { delay: delay })
  toast.show()
})

initTimeago()
console.log("Webpack bundle loaded ✅")