"use client"; // <-- 1. 標記為 Client Component

import { useState } from "react"; // <-- 2. 導入 useState
import Image from "next/image";

// 導入所有需要顯示的圖片
import Painting1 from "@/image/19.png";
import Painting2 from "@/image/20.png";
import Painting3 from "@/image/21.png";
import Painting4 from "@/image/22.png";
import Painting5 from "@/image/23.png";
import Painting6 from "@/image/24.png";
import Painting7 from "@/image/25.png";
import Painting8 from "@/image/26.png";

// avatarImg 在此元件似乎未使用，可以移除
// import avatarImg from "@/../public/avatar.jpg";

export default function CateWeb() {
  // 3. State 管理：null 表示沒有選中圖片 (Lightbox 關閉)
  const [selectedImage, setSelectedImage] = useState(null);

  // 打開 Lightbox 的函數
  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  // 關閉 Lightbox 的函數
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // 阻止點擊圖片時關閉 Lightbox
  const handleImageClick = (e) => {
    e.stopPropagation(); // 阻止事件冒泡到父層的 onClick (也就是背景)
  };

  return (
    // 建議使用 min-h-screen 讓內容可擴展
    <div className="w-full  h- 100 sm:h-full bg-white flex flex-col justify-start items-center sm:overflow-y-auto  py-12 px-6 ">

      {/* --- Section 1: 商品設計 --- */}
      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-bold text-[#1c4f53]">插畫</h1>
        <h3 className="text-[#1c4f53]">其餘插畫</h3>
      </div>

      {/* --- 圖片格線 1 --- */}
      {/* 4. 修改圖片顯示方式，並加上 onClick */}
      <div className="flex flex-col w-full gap-4 mt-3">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4 h-[33vh]">
          {/* Image 1 */}
          <div
            className="sm:col-span-2 rounded-xs relative overflow-hidden cursor-pointer group bg-gray-200" // group 用於 hover 效果
            onClick={() => openLightbox(Painting6)} // 點擊打開 Lightbox
          >
            <Image
              src={Painting6}
              alt="Painting 1"
              fill // 使用 fill 配合父層 relative 來填滿容器
              className="object-cover transition-opacity duration-300 group-hover:opacity-80" // object-cover 類似 background-size: cover
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw" // 優化圖片載入
            />
          </div>
          {/* Image 2 */}
          <div
            className="rounded-xs relative overflow-hidden cursor-pointer group bg-gray-200"
            onClick={() => openLightbox(Painting5)}
          >
            <Image src={Painting5} alt="Painting 2" fill className="object-cover transition-opacity duration-300 group-hover:opacity-80" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"/>
          </div>
        </div>
        {/* Row 2 */}
        <div className="grid grid-cols-2 w-full gap-4 h-[33vh]">
          {/* Image 3 */}
          <div
            className="rounded-xs relative transition-opacity cursor-pointer group bg-gray-200"
            onClick={() => openLightbox(Painting7)}
          >
             <Image src={Painting7} alt="Painting 3" fill className="object-cover transition-transform duration-300 group-hover:opacity-80" sizes="(max-width: 1024px) 50vw, 33vw"/>
          </div>
          {/* Image 4 */}
          <div
            className="rounded-xs relative transition-opacity cursor-pointer group bg-gray-200"
            onClick={() => openLightbox(Painting8)}
         >
            <Image src={Painting8} alt="Painting 4" fill className="object-cover transition-transform duration-300 group-hover:opacity-80" sizes="(max-width: 1024px) 50vw, 33vw"/>
          </div>
        </div>
      </div>

      {/* --- Section 2: 藝術季 --- */}
      <div className="flex flex-col w-full mt-12">
        <h3 className="text-[#1c4f53]">logo : logo與文字設計</h3>
      </div>
      {/* --- 圖片格線 2 --- */}
      <div className="flex flex-col w-full gap-4 mt-3">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4 h-[33vh]">
           {/* Image 6 */}
           <div
            className="sm:col-span-2 rounded-xs relative overflow-hidden cursor-pointer group bg-gray-200"
            onClick={() => openLightbox(Painting1)}
          >
             <Image src={Painting1} alt="Painting 6" fill className="object-cover transition-opacity duration-300 group-hover:opacity-80" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw"/>
          </div>
           {/* Image 5 */}
           <div
            className="rounded-xs relative overflow-hidden cursor-pointer group bg-gray-200"
            onClick={() => openLightbox(Painting2)}
          >
             <Image src={Painting2} alt="Painting 5" fill className="object-cover transition-opacity duration-300 group-hover:opacity-80" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"/>
          </div>
        </div>
         {/* Row 2 */}
        <div className="grid grid-cols-2 w-full gap-4 h-[33vh]">
           {/* Image 7 */}
           <div
            className="rounded-xs relative overflow-hidden cursor-pointer group bg-gray-200"
            onClick={() => openLightbox(Painting3)}
         >
             <Image src={Painting3} alt="Painting 7" fill className="object-cover transition-opacity duration-300 group-hover:opacity-80" sizes="(max-width: 1024px) 50vw, 33vw"/>
          </div>
           {/* Image 8 */}
           <div
            className="rounded-xs relative overflow-hidden ㄌcursor-pointer group bg-gray-200"
            onClick={() => openLightbox(Painting4)}
         >
             <Image src={Painting4} alt="Painting 8" fill className="object-cover transition-opacity duration-300 group-hover:opacity-80" sizes="(max-width: 1024px) 50vw, 33vw"/>
          </div>
        </div>
      </div>

      {/* --- 6. Lightbox Modal --- */}
      {/* 只有當 selectedImage 不是 null 時才渲染 */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-[100] p-4 cursor-pointer" // 使用高 z-index 確保在最上層
          onClick={closeLightbox} // 點擊背景關閉
        >
          {/* 圖片容器：限制最大尺寸，並阻止點擊圖片本身時關閉 Lightbox */}
          <div
            className="relative w-auto h-auto max-w-[90vw] max-h-[90vh] overflow-y-auto" // 限制最大寬高為視窗的 90%
            onClick={handleImageClick} // 阻止事件冒泡
          >
            <Image
              src={selectedImage} // 顯示選中的圖片物件
              alt="放大檢視"
              // 提供圖片原始寬高給 next/image 做優化參考
              width={selectedImage.width}
              height={selectedImage.height}
              // 關鍵：用 CSS 確保圖片縮放以適應容器，保持比例
              className="object-contain w-auto h-auto max-w-full max-h-full block rounded "
            />
             {/* 可選的關閉按鈕 */}
             <button
                onClick={closeLightbox}
                className="absolute top-2 right-2 text-red-600 hover:scale-105 rounded-full p-1 text-xl leading-none" // 調整樣式
                aria-label="關閉圖片檢視器"
             >
                &times; {/* 乘號作為關閉圖示 */}
             </button>
          </div>
        </div>
      )}

    </div> // 最外層 Div 結束
  );
}