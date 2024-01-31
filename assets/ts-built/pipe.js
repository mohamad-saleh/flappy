"use strict";
class Pipe extends Base {
    constructor() {
        super(...arguments);
        this.direction = [
            //Top
            { x: 502, y: 0 },
            //Button
            { x: 553, y: 0 }
        ];
        this.gap = 80;
        this.maxYPos = -150;
        this.positions = [];
    }
    draw() {
        this.positions.forEach(pos => {
            // top pipe
            Shared.CTX.drawImage(this.img, this.direction[1].x, this.direction[1].y, this.w, this.h, pos.x, pos.y, this.w, this.h);
            // bottom pipe
            Shared.CTX.drawImage(this.img, this.direction[0].x, this.direction[0].y, this.w, this.h, pos.x, pos.y + this.h + this.gap, this.w, this.h);
        });
    }
    update() {
        if (Shared.FRAMES % 100 == 0) {
            this.positions.push({
                x: Shared.CANVAS_WIDTH,
                y: this.maxYPos * (Math.random() + 1)
            });
        }
    }
    reset() {
        this.positions = [];
    }
}
