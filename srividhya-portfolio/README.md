# Srividhya S  Data Analyst Portfolio

A responsive portfolio built with React, TypeScript, Vite and custom CSS, with an Express API for the contact form and optional Supabase/PostgreSQL storage.

## Features

- Midnight navy / ice-blue visual system; Sora headings and Inter body text.
- Dark and light theme toggle (preference saved in local storage).
- Responsive desktop sidebar and mobile navigation.
- Sections: Home, About, Experience, Projects, Skills, Education, Core Competencies and Contact.
- Resume PDF download.
- Project documentation page linked from the Kellanova project card.
- Express contact API with validation and optional Supabase persistence.
- Separate, reusable component and section files.

## Requirements

- Node.js 20 or newer (LTS recommended)
- npm
- Git (optional but recommended)

## 1. Run locally

Open a terminal in the extracted `srividhya-portfolio` folder.

### Start the backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

On Windows PowerShell, use `Copy-Item .env.example .env` instead of `cp`.

The API runs at `http://localhost:4000`. Without Supabase credentials, the health endpoint works but the contact form returns a clear configuration message. Add the Supabase values after creating the database (instructions below).

### Start the frontend

Open a second terminal:

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

On Windows PowerShell, use `Copy-Item .env.example .env`.

Open the local URL printed by Vite, normally `http://localhost:5173`.

## 2. Configure the contact database (Supabase)

1. Create a project at https://supabase.com/.
2. Open the SQL Editor and run `backend/supabase-schema.sql`.
3. Open Project Settings → API and copy the Project URL and service-role key.
4. Put these values in `backend/.env` as `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`.
5. Keep the service-role key only on the backend. Never add it to frontend variables or commit `.env` files.
6. Restart the backend.

## 3. Push to GitHub

Create an empty GitHub repository, then from the project root:

```bash
git init
git add .
git commit -m "Build initial data analyst portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/srividhya-portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## 4. Deploy the frontend to Netlify

1. Push the project to GitHub.
2. Sign in at https://app.netlify.com/ and choose Add new project → Import an existing project.
3. Connect GitHub and select this repository.
4. Set **Base directory** to `frontend`.
5. Set **Build command** to `npm run build`.
6. Set **Publish directory** to `dist`.
7. Add an environment variable named `VITE_API_URL` with your deployed backend URL, for example `https://YOUR-BACKEND.onrender.com`.
8. Deploy. Netlify will rebuild when you push updates to the connected branch.

The `frontend/netlify.toml` file includes the build and single-page-app redirect settings.

## 5. Deploy the backend

Deploy the `backend` folder as a Node web service on a host such as Render:

- Root directory: `backend`
- Build command: `npm install`
- Start command: `npm start`
- Environment variables: `PORT` (host usually sets this), `FRONTEND_ORIGIN` (your Netlify URL), `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`

After deployment, test `https://YOUR-BACKEND/api/health`. Then set Netlify's `VITE_API_URL` to the backend URL and trigger a new frontend deploy.

## 6. Update your content

Most resume-based content is in `frontend/src/data/portfolio.ts`. Update it there. Components are in `frontend/src/components/`, and page sections are in `frontend/src/sections/`.

The Kellanova project documentation is in `frontend/public/docs/kellanova-global-sales-analytics.html` and its Markdown source is in `docs/projects/kellanova-global-sales-analytics.md`.

Add only approved project documents. Do not publish confidential client data, internal dashboards or proprietary documents. Add a project entry in `portfolio.ts` and a corresponding public document in `frontend/public/docs/` to make another project card link work.

## Important notes

- Your email, phone, location and LinkedIn are taken from the uploaded resume. Verify them before publishing.
- The resume did not provide certificate names or URLs, so no certificates are invented or displayed.
- The resume describes one named project. Other project cards are not fabricated.
- The contact form requires a configured backend and Supabase table. The direct email link remains available as a fallback.
- Google Fonts are loaded online; use locally hosted fonts if you need offline font delivery.
