// Variables
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.textBaseline = 'middle';
let lettersArray = ['A', 'D', 'A', 'M'];
let hue = 0;

// Gradients
const gradient1 = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient1.addColorStop(0.49, 'black');
gradient1.addColorStop(0.51, 'white');

const gradient2 = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient2.addColorStop(0.49, 'white');
gradient2.addColorStop(0.51, 'rgba(0,0,0,0.7)');
