document.addEventListener("DOMContentLoaded", function () {
  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("has-js");

  const aboutButtons = document.querySelectorAll('[data-js="aboutButton"]');
  const aboutContainer = document.querySelector('[data-js="about"]');

  function toggleModal() {
    aboutContainer.classList.toggle("hidden");
    document.body.classList.toggle("overflow-hidden");
  }

  aboutButtons.forEach(function (el) {
    el.onclick = function (event) {
      event.preventDefault();

      toggleModal();
    };
  });

  document.addEventListener("keyup", function (event) {
    if (aboutContainer.classList.contains("hidden")) return;

    if (event.key === "Escape") {
      event.stopPropagation();
      toggleModal();
    }
  });
});
