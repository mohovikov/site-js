import $ from 'jquery'
import initTimeago from '../timeago'

$('#logsModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var api_url = button.data('api-url')
  var logsContent = $('#logsContent')

  $.get(api_url, function (data) {
    if (data.logs.length === 0) {
      logsContent.text('Нет логов для этой задачи.')
      return;
    }
    var html = "<table class=\"table table-striped table-sm\">\n                  <thead>\n                    <tr>\n                      <th scope=\"col\">ID</th>\n                      <th scope=\"col\">\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442</th>\n                      <th scope=\"col\">\u0421\u0442\u0430\u0442\u0443\u0441</th>\n                      <th scope=\"col\">\u0414\u0430\u0442\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F</th>\n                    </tr>\n                  </thead>\n                  <tbody>";
    data.logs.forEach(function (log) {
      html += "<tr>\n                  <th scope=\"col\">".concat(data.job_name, "</th>\n                  <td>").concat(log.message, "</td>\n                  <td>").concat(log.is_success, "</td>\n                  <td>\n                    <time class=\"js-timeago\" data-utc=\"").concat(log.created_at, "\" data-bs-toggle=\"tooltip\">\n                  </td>\n                </tr>");
    })
    html += "</tbody></table>"
    logsContent.html(html)
    initTimeago()
  }).fail(function () {
    logsContent.text('Ошибка загрузки логов.')
  })
})