"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"
import { X, ZoomIn } from "lucide-react"

const HTMLFlipBook = dynamic(() => import("react-pageflip"), {
  ssr: false,
})

const pages = Array.from({ length: 15 }, (_, i) => `/book/page${i + 1}.jpeg`)

export default function UltraFlipBook() {
  const bookRef = useRef<any>(null)

  const [isMobile, setIsMobile] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [zoomImg, setZoomImg] = useState<string | null>(null)

  // ✅ MOBILE DETECTION (stable + SSR safe)
  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768)
    }

    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  // reset flipbook when device changes (IMPORTANT FIX)
  useEffect(() => {
    setCurrentPage(0)
  }, [isMobile])

  // keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!bookRef.current) return

      if (e.key === "ArrowRight") {
        bookRef.current.pageFlip().flipNext()
      }
      if (e.key === "ArrowLeft") {
        bookRef.current.pageFlip().flipPrev()
      }
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  return (
    <div className="w-full flex flex-col items-center gap-4">

      {/* TOP BAR */}
      <div className="flex items-center justify-between w-full max-w-4xl text-sm text-[#0B1220]/70">

        <span>
          Page <b>{currentPage + 1}</b> / {pages.length}
        </span>

        <div className="w-40 h-1 bg-[#0B1220]/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#124170] transition-all"
            style={{
              width: `${((currentPage + 1) / pages.length) * 100}%`,
            }}
          />
        </div>

      </div>

      {/* BOOK */}
      <div className="relative shadow-2xl overflow-hidden bg-white">

        <HTMLFlipBook
          ref={bookRef}
          width={isMobile ? 340 : 520}
          height={isMobile ? 520 : 680}

          // 🔥 IMPORTANT FIX: mobile = single page feel
          size="fixed"
          showCover={true}
          flippingTime={900}
          drawShadow={true}

          // ✅ THIS IS THE KEY FIX
          usePortrait={isMobile}
          startPage={0}
          mobileScrollSupport={true}

          // optional but improves UX
          maxShadowOpacity={0.5}

          onFlip={(e: any) => setCurrentPage(e.data)}
          className="mx-auto"
        >

          {pages.map((src, i) => (
            <div key={i} className="relative bg-white">

              <img
                src={src}
                alt={`page-${i}`}
                className="w-full h-full object-cover"
              />

              <button
                onClick={() => setZoomImg(src)}
                className="absolute bottom-3 right-3 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition"
              >
                <ZoomIn size={16} />
              </button>

            </div>
          ))}

        </HTMLFlipBook>

      </div>

      {/* MOBILE TIP */}
      {isMobile && (
        <p className="text-xs text-[#0B1220]/50">
          Swipe left/right to navigate
        </p>
      )}

      {/* ZOOM MODAL */}
      {zoomImg && (
        <div
          onClick={() => setZoomImg(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <img
            src={zoomImg}
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
          />

          <button className="absolute top-5 right-5 text-white">
            <X size={28} />
          </button>
        </div>
      )}

    </div>
  )
}