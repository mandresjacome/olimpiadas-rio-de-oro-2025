/**
 * Sistema de Base de Datos Local para Competencia de Natación
 * Utiliza LocalStorage para almacenamiento persistente
 */

class SwimmingDatabase {
    constructor() {
        this.initDatabase();
    }

    initDatabase() {
        // Inicializar estructuras si no existen
        if (!localStorage.getItem('categories')) {
            localStorage.setItem('categories', JSON.stringify([]));
        }
        if (!localStorage.getItem('events')) {
            localStorage.setItem('events', JSON.stringify([]));
        }
        if (!localStorage.getItem('participants')) {
            localStorage.setItem('participants', JSON.stringify([]));
        }
        if (!localStorage.getItem('entries')) {
            localStorage.setItem('entries', JSON.stringify([]));
        }
        if (!localStorage.getItem('results')) {
            localStorage.setItem('results', JSON.stringify([]));
        }
    }

    // ===================== CATEGORIES =====================
    
    getCategories() {
        return JSON.parse(localStorage.getItem('categories') || '[]');
    }

    addCategory(name) {
        const categories = this.getCategories();
        const id = this.generateId('C', categories.length);
        const category = {
            category_id: id,
            category_name: name
        };
        categories.push(category);
        localStorage.setItem('categories', JSON.stringify(categories));
        return category;
    }

    updateCategory(id, name) {
        const categories = this.getCategories();
        const index = categories.findIndex(c => c.category_id === id);
        if (index !== -1) {
            categories[index].category_name = name;
            localStorage.setItem('categories', JSON.stringify(categories));
            return true;
        }
        return false;
    }

    deleteCategory(id) {
        let categories = this.getCategories();
        categories = categories.filter(c => c.category_id !== id);
        localStorage.setItem('categories', JSON.stringify(categories));
        return true;
    }

    getCategoryById(id) {
        const categories = this.getCategories();
        return categories.find(c => c.category_id === id);
    }

    // ===================== EVENTS =====================
    
    getEvents() {
        return JSON.parse(localStorage.getItem('events') || '[]');
    }

    addEvent(name, categoryId) {
        const events = this.getEvents();
        const id = this.generateId('E', events.length);
        const event = {
            event_id: id,
            event_name: name,
            category_id: categoryId
        };
        events.push(event);
        localStorage.setItem('events', JSON.stringify(events));
        return event;
    }

    updateEvent(id, name, categoryId) {
        const events = this.getEvents();
        const index = events.findIndex(e => e.event_id === id);
        if (index !== -1) {
            events[index].event_name = name;
            events[index].category_id = categoryId;
            localStorage.setItem('events', JSON.stringify(events));
            return true;
        }
        return false;
    }

    deleteEvent(id) {
        let events = this.getEvents();
        events = events.filter(e => e.event_id !== id);
        localStorage.setItem('events', JSON.stringify(events));
        return true;
    }

    getEventById(id) {
        const events = this.getEvents();
        return events.find(e => e.event_id === id);
    }

    getEventsByCategory(categoryId) {
        const events = this.getEvents();
        return events.filter(e => e.category_id === categoryId);
    }

    // ===================== PARTICIPANTS =====================
    
    getParticipants() {
        return JSON.parse(localStorage.getItem('participants') || '[]');
    }

    addParticipant(name, club = '', gender = '') {
        const participants = this.getParticipants();
        const id = this.generateId('P', participants.length);
        const participant = {
            participant_id: id,
            name: name,
            club_or_team: club,
            gender: gender
        };
        participants.push(participant);
        localStorage.setItem('participants', JSON.stringify(participants));
        return participant;
    }

    updateParticipant(id, name, club, gender) {
        const participants = this.getParticipants();
        const index = participants.findIndex(p => p.participant_id === id);
        if (index !== -1) {
            participants[index].name = name;
            participants[index].club_or_team = club;
            participants[index].gender = gender;
            localStorage.setItem('participants', JSON.stringify(participants));
            return true;
        }
        return false;
    }

    deleteParticipant(id) {
        let participants = this.getParticipants();
        participants = participants.filter(p => p.participant_id !== id);
        localStorage.setItem('participants', JSON.stringify(participants));
        return true;
    }

