const API_URL = 'http://localhost:3000/api';

async function cargarConductores() {
    try {
        const res = await fetch(`${API_URL}/info`);
        const datos = await res.json();

        const container = document.getElementById('data-container');
	const selectElement = document.getElementById('select-conductor');
        if (!container) return;

        container.innerHTML = '';
	if (selectElement) selectElement.innerHTML = '<option vlaue="">Elige a tu conductor </option>'; 
        
        // Validación: Solo recorre si 'datos' es una lista
        if (Array.isArray(datos)) {
            datos.forEach(c => {
                container.innerHTML += `
                    <div class="conductor-card">
                        <p style="font-size: 0.8rem; font-weight: bold;">CONDUCTOR</p>
                        <h3 style="font-size: 1.5rem; font-weight: 900;">${c.nombre}</h3>
                        <p>Sede: ${c.sede}</p>
                        <p>Unidad: <strong>${c.placa}</strong></p>
                        <p>Ranking: <strong>${c.ranking} ★</strong></p>
                        <p class="resena">"${c.resenas}"</p>
                    </div>
                `;
	if (selectElement){
		selectElement.innerHTML += `<option value="${c.nombre}">${c.nombre} (Unidad: ${c.placa})</option>`;
	 }
            });
        }
    } catch (e) {
        console.error("Error cargando conductores:", e);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    // ... lo que ya tenías para cargar las páginas ...
    const path = window.location.pathname;
    if (path.includes('conductores.html')) {
        cargarConductores();
    } else if (path.includes('historial.html')) {
        cargarHistorial();
    }

    // Funcionalidad del formulario
    const formResena = document.getElementById('form-resena');
    if (formResena) {
        formResena.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página recargue
            
            const conductor = document.getElementById('select-conductor').value;
            const comentario = document.getElementById('texto-resena').value;
            const mensajeDiv = document.getElementById('mensaje-exito');

            // Simula guardarlo mostrando el texto en pantalla
            mensajeDiv.style.display = 'block';
            mensajeDiv.innerHTML = `
                <h4 style="color: var(--green-figma); margin-bottom: 5px;">¡Gracias por tu feedback!</h4>
                <p>Tu comentario para <strong>${conductor}</strong> se mostrará pronto:</p>
                <p style="font-style: italic; margin-top: 10px;">"${comentario}"</p>
            `;
            
            // Limpia el formulario
            formResena.reset();
        });
    }
});

async function cargarHistorial() {
    try {
        const res = await fetch(`${API_URL}/mantenimiento`);
        const datos = await res.json();

        const container = document.getElementById('historial-container');
        if (!container) return;

        container.innerHTML = '';
        
        if (Array.isArray(datos)) {
            datos.forEach(m => {
                container.innerHTML += `
                    <div class="mantenimiento-card">
                        <h3>PLACA: ${m.placa_vehiculo}</h3>
                        <p><strong>Conductor:</strong> ${m.nombre_conductor} </p>
                        <p><strong>Fecha:</strong> ${new Date(m.fecha_mantenimiento).toLocaleDateString()}</p>
                        <p><strong>Piezas:</strong> ${m.piezas_cambiadas}</p>
                    </div>
                `;
            });
        }
    } catch (e) {
        console.error("Error cargando historial:", e);
    }
}

// Inicializador inteligente
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    if (path.includes('conductores.html')) {
        cargarConductores();
    } else if (path.includes('historial.html')) {
        cargarHistorial();
    }
});
