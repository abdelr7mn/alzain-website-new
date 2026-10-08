/* صندوق تكبير أعمال المعرض */
function initLightbox() {
  var lightbox = document.getElementById("lightbox");
  var img = document.getElementById("lightboxImg");
  var title = document.getElementById("lightboxTitle");
  var tag = document.getElementById("lightboxTag");
  var result = document.getElementById("lightboxResult");
  var closeBtn = document.getElementById("lightboxClose");
  var lastFocused = null;

  function open(card) {
    var src = card.querySelector("img");
    img.src = src.src;
    img.alt = src.alt;
    title.textContent = card.querySelector("h4").textContent;
    tag.textContent = card.querySelector(".work-tag").textContent;
    result.textContent = card.querySelector(".result").textContent;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    lastFocused = document.activeElement;
    closeBtn.focus();
    document.body.style.overflow = "hidden";
  }
  function close() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll(".work-card").forEach(function (card) {
    card.addEventListener("click", function () { open(card); });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(card); }
    });
  });
  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", function (e) { if (e.target === lightbox) close(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lightbox.classList.contains("open")) close();
    if (e.key === "Tab" && lightbox.classList.contains("open")) { e.preventDefault(); closeBtn.focus(); }
  });
}
