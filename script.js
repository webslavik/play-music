var song;
var button;
var jumpButton;
var amp;


function setup() {
  createCanvas(200, 200);
  song = loadSound('Highway.mp3', preload);
  song.setVolume(0.5);

  amp = new p5.Amplitude();

  button = createButton('play');
  button.mousePressed(togglePlaying);

  jumpButton = createButton('jump');
  jumpButton.mousePressed(jump);

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

function draw() {
  background(51);

  var vol = amp.getLevel();

  fill(255, 0, 255);
  ellipse(width/2, height/2, 10+vol*200, 10+vol*200);
}

function preload() {
  console.log('preload song');
}
