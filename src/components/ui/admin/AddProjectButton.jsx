export function AddProjectButton({ onClick }) {
  return (
    <button 
      className="bg-[#5B9A8B] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-[#4A8B7C] transition-colors w-full md:w-auto text-sm md:text-base"
      onClick={onClick}
    >
      ADD PROJECT
    </button>
  )
}