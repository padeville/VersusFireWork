function Particle(x, y, hu, firework, isNotLetter = true, _velY = random(-18, -6)) {
  this.pos = createVector(x, y);
  this.firework = firework;
  this.lifespan = random(255);
  this.hu = hu;
  this.acc = createVector(0, 0);
  
    if (this.firework) {
        this.vel = createVector(0, _velY);
    } else {
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(2, 10));
    } 
 
  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    if (!this.firework) {
      this.vel.mult(0.9);
      this.lifespan -= 4;
    }
  if (isNotLetter) {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
    this.acc.mult(0);
  }

  this.done = function() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }

  this.show = function() {
    colorMode(HSB);
    
    if (!this.firework) {
      strokeWeight(2);
      stroke(hu, random(255), random(255), this.lifespan);
    } else {
      strokeWeight(4);
      stroke(hu, random(255), random(255));
    }
    
    point(this.pos.x, this.pos.y);
  }
}