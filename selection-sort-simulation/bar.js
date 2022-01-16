class Bar {
  constructor(num) {
    this.color = COLORS.WHITE
    this.num = num;
    this.pos = null;
    this.targetPos = 0;
    this.width = null;
    this.height = null;
    this.isMoving = false;
  }

  show() {
    noStroke();
    smooth();
    fill(this.color);
    drawingContext.shadowOffsetX = -5;
    drawingContext.shadowOffsetY = -5;
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = color('rgba(73, 63, 73, 0.459)');
    rect(this.pos, CANVAS_HEIGHT, this.pos + this.width, this.height, 5);
    fill(COLORS.WHITE);
    text(this.num, this.pos + this.width / 2, this.height - 3);
  }

  setTargetPos(pos) {
    this.targetPos = pos;
    this.moveBy = pos - this.pos;
  }

  changeColor(color) {
    this.color = color;
  }

  move() {
    const speed = 7;
    //moving right
    if (this.moveBy > 0) {
      this.pos += speed;
      this.moveBy -= speed;
      if (this.moveBy < 0) {
        this.moveBy = 0;
        this.pos = this.targetPos;
        this.isMoving = false;
        return false;
      }
      this.show();
      this.isMoving = true;
      return true;
    }

    //moving left
    if (this.moveBy < 0) {
      this.pos -= speed;
      this.moveBy += speed;
      if (this.moveBy > 0) {
        this.moveBy = 0;
        this.pos = this.targetPos;
        this.isMoving = false;
        return false;
      }
      this.show();
      this.isMoving = true;
      return true;
    }
    else {
      return false;
    }
  }
}
