{
  const body = document.body;
  const [dialogBtn, modalBtn, modal2Btn, modal3Btn, closeBtn] = [...body.getElementsByTagName("button")];
  const dialog = body.querySelector("dialog");
  const heading = dialog.querySelector("h1");

  function openModal(className = "") {
    dialog.className = className;
    dialog.showModal();
    window.onresize();
  }

  function closeModal(className = "") {
    if (dialog.className != className) return;
    dialog.close();
    dialog.className = "";
  }

  window.addEventListener("click", function (event) {
    switch (event.target) {
      case body:
        dialog.close();
        break;
      case document.documentElement:
        closeModal("custom-modal-1");
        break;
      case dialog:
        closeModal("custom-modal-2");
        break;
      case closeBtn:
        dialog.className = "";
        break;
      case dialogBtn:
        dialog.show();
        break;
      case modalBtn:
      case modal2Btn:
      case modal3Btn:
        openModal(event.target.value);
    }
  });

  window.onresize = function () {
    dialog.style.setProperty("--padding", `${(window.innerHeight - heading.getBoundingClientRect().height) / 2}px ${(window.innerWidth - heading.getBoundingClientRect().width) / 2}px`);
  }

  window.onresize();
}