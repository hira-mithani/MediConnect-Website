"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useForm } from "../hooks/useForm"

const validateSignup = (values) => {
  const errors = {}
  if (!values.name) {
    errors.name = "Name is required"
  }
  if (!values.email) {
    errors.email = "Email is required"
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid"
  }
  if (!values.password) {
    errors.password = "Password is required"
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters"
  }
  if (!values.role) {
    errors.role = "Role selection is required"
  }
  return errors
}

export default function SignUp() {
  const router = useRouter()
  const [signupSuccess, setSignupSuccess] = useState(false)

  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm(
    { name: "", email: "", password: "", role: "" },
    validateSignup,
  )

  const onSubmit = async (values) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Always simulate successful signup
    console.log("Signup successful", values)
    setSignupSuccess(true)

    // Redirect to login page after 2 seconds
    setTimeout(() => {
      router.push("/login")
    }, 2000)
  }

  if (signupSuccess) {
    return (
      <div className="max-w-md mx-auto mt-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Sign Up Successful!</h1>
        <p>Redirecting to login page...</p>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
      <form onSubmit={(e) => handleSubmit(e, onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>
        <div>
          <label className="block mb-1">Role</label>
          <div className="space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="role"
                value="patient"
                checked={values.role === "patient"}
                onChange={handleChange}
                className="mr-2"
              />
              Patient
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="role"
                value="doctor"
                checked={values.role === "doctor"}
                onChange={handleChange}
                className="mr-2"
              />
              Doctor
            </label>
          </div>
          {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
        >
          {isSubmitting ? "Signing up..." : "Sign Up"}
        </button>
      </form>
      <p className="mt-4 text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </p>
    </div>
  )
}

