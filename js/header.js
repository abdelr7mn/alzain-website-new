/* الهيدر: خلفية عند التمرير + قائمة الجوال */
function initHeader() {
  var header = document.getElementById("siteHeader");
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");

  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 24);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  function closeNav() {
    mainNav.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  navToggle.addEventListener("click", function () {
    var isOpen = mainNav.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  mainNav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeNav); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeNav(); });
}
