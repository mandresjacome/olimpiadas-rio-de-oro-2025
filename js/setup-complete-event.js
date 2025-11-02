/**
 * CONFIGURACIÓN COMPLETA DEL EVENTO
 * Olimpiadas Río de Oro 2025
 * 
 * Este script:
 * 1. Crea las 9 categorías
 * 2. Crea los 27 eventos (3 por categoría)
 * 3. Importa los 95 participantes
 * 4. Los inscribe automáticamente en sus pruebas
 * 5. Asigna heats y carriles
 */

function configurarEventoCompleto() {
    console.log('🏊 CONFIGURACIÓN COMPLETA DEL EVENTO');
    console.log('====================================\n');

    if (!confirm('¿Configurar el evento completo?\n\n✅ Creará:\n  • 9 Categorías\n  • 27 Eventos\n  • 95 Participantes\n  • Inscripciones automáticas\n  • Asignación de heats y carriles\n\n⚠️ Esto limpiará todos los datos existentes.')) {
        console.log('❌ Configuración cancelada');
        return;
    }

    // PASO 0: Limpiar todo
    console.log('🗑️ Limpiando datos anteriores...');
    if (typeof db !== 'undefined' && db.clearAllData) {
        db.clearAllData();
    } else {
        localStorage.clear();
    }
    console.log('✅ Datos limpiados\n');

    // PASO 1: Crear categorías
    console.log('📋 PASO 1: Creando categorías...');
    const categorias = [
        { name: 'BEBES', ageRange: '3-6 años' },
        { name: 'MENORES', ageRange: '7-9 años' },
        { name: 'INFANTIL A', ageRange: '10-11 años' },
        { name: 'INFANTIL B', ageRange: '12-13 años' },
        { name: 'JUVENIL A', ageRange: '14-15 años' },
        { name: 'JUVENIL B', ageRange: '16-17 años' },
        { name: 'MAYORES', ageRange: '18-29 años' },
        { name: 'MASTER', ageRange: '30+ años' },
        { name: 'NOVATOS', ageRange: 'Todas las edades' }
    ];

    categorias.forEach((cat, idx) => {
        db.addCategory(cat.name); // Solo el nombre, ageRange no se usa en la DB
        console.log(`  ${idx + 1}. ${cat.name} (${cat.ageRange})`);
    });
    console.log(`✅ ${categorias.length} categorías creadas\n`);

    // PASO 2: Crear eventos
    console.log('🏊 PASO 2: Creando eventos...');
    const eventosPorCategoria = {
        'BEBES': [
            '25M Badeo',
            'Búsqueda del Tesoro',
            '10M Caballito'
        ],
        'MENORES': [
            '25M Patada Crol o Libre',
            '25M Crol o Libre',
            '25M Espalda'
        ],
        'INFANTIL A': [
            '25M Apnea Subacuático de Mariposa',
            '100M Estilo Libre o Crol',
            '100M Combinado Individual'
        ],
        'INFANTIL B': [
            '25M Apnea Subacuático de Mariposa',
            '100M Estilo Libre o Crol',
            '100M Combinado Individual'
        ],
        'JUVENIL A': [
            '25M Apnea Subacuático de Mariposa',
            '100M Estilo Libre o Crol',
            '100M Combinado Individual'
        ],
        'JUVENIL B': [
            '25M Apnea Subacuático de Mariposa',
            '100M Estilo Libre o Crol',
            '100M Combinado Individual'
        ],
        'MAYORES': [
            '25M Estilo Libre o Crol',
            '50M Estilo Libre o Crol',
            '50M Combinado Individual'
        ],
        'MASTER': [
            '25M Estilo Libre o Crol',
            '50M Estilo Libre o Crol',
            '50M Combinado Individual'
        ],
        'NOVATOS': [
            '25M Patada Crol',
            '25M Crol',
            '25M Espalda'
        ]
    };

    let totalEventos = 0;
    let eventosCreados = 0;
    let eventosExistentes = 0;
    const categoriasDB = db.getCategories();
    const eventosExistentesDB = db.getEvents();
    
    categoriasDB.forEach(categoria => {
        const eventos = eventosPorCategoria[categoria.category_name];
        if (eventos) {
            console.log(`\n  📋 ${categoria.category_name}:`);
            eventos.forEach((eventoNombre, idx) => {
                // Verificar si el evento ya existe en esta categoría
                const yaExiste = eventosExistentesDB.find(e => 
                    e.event_name === eventoNombre && 
                    e.category_id === categoria.category_id
                );
                
                if (!yaExiste) {
                    db.addEvent(eventoNombre, categoria.category_id);
                    console.log(`     ${idx + 1}. ${eventoNombre} ✅ creado`);
                    eventosCreados++;
                } else {
                    console.log(`     ${idx + 1}. ${eventoNombre} ℹ️ ya existe`);
                    eventosExistentes++;
                }
                totalEventos++;
            });
        }
    });

    console.log(`\n✅ ${eventosCreados} eventos creados (${eventosExistentes} ya existían)\n`);

    // PASO 3: Importar participantes
    console.log('👥 PASO 3: Importando 95 participantes...');
    
    if (typeof importarInscritosSportland !== 'function') {
        alert('⚠️ Error: No se encontró la función de importación.\nAsegúrate de que sportland-participants-importer.js esté cargado.');
        return;
    }

    // Llamar a la función de importación (sin confirmación porque ya confirmamos)
    const originalConfirm = window.confirm;
    window.confirm = () => true; // Bypass confirmación
    
    importarInscritosSportland();
    
    window.confirm = originalConfirm; // Restaurar confirmación

    console.log('\n' + '='.repeat(60));
    console.log('✅ EVENTO CONFIGURADO COMPLETAMENTE');
    console.log('='.repeat(60));
    console.log(`📋 ${categorias.length} categorías`);
    console.log(`🏊 ${totalEventos} eventos`);
    console.log(`👥 95 participantes`);
    console.log(`📝 ~285 inscripciones (95 × 3 pruebas)`);
    console.log('='.repeat(60));
    console.log('\n🎯 SIGUIENTE PASO:');
    console.log('   1. Ve a "Panel de Control" (control-panel.html)');
    console.log('   2. Selecciona el evento y heat');
    console.log('   3. Registra los tiempos de cada nadador');
    console.log('   4. Ve a "Resultados Públicos" (public-view.html) para ver podios\n');

    // Recargar tablas
    if (typeof loadAllData === 'function') {
        setTimeout(loadAllData, 500);
    }

    alert('✅ EVENTO LISTO PARA USAR\n\n' +
          '📋 9 categorías creadas\n' +
          '🏊 27 eventos creados\n' +
          '👥 95 participantes importados\n' +
          '📝 Inscripciones realizadas\n' +
          '🎯 Heats y carriles asignados\n\n' +
          'Ahora puedes:\n' +
          '• Ir a "Gestionar Inscripciones" para verlas\n' +
          '• Ir a "Panel de Control" para registrar tiempos\n' +
          '• Ir a "Resultados Públicos" para ver podios');
}

console.log('⚡ Setup automático cargado');
console.log('   Usa: configurarEventoCompleto()');
