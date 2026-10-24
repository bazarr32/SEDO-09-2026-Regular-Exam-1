document.addEventListener('DOMContentLoaded', () => {
  const $ = selector => document.querySelector(selector);

  const box = $('#box');
  const input = $('#color-input');
  const applyBtn = $('#apply-btn');
  const resetBtn = $('#reset-btn');
  const randomBtn = $('#random-btn');

  if (!box || !input || !applyBtn || !resetBtn || !randomBtn) {
    console.error('Required homepage elements are missing.');
    return;
  }

  const setColor = color => {
    box.style.backgroundColor = color;
  };

  applyBtn.addEventListener('click', () => setColor(input.value));

  resetBtn.addEventListener('click', () => {
    setColor('#ddd');
    input.value = '#000000';
  });

  randomBtn.addEventListener('click', () => {
    const color = `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0')}`;
    setColor(color);
  });
});