import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "#f8f6ef",
          color: "#202720",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#00b8bf", letterSpacing: 3, marginBottom: 20 }}>
          ARNOLDCODE
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
          Ingeniería para productos de software en producción.
        </div>
        <div style={{ fontSize: 30, marginTop: 28, color: "#5f685f" }}>
          Arquitectura, código y entrega para productos en producción.
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
