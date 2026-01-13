import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pimg1 from "/public/images/clients/akarat.png";
import pimg2 from "/public/images/clients/zerod.png";
import pimg3 from "/public/images/clients/eklil.png";
import pimg4 from "/public/images/clients/swag.png";
import pimg5 from "/public/images/clients/trinity.png";
import pimg6 from "/public/images/clients/famizo-1.png";
import pimg7 from "/public/images/clients/afamia.webp";
import pimg8 from "/public/images/clients/HalaWonen-Logo.png";
import pimg9 from "/public/images/clients/proton.png";
import pimg10 from "/public/images/clients/straw.png";
import pimg11 from "/public/images/clients/swan.png";
import pimg12 from "/public/images/clients/yacoach.webp";
import Image from "next/image";

const partners = [
  {
    pImg: pimg1,
  },
  {
    pImg: pimg2,
  },
  {
    pImg: pimg3,
  },
  {
    pImg: pimg4,
  },
  {
    pImg: pimg5,
  },
  {
    pImg: pimg6,
  },
  {
    pImg: pimg7,
  },
  {
    pImg: pimg8,
  },
  {
    pImg: pimg9,
  },
  {
    pImg: pimg10,
  },
  {
    pImg: pimg11,
  },
  {
    pImg: pimg12,
  },
];

var settings = {
  dots: false,
  infinite: true,
  speed: 3000,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,

  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const PartnerSection = (props) => {
  return (
    <div className="client_logo_carousel">
      <Slider {...settings}>
        {partners.map((partner, pitem) => (
          <div className="client_logo_item" key={pitem}>
            <Image src={partner.pImg} alt="Cloud Hub - Client Logo" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnerSection;
