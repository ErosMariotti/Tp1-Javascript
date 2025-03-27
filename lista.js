document.addEventListener("DOMContentLoaded", loadUsers);

function loadUsers() {
    const url = "http://181.111.166.250:8081/tp/lista.php?action=BUSCAR";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            populateTable(data);
        })
        .catch(error => {
            console.error("Error al cargar usuarios:", error);
        });
}

function populateTable(users) {
    const tableBody = document.querySelector("#userTable");
    tableBody.innerHTML = ""; // Limpiar tabla

    if (users.length === 0) {
        document.getElementById("noResultsMessage").style.display = "block";
        return;
    }

    document.getElementById("noResultsMessage").style.display = "none";

    users.forEach(user => {
        const row = document.createElement("tr");

        // Aplicar estilo según si el usuario está bloqueado
        const rowClass = user.bloqueado === "Y" ? "bg-[#fd9f8b]" : "bg-[#cef8c6]";

        row.className = rowClass;

        // Agregar celdas con los datos del usuario
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">${user.id}</td>
            <td class="px-6 py-4 whitespace-nowrap">${user.usuario}</td>
            <td class="px-6 py-4 whitespace-nowrap">${user.bloqueado}</td>
            <td class="px-6 py-4 whitespace-nowrap">${user.apellido}</td>
            <td class="px-6 py-4 whitespace-nowrap">${user.nombre}</td>
            <td class="px-6 py-4 whitespace-nowrap">
                <button onclick="toggleBlock('${user.id}', 'Y')" class="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    Bloquear
                </button>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <button onclick="toggleBlock('${user.id}', 'N')" class="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Desbloquear
                </button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

function searchUser() {
    const query = document.getElementById("searchInput").value;
    const url = `http://181.111.166.250:8081/tp/lista.php?action=BUSCAR&usuario=${query}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            populateTable(data);
        })
        .catch(error => {
            console.error("Error en la búsqueda:", error);
        });
}

function toggleBlock(userId, estado) {
    const url = `http://181.111.166.250:8081/tp/lista.php?action=BLOQUEAR&idUser=${userId}&estado=${estado}`;

    fetch(url)
        .then(response => response.json())
        .then(() => {
            loadUsers(); // Recargar la tabla después de bloquear/desbloquear
        })
        .catch(error => {
            console.error("Error al bloquear/desbloquear:", error);
        });
}