document.querySelectorAll('.accordion-toggle').forEach(function (svg) {
  const answer = svg.parentElement.nextElementSibling;
  const vLine = svg.querySelector('.v-line');
  // 항상 닫힌 상태로 초기화
  if (answer && answer.classList.contains('answer')) {
    answer.style.display = 'none';
    vLine.style.display = 'block'; // + 모양
  }

  svg.addEventListener('click', function () {
    const answer = this.parentElement.nextElementSibling;
    const vLine = this.querySelector('.v-line');
    if (answer && answer.classList.contains('answer')) {
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        vLine.style.display = 'block'; // + 모양
      } else {
        answer.style.display = 'block';
        vLine.style.display = 'none'; // - 모양
      }
    }
  });
});
