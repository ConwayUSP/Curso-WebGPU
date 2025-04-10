import GameRenderer from "../renderer/GameRenderer";
import Scene from "./Scene";
import Time from "./Time";

export default class GameEngine {
    public gameRenderer:GameRenderer;
    public currentScene:Scene = null;

    constructor(canvas:HTMLCanvasElement) {
        this.gameRenderer = new GameRenderer(canvas);
    }

    destroy() {
        this.gameRenderer.destroy();
        this.gameRenderer = null;
    }

    update() {
        Time.update()
    }
}