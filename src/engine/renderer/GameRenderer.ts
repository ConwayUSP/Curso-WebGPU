import GameEngine from "../GameEngine";

export default class GameRenderer {
    private _canvas:HTMLCanvasElement | null = null;

    constructor(canvas:HTMLCanvasElement) {
        this.canvas = canvas;
    }

    set canvas(param1) {
        if(this._canvas) {
            this.unregisterWithCanvas(this._canvas);
        }
        this._canvas = param1;
        if(param1) {
            this.registerWithCanvas(this._canvas);
        }
    }

    get canvas() {
        return this._canvas;
    }

    registerWithCanvas(param1) {

    }

    unregisterWithCanvas(param1) {

    }

    destroy() {
        this.canvas = null;
    }
}