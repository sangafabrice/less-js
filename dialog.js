{
  const body = document.body;
  const dialogBtn = body.firstElementChild;
  const modalBtn = dialogBtn.nextElementSibling;
  const dialog = modalBtn.nextElementSibling;
  body.addEventListener("click", function () {
    switch (event.target) {
      case this:
        dialog.close();
        break;
      case dialogBtn:
        dialog.open ? dialog.close() : dialog.show();
        break;
      case modalBtn:
        dialog.showModal();
    }
  });
}