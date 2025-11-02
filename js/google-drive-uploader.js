/**
 * GOOGLE DRIVE UPLOADER
 * Olimpiadas Río de Oro 2025
 * 
 * Sube PDFs de resultados automáticamente a Google Drive
 */

// Configuración
const DRIVE_CONFIG = {
    FOLDER_ID: '1AL1J3OR8MCTeMfjNUMWQiH2hVPrrLRdu',
    SERVICE_ACCOUNT: {
        client_email: 'olimpiadas-drive-uploader@gen-lang-client-0848969232.iam.gserviceaccount.com',
        private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDFubYqLo5fWrRW\nALtNvKkH8YfcK+P3Mjr9oqqClQM/tp6oBr/V9Y7btbUppHR/3CruFX99khxZu52a\nCX6J7IPEPqsRVAUzxz+2JDhFvV2Cta1ikm3fQH+sjrfLLC61EcTJvAFmzfDrWq/4\n2rd/Zpu+HCZN7WTRChDb41sWdRTeR+BQWmIZQa/vvhi8HxmqvUPf98ngiZwucqKs\nuo05+6TV7j+YAe06Tm5KnccI2szWfIi/DTSNlFlOKV60a5iOWCGix29EhbcNXkW6\nXHA67fW57HCHoR1oKurGm157pSj01E+iLa+WvK+WrarS0UXE5sAe91/Z37uke24u\nWZcONnydAgMBAAECggEAHLMCgmfkiWmogE014qguHrWLo0UJn0E+t77rIe4QHSjc\nKYZlROCSHkjnJUa2FDL4VjtvmGHjVJD7ZLbZE5rtW0g/W1IHOUdD86OZOWItlwHY\ny1R2ty9s+LZ0bfyZQPX1ytRLncjpnbe5kBTrCoZxt6vtUWVSO1dLMCd1erJ+1251\nBrjhp8NojXJSuFKLdxHQbLQTPPHF+9LaQOM8nwrfVV07+9ZwCpj42u1HbGs5R671\nIDikfYXIjma2rqQI9EjfROWQMj4fskcQmHy6fpvfDlqHy5xQ39jK20/j73HRj/qm\nE9yn2pXgmlT5I8vaSut+7O5+NahBANwoIRDvh9cFsQKBgQDmyw6IbiJP0KkMa2Rm\nO4UsIYwXu+l6mZZS69j45dxupvbwe0L+D5Qapv88W1tq9+pJ/FhojEg0K2RiMriN\n3sezOIbGEsUWXRTTNUs3I6J09BCdgbLJq9qSfF0Zjw8MXTYPIvm67TaDwredl/mC\nH9RfKK5d6W+r1oSK8YixlcG1pQKBgQDbUhXXXRN/sWtZq3uVqq/gxpM0Rnr+nsg0\ny25QtG0xQJCMwI+gU87/Ei74AJIidDIDXG7+ustQvd6JebNgJkp8VbJEag6exF6h\nZiZxjoFLq2bjSaNx6bkpVtu5dRcngrA9thH1yThdGR9xanNFyKDQgChHYahGyFlU\n9iS5ebupmQKBgGs7WWtGUKbo+kKM+z8M1JlmlOLKKncOOWwZrNwoYL0A0qd1ffDx\naAziHqD6iYUv3ym1F5ar5zhmGOQPUPSJ2BuLXgNV4UC8yto/Xs0lv2u7oqSsCFfv\ng0Sgh9lCQOmrvVxXEdUqNjQOGqYcYI93HoOAMVPtDDe5Gig8hRiNzk0JAoGBAKih\nhrWelR17dwTtOwqqwKxdQlXRU0RvJZSiTeGzuLlD4WC3tjcZ+XBZtM9u8O2Y1dOL\nwLQPP8CHHJIrhuYIywCqi3Ta7v7YEcKbXje10Gg0E9nyhr9Ra9MDO9Ju2yy/6W6p\njUmkO7gpVunHZXZkenGV+GJaDh7OcRFIaJhLpyURAoGAAvoh5wovklHJWx39qfT8\n1eZHtoLoIq2KTM5rXsarSWLahFSzbMOxyJti3pHgUoIXMUPRUAox+/tzQJZI+7pe\njgeri3jln+3LlP/ekMwBR6UUVMgUB3VaR/R9d1P+5R2Pen1cmSpAcUK3awcOfDQu\nH/EW6kDiJnkcxI/tiuvuh68=\n-----END PRIVATE KEY-----\n'
    }
};

