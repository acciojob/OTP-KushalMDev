//your JS code here. If required.

const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
  input.addEventListener('input', (event) => {
    const value = event.target.value;
    if (value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'backspace' && index > 0) {
      inputs[index - 1].focus();
    }
  });
});
