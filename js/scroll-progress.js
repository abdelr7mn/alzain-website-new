/* شريط تقدّم القراءة (أصفر في أعلى الصفحة) */
function initScrollProgress() {
  var bar = document.getElementById("scrollProgress");
  if (!bar) return;
  var ticking = false;
  function update() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    bar.style.transform = "scaleX(" + p + ")";
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
}
