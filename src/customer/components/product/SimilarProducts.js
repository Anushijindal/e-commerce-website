import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { findProducts } from '../../../State/Product/Action';
import Cards from '../HomeSectionCards/Cards';

const SimilarProducts = ({data}) => {
    console.log(data);
    const dispatch=useDispatch();
    const {products}=useSelector(store=>store);
    // console.log(products)
    // const similarProducts=products
  const similarProducts=products?.products?.content?.filter((item)=>item.category[0].name===data)
  console.log(similarProducts);
    useEffect(()=>{
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
        dispatch(findProducts(data))
    },[])
  return (
    
        <div className="flex flex-wrap justify-center space-x-2 space-y-3 mb-5">
            {similarProducts?.slice(0,10)?.map((item) => (
              <Cards products={item} />
            ))}
          </div>
  )
}

export default SimilarProducts;