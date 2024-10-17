import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Card from "./Card";
import { motion } from "framer-motion";


function Category() {
  const { area } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );

      // setData(response.data);

      const meals = response.data.meals;

      if (meals && meals.length > 0) {
        setData(meals);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [area]);

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
    <>
      <Navbar />
      <h1 className="text-3xl text-center mt-3 font-playfair">
        {area} Food Items
      </h1>
      <motion.section
      initial={{opacity:0}}
      animate={{opacity:1, transition:{type:'spring'}}}
      
      className=" w-10/12 my-8 justify-center gap-16 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data &&
          data.length > 0 &&
          data.map((item) => {
            return <Card key={item.idMeal} item={item} />;
          })}
      </motion.section>
    </>
  );
}

export default Category;
