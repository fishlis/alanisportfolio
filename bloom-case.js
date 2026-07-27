(function () {
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  document.querySelectorAll("[data-fallback]").forEach(function (img) {
    img.addEventListener("error", function onErr() {
      var fallback = img.getAttribute("data-fallback");
      if (!fallback || img.src.indexOf(fallback) >= 0) return;
      img.removeEventListener("error", onErr);
      img.src = fallback;
    });
  });

  var openBtn = document.getElementById("open-pre-production");
  var overlay = document.getElementById("bloom-overlay");
  var overlayScroll = document.getElementById("bloom-overlay-scroll");
  var closeButtons = Array.prototype.slice.call(
    document.querySelectorAll("#close-pre-production, #close-pre-production-back")
  );
  var lastFocus = null;
  var overlayObserver = null;

  function openOverlay() {
    if (!overlay) return;
    lastFocus = document.activeElement;
    overlay.hidden = false;
    overlay.classList.add("is-open");
    document.body.classList.add("bloom-overlay-open");
    var closeBtn = document.getElementById("close-pre-production");
    if (closeBtn) closeBtn.focus();
    initOverlayObserver();
    if (overlayScroll) overlayScroll.scrollTop = 0;
  }

  function closeOverlay() {
    if (!overlay) return;
    overlay.classList.remove("is-open");
    overlay.hidden = true;
    document.body.classList.remove("bloom-overlay-open");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  if (openBtn) openBtn.addEventListener("click", openOverlay);
  closeButtons.forEach(function (btn) {
    btn.addEventListener("click", closeOverlay);
  });

  overlay &&
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeOverlay();
    });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay && !overlay.hidden) {
      closeOverlay();
    }
  });

  function initOverlayObserver() {
    var slides = Array.prototype.slice.call(document.querySelectorAll(".bloom-slide"));
    if (!slides.length) return;

    if (!("IntersectionObserver" in window)) {
      slides.forEach(function (s) {
        s.classList.add("is-inview");
      });
      return;
    }

    if (overlayObserver) overlayObserver.disconnect();

    overlayObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          entry.target.classList.toggle("is-inview", entry.isIntersecting);
        });
      },
      {
        root: overlayScroll || null,
        rootMargin: "-8% 0px -15% 0px",
        threshold: 0.06
      }
    );

    slides.forEach(function (slide) {
      overlayObserver.observe(slide);
    });
  }
})();
