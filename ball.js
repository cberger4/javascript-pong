class Ball {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.size = 10;
    this.vel = createVector(random(1, 2), random(-1, 1));
  }

  show() {
    rect(this.pos.x, this.pos.y, this.size, this.size);
  }

  update() {
    this.pos.add(this.vel);

    if (this.pos.y < 0 || this.pos.y + this.size > height) {
      this.changeY();
    }
  }

  playerScored() {
    if (this.pos.x > width) {
      return true;
    } else return false;
  }

  opponentScored() {
    if (this.pos.x < 0) {
      return true;
    } else return false;
  }

  turnAround() {
    this.vel.x *= -1;
  }

  changeY() {
    this.vel.y *= -1;
  }

  speedUp() {
    if (this.vel.x > 0) {
      this.vel.x += 0.5;
    } else {
      this.vel.x -= 0.5;
    }

    if (this.vel.y > 0) {
      this.vel.y += 0.5;
    } else {
      this.vel.y -= 0.5;
    }
  }
}