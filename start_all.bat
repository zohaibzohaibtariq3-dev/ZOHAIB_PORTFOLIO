@echo off
echo ========================================================
echo  Launching Zohaib Tariq AI/ML Engineer Portfolio (Full Stack)
echo ========================================================
start "Zohaib Portfolio Backend" cmd /c "start_backend.bat"
start "Zohaib Portfolio Frontend" cmd /c "start_frontend.bat"
echo.
echo Both servers are launching:
echo  - Frontend: http://localhost:5173
echo  - Backend API: http://127.0.0.1:8000
echo  - API Docs: http://127.0.0.1:8000/docs
echo.
