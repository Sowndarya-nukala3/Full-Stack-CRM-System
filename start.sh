#!/bin/sh
set -eu
cd "$(dirname "$0")"
if [ ! -f .env ]; then
  umask 077
  printf 'CRM_DB_PASSWORD=%s\nCRM_JWT_SECRET=%s\nCRM_ADMIN_PASSWORD=%s\n' "$(openssl rand -hex 24)" "$(openssl rand -hex 64)" "$(openssl rand -hex 16)" > .env
fi
docker compose up --build -d
printf '\nOpen http://localhost:5173 (demo mode). Live login: admin@example.test\nLocal admin password: '
sed -n 's/^CRM_ADMIN_PASSWORD=//p' .env
printf '\nBackend startup logs: docker compose logs -f backend\n'
