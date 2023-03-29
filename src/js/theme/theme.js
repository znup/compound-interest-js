// const toggle = document.getElementById('toggleDark');
// const body = document.querySelector('body');

// toggle.addEventListener('click', function () {
//   this.classList.toggle('bi-moon');
//   if (this.classList.toggle('bi-brightness-high-fill')) {
//     body.style.background = 'white';
//     body.style.color = 'black';
//     body.style.transition = '2s';
//   } else {
//     body.style.background = 'black';
//     body.style.color = 'white';
//     body.style.transition = '2s';
//   }
// });

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const getStyle = getComputedStyle(body);
const bgDark = getStyle.getPropertyValue('--bg');
const bgLight = getStyle.getPropertyValue('--clr');
const textDark = getStyle.getPropertyValue('--bg');
const textLight = getStyle.getPropertyValue('--clr');
// --bg: #000000;
// --clr: #f1f1f1;
// --pri: #3e065f;
// --sec: #700b97;
// --thi: #8e05c2;
toggle.addEventListener('click', function () {
  this.classList.toggle('bi-moon');
  if (this.classList.toggle('bi-brightness-high-fill')) {
    body.style.background = bgLight;
    body.style.color = textDark;
  } else {
    body.style.background = bgDark;
    body.style.color = textLight;
  }
});
