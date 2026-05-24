const nav = document.querySelector('.nav');
document.querySelector('.menu-toggle').addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Mensagem registrada! Na próxima etapa podemos conectar este formulário ao WhatsApp, e-mail ou banco de dados.');
    form.reset();
  });
});

const input = document.querySelector('#fotoCliente');
const preview = document.querySelector('#preview');
input.addEventListener('change', () => {
  preview.innerHTML = '';
  [...input.files].forEach(file => {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    img.onload = () => URL.revokeObjectURL(img.src);
    preview.appendChild(img);
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: .14 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
