const Photo = () => {
  const photos = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LUNJngOd30HT7IPSUAOZa9HrisJ_6HQQbQ&s",
    "https://s0.rbk.ru/v6_top_pics/media/img/4/74/756256715374744.jpg",
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  ];

  return (
    <div style={{ padding: "60px 20px", textAlign: "center" }}>
      <h1>Жизнь академии</h1>

      <p style={{ maxWidth: "700px", margin: "20px auto", opacity: 0.8 }}>
        Как проходит обучение, практика и командная работа.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "40px auto",
        }}
      >
        {photos.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="academy"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "14px",
              border: "2px solid #000",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Photo;
