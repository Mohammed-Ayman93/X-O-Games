let sqare = document.querySelectorAll(".sqare");
let Sqare1 = document.getElementById("sqare1");
let Sqare2 = document.getElementById("sqare2");
let Sqare3 = document.getElementById("sqare3");
let Sqare4 = document.getElementById("sqare4");
let Sqare5 = document.getElementById("sqare5");
let Sqare6 = document.getElementById("sqare6");
let Sqare7 = document.getElementById("sqare7");
let Sqare8 = document.getElementById("sqare8");
let Sqare9 = document.getElementById("sqare9");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let player01 = document.getElementById("player01");
let player02 = document.getElementById("player02");
let winner = document.getElementById("winner");
let winer = document.getElementById("winer");
let DRAW = document.getElementById("DRAW");
let btn = document.getElementById("btn");
let warnning = document.getElementById("warnning");
let win = document.querySelector(".win");
let draw = document.querySelector(".draw");
let start = document.querySelector(".start");
var XO1 = Sqare1.attributes;
var XO2 = Sqare2.attributes;
var XO3 = Sqare3.attributes;
var XO4 = Sqare4.attributes;
var XO5 = Sqare5.attributes;
var XO6 = Sqare6.attributes;
var XO7 = Sqare7.attributes;
var XO8 = Sqare8.attributes;
var XO9 = Sqare9.attributes;


player1.onkeyup = function(){
    player01.textContent = this.value;
    warnning.classList.remove("show");
    warnning.classList.add("hide");
}
player2.onkeyup = function(){
    player02.textContent = this.value;
    warnning.classList.remove("show");
    warnning.classList.add("hide");
}
btn.onclick = function(){
    if(player1.value.trim().length == 0 && player1.value.length > 0 || player2.value.trim().length == 0 && player2.value.length > 0 || player1.value.length == 0 || player2.value.length == 0){
        warnning.classList.remove("hide");
        warnning.classList.add("show");
    }else if(player1.value.trim().length != 0 && player1.value.length > 0 && player2.value.trim().length != 0 && player2.value.length > 0) {
        start.classList.add('hide');
        playerTurn.textContent = player01.textContent;
    }
    clear();
};
let turn = "X";
function game (id){
    let elment = document.getElementById(id);
    let playerTurn = document.getElementById("playerTurn");
    if(turn === "X" && elment.textContent == ""){
        elment.textContent = ("X");
        elment.setAttribute("Sqaure","X");
        elment.style.background = ("cornsilk");
        elment.style.border = ("5px solid black");
        playerTurn.textContent = player02.textContent;
        playerTurn.style.color = ("#fff");
        turn = "O";
    }else if(turn === "O" && elment.textContent == ""){
        elment.textContent = ("O");
        elment.setAttribute("Sqaure","O");
        elment.style.background = ("#0c0caa");
        elment.style.color = ("#fff");
        elment.style.border = ("5px solid #fff");
        turn = "X";
        playerTurn.textContent = player01.textContent;
        playerTurn.style.color = ("black");

    };
    Winner();
    Draw();
};
function Win (wins,num1,num2,num3){
    win.classList.remove("hide");
    win.classList.add("show");
    if(wins.sqaure.value == "X"){
        winner.textContent = player01.textContent;
    }else{
        winner.textContent = player02.textContent;
    }
    sqare[num1].style.background = "#000";
    sqare[num2].style.background = "#000";
    sqare[num3].style.background = "#000";
    sqare[num1].style.color = "gold";
    sqare[num2].style.color = "gold";
    sqare[num3].style.color = "gold";
    sqare[num1].style.border = "5px solid gold";
    sqare[num2].style.border = "5px solid gold";
    sqare[num3].style.border = "5px solid gold";
    setInterval(function(){winer.textContent += "."},1000);
    setTimeout(function(){location.assign("index.html")},4000);
}
function clear(){
    player1.value = '';
    player2.value = '';
}
function Draw(){
    let Count = 0;
    for( let I = 0 ; I < 9 ; I++ ){
        Count += Number(sqare.valueOf()[I].attributes.sqaure.value == "X");
    }
    if(win.classList[1] == "show"){
        Count = 0;
    }
    if(Count == 5){
        draw.classList.remove("hide");
        draw.classList.add("show");
    setInterval(function(){DRAW.textContent += "."},1000);
    setTimeout(function(){location.assign("index.html")},4000);
    }
}

function Winner(){
if(XO1.sqaure.value == XO2.sqaure.value && XO2.sqaure.value == XO3.sqaure.value && XO1.sqaure.value != "" ){
    let wins = Sqare1.attributes;
    Win(wins,0,1,2);
};
if(XO4.sqaure.value == XO5.sqaure.value && XO5.sqaure.value == XO6.sqaure.value && XO4.sqaure.value != ""  ){
    let wins = Sqare4.attributes;
    Win(wins,3,4,5);
};
if(XO7.sqaure.value == XO8.sqaure.value && XO8.sqaure.value == XO9.sqaure.value && XO7.sqaure.value != ""  ){
    let wins = Sqare7.attributes;
    Win(wins,6,7,8);
};
if(XO1.sqaure.value == XO4.sqaure.value && XO4.sqaure.value == XO7.sqaure.value && XO1.sqaure.value != "" ){
    let wins = Sqare1.attributes;
    Win(wins,0,3,6);
};
if(XO5.sqaure.value == XO2.sqaure.value && XO2.sqaure.value == XO8.sqaure.value && XO2.sqaure.value != "" ){
    let wins = Sqare2.attributes;
    Win(wins,1,4,7);
};
if(XO9.sqaure.value == XO6.sqaure.value && XO6.sqaure.value == XO3.sqaure.value && XO3.sqaure.value != ""){
    let wins = Sqare3.attributes;
    Win(wins,2,5,8);
};
if(XO1.sqaure.value == XO5.sqaure.value && XO5.sqaure.value == XO9.sqaure.value && XO1.sqaure.value != "" ){
    let wins = Sqare1.attributes;
    Win(wins,0,4,8);
};
if(XO7.sqaure.value == XO5.sqaure.value && XO5.sqaure.value == XO3.sqaure.value && XO3.sqaure.value != ""){
    let wins = Sqare3.attributes;
    Win(wins,2,4,6);
};
};








