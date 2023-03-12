import { Autoplay, Navigation, Pagination } from "swiper";
import 'swiper/css';
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
                    modules={[Autoplay, Pagination, Navigation]} >
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
