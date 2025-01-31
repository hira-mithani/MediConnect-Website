import Link from "next/link"
import { FaUserMd, FaCalendarAlt, FaComments } from "react-icons/fa"

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Health, Our Priority</h1>
          <p className="text-xl mb-8">Book appointments with top doctors in your area with ease.</p>
          <Link
            href="/signup"
            className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose MediConnect?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaUserMd className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
              <p className="text-gray-600">
                Access to a wide network of qualified and experienced healthcare professionals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaCalendarAlt className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
              <p className="text-gray-600">Book appointments at your convenience with our user-friendly platform.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaComments className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our dedicated support team is always ready to assist you with any queries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-500 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to prioritize your health?</h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied patients who trust MediConnect for their healthcare needs.
          </p>
          <Link
            href="/signup"
            className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300"
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "MediConnect made it so easy to find a great doctor and book an appointment. Highly recommended!"
              </p>
              <p className="font-semibold">- Sarah Johnson</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "As a doctor, this platform has helped me manage my appointments efficiently. It's a win-win for both
                doctors and patients."
              </p>
              <p className="font-semibold">- Dr. Michael Brown</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
