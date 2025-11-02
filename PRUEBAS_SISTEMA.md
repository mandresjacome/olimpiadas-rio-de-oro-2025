# ✅ CHECKLIST DE PRUEBAS - SISTEMA OLIMPIADAS RÍO DE ORO 2025

**Fecha del evento:** 2 de Noviembre de 2025  
**Última actualización:** 1 de Noviembre de 2025

---

## 📋 **1. INDEX.HTML - CONFIGURACIÓN INICIAL**

### ✅ Verificar Datos Cargados
- [ ] Abrir `index.html`
- [ ] Verificar que hay **9 categorías** cargadas
- [ ] Verificar que hay **27 pruebas** cargadas (3 por categoría)
- [ ] Verificar que hay **96 participantes** cargados
- [ ] Verificar que el panel de ayuda se puede abrir/cerrar (botón "❓ Ayuda")

### ✅ Probar Paginación
- [ ] Tabla de Participantes muestra máximo 10 y botón "Ver todos"
- [ ] Tabla de Pruebas muestra máximo 10 y botón "Ver todos"
- [ ] Tabla de Categorías muestra todas (solo 9)

### ✅ Probar Búsqueda
- [ ] Buscar participante SIN tilde: "nicolas" → debe encontrar "Nicolás"
- [ ] Buscar prueba: "libre" → debe filtrar todas las pruebas de libre
- [ ] Limpiar búsqueda y verificar que vuelve a mostrar todo

### ✅ Probar Edición
- [ ] Hacer clic en "✏️ Editar" en una categoría
- [ ] Cambiar el nombre y guardar
- [ ] Verificar que el cambio se refleja en la tabla
- [ ] Hacer lo mismo con una prueba y un participante

---

## 🎮 **2. CONTROL-PANEL.HTML - GESTIÓN PRINCIPAL**

### ✅ PESTAÑA: 📋 Gestionar Inscripciones

#### Verificar Carga Inicial
- [ ] Abrir `control-panel.html`
- [ ] Debe abrir automáticamente en "Gestionar Inscripciones"
- [ ] Ver que hay inscripciones cargadas (debería haber si usaste el importador)

#### Probar Filtros
- [ ] **Filtro por Categoría:** Seleccionar "BEBES" → solo muestra nadadores de BEBES
- [ ] **Filtro por Prueba:** Seleccionar "25M Badeo" → solo muestra inscritos en esa prueba
- [ ] **Filtro por Heat:** Seleccionar "Heat 1" → solo muestra nadadores del heat 1
- [ ] **Buscar Nadador:** Escribir "alanna" → debe encontrar "Alanna Ramirez Toloza"
- [ ] **Filtro por Estado:** Seleccionar "Sin heat/carril asignado" → muestra solo sin asignar
- [ ] **Limpiar filtros:** Volver a "Todas" y verificar que muestra todo

#### Probar Separadores de Heat
- [ ] Filtrar por una prueba que tenga múltiples heats (ej: 25M Badeo)
- [ ] Verificar que aparecen separadores verdes "🏊 HEAT 1 - BEBES - 25M Badeo"
- [ ] Verificar que los nadadores están agrupados por heat

#### Probar Edición de Heat/Carril
- [ ] Seleccionar un heat diferente en el dropdown (debe tener opciones 1-20)
- [ ] Seleccionar un carril diferente en el dropdown (debe tener opciones 1-6)
- [ ] Hacer clic en "✅ Guardar"
- [ ] Verificar mensaje de éxito
- [ ] Recargar filtros y verificar que el cambio se guardó

#### Probar Eliminar Inscripción
- [ ] Hacer clic en "🗑️" en una inscripción
- [ ] Confirmar eliminación
- [ ] Verificar que desaparece de la tabla

### ✅ MODAL: ➕ Nueva Inscripción

#### Abrir Modal
- [ ] Hacer clic en botón "➕ Nueva Inscripción"
- [ ] Verificar que se abre modal flotante con fondo oscuro
- [ ] Verificar botón "×" para cerrar

#### PASO 1: Seleccionar Prueba
- [ ] **Seleccionar prueba existente:**
  - [ ] Elegir una prueba del dropdown
  - [ ] Ingresar número de heat (dropdown 1-20)
  - [ ] Hacer clic en "Siguiente ➡️"
  
- [ ] **Crear prueba nueva:**
  - [ ] Hacer clic en "➕ Crear Nueva Prueba"
  - [ ] Escribir categoría (ej: "INFANTIL A")
  - [ ] Escribir nombre de prueba (ej: "50M Espalda")
  - [ ] Hacer clic en "✅ Crear y Usar esta Prueba"
  - [ ] Ingresar heat número 1
  - [ ] Siguiente

