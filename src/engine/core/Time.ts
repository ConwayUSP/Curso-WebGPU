export default class Time {
    private static _deltaTime: number = 0;
    private static _lastFrameTime: number = Date.now();

    static get deltaTime(): number {
        return this._deltaTime;
    }

    static update(): void {
        this._deltaTime = Date.now() - this._lastFrameTime;
        this._lastFrameTime = Date.now();
    }
}