/* ظهور العناصر عند التمرير — بدون مكتبات.
   الأقسام والعناصر المدرجة تحت بتاخد ظهور متدرّج (stagger) حسب ترتيبها جوه نفس الأب. */
function initReveal() {
  var targets = [
    ".section-head", ".about-figure", ".about-copy > *", ".pillar",
    ".service-row", ".filter-bar", ".work-card",
    ".process-steps", ".process-step",
    ".client-name", ".number-card", ".testimonial",
    ".contact-info", ".form-card", ".footer-col", ".footer-brand"
  ];
  var els = Array.prototype.slice.call(document.querySelectorAll(targets.join(",")));
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return;

  var counters = new Map();
  els.forEach(function (el) {
    var parent = el.parentElement;
    var i = counters.get(parent) || 0;
    counters.set(parent, i + 1);
    var step = el.classList.contains("process-step") ? 0.3 : 0.09;
    el.style.setProperty("--d", Math.min(i * step, 0.9) + "s");
    el.classList.add("rv");
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      el.classList.add("in");
      io.unobserve(el);
      // بعد انتهاء الحركة نشيل الكلاسات عشان hover والـ transitions العادية ترجع تشتغل
      var delay = parseFloat(el.style.getPropertyValue("--d")) || 0;
      var wait = (delay + (el.classList.contains("process-steps") ? 1.6 : 1.1)) * 1000;
      setTimeout(function () { el.classList.remove("rv", "in"); }, wait);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });

  els.forEach(function (el) { io.observe(el); });
}