#### PASO 2: Asignar Nadadores a Carriles
- [ ] Verificar que muestra 6 carriles (1-6)
- [ ] **Asignar nadador existente:**
  - [ ] Seleccionar nadador del dropdown en Carril 1
  - [ ] Verificar que no permite duplicados (mismo nadador en 2 carriles)
  
- [ ] **Agregar nuevo nadador:**
  - [ ] Seleccionar "➕ Agregar nuevo nadador..." en Carril 2
  - [ ] Escribir nombre completo
  - [ ] Escribir club (opcional)
  - [ ] Seleccionar género (M/F)
  - [ ] Hacer clic en "✅ Agregar"
  - [ ] Verificar que se agrega al carril

- [ ] Dejar algunos carriles vacíos (3, 4, 5, 6)
- [ ] Hacer clic en "Siguiente ➡️"

#### PASO 3: Digitar Tiempos
- [ ] Verificar que muestra solo los nadadores asignados (1 y 2)
- [ ] **Nadador 1:**
  - [ ] Ingresar tiempo: 25.50
  - [ ] Dejar estado en "OK"
  
- [ ] **Nadador 2:**
  - [ ] Ingresar tiempo: 30.20
  - [ ] Cambiar estado a "DQ"
  
- [ ] Hacer clic en "Siguiente ➡️"

#### PASO 4: Guardar
- [ ] Verificar resumen de datos
- [ ] Hacer clic en "💾 Guardar y Continuar"
- [ ] Verificar mensaje de éxito
- [ ] Verificar que el modal se cierra automáticamente
- [ ] Verificar que aparecen las nuevas inscripciones en la tabla

#### Cerrar Modal con ×
- [ ] Abrir modal nuevamente
- [ ] Hacer clic en "×" para cerrar
- [ ] Verificar que el modal se cierra sin guardar

---

### ✅ PESTAÑA: ⏱️ Digitar Tiempos

#### Seleccionar Prueba y Heat
- [ ] Hacer clic en pestaña "⏱️ Digitar Tiempos"
- [ ] **Seleccionar Categoría:** Elegir "BEBES"
- [ ] **Seleccionar Prueba:** Elegir "25M Badeo" (debe filtrarse por categoría)
- [ ] **Seleccionar Heat:** Elegir "Heat 2" (debe mostrar solo heats con nadadores)
- [ ] Hacer clic en "🔄 Cargar Nadadores"

#### Verificar Tabla
- [ ] Verificar que muestra todos los nadadores del heat ordenados por carril
- [ ] Columnas: Carril | Nadador | Club | Tiempo (seg) | Estado
- [ ] Carril en grande y verde

#### Digitar Tiempos Masivamente
- [ ] **Nadador Carril 1:**
  - [ ] Tiempo: 15.50
  - [ ] Estado: OK
  
- [ ] **Nadador Carril 2:**
  - [ ] Tiempo: (dejar vacío)
  - [ ] Estado: DNS
  
- [ ] **Nadador Carril 3:**
  - [ ] Tiempo: 18.20
  - [ ] Estado: OK
  
- [ ] **Nadador Carril 4:**
  - [ ] Tiempo: 22.10
  - [ ] Estado: DQ
  
- [ ] **Nadador Carril 5:**
  - [ ] Tiempo: 16.30
  - [ ] Estado: OK
  
- [ ] **Nadador Carril 6:**
  - [ ] Tiempo: 17.80
  - [ ] Estado: OK

#### Guardar Todos los Tiempos
- [ ] Hacer clic en "💾 Guardar Todos los Tiempos"
- [ ] Verificar mensaje de éxito: "✅ ¡Tiempos guardados exitosamente! 6 resultados guardados"
- [ ] Verificar que la tabla se recarga con los tiempos guardados
- [ ] Cambiar un tiempo y volver a guardar (debe actualizar, no duplicar)

#### Probar Validaciones
- [ ] Poner Estado "OK" pero sin tiempo → debe dar error
- [ ] Poner tiempo inválido (ej: "abc") → debe dar error
- [ ] Poner tiempo negativo → debe dar error

---

### ✅ PESTAÑA: 🔧 Administrar Resultados

#### Filtrar Resultados
- [ ] Hacer clic en pestaña "🔧 Administrar Resultados"
- [ ] Debe cargar TODOS los resultados existentes
- [ ] **Filtrar por Categoría:** Seleccionar "BEBES"
- [ ] **Filtrar por Prueba:** Seleccionar "25M Badeo"
- [ ] Verificar que filtra correctamente

