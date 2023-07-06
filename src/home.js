const firstGen = document.getElementById('firstGen');
const secondGen = document.getElementById('secondGen');
const thirdGen = document.getElementById('terceraGen');
const fourthGen = document.getElementById('cuartaGen');
const fiveGen = document.getElementById('fiveGen');
const sixGen = document.getElementById('sextaGen');
const septGen = document.getElementById('septimaGen');
const octavaGen = document.getElementById('octavaGen');
const novenaGen = document.getElementById('novenaGen');

firstGen.addEventListener('click', () => {
    window.location.href = '../pages/primeraGen.html'
})

secondGen.addEventListener('click', () => {
    window.location.href = '../pages/segundaGen.html'
})

thirdGen.addEventListener('click', () => {
    window.location.href = '../pages/terceraGen.html'
})

fourthGen.addEventListener('click', () => {
    window.location.href = '../pages/cuartaGen.html'
})

fiveGen.addEventListener('click', () => {
    window.location.href = '../pages/quintaGen.html'
})

sixGen.addEventListener('click', () => {
    window.location.href = '../pages/sextaGen.html'
})

septGen.addEventListener('click', () => {
    window.location.href = '../pages/septimaGen.html'
})

octavaGen.addEventListener('click', () => {
    window.location.href = '../pages/octavaGen.html'
})

novenaGen.addEventListener('click', () => {
    window.location.href = '../pages/novenaGen.html'
})

const audio = document.querySelector('audio');
const nonAudio = document.querySelector('#no-audio');
const iconAudio = document.querySelector('.audio')
audio.play();

const controlAudio = document.querySelector('i');

controlAudio.addEventListener('click', () => {
    audio.pause();
    iconAudio.style.display = 'none'
    nonAudio.style.display = 'block'

})

nonAudio.addEventListener('click', () => {
    audio.play();
    iconAudio.style.display = 'block';
    nonAudio.style.display = 'none';
})
