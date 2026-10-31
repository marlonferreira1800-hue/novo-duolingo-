# setup-env.ps1 — cria .env local a partir do .env.example SEM expor chaves no chat.
# Uso:  ./scripts/setup-env.ps1
# Depois edite .env e cole sua AI_API_KEY manualmente (nunca commite .env).

$root = Split-Path -Parent $PSScriptRoot
$example = Join-Path $root ".env.example"
$target = Join-Path $root ".env"

if (Test-Path $target) {
  Write-Host ".env já existe — não vou sobrescrever. Edite manualmente se necessário."
  exit 0
}
Copy-Item $example $target
Write-Host "Criado .env a partir de .env.example."
Write-Host "Agora abra .env e preencha:"
Write-Host "  AI_API_KEY=<sua chave>   (server-side only, nunca no Git)"
Write-Host "  SUPABASE_URL / SUPABASE_ANON_KEY (se usar Supabase)"
Write-Host "Verifique: git check-ignore .env  (deve imprimir .env)"
