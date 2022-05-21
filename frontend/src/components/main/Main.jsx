import "./main.css";
import { Swiper, SwiperSlide } from "swiper/react";
import IMG from "../../assets/delivery.png";
import {Pagination,EffectFade,Navigation} from "swiper";
// Import Swiper styles
import "swiper/css";
import styles from "./main.css";


const data = [
  {
    heading: "All Certified Restaurants At One Place",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, pariatur?",
  },
  // {
  //   heading: "All Certified Restaurants At One Place",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, pariatur?",
  // },
  // {
  //   heading: "All Certified Restaurants At One Place",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, pariatur?",
  // },
  // {
  //   heading: "All Certified Restaurants At One Place",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, pariatur?",
  // },
];

const Main = () => {
  return (
    // <div className="main">
    //   <div className="mainWrapper">
    //     <Swiper
    //       modules={[Pagination]}
    //       spaceBetween={0}
    //       slidesPerView={1}
    //       pagination={{ clickable: true }}
    //       className="mySwiper"
    //     >
    //       {data.map(({ heading, text }, index) => {
    //         return (
    //           <SwiperSlide key = {index} className="text">
    //             <h1>{heading}</h1>
    //             <p>{text}</p>
    //           </SwiperSlide>
    //         );
    //       })}
    //     </Swiper>
    //     <div className="img">
    //       <img src={IMG} alt="" />
    //     </div>
    //   </div>
    // </div>

     <div className="x">
       <Swiper
          modules={[Navigation,EffectFade]}
          navigation
          effect
          speed={800}
          slidesPerView={1}
          loop
          className= {styles.myswiper}
       >
      <SwiperSlide className="ab">
        <img src={IMG} alt="" />
      </SwiperSlide >
      <SwiperSlide className="ab">
        <img src={IMG} alt="" />
      </SwiperSlide >
      <SwiperSlide className="ab">
        <img src={IMG} alt="" />
      </SwiperSlide>
       </Swiper>
     </div>

  );
};

export default Main;
