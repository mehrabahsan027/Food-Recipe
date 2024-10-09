import React, { useEffect, useState } from "react";

import Slider from "react-slick";
import { Link } from "react-router-dom";

import useFetch from "../Hooks/useFetch";

function TrendingSlider() {
  const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s"
  );

  var settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <section className=" w-10/12 lg:w-11/12 h-fit  mx-auto mb-3 ">
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <Link to={`/${item.idMeal}`} key={item.idMeal}>
              <div
                key={item.idMeal}
                className="w-full hover:scale-110 duration-300 my-6 px-2 lg:px-5 h-[30vh] lg:h-[20vh] "
              >
                <img
                  src={item.strMealThumb}
                  alt=""
                  className="w-full object-cover h-full rounded-md shadow-md shadow-yellow-600 hover:scale-110  duration-300 hover:border-2 border-yellow-500"
                />
              </div>
            </Link>
          );
        })}
      </Slider>
    </section>
  );
}

export default TrendingSlider;
