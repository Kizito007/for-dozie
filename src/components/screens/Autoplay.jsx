import React from 'react'
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "red" }}
//         onClick={onClick}
//       />
//     );
//   }
  
//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         onClick={onClick}
//       />
//     );
//   }

const Autoplay = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        speed: 7500,
        autoplaySpeed: 4000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 1142,
                settings: {
                    slidesToShow: 4,
                    // slidesToScroll: 3,
                }
            },
            {
                breakpoint: 735,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 2,
                    // slidesToScroll: 5
                }
            }
        ]
    };
        
    return (
        <Slider {...settings}>
        {/* <div className='skills'> */}
            <div> <h3 className='autoplay reds'>Visual Design</h3> </div>
            <div> <h3 className='autoplay greens'>UI Design</h3> </div>
            <div> <h3 className='autoplay purples'>Communication</h3> </div>
            <div> <h3 className='autoplay blues'>Decision Making</h3> </div>
            <div> <h3 className='autoplay greens'>User Research</h3> </div>
            <div> <h3 className='autoplay purples'>Efficiency</h3> </div>
            <div> <h3 className='autoplay blues'>Collaboration</h3> </div>
            <div> <h3 className='autoplay reds'>UX Design</h3> </div>
            <div> <h3 className='autoplay greens'>User Focus</h3></div>
            <div> <h3 className='autoplay reds'>Prototyping</h3> </div>
        {/* </div> */}
        </Slider>
    )
}

export default Autoplay