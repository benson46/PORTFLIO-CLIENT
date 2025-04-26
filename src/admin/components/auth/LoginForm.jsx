import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormInput } from "../ui/FromInput";
import { authService } from "../../api/auth";

export function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/admin/messages");
    }
  }, [navigate]);

  // Validate form fields
  const validateForm = () => {
    let newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email a valid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, and one number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: " " });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const loginResponse = await authService.login(formData);
      console.log(loginResponse)
      if (loginResponse) {
        navigate("/admin/messages");
      }
    } catch (error) {
      setIsSubmitting(false)
      console.error("Login error:", error);
    }
  };

  return (
    <div className="bg-[#1E1E1E] rounded-lg p-8 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        {errors.general && (
          <div className="text-red-500 text-sm mb-4">{errors.general}</div>
        )}

        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#5B9A8B] text-white py-3 rounded-lg hover:bg-[#4A8B7C] transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "Signing In..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