#### Verificar Títulos de Heat
- [ ] Sin filtro de prueba: Título debe ser "🏊 HEAT 1 - BEBES" o "🏊 HEAT 1"
- [ ] Con filtro de una prueba: Título debe ser "🏊 HEAT 1 - 25M Badeo"
- [ ] Verificar separadores verdes entre heats

#### Verificar Orden de Columnas
- [ ] Verificar orden: **Nadador | Categoría | Prueba | Heat | Carril | Tiempo | Estado | Posición | Acciones**
- [ ] Nadador debe estar primero (en negrita)

#### Editar Resultado
- [ ] Hacer clic en "✏️ Editar" en un resultado
- [ ] Verificar que aparece modo edición
- [ ] **Cambiar Carril:** Dropdown debe tener opciones 1-6
- [ ] **Cambiar Tiempo:** Modificar tiempo
- [ ] **Cambiar Estado:** Cambiar entre OK/DQ/DNS/DNF
- [ ] Hacer clic en "💾 Guardar"
- [ ] Verificar que actualiza correctamente

#### Cancelar Edición
- [ ] Hacer clic en "✏️ Editar" en otro resultado
- [ ] Hacer cambios
- [ ] Hacer clic en "❌ Cancelar"
- [ ] Verificar que NO se guardan los cambios

#### Eliminar Resultado
- [ ] Hacer clic en "🗑️" en un resultado
- [ ] Confirmar eliminación
- [ ] Verificar que desaparece de la tabla

#### Botones Horizontales
- [ ] Verificar que los botones "✏️ Editar" y "🗑️" están LADO A LADO (no apilados)
- [ ] Lo mismo en modo edición: "💾 Guardar" y "❌ Cancelar" lado a lado

---

## 📊 **3. PUBLIC-VIEW.HTML - VISTA PÚBLICA**

### ✅ Verificar Visualización
- [ ] Abrir `public-view.html`
- [ ] Verificar que carga todos los resultados
- [ ] Verificar que hay separadores de heat
- [ ] Verificar que muestra posiciones (🏅 1°, 🏅 2°, 🏅 3°)

### ✅ Probar Filtros
- [ ] **Filtro por Categoría:** Seleccionar una categoría
- [ ] **Filtro por Prueba:** Seleccionar una prueba (debe filtrarse por categoría)
- [ ] **Filtro por Heat:** Seleccionar un heat
- [ ] Verificar que los filtros funcionan en cascada

### ✅ Verificar Posiciones
- [ ] Las posiciones deben calcularse por prueba (no por heat)
- [ ] Solo nadadores con estado "OK" tienen posición
- [ ] Nadadores DQ/DNS/DNF no tienen posición
- [ ] En caso de empate, ambos deben tener la misma posición

### ✅ Botón Recargar
- [ ] Hacer clic en "🔄 Recargar Resultados"
- [ ] Verificar que actualiza los datos

---

## 🔗 **4. NAVEGACIÓN ENTRE PÁGINAS**

### ✅ Desde Index
- [ ] Clic en "📋 Dashboard" → vuelve a index.html
- [ ] Clic en "🎮 Panel de Control" → va a control-panel.html
- [ ] Clic en "📊 Ver Resultados" → va a public-view.html

### ✅ Desde Control Panel
- [ ] Clic en "📋 Dashboard" → va a index.html
- [ ] Clic en "📊 Ver Resultados" → va a public-view.html
- [ ] Navegación entre pestañas (Gestionar/Digitar/Administrar) funciona

### ✅ Desde Public View
- [ ] Clic en "🏠 Inicio" → va a INICIO.html
- [ ] Clic en "⚙️ Admin" → va a index.html

---

## 🎯 **5. PRUEBAS DE INTEGRIDAD DE DATOS**

### ✅ LocalStorage
- [ ] Abrir Consola del Navegador (F12)
- [ ] Ir a Application → Local Storage
- [ ] Verificar que existen:
  - [ ] `participants` (96 participantes)
  - [ ] `categories` (9 categorías)
  - [ ] `events` (27 pruebas)
  - [ ] `entries` (inscripciones creadas)
  - [ ] `results` (resultados guardados)

### ✅ No Duplicados
- [ ] Crear una inscripción para un nadador en una prueba/heat
- [ ] Intentar crear otra inscripción del MISMO nadador en la MISMA prueba/heat
- [ ] Debe dar error o advertencia

### ✅ Persistencia
- [ ] Crear una inscripción
- [ ] Cerrar el navegador
- [ ] Volver a abrir `control-panel.html`
- [ ] Verificar que la inscripción sigue ahí

