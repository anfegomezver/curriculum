let enlaces_header = document.querySelectorAll(".enlaces-header")[0];
let ico_hamburguer = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(ico_hamburguer){
        document.querySelectorAll(".hamburguer")[0].style.color ="#fff";
        ico_hamburguer= false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color ="#000";
        ico_hamburguer= true;
    }

    enlaces_header.classList.toggle("hamburgueropen");
})

document.querySelectorAll(".enlaces-header")[0].addEventListener("click", function(){
    enlaces_header.classList.toggle("hamburgueropen");
    document.querySelectorAll(".hamburguer")[0].style.color ="#000";
})