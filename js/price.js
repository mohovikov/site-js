document.querySelectorAll('span.js-price').forEach(el => {
  const price = parseFloat(el.dataset.price)

  el.textContent = price.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB"
  })
})