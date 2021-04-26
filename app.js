const mainImg = document.querySelector('.main-img');
const secImgs = [...document.querySelectorAll('.sec-img')];

secImgs.forEach((img, index) =>{
    img.addEventListener('mouseover', ()=>{
        mainImg.src = `./img/sec-img-${index}.jpg`;
        //console.log(`./img/sec-img-${index}`);
    });
    img.addEventListener('mouseleave', ()=>{
        mainImg.src = `./img/main-product.jpg`;
    });
});