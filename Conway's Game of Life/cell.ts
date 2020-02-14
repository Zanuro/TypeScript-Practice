export class Cell{
    private state:string;
    private cell_element:SVGRectElement;

    public constructor(s:string,whole_space:SVGRectElement,private i:number,private j:number){
        this.state = s;
        this.cell_element = this.create_cell();
        whole_space.appendChild(this.cell_element);
        this.draw_space();
    }

    public get_state():string{
        return this.state;
    }

    public create_cell(){
        const rectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rectangle.setAttribute("width","1");
        rectangle.setAttribute("height","1");

        return ;

    }
}