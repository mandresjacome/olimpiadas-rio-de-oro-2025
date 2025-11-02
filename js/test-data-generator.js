/**
 * GENERADOR DE DATOS DE DEMOSTRACIÓN
 * Genera resultados de ejemplo para Olimpiadas Río de Oro 2025
 * Usa algunos de los 96 participantes reales y genera tiempos realistas
 */

function generateTestData() {
    console.log('🎲 Iniciando generación de datos de demostración...');
    console.log('📅 Evento: OLIMPIADAS RÍO DE ORO 2025');
    console.log('📍 Fecha: 2 de Noviembre, 2025');
    
    const stats = {
        participantsUsed: 0,
        entriesAdded: 0,
        resultsAdded: 0,
        eventsWithData: 0
    };

    try {
        // 1. Verificar que existan categorías y eventos
        const categories = db.getCategories();
        const events = db.getEvents();
        const allParticipants = db.getParticipants();

        if (categories.length === 0) {
            alert('⚠️ No hay categorías. Primero ejecuta "CONFIGURAR TODO AUTOMÁTICAMENTE".');
            return;
        }

        if (events.length === 0) {
            alert('⚠️ No hay eventos. Primero ejecuta "CONFIGURAR TODO AUTOMÁTICAMENTE".');
            return;
        }

        if (allParticipants.length === 0) {
            alert('⚠️ No hay participantes. Primero ejecuta "CONFIGURAR TODO AUTOMÁTICAMENTE".');
            return;
        }

        console.log(`📋 Categorías: ${categories.length}`);
        console.log(`🏊 Eventos: ${events.length}`);
        console.log(`👥 Participantes disponibles: ${allParticipants.length}`);

        // 2. Obtener todas las inscripciones existentes
        const entries = db.getEntries();
        
        if (entries.length === 0) {
            alert('⚠️ No hay inscripciones. Primero ejecuta "CONFIGURAR TODO AUTOMÁTICAMENTE".');
            return;
        }

        console.log(`📝 Inscripciones encontradas: ${entries.length}`);

        // 3. Para cada inscripción, generar un resultado
        entries.forEach(entry => {
            const event = db.getEventById(entry.event_id);
            if (!event) return;

            // Generar tiempo realista basado en el nombre del evento
            let timeSeconds;
            const eventName = event.event_name.toLowerCase();
            
            if (eventName.includes('50m libre')) {
                // 50M Libre: 28-45 segundos
                timeSeconds = (Math.random() * 17 + 28).toFixed(2);
            } else if (eventName.includes('50m espalda')) {
                // 50M Espalda: 32-50 segundos
                timeSeconds = (Math.random() * 18 + 32).toFixed(2);
            } else if (eventName.includes('50m pecho')) {
                // 50M Pecho: 35-55 segundos
                timeSeconds = (Math.random() * 20 + 35).toFixed(2);
            } else if (eventName.includes('25m')) {
                // 25M: 15-30 segundos
                timeSeconds = (Math.random() * 15 + 15).toFixed(2);
            } else if (eventName.includes('100m')) {
                // 100M: 60-120 segundos
                timeSeconds = (Math.random() * 60 + 60).toFixed(2);
            } else if (eventName.includes('10m')) {
                // 10M: 8-18 segundos
                timeSeconds = (Math.random() * 10 + 8).toFixed(2);
            } else {
                // Default: 25-50 segundos
                timeSeconds = (Math.random() * 25 + 25).toFixed(2);
            }

            // 97% OK, 2% DNF, 1% DQ (más realista)
            const rand = Math.random();
            let status = 'OK';
            if (rand > 0.99) {
                status = 'DQ'; // 1% descalificados
            } else if (rand > 0.97) {
                status = 'DNF'; // 2% no terminaron
            }

            // Guardar resultado
            try {
                db.saveResult(entry.entry_id, timeSeconds, status);
                stats.resultsAdded++;
            } catch (error) {
                console.warn(`⚠️ Error guardando resultado para ${entry.entry_id}:`, error);
            }
        });

        // 4. Contar eventos únicos con datos
        const eventsWithResults = new Set(entries.map(e => e.event_id));
        stats.eventsWithData = eventsWithResults.size;
        stats.participantsUsed = new Set(entries.map(e => e.participant_id)).size;

        // 5. Mostrar resumen
        let message = `✅ ¡DATOS DE DEMOSTRACIÓN GENERADOS!\n\n`;
        message += `📊 OLIMPIADAS RÍO DE ORO 2025\n`;
        message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        message += `👥 Participantes con resultados: ${stats.participantsUsed}\n`;
        message += `📝 Inscripciones: ${entries.length}\n`;
        message += `⏱️ Tiempos generados: ${stats.resultsAdded}\n`;
        message += `🏊 Eventos con resultados: ${stats.eventsWithData}\n`;
        message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
        message += `🎯 Sistema listo para demostración!\n\n`;
        message += `Ahora puedes:\n`;
        message += `✅ Ver resultados en "Vista Pública"\n`;
        message += `✅ Ver podios por categoría\n`;
        message += `✅ Administrar y editar resultados\n`;
        message += `✅ Exportar datos a Excel\n\n`;
        message += `🏊‍♂️ ¡Buena suerte en la competencia!`;

        alert(message);

        console.log('✅ Generación completada:', stats);
        
        // Recargar para ver los datos
        if (confirm('¿Recargar la página para ver los resultados generados?')) {
            location.reload();
        }

        return stats;

    } catch (error) {
        console.error('❌ Error generando datos:', error);
        alert(`❌ Error al generar datos de demostración:\n${error.message}`);
        return null;
    }
}

