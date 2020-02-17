"use strict";
exports.__esModule = true;
var Calculator_1 = require("./Calculator");
var c = new Calculator_1.Calculator();
var entry = "";
console.log("aa");
var btn_1;
btn_1 = document.getElementById("button-1");
if (btn_1 !== null) {
    btn_1.addEventListener("click", function (e) { return listen_input("1"); });
}
var btn_2;
btn_2 = document.getElementById("button-2");
if (btn_2 !== null) {
    btn_2.addEventListener("click", function (e) { return listen_input("2"); });
}
var btn_3;
btn_3 = document.getElementById("button-3");
if (btn_3 !== null) {
    btn_3.addEventListener("click", function (e) { return listen_input("3"); });
}
var btn_4;
btn_4 = document.getElementById("button-4");
if (btn_4 !== null) {
    btn_4.addEventListener("click", function (e) { return listen_input("4"); });
}
var btn_5;
btn_5 = document.getElementById("button-5");
if (btn_5 !== null) {
    btn_5.addEventListener("click", function (e) { return listen_input("5"); });
}
var btn_6;
btn_6 = document.getElementById("button-6");
if (btn_6 !== null) {
    btn_6.addEventListener("click", function (e) { return listen_input("6"); });
}
var btn_7;
btn_7 = document.getElementById("button-7");
if (btn_7 !== null) {
    btn_7.addEventListener("click", function (e) { return listen_input("7"); });
}
var btn_8;
btn_8 = document.getElementById("button-8");
if (btn_8 !== null) {
    btn_8.addEventListener("click", function (e) { return listen_input("8"); });
}
var btn_9;
btn_9 = document.getElementById("button-9");
if (btn_9 !== null) {
    btn_9.addEventListener("click", function (e) { return listen_input("9"); });
}
var btn_div;
btn_div = document.getElementById("op/");
if (btn_div !== null) {
    btn_div.addEventListener("click", function (e) { return listen_input("/"); });
}
var btn_plus;
btn_plus = document.getElementById("op+");
if (btn_plus !== null) {
    btn_plus.addEventListener("click", function (e) { return listen_input("+"); });
}
var btn_mult;
btn_mult = document.getElementById("op*");
if (btn_mult !== null) {
    btn_mult.addEventListener("click", function (e) { return listen_input("*"); });
}
var btn_min;
btn_min = document.getElementById("op-");
if (btn_min !== null) {
    btn_min.addEventListener("click", function (e) { return listen_input("-"); });
}
var btn_equal;
btn_equal = document.getElementById("op=");
if (btn_equal !== null) {
    btn_equal.addEventListener("click", function (e) { return compute_result(); });
}
var btn_point;
btn_point = document.getElementById("op.");
if (btn_point !== null) {
    btn_point.addEventListener("click", function (e) { return listen_input("."); });
}
var btn_clear;
btn_clear = document.getElementById("clear");
if (btn_clear !== null) {
    btn_clear.addEventListener("click", function (e) { return c.clear_results(); });
}
var btn_mod;
btn_mod = document.getElementById("op%");
if (btn_mod !== null) {
    btn_mod.addEventListener("click", function (e) { return listen_input("%"); });
}
var btn_fact;
btn_fact = document.getElementById("op!");
if (btn_fact !== null) {
    btn_fact.addEventListener("click", function (e) { return listen_input("!"); });
}
function listen_input(entry_char) {
    // if(entry_char >= "0" && entry_char <= "9"){
    entry += entry_char;
    //}
}
function compute_result() {
    entry += "=";
    var result = Calculator_1.test(c, entry);
    document.getElementById("result").value = String(result);
}
