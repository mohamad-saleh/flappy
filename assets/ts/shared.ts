const READY = 'ready'
const OVER = 'over'
const START = 'start'

type state = 'ready' | 'over' | 'start'

interface obj {
    img: string,
    x: number,
    y: number,
    w: number,
    h: number,
    cx?: number,
    cy?: number,
    ch?: number,
    cw?: number
}

interface point {
    x: number,
    y: number
}

class Shared {
    static readonly DEGREE = Math.PI / 180
    static readonly CANVAS = document.querySelector('canvas')
    static readonly CTX = <CanvasRenderingContext2D>Shared.CANVAS!.getContext('2d')
    static readonly CANVAS_WIDTH = Shared.CANVAS!.width
    static readonly CANVAS_HEIGHT = Shared.CANVAS!.height
    static readonly startBtn = {
        x: 120,
        y: 263,
        w: 83,
        h: 29
    }
    static FRAMES = 0
    static CURRENT_STATE: state = 'ready'
}

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