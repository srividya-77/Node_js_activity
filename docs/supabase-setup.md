# Supabase Setup Guide

## 1. Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and sign in
2. Click **New Project**
3. Fill in project name, database password, and region
4. Wait for the project to be provisioned (~1 min)

## 2. Create the `students` Table

Go to **SQL Editor** in your Supabase dashboard and run:

```sql
create table students (
  id serial primary key,
  name text not null,
  age integer,
  email text,
  course text,
  roll_number text,
  phone text
);
```

## 3. Seed Sample Data

Run this in the SQL Editor to insert sample students:

```sql
insert into students (name, age, email, course, roll_number, phone) values
  ('Alice Johnson', 20, 'alice@example.com', 'Computer Science', 'CS001', '9876543210'),
  ('Bob Smith', 21, 'bob@example.com', 'Mechanical Engineering', 'ME002', '9876543211'),
  ('Carol White', 19, 'carol@example.com', 'Data Science', 'DS003', '9876543212'),
  ('David Brown', 22, 'david@example.com', 'Electrical Engineering', 'EE004', '9876543213'),
  ('Eva Green', 20, 'eva@example.com', 'Computer Science', 'CS005', '9876543214');
```

## 4. Enable Row Level Security (Optional but Recommended)

For public read/write access during development, run:

```sql
alter table students enable row level security;

create policy "Allow all" on students
  for all using (true) with check (true);
```

## 5. Get API Keys

1. Go to **Settings → API** in your Supabase dashboard
2. Copy:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon public key** → `VITE_SUPABASE_ANON_KEY`
3. Paste them into your `.env` file (see [setup.md](./setup.md))
