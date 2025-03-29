import { useState } from "react";
import { Menu, X } from "lucide-react";
import { authService } from "../../services/auth";
import { NavLink, useNavigate } from "react-router-dom";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "MESSAGES", path: "/admin/messages" },
    { name: "PROJECT", path: "/admin/project" },
    { name: "SKILLS", path: "/admin/skills" },
    { name: "PROFILE", path: "/admin/profile" },
  ];


  const logout_admin = async () => {
    const response = await authService.logout();
    console.log(response)
    if (response.success) {
      navigate("/admin");
    }
  };
  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden text-white bg-[#2A2A2A] p-2 rounded-md"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`
        fixed top-0 left-0 h-full w-64 bg-[#1A1A1A] text-white z-40
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:relative
      `}
      >
        <div className="p-6">
          <h1 className="text-xl font-bold mb-8 pt-4 md:pt-0">
            Benson B Varoor
          </h1>
          <nav className="space-y-6">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `block pl-4 py-2.5 rounded-lg transition-all ${
                    isActive 
                      ? "bg-[#2A2A2A] text-white font-semibold border-l-4 border-blue-500"
                      : "text-gray-300 hover:bg-[#2A2A2A] hover:pl-6"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <button
              className="w-full text-left pl-4 py-2.5 rounded-lg text-gray-300 hover:bg-[#2A2A2A] hover:pl-6 transition-all"
              onClick={logout_admin}
            >
              Logout
            </button>
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
