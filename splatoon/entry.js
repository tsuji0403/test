const form = document.getElementById('entry-form');
const confirmSection = document.getElementById('confirm');
const backButton = document.getElementById('back-to-form');

const fields = [
  { id: 'name', target: 'confirm-name' },
  { id: 'age', target: 'confirm-age', suffix: '歳' },
  { id: 'email', target: 'confirm-email' },
  { id: 'tel', target: 'confirm-tel' },
];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) {
    return;
  }
  fields.forEach(({ id, target, suffix }) => {
    const value = document.getElementById(id).value.trim();
    document.getElementById(target).textContent = suffix ? `${value}${suffix}` : value;
  });
  form.hidden = true;
  confirmSection.hidden = false;
  confirmSection.scrollIntoView({ behavior: 'smooth' });
});

backButton.addEventListener('click', () => {
  confirmSection.hidden = true;
  form.hidden = false;
  form.scrollIntoView({ behavior: 'smooth' });
});
