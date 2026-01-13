# --- CONFIGURATION ---
$ToolkitPath = Get-Location
$ModulePath = Join-Path $ToolkitPath "modules"
$TempBackup = Join-Path $ToolkitPath "temp_modules_backup"

$ModulesToRestore = @(
    "module-teams",
    "module-league-champselect-ui",
    "module-league-in-game",
    "module-league-fearless",
    "module-league-end-of-game",
    "module-league-runes",
    "module-league-caster-cockpit",
    "module-league-state"
)

Write-Host "----------------- Prod ToolKit SGN -----------------" -ForegroundColor Cyan
Write-Host "------- Preparation de l'installation du PTK -------" -ForegroundColor Cyan

# 1. Sauvegarde des modules modifiés
Write-Host "[1/6] Sauvegarde des modules modifies..." -ForegroundColor Yellow
if (!(Test-Path $TempBackup)) { New-Item -ItemType Directory -Path $TempBackup }

foreach ($mod in $ModulesToRestore) {
    $currentModPath = Join-Path $ModulePath $mod
    if (Test-Path $currentModPath) {
        $target = Join-Path $TempBackup $mod
        Copy-Item -Path $currentModPath -Destination $target -Recurse -Force
        Write-Host "Sauvegarde de $mod effectuee."
    }
}

# 2. Lancement de l'installateur standard
Write-Host "[2/6] Lancement de install.bat..." -ForegroundColor Yellow
Start-Process -FilePath "cmd.exe" -ArgumentList "/c install.bat" -Wait

# 3. Restauration des modules modifiés
Write-Host "[3/6] Restauration des modifications aux modules..." -ForegroundColor Yellow
foreach ($mod in $ModulesToRestore) {
    $savedMod = Join-Path $TempBackup $mod
    if (Test-Path $savedMod) {
        $destMod = Join-Path $ModulePath $mod
        # On s'assure que le dossier de destination est propre avant de restaurer
        if (Test-Path $destMod) { Remove-Item -Path $destMod -Recurse -Force }
        Copy-Item -Path $savedMod -Destination $destMod -Recurse -Force
        Write-Host "Restauration de $mod terminee."
    }
}

# 4. Installation des dépendances npm spécifiques
Write-Host "[4/6] Installation npm (Champselect & Teams)..." -ForegroundColor Yellow
foreach ($target in @("module-league-champselect-ui", "module-teams")) {
    $path = Join-Path $ModulePath $target
    if (Test-Path $path) {
        Set-Location $path
        npm install
        Set-Location $ToolkitPath
    }
}

# 5. Build du module Champselect
Write-Host "[5/6] Compilation de Champselect UI..." -ForegroundColor Yellow
$csPath = Join-Path $ModulePath "module-league-champselect-ui"
if (Test-Path $csPath) {
    Set-Location $csPath
    npm run build
    Set-Location $ToolkitPath
}

# 6. Nettoyage et Lancement
if (Test-Path $TempBackup) { Remove-Item -Path $TempBackup -Recurse -Force }
Write-Host "[6/6] Installation terminee. Lancement de run.bat..." -ForegroundColor Green

Write-Host ""
Write-Host "Appuyez sur ENTREE pour lancer le Prod ToolKit et fermer cette fenetre..." -ForegroundColor Magenta
Read-Host

Start-Process -FilePath "cmd.exe" -ArgumentList "/c run.bat"