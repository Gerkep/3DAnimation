const card = document.querySelector('.card')
const container = document.querySelector('.container')
const title = document.querySelector('.title')
const sneaker = document.querySelector('.sneaker img')
const sizes = document.querySelector('.sizes')
const description = document.querySelector('.info h3')
const purchase = document.querySelector('.purchase button')

container.addEventListener('mousemove', (e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`//rotating card
})

container.addEventListener('mouseleave', (e)=>{
card.style.transform = `rotateY(0deg) rotateX(0deg)`
card.style.transition = 'all 0.5s ease';
title.style.transform = "translateZ(0px)"
description.style.transform = "translateZ(0px)"
sneaker.style.transform = "translateZ(0px) rotateZ(0deg)"
sizes.style.transform = "translateZ(0px)"
purchase.style.transform = "translateZ(0px)"
});


container.addEventListener('mouseenter', (e)=>{
    card.style.transition = 'none';
    title.style.transform = "translateZ(150px)"
    description.style.transform = "translateZ(150px)"
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)"
    sizes.style.transform = "translateZ(100px)"
    purchase.style.transform = "translateZ(75px)"
});