import { useRef, useState } from 'react'

export const ImageUploader = ({ image, onUpload }) => {
  const fileInputRef = useRef(null)
  const [preview, setPreview] = useState(image)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
        onUpload(file)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="space-y-4">
      <div className="relative group">
        <img
          src={preview}
          alt="Profile preview"
          className="w-full h-48 object-cover rounded-lg border-2 border-gray-700 group-hover:opacity-75 transition-opacity"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="bg-black/50 text-white px-4 py-2 rounded-lg"
          >
            Change Image
          </button>
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
      />
    </div>
  )
}