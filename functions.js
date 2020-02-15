function mult(x, y) {
    return x * y;
}
mult(2, 3);
var myMult = function (a, b) { return a + b; };
function details(fName, sSecond) {
    return fName + sSecond;
}
details("John", "Smith");
//details("Sir","William","Ford"); error 3 params instead of 2
function optDetails(fName, sSecond) {
    if (sSecond) {
        return fName + sSecond;
    }
    else
        return fName;
}
optDetails("John");
optDetails("John", "Smith");
// optDetails("Miss","Elizabeth","Williams"); // error too many params
function manyParams(fName) {
    if (fName === void 0) { fName = "William"; }
    var seqName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        seqName[_i - 1] = arguments[_i];
    }
    var i = 0;
    return i.toString() + seqName.forEach(function (elem) { return fName.concat(elem); });
}
manyParams("John", "Smith", "Jr.");
manyParams();
var card_game = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var pickedCard = Math.floor(Math.random() * (52 - 1 + 1) + 1);
        var pickedSuit = Math.floor(pickedCard / 13);
        return { suit: this.suits[pickedSuit], card: pickedCard % 13 }; // get the card from that particular suit
    }
};
var cardPicker = card_game.createCardPicker();
var pickedCard = cardPicker;
console.log("The randomly choosed card is: " + pickedCard.card + " from the " + pickedCard.suit + " suit");
