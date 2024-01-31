"use strict";
const READY = 'ready';
const OVER = 'over';
const START = 'start';
class Shared {
}
Shared.DEGREE = Math.PI / 180;
Shared.CANVAS = document.querySelector('canvas');
Shared.CTX = Shared.CANVAS.getContext('2d');
Shared.CANVAS_WIDTH = Shared.CANVAS.width;
Shared.CANVAS_HEIGHT = Shared.CANVAS.height;
Shared.startBtn = {
    x: 120,
    y: 263,
    w: 83,
    h: 29
};
Shared.FRAMES = 0;
Shared.CURRENT_STATE = 'ready';
const SCORE_S = new Audio();
SCORE_S.src = "assets/sound/sfx_point.wav";
const FLAP = new Audio();
FLAP.src = "assets/sound/sfx_flap.wav";
const HIT = new Audio();
HIT.src = "assets/sound/sfx_hit.wav";
const SWOOSHING = new Audio();
SWOOSHING.src = "assets/sound/sfx_swooshing.wav";
const DIE = new Audio();
DIE.src = "assets/sound/sfx_die.wav";
