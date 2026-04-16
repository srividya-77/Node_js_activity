import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

const fields = ['name', 'age', 'email', 'course', 'roll_number', 'phone']

export default function EditForm({ student, onSave, onCancel }) {
  const [form, setForm] = useState({ ...student })
  const [saving, setSaving] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setSaving(true)
    const { data } = await supabase.from('students').update(form).eq('id', student.id).select().single()
    setSaving(false)
    if (data) onSave(data)
  }

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map(field => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-600 mb-1 capitalize">
              {field.replace('_', ' ')}
            </label>
            <input
              name={field}
              value={form[field] || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))}
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 border border-gray-300 text-gray-600 hover:bg-gray-50 font-semibold py-2 rounded-xl transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
