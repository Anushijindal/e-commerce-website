import React, { useEffect } from "react";
import MainCarousel from "../components/HomeCarousel/MainCarousel";
import CardCarousal from "../components/HomeCarousel/CardCarousal";
import { mens_kurta } from "../utilities/Men_Kurta_Data";
import { useDispatch, useSelector } from "react-redux";
import { findProducts } from "../../State/Product/Action";

const HomePage = () => {
  const { products } = useSelector((store) => store);
  console.log("product men", products?.products?.content);
  const menKurta=products?.products?.content?.filter((item)=>item.category[0].name==="mens_kurta")
  const menShirt=products?.products?.content?.filter((item)=>item.category[0].name==="shirt")
  const gouns=products?.products?.content?.filter((item)=>item.category[0].name==="gouns")
  const dress=products?.products?.content?.filter((item)=>item.category[0].name==="women_dress")
  const menPant=products?.products?.content?.filter((item)=>item.category[0].name==="Pant")

  console.log("men kurta",menKurta)
  const dispatch = useDispatch();
  useEffect(() => {
    const data = {
      category: "",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 100000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 1,
      stock: "",
      pageSize: 100000,
    };
    dispatch(findProducts(data));
  }, []);
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-10">
        <CardCarousal data={menKurta} sectionName={"Men's Kurta"} />
        <CardCarousal data={menShirt} sectionName={"Men's Shirts"} />
        <CardCarousal data={gouns} sectionName={"Women's Gouns"} />
        <CardCarousal data={menPant} sectionName={"Men's Jeans"} />
        <CardCarousal data={dress} sectionName={"Women's Dresses"} />
      </div>
    </div>
  );
};

export default HomePage;
