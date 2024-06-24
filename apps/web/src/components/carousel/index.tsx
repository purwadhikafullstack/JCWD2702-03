'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

export const SimpleSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="text-center font-bold text-black">
        <Image
          src={'/1.jpg'}
          alt="logo"
          className="w-[100vw] h-[500px] object-cover"
          width={10000}
          height={10000}
        />
      </div>
      <div>
        <Image
          src={'/2.jpg'}
          alt="logo"
          className="w-[100vw] h-[500px] object-cover"
          width={10000}
          height={10000}
        />
      </div>
      <div>
        <Image
          src={'/3.jpg'}
          alt="logo"
          className="w-[100vw] h-[500px] object-cover"
          width={10000}
          height={10000}
        />
      </div>
      <div>
        <Image
          src={'/6.png'}
          alt="logo"
          className="w-[100vw] h-[500px] object-cover"
          width={10000}
          height={10000}
        />
      </div>
    </Slider>
  );
};
