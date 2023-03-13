import { Autoplay, Navigation, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import CreativeSpeakers from "../../../../CreativeSpeakers/CreativeSpeakers";
import speakerData from "../../../../CreativeSpeakers/SpeakersData";
import { UpSpeakersWrapper } from "./style";

export default function Slider() {
    return (
        <>
            <UpSpeakersWrapper>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    cardsEffect={{ slideShadows: true }}
                    allowSlideNext={true}
                    loop={true}
                    navigation={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper" >
                    {(
                        speakerData.map(item => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <CreativeSpeakers
                                        imag={item.imag}
                                        name={item.name}
                                        job={item.jop}
                                        alt={item.alt} />
                                </SwiperSlide>
                            )
                        })
                    )}
                </Swiper>
            </UpSpeakersWrapper>
        </>
    )
}
