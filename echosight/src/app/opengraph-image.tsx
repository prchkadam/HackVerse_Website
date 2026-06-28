import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Open Graph image, generated at request time via ImageResponse
 * rather than a static PNG asset — there's no pre-made marketing
 * image to use, and generating one with real code keeps this
 * consistent with how every other "asset" on this site has been
 * handled (real rendered output, not a placeholder file standing in
 * for one that doesn't exist). Colors and type match the site's
 * actual design tokens rather than introducing a one-off palette
 * just for this image.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#0A0D12",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "48px",
          }}
        >
          <span style={{ fontSize: 32, fontWeight: 600, color: "#E7EAEE" }}>
            EchoSight
          </span>
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#2DD4BF",
            }}
          />
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            color: "#E7EAEE",
            lineHeight: 1.15,
            maxWidth: "900px",
          }}
        >
          Know what&apos;s in front of you. The instant you need to.
        </div>
        <div
          style={{
            marginTop: "32px",
            fontSize: 28,
            color: "#8C97A6",
          }}
        >
          AI-powered scene description for blind and low-vision users.
        </div>
      </div>
    ),
    { ...size },
  );
}
