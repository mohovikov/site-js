import './ajax/logs'
import './chart'
import './js/price'
import './privileges'
import initTimeago from './js/timeago'
import './js/toast'
import './js/userpage'

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

initTimeago()
console.log("Webpack bundle loaded ✅")