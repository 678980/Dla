 const     greeting  = document.querySelector(".greeting");

 const      btn  = document.querySelector(".changable-btn");


 const     changableWord    = document.querySelector(".changable-word")



const words =["hello", "hey", "great","fantastic","perfect"]


const i = Math.floor(Math.random()*words.length)

btn .addEventListener("click",function(){

changableWord .textContent =words[i];


})
