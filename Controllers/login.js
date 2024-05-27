let users = [];


fetch('../Models/ServidorTP.json')
    .then(response => response.json())
    .then(data => {
        users = data.usuario;
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });

function login() {
    const username = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const user = users.find(user => user.usuario_login === username && user.usuario_pass === password);

    if (user) {
        errorMessage.style.color = 'green';
        errorMessage.textContent = 'Iniciando sesión...';
        setTimeout(() => {
            window.location.href = '../Views/menu.html';
        }, 3000);
    } else {
        errorMessage.textContent = 'Usuario o contraseña incorrectos';
    }
}
