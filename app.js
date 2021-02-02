//Movement Animation to happen 
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneakers img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");


const card1 = document.querySelector(".card1");
const container1 = document.querySelector(".container1");
//items
const title1 = document.querySelector(".title1");
const sneaker1 = document.querySelector(".sneakers1 img");
const purchase1 = document.querySelector(".purchase1 button");
const description1 = document.querySelector(".info1 h3");
const sizes1 = document.querySelector(".sizes1");




const card2 = document.querySelector(".card2");
const container2 = document.querySelector(".container2");
//items
const title2 = document.querySelector(".title2");
const sneaker2 = document.querySelector(".sneakers2 img");
const purchase2 = document.querySelector(".purchase2 button");
const description2 = document.querySelector(".info2 h3");
const sizes2 = document.querySelector(".sizes2");



const navbar = document.querySelector(".navbar");
const navbar__container = document.querySelector(".navbar__container");
const logo = document.querySelector(".logo");
const navbar__menu = document.querySelector(".navbar__menu");
const navbar__item = document.querySelector(".navbar__item");
const navbar__links = document.querySelector(".navbar__links");
const navbar__btn = document.querySelector(".navbar__btn");
const button = document.querySelector(".button");




navbar.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 150;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 30;

    navbar.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


navbar__container.addEventListener("mouseenter", (e) => {
    navbar.style.transform = 'none';
    //Popout
    logo.style.transform = "translateZ(20px)";
    navbar__menu.style.transform = "translateZ(20px)";
    navbar__item.style.transform = "translateZ(20px)";
    navbar__btn.style.transform = "translateZ(20px)";
    button.style.transform = "translateZ(20px)";
});

navbar__container.addEventListener("mouseleave", (e) => {
    navbar.style.transition = "all 0.5s ease";
    navbar.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    logo.style.transform = "translateZ(0px)";
    navbar__menu.style.transform = "translateZ(0px)";
    navbar__item.style.transform = "translateZ(0px)";
    navbar__btn.style.transform = "translateZ(0px)";
    button.style.transform = "translateZ(0px)";
    
});



//Moving Animation Event 
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


container1.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;

    card1.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container2.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;

    card2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


//Animate In 
container.addEventListener("mouseenter", (e) => {
    card.style.transform = 'none';
    //Popout
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(45deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
});

//Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});


//Animate In 
container1.addEventListener("mouseenter", (e) => {
    card1.style.transform = 'none';
    //Popout
    title1.style.transform = "translateZ(150px)";
    sneaker1.style.transform = "translateZ(200px) rotateZ(45deg)";
    description1.style.transform = "translateZ(125px)";
    sizes1.style.transform = "translateZ(100px)";
    purchase1.style.transform = "translateZ(75px)";
});

//Animate Out
container1.addEventListener("mouseleave", (e) => {
    card1.style.transition = "all 0.5s ease";
    card1.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title1.style.transform = "translateZ(0px)";
    sneaker1.style.transform = "translateZ(0px) rotateZ(0deg)";
    description1.style.transform = "translateZ(0px)";
    sizes1.style.transform = "translateZ(0px)";
    purchase1.style.transform = "translateZ(0px)";
});



container2.addEventListener("mouseenter", (e) => {
    card2.style.transform = 'none';
    //Popout
    title2.style.transform = "translateZ(150px)";
    sneaker2.style.transform = "translateZ(200px) rotateZ(45deg)";
    description2.style.transform = "translateZ(125px)";
    sizes2.style.transform = "translateZ(100px)";
    purchase2.style.transform = "translateZ(75px)";
});

//Animate Out
container2.addEventListener("mouseleave", (e) => {
    card2.style.transition = "all 0.5s ease";
    card2.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title2.style.transform = "translateZ(0px)";
    sneaker2.style.transform = "translateZ(0px) rotateZ(0deg)";
    description2.style.transform = "translateZ(0px)";
    sizes2.style.transform = "translateZ(0px)";
    purchase2.style.transform = "translateZ(0px)";
});
