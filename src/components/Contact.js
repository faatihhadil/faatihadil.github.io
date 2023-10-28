import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:section">
      <div className="container mx-auto">
        <div className="flex flex-col  lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-teal-700 font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Ayo bekerja <br /> bersama!
              </h2>
            </div>
          </motion.div>
          {/* img */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <form action="https://formspree.io/f/xoqorkbz" method="POST">
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-teal-700 transition-all"
                placeholder="Nama mu"
                type="text"
              />
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-teal-700 transition-all"
                placeholder="Email mu"
                type="text"
              />
              <textarea
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-teal-700 transition-all resize-none mb-12"
                placeholder="Pesan yang ingin kau sampaikan"
              ></textarea>
              <button className="btn btn-lg">Kirim pesan</button>
            </form>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
