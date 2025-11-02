/**
 * DATOS OFICIALES DEL EVENTO
 * Olimpiadas Río de Oro 2025 - Club Deportivo SPORTLAND
 * Piedecuesta, Santander
 */

const SPORTLAND_EVENT_DATA = {
    eventInfo: {
        name: 'Olimpiadas Río de Oro 2025',
        edition: 'Primera Versión',
        club: 'Club Deportivo SPORTLAND',
        location: 'Parque Recreacional Guatiguará, Piedecuesta',
        date: 'Domingo, 2 de noviembre de 2025',
        time: '7:00 a.m. - 5:00 p.m.',
        motto: 'El deporte nos une, el orgullo piedecuestano nos identifica',
        objective: 'Fomentar la práctica del deporte en niños, jóvenes y adultos como herramienta para promover un estilo de vida saludable'
    },

    categories: [
        { name: 'BEBES', ageRange: '3-6 años', birthYear: '2019-2022' },
        { name: 'MENORES', ageRange: '7-9 años', birthYear: '2016-2018' },
        { name: 'INFANTIL A', ageRange: '10-11 años', birthYear: '2014-2015' },
        { name: 'INFANTIL B', ageRange: '12-13 años', birthYear: '2012-2013' },
        { name: 'JUVENIL A', ageRange: '14-15 años', birthYear: '2010-2011' },
        { name: 'JUVENIL B', ageRange: '16-17 años', birthYear: '2008-2009' },
        { name: 'MAYORES', ageRange: '18-30 años', birthYear: '1995-2007' },
        { name: 'MASTER', ageRange: '31+ años', birthYear: '1994 y anteriores' },
        { name: 'NOVATOS', ageRange: 'Sin importar edad', birthYear: 'Todas las edades' }
    ],

    swimmingEvents: {
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
    },

    specialRules: {
        'NOVATOS': {
            description: 'Diseñada para quienes están iniciando en la natación',
            equipment: 'Tabla flotadora o gusano (obligatorio en patada o caballito)',
            apnea: {
                rule: 'Mantente bajo el agua todo lo que puedas',
                technique: 'Puedes salir y sumergirte otra vez y seguir bajo la superficie',
                winner: 'Gana quien recorra la distancia en menos tiempo, cuidando posición flecha y ondulación tipo mariposa'
            }
        },
        'BEBES': {
            ageRule: 'Niños de 3 a 6 años',
            competitionRule: 'Harán la prueba uno por uno, sin competir directamente con otros',
            goal: 'Dar su máxima velocidad personal, no enfrentar a sus compañeros'
        },
        'GENERAL': {
            equipment: 'En las pruebas de patada o caballito deberás usar tabla flotadora o gusano',
            apneaTest: 'Mantente bajo el agua todo lo que puedas. Puedes salir y sumergirte otra vez y seguir bajo la superficie',
            apneaWinner: 'Gana quien recorra la distancia en menos tiempo, cuidando la posición flecha y la ondulación tipo mariposa'
        }
    },

    acuathlonEvents: [
        { 
            category: 'NOVATOS', 
            atletismo: '1200 metros', 
            natacion: '500 metros',
            description: 'Nivel inicial'
        },
        { 
            category: 'INTERMEDIOS', 
            atletismo: '2000 metros', 
            natacion: '1000 metros',
            description: 'Nivel intermedio'
        },
        { 
            category: 'AVANZADOS', 
            atletismo: '3200 metros', 
            natacion: '1500 metros',
            description: 'Nivel avanzado'
        }
    ],

    circuitEvents: {
        description: 'Circuito Capacidad Cardio-Muscular',
        exercises: ['Remo en TRX', 'Cargadas', 'Flexiones', 'Natación'],
        rest: '30 segundos de recuperación entre cada ejercicio',
        categories: [
            { 
                name: 'NOVATOS',
                remoTRX: '25"/30"',
                cargadas: '25"/30"',
                flexiones: '25"/30"',
                natacion: '2\'30"',
                implements: 'Balón de 7 kg'
            },
            { 
                name: 'INTERMEDIOS',
                remoTRX: '50"/30"',
                cargadas: '50"/30"',
                flexiones: '50"/30"',
                natacion: '3\'',
                implements: 'Balón de 10 kg'
            },
            { 
                name: 'AVANZADOS',
                remoTRX: '1m/30"',
                cargadas: '1m/30"',
                flexiones: '1m/30"',
                natacion: '4\'',
                implements: 'Balón de 10 kg'
            }
        ],
        rules: [
            'Cada repetición debe hacerse con el recorrido completo de la articulación',
            'Tú eliges la categoría en la que compites',
            'Los entrenadores organizarán las series por edad y nivel físico',
            'El objetivo es poner a prueba tus músculos trabajando con muy poco descanso'
        ]
    },

    schedule: [
        { time: '6:30 AM', group: 'COMITÉ ORGANIZADOR' },
        { time: '7:00 AM', group: 'ATLETAS ACUATHLON' },
        { time: '8:30 AM', group: 'ATLETAS MAYORES DE 7 AÑOS FESTI-TORNEO DE NATACIÓN' },
        { time: '9:00 AM', group: 'ATLETAS 3 A 6 AÑOS FESTIVAL BEBES' },
        { time: '11:30 AM', group: 'ATLETAS CIRCUITO CAPACIDAD CARDIO-MUSCULAR' }
    ],

    pricing: {
        bebes: {
            basic: { 
                price: 65000, 
                includes: 'Inscripción, medalla de participación y obsequio' 
            },
            complete: { 
                price: 100000, 
                includes: 'Inscripción, medalla de participación, obsequio y camiseta oficial' 
            }
        },
        menoresNovatos: {
            basic: { 
                price: 35000, 
                includes: 'Inscripción y medalla de participación' 
            },
            complete: { 
                price: 80000, 
                includes: 'Inscripción, medalla de participación y camiseta oficial' 
            }
        },
        competitive: {
            basic: { 
                price: 50000, 
                includes: 'Inscripción y medalla de participación por evento' 
            },
            top5: { 
                price: 65000, 
                includes: 'Inscripción y medalla del 1º al 5º puesto' 
            },
            complete: { 
                price: 100000, 
                includes: 'Inscripción, medalla del 1º al 5º puesto y camiseta oficial',
                note: 'Fecha límite inscripción con camiseta: 22 de octubre. Sin camiseta: 29 de octubre'
            }
        }
    },

    importantRules: [
        'Participación mínima: 10 afiliados o personas naturales',
        'Evento participativo que busca exaltar el esfuerzo y la dedicación',
        'Festitorneo: NO se premia el primer puesto, se premia el primer o último si el deportista lo ve necesario',
        'Mínimo de edad para participar en este evento es de 3 años',
        'Preparación física y psicológica para la realización de estas pruebas de resistencia es responsabilidad de cada participante',
        'No se permitirá la participación a ningún deportista que presente los efectos de sustancias alucinógenas o alcohol',
        'Todos los participantes deberán llevar su documento de identidad y carné de seguro médico',
        'Los deportistas menores de 18 años deberán ir acompañados de un adulto responsable',
        'Los entrenadores y delegados de los clubes pueden hacer el papel de testigo de los deportistas',
        'Todos los participantes deberán diligenciar el formato de exoneración de responsabilidad'
    ],

    contacts: {
        director: {
            name: 'Edinson González Bueno',
            title: 'Director General Del Evento',
            phone: '317 270 5307'
        },
        additional: [
            { name: 'Aura Sandoval', phone: '316 563 8725' },
            { name: 'Marta Carrillo', phone: '316 637 4768' }
        ]
    }
};

