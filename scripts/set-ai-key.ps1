# set-ai-key.ps1 — configura AI_API_KEY no .env de forma segura.
# A chave é lida com SecureString (mascarada) e nunca aparece em logs/histórico.
# Rode manualmente:  ./scripts/set-ai-key.ps1

$root = Split-Path -Parent $PSScriptRoot
$envPath = Join-Path $root ".env"

$secureKey = Read-Host "mstrl_ERKT78LLUGABVpDXhdkLqx6C4YMX8Ycb_0fitr1" -AsSecureString
$ptr = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($secureKey)
$plainKey = [System.Runtime.InteropServices.Marshal]::PtrToStringBSTR($ptr)
[System.Runtime.InteropServices.Marshal]::ZeroFreeBSTR($ptr)

if (-not $plainKey) { Write-Host "Chave vazia — abortando."; exit 1 }

$provider = Read-Host "Provedor (openai/anthropic/custom) [openai]"
if (-not $provider) { $provider = "openai" }

$model = Read-Host "Modelo [gpt-4o-mini]"
if (-not $model) { $model = "gpt-4o-mini" }

$lines = @(
  "AI_PROVIDER=$provider"
  "AI_API_KEY=$plainKey"
  "AI_MODEL=$model"
  "AI_LIVE_ENABLED=true"
  "AI_MAX_OUTPUT_TOKENS=1200"
  "AI_DAILY_COST_CENTS=100"
)

# Merge com .env existente (preserva outras vars como SUPABASE_*)
if (Test-Path $envPath) {
  $existing = Get-Content $envPath | Where-Object { $_ -notmatch '^AI_' }
  $lines = $existing + $lines
} else {
  # copia base do .env.example primeiro
  Copy-Item (Join-Path $root ".env.example") $envPath -Force
  $existing = Get-Content $envPath | Where-Object { $_ -notmatch '^AI_' }
  $lines = $existing + $lines
}

Set-Content -Path $envPath -Value $lines -Encoding UTF8
$plainKey = $null  # limpa da memoria
Write-Host "✅ AI_API_KEY configurada em .env (git-ignored). Verifique: git check-ignore .env"
Write-Host "⚠️  Revogue a chave antiga que vazou no chat!"