    getParticipantById(id) {
        const participants = this.getParticipants();
        return participants.find(p => p.participant_id === id);
    }

    // ===================== ENTRIES =====================
    
    getEntries() {
        return JSON.parse(localStorage.getItem('entries') || '[]');
    }

    addEntry(eventId, participantId, heat, lane) {
        const entries = this.getEntries();
        
        // Si heat o lane son 0, significa "no asignado aún" - no validar duplicados
        const isUnassigned = heat == 0 || lane == 0;
        
        if (!isUnassigned) {
            // Verificar si ya existe esta inscripción (solo si heat/lane están asignados)
            const exists = entries.find(e => 
                e.event_id === eventId && 
                e.participant_id === participantId && 
                e.heat == heat
            );
            
            if (exists) {
                return { error: 'El participante ya está inscrito en este evento y heat' };
            }

            // Verificar si el carril ya está ocupado (solo si heat/lane están asignados)
            const laneOccupied = entries.find(e => 
                e.event_id === eventId && 
                e.heat == heat && 
                e.lane == lane
            );

            if (laneOccupied) {
                return { error: 'El carril ya está ocupado en este heat' };
            }
        }

        const id = `EN-${eventId}-${participantId}-H${heat || 0}-L${lane || 0}-${Date.now()}`;
        const entry = {
            entry_id: id,
            event_id: eventId,
            participant_id: participantId,
            heat: parseInt(heat) || 0,
            lane: parseInt(lane) || 0
        };
        entries.push(entry);
        localStorage.setItem('entries', JSON.stringify(entries));
        return entry;
    }

    updateEntry(entryOrId, eventId, participantId, heat, lane) {
        const entries = this.getEntries();
        
        // Si el primer argumento es un objeto, usarlo directamente
        if (typeof entryOrId === 'object') {
            const entry = entryOrId;
            const index = entries.findIndex(e => e.entry_id === entry.entry_id);
            if (index !== -1) {
                // Actualizar todos los campos del entry
                entries[index] = { ...entries[index], ...entry };
                localStorage.setItem('entries', JSON.stringify(entries));
                return true;
            }
            return false;
        }
        
        // Comportamiento original para compatibilidad
        const id = entryOrId;
        const index = entries.findIndex(e => e.entry_id === id);
        if (index !== -1) {
            const newId = `EN-${eventId}-${participantId}-H${heat}-L${lane}`;
            entries[index] = {
                entry_id: newId,
                event_id: eventId,
                participant_id: participantId,
                heat: parseInt(heat),
                lane: parseInt(lane)
            };
            localStorage.setItem('entries', JSON.stringify(entries));
            return true;
        }
        return false;
    }

    deleteEntry(id) {
        let entries = this.getEntries();
        entries = entries.filter(e => e.entry_id !== id);
        localStorage.setItem('entries', JSON.stringify(entries));
        return true;
    }

    getEntriesByEvent(eventId) {
        const entries = this.getEntries();
        return entries.filter(e => e.event_id === eventId);
    }

    getEntriesByEventAndHeat(eventId, heat) {
        const entries = this.getEntries();
        return entries.filter(e => e.event_id === eventId && e.heat == heat)
            .sort((a, b) => a.lane - b.lane);
    }

    getAllEntries() {
        return this.getEntries();
    }

    getEntryById(entryId) {
        const entries = this.getEntries();
        return entries.find(e => e.entry_id === entryId);
    }

    // ===================== RESULTS =====================
    
    getResults() {
        return JSON.parse(localStorage.getItem('results') || '[]');
    }

    saveResult(entryId, timeSeconds, status = 'OK') {
        const results = this.getResults();
        const timestamp = new Date().toISOString().replace(/[-:T.]/g, '').slice(0, 14);
        
        // Actualizar también el entry con el tiempo y estado
        const entries = this.getEntries();
        const entryIndex = entries.findIndex(e => e.entry_id === entryId);
        if (entryIndex !== -1) {
            entries[entryIndex].time = status === 'OK' ? parseFloat(timeSeconds) : null;
            entries[entryIndex].status = status;
            localStorage.setItem('entries', JSON.stringify(entries));
        }
        
        // Verificar si ya existe resultado para este entry
        const existingIndex = results.findIndex(r => r.entry_id === entryId);
        
        const resultId = `R-${timestamp}-${entryId}`;
        const result = {
            result_id: resultId,
            entry_id: entryId,
            time_seconds: status === 'OK' ? parseFloat(timeSeconds) : null,
            status: status
        };

        if (existingIndex !== -1) {
            // Actualizar resultado existente
            results[existingIndex] = result;
        } else {
            // Agregar nuevo resultado
            results.push(result);
        }

        localStorage.setItem('results', JSON.stringify(results));
        return result;
    }

