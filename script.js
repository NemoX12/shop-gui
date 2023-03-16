// "Ship1" script

const element = document.querySelector('#ship1');
element.addEventListener('mouseenter', () => {
  element.style.backgroundColor = 'orange';
});

element.addEventListener('mouseleave', () => {
    element.style.backgroundColor = 'lightgray';
});

const div = document.querySelector('#ship1');

div.addEventListener('click', () => {
  window.location.href = 'ship1.html';
});

// "Ship1" script close

