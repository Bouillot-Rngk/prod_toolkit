@echo off
setlocal enabledelayedexpansion

echo Starting deployment process in modules...

if not exist modules (
    echo "modules" folder not found. Exiting.
    exit /b 1
)

for /d %%D in (modules\*) do (
    if /I "%%~nD"=="dist" (
         echo Skipping dist folder: %%D
    ) else (
        if exist "%%D\package.json" (
            echo.
            echo Installing dependencies in module: %%D
            pushd "%%D"
            npm ci
            rem Check if this is the specific module that requires a build step.
            if /I "%%D"=="modules\module-league-champselect-ui" (
                echo Running build for module-league-champselect-ui...
                npm run build
            )
            popd
        ) else (
            echo Skipping %%D because package.json not found.
        )
    )
)

echo.
echo Deployment process completed.
pause
