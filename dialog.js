{
  const body = document.body;
  const [dialogBtn, modalBtn, modal2Btn, modal3Btn, closeBtn] = [...body.getElementsByTagName("button")];
  const dialog = body.querySelector("dialog");
  const heading = dialog.querySelector("h1");

  window.addEventListener("click", function (event) {
    switch (event.target) {
      case document.body:
        dialog.close();
        break;
      case document.documentElement:
        if (dialog.className != "custom-modal-1") break;
        dialog.close();
        dialog.className = "";
        break;
      case dialog:
        if (dialog.className != "custom-modal-2") break;
        dialog.close();
        dialog.className = "";
        break;
      case closeBtn:
        dialog.className = "";
        break;
      case dialogBtn:
        dialog.open ? dialog.close() : dialog.show();
        break;
      case modalBtn:
        dialog.showModal();
        break;
      case modal2Btn:
        dialog.className = "custom-modal-1";
        dialog.showModal();
        break;
      case modal3Btn:
        dialog.className = "custom-modal-2"
        dialog.showModal();
        window.onresize();
    }
  });

  window.onresize = function () {
    dialog.style.setProperty("--padding", `${(window.innerHeight - heading.getBoundingClientRect().height) / 2}px ${(window.innerWidth - heading.getBoundingClientRect().width) / 2}px`);
  }

  window.onresize();
}