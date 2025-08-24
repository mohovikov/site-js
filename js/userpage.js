import $ from 'jquery'
import { bbcodeToHtml } from 'bootstrap-bbcode'

export function updateOutput() {
  const $input = $("#userpage")
  const $preview = $("#userpage-preview")

  if (!$input.length || !$preview.length) return

  const bbcode = $input.val() || ""
  const html = bbcodeToHtml(bbcode)
  $preview.html(html)
}

$("#userpage").on("input", updateOutput)