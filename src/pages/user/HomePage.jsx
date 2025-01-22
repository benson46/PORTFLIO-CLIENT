
export function Homepage() {
  return (
    <div className="min-h-screen bg-zinc-900">
       <div className="bg-zinc-900 min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">BENSON B VAROOR</h1>
          <h2 className="text-xl sm:text-2xl font-medium text-blue-400 mb-6">MERN STACK DEVELOPER</h2>
          <p className="text-gray-400 mb-8 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-500 text-white px-8 py-3 rounded hover:bg-blue-600 transition-colors">
              SKILLS
            </button>
            <button className="bg-transparent border border-blue-500 text-blue-500 px-8 py-3 rounded hover:bg-blue-500 hover:text-white transition-colors">
              RESUME
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oQPb4G4wehpxIUlcDF2NSMsZkzma6S.png"
              alt="Profile"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}


