const SendBtn = document.getElementById('send');

SendBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if(name === '' || email === '' || message === '') {
        alert('Por favor, rellene todos los campos');
        return;
    }
    window.location.href=`mailto:mariasalomeloorvelez@gmail.com?
    subject=Nombre%20%3A${name}&body=%0ACorreo%3A${email}%0AMensaje%3A${message}`;
});
