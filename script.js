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

let particles = [];
let numberOfParticles = 100;
let radius = window.innerWidth / 5;

// Track mouse
const mouse = {
	x: 0,
	y: 0,
	radius: 60,
	autopilotAngle: 0,
};

window.addEventListener('mousemove', function (e) {
	mouse.x = event.x;
	mouse.y = event.y;
});

// Particles
class Particle {
	constructor(x, y, radius) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = gradient1;
		this.text = lettersArray[Math.floor(Math.random() * lettersArray.length)];
	}
	draw() {
		ctx.strokeStyle = 'rgba(0,0,0,0.2)';
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
		ctx.fillStyle = this.color;
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius * 0.8, 0, Math.PI * 1.5, true);
		ctx.fillStyle = gradient2;
		ctx.fill();

		ctx.fillStyle = gradient2;
		ctx.font = this.radius + 'px Verdana';
		ctx.fillText(this.text, this.x - this.radius / 2.7, this.y);
	}
	update() {
		// Autopilot when mouse leaves canvas
		if (mouse.x == undefined && mouse.y == undefined) {
			let newX = radius * 2 * Math.cos(mouse.autopilotAngle * (Math.PI / 180));
			let newY = radius * 0.9 * Math.sin(mouse.autopilotAngle * (Math.PI / 90));
			mouse.x = newX + canvas.width / 2;
			mouse.y = newY + canvas.height / 2;
		}
		mouse.autopilotAngle += 0.01;
	}
}
