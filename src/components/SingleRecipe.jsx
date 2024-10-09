import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TrendingSlider from "./TrendingSlider";
import { useParams } from "react-router-dom";
import axios from "axios";

function SingleRecipe() {
  const { idMeal } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );

      // setData(response.data);

      const meals = response.data.meals[0];
      console.log(meals);
      if (meals !== null) {
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
  }, [idMeal]);
  console.log(data);

  console.log(data.strMeal);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
  
    <Navbar />
   
     

      <section className="container mx-auto py-3 lg:py-10 flex flex-col lg:flex-row justify-center  items-center lg:gap-16">
  
        <div className="max-w-1/2 h-96 border border-yellow-500 shadow-md rounded-xl shadow-yellow-100">
          <img src={data.strMealThumb} className="w-full h-full rounded-xl object-cover" />
        </div>
        <h2 className="text-2xl pt-3 lg:text-4xl mb-5 lg:mb-0 font-semibold font-playfair">
            {data.strMeal}
          </h2>

        <div>
         
          <h3 className="text-2xl lg:text-3xl mb-3 font-nunito">Ingredients</h3>
          <div className="space-y-3 font-nunito text-center">
          <p className="text-lg">{data.strIngredient1}</p>
          <p className="text-lg">{data.strIngredient2}</p>
          <p className="text-lg">{data.strIngredient3}</p>
          <p className="text-lg">{data.strIngredient4}</p>
          <p className="text-lg">{data.strIngredient5}</p>
          <p className="text-lg">{data.strIngredient6}</p>
          <p className="text-lg">{data.strIngredient7}</p>
          <p className="text-lg">{data.strIngredient8}</p>
          </div>
          
        </div>
      </section>
      <div className="px-8">
        <h3 className="text-2xl pb-2 lg:text-3xl font-nunito text-center">Instructions</h3>
         <p className="font-nunito">{data.strInstructions}</p> </div>
      <div className="lg:py-5">
        <h2 className="text-3xl text-center font-playfair mb-3">
          Trending Recipes
        </h2>
        <TrendingSlider />
      </div>
    </>
  );
}

export default SingleRecipe;