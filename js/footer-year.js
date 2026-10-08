function initFooterYear() {
  var el = document.getElementById("yearNow");
  if (el) el.textContent = new Date().getFullYear();
}
