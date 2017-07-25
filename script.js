var song;
var sliderRate;
var sliderPan;


function setup() {
  createCanvas(200, 200);
  song = loadSound('Rainbow.mp3', callback);
  song.setVolume(0.5);
  // sliderRate = createSlider(0, 1.5, 1, 0.01);
  sliderPan = createSlider(0, 1, 0.5, 0.01);
}

function callback() {
  song.play();
}

function draw() {
  background(random(255));
  song.pan(sliderPan.value());
  // song.rate(sliderRate.value());
}