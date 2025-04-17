"use client"; // <-- 1. Mark as Client Component

import { useState } from "react"; // <-- 2. Import useState
import Image from "next/image";

// Import images (keep your existing imports)
import avatarImg from "@/../public/avatar.jpg"; // Note: avatarImg seems unused here too
import Painting10 from "@/image/28.png";
import Painting11 from "@/image/29.png";
import Painting12 from "@/image/30.png";
import Painting13 from "@/image/31.png";
import image2Src from "@/image/27.png";

export default function CateKeyvisual() {
  // 3. State for managing the selected image for the lightbox
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open the lightbox with the clicked image
  const openLightbox = (image) => {
    setSelectedImage(image); // The image object itself (contains src, width, height)
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Prevent closing the lightbox when clicking on the image itself
  const handleImageClick = (e) => {
    e.stopPropagation(); // Stop the click event from bubbling up to the background overlay
  };

  return (
    <div className="w-full h-400 sm:h-full bg-white flex flex-col justify-start items-center sm:overflow-y-auto py-12 px-8"> {/* Use min-h-screen */}

      {/* --- Section 1: 藝術季視覺設計 --- */}
      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-bold text-[#1c4f53]">主視覺設計</h1>
        <h3 className="text-[#1c4f53]">藝術季視覺設計</h3>
      </div>

      {/* 4. Make the image clickable */}
      <div
        className="mt-3 w-full max-w-4xl cursor-pointer group" // Limit max width for display, add cursor & group
        onClick={() => openLightbox(image2Src)} // Pass the imported image object
      >
        <Image
          src={image2Src}
          alt="藝術季視覺設計 1" // Use descriptive alt text
          width={2100} // Keep original dimensions for next/image optimization
          height={2970}
          className="w-full h-auto rounded  transition-opacity duration-300 group-hover:opacity-85" // Make display responsive, add hover effect
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px" // Example sizes prop
        />
      </div>

      {/* --- Section 2: 插畫帳視覺設計 --- */}
      <div className="flex flex-col w-full mt-10">
        <h3 className="text-[#1c4f53]">插畫帳視覺設計</h3>
      </div>

      {/* Make the image clickable */}
      <div
        className="mt-3 w-full max-w-4xl cursor-pointer group"
        onClick={() => openLightbox(Painting10)}
      >
        <Image
          src={Painting10}
          alt="插畫帳視覺設計"
          width={2100}
          height={2970}
          className="w-full h-auto rounded  transition-opacity duration-300 group-hover:opacity-85"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
        />
      </div>

      {/* --- Section 3: 密室逃脫視覺設計 --- */}
      <div className="flex flex-col w-full mt-10">
        <h3 className="text-[#1c4f53] mb-2">密室逃脫視覺設計</h3>
      </div>

      {/* Make the image clickable */}
      <div
        className="mt-3 w-full max-w-4xl cursor-pointer group"
        onClick={() => openLightbox(Painting13)}
      >
        <Image
          src={Painting13}
          alt="密室逃脫視覺設計"
          width={2100}
          height={2970}
          className="w-full h-auto rounded  transition-opacity duration-300 group-hover:opacity-85"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
        />
      </div>

      {/* --- Section 4: 藝術季視覺設計 (重複?) --- */}
      <div className="flex flex-col w-full mt-10">
        <h3 className="text-[#1c4f53] mb-2">藝術季視覺設計</h3>
      </div>

      {/* Make the image clickable */}
      <div
        className="mt-3 w-full max-w-4xl cursor-pointer group"
        onClick={() => openLightbox(Painting11)}
      >
        <Image
          src={Painting11}
          alt="藝術季視覺設計 2"
          width={2100}
          height={2970}
          className="w-full h-auto rounded  transition-opacity duration-300 group-hover:opacity-85"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
        />
      </div>

      {/* --- Section 5: 狗才樂團視覺設計 --- */}
      <div className="flex flex-col w-full mt-10">
        <h3 className="text-[#1c4f53] mb-2">狗才樂團視覺設計</h3>
      </div>

      {/* Make the image clickable */}
      <div
        className="mt-3 w-full max-w-4xl cursor-pointer group"
        onClick={() => openLightbox(Painting12)}
      >
        <Image
          src={Painting12}
          alt="狗才樂團視覺設計"
          width={2100}
          height={2970}
          className="w-full h-auto rounded  transition-opacity duration-300 group-hover:opacity-85"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
        />
      </div>


      {/* --- 6. Lightbox Modal --- */}
      {/* Conditionally render the lightbox only when selectedImage is not null */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-[100] p-4 cursor-pointer" // High z-index
          onClick={closeLightbox} // Click background to close
        >
          {/* Image container: limit size and prevent closing when clicking the image */}
          <div
            className="relative w-auto h-auto max-w-[90vw] max-h-[90vh] overflow-hidden" // Limit max size
            onClick={handleImageClick} // Prevent event propagation
          >
            <Image
              src={selectedImage} // Display the selected image object
              alt="放大檢視"
              // Provide original dimensions for optimization reference
              width={selectedImage.width}
              height={selectedImage.height}
              // Crucial: Use CSS to make the image fit the container, maintaining aspect ratio
              className="object-contain w-auto h-auto max-w-full max-h-full block rounded"
            />
            {/* Optional: Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 text-red-600 rounded-full p-1 text-2xl leading-none z-[101]" // Adjusted style
              aria-label="關閉圖片檢視器"
            >
              &times; {/* Multiplication sign as close icon */}
            </button>
          </div>
        </div>
      )}

    </div> // End of the main container div
  );
}