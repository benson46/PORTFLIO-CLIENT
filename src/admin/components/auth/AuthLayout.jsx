export function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Benson B Varoor</h1>
          <p className="mt-2 text-gray-400">MERN Stack Developer</p>
        </div>
        {children}
      </div>
    </div>
  )
}