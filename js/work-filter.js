/* تصفية الأعمال */
function initWorkFilter() {
  var bar = document.getElementById("filterBar");
  var cards = document.querySelectorAll(".work-card");
  bar.addEventListener("click", function (e) {
    var btn = e.target.closest(".filter-btn");
    if (!btn) return;
    bar.querySelectorAll(".filter-btn").forEach(function (b) {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");
    var f = btn.getAttribute("data-filter");
    var grid = document.getElementById("workGrid");
    grid.classList.remove("refilter");
    void grid.offsetWidth;
    grid.classList.add("refilter");
    cards.forEach(function (c) {
      c.classList.toggle("hidden", !(f === "all" || c.getAttribute("data-cat") === f));
    });
  });
}
