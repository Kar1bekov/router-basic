import { useState } from "react";

const OurServices = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      title: "💻 Обучение программированию",
      short: "Frontend и Backend с нуля",
      full: `
HTML, CSS, JavaScript, React.
Практика с первого дня.
Реальные проекты.
Поддержка наставников.
      `,
    },
    {
      title: "👨‍🏫 Индивидуальное менторство",
      short: "Персональный подход",
      full: `
Индивидуальные занятия.
Разбор кода и ошибок.
Помощь с проектами.
Карьерные советы.
      `,
    },
    {
      title: "🧠 Практические проекты",
      short: "Работа как в IT-компании",
      full: `
Командная работа.
Реальные задачи.
Проекты для портфолио.
Code review.
      `,
    },
    {
      title: "💼 Подготовка к работе",
      short: "Выход на рынок IT",
      full: `
Создание резюме.
Оформление GitHub.
Подготовка к интервью.
Поиск работы.
      `,
    },
    {
      title: "🌍 Онлайн и офлайн обучение",
      short: "Учись где удобно",
      full: `
Онлайн занятия.
Офлайн классы.
Гибкий график.
Записи уроков.
У нас есть взрослые програмирование.
Детские програмирование.
Крч у нас всё есть.

      `,
    },
    {
      title: "🚀 Поддержка после обучения",
      short: "Мы остаёмся на связи",
      full: `
Помощь выпускникам.
Консультации.
Поддержка с заказами.
Рост после курса.
      `,
    },
  ];

  return (
    <div
      style={{
        padding: "60px 30px",
        color: "white",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Наши услуги
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "25px",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => setActiveService(service)}
            style={{
              background: "#111",
              padding: "25px",
              borderRadius: "18px",
              border: "1px solid #222",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-6px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <h3 style={{ color: "#fff5f8ff" }}>{service.title}</h3>
            <p style={{ opacity: 0.8 }}>{service.short}</p>
          </div>
        ))}
      </div>

      {activeService && (
        <div
          onClick={() => setActiveService(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#111",
              padding: "35px",
              borderRadius: "20px",
              maxWidth: "520px",
              width: "90%",
              border: "1px solid #222",
            }}
          >
            <h2 style={{ color: "#00dfd8" }}>
              {activeService.title}
            </h2>

            <pre
              style={{
                marginTop: "15px",
                whiteSpace: "pre-wrap",
                opacity: 0.85,
                fontFamily: "inherit",
              }}
            >
              {activeService.full}
            </pre>

            <button
              onClick={() => setActiveService(null)}
              style={{
                marginTop: "25px",
                padding: "10px 25px",
                borderRadius: "25px",
                border: "none",
                background: "#00dfd8",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurServices;
