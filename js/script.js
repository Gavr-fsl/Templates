
let width = 570; // ширина картинки
let count = 1; // видимое количество изображений


let list = document.querySelector('#slider');
let listElems = document.querySelectorAll('.slider__block');
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');

let position = 0; 
let current = 0;

prev.addEventListener('click', () => {
    // сдвиг влево
    if (current >= 1) {
        position += width * count;
        position = Math.min(position, 0)
        list.style.marginLeft = position + 'px';
        current--;
    }
   
});

next.addEventListener('click', () => {
    // сдвиг вправо
    if (current < listElems.length - 2) {
        position -= width * count;
        position = Math.max(position, -width * (listElems.length - count));
        list.style.marginLeft = position + 'px';
        current++;
    }
});