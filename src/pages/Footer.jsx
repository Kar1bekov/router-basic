const Footer = () => {
  return (
    <footer
      style={{
        background: "#000",
        color: "#fff",
        padding: "30px 20px",
        textAlign: "center",
        marginTop: "80px",
      }}
    >
      <p style={{ marginBottom: "10px" }}>
        © 2025 IT Академия
      </p>

      <p style={{ opacity: 0.7 }}>
        Кыргызстан • Онлайн и офлайн обучение
      </p>

      <div style={{ marginTop: "15px" }}>
        <a
          href="https://t.me/karibekovv"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#00dfd8", margin: "0 10px" }}
        >
          Telegram
        </a>
        <a
          href="https://wa.me/996508755599"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#00dfd8", margin: "0 10px" }}
        >
          WhatsApp
        </a>
      </div>
    </footer>
  );
};

export default Footer;
