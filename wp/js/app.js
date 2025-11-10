document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        console.log("Formulário WP Builders enviado!");
        
        formMessage.textContent = 'Mensagem enviada! A WP Builders entrará em contato para agendar seu orçamento.';
        
        setTimeout(() => {
            contactForm.reset();
            formMessage.textContent = '';
        }, 4000);
    });

    console.log("JavaScript de interação carregado.");
});