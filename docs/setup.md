# Project Setup Guide

## Prerequisites

- Node.js v18+
- npm or yarn
- A Supabase account (free tier works)

## Steps

### 1. Clone / Navigate to the project

```bash
cd Node_js_activity/smart-student-profile
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in `smart-student-profile/`:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> Get these values from your Supabase project dashboard → Settings → API.

### 4. Set up Supabase

Follow [supabase-setup.md](./supabase-setup.md) to create the table and seed sample data.

### 5. Run the app

```bash
npm run dev
```

App will be available at `http://localhost:5173`

## Build for Production

```bash
npm run build
```