---

## ⚠️ **6. PRUEBAS DE ERRORES Y VALIDACIONES**

### ✅ Campos Vacíos
- [ ] Intentar guardar inscripción sin seleccionar prueba → debe dar error
- [ ] Intentar guardar tiempo OK sin digitar tiempo → debe dar error
- [ ] Intentar guardar con carril 0 → debe permitir (sin asignar)

### ✅ Límites
- [ ] Verificar que Heat solo permite hasta 20
- [ ] Verificar que Carril solo permite hasta 6
- [ ] Verificar que no permite números negativos

### ✅ Sin Conexión (LocalStorage)
- [ ] Apagar internet
- [ ] Verificar que el sistema sigue funcionando (todo es local)
- [ ] Crear inscripciones y tiempos
- [ ] Volver a conectar internet
- [ ] Verificar que todo sigue funcionando

---

## 📱 **7. PRUEBAS DE DISEÑO RESPONSIVO**

### ✅ Tamaños de Pantalla
- [ ] Probar en pantalla completa (1920x1080)
- [ ] Probar reduciendo ventana a tablet (768px)
- [ ] Probar en móvil (375px)
- [ ] Verificar que tablas tienen scroll horizontal si es necesario
- [ ] Verificar que botones no se apilan incorrectamente

### ✅ Impresión
- [ ] Abrir `public-view.html`
- [ ] Ctrl+P (Vista previa de impresión)
- [ ] Verificar que se ve bien para imprimir

---

## 🚀 **8. SIMULACIÓN DEL DÍA DEL EVENTO**

### ✅ Flujo Completo
1. [ ] **ANTES DEL EVENTO:**
   - Verificar que están los 96 nadadores
   - Verificar que están las 27 pruebas
   - Verificar que hay inscripciones creadas (si usaste importador)

2. [ ] **DURANTE EL EVENTO:**
   - Ir a "⏱️ Digitar Tiempos"
   - Seleccionar BEBES → 25M Badeo → Heat 1
   - Digitar tiempos de los 6 nadadores
   - Guardar
   - Repetir para Heat 2
   - Ir a "📊 Ver Resultados" (public-view.html)
   - Verificar que se ven las posiciones correctamente

3. [ ] **CORRECCIÓN DE ERROR:**
   - Ir a "🔧 Administrar Resultados"
   - Buscar un nadador
   - Editar su tiempo
   - Guardar
   - Verificar en vista pública que la posición se actualiza

4. [ ] **NUEVA INSCRIPCIÓN DE ÚLTIMO MOMENTO:**
   - Ir a "📋 Gestionar Inscripciones"
   - Clic en "➕ Nueva Inscripción"
   - Crear inscripción para nadador que llegó tarde
   - Agregar nuevo nadador si no existe
   - Digitar su tiempo inmediatamente
   - Verificar que aparece en resultados

---

## ✅ **CHECKLIST FINAL PRE-EVENTO**

### Un día antes (1 de Noviembre):
- [ ] Hacer backup completo del sistema
- [ ] Exportar LocalStorage desde navegador
- [ ] Tener USB de respaldo con todos los archivos
- [ ] Probar en la laptop que usarás el día del evento
- [ ] Verificar que funciona sin internet
- [ ] Imprimir lista de participantes por categoría

### Día del evento (2 de Noviembre):
- [ ] Cargar sistema en laptop principal
- [ ] Cargar sistema en laptop de respaldo
- [ ] Tener power bank o conexión eléctrica asegurada
- [ ] Tener acceso rápido a control-panel.html (bookmark)
- [ ] Tener public-view.html proyectado en pantalla grande
- [ ] Personal capacitado en cómo digitar tiempos

---

## 🆘 **SOLUCIÓN RÁPIDA A PROBLEMAS COMUNES**

### Si aparece "db is not defined":
- Verificar que `js/database.js` está en la carpeta correcta
- Refrescar la página (F5)

### Si no se guardan los datos:
- Verificar que el navegador permite LocalStorage
- Ir a Configuración → Privacidad → permitir cookies de sitios locales

### Si se ven datos viejos:
- Ctrl + Shift + R (refrescar sin caché)

### Si el modal no se cierra:
- Hacer clic en el fondo oscuro
- Presionar ESC
- Refrescar página si es necesario

---

## 📞 **CONTACTO DE SOPORTE**

- **GitHub Copilot**: Disponible para asistencia en desarrollo
- **Documentación**: Ver archivos .md en la carpeta del proyecto

---

**¡ÉXITO EN LAS OLIMPIADAS RÍO DE ORO 2025! 🏊‍♂️🏅**
