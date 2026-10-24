document.addEventListener('DOMContentLoaded', function () {
  const applyBtn = document.getElementById('apply-btn');
  const resetBtn = document.getElementById('reset-btn');
  const colorInput = document.getElementById('color-input');
  const box = document.getElementById('box');

  if (!applyBtn || !resetBtn || !colorInput || !box) {
    console.error('Required homepage elements are missing.');
    return;
  }

  applyBtn.addEventListener('click', function () {
    box.style.backgroundColor = colorInput.value;
  });

  resetBtn.addEventListener('click', function () {
    box.style.backgroundColor = '#ddd';
    colorInput.value = '';
  });
});