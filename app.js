document.addEventListener('DOMContentLoaded', () => {
    const botonExplorar = document.querySelector('.boton-principal');
    const enlacesMenu = document.querySelectorAll('.menu a');
    const anio = document.querySelector('#anio');

    if (botonExplorar) {
        botonExplorar.addEventListener('click', () => {
            window.alert('Bienvenido al archivo vivo del rock latino. ¡Disfruta la música!');
        });
    }

    if (anio) {
        anio.textContent = new Date().getFullYear();
    }

    enlacesMenu.forEach((enlace) => {
        enlace.addEventListener('click', () => {
            const seccion = document.querySelector(enlace.getAttribute('href'));

            if (!seccion) {
                return;
            }

            seccion.classList.add('seccion-activa');
            window.setTimeout(() => {
                seccion.classList.remove('seccion-activa');
            }, 1200);
        });
    });
});
