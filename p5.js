let t;
let song;

function preload(){
  // song = loadSound('/c418.mp3');
}


function setup() {
  const canvas = createCanvas(windowWidth+200, windowHeight+200);
  canvas.parent('indexBackground');

  background(10, 10, 10);
  noFill();
  t = 0;

  //sound
  // song.setVolume(0.1);
  // song.play();
  // song.loop();

}

// function draw() {
//   frameRate(48);

//   let scale_factor = 10000;
//   let detail = 0.001;

//   for (let i = 0; i < 2; i++) {
//     let x = width * noise(t + 11045 * scale_factor);
//     let y = height * noise(t + 51025 * scale_factor);

//     let amplitude = map(sin(t), -1, 1, 50, 200); // Amplitude of the sine wave
//     let frequency = map(sin(t + 0.5), -1, 1, 0.01, 0.1); // Frequency of the sine wave

//     let r = map(noise(t), 0, 1, 150, 255);
//     let g = map(noise(t + 10), 0, 1, 0, 100);
//     let b = map(noise(t + 20), 0, 1, 100, 255);

//     stroke(r, g, b, 10);

//     // Draw sine wave
//     beginShape();
//     for (let angle = 0; angle < TWO_PI; angle += 0.1) {
//       let wave = amplitude * sin(frequency * angle);
//       vertex(x + angle * 50, y + wave);
//     }
//     endShape();

//     t += detail;
//   }
// }

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
