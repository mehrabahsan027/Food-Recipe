import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

import Navbar from "./Navbar";
import Card from "./Card";

function SearchElements() {
  const { searchFood } = useParams();
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`,
    searchFood
  );

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

  console.log(data);

  //* if search food item is not available
  if (!data) {
    return (
      <>
        <Navbar />

        <h1 className="text-4xl mt-5 text-center">
          No food items found for "{searchFood}"
        </h1>
      </>
    );
  }

  if (error) return <h1>Error occurred: {error.message}</h1>;

  return (
    <>
      <Navbar />

      <section className=" w-10/12 my-8 justify-center gap-16 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data &&
          data.length > 0 &&
          data.map((item) => {
            {
              return <Card item={item} />;
            }
          })}
      </section>
    </>
  );
}

export default SearchElements;
