@echo off
echo ========================================================
echo  Starting Zohaib Tariq Portfolio - FastAPI Backend
echo ========================================================
cd /d "%~dp0backend"
python -m uvicorn main:app --host 127.0.0.1 --port 8000 --reload
pause
