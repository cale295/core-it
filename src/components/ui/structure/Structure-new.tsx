import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Structures.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Structures = () => {
  const card = [
    { id: 1, nama: "Muhammad Ibra Aidil Akbar", posisi: "Ketua", link: "https://www.instagram.com/ibraaidilakbar13?igsh=dzN1bjI5bmJ5eHU3", image: "/img/bph/ibra.png" },
    { id: 2, nama: "Regina Safarina", posisi: "Wakil Ketua", link: "https://www.instagram.com/swtscakee_?igsh=a2U4dzg2eWNiOXo4", image: "/img/bph/safa.png" },
    { id: 3, nama: "Vibra Ayu Karisma", posisi: "Sekretaris 1", link: "https://www.instagram.com/alphagrll_?igsh=enJlZ3Z3OHRkejFl", image: "/img/bph/vibra.png" },
    { id: 4, nama: "Az-zahra Nurfadila Puspita Ayu", posisi: "Sekretaris 2", link: "https://www.instagram.com/azhra_np_?igsh=MW1vc3VzMXVzMWI0NA==", image: "/img/bph/zahra.png" },
    { id: 5, nama: "Aulia Yasmin Maharani", posisi: "Bendahara", link: "https://www.instagram.com/ysmn_.275?igsh=NGJjeHY3ajd0MHU4", image: "/img/bph/yasmin.png" },
    { id: 6, nama: "Muhammad Vargas Cahyadhi", posisi: "Ketua Divisi SE", link: "https://www.instagram.com/vrgascyd?igsh=MTA1bjJlNzYydWFqZg==", image: "/img/bph/vargas.png" },
    { id: 7, nama: "Fauzil Muttaqin", posisi: "Ketua Divisi Sosmed", link: "https://www.instagram.com/fwzlm_?igsh=MXZrOXZucmVqZW1wYg==", image: "/img/bph/fauzil.png" },
  ];

  return (
    <div id='structure' className='bg-slate-950 min-h-screen flex flex-col justify-center items-center'>
      <h1 className='text-white text-6xl lg:text-8xl font-bold'>Structures</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        breakpoints={{
          300:{
            slidesPerView: "auto",
          },
          640: {
            slidesPerView: 2, 
          },
          768: {
            slidesPerView: 'auto', 
          },
          1024: {
            slidesPerView: 'auto', 
          },
          1280: {
            slidesPerView: 5, 
          },
          1536: {
            slidesPerView: 5, 
          },
        }}
      >
        {card.map((item) => (
          <SwiperSlide key={item.id} className="custom-slide">
            <div className="group before:hover:scale-95 before:hover:h-96 before:hover:w-80 before:hover:h-56 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-40 before:rounded-t-2xl before:bg-gradient-to-bl from-blue-500 to-purple-500 before:absolute before:top-0 w-80 h-96 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
              <div className="w-36 h-36 bg-slate-950 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500">
                <img src={item.image} alt={item.nama} className="rounded-full w-full h-full object-cover"/>
              </div>
              <div className="z-10 group-hover:-translate-y-10 transition-all duration-500">
                <span className="text-xl md:text-2xl font-semibold">{item.nama}</span>
                <p>{item.posisi}</p>
              </div>
              <a className="bg-blue-700 px-4 py-2 text-slate-50 rounded-md z-10 h-10 w-32 hover:scale-125 transition-all duration-500 hover:bg-blue-500 " href={item.link}>
                Follow
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Structures;