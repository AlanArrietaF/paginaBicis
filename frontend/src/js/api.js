const API_URL = 'http://localhost:3000/api';

async function cargarConductores() {
    try {
        const res = await fetch(`${API_URL}/info`);
        const datos = await res.json();
        
        const container = document.getElementById('data-container');
        if (!container) return;
        
        container.innerHTML = '';
        datos.forEach(c => {
            container.innerHTML += `
                <div class="conductor-card">
                    <p style="font-size: 0.8rem; font-weight: bold;">CONDUCTOR</p>
                    <h3 style="font-size: 1.5rem; font-weight: 900;">${c.nombre}</h3>
                    <p>Sede: ${c.sede}</p>
                    <p>Ranking: <strong>${c.ranking} ★</strong></p>
                    <p class="resena">"${c.resenas}"</p>
                </div>
            `;
        });
    } catch (e) {
        console.error("Error cargando conductores:", e);
    }
}

async function cargarHistorial() {
    try {
        const res = await fetch(`${API_URL}/mantenimiento`);
        const datos = await res.json();
        
        const container = document.getElementById('historial-container');
        if (!container) return;

        container.innerHTML = '';
        datos.forEach(m => {
            container.innerHTML += `
                <div class="mantenimiento-card">
                    <h3>PLACA: ${m.placa_vehiculo}</h3>
                    <p><strong>Fecha:</strong> ${new Date(m.fecha_mantenimiento).toLocaleDateString()}</p>
                    <p><strong>Piezas:</strong> ${m.piezas_cambiadas}</p>
                </div>
            `;
        });
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
