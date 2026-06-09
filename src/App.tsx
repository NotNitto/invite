import { Pic, Slide1, Slide2, Slide3, Slide4 } from "./assets/img";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background:
          "linear-gradient(-60deg,rgba(31, 0, 49, 1) 0%, rgba(197, 107, 230, 1) 50%, rgba(58, 17, 228, 1) 100%)",
        minWidth: "300px",
        minHeight: "100vh",
      }}>
      <h1 style={{ marginTop: "50vh" }}>Приглашение</h1>
      <h1 style={{ marginTop: "50vh", marginBottom: "50vh" }}>на</h1>
      <img
        src={Pic}
        style={{
          objectFit: "contain",
          alignSelf: "center",
          justifySelf: "center",
          maxHeight: "100vh",
          minWidth: "300px",
          maxWidth: "95vw",
          paddingBottom: "25vh",
        }}
        alt="pic1"
        title="Приглашение"
      />
      <h1>Гости</h1>

      <h2>Александр "Жених" Кириллов</h2>
      <h2>Максим "Брат" Кириллов</h2>
      <h2>Владислав "Владос" Хроленко</h2>
      <h2>Вячеслав "Хайзенберг" Зотин</h2>
      <h2>Сергей "Удмурт" Авалян</h2>
      <h2>Алексей "Брат Яняши" Авалян</h2>
      <h2>Казик "Мага" Джалавханов</h2>

      <h1 style={{ marginTop: "100px" }}>
        Фото места{" "}
        <span
          style={{
            textDecoration: "line-through 11px double red",
          }}>
          преступления
        </span>{" "}
        проведения
      </h1>
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay, Navigation]}>
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
      <h1 style={{ marginTop: "100px" }}>Место на карте</h1>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          minWidth: "300px",
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
      <h1 style={{ margin: "50vh 0" }}>Ждём</h1>
    </div>
  );
}

export default App;
