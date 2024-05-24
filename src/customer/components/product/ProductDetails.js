import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { Box, Button, Grid, LinearProgress, Rating, TextField } from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";
import { mens_kurta } from "../../utilities/Men_Kurta_Data";
import Cards from "../HomeSectionCards/Cards";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductsById } from "../../../State/Product/Action";
import { addToCart } from "../../../State/Cart/Action";
import CircleIcon from "@mui/icons-material/Circle";
import SimilarProducts from "./SimilarProducts";
import { createRating, getAllRatings } from "../../../State/Ratings and Reviews/Action";
const product = {
  name: "Basic Tee 6-Pack",
  price: "192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [productReview, setProductReview] = useState("");
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
console.log(productReview,value)
  const handleAddToCart = () => {
    const data = { productId: params.productId, size: selectedSize.name };
    dispatch(addToCart(data));
    console.log(data);
    navigate("/cart");
  };
  console.log("params", params);
  const { rating } = useSelector((store) => store);
  console.log(rating);
  useEffect(() => {
    const data = { productId: params.productId };
    console.log(data);
    dispatch(findProductsById(data));
    dispatch(getAllRatings(params.productId));
  }, [params.productId]);
  const { products } = useSelector((store) => store);
  console.log(products);
  // const handleReview=(e)=>{
  //   setProductReview(e)
  // }
  const handleRatingSubmit=(e)=>{
    e.preventDefault();
    dispatch(createRating({ rating: value, productId: params.productId,review: productReview }));
    // dispatch(createRating({ review: productReview, productId: params.productId }));
    console.log(value)
  }
  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav> */}
        {/* Product img and details */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 py-5">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={products?.product?.imgURL}
                alt="image"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap justify-center space-x-5">
              {/* {product?.images?.map((items) => {
                return (
                  <div className="border-2 aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-10">
                    <img
                      src={items?.src}
                      alt={items?.alt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                );
              })} */}
            </div>
          </div>
          {/* Product info */}
          <div className="lg:col-span-1 max-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
            <div className="flex flex-col lg:col-span-2 justify-between lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-xl font-medium opacity-45">
                {products?.product?.brand}
              </h1>
              <h1 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-lg">
                {products?.product?.title}
              </h1>
              <div className="flex flex-row space-x-5">
                <p className="text-lg font-semibold tracking-tight text-gray-900 mt-3">
                  Rs. {products?.product?.discountedPrice}
                </p>
                <p className="line-through opacity-50 text-lg mt-3">
                  Rs. {products?.product?.price}
                </p>
                <p className="font-semibold text-green-800 text-lg mt-3">
                  {products?.product?.discountPresent}% off
                </p>
              </div>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex space-x-3">
                  <Rating name="read-only" value={4} readOnly />
                  <p className="text-sm opacity-55">11233 Ratings</p>
                  <p className="font-bold text-gray-700 text-sm align-bottom">
                    117 reviews
                  </p>
                </div>
              </div>

              <form className="mt-5">
                {/* Colors */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 p-2">
                    Color
                  </h3>
                  <CircleIcon
                    sx={{
                      color: `${products?.product?.color
                        .toLowerCase()
                        .split(" ")
                        .map((word, index) =>
                          index === 0
                            ? word
                            : word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join("")}`,
                      width: "3rem",
                      height: "3rem",
                      border: 2,
                      borderColor: "black",
                      borderRadius: "100%",
                    }}
                  />
                  {/* <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a color
                    </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {products?.colors.map((color) => (
                      <RadioGroup.Option
                        key={products?.color}
                        value={products?.color}
                        className={({ active, checked }) =>
                          classNames(
                            products?.color,
                            active && checked ? "ring ring-offset-1" : "",
                            !active && checked ? "ring-2" : "",
                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {products?.color}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            products?.color,
                            "h-8 w-8 rounded-full border border-black border-opacity-10"
                          )}
                        />
                      </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup> */}
                </div>

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </a>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-8">
                      {products?.product?.size?.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          // disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              // size.inStock?
                              "cursor-pointer bg-white text-gray-900 shadow-sm",
                              // : "cursor-not-allowed bg-gray-50 text-gray-200"
                              active ? "ring-2 ring-indigo-500" : "",
                              "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.name}
                              </RadioGroup.Label>
                              {true ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-indigo-500"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <Button
                  onClick={handleAddToCart}
                  variant="contained"
                  sx={{ py: "10px", my: "2rem", px: "4rem" }}
                >
                  Add to Cart
                </Button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {products?.product?.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Rating and Reviews */}
        <section>
          <h1 className="font-bold text-2xl mb-10 text-gray-600 mx-4">
            Recent Ratings and Reviews
          </h1>
          <form onSubmit={handleRatingSubmit} className="mx-10">
          <h1>Rate and review the product</h1>
            <TextField
              label="Write your Review"
              name="review"
              onChange={(event)=>{setProductReview(event.target.value)}}
            />
            <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Button variant="contained" type="submit">Submit</Button>
          </form>
          <div className="border py-5 my-5 rounded-lg mx-10">
            <Grid container spacing={7}>
              <Grid item xs={7}>
                <div>
                  {rating?.rating?.map((item) => (
                    <ProductReviewCard data={item}/>
                  ))}
                </div>
              </Grid>
              <Grid xs={5}>
                <h1 className="font-semibold text-xl pb-1 mt-10">
                  Product Ratings
                </h1>
                <div className="flex flex-row space-x-3">
                  <Rating value={4.5} readOnly precision={0.5} />
                  <p>12321 Rating</p>
                </div>
                <Box className={"font-semibold"}>
                  <Grid
                    sx={{ my: "9px" }}
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                    spacing={2}
                  >
                    <Grid item xs={2}>
                      <p>Excellent</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{
                          mt: "5px",
                          borderRadius: 4,
                          height: 7,
                          bgcolor: "lightgray",
                        }}
                        color="success"
                        value={40}
                        variant="determinate"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <p className="opacity-50">12132</p>
                    </Grid>
                    <Grid item xs={2}>
                      <p>Very Good</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{
                          mt: "5px",
                          borderRadius: 4,
                          height: 7,
                          bgcolor: "lightgray",
                        }}
                        color="secondary"
                        value={60}
                        variant="determinate"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <p className="opacity-50">12132</p>
                    </Grid>
                    <Grid item xs={2}>
                      <p>Good</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{
                          mt: "5px",
                          borderRadius: 4,
                          height: 7,
                          bgcolor: "lightgray",
                        }}
                        color="primary"
                        value={30}
                        variant="determinate"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <p className="opacity-50">12132</p>
                    </Grid>
                    <Grid item xs={2}>
                      <p>Average</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{
                          mt: "5px",
                          borderRadius: 4,
                          height: 7,
                          bgcolor: "lightgray",
                        }}
                        color="warning"
                        value={20}
                        variant="determinate"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <p className="opacity-50">12132</p>
                    </Grid>
                    <Grid item xs={2}>
                      <p>Poor</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{
                          mt: "5px",
                          borderRadius: 4,
                          height: 7,
                          bgcolor: "lightgray",
                        }}
                        color="error"
                        value={5}
                        variant="determinate"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <p className="opacity-50">12132</p>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </div>
        </section>
        {/* Similar Products */}
        <section>
          <h1 className="font-bold text-2xl mb-10 text-gray-600 mx-4">
            Similar Products
          </h1>
          <SimilarProducts data={products?.product?.category[0]?.name} />

          {/* <div className="flex flex-wrap justify-center space-x-2 space-y-3 mb-5">
            {mens_kurta.map((item) => (
              <Cards products={item} />
            ))}
          </div> */}
        </section>
      </div>
    </div>
  );
}
