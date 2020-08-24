// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function getTriangle(base = 1, height = 1) {
  return base * height / 2;
}

console.log(getTriangle(5, 5));