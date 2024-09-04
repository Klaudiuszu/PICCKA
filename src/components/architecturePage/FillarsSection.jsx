"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../../translations.config";

const FillarSection = () => {
  const [height, setHeight] = useState(0);
  const [, setWidth] = useState(0);
  const refSize = useRef(null);

  const { tString } = useTranslation(namespaces.common);

  useEffect(() => {
    setWidth(refSize.current.clientWidth)
    setHeight(refSize.current.clientHeight)
  }, [])

  return (
    <section ref={refSize} className="about-me-section lg:py-16 max-w-screen-2xl mx-auto flex flex-col" id="fillar" style={{lineHeight: "normal"}}>
      <div className="bg" style={{ height: `${height}px` }}></div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <div className="flex flex-col lg:pb-24 lg:grid gap-8 lg:grid-cols-2 items-center py-8 pl-4 pr-4 lg:gap-72 lg:px-16 text-[#171717]">
          <div className="justify-center md:text-5xl text-4xl items-center lg:items-start text-center mt-4 lg:text-left flex flex-col h-full">
            <h5 className="mundial-Bold text-4xl xl:tex-[39px] xl:w-[600px] uppercase mb-4">{tString('fillar.header')}</h5>
            <h4 style={{lineHeight: "normal", fontSize: "26px !important"}} className="xl:w-[600px] mundial-Light max-w-[500px] lg:px-0 text-center sm:px-16 md:text-[26px] lg:text-left">
              {tString('fillar.info')}
            </h4>
          </div>
          <div className="flex flex-col gap-3">
          </div>
        </div>
      </motion.div>
      <div className="flex flex-col gap-3 px-4 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-16">
          {/* Item 1 */}
          <div className="flex flex-col items-start mb-56 md:items-center text-center xl:h-[180px] min-w-[280px] relative sm:text-left sm:flex-row px-1">
            <div className="h-full">
              <div className="w-9 h-9 relative top-2 bg-black flex items-start justify-center transform rotate-45 sm:mr-4">
                <h2 className="text-white transform -rotate-45 relative" style={{ top: "7px" }}>1</h2>
              </div>
            </div>
            <div className="flex flex-col items-start absolute left-16 top-0 text-left gap-7">
              <h5 className="text-black font-semibold">{tString('fillar.f1Header')}</h5>
              <p className="text-[26px] mundial-Light max-w-[280px]">{tString('fillar.f1Info')}</p>
            </div>
          </div>
          {/* Item 2 */}
          <div className="flex flex-col mb-56 items-start md:items-center text-center xl:h-[180px] min-w-[300px] relative sm:text-left sm:flex-row px-1">
            <div className="h-full">
              <div className="w-9 h-9 relative top-2 bg-black flex items-start justify-center transform rotate-45 sm:mr-4">
                <h2 className="text-white transform -rotate-45 relative" style={{ top: "7px" }}>2</h2>
              </div>
            </div>
            <div className="flex flex-col items-start absolute left-16 top-0 text-left gap-7">
              <h5 className="text-black font-semibold">{tString('fillar.f2Header')}</h5>
              <p className="text-[26px] mundial-Light max-w-[280px]">{tString('fillar.f2Info')}</p>
            </div>
          </div>
          {/* Item 3 */}
          <div className="flex flex-col mb-56 items-start md:items-center text-center xl:h-[180px] min-w-[300px] xl:w-[352px] relative sm:text-left sm:flex-row px-1">
            <div className="h-full">
              <div className="w-9 h-9 relative top-2 bg-black flex items-start justify-center transform rotate-45 sm:mr-4">
                <h2 className="text-white transform -rotate-45 relative" style={{ top: "7px" }}>3</h2>
              </div>
            </div>
            <div className="flex flex-col items-start absolute left-16 top-0 text-left gap-7">
              <h5 className="text-black font-semibold">{tString('fillar.f3Header')}</h5>
              <p className="text-[26px] mundial-Light xl:w-[352px]">{tString('fillar.f3Info')}</p>
            </div>
          </div>
          {/* Item 4 */}
          <div className="flex flex-col mb-56 items-start md:items-center text-center h-[100px] min-w-[300px] relative sm:text-left sm:flex-row px-1">
            <div className="h-full">
              <div className="w-9 h-9 relative top-2 bg-black flex items-start justify-center transform rotate-45 sm:mr-4">
                <h2 className="text-white transform -rotate-45 relative" style={{ top: "7px" }}>4</h2>
              </div>
            </div>
            <div className="flex flex-col items-start absolute left-16 top-0 text-left gap-7">
              <h5 className="text-black font-semibold">{tString('fillar.f4Header')}</h5>
              <p className="text-[26px] mundial-Light max-w-[280px]">{tString('fillar.f4Info')}</p>
            </div>
          </div>
          {/* Item 5 */}
          <div className="flex flex-col mb-56 items-start md:items-center text-center h-[100px] min-w-[300px] relative sm:text-left sm:flex-row px-1">
            <div className="h-full">
              <div className="w-9 h-9 relative top-2 bg-black flex items-start justify-center transform rotate-45 sm:mr-4">
                <h2 className="text-white transform -rotate-45 relative" style={{ top: "7px" }}>5</h2>
              </div>
            </div>
            <div className="flex flex-col items-start absolute left-16 top-0 text-left gap-7">
              <h5 className="text-black font-semibold">{tString('fillar.f5Header')}</h5>
              <p className="text-[26px] mundial-Light max-w-[280px]">{tString('fillar.f5Info')}</p>
            </div>
          </div>
          {/* Item 6 */}
          <div className="flex flex-col mb-56 items-start md:items-center text-center h-[100px] min-w-[300px] relative sm:text-left sm:flex-row px-1">
            <div className="h-full">
              <div className="w-9 h-9 relative top-2 bg-black flex items-start justify-center transform rotate-45 sm:mr-4">
                <h2 className="text-white transform -rotate-45 relative" style={{ top: "7px" }}>6</h2>
              </div>
            </div>
            <div className="flex flex-col items-start absolute left-16 top-0 text-left gap-7">
              <h5 className="text-black font-semibold">{tString('fillar.f6Header')}</h5>
              <p className="text-[26px] mundial-Light xl:w-[352px]">{tString('fillar.f6Info')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FillarSection;