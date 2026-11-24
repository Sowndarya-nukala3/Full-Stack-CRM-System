# CRM Workspace
A full-stack CRM portfolio adaptation combining a new React/Vite interface with the MIT-licensed Spring Boot CRM backend by Mateusz Milewczyk ([upstream](https://github.com/agiklo/CRM-System)). Original copyright and license retained in LICENSE and backend/LICENSE. The frontend was created with AI assistance; the original backend is not original work by the portfolio author.

## Quick start (Mac)
Install Docker Desktop and open it. From this folder run `./start.sh` (or `sh start.sh`). The first build downloads dependencies. Open http://localhost:5173. Demo mode uses fictional browser-local records; Live API mode uses PostgreSQL and JWT. Sign in with `admin@example.test` and the generated password printed by the script. Wait for backend startup; inspect `docker compose logs -f backend` if needed. The database starts empty apart from the local admin. The original SQL scripts are reference material, not automatically imported.

Stop with `docker compose down`. Database data persists in a named volume. Keep `.env` private; changing its admin password does not reset an existing account. Do not expose this legacy application publicly without a security review and dependency upgrades.

## Frontend only
`cd frontend && npm install && npm run dev` then open http://localhost:5173. No database needed for demo mode.

## Structure
- frontend: React UI, dashboard, demo records, API client, JSON record editor
- backend: Java 8 / Spring Boot 2.4, REST controllers, JWT, SQL scripts, original tests
- compose.yaml: local PostgreSQL, backend and frontend orchestration
- start.sh: local secret generation and startup

## Verification and limitations
The integration is configured for local development, not certified production-ready. Live CRUD, login, exports and database initialization require runtime testing. Some upstream DTOs omit IDs and related-entity operations require valid JSON payloads. Email activation needs separate SMTP configuration. Demo records do not sync to the database. Upstream dependencies are legacy. See backend/UPSTREAM-README.md for original documentation.

## Publish to GitHub
Create an empty repository (no initial README). From this root run:
```
git init
git add .
git status
git commit -m "Integrate React CRM workspace with Spring Boot backend"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/crm-workspace.git
git push -u origin main
```
Review staged files for secrets before committing. Retain upstream attribution. Describe your actual contributions and test results in interviews.
