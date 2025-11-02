# 🏊 Sistema de Gestión - Olimpiadas Río de Oro 2025# 🏊 OLIMPIADAS RÍO DE ORO 2025

## Sistema de Gestión de Competencias de Natación

Sistema completo de gestión para competencias de natación con generación automática de PDFs y sincronización con Google Drive.

📅 **Fecha del Evento:** 2 de Noviembre, 2025  

## 🚀 Instalación Rápida👥 **Participantes:** 96 nadadores  

🏆 **Categorías:** 9 (BEBES, MENORES, INFANTIL A/B, JUVENIL A/B, MAYORES, MASTER, NOVATOS)  

### Para Windows:🏊 **Eventos:** 27 pruebas (3 por categoría)

1. Descarga o clona este repositorio

2. Ejecuta `INSTALADOR.bat`---

3. Se creará un acceso directo en tu escritorio

4. ¡Listo! Abre el sistema desde el acceso directo## 🚀 INICIO RÁPIDO



### Para otros sistemas operativos:### 1. **Primera vez usando el sistema**

1. Abre `index.html` en tu navegador1. Abre `index.html` en tu navegador

2. Agrega la página a marcadores para acceso rápido2. Haz clic en **"⚡ CONFIGURAR TODO AUTOMÁTICAMENTE ⚡"**

3. Espera a que se creen las 9 categorías, 27 eventos, 96 participantes y ~288 inscripciones

## 📋 Características4. ¡Listo! El sistema está configurado



- ✅ **Gestión Completa**: Categorías, eventos, participantes, inscripciones### 2. **Generar resultados de prueba** (opcional)

- ✅ **Registro de Resultados**: Tiempos, series, carriles1. En `index.html`, haz clic en **"🎲 Generar Datos de Prueba"**

- ✅ **PDFs Automáticos**: Generación con podio y tabla completa2. Esto creará tiempos aleatorios para todas las inscripciones

- ✅ **Google Drive**: Subida automática de PDFs para compartir3. Útil para ver cómo funciona el sistema antes del evento

- ✅ **Vista Pública**: Resultados en tiempo real

- ✅ **Backups**: Exportación/importación en formato JSON---

- ✅ **100% Offline**: Funciona sin internet (excepto subida de PDFs)

- ✅ **Sin Instalación**: Solo requiere un navegador web## 📄 PÁGINAS DEL SISTEMA



## 🎯 Primer Uso### 🏠 `index.html` - Página Principal

- Configuración automática del evento

1. Abre el sistema- Generación de datos de prueba

2. Ve a **🔧 Configuración**- Limpieza de duplicados

3. Haz clic en **⚡ CONFIGURAR TODO AUTOMÁTICAMENTE**- Exportar datos

4. Ya tienes 9 categorías y 27 eventos listos para usar

### 🎛️ `control-panel.html` - Panel de Control

## 📚 Estructura- Gestionar inscripciones

- Asignar heats y carriles

```- Filtros por categoría, evento, heat, nombre

📋 Dashboard (index.html)- Ver estadísticas de carriles

   └─ Gestión de Categorías, Eventos y Participantes

### 📊 `admin-results.html` - Cargar Resultados

⚙️ Panel de Control (control-panel.html)- Cargar tiempos por evento

   └─ Inscripciones, Tiempos, Resultados y PDFs- Editar resultados

- Cambiar estados (OK, DNF, DQ)

🔧 Configuración (settings.html)

   └─ Setup inicial, Backups, Mantenimiento### 👁️ `public-view.html` - Vista Pública

- Mostrar resultados en tiempo real

📊 Resultados Públicos (public-view.html)- Podios por categoría

   └─ Vista para compartir con espectadores- Filtros de búsqueda

```- Auto-actualización



## 💾 Tecnologías### ℹ️ `event-info.html` - Información del Evento

- Detalles del evento

- **Frontend**: HTML5, CSS3, JavaScript puro- Estadísticas generales

- **Almacenamiento**: LocalStorage (navegador)

- **PDFs**: jsPDF v2.5.1### 🎯 `INICIO.html` - Menú Principal (opcional)

- **Cloud**: Google Apps Script + Drive API- Acceso rápido a todas las páginas

- **Sin dependencias**: No requiere Node.js, npm ni frameworks

---

## 📤 PDFs Automáticos

## 🔧 FUNCIONES PRINCIPALES

Los PDFs generados incluyen:

- 🥇 Podio visual (Oro, Plata, Bronce)### En `index.html`:

- 📊 Tabla completa de resultados- **CONFIGURAR TODO AUTOMÁTICAMENTE** - Configura evento completo

- 🏊 Footer profesional con información del evento- **Generar Datos de Prueba** - Crea tiempos de ejemplo

- ☁️ Subida automática a Google Drive- **Limpiar Duplicados** - Elimina eventos duplicados

- **Exportar a Excel** - Descarga todos los datos

