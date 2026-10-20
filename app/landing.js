const requestForm = document.getElementById('request-form');
const feedback = document.getElementById('form-feedback');

requestForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!requestForm.reportValidity()) return;

  const name = document.getElementById('seller-name').value.trim();
  const range = document.getElementById('monthly-orders').value;
  feedback.textContent = `Thanks, ${name}. Your demo request preview is ready (${range}). This prototype does not send or store it.`;
});
