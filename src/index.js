import './sass/main.scss';
import './sass/page.scss';
import tesla from './assets/tesla.jpg';

const mainImage = document.getElementById("mainImage")
mainImage.src = tesla

const mult = (a, b) => a * b;

console.log(mult(2,4));
console.log(mult(3,5));

const hello = import('./js/hello');

console.log('all ok!');

//alert('ok123');

// test 123

