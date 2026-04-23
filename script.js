// 1. Seleccionamos TODOS los elementos necesarios
const redBtn = document.querySelector('.red-btn');
const grayBtn = document.querySelector('.gray-btn'); // Añadimos esta línea
const cartButton = document.getElementById('cartButton');
const imageCard = document.querySelector('.image-card');


redBtn.addEventListener('click', function() {
    cartButton.style.backgroundColor = 'red';
    
    imageCard.style.backgroundImage = "url('https://tse4.mm.bing.net/th/id/OIP.vwvS8dnH8uQtBTeEKdy7EwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3')"; 
});


grayBtn.addEventListener('click', function() {
    cartButton.style.backgroundColor = '#333'; // Volvemos al color oscuro o gris
    
    imageCard.style.backgroundImage = "url('https://tse1.mm.bing.net/th/id/OIP.wbbApNlqnyF_ZD1bSkHPNgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3')"; 
});