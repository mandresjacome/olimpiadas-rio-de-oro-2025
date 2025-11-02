# 🏊 OLIMPIADAS RÍO DE ORO 2025
## Sistema de Gestión de Competencias de Natación

📅 **Fecha del Evento:** 2 de Noviembre, 2025  
👥 **Participantes:** 96 nadadores  
🏆 **Categorías:** 9 (BEBES, MENORES, INFANTIL A/B, JUVENIL A/B, MAYORES, MASTER, NOVATOS)  
🏊 **Eventos:** 27 pruebas (3 por categoría)

---

## 🚀 INICIO RÁPIDO

### 1. **Primera vez usando el sistema**
1. Abre `index.html` en tu navegador
2. Haz clic en **"⚡ CONFIGURAR TODO AUTOMÁTICAMENTE ⚡"**
3. Espera a que se creen las 9 categorías, 27 eventos, 96 participantes y ~288 inscripciones
4. ¡Listo! El sistema está configurado

### 2. **Generar resultados de prueba** (opcional)
1. En `index.html`, haz clic en **"🎲 Generar Datos de Prueba"**
2. Esto creará tiempos aleatorios para todas las inscripciones
3. Útil para ver cómo funciona el sistema antes del evento

---

## 📄 PÁGINAS DEL SISTEMA

### 🏠 `index.html` - Página Principal
- Configuración automática del evento
- Generación de datos de prueba
- Limpieza de duplicados
- Exportar datos

### 🎛️ `control-panel.html` - Panel de Control
- Gestionar inscripciones
- Asignar heats y carriles
- Filtros por categoría, evento, heat, nombre
- Ver estadísticas de carriles

### 📊 `admin-results.html` - Cargar Resultados
- Cargar tiempos por evento
- Editar resultados
- Cambiar estados (OK, DNF, DQ)

### 👁️ `public-view.html` - Vista Pública
- Mostrar resultados en tiempo real
- Podios por categoría
- Filtros de búsqueda
- Auto-actualización

### ℹ️ `event-info.html` - Información del Evento
- Detalles del evento
- Estadísticas generales

### 🎯 `INICIO.html` - Menú Principal (opcional)
- Acceso rápido a todas las páginas

---

## 🔧 FUNCIONES PRINCIPALES

### En `index.html`:
- **CONFIGURAR TODO AUTOMÁTICAMENTE** - Configura evento completo
- **Generar Datos de Prueba** - Crea tiempos de ejemplo
- **Limpiar Duplicados** - Elimina eventos duplicados
- **Exportar a Excel** - Descarga todos los datos

### En la consola del navegador (F12):
- `generateTestData()` - Generar tiempos de demostración
- `clearOnlyResults()` - Borrar solo tiempos (mantiene estructura)
- `clearAllData()` - Borrar TODO (requiere reconfigurar)

---

## 📁 ESTRUCTURA DE ARCHIVOS

```
swimming-competition/
│
├── index.html              # Página principal
├── control-panel.html      # Panel de administración
├── admin-results.html      # Cargar resultados
├── public-view.html        # Vista pública
├── event-info.html         # Info del evento
├── INICIO.html             # Menú de navegación
│
├── css/
│   └── styles.css          # Estilos del sistema
│
└── js/
    ├── database.js                      # Motor de base de datos (LocalStorage)
    ├── event-data.js                    # Categorías y eventos
    ├── sportland-participants-importer.js  # 96 participantes
    ├── setup-complete-event.js          # Configuración automática
    ├── clean-duplicates.js              # Limpieza de duplicados
    ├── export.js                        # Exportar a Excel
    └── test-data-generator.js           # Generar datos de prueba
```

---

## 💾 ALMACENAMIENTO

- **Sistema:** LocalStorage del navegador
- **No requiere servidor**
- **Datos persistentes** (se mantienen al cerrar el navegador)
- **Portátil:** Funciona desde cualquier carpeta

---

## 🎯 FLUJO DE TRABAJO RECOMENDADO

### **ANTES DEL EVENTO:**
1. Ejecutar "CONFIGURAR TODO AUTOMÁTICAMENTE"
2. Generar datos de prueba para familiarizarse
3. Practicar carga de resultados

### **DÍA DEL EVENTO:**
1. Limpiar resultados de prueba: `clearOnlyResults()`
2. Verificar inscripciones en `control-panel.html`
3. Ajustar heats si es necesario
4. Cargar resultados en `admin-results.html`
5. Público ve resultados en `public-view.html`

### **DESPUÉS DEL EVENTO:**
1. Exportar resultados finales a Excel
2. Hacer backup de LocalStorage (opcional)

---

## 🔍 CARACTERÍSTICAS ESPECIALES

✅ **Búsqueda inteligente sin tildes** - "maria" encuentra "María"  
✅ **Filtros dinámicos** - Categoría → Evento → Heat  
✅ **Estadísticas en tiempo real** - Carriles ocupados/libres  
✅ **Podios automáticos** - Top 3 por categoría/evento  
✅ **Prevención de duplicados** - No crea eventos repetidos  
✅ **Exportación a Excel** - Descarga completa de datos  

---

## 🏊 CLUBES PARTICIPANTES

- SPOR (Club Deportivo SPORTLAND)
- FOCA
- SKAL / SKALAR
- ORCA
- INDEP

---

## 📞 SOPORTE

- Sistema 100% offline
- No requiere instalación
- Compatible con Chrome, Firefox, Edge
- Desarrollado para Olimpiadas Río de Oro 2025

---

**🏊‍♂️ ¡Buena suerte en la competencia! 🏊‍♀️**
