"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { PiProjectorScreen } from "react-icons/pi";

const items = [
  {
    id: 1,
    title: "Botanical Blizz",
    desc: "This webside was developed during third year ",
    img: "/botanical-blis.png",
    link: "",
    demo: "",
  },
  {
    id: 2,
    title: "Coffee APP",
    desc: "Coffee app ",
    img: "/coffee.png",
    link: "",
    demo: "",
  },
  {
    id: 3,
    title: "Kaylen App",
    desc: "it is a app develop during my second year.",
    img: "/kaylen.png",
    link: "",
    demo: "",
  },
  {
    id: 4,
    title: "Druk Air",
    desc: "This website was developed during the final year capstone project.FrontEnd is react.js and backEnd is Node.js",
    img: "/drukair.png",
    link: "",
    demo: "",
  },

];

function Card() {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-prose ">
      {items.map((item) => (
        <motion.div key={item.id} className="flex">
          <div className="card shadow-xl m-2 bg-opacity-20 bg-white">
            <figure>
              <img src={item.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">{item.title}</h2>
              <p className="text-white">{item.desc}</p>
              <div className="card-actions justify-center">
                <Link href={item.link} target="_blank">
                  <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg ring-1 ring-black bg-black text-white bg-opacity-60 hover:scale-[1.15] font-semibold rounded-full flex">
                    Github <FaGithub className="text-xl" />
                  </button>
                </Link>
                <Link href={item.demo} target="_blank">
                  <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-white text-white bg-opacity-40 hover:scale-[1.15] font-semibold rounded-full flex">
                    Demo <PiProjectorScreen className="text-xl" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Card;
