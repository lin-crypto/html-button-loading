let btn = document.getElementById("mybutton");
btn.addEventListener(
  "click",
  function () {
    if (btn?.innerText === "Approve") {
      btn.classList.add("spin");
      btn.disabled = true;

      window.setTimeout(function () {
        btn.classList.remove("spin");
        btn.disabled = false;
        btn.innerText = "Buy";
      }, 2000);
    }
  },
  false
);
