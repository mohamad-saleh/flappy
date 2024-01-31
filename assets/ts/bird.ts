class Bird extends Base {
    animation: Array<point>
    frame: number = 0
    speed: number = 0
    period: number = 0
    radius: number = 12
    gravity: number = 0.25
    jump: number = 4.6
    rotation: number = 0

    constructor(obj: obj, animation: Array<point>) {
        super(obj)
        this.animation = animation
    }

    draw() {
        Shared.CTX.save()
        Shared.CTX.translate(this.cx, this.cy)
        Shared.CTX.rotate(this.rotation)
        Shared.CTX.drawImage(this.img, this.animation[this.frame % this.animation.length].x, this.animation[this.frame % this.animation.length].y, this.w, this.h, -this.w / 2, -this.h / 2, this.w, this.h)
        Shared.CTX.restore()
    }

    update(forGroundHeight: number) {
        if (Shared.CURRENT_STATE === READY) {
            this.cy = 150
            this.period = 10
            this.rotation = 0
        } else {
            this.speed += this.gravity
            this.cy += this.speed
            this.period = 5
            if (this.cy + this.h / 2 >= Shared.CANVAS_HEIGHT - forGroundHeight) {
                this.cy = Shared.CANVAS_HEIGHT - forGroundHeight - this.h / 2
                if (Shared.CURRENT_STATE == START) {
                    Shared.CURRENT_STATE = OVER
                    DIE.play()
                }
            }

            if(this.speed >= this.jump){
                this.rotation = 90 * Shared.DEGREE
                this.frame = 1
            }else{
                this.rotation = -25 * Shared.DEGREE
            }
        }

        if (Shared.FRAMES % this.period == 0 && Shared.CURRENT_STATE != OVER) {
            this.frame++
        }
    }

    flip() {
        this.speed = -this.jump
    }
}