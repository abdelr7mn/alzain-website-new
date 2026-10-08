/* فيديو الهيرو: تشغيل تلقائي بدون صوت، زر إيقاف/تشغيل، ويتوقف لما يخرج من الشاشة */
function initHeroVideo() {
  var v = document.getElementById("heroVideo");
  var btn = document.getElementById("videoToggle");
  if (!v || !btn) return;
  v.muted = true;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) { v.pause(); }

  function label() {
    btn.textContent = v.paused ? "تشغيل الفيديو" : "إيقاف الفيديو";
    btn.setAttribute("aria-pressed", v.paused ? "true" : "false");
  }
  btn.addEventListener("click", function () {
    if (v.paused) { v.play(); } else { v.pause(); }
  });
  v.addEventListener("play", label);
  v.addEventListener("pause", label);
  label();

  if ("IntersectionObserver" in window) {
    var autoPaused = false;
    new IntersectionObserver(function (entries) {
      var visible = entries[0].isIntersecting;
      if (!visible && !v.paused) { v.pause(); autoPaused = true; }
      else if (visible && autoPaused) { v.play(); autoPaused = false; }
    }, { threshold: 0.05 }).observe(v);
  }
}
