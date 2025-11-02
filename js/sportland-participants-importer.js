/**
 * IMPORTADOR DE INSCRITOS OFICIALES
 * Olimpiadas Río de Oro 2025 - Club Deportivo SPORTLAND
 * 
 * Este script importa automáticamente todos los participantes inscritos
 * y los registra en TODAS las pruebas de su categoría correspondiente.
 * 
 * Los carriles y heats se asignarán manualmente el día del evento.
 */

const SPORTLAND_INSCRITOS_2025 = [
    { nombre: "Alanna Ramirez Toloza", club: "SPOR", edad: 3, genero: "F", categoria: "BEBES" },
    { nombre: "Alejandro Vargas", club: "SPOR", edad: 6, genero: "M", categoria: "BEBES" },
    { nombre: "Cielo de María Elena Castellanos Pacheco", club: "SPOR", edad: 5, genero: "F", categoria: "BEBES" },
    { nombre: "David Arturo Palacio Lizarazo", club: "SPOR", edad: 5, genero: "M", categoria: "BEBES" },
    { nombre: "David Santiago Cala Jaimes", club: "SPOR", edad: 5, genero: "M", categoria: "BEBES" },
    { nombre: "Dylan Alejandro Villamizar Santana", club: "SPOR", edad: 6, genero: "M", categoria: "BEBES" },
    { nombre: "Gender Alexander López Rodríguez", club: "SPOR", edad: 5, genero: "M", categoria: "BEBES" },
    { nombre: "Isabella Carvajal Villanizar", club: "SPOR", edad: 6, genero: "F", categoria: "BEBES" },
    { nombre: "Jeylen Salome Ojeda Martínez", club: "SPOR", edad: 6, genero: "F", categoria: "BEBES" },
    { nombre: "Joaquin Antonio Cuesta Cacua", club: "SPOR", edad: 4, genero: "M", categoria: "BEBES" },
    { nombre: "Luciana Aguilar García", club: "SPOR", edad: 5, genero: "F", categoria: "BEBES" },
    { nombre: "Luciana Hernández Yassin", club: "SPOR", edad: 7, genero: "F", categoria: "BEBES" },
    { nombre: "Maria Camila Rojas", club: "SPOR", edad: 6, genero: "F", categoria: "BEBES" },
    { nombre: "Tomas Zapata Vargas", club: "SPOR", edad: 3, genero: "M", categoria: "BEBES" },
    // INFANTIL A (10-11)
    { nombre: "Ana Maria Calderon", club: "FOCA", edad: 10, genero: "F", categoria: "INFANTIL A" },
    { nombre: "Breyner Alexander Ojeda Martínez", club: "SPOR", edad: 10, genero: "M", categoria: "INFANTIL A" },
    { nombre: "Dominic Samuel Esparza Martinez", club: "SPOR", edad: 10, genero: "M", categoria: "INFANTIL A" },
    { nombre: "Emma Díaz Cativiela", club: "SPOR", edad: 10, genero: "F", categoria: "INFANTIL A" },
    { nombre: "Fabio Antonio Rojas Chaparro", club: "SPOR", edad: 10, genero: "M", categoria: "INFANTIL A" },
    { nombre: "Paula Valeria Zambrano", club: "FOCA", edad: 10, genero: "F", categoria: "INFANTIL A" },
    { nombre: "Saday Gabriela Lamus Carrillo", club: "SPOR", edad: 11, genero: "F", categoria: "INFANTIL A" },
    { nombre: "Sara Daniela Brochero Duarte", club: "SPOR", edad: 11, genero: "F", categoria: "INFANTIL A" },
    { nombre: "Sara Isabella Hernandez Barrera", club: "SPOR", edad: 11, genero: "F", categoria: "INFANTIL A" },
    { nombre: "Valentin Aparicio Caballero", club: "SPOR", edad: 10, genero: "M", categoria: "INFANTIL A" },
    { nombre: "Violeta Carrillo Ortiz", club: "FOCA", edad: 11, genero: "F", categoria: "INFANTIL A" },
    { nombre: "Ismael Polania Duran", club: "SKAL", edad: 11, genero: "M", categoria: "INFANTIL A" },
    // INFANTIL B (12-13)
    { nombre: "Alejandro Hoyos Garcia", club: "FOCA", edad: 12, genero: "M", categoria: "INFANTIL B" },
    { nombre: "Angel Daniel Soto Suarez", club: "SPOR", edad: 12, genero: "M", categoria: "INFANTIL B" },
    { nombre: "Erick Steven González Castellanos", club: "SPOR", edad: 12, genero: "M", categoria: "INFANTIL B" },
    { nombre: "Harold Andres Moreno Diaz", club: "SPOR", edad: 12, genero: "M", categoria: "INFANTIL B" },
    { nombre: "Karol Gisell Sequeda", club: "FOCA", edad: 12, genero: "F", categoria: "INFANTIL B" },
    { nombre: "Liam Marcus Flores", club: "SKALAR", edad: 12, genero: "M", categoria: "INFANTIL B" },
    { nombre: "Samuel Gallo Forero", club: "FOCA", edad: 13, genero: "M", categoria: "INFANTIL B" },
    { nombre: "Sara Michell Bonilla Mendoza", club: "SPOR", edad: 13, genero: "F", categoria: "INFANTIL B" },
    { nombre: "Sharith Ayslin Rincón Navarro", club: "SPOR", edad: 12, genero: "F", categoria: "INFANTIL B" },
    // JUVENIL A (14-15)
    { nombre: "David Santiago Gonzalez Garcia", club: "SPOR", edad: 14, genero: "M", categoria: "JUVENIL A" },
    { nombre: "Thomas Flores Ariza", club: "SPOR", edad: 14, genero: "M", categoria: "JUVENIL A" },
    { nombre: "Martín Díaz Cativiela", club: "SPOR", edad: 14, genero: "M", categoria: "JUVENIL A" },
    
    // JUVENIL B (16-17)
    { nombre: "Karol González Castellanos", club: "SPOR", edad: 16, genero: "F", categoria: "JUVENIL B" },
    { nombre: "Mariam Camila Pimiento", club: "SKALAR", edad: 16, genero: "F", categoria: "JUVENIL B" },
    { nombre: "Nicolle Valeria Caballero", club: "SPOR", edad: 16, genero: "F", categoria: "JUVENIL B" },
    { nombre: "Nicolas Florez Ariza", club: "SPOR", edad: 16, genero: "M", categoria: "JUVENIL B" },
    { nombre: "Jesus Manuel Quintero Caceres", club: "ORCA", edad: 16, genero: "M", categoria: "JUVENIL B" },
    { nombre: "Zare Sofia Lamus Carrillo", club: "SPOR", edad: 17, genero: "F", categoria: "JUVENIL B" },
    { nombre: "Johan Mauricio Badillo Rodríguez", club: "SPOR", edad: 17, genero: "M", categoria: "JUVENIL B" },
    { nombre: "Nicolás Pardo Ochoa", club: "", edad: null, genero: "", categoria: "JUVENIL B" },
    // MASTER (30+)
    { nombre: "Ingrid Catalina Querales Palacios", club: "SPOR", edad: 38, genero: "F", categoria: "MASTER" },
    { nombre: "Camilo Ernesto Blanco Sandoval", club: "SPOR", edad: 30, genero: "M", categoria: "MASTER" },
    { nombre: "Johanna Sierra Blanco", club: "SPOR", edad: 42, genero: "F", categoria: "MASTER" },
    { nombre: "Daniel Corredor Díaz", club: "INDEP", edad: 37, genero: "M", categoria: "MASTER" },
    { nombre: "Juan Carlos Cubillos", club: "SKALAR", edad: 50, genero: "M", categoria: "MASTER" },
    { nombre: "Karen Yesenia Caballero Martínez", club: "SPOR", edad: 35, genero: "F", categoria: "MASTER" },
    { nombre: "Leonardo Arenas Calderon", club: "SPOR", edad: 47, genero: "M", categoria: "MASTER" },
    { nombre: "Luis Francisco Pardo", club: "SPOR", edad: 38, genero: "M", categoria: "MASTER" },
    { nombre: "Luis Horacio Pardo", club: "ORCA", edad: 44, genero: "M", categoria: "MASTER" },
    { nombre: "Marta Liliana Carrillo Gomez", club: "SPOR", edad: 40, genero: "F", categoria: "MASTER" },
    { nombre: "Martha Romero", club: "SPOR", edad: 60, genero: "F", categoria: "MASTER" },
    { nombre: "Rocio Camacho", club: "SPOR", edad: 47, genero: "F", categoria: "MASTER" },
    { nombre: "Yury Suarez Barajas", club: "SPOR", edad: 30, genero: "F", categoria: "MASTER" },
    { nombre: "Zoraida María Amado", club: "SPOR", edad: 67, genero: "F", categoria: "MASTER" },
    // MAYORES (18-29)
    { nombre: "Andrés Felipe Mendoza Sierra", club: "SPOR", edad: 18, genero: "M", categoria: "MAYORES" },
    { nombre: "Isabela Parra Reyes", club: "INDEP", edad: 22, genero: "F", categoria: "MAYORES" },
    { nombre: "Maria Paula Pimiento", club: "SKALAR", edad: 24, genero: "F", categoria: "MAYORES" },
    { nombre: "Francy Capacho", club: "SPOR", edad: 27, genero: "F", categoria: "MAYORES" },
    { nombre: "Juan Felipe Hernandez Sandoval", club: "SPOR", edad: 18, genero: "M", categoria: "MAYORES" },
    { nombre: "German David Hernández Güiza", club: "SPOR", edad: 28, genero: "M", categoria: "MAYORES" },
    { nombre: "Adrian Jehsua Blanco Sandoval", club: "SPOR", edad: 29, genero: "M", categoria: "MAYORES" },
    { nombre: "Karina Capacho", club: "SPOR", edad: 28, genero: "F", categoria: "MAYORES" },
    // MENORES (7-9)
    { nombre: "Adrian Estrada Mendoza", club: "SPOR", edad: 7, genero: "M", categoria: "MENORES" },
    { nombre: "Ashley Samantha Rodriguez", club: "SPOR", edad: 8, genero: "F", categoria: "MENORES" },
    { nombre: "Esteban Andrés Montañez Prada", club: "SPOR", edad: 8, genero: "M", categoria: "MENORES" },
    { nombre: "Jhoan David Velazquez Llano", club: "SPOR", edad: 8, genero: "M", categoria: "MENORES" },
    { nombre: "Julieta Medina Tarazona", club: "SPOR", edad: 9, genero: "F", categoria: "MENORES" },
    { nombre: "Keiner José Leal Campos", club: "SPOR", edad: 9, genero: "M", categoria: "MENORES" },
    { nombre: "Luciana Cardenas Bohorquez", club: "FOCA", edad: 7, genero: "F", categoria: "MENORES" },
    { nombre: "Luciana Sofía Bautista Oyola", club: "SPOR", edad: 8, genero: "F", categoria: "MENORES" },
    { nombre: "Luciana Vargas Bautista", club: "SPOR", edad: 7, genero: "F", categoria: "MENORES" },
    { nombre: "Luz Maria Perez Sanchez", club: "SPOR", edad: 9, genero: "F", categoria: "MENORES" },
    { nombre: "Matias Alejandro Duarte Moreno", club: "FOCA", edad: 7, genero: "M", categoria: "MENORES" },
    { nombre: "Paula Andrea Brochero Duarte", club: "SPOR", edad: 9, genero: "F", categoria: "MENORES" },
    { nombre: "Santiago Alejandro Rincón Navarro", club: "SPOR", edad: 7, genero: "M", categoria: "MENORES" },
    { nombre: "Sara Gabriela Payares Lozada", club: "SPOR", edad: 7, genero: "F", categoria: "MENORES" },
    { nombre: "Thiago Emmanuel Chacon Martinez", club: "SPOR", edad: 7, genero: "M", categoria: "MENORES" },
    { nombre: "Thomas Morales Payares", club: "SPOR", edad: 7, genero: "M", categoria: "MENORES" },
    { nombre: "Valeria Cardenas Bohorquez", club: "FOCA", edad: 7, genero: "F", categoria: "MENORES" },
    // NOVATOS
    { nombre: "Amelíe Parra Querales", club: "SPOR", edad: 12, genero: "F", categoria: "NOVATOS" },
    { nombre: "Danna Saray García", club: "SPOR", edad: 10, genero: "F", categoria: "NOVATOS" },
    { nombre: "Dilan Arley Ruea Yali", club: "SPOR", edad: 12, genero: "M", categoria: "NOVATOS" },
    { nombre: "Julian Stiven Cordero", club: "SPOR", edad: 11, genero: "M", categoria: "NOVATOS" },
    { nombre: "Luis Vargas Verdugo", club: "SPOR", edad: 39, genero: "M", categoria: "NOVATOS" },
    { nombre: "Samuel Jose Bedoya Herrera", club: "SPOR", edad: 12, genero: "M", categoria: "NOVATOS" },
    { nombre: "Sarah Rojas Garcia", club: "SPOR", edad: 10, genero: "F", categoria: "NOVATOS" },
    { nombre: "Sofia Rojas Garcia", club: "SPOR", edad: 10, genero: "F", categoria: "NOVATOS" },
    { nombre: "Javier Santiago Ordoñez Roa", club: "SPOR", edad: 11, genero: "M", categoria: "NOVATOS" },
    { nombre: "Marco Sebastian Quintero Caceres", club: "ORCA", edad: 11, genero: "M", categoria: "NOVATOS" },
    { nombre: "Thiago Vargas Bautista", club: "SPOR", edad: 12, genero: "M", categoria: "NOVATOS" }
];

