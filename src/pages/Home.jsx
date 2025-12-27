import { useState, useEffect } from "react";

const Home = () => {
  const [started, setStarted] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Ты хочешь войти в IT? Мы покажем путь.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!started) {
    return (
      <div
        style={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
          {text}
        </h1>

        <button
          onClick={() => setStarted(true)}
          style={{
            marginTop: "30px",
            padding: "12px 30px",
            fontSize: "18px",
            borderRadius: "30px",
            border: "none",
            background: "#00dfd8",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Начать путь →
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "80px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "44px" }}>IT Академия</h1>

      <p style={{ fontSize: "20px", maxWidth: "700px", margin: "20px auto" }}>
        Мы обучаем программированию с нуля и помогаем войти в IT.
        Реальные проекты, практика и поддержка.
      </p>

      <p style={{ opacity: 0.8 }}>
        Frontend • Backend • React • Проекты
      </p>
    </div>
  );
};

export default Home;
