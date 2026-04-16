import { useState } from 'react'
import StudentList from './components/StudentList'
import StudentProfile from './components/StudentProfile'
import EditForm from './components/EditForm'

export default function App() {
  const [selected, setSelected] = useState(null)
  const [editing, setEditing] = useState(false)

  const handleSave = (updated) => {
    setSelected(updated)
    setEditing(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm px-8 py-4 mb-8">
        <h1
          onClick={() => { setSelected(null); setEditing(false) }}
          className="text-2xl font-bold text-blue-600 cursor-pointer"
        >
          🎓 Smart Student Profile
        </h1>
      </header>
      <main className="px-6 pb-12">
        {!selected && <StudentList onSelect={setSelected} />}
        {selected && !editing && (
          <StudentProfile
            student={selected}
            onEdit={() => setEditing(true)}
            onBack={() => setSelected(null)}
          />
        )}
        {selected && editing && (
          <EditForm
            student={selected}
            onSave={handleSave}
            onCancel={() => setEditing(false)}
          />
        )}
      </main>
    </div>
  )
}
