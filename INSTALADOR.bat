@echo off
chcp 65001 >nul
color 0B
title 🏊 Instalador - Sistema Olimpiadas Río de Oro 2025

echo.
echo ════════════════════════════════════════════════════════════
echo    🏊 INSTALADOR - OLIMPIADAS RÍO DE ORO 2025 🏊
echo ════════════════════════════════════════════════════════════
echo.
echo Este script creará un acceso directo en tu escritorio
echo para abrir fácilmente el sistema de gestión de natación.
echo.
echo Presiona cualquier tecla para continuar...
pause >nul

echo.
echo [1/3] Creando acceso directo en el escritorio...

:: Crear archivo VBS temporal para crear el acceso directo
echo Set oWS = WScript.CreateObject("WScript.Shell") > CreateShortcut.vbs
echo sLinkFile = oWS.SpecialFolders("Desktop") ^& "\Olimpiadas Rio de Oro 2025.url" >> CreateShortcut.vbs
echo Set oLink = oWS.CreateShortcut(sLinkFile) >> CreateShortcut.vbs
echo oLink.TargetPath = "%~dp0index.html" >> CreateShortcut.vbs
echo oLink.IconLocation = "%SystemRoot%\System32\SHELL32.dll,43" >> CreateShortcut.vbs
echo oLink.Save >> CreateShortcut.vbs

:: Ejecutar el script VBS
cscript CreateShortcut.vbs >nul

:: Eliminar el archivo VBS temporal
del CreateShortcut.vbs

echo ✓ Acceso directo creado

echo.
echo [2/3] Verificando archivos del sistema...
if exist "index.html" (
    echo ✓ index.html encontrado
) else (
    echo ✗ ERROR: No se encontró index.html
    goto error
)

if exist "js\database.js" (
    echo ✓ Archivos JavaScript encontrados
) else (
    echo ✗ ERROR: Faltan archivos JavaScript
    goto error
)

echo.
echo [3/3] Configuración completada
echo.
echo ════════════════════════════════════════════════════════════
echo    ✅ INSTALACIÓN COMPLETADA EXITOSAMENTE
echo ════════════════════════════════════════════════════════════
echo.
echo Se ha creado un acceso directo en tu escritorio:
echo    📋 "Olimpiadas Rio de Oro 2025"
echo.
echo INSTRUCCIONES DE USO:
echo.
echo 1. Haz doble clic en el acceso directo del escritorio
echo 2. El sistema se abrirá en tu navegador predeterminado
echo 3. Para primera configuración, ve a "🔧 Configuración"
echo 4. Usa "⚡ CONFIGURAR TODO AUTOMÁTICAMENTE" para inicio rápido
echo.
echo IMPORTANTE:
echo • Los datos se guardan en el navegador (LocalStorage)
echo • Haz backups regularmente desde Configuración
echo • Para usar en otro PC, copia toda esta carpeta
echo.
echo ════════════════════════════════════════════════════════════
echo.
echo Presiona cualquier tecla para salir...
pause >nul
exit

:error
echo.
echo ════════════════════════════════════════════════════════════
echo    ❌ ERROR EN LA INSTALACIÓN
echo ════════════════════════════════════════════════════════════
echo.
echo Por favor, asegúrate de ejecutar este archivo desde
echo la carpeta que contiene todos los archivos del sistema.
echo.
pause
exit
