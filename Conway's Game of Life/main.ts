import {Game} from "./game";

const gameCanvas = document.querySelector<SVGAElement>("#gameCanvas");

if(gameCanvas){
    const initGame = new Game(gameCanvas);
    initGame.execute_game();
    
}