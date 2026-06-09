import { useEffect, useState } from "react";
import { Pic, Slide1, Slide2, Slide3, Slide4 } from "./assets/img";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function App() {
  const [buttonIsShown, setButtonIsShown] = useState(true);

  useEffect(() => {
    if (buttonIsShown) document.body.style.setProperty("overflow", "hidden");
    else document.body.style.setProperty("overflow", "auto");
  }, [buttonIsShown]);

  return (
    <>
      {buttonIsShown ? (
        <div
          style={{
            zIndex: 10,
            position: "fixed",
            display: "flex",
            width: "100%",
            height: "100%",
            backgroundColor: "#000c",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <div
            onClick={() => setButtonIsShown(false)}
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "red",
              animation:
                "shake1 2s cubic-bezier(0.45, 0.05, 0.55, 0.95) 0s infinite alternate",
            }}></div>
        </div>
      ) : (
        <></>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          //backgroundColor: "#781FEDaa",
          background:
            "linear-gradient(-45deg,rgba(6, 2, 16, 1) 0%, rgba(197, 107, 230, 1) 50%, rgba(58, 17, 228, 1) 100%)",
          minWidth: "300px",
          minHeight: "100vh",
        }}>
        <h1>Приглашение</h1>
        <h1>на</h1>
        <img
          src={Pic}
          style={{
            objectFit: "contain",
            alignSelf: "center",
            justifySelf: "center",
            maxHeight: "100vh",
            minWidth: "300px",
            maxWidth: "100vw",
          }}
          alt="pic1"
        />
        <h1>Гости</h1>

        <h2>Александр "Жених" Кириллов</h2>
        <h2>Максим "Брат" Кириллов</h2>
        <h2>Владислав "Владос" Хроленко</h2>
        <h2>Вячеслав "Хайзенберг" Зотин</h2>
        <h2>Сергей "Удмурт" Авалян</h2>
        <h2>Алексей "Брат Яняши" Авалян</h2>
        <h2>Казик "Мага" Джалавханов</h2>

        <h1>Фото с места проведения</h1>
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}>
          <SwiperSlide
            style={{
              background: `url(${Slide1}) 50% 50% / contain no-repeat`,
              alignSelf: "center",
            }}
          />
          <SwiperSlide
            style={{
              background: `url(${Slide2}) 50% 50% / contain no-repeat`,
              alignSelf: "center",
            }}
          />
          <SwiperSlide
            style={{
              background: `url(${Slide3}) 50% 50% / contain no-repeat`,
              alignSelf: "center",
            }}
          />
          <SwiperSlide
            style={{
              background: `url(${Slide4}) 50% 50% / contain no-repeat`,
              alignSelf: "center",
            }}
          />
        </Swiper>
        <h1>Место на карте</h1>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            width: "90vw",
            height: "50vh",
          }}>
          <iframe
            title="Место проведения"
            src="https://yandex.ru/map-widget/v1/?ll=41.051050%2C57.003922&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjE4MjI3MBJF0KDQvtGB0YHQuNGPLCDQmNCy0LDQvdC-0LLQviwg0J3QvtCy0LPQvtGA0L7QtNGB0LrQsNGPINGD0LvQuNGG0LAsIDI1IgoNRzQkQhUDBGRC&z=17.11"
            width="100%"
            height="100%"
            frameBorder={1}
            allowFullScreen={true}
            style={{ position: "relative" }}></iframe>
        </div>
        <h1>Ждём</h1>
      </div>
    </>
  );
}

export default App;
