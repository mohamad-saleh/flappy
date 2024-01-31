"use strict";
class Score {
    constructor() {
        this.best = Number(localStorage.getItem("best")) || 0;
        this.value = 0;
    }
    draw() {
        Shared.CTX.fillStyle = "#FFF";
        Shared.CTX.strokeStyle = "#000";
        Shared.CTX.font = "35px Teko";
        if (Shared.CURRENT_STATE == START) {
            Shared.CTX.lineWidth = 2;
            Shared.CTX.fillText(String(this.value), Shared.CANVAS_WIDTH / 2, 50);
            Shared.CTX.strokeText(String(this.value), Shared.CANVAS_WIDTH / 2, 50);
        }
        else if (Shared.CURRENT_STATE == OVER) {
            // SCORE VALUE
            Shared.CTX.fillText(String(this.value), 225, 186);
            Shared.CTX.strokeText(String(this.value), 225, 186);
            // BEST SCORE
            Shared.CTX.fillText(String(this.best), 250, 228);
            Shared.CTX.strokeText(String(this.best), 225, 228);
        }
    }
    reset() {
        this.value = 0;
    }
}