/**
 * Limpiar SOLO los resultados (mantiene estructura del evento)
 */
function clearOnlyResults() {
    if (!confirm('⚠️ ¿Borrar solo los RESULTADOS?\n\nEsto mantendrá:\n✅ Categorías\n✅ Eventos\n✅ Participantes\n✅ Inscripciones\n\nPero eliminará:\n❌ Todos los tiempos\n\n¿Continuar?')) {
        return;
    }

    try {
        localStorage.removeItem('results');
        alert('✅ Resultados eliminados.\n\nLa página se recargará.');
        location.reload();
    } catch (error) {
        alert(`❌ Error: ${error.message}`);
    }
}

/**
 * Limpiar TODO (usar con precaución - requiere volver a configurar)
 */
function clearAllData() {
    if (!confirm('⚠️⚠️⚠️ ¡PELIGRO! ⚠️⚠️⚠️\n\nEsto eliminará TODO:\n❌ Categorías\n❌ Eventos\n❌ Participantes\n❌ Inscripciones\n❌ Resultados\n\nDeberás ejecutar "CONFIGURAR TODO AUTOMÁTICAMENTE" de nuevo.\n\n¿Continuar?')) {
        return;
    }

    if (!confirm('⚠️ ÚLTIMA CONFIRMACIÓN\n\n¿REALMENTE quieres borrar TODO y empezar de cero?')) {
        return;
    }

    try {
        localStorage.removeItem('categories');
        localStorage.removeItem('events');
        localStorage.removeItem('participants');
        localStorage.removeItem('entries');
        localStorage.removeItem('results');

        alert('✅ Todos los datos eliminados.\n\nEjecuta "CONFIGURAR TODO AUTOMÁTICAMENTE" para restaurar el evento.');
        location.reload();
    } catch (error) {
        alert(`❌ Error: ${error.message}`);
    }
}

console.log('🎲 Generador de Demostración - Olimpiadas Río de Oro 2025');
console.log('📝 Funciones disponibles:');
console.log('  - generateTestData() → Genera tiempos para todas las inscripciones');
console.log('  - clearOnlyResults() → Borra solo los tiempos (mantiene evento)');
console.log('  - clearAllData() → Borra TODO (requiere reconfigurar)');

