// app.js

/**
 * Función que genera el HTML de la tarjeta expandible
 */
function cardOnly(integrante) {
    const activeClass = integrante.destacado ? "card-active" : "";
    
    return `
        <div class="col-md-3">
            <div class="card-custom ${activeClass}" onclick="toggleExpand(this)">
                <div class="card-header-name">${integrante.nombre}</div>
                
                <div class="extra-content">
                    <img src="${integrante.foto}" alt="${integrante.nombre}" class="profile-img shadow">
                    <p class="card-body-text">
                        ${integrante.descripcion}
                    </p>
                </div>
                
                <div class="mt-auto text-end">
                    <small class="fw-bold">Ver perfil</small>
                </div>
            </div>
        </div>
    `;
}

// Lógica para alternar la expansión
window.toggleExpand = function(element) {
    // Cierra otras tarjetas abiertas si se desea
    document.querySelectorAll('.card-expanded').forEach(card => {
        if (card !== element) card.classList.remove('card-expanded');
    });
    
    element.classList.toggle('card-expanded');
}

// Datos del equipo
const equipo = [
    { 
        nombre: "Leisy", 
        descripcion: "Especialista en desarrollo frontend con enfoque en diseño centrado en el usuario y metodologías ágiles.", 
        foto: "//..//assets/img/leisy.jpg",
        destacado: false 
    },
   { 
        nombre: "Mario", 
        descripcion: "Desarrollador Backend con Java y Spring Boot. Apasionado por la optimización de procesos y arquitecturas limpias.", 
        foto: "../../assets/img/fotomario.jpg",
        destacado: true 
    },
    { 
        nombre: "Quiryat", 
        descripcion: "Fullstack Developer con experiencia en integración de bases de datos y creación de componentes dinámicos.", 
        foto: "https://via.placeholder.com/150",
        destacado: false 
    },
    { 
        nombre: "Integrante 4", 
        descripcion: "Colaborador clave en el aseguramiento de calidad y despliegue continuo de aplicaciones empresariales.", 
        foto: "https://via.placeholder.com/150",
        destacado: false 
    }
];

// Inyección inicial
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById("cards-container");
    if (container) {
        container.innerHTML = equipo.map(integrante => cardOnly(integrante)).join('');
    }
});