import React from "react";

// image
import image from "../assets/avatar.jpg";
import cv from "../assets/cvfaatih.png";

// icons
import {
  FaGithub,
  FaYoutube,
  FaDribbble,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
// animasi
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

import { Link } from "react-scroll";

const Banner = () => {
  return (
    <div id="home" className=" min-h-[85vh] lg:min-h-[78vh] flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px] "
            >
              FAATIH <span>HADIL</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className=" text-white mr-4">Saya</span>
              <TypeAnimation
                sequence={[
                  "Designer",
                  2000,
                  "Web Developer",
                  2000,
                  "Student",
                  2000,
                ]}
                speed={50}
                className=" text-teal-700"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Perkenalkan saya Faatih Hadil. Siswa SMK Negeri 1 Ciomas, jurusan
              Rekayasa Perangkat Lunak, kelas 12
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link to="about" activeClass="active" smooth={true}>
                <button className="btn btn-lg">Tentang saya</button>
              </Link>
              <a href="#" download={cv} className="text-gradient btn-link">
                Download CV
              </a>
              {/* social */}
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://www.linkedin.com/in/faatih-wibowo-22018627a">
                <FaLinkedin />
              </a>
              <a href="whatsapp://send?text=Hello&phone=+6285217325563">
                <FaWhatsapp />
              </a>
              <a href="https://instagram.com/fa2.tih?igshid=ZDc4ODBmNjlmNQ==">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={image} alt="" className="ii" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