/**
 * Obtener Access Token de Google usando JWT
 */
async function getAccessToken() {
    try {
        // Importar biblioteca para crear JWT
        const header = {
            alg: 'RS256',
            typ: 'JWT'
        };

        const now = Math.floor(Date.now() / 1000);
        const claim = {
            iss: DRIVE_CONFIG.SERVICE_ACCOUNT.client_email,
            scope: 'https://www.googleapis.com/auth/drive.file',
            aud: 'https://oauth2.googleapis.com/token',
            exp: now + 3600,
            iat: now
        };

        // Nota: Esto requiere una biblioteca de JWT en el navegador
        // Usaremos Google OAuth2 Playground como alternativa más simple
        console.warn('⚠️ La autenticación JWT desde el navegador requiere una biblioteca adicional');
        console.log('💡 Alternativa: Usar un servidor proxy simple o Google Apps Script');
        
        return null;
    } catch (error) {
        console.error('❌ Error obteniendo access token:', error);
        return null;
    }
}

/**
 * ALTERNATIVA SIMPLE: Subir usando Google Apps Script
 * Esta es la solución más práctica desde el navegador
 */
async function subirPDFconAppsScript(pdfBlob, nombreArchivo) {
    // URL del Apps Script configurado
    const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyd5W_P_4oGC-GQ-WH5hpQ3MGy-uX6EpSf1VbFww1zZyK7EU190umynHktfnivKM6c2/exec';
    
    try {
        console.log(`📤 Subiendo ${nombreArchivo} a Google Drive...`);
        
        // Convertir Blob a Base64
        const reader = new FileReader();
        const base64Promise = new Promise((resolve) => {
            reader.onloadend = () => {
                const base64 = reader.result.split(',')[1];
                resolve(base64);
            };
            reader.readAsDataURL(pdfBlob);
        });
        
        const base64PDF = await base64Promise;
        
        // Enviar a Apps Script
        const response = await fetch(APPS_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                filename: nombreArchivo,
                content: base64PDF,
                folderId: DRIVE_CONFIG.FOLDER_ID
            })
        });
        
        console.log('✅ PDF subido exitosamente a Google Drive');
        return true;
    } catch (error) {
        console.error('❌ Error subiendo PDF:', error);
        return false;
    }
}

/**
 * Generar PDF de resultados y subirlo
 */
