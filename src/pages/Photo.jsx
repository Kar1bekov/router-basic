const Photo = () => {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Жизнь академии</h1>

      <p style={{ maxWidth: "700px", margin: "20px auto" }}>
        Здесь вы можете увидеть, как проходит обучение,
        как студенты работают над проектами и развиваются каждый день.
      </p>

      <p style={{ opacity: 0.7 }}>
        Скоро здесь появятся фотографии и видео 📸🎥
      </p>
      <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LUNJngOd30HT7IPSUAOZa9HrisJ_6HQQbQ&s"
    alt="photo"
    style={{
        border: '2px solid black',
        borderRadius: '10px',
  }}/>
     <img src="https://s0.rbk.ru/v6_top_pics/media/img/4/74/756256715374744.jpg" alt="" 
     style={{

        border: '2px solid black',
        borderRadius: '10px',
        width:'225px',
        height: '225px',
     }}/>
    </div>
  );
};

export default Photo;
