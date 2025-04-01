export function DeleteModal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-[#1E1E1E] rounded-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-bold text-white mb-4">Delete Project</h2>
          <p className="text-gray-300 mb-6">Are you sure you want to delete this project? This action cannot be undone.</p>
          <div className="flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-300 hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  }