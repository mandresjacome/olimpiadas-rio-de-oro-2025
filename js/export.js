/**
 * Módulo de Exportación de Datos
 * Permite exportar a JSON, CSV y Excel
 */

class DataExporter {
    
    // Exportar a JSON
    static exportJSON() {
        const data = db.exportData();
        const jsonStr = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `competencia-natacion-${this.getDateString()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        return true;
    }

    // Exportar resultados a CSV
    static exportResultsCSV() {
        const publicData = db.getPublicView();
        
        if (publicData.length === 0) {
            alert('⚠️ No hay resultados para exportar');
            return false;
        }

        // Headers
        const headers = ['Evento', 'Categoría', 'Participante', 'Club', 'Serie', 'Carril', 'Tiempo', 'Estado'];
        
        // Convertir datos a CSV
        let csv = headers.join(',') + '\n';
        
        publicData.forEach(row => {
            const values = [
                this.escapeCSV(row.evento),
                this.escapeCSV(row.categoria),
                this.escapeCSV(row.participante),
                this.escapeCSV(row.club),
                row.serie,
                row.carril,
                row.tiempo || '',
                row.estado
            ];
            csv += values.join(',') + '\n';
        });

        this.downloadFile(csv, `resultados-${this.getDateString()}.csv`, 'text/csv');
        return true;
    }

    // Exportar participantes a CSV
    static exportParticipantsCSV() {
        const participants = db.getParticipants();
        
        if (participants.length === 0) {
            alert('⚠️ No hay participantes para exportar');
            return false;
        }

        const headers = ['ID', 'Nombre', 'Club/Equipo', 'Género'];
        let csv = headers.join(',') + '\n';
        
        participants.forEach(p => {
            const values = [
                p.participant_id,
                this.escapeCSV(p.name),
                this.escapeCSV(p.club_or_team),
                p.gender
            ];
            csv += values.join(',') + '\n';
        });

        this.downloadFile(csv, `participantes-${this.getDateString()}.csv`, 'text/csv');
        return true;
    }

    // Exportar entries a CSV
    static exportEntriesCSV() {
        const entries = db.getEntries();
        const events = db.getEvents();
        const participants = db.getParticipants();
        
        if (entries.length === 0) {
            alert('⚠️ No hay inscripciones para exportar');
            return false;
        }

        const headers = ['Entry ID', 'Evento', 'Participante', 'Heat', 'Carril'];
        let csv = headers.join(',') + '\n';
        
        entries.forEach(entry => {
            const event = events.find(e => e.event_id === entry.event_id);
            const participant = participants.find(p => p.participant_id === entry.participant_id);
            
            const values = [
                entry.entry_id,
                this.escapeCSV(event ? event.event_name : ''),
                this.escapeCSV(participant ? participant.name : ''),
                entry.heat,
                entry.lane
            ];
            csv += values.join(',') + '\n';
        });

        this.downloadFile(csv, `inscripciones-${this.getDateString()}.csv`, 'text/csv');
        return true;
    }

    // Generar reporte de podios
    static exportPodiumsHTML() {
        const publicData = db.getPublicView();
        const events = [...new Set(publicData.map(d => d.evento))];
        
        let html = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Podios - Competencia de Natación</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: #f5f5f5;
        }
        h1 {
            text-align: center;
            color: #1976D2;
        }
        .podium {
            background: white;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .podium h2 {
            color: #333;
            border-bottom: 3px solid #1976D2;
            padding-bottom: 10px;
        }
        .winner {
            display: flex;
            align-items: center;
            padding: 15px;
            margin: 10px 0;
            border-radius: 5px;
        }
        .first { background: #FFD700; }
        .second { background: #C0C0C0; }
        .third { background: #CD7F32; }
        .medal {
            font-size: 2em;
            margin-right: 15px;
        }
        .info { flex: 1; }
        .name { font-weight: bold; font-size: 1.2em; }
        .time { color: #666; }
        @media print {
            .podium { page-break-inside: avoid; }
        }
    </style>
</head>
<body>
    <h1>🏆 Podios - Competencia de Natación ${this.getDateString()}</h1>
`;

        events.forEach(eventName => {
            const eventResults = publicData
                .filter(d => d.evento === eventName && d.estado === 'OK')
                .sort((a, b) => a.tiempo - b.tiempo)
                .slice(0, 3);
            
            if (eventResults.length > 0) {
                html += `
    <div class="podium">
        <h2>${eventName}</h2>
`;
                eventResults.forEach((result, index) => {
                    const medals = ['🥇', '🥈', '🥉'];
                    const classes = ['first', 'second', 'third'];
                    const positions = ['1º Lugar', '2º Lugar', '3º Lugar'];
                    
                    html += `
        <div class="winner ${classes[index]}">
            <div class="medal">${medals[index]}</div>
            <div class="info">
                <div class="name">${positions[index]}: ${result.participante}</div>
                <div class="time">Tiempo: ${result.tiempo}s | ${result.club || 'Sin club'}</div>
            </div>
        </div>
`;
                });
                
                html += `    </div>\n`;
            }
        });

        html += `
</body>
</html>
`;

        this.downloadFile(html, `podios-${this.getDateString()}.html`, 'text/html');
        return true;
    }

    // Importar desde JSON
    static importJSON(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    if (db.importData(data)) {
                        resolve(true);
                    } else {
                        reject('Error al importar datos');
                    }
                } catch (error) {
                    reject('Archivo JSON inválido');
                }
            };
            
            reader.onerror = () => reject('Error al leer el archivo');
            reader.readAsText(file);
        });
    }

    // Helpers
    static escapeCSV(str) {
        if (!str) return '';
        str = String(str);
        if (str.includes(',') || str.includes('"') || str.includes('\n')) {
            return `"${str.replace(/"/g, '""')}"`;
        }
        return str;
    }

    static getDateString() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    static downloadFile(content, filename, mimeType) {
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}
