$(function() {
  function updateOutput() {
    const bbcode = $("#userpage").val()
    const html = bbcodeToHtml(bbcode)
    $("#userpage-preview").html(html)
  }

  // Первичная инициализация
  updateOutput()

  // Автообновление при вводе
  $("#userpage").on("input", updateOutput)
})