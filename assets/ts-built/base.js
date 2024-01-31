"use strict";
class Base {
    constructor(obj) {
        var _a, _b, _c, _d;
        const image = new Image();
        image.src = obj.img;
        this.img = image;
        this.x = obj.x;
        this.y = obj.y;
        this.w = obj.w;
        this.h = obj.h;
        this.cx = (_a = obj.cx) !== null && _a !== void 0 ? _a : 0;
        this.cy = (_b = obj.cy) !== null && _b !== void 0 ? _b : 0;
        this.ch = (_c = obj.ch) !== null && _c !== void 0 ? _c : 0;
        this.cw = (_d = obj.cw) !== null && _d !== void 0 ? _d : 0;
    }
}
