import { Ref, RefObject, useEffect, useState } from "react";
import GameEngine from "../core/GameEngine";

export default function useEngine(canvas: RefObject<HTMLCanvasElement>) {
    //Salva uma instância de GameEngine para o respectivo Canvas
    const [engine, setEngine] = useState<GameEngine | null>(null);

    useEffect(() => {
        //Se ainda não temos uma instância de GameEngine e a referência do Canvas está pronta, criamos a instância
        if(!engine && canvas.current) {
            let engine:GameEngine | null = new GameEngine(canvas.current);
            setEngine(
                engine
            );

            //Função para chamar o game-loop com base no requestAnimationFrame do navegador
            const onFrame = () => {
                if(!engine) return;
                //Chame o game-loop
                engine.update();
                requestAnimationFrame(onFrame);
            }

            //Inicia o game-loop
            onFrame()

            //Define a função de destruição (o que será feito quando a Engine "não for mais necessária")
            return () => {
                if(engine)
                    engine.destroy();

                engine = null;
                setEngine(null)
            }
        }
    }, [canvas])
}