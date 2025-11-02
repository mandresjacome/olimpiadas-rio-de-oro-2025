/**
 * 🧹 LIMPIADOR DE EVENTOS DUPLICADOS
 * ===================================
 * Este script elimina eventos duplicados en la base de datos
 * conservando solo una instancia de cada evento por categoría.
 */

function limpiarEventosDuplicados() {
    const db = new SwimmingDatabase();
    
    console.log('🧹 Iniciando limpieza de eventos duplicados...\n');
    
    const eventos = db.getEvents();
    const eventosTotales = eventos.length;
    
    console.log(`📊 Total de eventos en base de datos: ${eventosTotales}`);
    
    // Mapa para rastrear eventos únicos: "nombre|categoriaId" -> evento
    const eventosUnicos = new Map();
    const eventosAEliminar = [];
    
    eventos.forEach(evento => {
        const clave = `${evento.event_name}|${evento.category_id}`;
        
        if (!eventosUnicos.has(clave)) {
            // Primera vez que vemos este evento en esta categoría
            eventosUnicos.set(clave, evento);
        } else {
            // Es un duplicado - marcar para eliminar
            eventosAEliminar.push(evento);
        }
    });
    
    console.log(`✅ Eventos únicos encontrados: ${eventosUnicos.size}`);
    console.log(`🗑️ Eventos duplicados a eliminar: ${eventosAEliminar.length}\n`);
    
    if (eventosAEliminar.length === 0) {
        console.log('✨ No hay eventos duplicados. Base de datos limpia.');
        alert('✅ No hay eventos duplicados.\nBase de datos limpia.');
        return;
    }
    
    // Confirmar antes de eliminar
    const confirmar = confirm(
        `⚠️ LIMPIEZA DE DUPLICADOS\n\n` +
        `Se encontraron ${eventosAEliminar.length} eventos duplicados.\n\n` +
        `Eventos totales: ${eventosTotales}\n` +
        `Eventos únicos: ${eventosUnicos.size}\n` +
        `Duplicados: ${eventosAEliminar.length}\n\n` +
        `¿Deseas eliminar los duplicados?\n` +
        `(Esto NO afectará las inscripciones del primer evento de cada categoría)`
    );
    
    if (!confirmar) {
        console.log('❌ Limpieza cancelada por el usuario');
        return;
    }
    
    // Eliminar duplicados
    let eliminados = 0;
    eventosAEliminar.forEach(evento => {
        console.log(`  🗑️ Eliminando: ${evento.event_name} (${evento.event_id}) - Categoría ${evento.category_id}`);
        db.deleteEvent(evento.event_id);
        eliminados++;
    });
    
    console.log(`\n✅ Limpieza completada: ${eliminados} eventos duplicados eliminados`);
    console.log(`📊 Eventos restantes: ${db.getEvents().length}\n`);
    
    alert(
        `✅ LIMPIEZA COMPLETADA\n\n` +
        `Eventos duplicados eliminados: ${eliminados}\n` +
        `Eventos únicos conservados: ${eventosUnicos.size}\n\n` +
        `Recarga la página para ver los cambios.`
    );
    
    // Recargar la página
    if (typeof loadAllData === 'function') {
        setTimeout(() => {
            loadAllData();
        }, 500);
    }
}

console.log('🧹 Limpiador de duplicados cargado');
console.log('   Usa: limpiarEventosDuplicados()');
