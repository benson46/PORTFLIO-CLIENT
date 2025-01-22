import React, { useState } from "react"
import { FormInput } from "../ui/FromInput"
import { Github } from "lucide-react"
import { login } from "../../services/Auth"

export function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await login(formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="bg-[#1E1E1E] rounded-lg p-8 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          required
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 rounded border-gray-300 text-[#5B9A8B] focus:ring-[#5B9A8B]"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-300">
              Remember me
            </label>
          </div>
          <a href="/forgot-password" className="text-sm text-[#5B9A8B] hover:text-[#4A8B7C]">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-[#5B9A8B] text-white py-3 rounded-lg hover:bg-[#4A8B7C] transition-colors"
        >
          Sign In
        </button>
      </form>
    </div>
  )
}