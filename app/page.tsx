export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#000",
        gap: "16px",
      }}
    >
      <p
        style={{
          color: "#fff",
          fontSize: "clamp(2rem, 8vw, 5rem)",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          margin: 0,
        }}
      >
        SZL
      </p>
      <p
        style={{
          color: "#888",
          fontSize: "clamp(0.85rem, 2.5vw, 1.1rem)",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          margin: 0,
        }}
      >
        Stay tuned&hellip; something&apos;s sizzling.
      </p>
    </main>
  );
}
