window.addEventListener('load', () => {

    h1 = document.querySelector('h1');

    h1.addEventListener('click', () => {
        h1.style.backgroundColor = 'red';
    })

    pic = document.querySelector('img');
    pic.src = './bg1.png';

})