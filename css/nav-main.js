let humburgerbtn = document.querySelector(".humburgerbtn");
let ul = document.querySelector("ul");

humburgerbtn.addEventListener("click", ()=>{
    
ul.classList.toggle("showData");

if(ul.className == "showData"){
    document.getElementById("bar").className= "fa-solid fa-xmark";
}else{
       document.getElementById("bar").className= "fa-solid fa-bars";
}

})