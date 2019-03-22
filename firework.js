function Firework(x = random(width), letter = null) {
    this.hu = random(255);
    if (letter)
        this.firework = new Particle(x, height, this.hu, true, true, -10);
    else
        this.firework = new Particle(x, height, this.hu, true);

    this.exploded = false;
    this.particles = [];

    this.letter = letter;
    this.done = function() {
        if (this.exploded && this.particles.length === 0) {
            return true;
        } else {
            return false;
        }
    }

  this.update = function() {
    if (!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();
      
      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explode();
      }
    }
    
    for (var i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
      
      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }
  }

  this.explode = function() {
    
    objLetter = new DrawLetter();

    if (letter) {
        letterArray = objLetter.letterDraw(letter);
        for (var i = 0; i < letterArray.length; i++) {
            var p = new Particle(this.firework.pos.x + letterArray[i].x, this.firework.pos.y + letterArray[i].y, 50, false, false);
            this.particles.push(p);
        }
    } else {
        for (var i = 0; i < 100; i++) {
            var p = new Particle(this.firework.pos.x, this.firework.pos.y, random(255), false);
            this.particles.push(p);
        }
    }
        

  }

  this.show = function() {
    if (!this.exploded) {
      this.firework.show();
    }
    
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  }
}