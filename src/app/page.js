"use client"; // 需要保留

import Image from "next/image";
import avatarImg from"@/../public/avatar.jpg"; // avatarImg 仍未使用
import heartImg from"@/../public/heart.png";
import Link from "next/link";
import { useState } from "react";
import Image14 from"@/image/14.png";


export default function Home() {
  const [heart, setHeart] = useState(0);
  const addHeart =function(){ setHeart(heart+1); }

  // 定義連結
  const aboutUrl = "/about";
  const instagramUrl = "https://www.instagram.com/wooper_house?igsh=MTMxNXpxZzR2bWltag%3D%3D&utm_source=qr";
  const behanceUrl = "https://www.behance.net/8ab16535?fbclid=PAZXh0bgNhZW0CMTEAAaeNuOADEbpqK9TzUo-fMnLbmJRO8GZuucngDFMb5BW3F6IVcGYuA4JVWEOIKA_aem_r_3kzRJUlOfhnVJ_Ruj-sw";
  const emailUrl = "mailto:wooperhouse@gmail.com";

  return (
    // 使用 React Fragment 包裹兩個 div
    <>
      {/* Header Bar */}
      <div className="w-screen h-screen overflow-y-auto  overflow-hidden  bg-[linear-gradient(to_bottom,#d7ecea_60%,#97cac4)] z-50">

        <div className=" fixed  z-50 bg-red-600 text-white bottom-0 left-0 right-0 h-16          
        flex flex-row items-center justify-around px-4  sm:fixed top sm:right-20 sm:left-auto sm:bottom-auto sm:top-0 sm:h-65 
        sm:w-16 sm:bg-red-600 sm:flex sm:flex-col sm:items-start sm:pt-37 sm:gap-y-1 sm:z-50"> 
            <Link href={aboutUrl} title="關於我">
              <span className=" inline-block scale-y-140 text-white font-extrabold hover:opacity-80 transition-colors -ml-3 ">START</span>
            </Link>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" title="Instagram">
                <span className=" inline-block scale-y-140 text-white font-extrabold hover:opacity-80 transition-colors -ml-3">IG</span>
            </a>
            <a href={behanceUrl} target="_blank" rel="noopener noreferrer" title="Behance">
                <span className=" inline-block scale-y-140 text-white font-extrabold hover:opacity-80 transition-colors -ml-3">BE</span>
            </a>
            <a href={emailUrl} title="Email">
                <span className="inline-block scale-y-140 text-white font-extrabold hover:opacity-80 transition-colors sm:ml-6 text-xl sm:-translate-y-1.5">@</span>
            </a>
        </div>
        <div className=" fixed top w-screen h-screen overflow-y-auto ">

          {/* 第一張 Image 14 */}
          <Image
              src={Image14}
              alt="首頁主視覺圖 1" // 修改 alt
                 // <-- 設定固定高度 (範例)
              priority
              className="  " // 固定尺寸 + 響應式縮小
          />
          <div className="h-[1000px] w-full rounded flex items-center justify-center mt-6">
            <p>尚未完成。</p>
          </div>

           
          

          {/* 愛心計數器或其他內容可以放在這裡 */}

      </div>
    </div>
      
    </>
  );
}
//<div className="pt-20 cursor-pointer flex flex-col justify-center items-center" // 添加 pt-20 (範例)
//onClick={addHeart}
//>
 // <Image src={heartImg} className="w-[68px]" alt="heart"/>
 // <div className=" text-2xl ">{heart}</div>
//</div>