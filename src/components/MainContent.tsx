import Image from "next/image";
import logo from "@/assets/logo.svg";
import logo2 from "@/assets/logo_2.png";
import group from "@/assets/group.svg";
import cart from "@/assets/cart.svg";
import invoice from "@/assets/invoice.svg";
import box from "@/assets/cube.svg";
import help from "@/assets/help.svg";
import power from "@/assets/power.svg";

import upload from "@/assets/upload.svg";
import tick from "@/assets/tick.svg";
import waiting from "@/assets/waiting.svg";
import wrong from "@/assets/wrong.svg";
import plus from "@/assets/plus.svg";

import graphh from "@/components/graph";

import Tabs from "@/components/tabs";
import Graphh from "@/components/graph";

export default function MainContent() {
  return (
    <div className="flex w-full">
      <div
        id="left"
        className="w-[8vw] flex flex-col justify-between items-center bg-black h-[100vh]"
      >
        <a href="/" className="cursor-pointer">
          <Image src={logo} alt="" className="w-12 h-12 mt-6" />
        </a>
        <div className="space-y-10">
          <div className="relative group">
            <Image
              src={group}
              alt=""
              className="w-[45px] h-[45px] hover:bg-blue-600 p-2 rounded-[50%] cursor-pointer"
            />
            <span className="absolute z-50 left-[5vw] top-[50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-opacity bg-blue-700 text-white px-2 py-1 rounded-sm text-sm">
              Group
            </span>
          </div>
          <div className="relative group">
            <Image
              src={cart}
              alt=""
              className="w-[45px] h-[45px] hover:bg-blue-600 p-2 rounded-[50%] cursor-pointer"
            />
            <span className="absolute z-50 left-[5vw] top-[50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-opacity bg-blue-700 text-white px-2 py-1 rounded-sm text-sm">
              Cart
            </span>
          </div>
          <div className="relative group">
            <Image
              src={invoice}
              alt=""
              className="w-[45px] h-[45px] hover:bg-blue-600 p-2 rounded-[50%] cursor-pointer"
            />
            <span className="absolute z-50 left-[5vw] top-[50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-opacity bg-blue-700 text-white px-2 py-1 rounded-sm text-sm">
              Invoice
            </span>
          </div>
          <div className="relative group">
            <Image
              src={box}
              alt=""
              className="w-[45px] h-[45px] hover:bg-blue-600 p-2 rounded-[50%] cursor-pointer"
            />
            <span className="absolute z-50 left-[5vw] top-[50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-opacity bg-blue-700 text-white px-2 py-1 rounded-sm text-sm">
              Box
            </span>
          </div>
          <div className="relative group">
            <Image
              src={help}
              alt=""
              className="w-[45px] h-[45px] hover:bg-blue-600 p-2 rounded-[50%] cursor-pointer"
            />
            <span className="absolute z-50 left-[5vw] top-[50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-opacity bg-blue-700 text-white px-2 py-1 rounded-sm text-sm">
              Help
            </span>
          </div>
        </div>
        <div className="relative group">
          <Image
            src={power}
            alt=""
            className="w-[45px] h-[45px] hover:bg-blue-600 p-2 rounded-[50%] cursor-pointer mb-8"
          />
          <span className="absolute z-50 left-[5vw] top-[30%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-opacity bg-blue-700 text-white px-2 py-1 rounded-sm text-sm">
            Power
          </span>
        </div>
      </div>
      <div id="middle" className="w-full p-12 pt-8">
        <div className="flex justify-between items-center">
          <span className="">
            <p className="font-semibold text-[28px]">Transactions</p>
            <p className="text-xs font-bold text-zinc-400">
              Current Data and Time
            </p>
          </span>
          <p className="bg-blue-700 text-white rounded-sm w-fit h-fit p-3 text-sm">
            Badge
          </p>
        </div>
        <div className="flex mt-16 w-full justify-between">
          {" "}
          <div className="flex space-x-5 overflow-y-auto">
            <div className="flex border border-zinc-500 w-[11vw] p-2 rounded-lg">
              <Image
                src={upload}
                alt=""
                className="w-12 h-fit bg-blue-700 rounded-lg p-[13px]"
              />
              <span className="ml-8">
                <p className="text-2xl font-bold">16</p>
                <p className="text-xs">Upload</p>
              </span>
            </div>
            <div className="flex border border-zinc-500 w-[11vw] p-2 rounded-lg">
              <Image
                src={tick}
                alt=""
                className="w-12 h-fit bg-blue-700 rounded-lg p-[13px]"
              />
              <span className="ml-8">
                <p className="text-2xl font-bold">12</p>
                <p className="text-xs">Processed</p>
              </span>
            </div>
            <div className="flex border border-zinc-500 w-[11vw] p-2 rounded-lg">
              <Image
                src={wrong}
                alt=""
                className="w-12 h-fit bg-blue-700 rounded-lg p-[13px]"
              />
              <span className="ml-8">
                <p className="text-2xl font-bold">02</p>
                <p className="text-xs">Unprocessed</p>
              </span>
            </div>
            <div className="flex border border-zinc-500 w-[11vw] p-2 rounded-lg">
              <Image
                src={waiting}
                alt=""
                className="w-12 h-fit bg-blue-700 rounded-lg p-[13px]"
              />
              <span className="ml-8">
                <p className="text-2xl font-bold">02</p>
                <p className="text-xs">Awaiting</p>
              </span>
            </div>
          </div>
          <div className="flex border border-zinc-500 w-fit p-2 rounded-lg">
            <Image
              src={plus}
              alt=""
              className="w-12 h-fit bg-blue-700 rounded-lg p-[13px]"
            />
          </div>
        </div>
        <div className="flex justify-between mt-24">
          <div className="w-fit">
            <span>
              <p className="font-md text-xl ">Processed vs Unprocessed</p>{" "}
              <p className="text-xs">Subtitle for this</p>
            </span>
            <Graphh />
          </div>
          <div className="w-fit text-right">
            <span>
              <p className="font-md text-xl ">Processed vs Unprocessed</p>{" "}
              <p className="text-xs">Subtitle for this</p>
            </span>
            <Graphh />
          </div>
        </div>
        <Tabs />
      </div>
      <div id="right" className="w-[25%] bg-zinc-100 p-8">
        <Image src={logo2} alt="" className="w-full p-4 pt-0" />
      </div>
    </div>
  );
}