**Ver PDFs públicos**: [Google Drive Folder](https://drive.google.com/drive/folders/1AL1J3OR8MCTeMfjNUMWQiH2hVPrrLRdu)

### En la consola del navegador (F12):

## 🔧 Instalación en Otro PC- `generateTestData()` - Generar tiempos de demostración

- `clearOnlyResults()` - Borrar solo tiempos (mantiene estructura)

1. Copia toda la carpeta a USB- `clearAllData()` - Borrar TODO (requiere reconfigurar)

2. Pega en el nuevo PC

3. Ejecuta `INSTALADOR.bat`---

4. Importa datos desde backup si es necesario

## 📁 ESTRUCTURA DE ARCHIVOS

## 📦 Archivos Principales

```

```swimming-competition/

swimming-competition/│

├── index.html              # Dashboard principal├── index.html              # Página principal

├── control-panel.html      # Panel de control├── control-panel.html      # Panel de administración

├── settings.html           # Configuración├── admin-results.html      # Cargar resultados

├── public-view.html        # Vista pública├── public-view.html        # Vista pública

├── INSTALADOR.bat          # Instalador para Windows├── event-info.html         # Info del evento

├── LEEME.txt              # Instrucciones detalladas├── INICIO.html             # Menú de navegación

├── css/│

│   └── styles.css         # Estilos del sistema├── css/

└── js/│   └── styles.css          # Estilos del sistema

    ├── database.js        # Gestión de datos (LocalStorage)│

    ├── event-data.js      # Lógica de eventos└── js/

    ├── app.js             # Aplicación principal    ├── database.js                      # Motor de base de datos (LocalStorage)

    ├── export.js          # Exportación de datos    ├── event-data.js                    # Categorías y eventos

    ├── google-drive-uploader.js  # PDFs y Google Drive    ├── sportland-participants-importer.js  # 96 participantes

    ├── setup-complete-event.js   # Setup automático    ├── setup-complete-event.js          # Configuración automática

    └── test-data-generator.js    # Datos de prueba    ├── clean-duplicates.js              # Limpieza de duplicados

```    ├── export.js                        # Exportar a Excel

    └── test-data-generator.js           # Generar datos de prueba

## 💡 Uso Recomendado```



### Antes del Evento:---

1. Configura categorías y eventos

2. Registra todos los participantes## 💾 ALMACENAMIENTO

3. Haz un backup de seguridad

- **Sistema:** LocalStorage del navegador

### Durante el Evento:- **No requiere servidor**

1. Inscribe nadadores en cada prueba- **Datos persistentes** (se mantienen al cerrar el navegador)

2. Registra los tiempos conforme terminan- **Portátil:** Funciona desde cualquier carpeta

3. Genera PDFs después de cada evento

4. Comparte la vista pública con espectadores---



### Después del Evento:## 🎯 FLUJO DE TRABAJO RECOMENDADO

1. Verifica todos los resultados

2. Genera PDFs finales### **ANTES DEL EVENTO:**

3. Haz backup completo1. Ejecutar "CONFIGURAR TODO AUTOMÁTICAMENTE"

4. Comparte los PDFs públicos2. Generar datos de prueba para familiarizarse

3. Practicar carga de resultados

## ⚠️ Importante

### **DÍA DEL EVENTO:**

- Los datos se guardan en el **navegador** (LocalStorage)1. Limpiar resultados de prueba: `clearOnlyResults()`

- Haz **backups regulares** para no perder información2. Verificar inscripciones en `control-panel.html`

- No uses modo incógnito/privado (no guarda datos)3. Ajustar heats si es necesario

- Para cambiar de PC, exporta e importa el backup4. Cargar resultados en `admin-results.html`

5. Público ve resultados en `public-view.html`

## 🐛 Problemas Comunes

### **DESPUÉS DEL EVENTO:**

**No se guardan los datos**1. Exportar resultados finales a Excel

- Verifica que no estés en modo incógnito2. Hacer backup de LocalStorage (opcional)

- Asegúrate de permitir LocalStorage en el navegador

---

**El instalador no funciona**

- Ejecuta como administrador## 🔍 CARACTERÍSTICAS ESPECIALES

- Verifica que estés en la carpeta correcta

✅ **Búsqueda inteligente sin tildes** - "maria" encuentra "María"  

**Perdí mis datos**✅ **Filtros dinámicos** - Categoría → Evento → Heat  

- Importa el último backup desde Configuración✅ **Estadísticas en tiempo real** - Carriles ocupados/libres  

- Los datos solo se guardan en el navegador usado✅ **Podios automáticos** - Top 3 por categoría/evento  

✅ **Prevención de duplicados** - No crea eventos repetidos  

## 📞 Soporte✅ **Exportación a Excel** - Descarga completa de datos  



- **GitHub**: [olimpiadas-rio-de-oro-2025](https://github.com/mandresjacome/olimpiadas-rio-de-oro-2025)---

- **Issues**: Reporta problemas en GitHub Issues

## 🏊 CLUBES PARTICIPANTES

## 📄 Licencia

- SPOR (Club Deportivo SPORTLAND)

Desarrollado para las Olimpiadas Río de Oro 2025- FOCA

- SKAL / SKALAR

---- ORCA

- INDEP

**Desarrollado con ❤️ para la comunidad deportiva**

---

## 📞 SOPORTE

- Sistema 100% offline
- No requiere instalación
- Compatible con Chrome, Firefox, Edge
- Desarrollado para Olimpiadas Río de Oro 2025

---

**🏊‍♂️ ¡Buena suerte en la competencia! 🏊‍♀️**
