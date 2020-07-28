class Player {
  constructor() {
    this.x = 50;
    this.y = height / 2;
    this.length = 10;
    this.width = 50;
    this.speed = 3;
  }

  show() {
    rect(this.x, this.y, this.length, this.width, this.length);
  }

  up() {
    this.y -= this.speed;

    // adding upper bound
    if (this.y < 0) {
      this.y = 0;
    }
  }

  down() {
    this.y += this.speed;

    // adding lower bound
    if (this.y + this.width > height) {
      this.y = height - this.width;
    }
  }

  hits(ball) {
    if (this.x + this.length > ball.pos.x) {
      if (ball.pos.y > this.y && ball.pos.y < this.y + this.width) {
        return true;
      }
    } else return false;
  }
}