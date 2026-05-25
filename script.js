const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if(menuToggle){
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

/* ==========================================
   REVEAL FIXO
========================================== */

const reveals = document.querySelectorAll('.reveal');

function revealElements(){

  reveals.forEach((el) => {

    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      el.classList.add('visible');
    }

  });

}

window.addEventListener('scroll', revealElements);

revealElements();

/* ==========================================
   PREVIEW DE FOTOS
========================================== */

const inputFoto = document.getElementById('fotoCliente');
const preview = document.getElementById('preview');

if(inputFoto){

  inputFoto.addEventListener('change', (event) => {

    preview.innerHTML = '';

    [...event.target.files].forEach(file => {

      const reader = new FileReader();

      reader.onload = (e) => {

        const img = document.createElement('img');

        img.src = e.target.result;

        preview.appendChild(img);

      };

      reader.readAsDataURL(file);

    });

  });

}