/**
 * Importar todos los participantes inscritos
 * - Crea cada participante
 * - Los inscribe en TODAS las pruebas de su categoría
 * - NO asigna carriles ni heats (se asignan manualmente)
 */
function importarInscritosSportland() {
    console.log('🏊 Iniciando importación de inscritos oficiales...');
    
    // Confirmación
    if (!confirm(`¿Importar los ${SPORTLAND_INSCRITOS_2025.length} participantes inscritos?\n\n✅ Se crearán automáticamente\n✅ Se inscribirán en TODAS las pruebas de su categoría\n⚠️ Los carriles y heats se asignarán manualmente`)) {
        console.log('❌ Importación cancelada');
        return;
    }

    let stats = {
        participantesCreados: 0,
        participantesExistentes: 0,
        inscripcionesCreadas: 0,
        errores: 0,
        categoriasSinEventos: new Set()
    };

    SPORTLAND_INSCRITOS_2025.forEach((inscrito, index) => {
        try {
            console.log(`\n[${index + 1}/${SPORTLAND_INSCRITOS_2025.length}] Procesando: ${inscrito.nombre}`);

            // 1. Verificar si el participante ya existe
            const participantes = db.getParticipants();
            let participant = participantes.find(p => 
                p.name.toLowerCase().trim() === inscrito.nombre.toLowerCase().trim()
            );

            // 2. Crear participante si no existe
            if (!participant) {
                participant = db.addParticipant(
                    inscrito.nombre,
                    inscrito.club,
                    inscrito.genero
                );
                stats.participantesCreados++;
                console.log(`  ✅ Participante creado: ${inscrito.nombre}`);
            } else {
                stats.participantesExistentes++;
                console.log(`  ℹ️ Participante ya existe: ${inscrito.nombre}`);
            }

            // 3. Obtener la categoría
            const categorias = db.getCategories();
            const categoria = categorias.find(cat => 
                cat.category_name.toUpperCase() === inscrito.categoria.toUpperCase()
            );

            if (!categoria) {
                console.warn(`  ⚠️ Categoría no encontrada: ${inscrito.categoria}`);
                stats.categoriasSinEventos.add(inscrito.categoria);
                stats.errores++;
                return;
            }

            // 4. Obtener TODAS las pruebas de esta categoría
            const eventosCategoria = db.getEventsByCategory(categoria.category_id);

            if (eventosCategoria.length === 0) {
                console.warn(`  ⚠️ No hay eventos en la categoría: ${inscrito.categoria}`);
                stats.categoriasSinEventos.add(inscrito.categoria);
                return;
            }

            console.log(`  📋 Inscribiendo en ${eventosCategoria.length} pruebas...`);

            // 5. Inscribir en TODAS las pruebas de la categoría
            eventosCategoria.forEach(evento => {
                // Verificar si ya está inscrito en este evento
                const entries = db.getEntries();
                const yaInscrito = entries.find(entry => 
                    entry.participant_id === participant.participant_id && 
                    entry.event_id === evento.event_id
                );

                if (!yaInscrito) {
                    // Crear entrada con heat=0 y lane=0 (se asignarán automáticamente después)
                    try {
                        const result = db.addEntry(evento.event_id, participant.participant_id, 0, 0);
                        if (result && !result.error) {
                            stats.inscripcionesCreadas++;
                            console.log(`    ✓ ${evento.event_name}`);
                        } else {
                            console.log(`    ⚠️ No se pudo inscribir en: ${evento.event_name} (${result.error})`);
                        }
                    } catch (error) {
                        console.error(`    ❌ Error inscribiendo en ${evento.event_name}:`, error);
                    }
                } else {
                    console.log(`    ℹ️ Ya inscrito en: ${evento.event_name}`);
                }
            });

        } catch (error) {
            console.error(`  ❌ Error procesando ${inscrito.nombre}:`, error);
            stats.errores++;
        }
    });

    // Reporte final
    console.log('\n' + '='.repeat(60));
    console.log('📊 RESUMEN DE IMPORTACIÓN');
    console.log('='.repeat(60));
    console.log(`✅ Participantes creados: ${stats.participantesCreados}`);
    console.log(`ℹ️ Participantes ya existían: ${stats.participantesExistentes}`);
    console.log(`📝 Inscripciones creadas: ${stats.inscripcionesCreadas}`);
    console.log(`❌ Errores: ${stats.errores}`);
    
    if (stats.categoriasSinEventos.size > 0) {
        console.log(`\n⚠️ Categorías sin eventos configurados:`);
        stats.categoriasSinEventos.forEach(cat => console.log(`   - ${cat}`));
    }

    console.log('='.repeat(60));
    
    // NUEVO: Asignar heats y carriles automáticamente
    console.log('\n🎯 Asignando heats y carriles automáticamente...\n');
    const heatsAsignados = asignarHeatsYCarrilesAutomaticamente();
    console.log(`✅ Heats y carriles asignados: ${heatsAsignados.totalAsignaciones}`);
    console.log(`📋 Eventos procesados: ${heatsAsignados.eventosProcessados}`);

    // Mensaje para el usuario
    alert(`✅ IMPORTACIÓN COMPLETADA\n\n` +
          `👥 ${stats.participantesCreados} participantes nuevos creados\n` +
          `📋 ${stats.inscripcionesCreadas} inscripciones a pruebas\n` +
          `🎯 ${heatsAsignados.totalAsignaciones} heats y carriles asignados automáticamente\n\n` +
          `✨ Todo listo para registrar tiempos`);

    // Recargar las tablas en el dashboard
    if (typeof loadAllData === 'function') {
        loadAllData();
    }
}