async function generarYSubirPDFResultados(eventId, eventName, categoryName) {
    console.log('📄 Generando PDF de resultados...');
    
    try {
        // Verificar que jsPDF esté disponible
        if (typeof window.jspdf === 'undefined') {
            alert('❌ Error: Biblioteca jsPDF no cargada');
            return;
        }
        
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Configurar fuente y colores
        doc.setFont('helvetica');
        
        // === ENCABEZADO MEJORADO ===
        // Fondo del encabezado
        doc.setFillColor(41, 128, 185); // Azul
        doc.rect(0, 0, 210, 35, 'F');
        
        // Título principal
        doc.setFontSize(22);
        doc.setTextColor(255, 255, 255); // Blanco
        doc.setFont('helvetica', 'bold');
        doc.text('OLIMPIADAS RÍO DE ORO', 105, 12, { align: 'center' });
        
        // Categoría
        doc.setFontSize(16);
        doc.setFont('helvetica', 'normal');
        doc.text(categoryName, 105, 20, { align: 'center' });
        
        // Evento
        doc.setFontSize(14);
        doc.text(eventName, 105, 27, { align: 'center' });
        
        // Fecha en pequeño
        doc.setFontSize(9);
        const fecha = new Date().toLocaleDateString('es-CO', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        doc.text(`Fecha: ${fecha}`, 105, 32, { align: 'center' });
        
        // === OBTENER RESULTADOS ===
        const db = window.db || window;
        
        // Obtener entries directamente de localStorage (fix para cuando db.getEntries() falla)
        let entries = [];
        try {
            const entriesData = localStorage.getItem('entries');
            if (entriesData) {
                entries = JSON.parse(entriesData);
            }
        } catch (e) {
            console.error('Error parsing entries:', e);
            entries = db.getEntries ? db.getEntries() : [];
        }
        
        console.log('📊 PDF Debug:');
        console.log('- Event ID buscado:', eventId);
        console.log('- Total entries en sistema:', entries.length);
        
        const eventEntries = entries.filter(e => e.event_id === eventId);
        console.log('- Entries encontradas para', eventId, ':', eventEntries.length);
        
        // Procesar entries y obtener tiempos (desde entry o desde results)
        const resultsData = [];
        eventEntries.forEach(entry => {
            let time = entry.time || null;
            let status = entry.status || 'OK';
            
            // Si no hay tiempo en entry, buscar en results
            if (!time && db.getResultByEntryId) {
                const result = db.getResultByEntryId(entry.entry_id);
                if (result) {
                    time = result.time_seconds;
                    status = result.status || status;
                }
            }
            
            console.log('  Entry:', entry.entry_id, '- Time:', time, '- Status:', status);
            
            // Solo agregar si tiene tiempo y estado OK
            if (time && status === 'OK') {
                resultsData.push({
                    ...entry,
                    time: time,
                    status: status
                });
            }
        });
        
        console.log('- Results with times:', resultsData.length);
        
        // Ordenar por tiempo
        resultsData.sort((a, b) => {
            const timeA = typeof a.time === 'string' ? 
                a.time.split(':').reduce((acc, time) => (60 * acc) + +time, 0) : 
                parseFloat(a.time);
            const timeB = typeof b.time === 'string' ? 
                b.time.split(':').reduce((acc, time) => (60 * acc) + +time, 0) : 
                parseFloat(b.time);
            return timeA - timeB;
        });
        
        let y = 42;
        
        // Obtener participantes de localStorage también
        let participants = [];
        try {
            const participantsData = localStorage.getItem('participants');
            if (participantsData) {
                participants = JSON.parse(participantsData);
            }
        } catch (e) {
            console.error('Error parsing participants:', e);
        }
        
        // === SECCIÓN PODIO (TOP 3) ===
        if (resultsData.length > 0) {
            doc.setFontSize(14);
            doc.setTextColor(46, 125, 50); // Verde
            doc.setFont('helvetica', 'bold');
            doc.text('PODIO', 20, y);
            doc.setFont('helvetica', 'normal');
            y += 8;
            
            const top3 = resultsData.slice(0, 3);
            
            top3.forEach((entry, index) => {
                const participant = participants.find(p => p.participant_id === entry.participant_id);
                const posicion = index + 1;
                
                // Formatear tiempo
                let timeDisplay = entry.time;
                if (typeof entry.time === 'number') {
                    const mins = Math.floor(entry.time / 60);
                    const secs = (entry.time % 60).toFixed(2);
                    timeDisplay = mins > 0 ? `${mins}:${secs.padStart(5, '0')}` : `${secs}s`;
                }
                
                // Colores según posición
                let bgColor, medalText;
                if (posicion === 1) {
                    bgColor = [255, 215, 0]; // Dorado
                    medalText = '[ORO]';
                } else if (posicion === 2) {
                    bgColor = [192, 192, 192]; // Plateado
                    medalText = '[PLATA]';
                } else {
                    bgColor = [205, 127, 50]; // Bronce
                    medalText = '[BRONCE]';
                }
                
                // Caja de color
                doc.setFillColor(...bgColor);
                doc.roundedRect(20, y - 5, 170, 12, 2, 2, 'F');
                
                // Texto
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(12);
                doc.setFont('helvetica', 'bold');
                doc.text(`${medalText} ${posicion} Lugar: ${participant?.name || participant?.participant_name || 'Desconocido'}`, 25, y + 2);
                
                doc.setFont('helvetica', 'normal');
                doc.setFontSize(10);
                doc.text(`${timeDisplay} • ${participant?.club || '-'}`, 25, y + 7);
                
                y += 15;
            });
            
            y += 5;
        }
        
        // === TABLA COMPLETA DE RESULTADOS ===
        doc.setFontSize(14);
        doc.setTextColor(46, 125, 50);
        doc.setFont('helvetica', 'bold');
        doc.text('TABLA DE RESULTADOS COMPLETA', 20, y);
        doc.setFont('helvetica', 'normal');
        y += 8;
        
        // Encabezados de tabla
        doc.setFillColor(46, 125, 50); // Verde
        doc.rect(20, y, 170, 10, 'F');
        
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.text('Pos', 25, y + 7);
        doc.text('Participante', 45, y + 7);
        doc.text('Club', 110, y + 7);
        doc.text('Heat', 145, y + 7);
        doc.text('Carril', 160, y + 7);
        doc.text('Tiempo', 175, y + 7);
        doc.setFont('helvetica', 'normal');
        
        y += 12;
        
        // Datos
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(9);
        
        resultsData.forEach((entry, index) => {
            const posicion = index + 1;
            const participant = participants.find(p => p.participant_id === entry.participant_id);
            
            // Color de fondo alternado
            if (index % 2 === 0) {
                doc.setFillColor(245, 245, 245);
                doc.rect(20, y - 4, 170, 7, 'F');
            }
            
            // Posición
            doc.setTextColor(0, 0, 0);
            doc.text(String(posicion), 25, y);
            
            // Datos
            doc.text(participant?.name || participant?.participant_name || 'Desconocido', 45, y);
            doc.text(participant?.club || '-', 110, y);
            doc.text(String(entry.heat || '-'), 148, y);
            doc.text(String(entry.lane || '-'), 163, y);
            
            // Formatear tiempo
            let timeDisplay = entry.time;
            if (typeof entry.time === 'number') {
                const mins = Math.floor(entry.time / 60);
                const secs = (entry.time % 60).toFixed(2);
                timeDisplay = mins > 0 ? `${mins}:${secs.padStart(5, '0')}` : `${secs}s`;
            }
            
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(46, 125, 50);
            doc.text(timeDisplay, 175, y);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(0, 0, 0);
            
            y += 7;
            
            // Nueva página si es necesario
            if (y > 270) {
                doc.addPage();
                y = 20;
            }
            if (y > 270) {
                doc.addPage();
                y = 20;
            }
        });
        
        // === PIE DE PÁGINA ===
        const pageCount = doc.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            
            // Línea superior del footer
            doc.setDrawColor(46, 125, 50);
            doc.setLineWidth(0.5);
            doc.line(20, 280, 190, 280);
            
            // Título del evento
            doc.setFontSize(9);
            doc.setTextColor(46, 125, 50);
            doc.setFont('helvetica', 'bold');
            doc.text('OLIMPIADAS RIO DE ORO 2025', 105, 285, { align: 'center' });
            
            // Información del sistema
            doc.setFontSize(7);
            doc.setTextColor(100, 100, 100);
            doc.setFont('helvetica', 'normal');
            doc.text('Sistema de Gestion de Competencias de Natacion', 105, 289, { align: 'center' });
            
            // Número de página
            doc.setFontSize(7);
            doc.setTextColor(150, 150, 150);
            doc.text(`Pagina ${i} de ${pageCount} - Generado el ${fecha}`, 105, 293, { align: 'center' });
        }
        
        // Generar nombre de archivo
        const timestamp = new Date().toISOString().split('T')[0];
        const nombreArchivo = `${categoryName}_${eventName}_${timestamp}.pdf`.replace(/\s+/g, '_');
        
        // Convertir a Blob
        const pdfBlob = doc.output('blob');
        
        // Mostrar mensaje de progreso
        console.log('📄 PDF generado, subiendo a Google Drive...');
        
        // OPCIÓN 1: Descargar localmente
        doc.save(nombreArchivo);
        console.log('✅ PDF descargado localmente');
        
        // OPCIÓN 2: Subir a Drive automáticamente
        const uploadSuccess = await subirPDFconAppsScript(pdfBlob, nombreArchivo);
        
        if (uploadSuccess) {
            alert('✅ PDF generado y subido a Google Drive!\n\n' +
                  `📄 Archivo: ${nombreArchivo}\n` +
                  '📁 Carpeta: Resultados Olimpiadas 2025\n\n' +
                  '🔗 Revisa tu carpeta de Google Drive para ver el archivo.');
        } else {
            alert('⚠️ PDF generado y descargado localmente.\n\n' +
                  'No se pudo subir automáticamente a Drive.\n' +
                  'Puedes subirlo manualmente si lo necesitas.');
        }
        
        return true;
    } catch (error) {
        console.error('❌ Error generando PDF:', error);
        alert('❌ Error generando PDF: ' + error.message);
        return false;
    }
}

console.log('📤 Google Drive Uploader cargado');
console.log('💡 Usa: generarYSubirPDFResultados(eventId, eventName, categoryName)');
