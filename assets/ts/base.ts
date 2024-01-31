abstract class Base {
    img: HTMLImageElement
    x: number
    y: number
    w: number
    h: number
    cx: number
    cy: number
    ch: number
    cw: number

    constructor(obj: obj) {
        const image = new Image();
        image.src = obj.img
        this.img = image
        this.x = obj.x
        this.y = obj.y
        this.w = obj.w
        this.h = obj.h
        this.cx = obj.cx ?? 0
        this.cy = obj.cy ?? 0
        this.ch = obj.ch ?? 0
        this.cw = obj.cw ?? 0
    }

    abstract draw(): void
}