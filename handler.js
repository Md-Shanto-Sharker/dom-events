document
  .getElementById("btn-update-title")
  .addEventListener("click", function () {
    const head = document.getElementById("heading");
    head.innerText = "change it";
  });

document.getElementById("btn-login").addEventListener("click", function () {
  let paragraph = document.getElementById("paragraph2");
  paragraph.innerText = "user can access";
});
