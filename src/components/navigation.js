"use client";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import CloseBtn from "./close-btn";
import OpenBtn from "./open-btn";
import Menu from "./menu";
import { routes } from "../constants/route";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const wrapperStyles = twMerge(
    "absolute z-50 block fixed t-0 p-[20px] box-border w-[300px] h-screen bg-[#111] text-white h-screen"
  );
  const hoverStyle = twMerge(
    "hover:bg-[#fff] hover:text-[#2742BE] hover:border-[#2742BE] hover:font-medium"
  );

  const handleClickMenu = (event) => {
    const hasHref = event.target.hasAttribute("href");
    if (!hasHref) return;
    setIsOpenNav(false);
  };
  return (
    <>
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpenNav ? 0 : -300 }}
        transition={{ ease: "easeOut", duration: 0.2 }}
        className={wrapperStyles}
      >
        <div className="flex flex-col">
          <div className="flex justify-end">
            <CloseBtn onClick={() => setIsOpenNav(false)} />
          </div>
          <div>
            <Menu routes={routes} onClick={handleClickMenu} />
          </div>
        </div>
        <Link href="/">main</Link>
        {/* flex:1 로 공간 젤 많이주고 flex 먹이고 align-items : flex-end */}
        <div className="flex gap-x-[4px] fixed bottom-[30px]">
          <button
            className={
              "border-[#fff] border-2 w-[200px] h-[54px] text-[#fff] bg-[#111] text-center leading-[53px] border-solid " +
              hoverStyle
            }
          >
            Contact
          </button>
          <button
            className={
              "border-[#fff] border-2 w-[54px] h-[54px] text-[#fff] bg-[#111] text-center leading-[53px] border-solid " +
              hoverStyle
            }
          >
            down
          </button>
        </div>
      </motion.div>

      <OpenBtn onClick={() => setIsOpenNav(true)}></OpenBtn>
    </>
  );
}