# Project Structure

```
Node_js_activity/
├── README.md                        # Project overview
├── docs/
│   ├── setup.md                     # Local setup instructions
│   ├── supabase-setup.md            # Supabase DB setup & seeding
│   └── project-structure.md         # This file
└── smart-student-profile/           # React application root
    ├── .env                         # Environment variables (not committed)
    ├── index.html
    ├── vite.config.js
    ├── tailwind.config.js
    ├── package.json
    └── src/
        ├── main.jsx                 # React entry point
        ├── App.jsx                  # Root component, routing logic
        ├── index.css                # Tailwind base styles
        ├── lib/
        │   └── supabaseClient.js    # Supabase client initialization
        └── components/
            ├── StudentList.jsx      # Displays list of all students
            ├── StudentProfile.jsx   # Read-only profile view
            └── EditForm.jsx         # Edit form for updating student
```

## Component Responsibilities

| Component | Role |
|---|---|
| `App.jsx` | Manages global state: selected student, edit mode |
| `StudentList.jsx` | Fetches all students from Supabase, renders cards |
| `StudentProfile.jsx` | Shows full profile of selected student |
| `EditForm.jsx` | Pre-filled form, handles update and save to Supabase |
| `supabaseClient.js` | Single Supabase client instance used across the app |

## Data Flow

```
Supabase DB
    ↓ fetch on load
StudentList → click → StudentProfile → click Edit → EditForm → Save → Supabase DB
                                                                    ↓
                                                             refresh profile
```
