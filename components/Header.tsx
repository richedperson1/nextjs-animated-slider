import React from "react";
import { motion } from "framer-motion";
import { IoIosGlobe, IoMdSearch, IoMdPerson } from "react-icons/io";
import Head from "next/head";

function Header() {
  const [active, setActive] = React.useState(0);
  /* This code block is mapping over the `menus` array and generating a list of `<motion.li>` elements
  based on the items in the array. */
  return (
    <div className=" absolute mt-5 flex w-full flex-wrap items-center justify-between gap-2 px-5 text-xs font-medium uppercase opacity-90 md:px-10">
      <Head>
        <title>Cool Project</title>
      </Head>
      <div className="  flex items-center gap-2 font-medium tracking-[4px]">
        <IoIosGlobe className=" text-xl" />
        Trust me
      </div>
      <ul className=" flex flex-wrap items-center gap-3 text-[11px] md:gap-10">


        {menus.map((menu, index) => {
          return (
            <motion.li
              layout
              key={index}
              onClick={() => {
                setActive(index)
              }}
              className={` ${active == index && " border-b-2 border-b-yellow-500"
                } inline-block cursor-pointer  border-b-yellow-500 transition duration-300 ease-in-out hover:border-b-2 hover:text-white`}
            >

              {menu}
            </motion.li>
          );
        })}
        <div className=" flex items-center gap-6">
          <IoMdSearch className=" text-lg" />
          <IoMdPerson className=" text-lg" />
        </div>
      </ul>
    </div>
  );
}

export default Header;

const menus = [
  "Home",
  "Holidays",
  "Destinations",
  "Flights",
  "Offers",
  "Contacts",
  "Travel-list"
];
