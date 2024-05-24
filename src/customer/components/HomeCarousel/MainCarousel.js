import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from '../../utilities/MainCarouselData';



const MainCarousel = () =>{
    const items = MainCarouselData.map((items)=><img className='cursor-pointer w-full h-[500px]' role='presentation' src={items.image} alt=''/>);
    return (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
);}
export default MainCarousel;