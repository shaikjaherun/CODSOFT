const images=[

"1000080059-removebg-preview.png",
"1000080086-removebg-preview.png",
"1000080324-removebg-preview.png",
"1000080338-removebg-preview.png",
"1000080339-removebg-preview.png",
"1000080340-removebg-preview.png",
"1000080344-removebg-preview.png",
"1000080356-removebg-preview.png"

];

let cards=[...images,...images];

let flipped=[];

let matched=0;

let lock=false;

const board=document.getElementById("gameBoard");

const counter=document.getElementById("matchCounter");


function startGame(){

document.getElementById("startScreen").style.display="none";

board.style.display="grid";

document.querySelector(".title").style.display="block";

document.getElementById("restartBtn").style.display="block";

counter.style.display="block";

updateCounter();

createBoard();

}


function shuffle(array){

for(let i=array.length-1;i>0;i--){

let j=Math.floor(Math.random()*(i+1));

[array[i],array[j]]=[array[j],array[i]];

}

}


function createBoard(){

board.innerHTML="";

shuffle(cards);

cards.forEach(img=>{

let card=document.createElement("div");

card.className="card";

card.dataset.name=img;

card.innerHTML=`

<div class="inner">

<div class="back"></div>

<div class="front">

<img src="${img}">

</div>

</div>

`;

card.addEventListener("click",flipCard);

board.appendChild(card);

});

}


function flipCard(){

if(lock) return;

if(this.classList.contains("matched")) return;

if(flipped.includes(this)) return;

this.firstElementChild.classList.add("flip");

flipped.push(this);

if(flipped.length==2){

lock=true;

setTimeout(checkMatch,700);

}

}


function checkMatch(){

let[a,b]=flipped;

if(a.dataset.name==b.dataset.name){

a.classList.add("matched");

b.classList.add("matched");

matched++;

updateCounter();

if(matched==8){

document.getElementById("winScreen").style.display="flex";

}

}

else{

a.firstElementChild.classList.remove("flip");

b.firstElementChild.classList.remove("flip");

}

flipped=[];

lock=false;

}


function updateCounter(){

counter.innerText="Matches: "+matched+" / 8";

}


function restartGame(){

matched=0;

flipped=[];

lock=false;

updateCounter();

createBoard();

}


function playAgain(){

document.getElementById("winScreen").style.display="none";

restartGame();

}