/**
 * Asignar heats y carriles automáticamente a todas las inscripciones
 * Distribuye nadadores en heats de máximo 6 carriles
 */
function asignarHeatsYCarrilesAutomaticamente() {
    console.log('🔄 Iniciando asignación automática de heats y carriles...');
    
    const entries = db.getEntries();
    const eventos = db.getEvents();
    
    let stats = {
        totalAsignaciones: 0,
        eventosProcessados: 0
    };
    
    // Agrupar inscripciones por evento
    const inscripcionesPorEvento = {};
    
    entries.forEach(entry => {
        if (!inscripcionesPorEvento[entry.event_id]) {
            inscripcionesPorEvento[entry.event_id] = [];
        }
        inscripcionesPorEvento[entry.event_id].push(entry);
    });
    
    // Procesar cada evento
    Object.keys(inscripcionesPorEvento).forEach(eventId => {
        const inscripciones = inscripcionesPorEvento[eventId];
        const evento = db.getEventById(eventId);
        
        if (!evento) return;
        
        console.log(`\n  📋 ${evento.event_name}: ${inscripciones.length} nadadores`);
        
        // Filtrar solo inscripciones sin asignar (heat=0 o lane=0)
        const sinAsignar = inscripciones.filter(e => e.heat == 0 || e.lane == 0);
        
        if (sinAsignar.length === 0) {
            console.log(`     ✓ Ya tienen heats/carriles asignados`);
            return;
        }
        
        // Calcular cuántos heats necesitamos (máximo 6 nadadores por heat)
        const totalNadadores = sinAsignar.length;
        const nadadoresPorHeat = 6;
        const heatsNecesarios = Math.ceil(totalNadadores / nadadoresPorHeat);
        
        console.log(`     → Asignando ${totalNadadores} nadadores en ${heatsNecesarios} heat(s)...`);
        
        // Asignar a cada nadador
        let heatActual = 1;
        let carrilActual = 1;
        
        sinAsignar.forEach((entry, index) => {
            // Actualizar la inscripción con heat y carril
            entry.heat = heatActual;
            entry.lane = carrilActual;
            
            // Actualizar en la base de datos
            db.updateEntry(entry);
            
            stats.totalAsignaciones++;
            
            // Siguiente carril
            carrilActual++;
            
            // Si llegamos a 6 carriles, pasar al siguiente heat
            if (carrilActual > nadadoresPorHeat) {
                carrilActual = 1;
                heatActual++;
            }
        });
        
        console.log(`     ✅ Asignados en ${heatActual} heat(s)`);
        stats.eventosProcessados++;
    });
    
    console.log('\n✅ Asignación automática completada\n');
    
    return stats;
}

console.log('📥 Importador de Inscritos SPORTLAND cargado');
console.log(`   Total de inscritos: ${SPORTLAND_INSCRITOS_2025.length}`);
console.log('   Usa: importarInscritosSportland() para importar');
