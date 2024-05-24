import React, { useRef, useState } from "react";
import Cards from "../HomeSectionCards/Cards";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
const CardCarousal = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef();
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const slidePrev = () => {
    setActiveIndex(activeIndex - 1);
    carouselRef.current.slideTo(activeIndex - 1);
  };
  const slideNext = () => {
    setActiveIndex(activeIndex + 1);
    carouselRef.current.slideTo(activeIndex + 1);
  };
  const syncActiveIndex = ({ item }) => setActiveIndex(item);
  const items = data?.map((item) => <Cards products={item} />);
  return (
    <div className="relative px-4 lg:px-8 mx-5 lg:mx-10 border border-gray-100 rounded-lg shadow-md">
    <h2 className="font-extrabold text-2xl text-slate-600 py-3 ">{sectionName}</h2>
      <div className="relative p-5 ">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items?.length - 5 && (
          <Button
            variant="contained"
            className="z-50"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "9rem",
              right: "-0.4rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "gray",
              ":hover": { backgroundColor: "lightgrey" },
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            variant="contained"
            onClick={slidePrev}
            className="z-50"
            sx={{
              position: "absolute",
              top: "9rem",
              left: "-4.4rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "gray",
              ":hover": { backgroundColor: "lightgrey" },
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default CardCarousal;
