import {Cell} from "./cell";

const table_i = 20;
const table_j = 20;

export class Game{

    private table:Cell[][];
    private health:string;
    private matrix_i:number;
    private matrix_j:number;

    constructor(private canvaElement: SVGAElement){
        this.table = [];
    }

    initialize_table(){}

    next_turn(){}

    execute_game(){
        this.initialize_table();
        window.setInterval(() => this.next_turn(),500);

    }




}