"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../../translations.config";
import Heading from "../UI/Heading";
import Image from "next/image";

const PizzaNaWeseleSection = () => {
  const { tString } = useTranslation(namespaces.common);

  return (
    <section
      className="flex justify-center h-screen bg-background pb-24 pt-40 overflow-hidden"
      id="pizzaNaWesele"
    >
      <div className="max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
        <motion.div
          className="relative w-full h-[400px] flex justify-center"
          whileInView={{ opacity: [0, 1], x: [-50, 0] }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-[90%] h-[90%] border-4 border-darkRed rounded-lg overflow-hidden shadow-lg relative max-w-full">
            <Image
              src="/images/p1.jpg"
              alt="Mobilna pizza na wesele"
              layout="fill"
              objectFit="cover"
              style={{ objectPosition: "center 30%" }}
            />
          </div>
        </motion.div>

        <motion.div
          className="text-left flex flex-col gap-6"
          whileInView={{ opacity: [0, 1], x: [50, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Heading>{tString("pizzaNaWesele.header")}</Heading>
          <p className="text-textDark text-lg">{tString("pizzaNaWesele.p1")}</p>
          <p className="text-textDark text-lg">
            {tString("pizzaNaWesele.p2")}{" "}
            <a
              href="https://piccka.pl"
              className="text-darkRed underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              piccka.pl
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PizzaNaWeseleSection;
