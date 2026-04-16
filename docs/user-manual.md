# User Manual — Smart Student Profile

## Overview

Smart Student Profile is a web application that lets you view, browse, and edit student records stored in the cloud. No login required for local development.

---

## Getting Started

1. Open your browser and go to `http://localhost:5173`
2. The app loads and displays all student profiles automatically

---

## Features & How to Use

### 1. Browse Students

- On the home screen, you'll see a grid of student cards
- Each card shows the student's **name**, **course**, and **email**
- Click any card to open the full profile

### 2. View Full Profile

- After clicking a card, the full profile is displayed with:
  - Name, Age, Email
  - Course, Roll Number, Phone
- Click **← Back to list** to return to the student grid

### 3. Edit a Student Profile

- On the profile view, click the **Edit Profile** button
- A form opens pre-filled with the student's current details
- Update any field you want
- Click **Save Changes** to save — data is updated in Supabase instantly
- Click **Cancel** to discard changes and go back to the profile view

### 4. Navigate Back

- Click **🎓 Smart Student Profile** in the top header at any time to return to the home screen

---

## Troubleshooting

| Issue | Fix |
|---|---|
| No students showing | Check Supabase RLS policy — see `docs/supabase-setup.md` |
| Save not working | Verify your `.env` keys are correct |
| App not loading | Make sure `npm run dev` is running |
| Blank page | Check browser console for errors |

---

## Notes

- All data is stored in Supabase (cloud PostgreSQL)
- Changes are saved in real-time — no page refresh needed
- The `.env` file must never be committed to version control
