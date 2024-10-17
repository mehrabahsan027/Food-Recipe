import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";




function Card({item}) {
  return (
    <motion.div
    initial={{y:20}}
    whileInView={{y:0,transition:{duration:0.3}}}
    viewport={{once:true}}
    
    class="w-full hover:scale-110 duration-300 shadow-md shadow-yellow-600 rounded flex flex-col items-center  overflow-hidden lg:h-auto    ">
      <img
        class="w-full h-56 object-cover"
        src={item.strMealThumb}
        alt={item.strMeal}
      />
      <Link to={`/${item.idMeal}`} key={item.idMeal}>
        <h2 class="font-bold font-nunito text-lg lg:text-xl py-6 lg:py-10 px-4 text-center">
          {item.strMeal}
        </h2>
      </Link>
    </motion.div>
  );
}

export default Card;
