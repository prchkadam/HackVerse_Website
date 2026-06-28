import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Favicon, generated via Next's icon.tsx convention rather than
 * referencing a static public/favicon.ico — no such file exists
 * (confirmed during audit: public/ only ever had a logos/
 * directory), and layout.tsx's metadata.icons was pointing at it
 * regardless. This generates a minimal, real icon — the site's
 * signal-teal dot mark used in the wordmark logo, on the dark
 * background color — instead of leaving a 404'ing reference in
 * place.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0D12",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            backgroundColor: "#2DD4BF",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
