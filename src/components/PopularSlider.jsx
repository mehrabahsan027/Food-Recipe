import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import { Link } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function PopularSlider({ isMenuOpen }) {
  const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s"
  );

  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
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
  };

  if (loading)
    return (
      <div class="flex h-screen items-center justify-center">
        <div
          class="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className=" w-10/12  py-8 mx-auto  ">
      <h1 className="text-3xl text-center -mt-5">Popular Cuisines</h1>
      <Slider {...settings}>
        {data &&
          data.length > 0 &&
          data.map((item) => {
            return (
              <Link to={`/${item.idMeal}`} key={item.idMeal}>
                <div className="w-auto relative group  px-5 py-2  lg:h-[50vh]">
                  <img
                    src={item.strMealThumb}
                    alt=""
                    className="w-full h-full  hover:opacity-75 rounded-md shadow-md shadow-yellow-600 hover:scale-105 hover:border-2 border-yellow-500 duration-300"
                  />
                  <h2 className="absolute duration-300 opacity-0  group-hover:opacity-100  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold font-playfair border px-4 py-2 hover:bg-cyan-900">
                    {item.strMeal}
                  </h2>
                </div>
              </Link>
            );
          })}
      </Slider>
    </section>
  );
}

export default PopularSlider;
