import Image from "next/image";

import avatarImg from"@/../public/avatar.jpg";
import resumeImg from"@/../public/resume-1.png";
import resumeImg2 from"@/../public/resume-2.png";

import image1Src from "@/../public/resume-1.png";

export default function About() {
  return (
    // 修改 flex 容器的排列方式，例如改為縱向 (flex-col) 並增加間距 (gap)
    <div className="w-full  h- 100 sm:h-full   bg-white flex flex-col justify-start items-center sm:overflow-y-auto py-12 px-8"> {/* 範例：改為縱向排列，增加間距 */}

      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-bold text-[#1c4f53]">自傳</h1>
      </div>

      {/* 第一張圖片 */}
      <Image
        src={image1Src} // 使用靜態引入的圖片來源
        alt="第一張圖片的描述文字" // 請替換成有意義的描述
        width={2100}         // 請填入 image1.png 的實際寬度 (像素)
        height={2970}        // 請填入 image1.png 的實際高度 (像素)
        // 可以添加 className 或 style 來做額外樣式設定
        // className="rounded-lg shadow-md"
      />

      {/* 第二張圖片 */}
      <Image
        src="/resume-2.png" // 使用相對 public 資料夾的路徑字串
        alt="第二張圖片的描述文字" // 請替換成有意義的描述
        width={2100}         // 請填入 image2.png 的實際寬度 (像素)
        height={2970}        // 請填入 image2.png 的實際高度 (像素)
        // priority // 如果這張圖片很重要，可以考慮加上 priority 屬性優先載入
      />

    </div>

    
  );
}
