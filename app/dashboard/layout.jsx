import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarIcon, UserIcon, SearchIcon, LogOutIcon, LayoutDashboardIcon } from "lucide-react"

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">MediConnect</h2>
        </div>
        <nav className="mt-6">
          <Link
            href="/dashboard"
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
          >
            <LayoutDashboardIcon className="w-5 h-5 mr-2" />
            Dashboard
          </Link>
          <Link
            href="/dashboard/appointments"
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
          >
            <CalendarIcon className="w-5 h-5 mr-2" />
            Appointments
          </Link>
          <Link
            href="/dashboard/find-doctor"
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
          >
            <SearchIcon className="w-5 h-5 mr-2" />
            Find a Doctor
          </Link>
          <Link
            href="/dashboard/profile"
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
          >
            <UserIcon className="w-5 h-5 mr-2" />
            My Profile
          </Link>
        </nav>
        <div className="absolute bottom-0 w-64 p-4">
          <Button
            variant="outline"
            className="w-full hover:bg-red-100 hover:text-red-600 transition-colors duration-200"
          >
            <LogOutIcon className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  )
}

