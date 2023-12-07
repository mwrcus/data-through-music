let t;
let song;

function preload(){
  // soundFormats('mp3');
  // song = loadSound('/c418.mp3');
}


function setup() {
  const canvas = createCanvas(windowWidth+200, windowHeight+200);
  canvas.parent('indexBackground');

  background(10, 10, 10);
  noFill();
  t = 0;

  //sound
  // song.setVolume(0.5);
  // song.play();
  // song.loop();

}

// background
function draw() {
  frameRate(48);
  let scale_factor = 900;
  let detail = 0.001;

  let x1 = width * noise(t + 115045 * scale_factor);
  let x2 = width * noise(t + 201455 * scale_factor);
  let x3 = width * noise(t + 301545 * scale_factor);
  let x4 = width * noise(t + 413305 * scale_factor);
  let y1 = height * noise(t + 561025 * scale_factor);
  let y2 = height * noise(t + 631025 * scale_factor);
  let y3 = height * noise(t + 715023 * scale_factor);
  let y4 = height * noise(t + 364034 * scale_factor);

  let r = map(noise(t), 0, 1, 0, 50);
  let g = map(noise(t + 10), 0, 1, 50, 255);
  let b = map(noise(t + 20), 0, 1, 100, 255);


  stroke(r, g, b, 10);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  t += detail;
}
