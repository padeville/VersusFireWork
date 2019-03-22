

let fireworks = [];
let gravity;

function setup() {
    createCanvas(1500, 700);
    gravity = createVector(0, 0.2);
    stroke(255)
    strokeWeight(5)
    
}
let  azer= 0;

function draw() {
    colorMode(RGB);
  background(0, 0, 0, 25);
    r = random(1);
    if (r < 0.03)
        fireworks.push(new Firework());
    azer++;
    console.log(azer);
    if (azer / 600 == 1) {
        fireworks.push(new Firework(300, 'V'));
        fireworks.push(new Firework(350, 'E'));
        fireworks.push(new Firework(400, 'R'));
        fireworks.push(new Firework(450, 'S'));
        fireworks.push(new Firework(500, 'U'));
        fireworks.push(new Firework(550, 'S'));
        fireworks.push(new Firework(600, 'M'));
        fireworks.push(new Firework(650, 'I'));
        fireworks.push(new Firework(700, 'N'));
        fireworks.push(new Firework(750, 'D'));
        azer = 0;
    }
    
  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }


}