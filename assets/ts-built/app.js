"use strict";
class App {
}
App.game = new Game({
    img: '',
    x: 0,
    y: 0,
    w: Shared.CANVAS_WIDTH,
    h: Shared.CANVAS_HEIGHT
});
App.init = () => {
    App.game.draw();
    App.game.update();
    Shared.FRAMES++;
    requestAnimationFrame(App.init);
};
App.init();
Shared.CANVAS.addEventListener('click', (event) => {
    switch (Shared.CURRENT_STATE) {
        case READY:
            Shared.CURRENT_STATE = START;
            SWOOSHING.play();
            break;
        case START:
            if (App.game.bird.cy - App.game.bird.radius > 0) {
                App.game.bird.flip();
                FLAP.play();
            }
            break;
        default:
            let rect = Shared.CANVAS.getBoundingClientRect();
            let clickX = event.clientX - rect.left;
            let clickY = event.clientY - rect.top;
            // CHECK IF WE CLICK ON THE START BUTTON
            if (clickX >= Shared.startBtn.x && clickX <= Shared.startBtn.x + Shared.startBtn.w && clickY >= Shared.startBtn.y && clickY <= Shared.startBtn.y + Shared.startBtn.h) {
                App.game.pipe.reset();
                App.game.bird.speed = 0;
                App.game.score.reset();
                Shared.CURRENT_STATE = READY;
            }
    }
});
