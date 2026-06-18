import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded ${isActive ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-3 flex items-center gap-2">
        <span className="font-bold text-lg mr-4">TrackHire</span>
        <NavLink to="/board" className={linkClass}>
          Board
        </NavLink>
        <NavLink to="/stats" className={linkClass}>
          Stats
        </NavLink>
        <NavLink to="/settings" className={linkClass}>
          Settings
        </NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout