const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");

            // Se quiser animar apenas uma vez:
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
});

//HEADER QUE SOBE
let ultimaRolagem = 0;
const header = document.getElementById('mheader');

window.addEventListener('scroll', () => {
    const rolagemAtual = window.pageYOffset || document.documentElement.scrollTop;

    if (rolagemAtual <= 0) {
        header.classList.remove('header-oculto');
        ultimaRolagem = 0;
        return;
    }

    if (rolagemAtual > ultimaRolagem) {
        header.classList.add('header-oculto');
    }
    else {
        header.classList.remove('header-oculto');
    }
    ultimaRolagem = rolagemAtual <= 0 ? 0 : rolagemAtual;
});