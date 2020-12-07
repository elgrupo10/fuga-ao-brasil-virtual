let BotaoEasterEgg1Em = document.querySelector('#egg1');
let BotaoEasterEgg2Em = document.querySelector('#egg2');
let BotaoEasterEgg3Em = document.querySelector('#egg3');
let BotaoEasterEgg4Em = document.querySelector('#egg4');

let ConteudoModalEm = document.querySelector('.modal-content');
let EasterEggsEncontrados = localStorage.getItem('numEggs') ||0;

/*localStorage.setItem('EasterEgg1', false);
localStorage.setItem('EasterEgg2', false);
localStorage.setItem('EasterEgg3', false);
localStorage.setItem('EasterEgg4', false);*/

if(BotaoEasterEgg1Em!=null){
    BotaoEasterEgg1Em.addEventListener('click', function() {
        let JanelaAlvoEM = document.querySelector('.easter-egg');
        let mascaraEM = document.querySelector('.mask');
        if (localStorage.getItem('EasterEgg1') != 'true') {
            localStorage.setItem('numEggs', +localStorage.getItem('numEggs') + 1);
            localStorage.setItem('EasterEgg1', true);
        }
        let EasterEggsEncontrados = localStorage.getItem('numEggs');
        ConteudoModalEm.innerHTML = '<span>Você encontrou um Easter egg!</span>' + EasterEggsEncontrados + '/4';
        JanelaAlvoEM.classList.add('showing');
        mascaraEM.classList.add('showing');
    });
}

if(BotaoEasterEgg2Em!=null){
    BotaoEasterEgg2Em.addEventListener('click', function() {
        let JanelaAlvoEM = document.querySelector('.easter-egg');
        let mascaraEM = document.querySelector('.mask');
        if (localStorage.getItem('EasterEgg2') != 'true') {
            localStorage.setItem('numEggs', +localStorage.getItem('numEggs') + 1);
            localStorage.setItem('EasterEgg2', true);
        }
        let EasterEggsEncontrados = localStorage.getItem('numEggs');
        ConteudoModalEm.innerHTML = '<span>Você encontrou um Easter egg!</span>' + EasterEggsEncontrados + '/4';
        JanelaAlvoEM.classList.add('showing');
        mascaraEM.classList.add('showing');
    });
}

if(BotaoEasterEgg3Em!=null){
    BotaoEasterEgg3Em.addEventListener('click', function() {
        let JanelaAlvoEM = document.querySelector('.easter-egg');
        let mascaraEM = document.querySelector('.mask');
        if (localStorage.getItem('EasterEgg3') != 'true') {
            localStorage.setItem('numEggs', +localStorage.getItem('numEggs') + 1);
            localStorage.setItem('EasterEgg3', true);
        }
        let EasterEggsEncontrados = localStorage.getItem('numEggs');
        ConteudoModalEm.innerHTML = '<span>Você encontrou um Easter egg!</span>' + EasterEggsEncontrados + '/4';
        JanelaAlvoEM.classList.add('showing');
        mascaraEM.classList.add('showing');
    });
}

if(BotaoEasterEgg4Em!=null){
    BotaoEasterEgg4Em.addEventListener('click', function() {
        let JanelaAlvoEM = document.querySelector('.easter-egg');
        let mascaraEM = document.querySelector('.mask');
        if (localStorage.getItem('EasterEgg4') != 'true') {
            localStorage.setItem('numEggs', +localStorage.getItem('numEggs') + 1);
            localStorage.setItem('EasterEgg4', true);
        }
        let EasterEggsEncontrados = localStorage.getItem('numEggs');
        ConteudoModalEm.innerHTML = '<span>Você encontrou um Easter egg!</span>' + EasterEggsEncontrados + '/4';
        JanelaAlvoEM.classList.add('showing');
        mascaraEM.classList.add('showing');
    });
}

let ClicarMascaraSairEM = document.querySelector('.mask');
ClicarMascaraSairEM.addEventListener('click', function(){
    let JanelaAlvoEM = document.querySelector('.easter-egg');
    let mascaraEM = document.querySelector('.mask');
    JanelaAlvoEM.classList.remove('showing');
    mascaraEM.classList.remove('showing');
})

let ClicarXSairEM = document.querySelector('.button');
ClicarXSairEM.addEventListener('click', function(){
    let JanelaAlvoEM = document.querySelector('.easter-egg');
    let mascaraEM = document.querySelector('.mask');
    JanelaAlvoEM.classList.remove('showing');
    mascaraEM.classList.remove('showing');
})