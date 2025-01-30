import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-500 transition duration-300"
          >
            MediConnect
          </Link>
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="md:flex items-center hidden">
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link href="/" className="my-1 text-gray-700 hover:text-blue-500 md:mx-4 md:my-0">
              Home
            </Link>
            <Link href="/doctors" className="my-1 text-gray-700 hover:text-blue-500 md:mx-4 md:my-0">
              Find Doctors
            </Link>
            <Link href="/about" className="my-1 text-gray-700 hover:text-blue-500 md:mx-4 md:my-0">
              About Us
            </Link>
            <Link href="/contact" className="my-1 text-gray-700 hover:text-blue-500 md:mx-4 md:my-0">
              Contact
            </Link>
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
            <Link
              href="/login"
              className="px-4 py-2 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 mt-2 md:mt-0 md:ml-2 text-white bg-blue-600 rounded hover:bg-blue-500 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

