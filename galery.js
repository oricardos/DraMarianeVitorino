let images = document.querySelectorAll('.small_img');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let btnClose = document.querySelector('#btn_close');
let srcVal = "";
let body = document.querySelector('body');

images.forEach(image => {
    image.addEventListener('click', function() {
        srcVal = image.getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
        body.classList.add('overflow');
    });
});

btnClose.addEventListener('click', function(){
    modal.classList.remove('modal_active');
    body.classList.remove('overflow');
})
