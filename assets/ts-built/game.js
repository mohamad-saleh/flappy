"use strict";
class Game extends Base {
    constructor() {
        super(...arguments);
        this.gameOver = new Message({
            img: 'assets/img/sprite.png',
            x: 175,
            y: 228,
            w: 225,
            h: 202,
            cx: (Shared.CANVAS_WIDTH / 2) - (225 / 2),
            cy: 90,
            cw: 225,
            ch: 202
        });
        this.getReady = new Message({
            img: 'assets/img/sprite.png',
            x: 0,
            y: 228,
            w: 173,
            h: 152,
            cx: (Shared.CANVAS_WIDTH / 2) - (173 / 2),
            cy: 90,
            cw: 173,
            ch: 152
        });
        this.backGround = new Ground({
            img: 'assets/img/sprite.png',
            x: 0,
            y: 0,
            w: 275,
            h: 226,
            cx: 0,
            cy: Shared.CANVAS_HEIGHT - 226,
            cw: 275,
            ch: 226
        });
        this.forGround = new Ground({
            img: 'assets/img/sprite.png',
            x: 276,
            y: 0,
            w: 224,
            h: 112,
            cx: 0,
            cy: Shared.CANVAS_HEIGHT - 112,
            cw: 224,
            ch: 112
        });
        this.bird = new Bird({
            img: 'assets/img/sprite.png',
            x: 0,
            y: 0,
            w: 34,
            h: 26,
            cx: 50,
            cy: 150,
            cw: 34,
            ch: 26
        }, [
            { x: 276, y: 112 },
            { x: 276, y: 139 },
            { x: 276, y: 164 },
            { x: 276, y: 139 }
        ]);
        this.pipe = new Pipe({
            img: 'assets/img/sprite.png',
            x: 0,
            y: 0,
            w: 53,
            h: 400,
            cx: 0,
            cy: 0,
            cw: 53,
            ch: 400,
        });
        this.score = new Score();
    }
    draw() {
        Shared.CTX.fillStyle = '#70c5ce';
        Shared.CTX.fillRect(this.x, this.y, this.w, this.h);
        this.backGround.draw();
        this.forGround.draw();
        this.bird.draw();
        this.pipe.draw();
        if (Shared.CURRENT_STATE === OVER) {
            this.gameOver.draw();
        }
        if (Shared.CURRENT_STATE === READY) {
            this.getReady.draw();
        }
        this.score.draw();
    }
    update() {
        this.bird.update(this.forGround.h);
        if (Shared.CURRENT_STATE === START) {
            this.forGround.update(2);
            this.pipe.update();
            this.pipe.positions.forEach(pos => {
                // COLLISION DETECTION
                // TOP PIPE
                if (this.bird.cx + this.bird.radius > pos.x && this.bird.cx - this.bird.radius < pos.x + this.pipe.w && this.bird.cy + this.bird.radius > pos.y && this.bird.cy - this.bird.radius < pos.y + this.pipe.h) {
                    Shared.CURRENT_STATE = OVER;
                    HIT.play();
                }
                // BOTTOM PIPE
                if (this.bird.cx + this.bird.radius > pos.x && this.bird.cx - this.bird.radius < pos.x + this.pipe.w && this.bird.cy + this.bird.radius > pos.y + this.pipe.h + this.pipe.gap && this.bird.cy - this.bird.radius < pos.y + this.pipe.h + this.pipe.gap + this.pipe.h) {
                    Shared.CURRENT_STATE = OVER;
                    HIT.play();
                }
                // MOVE THE PIPES TO THE LEFT
                pos.x -= 2;
                // if the pipes go beyond canvas, we delete them from the array
                if (pos.x + this.pipe.w <= 0) {
                    this.pipe.positions.shift();
                    this.score.value++;
                    SCORE_S.play();
                    this.score.best = Math.max(this.score.value, this.score.best);
                    localStorage.setItem("best", String(this.score.best));
                }
            });
        }
    }
}
