import { renderMockup, type MockupType } from "./ScreenshotMockups";

interface ScreenshotFrameProps {
  type: "phone" | "browser";
  caption: string;
  alt: string;
  mockupType?: MockupType;
  imagePath?: string;
}

export default function ScreenshotFrame({ type, caption: _caption, alt, mockupType, imagePath }: ScreenshotFrameProps) {
  const content = imagePath ? (
    <img
      src={imagePath}
      alt={alt}
      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
      loading="lazy"
      decoding="async"
    />
  ) : mockupType ? (
    renderMockup(mockupType)
  ) : (
    renderMockup("generic")
  );

  return (
    <div className="flex flex-col items-center gap-3 my-8 group">
      {type === "phone" ? (
        <div
          className="relative shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
          style={{
            width: 260,
            borderRadius: 36,
            border: "10px solid #1a1a2e",
            background: "#1a1a2e",
            boxShadow: "0 0 0 1px #333, 0 24px 60px rgba(0,0,0,0.45), inset 0 0 0 1px #444",
            overflow: "hidden",
          }}
          role="img"
          aria-label={alt}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: 90,
              height: 26,
              background: "#1a1a2e",
              borderRadius: "0 0 16px 16px",
              zIndex: 10,
            }}
          />
          <div
            style={{
              height: 480,
              borderRadius: 26,
              overflow: "hidden",
              background: "#f9fafb",
            }}
          >
            {content}
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 10,
              left: "50%",
              transform: "translateX(-50%)",
              width: 80,
              height: 4,
              background: "#fff",
              borderRadius: 2,
              opacity: 0.3,
            }}
          />
        </div>
      ) : (
        <div
          className="relative w-full max-w-2xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]"
          style={{
            borderRadius: 10,
            border: "1px solid #d1d5db",
            overflow: "hidden",
            background: "white",
            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          }}
          role="img"
          aria-label={alt}
        >
          <div style={{ minHeight: 320, maxHeight: 460, overflow: "hidden" }}>
            {content}
          </div>
        </div>
      )}
      <span className="sr-only">{alt}</span>
    </div>
  );
}
