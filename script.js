var song;
var button;
var jumpButton;


function setup() {
  createCanvas(200, 200);
  song = loadSound('Highway.mp3', preload);
  song.setVolume(0.5);

  button = createButton('play');
  button.mousePressed(togglePlaying);

  jumpButton = createButton('jump');
  jumpButton.mousePressed(jump);

  background(51);

  song.addCue(2, changeBackground, color(0, 0, 255));
  song.addCue(4, changeBackground, color(0, 255, 255));
  song.addCue(6, changeBackground, color(127, 23, 201));
}


function jump() {
  var len = song.duration();
  var t = random(len);
  song.jump(t);
  console.log(t);
}

function changeBackground(col) {
  background(col);
  console.log(col);
}


function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    button.html('stop');
  } else {
    song.stop();
    button.html('play');
  }
}

// function draw() {
//   background(song.currentTime() * 15, 0, 251);
// }

function preload() {
  console.log('preload song');
}
