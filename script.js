document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("light-toggle");
  const body = document.body;

  toggle.addEventListener("click", function () {
    body.classList.toggle("light-theme");
    toggle.classList.toggle("on");
  });
});
