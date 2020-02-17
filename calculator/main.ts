import { Calculator, test } from "./Calculator";

let c = new Calculator();
let entry:string = "";

console.log("aa");
let btn_1: HTMLElement | null;
btn_1 = document.getElementById("button-1");
if(btn_1 !== null){
    btn_1.addEventListener("click", (e:Event) => listen_input("1"));
}
let btn_2: HTMLElement | null;
btn_2 = document.getElementById("button-2");
if(btn_2 !== null){
    btn_2.addEventListener("click", (e:Event) => listen_input("2"));
}
let btn_3: HTMLElement | null;
btn_3 = document.getElementById("button-3");
if(btn_3 !== null){
    btn_3.addEventListener("click", (e:Event) => listen_input("3"));
}
let btn_4: HTMLElement | null;
btn_4 = document.getElementById("button-4");
if(btn_4 !== null){
    btn_4.addEventListener("click", (e:Event) => listen_input("4"));
}
let btn_5: HTMLElement | null;
btn_5 = document.getElementById("button-5");
if(btn_5 !== null){
    btn_5.addEventListener("click", (e:Event) => listen_input("5"));
}
let btn_6: HTMLElement | null;
btn_6 = document.getElementById("button-6");
if(btn_6 !== null){
    btn_6.addEventListener("click", (e:Event) => listen_input("6"));
}
let btn_7: HTMLElement | null;
btn_7 = document.getElementById("button-7");
if(btn_7 !== null){
    btn_7.addEventListener("click", (e:Event) => listen_input("7"));
}
let btn_8: HTMLElement | null;
btn_8 = document.getElementById("button-8");
if(btn_8 !== null){
    btn_8.addEventListener("click", (e:Event) => listen_input("8"));
}
let btn_9: HTMLElement | null;
btn_9 = document.getElementById("button-9");
if(btn_9 !== null){
    btn_9.addEventListener("click", (e:Event) => listen_input("9"));
}

let btn_div: HTMLElement | null;
btn_div = document.getElementById("op/");
if(btn_div !== null){
    btn_div.addEventListener("click", (e:Event) => listen_input("/"));
}

let btn_plus: HTMLElement | null;
btn_plus = document.getElementById("op+");
if(btn_plus !== null){
    btn_plus.addEventListener("click", (e:Event) => listen_input("+"));
}

let btn_mult: HTMLElement | null;
btn_mult = document.getElementById("op*");
if(btn_mult !== null){
    btn_mult.addEventListener("click", (e:Event) => listen_input("*"));
}

let btn_min: HTMLElement | null;
btn_min = document.getElementById("op-");
if(btn_min !== null){
    btn_min.addEventListener("click", (e:Event) => listen_input("-"));
}

let btn_equal: HTMLElement | null;
btn_equal = document.getElementById("op=");
if(btn_equal !== null){
    btn_equal.addEventListener("click", (e:Event) => compute_result());
}

let btn_point: HTMLElement | null;
btn_point = document.getElementById("op.");
if(btn_point !== null){
    btn_point.addEventListener("click", (e:Event) => listen_input("."));
}

let btn_clear: HTMLElement | null;
btn_clear = document.getElementById("clear");
if(btn_clear !== null){
    btn_clear.addEventListener("click", (e:Event) => c.clear_results());
}
let btn_mod: HTMLElement | null;
btn_mod = document.getElementById("op%");
if(btn_mod !== null){
    btn_mod.addEventListener("click", (e:Event) => listen_input("%"));
}
let btn_fact: HTMLElement | null;
btn_fact = document.getElementById("op!");
if(btn_fact !== null){
    btn_fact.addEventListener("click", (e:Event) => listen_input("!"));
}

function listen_input(entry_char:string){

   // if(entry_char >= "0" && entry_char <= "9"){
        entry += entry_char;
    //}

}
function compute_result(){
    entry += "=";
    let result = test(c,entry);
    (<HTMLInputElement>document.getElementById("result")).value = String(result);
}