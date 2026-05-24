(function () {
  var grid = document.querySelector(".gallery-grid");
  if (!grid) return;

  var items = Array.from(grid.querySelectorAll(".gallery-item"));
  var images = items.map(function (item) {
    return item.querySelector("img").src;
  });

  var lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML =
    '<button class="lightbox__close" aria-label="Затвори">&times;</button>' +
    '<button class="lightbox__prev" aria-label="Предишна">&#8249;</button>' +
    '<img class="lightbox__img" alt="">' +
    '<button class="lightbox__next" aria-label="Следваща">&#8250;</button>';
  document.body.appendChild(lightbox);

  var imgEl = lightbox.querySelector(".lightbox__img");
  var currentIndex = 0;

  function show(index) {
    currentIndex = (index + images.length) % images.length;
    imgEl.src = images[currentIndex];
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function close() {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  items.forEach(function (item, index) {
    item.addEventListener("click", function () {
      show(index);
    });
  });

  lightbox.querySelector(".lightbox__close").addEventListener("click", close);
  lightbox.querySelector(".lightbox__prev").addEventListener("click", function () {
    show(currentIndex - 1);
  });
  lightbox.querySelector(".lightbox__next").addEventListener("click", function () {
    show(currentIndex + 1);
  });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) close();
  });

  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(currentIndex - 1);
    if (e.key === "ArrowRight") show(currentIndex + 1);
  });
})();
