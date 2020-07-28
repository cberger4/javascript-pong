class Opponent {
  constructor() {
    this.pos = createVector(width - 60, height / 2);
    this.length = 10;
    this.width = 50;
    this.speed = 3;
  }

  show() {
    rect(this.pos.x, this.pos.y, this.length, this.width, this.length);
  }

  follow(ball) {
    if (this.pos.y + this.width / 2 < ball.pos.y) {
      this.pos.y += this.speed;
    }
    if (this.pos.y + this.width / 2 > ball.pos.y) {
      this.pos.y -= this.speed;
    }

    // adding upper bound
    if (this.pos.y < 0) {
      this.pos.y = 0;
    }

    // adding lower bound
    if (this.pos.y + this.width > height) {
      this.pos.y = height - this.width;
    }
  }

  hits(ball) {
    if (ball.pos.x + ball.size > this.pos.x) {
      if (ball.pos.y > this.pos.y && ball.pos.y < this.pos.y + this.width) {
        return true;
      }
    } else return false;
  }
}