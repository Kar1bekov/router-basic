const Contacts = () => {
  return (
    <div style={{ padding: "60px", textAlign: "center" }}>
      <h1>Контакты</h1>

      <p style={{ fontSize: "18px" }}>📍 Ул Жомарата Боконбаева 162</p>
      <p style={{ fontSize: "18px" }}>📧 itacademy@gmail.com</p>
      <p style={{ fontSize: "18px" }}>💬 Связаться с нами</p>

      <div style={{ marginTop: "25px" }}>

        <a
          href="https://t.me/karibekovv"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            margin: "0 10px",
            padding: "12px 30px",
            fontSize: "18px",
            fontWeight: "bold",
            borderRadius: "30px",
            textDecoration: "none",
            background: "#0088cc",
            color: "#fff",
          }}
        >
          Telegram
        </a>

        <a
          href="https://wa.me/996508755599"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            margin: "0 10px",
            padding: "12px 30px",
            fontSize: "18px",
            fontWeight: "bold",
            borderRadius: "30px",
            textDecoration: "none",
            background: "#25D366",
            color: "#fff",
          }}
        >
          WhatsApp
        </a>

        <a 
        href="https://www.instagram.com/_k1bk0v"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            margin: "0 10px",
            padding: "12px 30px",
            fontSize: "18px",
            fontWeight: "bold",
            borderRadius: "30px",
            textDecoration: "none",
            background: "rgba(228, 12, 236, 1)",
            color: "#fff",
          }}
        >Instagram</a>
      </div>

      <p style={{ marginTop: "30px", opacity: 0.7 }}>
        Мы всегда открыты для связи
      </p>
    </div>
  );
};

export default Contacts;