/**
 * Carga los datos oficiales del evento en la base de datos
 */
function loadSportlandEventData() {
    console.log('🏊 Cargando datos del evento Olimpiadas Río de Oro 2025...');
    
    let stats = {
        categoriesAdded: 0,
        eventsAdded: 0,
        errors: []
    };

    try {
        // 1. Cargar categorías de natación
        SPORTLAND_EVENT_DATA.categories.forEach(cat => {
            try {
                const existing = db.getCategories().find(c => c.category_name === cat.name);
                if (!existing) {
                    db.addCategory(cat.name);
                    stats.categoriesAdded++;
                    console.log(`✅ Categoría agregada: ${cat.name} (${cat.ageRange})`);
                }
            } catch (error) {
                stats.errors.push(`Error en categoría ${cat.name}: ${error.message}`);
            }
        });

        // 2. Cargar eventos de natación por categoría
        Object.keys(SPORTLAND_EVENT_DATA.swimmingEvents).forEach(categoryName => {
            const category = db.getCategories().find(c => c.category_name === categoryName);
            if (!category) {
                stats.errors.push(`Categoría ${categoryName} no encontrada`);
                return;
            }

            SPORTLAND_EVENT_DATA.swimmingEvents[categoryName].forEach(eventName => {
                try {
                    const existing = db.getEvents().find(e => 
                        e.event_name === eventName && e.category_id === category.category_id
                    );
                    
                    if (!existing) {
                        db.addEvent(eventName, category.category_id);
                        stats.eventsAdded++;
                        console.log(`✅ Evento agregado: ${eventName} (${categoryName})`);
                    }
                } catch (error) {
                    stats.errors.push(`Error en evento ${eventName}: ${error.message}`);
                }
            });
        });

        // 3. Mostrar resumen
        let message = `✅ ¡Datos oficiales del evento cargados!\n\n`;
        message += `📊 RESUMEN:\n`;
        message += `━━━━━━━━━━━━━━━━━━━━━━━\n`;
        message += `📋 Categorías nuevas: ${stats.categoriesAdded}\n`;
        message += `🏊 Eventos nuevos: ${stats.eventsAdded}\n`;
        message += `━━━━━━━━━━━━━━━━━━━━━━━\n`;
        message += `📊 Total categorías: ${db.getCategories().length}\n`;
        message += `🏊 Total eventos: ${db.getEvents().length}\n\n`;
        message += `🎯 Ya puedes comenzar a crear inscripciones\ny digitar tiempos del evento!\n\n`;
        message += `🏊 Olimpiadas Río de Oro 2025\nClub Deportivo SPORTLAND`;

        if (stats.errors.length > 0) {
            message += `\n\n⚠️ Advertencias:\n`;
            stats.errors.forEach(err => message += `- ${err}\n`);
        }

        alert(message);
        
        // Recargar selectores si estamos en el panel de control
        if (typeof loadExistingEvents === 'function') {
            loadExistingEvents();
        }
        
        return stats;
    } catch (error) {
        console.error('Error al cargar datos del evento:', error);
        alert(`❌ Error al cargar datos del evento:\n${error.message}`);
        return null;
    }
}

