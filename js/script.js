const nav = document.querySelector(".menu-bar");
const about = document.querySelector(".about-me");
const proyects =  document.querySelector(".proyects");
const information = document.querySelector(".information");
const footer = document.querySelector(".footer");
const aHome = document.querySelector(".a-home");
const aAbout = document.querySelector(".a-about");
const aProyects = document.querySelector(".a-proyects");
const aInformation = document.querySelector(".a-information");
const textContact = document.querySelector(".text-contact");
const imgLenguaje = document.querySelectorAll(".skills picture img");
const array = [[aHome, 0, 550], [aAbout, 610, 1100], [aProyects, 1220, 1800], [aInformation, 2000, 2000]];
const buttonProyects = document.querySelectorAll(".proyects .card-second button");

buttonProyects[0].addEventListener("click", ()=>{
    window.open("https://sqdeveloper.github.io/Page-Barberia/");
});
buttonProyects[1].addEventListener("click", ()=>{
    window.open("https://github.com/SQdeveloper/Page-Barberia");
});
buttonProyects[2].addEventListener("click", ()=>{
    window.open("https://sqdeveloper.github.io/Page-Anime/");
});
buttonProyects[3].addEventListener("click", ()=>{
    window.open("https://github.com/SQdeveloper/Page-Anime");
});
buttonProyects[4].addEventListener("click", ()=>{
    window.open("https://sqdeveloper.github.io/cubePage/");
});
buttonProyects[5].addEventListener("click", ()=>{
    window.open("https://github.com/SQdeveloper/cubePage.git");
});

//For para cuando el mause ingrese en las imagenes(lengProgramacion) se agrege una clase que permite ejecutar una animacion 
for(let i = 0; i<8; i++){
    imgLenguaje[i].addEventListener("mouseenter", ()=>{
        imgLenguaje[i].className = "animate__animated animate__bounce";
    })
    imgLenguaje[i].addEventListener("mouseout", ()=>{
        imgLenguaje[i].className = "";
    })
}

//For para que al hacer click en las etiquetas <a> se dirigan a una seccion espicifica de la misma pagina web
for(let i=0; i<array.length; i++){
    array[i][0].addEventListener("click", ()=>{
        window.scrollTo({top:array[i][1], behavior:"smooth"});
    });
}

//Evento para saber si se hizo un scroll, en caso afirmativo se mostrara la barra de menú
addEventListener("scroll", ()=>{
    let scrollY = this.scrollY;
    const limit = [[about, 153], [proyects, 910], [information, 1500], [footer, 1500]];
    nav.style.backgroundColor = "rgba(6,6,6, 0.9)";

    //If para que aparesca la barra del menú cuando el usuario esta al principio de la pagina.
    if(scrollY == 0){
        nav.style.backgroundColor = "rgba(6,6,6, 0)"

    //Esta seccion es para el efecto de aparecer las secciones de la pagina(home, about,skills, etc) cuando se esta en una posicion determinada
    }
    for(let i=0; i<limit.length; i++){
        if(scrollY >= limit[i][1]){
            limit[i][0].style.opacity = "1";
        }
    }
    //Esta seccion es para cambiar de color las opciones(<a>) del menú cuando se esta en una seccion de la pagina(home, about, skills,etc) 
    if(scrollY >= 0 && scrollY < 550){
        aHome.style.color = "#13d3ec";
    }else{
        aHome.style.color = "white";
    }
    for(let i=1; i<array.length; i++){
        if(scrollY >= array[i-1][2] && scrollY < array[i][2]){
            array[i][0].style.color = "#13d3ec";
        }else{
            array[i][0].style.color = "white";
        }    
    }
})

//
textContact.addEventListener("click", ()=>{
    window.location = "form.html";
});