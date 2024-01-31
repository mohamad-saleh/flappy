"use strict";
class Ground extends Base {
    draw() {
        Shared.CTX.drawImage(this.img, this.x, this.y, this.w, this.h, this.cx, this.cy, this.cw, this.ch);
        Shared.CTX.drawImage(this.img, this.x, this.y, this.w, this.h, this.cx + this.w, this.cy, this.cw, this.ch);
    }
    update(dx) {
        this.cx = (this.cx - dx) % (this.w / 2);
    }
}
