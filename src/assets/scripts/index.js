document.addEventListener("DOMContentLoaded", function () {
  const aboutButtons = document.querySelectorAll('[data-js="aboutButton"]');
  const aboutContainer = document.querySelector('[data-js="about"]');

  aboutButtons.forEach(function (el) {
    el.onclick = function () {
      aboutContainer.classList.toggle("toggleHide");
    };
  });
});