/**
 * Muestra información completa del evento
 */
function showEventInfo() {
    const info = SPORTLAND_EVENT_DATA.eventInfo;
    const schedule = SPORTLAND_EVENT_DATA.schedule;
    
    let message = `
🏊‍♂️ OLIMPIADAS RÍO DE ORO 2025
${info.edition}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 FECHA: ${info.date}
🕐 HORA: ${info.time}
📍 LUGAR: ${info.location}
🏢 ORGANIZA: ${info.club}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💭 "${info.motto}"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏰ PROGRAMACIÓN:

`;

    schedule.forEach(item => {
        message += `${item.time} - ${item.group}\n`;
    });

    message += `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 EVENTOS PRINCIPALES:

1️⃣ ACUATHLON (Participativo)
   • Novatos: 1200m atletismo + 500m natación
   • Intermedios: 2000m + 1000m
   • Avanzados: 3200m + 1500m

2️⃣ FESTI-TORNEO DE NATACIÓN
   9 Categorías por edad (3 años hasta Master)
   
3️⃣ CIRCUITO CAPACIDAD CARDIO-MUSCULAR
   Remo TRX + Cargadas + Flexiones + Natación

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📞 CONTACTO:
${SPORTLAND_EVENT_DATA.contacts.director.name}
${SPORTLAND_EVENT_DATA.contacts.director.title}
📱 ${SPORTLAND_EVENT_DATA.contacts.director.phone}
    `;

    alert(message);
}

/**
 * Obtiene las reglas especiales de una categoría
 */
function getCategoryRules(categoryName) {
    return SPORTLAND_EVENT_DATA.specialRules[categoryName] || SPORTLAND_EVENT_DATA.specialRules.GENERAL;
}

/**
 * Obtiene el rango de edad de una categoría
 */
function getCategoryAgeRange(categoryName) {
    const category = SPORTLAND_EVENT_DATA.categories.find(c => c.name === categoryName);
    return category ? `${category.ageRange} (${category.birthYear})` : 'No especificado';
}

/**
 * Muestra la información de precios
 */
function showPricing() {
    const pricing = SPORTLAND_EVENT_DATA.pricing;
    
    let message = `
💰 PRECIOS - OLIMPIADAS RÍO DE ORO 2025
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👶 CATEGORÍA BEBES (3-6 años):
   • Básico: $${pricing.bebes.basic.price.toLocaleString()}
     ${pricing.bebes.basic.includes}
   
   • Completo: $${pricing.bebes.complete.price.toLocaleString()}
     ${pricing.bebes.complete.includes}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏊 CATEGORÍAS 7-9 AÑOS Y NOVATOS:
   • Básico: $${pricing.menoresNovatos.basic.price.toLocaleString()}
     ${pricing.menoresNovatos.basic.includes}
   
   • Completo: $${pricing.menoresNovatos.complete.price.toLocaleString()}
     ${pricing.menoresNovatos.complete.includes}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏆 CATEGORÍAS INFANTIL A MASTER:
   • Básico: $${pricing.competitive.basic.price.toLocaleString()}
     ${pricing.competitive.basic.includes}
   
   • Top 5: $${pricing.competitive.top5.price.toLocaleString()}
     ${pricing.competitive.top5.includes}
   
   • Completo: $${pricing.competitive.complete.price.toLocaleString()}
     ${pricing.competitive.complete.includes}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ ${pricing.competitive.complete.note}
    `;

    alert(message);
}

console.log('✅ Módulo de datos del evento cargado correctamente');
console.log('🏊 Olimpiadas Río de Oro 2025 - Club Deportivo SPORTLAND');
