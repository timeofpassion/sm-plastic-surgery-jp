import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "에스엠성형외과 SM Plastic Surgery";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #1e3a5f 0%, #0f1f38 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 220,
            fontWeight: 900,
            letterSpacing: -8,
            lineHeight: 1,
            display: "flex",
          }}
        >
          SMPS
        </div>
        <div
          style={{
            fontSize: 36,
            marginTop: 32,
            opacity: 0.9,
            letterSpacing: 2,
            display: "flex",
          }}
        >
          SM美容外科医院
        </div>
        <div
          style={{
            fontSize: 24,
            marginTop: 18,
            opacity: 0.7,
            letterSpacing: 1,
            display: "flex",
          }}
        >
          에스엠성형외과 · 韓国 江南
        </div>
      </div>
    ),
    { ...size }
  );
}
