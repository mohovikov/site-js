import $ from 'jquery'
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js'
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale)

function loadChart(url) {
  $.getJSON(url, function(data) {
    const labels = data.map(item => {
      let isoStr = item.timestamp.replace(' ', 'T').split('.')[0] + 'Z'
      let date = new Date(isoStr)
      let options = {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
      }
      return date.toLocaleString(undefined, options)
    })

    const prices = data.map(item => parseFloat(item.price))

    const ctx = document.getElementById("priceChart").getContext("2d")
    new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [{
          label: "Цена",
          data: prices,
          borderColor: "blue",
          borderWidth: 2,
          fill: true,
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          title: {
            display: true,
            text: 'График курса валюты'
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.parsed.y.toLocaleString("ru-RU", {
                  style: "currency",
                  currency: "RUB",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                });
              }
            }
          }
        },
        scales: {
          x: { display: false },
          y: {
            ticks: {
              callback: function(value) {
                return value.toLocaleString("ru-RU", {
                  style: "currency",
                  currency: "RUB",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })
              }
            }
          }
        }
      }
    })
  }).fail(function(jqxhr, textStatus, error) {
    console.error("Ошибка загрузки графика:", textStatus, error)
  });
}

window.loadChart = loadChart