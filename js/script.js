let menu = document.querySelector('#menu');
let nav = document.querySelector('#nav');

menu.addEventListener('click', function() {
    if (nav.classList.contains('shown')) {
        nav.classList.remove('shown');
    } else {
        nav.classList.add('shown'); 
    }
});
