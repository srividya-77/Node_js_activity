# Node_js_activity

A student profile management app backed by Supabase, with setup and usage documentation.

## What it does

The `smart-student-profile` app lets you browse a list of students, view an individual profile, and edit it. The three main views are a student list, a profile detail page, and an edit form. Data is stored in and fetched from a Supabase database.

The `docs` folder contains setup and usage guides:
- `setup.md` — project setup steps
- `supabase-setup.md` — how to configure the Supabase project
- `project-structure.md` — directory layout explanation
- `user-manual.md` — how to use the app

## Built with

- React 19 (frontend)
- Vite (build tool)
- Tailwind CSS (styling)
- Supabase (`@supabase/supabase-js`) (database and backend)

## How to run

```bash
cd Node_js_activity/smart-student-profile
npm install
```

Create a `.env` file with your Supabase project URL and anon key (see `docs/supabase-setup.md`), then:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.
