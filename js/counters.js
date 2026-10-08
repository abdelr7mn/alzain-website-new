/* عدّاد الأرقام: يعدّ مرة واحدة عند ظهور القسم. لو JS مش شغال الأرقام النهائية تفضل ظاهرة. */
function initCounters() {
  var section = document.getElementById("numbers");
  var counters = section.querySelectorAll(".counter");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  counters.forEach(function (el) { el.textContent = "0"; });

  function run(el) {
    var target = parseInt(el.getAttribute("data-target"), 10) || 0;
    var duration = 1300, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target);
      if (p < 1) requestAnimationFrame(step); else el.textContent = target;
    }
    requestAnimationFrame(step);
  }

  var io = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) { counters.forEach(run); io.disconnect(); }
  }, { threshold: 0.3 });
  io.observe(section);
}
