let song; // Variable to store the song
let peaks = []; // Array to store the song's peak data
let spacing; // Horizontal spacing between each peak
let gradientColors = []; // Colors for the gradient background

function preload() {
  // Load the song into the sketch
  song = loadSound('/song/titan3minute.mp3'); // Rsong with3minute duration
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);

  // Get the song's peaks (amplitude samples)
  peaks = song.getPeaks(); // This returns an array of amplitude values for the entire song

  // Calculate horizontal spacing for peaks
  spacing = width / peaks.length;

  // Create gradient colors for visualization
  gradientColors = [
    color(255, 0, 150), // Pink
    color(0, 100, 255), // Blue
    color(50, 200, 50)  // Green
  ];

  noLoop(); // Static visualization, no need to redraw
}

function draw() {
  // Draw gradient background
  drawGradient();

  // Draw peaks
  drawPeaks();

  // Display information
  displayInfo();
}

function drawGradient() {
  for (let i = 0; i < height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let c = lerpColor(gradientColors[0], gradientColors[1], inter);
    stroke(c);
    line(0, i, width, i);
  }
}

function drawPeaks() {
  noFill();
  stroke(255, 200);
  strokeWeight(2);

  beginShape();
  for (let i = 0; i < peaks.length; i++) {
    let x = i * spacing;
    let y = map(peaks[i], -1, 1, height, 0); // Map peaks to canvas height
    vertex(x, y);
  }
  endShape();

  // Additional flair: Circles at high-intensity points
  for (let i = 0; i < peaks.length; i++) {
    let intensity = abs(peaks[i]);
    if (intensity > 0.7) {
      let x = i * spacing;
      let y = map(peaks[i], -1, 1, height, 0);
      fill(255, 100, 0, 150);
      noStroke();
      ellipse(x, y, intensity * 10);
    }
  }
}

function displayInfo() {
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text("Static Visualization of the Song", width / 2, height - 40);
  textSize(12);
  text("Peaks: Amplitude samples over time | High-intensity moments highlighted", width / 2, height - 20);
}
