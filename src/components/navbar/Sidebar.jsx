// src/components/Sidebar.jsx
export default function Sidebar({ filters, onFilterChange }) {
  return (
    <aside className="w-64 bg-white p-6 border-r h-full overflow-auto">
      <h2 className="text-xl font-semibold mb-4 text-indigo-600">Filters</h2>

      {filters.map(f => (
        <div key={f.name} className="mb-6">
          <label htmlFor={f.name} className="block text-sm font-medium mb-1">
            {f.label}
          </label>
          <select
            id={f.name}
            value={f.value}
            onChange={e => onFilterChange(f.name, e.target.value)}
            className="block w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          >
            <option value="">All</option>
            {f.options.map(o => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      ))}
    </aside>
  )
}
