import GameRenderer from "./renderer/GameRenderer";

export default class GameEngine {
    public gameRenderer:GameRenderer;

    constructor(canvas:HTMLCanvasElement) {
        this.gameRenderer = new GameRenderer(canvas);

        this.lastFrameTime = Date.now();
        this.deltaTime = 0;
    }

    destroy() {
        this.gameRenderer.destroy();
        this.gameRenderer = null;
    }

    lastFrameTime: number = 0;
    deltaTime: number = 0;

    update() {
        this.deltaTime = Date.now() - this.lastFrameTime;
        this.lastFrameTime = Date.now();
    }
}