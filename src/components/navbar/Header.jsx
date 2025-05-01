// src/components/Header.jsx
export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-indigo-600">Silk</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/"        className="hover:underline">Home</a></li>
          <li><a href="/saved"   className="hover:underline">Saved Jobs</a></li>
          <li><a href="/profile" className="hover:underline">Profile</a></li>
          <li><a href="/settings"className="hover:underline">Settings</a></li>
        </ul>
      </nav>
    </header>
  )
}