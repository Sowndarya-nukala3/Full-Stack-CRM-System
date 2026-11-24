# CRM Workspace frontend
New React/Vite frontend for the supplied agiklo CRM-System Spring Boot backend. Original backend is not modified.

## Run on macOS
Install Node.js 22 LTS or newer from nodejs.org. Open this folder in VS Code, open Terminal and run `npm install` then `npm run dev`. Open the localhost URL printed by Vite (usually http://localhost:5173). Demo mode starts immediately; demo changes are saved in browser localStorage. All demo records are fictional.

## Live backend
Start the original Spring Boot project with a configured database and dev profile (port 8081). The frontend development proxy forwards /api and /login to that port. For production profile port 8080, create `.env.local` with `CRM_BACKEND_URL=http://localhost:8080` and restart Vite. Select Live API and enter a valid backend employee username/password. JWT is read from the Authorization response header and kept in memory. Backend roles determine permissions. Do not deploy the development proxy publicly. For deployment configure a same-origin reverse proxy and HTTPS.

## Integration notes
List endpoints use /api/v1 and pageable parameters. The original comments mapping is unusually `/api/v1posts/comments/{id}` (missing slash after v1); the frontend intentionally uses that exact mapping. Customer and absence list DTOs omit record IDs; editing/deleting customers or deleting absences requires a verified ID from the backend. Employee creation/editing, department editing and purchase editing are not exposed by the supplied controllers. The record editor is a JSON editor, not a fully validated business form. Nested entities, enum values, dates and required fields must match the Java entities; inspect the backend before submitting live writes. Export buttons are live only. Dashboard counts are first-page counts (up to 100), not totals. Search filters the displayed page. No live backend/database or browser build test was performed in the creation environment. Run `npm run build` after installing dependencies to verify the frontend build locally.

Original backend attribution: agiklo/CRM-System. This frontend is newly generated and is not a recovered original frontend.
