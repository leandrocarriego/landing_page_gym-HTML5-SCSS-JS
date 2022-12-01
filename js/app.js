const beneficios = document.getElementById('beneficios');
const infoLugar = document.getElementById('infoLugar');
const infoDueno = document.getElementById('infoDueno');
const final = document.getElementById('final');

const cargarImg = (entradas, observador) => {
    entradas.forEach(entrada => {
        if(entrada.isIntersecting) {
            entrada.target.classList.add('visible');
        }
    });
}

const observador = new IntersectionObserver(cargarImg, {
    root: null,
    rootMargin: '0px',
    threshold: .7
})

observador.observe(beneficios);
observador.observe(infoLugar);
observador.observe(infoDueno);
observador.observe(final);
