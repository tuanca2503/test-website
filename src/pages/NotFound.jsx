// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "70vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      gap: "1rem",
    }}>
      <h1 style={{ fontSize: "5rem", margin: 0 }}>404</h1>
      <p style={{ fontSize: "1.25rem", color: "#666" }}>
        Trang bạn tìm không tồn tại.
      </p>
      <Link
        to="/"
        style={{
          padding: "0.6rem 1.4rem",
          background: "#2563eb",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        Về trang chủ
      </Link>
    </div>
  );
}