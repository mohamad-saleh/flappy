class Message extends Base {
    draw() {
        Shared.CTX.drawImage(this.img, this.x, this.y, this.w, this.h, this.cx, this.cy, this.cw, this.ch)
    }
}