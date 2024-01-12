import Slider from "react-slick"

import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

const Coursel = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Slider className="w-full" {...settings}>
      <div className=" bg-amber-950">
        <h3>1</h3>
      </div>
      <div className=" bg-neutral-500">
        <h3>2</h3>
      </div>
      <div className=" bg-slate-700">
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div className="w-1/3">
        <h3>6</h3>
      </div>
    </Slider>
  )
}

export default Coursel
