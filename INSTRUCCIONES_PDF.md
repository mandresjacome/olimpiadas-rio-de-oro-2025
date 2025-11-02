# 📄 Generación de PDFs de Resultados

## ✅ ¿Qué está configurado?

El sistema ahora puede generar PDFs automáticos de los resultados de cada evento.

## 🎯 Cómo usar

### 1. Desde el Panel de Control

1. Abre `control-panel.html`
2. Ve a la pestaña **"📊 Ver Resultados"**
3. Selecciona el evento que quieres
4. Click en **"📄 Generar PDF"**
5. El PDF se descargará automáticamente a tu computadora

### 2. Contenido del PDF

El PDF incluye:
- 🏊 Título del evento y categoría
- 📅 Fecha de generación
- 🥇🥈🥉 Resultados ordenados por tiempo
- 👥 Nombre del participante
- 🏢 Club
- 🔢 Heat y carril
- ⏱️ Tiempo registrado

## 📤 Subir PDFs a Google Drive (Opcional)

### Estado actual:
- ✅ **Generación de PDF**: Funciona completamente
- ⚠️ **Subida automática a Drive**: Requiere configuración adicional

### Para habilitar subida automática:

Necesitas configurar **Google Apps Script** (15-20 minutos):

1. Ve a [script.google.com](https://script.google.com)
2. Crear nuevo proyecto
3. Pega este código:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const folderId = data.folderId;
    const filename = data.filename;
    const content = Utilities.newBlob(
      Utilities.base64Decode(data.content), 
      'application/pdf', 
      filename
    );
    
    const folder = DriveApp.getFolderById(folderId);
    const file = folder.createFile(content);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      fileId: file.getId(),
      url: file.getUrl()
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Implementar como **Web App**
5. Permisos: "Anyone" / "Anonymous"
6. Copiar la URL generada
7. Pegar en `js/google-drive-uploader.js` línea 66:
   ```javascript
   const APPS_SCRIPT_URL = 'TU_URL_AQUI';
   ```

## 🔒 Seguridad

### Archivo de credenciales:
- ✅ El archivo `gen-lang-client-*.json` está en `.gitignore`
- ✅ NO se subirá a GitHub
- ⚠️ **NO LO COMPARTAS PÚBLICAMENTE**

### Google Drive:
- La carpeta: https://drive.google.com/drive/folders/1AL1J3OR8MCTeMfjNUMWQiH2hVPrrLRdu
- Solo la cuenta de servicio puede escribir
- Cualquiera con el enlace puede ver

## 📋 Resumen

**Lo que funciona AHORA:**
- ✅ Generar PDFs bonitos con resultados
- ✅ Descarga automática del PDF
- ✅ Diseño profesional con medallas 🥇🥈🥉

**Lo que requiere configuración:**
- ⚠️ Subida automática a Google Drive (opcional)

## 💡 Recomendación

Para el evento, usa el sistema actual:
1. Genera el PDF después de cada prueba
2. Los PDFs se descargan a tu computadora
3. Compártelos manualmente o súbelos a Drive cuando quieras

**Ventajas:**
- ✅ Simple y rápido
- ✅ Sin complicaciones
- ✅ Funciona offline
- ✅ Control total sobre los archivos
