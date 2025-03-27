function handleLogin() {
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    const url = `http://181.111.166.250:8081/tp/login.php?user=${user}&pass=${pass}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.respuesta === "OK") {
                // Redirigir a lista.html si el login es exitoso
                window.location.href = "lista.html";
            } else {
                // Mostrar mensaje de error
                document.getElementById('message').textContent = data.mje;
            }
        })
        .catch(error => {
            console.error("Error en la solicitud:", error);
            document.getElementById('message').textContent = "Ocurrió un error al intentar iniciar sesión.";
        });
}