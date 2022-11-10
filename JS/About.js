const btn_open = document.getElementById('btn-open');
const btn_close = document.getElementById('btn-close');
const modal_container = document.getElementById('modal-container');
btn_open.addEventListener('click', () => {
  modal_container.classList.add('show');
});
btn_close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

// Get Free Quote
var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'Get Free Quote ' + recipient
  modalBodyInput.value = recipient
})


