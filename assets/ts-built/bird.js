"use strict";
class Bird extends Base {
    constructor(obj, animation) {
        super(obj);
        this.frame = 0;
        this.speed = 0;
        this.period = 0;
        this.radius = 12;
        this.gravity = 0.25;
        this.jump = 4.6;
        this.rotation = 0;
        this.animation = animation;
    }
    draw() {
        Shared.CTX.save();
        Shared.CTX.translate(this.cx, this.cy);
        Shared.CTX.rotate(this.rotation);
        Shared.CTX.drawImage(this.img, this.animation[this.frame % this.animation.length].x, this.animation[this.frame % this.animation.length].y, this.w, this.h, -this.w / 2, -this.h / 2, this.w, this.h);
        Shared.CTX.restore();
    }
    update(forGroundHeight) {
        if (Shared.CURRENT_STATE === READY) {
            this.cy = 150;
            this.period = 10;
            this.rotation = 0;
        }
        else {
            this.speed += this.gravity;
            this.cy += this.speed;
            this.period = 5;
            if (this.cy + this.h / 2 >= Shared.CANVAS_HEIGHT - forGroundHeight) {
                this.cy = Shared.CANVAS_HEIGHT - forGroundHeight - this.h / 2;
                if (Shared.CURRENT_STATE == START) {
                    Shared.CURRENT_STATE = OVER;
                    DIE.play();
                }
            }
            if (this.speed >= this.jump) {
                this.rotation = 90 * Shared.DEGREE;
                this.frame = 1;
            }
            else {
                this.rotation = -25 * Shared.DEGREE;
            }
        }
        if (Shared.FRAMES % this.period == 0 && Shared.CURRENT_STATE != OVER) {
            this.frame++;
        }
    }
    flip() {
        this.speed = -this.jump;
    }
}
