@echo off
title Money Harvest Website Server
echo ========================================================
echo         Starting Money Harvest (Vite + React)
echo ========================================================
echo.
cd /d "%~dp0"
echo Opening in default browser at http://localhost:3000 ...
start http://localhost:3000
npm run dev
pause
