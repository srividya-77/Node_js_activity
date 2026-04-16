import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function StudentList({ onSelect }) {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.from('students').select('*').then(({ data }) => {
      setStudents(data || [])
      setLoading(false)
    })
  }, [])

  if (loading) return <p className="text-center text-gray-500 mt-10">Loading students...</p>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {students.map(s => (
        <div
          key={s.id}
          onClick={() => onSelect(s)}
          className="bg-white rounded-2xl shadow hover:shadow-lg cursor-pointer p-6 border border-gray-100 hover:border-blue-400 transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold">
              {s.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{s.name}</h2>
              <p className="text-sm text-gray-500">{s.course}</p>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500 space-y-1">
            <p>📧 {s.email}</p>
            <p>🎓 Roll No: {s.roll_number}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
