export default function StudentProfile({ student, onEdit, onBack }) {
  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <button onClick={onBack} className="text-sm text-blue-500 hover:underline mb-6 inline-block">
        ← Back to list
      </button>
      <div className="flex items-center gap-5 mb-6">
        <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-3xl font-bold">
          {student.name.charAt(0)}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{student.name}</h2>
          <p className="text-gray-500">{student.course}</p>
        </div>
      </div>
      <div className="space-y-3 text-gray-700">
        {[
          ['Age', student.age],
          ['Email', student.email],
          ['Roll Number', student.roll_number],
          ['Phone', student.phone],
        ].map(([label, value]) => (
          <div key={label} className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-500">{label}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
      <button
        onClick={onEdit}
        className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition"
      >
        Edit Profile
      </button>
    </div>
  )
}
