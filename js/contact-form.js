/* نموذج التواصل: تحقق + اختيار الخدمة تلقائيًا من صفوف الخدمات */
function initContactForm() {
  var form = document.getElementById("contactForm");
  var formCard = document.getElementById("formCard");
  var select = document.getElementById("ptype");

  document.querySelectorAll("[data-service]").forEach(function (row) {
    row.addEventListener("click", function () { select.value = row.getAttribute("data-service"); });
  });

  var validators = {
    name: function (v) { return v.trim().length >= 3; },
    phone: function (v) { return /^(\+?966|0)?5[0-9]{8}$/.test(v.replace(/\s|-/g, "")); },
    email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()); },
    message: function (v) { return v.trim().length >= 10; }
  };
  var keys = ["name", "phone", "email", "message"];

  function setError(key, on) {
    var f = document.getElementById("field-" + key);
    if (f) f.classList.toggle("error", on);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var valid = true;
    keys.forEach(function (k) {
      var ok = validators[k](document.getElementById(k).value || "");
      setError(k, !ok);
      if (!ok) valid = false;
    });
    if (!valid) {
      var first = form.querySelector(".field.error input, .field.error textarea");
      if (first) first.focus();
      return;
    }
    formCard.classList.add("submitted");
  });

  keys.forEach(function (k) {
    document.getElementById(k).addEventListener("input", function () {
      if (validators[k](this.value || "")) setError(k, false);
    });
  });
}
