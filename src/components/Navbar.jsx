import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import {NavLink,useNavigate} from 'react-router-dom'

const navItemsData = [
  {
    label: "British",
  },

  {
    label: "American",
  },
  {
    label: "Chinese",
  },
  {
    label: "Indian",
  },
  {
    label: "Thai",
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate()
  const [input ,setInput] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()

    if(input !== ''){
      navigate( `/search/${input}`)
    }
  

  }
  return (
    <>
      <nav className="container  shadow-sm shadow-yellow-50 z-10 sticky top-0  mx-auto px-8 py-6 flex justify-between items-center ">
        {/* Logo */}
        <div className="text-2xl lg:text-3xl">
          <h1 className="font-playfair "> <NavLink to={'/'}>
          Logo</NavLink> </h1>
        </div>
        {/* Search */}
        <div className="px-8 lg:w-full hidden text-black lg:block">
          <form onSubmit={handleSubmit} className="flex w-full gap-x-2">
          <input
          onChange={(e)=> setInput(e.target.value)}
            type="text"
            placeholder="Search.."
            className="px-8 py-2 rounded-xl w-full"
          />
          <button onClick={handleSubmit} className="bg-black font-nunito font-semibold text-teal-50 px-5 hover:bg-slate-800 py-2 border border-yellow-200">Search</button>
          </form>
      
        </div>

        {/* region */}
        <ul className="hidden lg:flex font-nunito font-semibold  items-center xl:gap-6 xl:text-lg h-full ">
          {navItemsData.map((item, index) => {
            return (
              <NavLink to={`/category/${item.label}`} key={item.label}>
                  <li
                key={index}
                className="hover:bg-white  cursor-pointer hover:text-black px-5 py-3 duration-200"
              >
                {item.label}
              </li>
              </NavLink>
            
            );
          })}
        </ul>

        {/* mobile menu */}
        <RiMenuFill
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className="text-lg lg:hidden cursor-pointer "
        />

        <div
          className={`absolute  top-0 left-0  lg:hidden w-full flex flex-col  bg-black bg-opacity-70 text-medium font-nunito  h-screen py-16 items-center justify-center 
            
         transform   transition-transform duration-300 ease-in 
            ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
        >
          <div className="text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            X
          </div>

          <div className=" mt-5 text-black px-5 w-full">
          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-y-2 ">
          <input
          required
          onChange={(e)=> setInput(e.target.value)}
            type="text"
            placeholder="Search.."
            className="px-8 py-2 rounded-xl w-full"
          />
          <button onClick={()=> {handleSubmit ,setIsMenuOpen(!isMenuOpen)}} className="bg-black text-teal-50 px-5 py-2 border border-yellow-50">Search</button>
          </form>
      
          </div>
          <ul className="flex mt-2 flex-col font-nunito lg:hidden lg:justify-center  lg:items-center gap-2 text-lg font-semibold">
            {navItemsData.map((item, index) => {
              return (
                <NavLink  to={`/category/${item.label}`} key={item.label} onClick={()=> setIsMenuOpen(!isMenuOpen)}>

                  <li
                    key={index}
                    className="px-5 py-3 cursor-pointer duration-200"
                  >
                    {item.label}
                  </li>
                </NavLink>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
