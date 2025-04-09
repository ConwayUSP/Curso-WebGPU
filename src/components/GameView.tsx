import { useRef } from "react";
import useEngine from "../engine/hooks/useEngine";

export function GameView() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEngine(canvasRef);

    return (
        <canvas width={800} height={600} ref={canvasRef} />
    )
}