    deleteResult(entryId) {
        let results = this.getResults();
        results = results.filter(r => r.entry_id !== entryId);
        localStorage.setItem('results', JSON.stringify(results));
        return true;
    }

    getResultByEntryId(entryId) {
        const results = this.getResults();
        return results.find(r => r.entry_id === entryId);
    }

    // ===================== PUBLIC VIEW =====================
    
    getPublicView() {
        const results = this.getResults();
        const entries = this.getEntries();
        const events = this.getEvents();
        const categories = this.getCategories();
        const participants = this.getParticipants();

        const publicData = [];

        results.forEach(result => {
            const entry = entries.find(e => e.entry_id === result.entry_id);
            if (!entry) return;

            const event = events.find(e => e.event_id === entry.event_id);
            if (!event) return;

            const category = categories.find(c => c.category_id === event.category_id);
            const participant = participants.find(p => p.participant_id === entry.participant_id);

            publicData.push({
                evento: event.event_name,
                categoria: category ? category.category_name : '',
                participante: participant ? participant.name : '',
                club: participant ? participant.club_or_team : '',
                serie: entry.heat,
                carril: entry.lane,
                tiempo: result.time_seconds,
                estado: result.status,
                event_id: event.event_id,
                category_id: event.category_id
            });
        });

        return publicData;
    }

    // ===================== UTILITIES =====================
    
    generateId(prefix, index) {
        const paddedIndex = String(index + 1).padStart(3, '0');
        return `${prefix}-${paddedIndex}`;
    }

    exportData() {
        return {
            categories: this.getCategories(),
            events: this.getEvents(),
            participants: this.getParticipants(),
            entries: this.getEntries(),
            results: this.getResults(),
            exportDate: new Date().toISOString()
        };
    }

    importData(data) {
        try {
            if (data.categories) localStorage.setItem('categories', JSON.stringify(data.categories));
            if (data.events) localStorage.setItem('events', JSON.stringify(data.events));
            if (data.participants) localStorage.setItem('participants', JSON.stringify(data.participants));
            if (data.entries) localStorage.setItem('entries', JSON.stringify(data.entries));
            if (data.results) localStorage.setItem('results', JSON.stringify(data.results));
            return true;
        } catch (error) {
            console.error('Error importing data:', error);
            return false;
        }
    }

    clearAllData() {
        if (confirm('⚠️ ¿Estás seguro de borrar TODOS los datos? Esta acción no se puede deshacer.')) {
            localStorage.removeItem('categories');
            localStorage.removeItem('events');
            localStorage.removeItem('participants');
            localStorage.removeItem('entries');
            localStorage.removeItem('results');
            this.initDatabase();
            return true;
        }
        return false;
    }

    // ===================== DEMO DATA =====================
    
    loadDemoData() {
        // Categorías
        this.addCategory('Infantil A');
        this.addCategory('Infantil B');
        this.addCategory('Juvenil A');

        // Eventos
        this.addEvent('25M Patada Crol o Libre', 'C-001');
        this.addEvent('25M Crol o Libre', 'C-001');
        this.addEvent('50M Estilo Libre', 'C-002');
        this.addEvent('100M Estilo Libre', 'C-003');

        // Participantes
        this.addParticipant('Juan Pérez', 'Club Neptuno', 'M');
        this.addParticipant('María García', 'Club Tritones', 'F');
        this.addParticipant('Carlos López', 'Club Delfines', 'M');
        this.addParticipant('Ana Martínez', 'Club Neptuno', 'F');
        this.addParticipant('Pedro Sánchez', 'Club Olas', 'M');
        this.addParticipant('Laura Rodríguez', 'Club Tritones', 'F');

        return true;
    }
}

// Instancia global de la base de datos
const db = new SwimmingDatabase();
