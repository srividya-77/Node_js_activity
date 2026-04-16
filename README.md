# 🎓 Smart Student Profile

A clean, professional React.js application to manage student profiles with Supabase as the cloud backend.

---

## ✨ Features

- 📋 Browse all student profiles in a responsive card grid
- 👤 Click any student to view their full profile
- ✏️ Edit student details via a pre-filled form
- ☁️ Save updates directly to Supabase in real-time

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js (Vite) |
| Styling | Tailwind CSS |
| Backend / DB | Supabase (PostgreSQL) |

---

## 📁 Project Structure

```
Node_js_activity/
├── README.md
├── docs/
│   ├── setup.md               # Local dev setup
│   ├── supabase-setup.md      # DB table & seed data
│   ├── project-structure.md   # Codebase overview
│   └── user-manual.md         # How to use the app
└── smart-student-profile/
    ├── .env                   # Supabase keys (not committed)
    ├── src/
    │   ├── lib/
    │   │   └── supabaseClient.js
    │   ├── components/
    │   │   ├── StudentList.jsx
    │   │   ├── StudentProfile.jsx
    │   │   └── EditForm.jsx
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

---

## 🚀 Quick Start

```bash
cd smart-student-profile
npm install
npm run dev
```

Full setup → [docs/setup.md](docs/setup.md)

Supabase setup → [docs/supabase-setup.md](docs/supabase-setup.md)

User manual → [docs/user-manual.md](docs/user-manual.md)

---

## ⚙️ Environment Variables

Create a `.env` file in `smart-student-profile/`:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> Get these from your Supabase dashboard → Settings → API

---

## 📄 License

MIT
