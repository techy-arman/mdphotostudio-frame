// Simple script to generate favicon using React icons
const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Create a canvas
const canvas = createCanvas(32, 32);
const ctx = canvas.getContext('2d');

// Draw background
ctx.fillStyle = '#b5554d'; // Brand color
ctx.fillRect(0, 0, 32, 32);

// Draw a simple camera shape in white
ctx.fillStyle = 'white';
// Camera body
ctx.fillRect(8, 12, 16, 12);
// Camera lens
ctx.beginPath();
ctx.arc(16, 18, 5, 0, Math.PI * 2);
ctx.fill();
// Flash/viewfinder
ctx.fillRect(18, 9, 6, 3);

// Save the canvas to a PNG file
const outputPath = path.join(__dirname, '../public/camera-favicon.png');
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync(outputPath, buffer);

console.log(`Camera favicon saved to: ${outputPath}`); 