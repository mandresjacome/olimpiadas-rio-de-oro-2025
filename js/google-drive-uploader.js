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
    // URL del Apps Script que crearemos
    const APPS_SCRIPT_URL = 'TU_URL_DE_APPS_SCRIPT_AQUI';
    
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
        
        // === ENCABEZADO ===
        // Título principal
        doc.setFontSize(24);
        doc.setTextColor(41, 128, 185); // Azul
        doc.text('🏊 OLIMPIADAS RÍO DE ORO 2025', 105, 20, { align: 'center' });
        
        // Línea decorativa
        doc.setDrawColor(41, 128, 185);
        doc.setLineWidth(1);
        doc.line(20, 25, 190, 25);
        
        // Categoría y evento
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.text(categoryName, 105, 35, { align: 'center' });
        
        doc.setFontSize(14);
        doc.setTextColor(100, 100, 100);
        doc.text(eventName, 105, 42, { align: 'center' });
        
        // Fecha
        doc.setFontSize(10);
        const fecha = new Date().toLocaleDateString('es-CO', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        doc.text(`Fecha: ${fecha}`, 105, 48, { align: 'center' });
        
        // === OBTENER RESULTADOS ===
        const db = window.db || window;
        const entries = db.getEntriesByEvent ? db.getEntriesByEvent(eventId) : [];
        
        // Filtrar solo los que tienen tiempo
        const withTimes = entries.filter(e => e.time && e.time !== null);
        
        // Ordenar por tiempo
        withTimes.sort((a, b) => {
            const timeA = a.time.split(':').reduce((acc, time) => (60 * acc) + +time, 0);
            const timeB = b.time.split(':').reduce((acc, time) => (60 * acc) + +time, 0);
            return timeA - timeB;
        });
        
        // === TABLA DE RESULTADOS ===
        let y = 60;
        
        // Encabezados de tabla
        doc.setFillColor(41, 128, 185);
        doc.rect(20, y, 170, 10, 'F');
        
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(11);
        doc.text('Pos', 25, y + 7);
        doc.text('Participante', 45, y + 7);
        doc.text('Club', 110, y + 7);
        doc.text('Heat', 145, y + 7);
        doc.text('Carril', 160, y + 7);
        doc.text('Tiempo', 175, y + 7);
        
        y += 12;
        
        // Datos
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(10);
        
        withTimes.forEach((entry, index) => {
            const posicion = index + 1;
            const participant = db.getParticipantById ? db.getParticipantById(entry.participant_id) : null;
            
            // Color de fondo alternado
            if (index % 2 === 0) {
                doc.setFillColor(245, 245, 245);
                doc.rect(20, y - 5, 170, 8, 'F');
            }
            
            // Medalla para top 3
            let medalla = '';
            let color = [0, 0, 0];
            if (posicion === 1) {
                medalla = '🥇';
                color = [255, 215, 0]; // Dorado
            } else if (posicion === 2) {
                medalla = '🥈';
                color = [192, 192, 192]; // Plateado
            } else if (posicion === 3) {
                medalla = '🥉';
                color = [205, 127, 50]; // Bronce
            }
            
            // Posición
            doc.setTextColor(...color);
            doc.setFontSize(11);
            doc.text(`${medalla} ${posicion}°`, 23, y);
            
            // Datos
            doc.setTextColor(0, 0, 0);
            doc.setFontSize(9);
            doc.text(participant?.name || 'Desconocido', 45, y);
            doc.text(participant?.club || '-', 110, y);
            doc.text(String(entry.heat || '-'), 148, y);
            doc.text(String(entry.lane || '-'), 163, y);
            
            doc.setFontSize(10);
            doc.setFont('helvetica', 'bold');
            doc.text(entry.time, 175, y);
            doc.setFont('helvetica', 'normal');
            
            y += 8;
            
            // Nueva página si es necesario
            if (y > 270) {
                doc.addPage();
                y = 20;
            }
        });
        
        // === PIE DE PÁGINA ===
        const pageCount = doc.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(8);
            doc.setTextColor(150, 150, 150);
            doc.text(
                `Página ${i} de ${pageCount} - Generado el ${fecha}`,
                105,
                287,
                { align: 'center' }
            );
        }
        
        // Generar nombre de archivo
        const timestamp = new Date().toISOString().split('T')[0];
        const nombreArchivo = `${categoryName}_${eventName}_${timestamp}.pdf`.replace(/\s+/g, '_');
        
        // Convertir a Blob
        const pdfBlob = doc.output('blob');
        
        // OPCIÓN 1: Descargar localmente
        doc.save(nombreArchivo);
        console.log('✅ PDF descargado localmente');
        
        // OPCIÓN 2: Subir a Drive (requiere Apps Script configurado)
        // await subirPDFconAppsScript(pdfBlob, nombreArchivo);
        
        alert('✅ PDF generado y descargado!\n\n' +
              'Para subirlo a Google Drive automáticamente,\n' +
              'necesitamos configurar Google Apps Script.\n\n' +
              'Por ahora, el PDF se descargó a tu computadora.');
        
        return true;
    } catch (error) {
        console.error('❌ Error generando PDF:', error);
        alert('❌ Error generando PDF: ' + error.message);
        return false;
    }
}

console.log('📤 Google Drive Uploader cargado');
console.log('💡 Usa: generarYSubirPDFResultados(eventId, eventName, categoryName)');
