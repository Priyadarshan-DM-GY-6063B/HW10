let song; // Variable for the song
let amplitude, fft; // For volume and frequency analysis
let sensitivitySlider; // DOM element to control sensitivity
let sensitivity = 50; // Initial sensitivity
let bgColor = 0; // Dynamic background color based on volume
let playPauseButton; // Play/Pause button

function preload() {
  // Load the song
  song = loadSound('../song/titanic.mp3'); //1minute song
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Initialize sound analysis tools
  amplitude = new p5.Amplitude();
  fft = new p5.FFT();

  // Create sensitivity slider
  sensitivitySlider = createSlider(1, 100, sensitivity);
  sensitivitySlider.position(20, 20);
  sensitivitySlider.style('width', '200px');

  // Create Play/Pause button in the center
  playPauseButton = createButton("Play");
  playPauseButton.position(width / 2 - 30, height / 2 - 20); // Center the button
  playPauseButton.mousePressed(togglePlayPause);
  playPauseButton.style('font-size', '16px');
  playPauseButton.style('padding', '10px 20px');
}

function draw() {
  // Update background color based on volume
  let soundlvl = amplitude.getLevel();
  bgColor = map(soundlvl, 0, 1, 0, 255);
  background(bgColor, 50, 150);

  // Update sensitivity from slider
  sensitivity = sensitivitySlider.value();

  // Draw frequency visualization
  drawFrequencyBars();

  // Draw dynamic visuals based on volume
  drawVolumeCircle(soundlvl);

  // Display information
  displayInfo();
}

function drawFrequencyBars() {
  let spectrum = fft.analyze();
  noStroke();

  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let barHeight = map(spectrum[i] * sensitivity / 50, 0, 255, 0, height / 2);

    let r = map(spectrum[i], 0, 255, 50, 255);
    let g = map(i, 0, spectrum.length, 50, 255);
    let b = 200;

    fill(r, g, b, 200);
    rect(x, height, width / spectrum.length, -barHeight);
  }
}

function drawVolumeCircle(soundlvl) {
  let circleSize = map(soundlvl * sensitivity / 50, 0, 1, 50, height / 2);
  fill(255, 100, 200, 150);
  noStroke();
  ellipse(width / 2, height / 2, circleSize);
}

function displayInfo() {
  // Display sensitivity value
  fill(255);
  textSize(16);
  text(`Sensitivity: ${sensitivity}`, 20, 60);
  text(`Use the button in the center to play/pause`, 20, 100);
}

function togglePlayPause() {
  if (song.isPlaying()) {
    song.pause();
    playPauseButton.html("Play"); // Update button text
  } else {
    song.loop();
    playPauseButton.html("Pause"); // Update button text
  }
}
