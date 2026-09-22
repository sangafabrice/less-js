{
  const body = document.body;
  const [dialogBtn, modalBtn, modal2Btn, modal3Btn] = [...body.querySelectorAll("&>button")];
  const [dialog, dialog2, dialog3] = [...document.getElementsByTagName("dialog")];
  const dialog3Heading = dialog3.querySelector("h1");

  window.addEventListener("click", function (event) {
    switch (event.target) {
      case document.body:
        dialog.close();
        break;
      case document.documentElement:
        dialog2.close();
        break;
      case dialog3:
        dialog3.close();
        break;
      case dialogBtn:
        dialog.open ? dialog.close() : dialog.show();
        break;
      case modalBtn:
        dialog.showModal();
        break;
      case modal2Btn:
        dialog2.showModal();
        break;
      case modal3Btn:
        dialog3.showModal();
        window.onresize();
    }
  });

  window.onresize = function () {
    dialog3.style.padding = `${(window.innerHeight - dialog3Heading.getBoundingClientRect().height) / 2}px ${(window.innerWidth - dialog3Heading.getBoundingClientRect().width) / 2}px`;
  }

  window.onresize();
}