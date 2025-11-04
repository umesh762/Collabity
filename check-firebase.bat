@echo off
echo ========================================
echo   Collabity - Firebase Connection Check
echo ========================================
echo.
echo This script will help you set up Firebase
echo.

REM Check if .env exists
if not exist ".env" (
    echo [ERROR] .env file not found!
    echo.
    echo Please create a .env file with your Firebase configuration.
    echo You can copy .env.example and fill in your values.
    echo.
    echo Steps:
    echo 1. Copy .env.example to .env
    echo 2. Go to Firebase Console
    echo 3. Get your config values
    echo 4. Paste them in .env file
    echo.
    pause
    exit /b 1
)

echo [OK] .env file found
echo.

REM Check if variables are set
findstr /C:"VITE_FIREBASE_API_KEY=" .env >nul
if errorlevel 1 (
    echo [ERROR] VITE_FIREBASE_API_KEY not found in .env
    pause
    exit /b 1
)

echo [OK] Environment variables found
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo [WARNING] node_modules not found
    echo Installing dependencies...
    echo.
    call npm install
    if errorlevel 1 (
        echo [ERROR] Failed to install dependencies
        pause
        exit /b 1
    )
)

echo [OK] Dependencies installed
echo.

echo ========================================
echo   Firebase Setup Complete!
echo ========================================
echo.
echo Your Firebase is configured and ready to use.
echo.
echo Next steps:
echo 1. Make sure you've enabled Authentication in Firebase Console
echo 2. Make sure you've created a Firestore Database
echo 3. Make sure you've enabled Storage
echo.
echo Starting development server...
echo.
echo Press Ctrl+C to stop the server
echo.

npm run dev
