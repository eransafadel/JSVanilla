let countLike=0;
let countDislike = 0;

const buttonLike = document.getElementById("incrementLike");
const buttonDislike = document.getElementById("incrementDislike");

const textHolderLike = document.getElementById("countLike");
textHolderLike.innerHTML = countLike;

const textHolderDislike = document.getElementById("countDislike");
textHolderDislike.innerHTML = countDislike;


buttonLike.addEventListener("click", ()=> textHolderLike.innerHTML = `(${++countLike}) `);
buttonDislike.addEventListener("click",()=>textHolderDislike.innerHTML = `(${++countDislike}) `);




