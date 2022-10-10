const nav = document.querySelector(".menu-bar");
const img = document.querySelectorAll(".img");
const about = document.querySelector(".about-me");
const skills = document.querySelector(".skills");
const proyects =  document.querySelector(".proyects");
const information = document.querySelector(".information");
const footer = document.querySelector(".footer");
const aHome = document.querySelector(".a-home");
const aAbout = document.querySelector(".a-about");
const aProyects = document.querySelector(".a-proyects");
const aInformation = document.querySelector(".a-information");
const textContact = document.querySelector(".text-contact"); 
const array = [[aHome, 0, 550], [aAbout, 610, 1100], [aProyects, 1220, 1800], [aInformation, 2000, 2000]];

//For para cuando el mause ingrese en las imagenes(lengProgramacion) se agrege una clase que permite ejecutar una animacion 
for(let i = 0; i<7; i++){
    img[i].addEventListener("mouseenter", ()=>{
        img[i].className = "animate__animated animate__bounce";
    })
    img[i].addEventListener("mouseout", ()=>{
        img[i].className = "img";
    })
}

//For para que al hacer click en las etiquetas <a> se dirigan a una seccion espicifica de la misma pagina web
for(let i=0; i<array.length; i++){
    array[i][0].addEventListener("click", ()=>{
        window.scrollTo({top:array[i][1], behavior:"smooth"});
    });
}

//Evento para saber si se hizo un scroll, en caso afirmativo se mostrara la barra de menú
// function 

addEventListener("scroll", ()=>{
    let scrollY = this.scrollY;
    const limit = [[about, 153], [skills, 488], [proyects, 910], [information, 1500], [footer, 1500]];
    nav.style.backgroundColor = "rgba(6,6,6, 0.9)";

    /////////////////////////////////////////////
    //Esta seccion es para el efecto de aparecer las secciones de la pagina(home, about,skills, etc) cuando se esta en una posicion determinada
    if(scrollY == 0){
        nav.style.backgroundColor = "rgba(6,6,6, 0)"
    }
    for(let i=0; i<limit.length; i++){
        if(scrollY >= limit[i][1]){
            limit[i][0].style.opacity = "1";
        }
    }
    /////////////////////////////////////////////
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
    /////////////////////////////////////////////
})

//
textContact.addEventListener("click", ()=>{
    window.location = "form.html";
})

//Esta seccion es para modificar el slide(el contenedor donde se deslizan las imagenes)
var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        580: {
            slidesPerView: 2,
        },
        780: {
            slidesPerView: 3,
        },
        1020: {
            slidesPerView: 4,
        }
    }
  });