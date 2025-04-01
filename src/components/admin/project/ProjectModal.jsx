"use client";

import { useState, useCallback, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useDropzone } from "react-dropzone";

export function ProjectModal({ isOpen, onClose, onSubmit, initialData }) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState([""]);
  const [links, setLinks] = useState({ github1: "", github2: "", live: "" });
  const [crop, setCrop] = useState({
    aspect: 16 / 9,
    width: 100,
    height: 100,
    unit: "%",
    x: 0, // Add initial x value
    y: 0, // Add initial y value
  });
  const [croppedImage, setCroppedImage] = useState(null);
  const [upImg, setUpImg] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  // Initialize form fields when initialData changes
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDetails(initialData.details || [""]);
      setLinks(initialData.links || { github1: "", github2: "", live: "" });
      setCroppedImage(initialData.image || null);
    } else {
      setTitle("");
      setDetails([""]);
      setLinks({ github1: "", github2: "", live: "" });
      setCroppedImage(null);
    }
    setUpImg(null);
  }, [initialData, isOpen]);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    const validTypes = ["image/png", "image/jpeg"];
    if (!validTypes.includes(file.type)) {
      alert("Only PNG and JPG files are allowed.");
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setUpImg(reader.result);
      setCroppedImage(null);
    });
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
    multiple: false,
  });

  const getCroppedImg = async () => {
    try {
      if (!upImg || !crop.width || !crop.height) {
        alert("No image selected or invalid crop");
        return null;
      }

      // Ensure numeric values for calculations
      const safeCrop = {
        x: crop.x || 0,
        y: crop.y || 0,
        width: crop.width,
        height: crop.height,
      };

      const image = new Image();
      image.src = upImg;

      await new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = reject;
      });

      const { width: displayedWidth, height: displayedHeight } =
        imageDimensions;
      const scaleX = image.naturalWidth / displayedWidth;
      const scaleY = image.naturalHeight / displayedHeight;
      const cropX = (safeCrop.x / 100) * displayedWidth;
      const cropY = (safeCrop.y / 100) * displayedHeight;
      const cropWidth = (crop.width / 100) * displayedWidth;
      const cropHeight = (crop.height / 100) * displayedHeight;

      const naturalX = cropX * scaleX;
      const naturalY = cropY * scaleY;
      const naturalWidth = cropWidth * scaleX;
      const naturalHeight = cropHeight * scaleY;

      const canvas = document.createElement("canvas");
      canvas.width = naturalWidth;
      canvas.height = naturalHeight;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(
        image,
        naturalX,
        naturalY,
        naturalWidth,
        naturalHeight,
        0,
        0,
        naturalWidth,
        naturalHeight
      );

      return new Promise((resolve) => {
        canvas.toBlob((blob) => resolve(blob), "image/png");
      });
    } catch (error) {
      console.error("Error cropping image:", error);
      return null;
    }
  };

  const handleAcceptCrop = async () => {
    try {
      const blob = await getCroppedImg();
      if (!blob) return;

      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setCroppedImage(reader.result);
          setUpImg(null);
        }
      };
      reader.onerror = () => {
        alert("Error reading cropped image");
      };
      reader.readAsDataURL(blob);
    } catch (error) {
      console.error("Error in handleAcceptCrop:", error);
      alert("Failed to accept crop. Please try again.");
    }
  };

  const handleDetailChange = (index, value) => {
    const newDetails = [...details];
    newDetails[index] = value;
    setDetails(newDetails);
  };

  const handleAddDetail = () => {
    setDetails([...details, ""]);
  };

  const handleLinkChange = (field, value) => {
    setLinks((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let finalImage = croppedImage || initialData?.image || null;

    if (upImg && !croppedImage) {
      const blob = await getCroppedImg();
      if (blob) {
        finalImage = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(blob);
        });
      }
    }

    const filteredDetails = details.filter((detail) => detail.trim() !== "");
    onSubmit({
      title,
      image: finalImage,
      details: filteredDetails,
      links: {
        github1: links.github1.trim(),
        github2: links.github2.trim(),
        live: links.live.trim(),
      },
      id: initialData?.id || Date.now(),
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-[#1E1E1E] rounded-lg p-6 w-full max-w-2xl max-h-[90vh] flex flex-col">
        <h2 className="text-2xl font-bold text-white mb-6">
          {initialData ? "Edit Project" : "Add Project"}
        </h2>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-[#252525] rounded-lg px-4 py-2 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Project Links</label>
              <div className="space-y-2">
                <input
                  type="url"
                  placeholder="GitHub Repository 1 URL"
                  value={links.github1}
                  onChange={(e) => handleLinkChange("github1", e.target.value)}
                  className="w-full bg-[#252525] rounded-lg px-4 py-2 text-white"
                />
                <input
                  type="url"
                  placeholder="GitHub Repository 2 URL"
                  value={links.github2}
                  onChange={(e) => handleLinkChange("github2", e.target.value)}
                  className="w-full bg-[#252525] rounded-lg px-4 py-2 text-white"
                />
                <input
                  type="url"
                  placeholder="Live Demo URL"
                  value={links.live}
                  onChange={(e) => handleLinkChange("live", e.target.value)}
                  className="w-full bg-[#252525] rounded-lg px-4 py-2 text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Image</label>
              <div className="space-y-4">
                <div
                  {...getRootProps()}
                  className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center cursor-pointer hover:border-[#5B9A8B] transition-colors"
                >
                  <input {...getInputProps()} />
                  <p className="text-gray-400">
                    Drag & drop an image here, or click to select
                  </p>
                </div>

                {croppedImage ? (
                  <div className="relative aspect-[16/9]">
                    <img
                      src={croppedImage}
                      alt="Cropped preview"
                      className="rounded-lg w-full h-full object-cover"
                    />
                    <p className="text-gray-400 text-sm mt-2 text-center">
                      Cropped Preview
                    </p>
                  </div>
                ) : upImg ? (
                  <div className="relative max-w-[500px] mx-auto space-y-2">
                    <ReactCrop
                      crop={crop}
                      onChange={(newCrop) => setCrop({ ...crop, ...newCrop })}
                      aspect={16 / 9}
                      ruleOfThirds
                      onImageLoaded={(img) => {
                        setImageDimensions({
                          width: img.offsetWidth,
                          height: img.offsetHeight,
                        });
                      }}
                    >
                      <img
                        src={upImg}
                        alt="Upload preview"
                        style={{ maxHeight: "300px", width: "auto" }}
                        onLoad={(e) => {
                          setImageDimensions({
                            width: e.target.offsetWidth,
                            height: e.target.offsetHeight,
                          });
                        }}
                      />
                    </ReactCrop>
                    <button
                      type="button"
                      onClick={handleAcceptCrop}
                      className="bg-[#5B9A8B] text-white px-4 py-2 rounded-lg hover:bg-[#4A8B7C] w-full"
                    >
                      Accept Crop
                    </button>
                  </div>
                ) : (
                  initialData?.image && (
                    <div className="relative aspect-[16/9]">
                      <img
                        src={initialData.image}
                        alt="Current"
                        className="rounded-lg w-full h-full object-cover"
                      />
                      <p className="text-gray-400 text-sm mt-2 text-center">
                        Current Image
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Details</label>
              <div className="space-y-2">
                {details.map((detail, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <input
                      type="text"
                      value={detail}
                      onChange={(e) =>
                        handleDetailChange(index, e.target.value)
                      }
                      className="flex-1 bg-[#252525] rounded-lg px-4 py-2 text-white"
                    />
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() =>
                          setDetails(details.filter((_, i) => i !== index))
                        }
                        className="text-red-500 hover:text-red-400 px-2"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddDetail}
                  className="text-[#5B9A8B] hover:text-[#4A8B7C] mt-2"
                >
                  Add Detail +
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-4 pt-4 bg-[#1E1E1E] sticky bottom-0">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-300 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#5B9A8B] text-white px-6 py-2 rounded-lg hover:bg-[#4A8B7C]"
            >
              {initialData ? "Save Changes" : "Add Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
