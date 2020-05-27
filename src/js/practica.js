
const boton = document.getElementsByClassName('boton')[0];
console.log(boton);

boton.addEventListener('click', () => {
    console.log('Hola desde aquí');
    boton.style.background = 'red';
    boton.style.width = '100px';
});

const divGato = document.getElementById('gif');

divGato.addEventListener('click', () => {
    console.log('click al gato');
});
