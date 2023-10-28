import React from "react";

import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import { Link } from "react-scroll";

//services data
const services = [
  {
    name: "UI/UX Designer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga harum inventore dolor ducimus eos ",
    link: "Learn more",
  },
  {
    name: "Web Developer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga harum inventore dolor ducimus eos ",
    link: "Learn more",
  },
  {
    name: "Student",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga harum inventore dolor ducimus eos ",
    link: "Learn more",
  },
  {
    name: "Graphic Designer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga harum inventore dolor ducimus eos ",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-teal-700">yang kulakukan.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Hal hal yg pernah ku lakukan dalam dunia RPL ialah mendesign suatu
              web site, hingga membuat sistem informasi berbasis web site
              sederhana
            </h3>
            <Link to="work" activeClass="active" smooth={true}>
              <button className="btn btn-sm">Lihat projek ku</button>
            </Link>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* services list */}
            <div>
              {services.map((services, index) => {
                const { name, description, link } = services;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className=" font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn-gg w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className=" text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
