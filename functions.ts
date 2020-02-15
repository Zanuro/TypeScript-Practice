function mult(x:number,y:number):number{
    return x*y;
}

mult(2,3);

let myMult: (a:number,b:number) => number = function(a:number,b:number):number{ return a+b;}

function details(fName:string,sSecond:string):string{
    return fName + sSecond;
}

details("John","Smith");
//details("Sir","William","Ford"); error 3 params instead of 2

function optDetails(fName:string,sSecond?:string):string{

    if(sSecond){
        return fName + sSecond;
    }
    else
        return fName;
}

optDetails("John");
optDetails("John","Smith");
// optDetails("Miss","Elizabeth","Williams"); // error too many params

function manyParams(fName:string = "William", ...seqName:string[]):string{
    let i = 0;
    return i.toString() + seqName.forEach(elem => fName.concat(elem));
}
manyParams("John","Smith","Jr.");
manyParams();


type CustomType = {suit:string,card:number};

let card_game = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker():CustomType{
        let pickedCard = Math.floor(Math.random() * (52 - 1 + 1) + 1);
        let pickedSuit = Math.floor(pickedCard / 13);
        return {suit: this.suits[pickedSuit], card: pickedCard % 13}; // get the card from that particular suit
    }
}

let cardPicker = card_game.createCardPicker();
let pickedCard = cardPicker;

console.log("The randomly choosed card is: " + pickedCard.card + " from the " + pickedCard.suit + " suit");
