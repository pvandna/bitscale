"use client";
import { useState } from "react";
import { CiFilter, CiPlay1 } from "react-icons/ci";
import { BiSortAlt2 } from "react-icons/bi";
import { GrShare } from "react-icons/gr";
import { IoPlayCircleOutline } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa6";
import { AiOutlineOpenAI } from "react-icons/ai";
import { RiLoader2Fill } from "react-icons/ri";
import { IoWarningOutline } from "react-icons/io5";
import { TbBrandFigma } from "react-icons/tb";
import {
  BsStars,
  BsLayoutThreeColumns
} from "react-icons/bs";
import {
  MdMenu,
  MdNotifications,
  MdAccountCircle,
  MdArrowBack,
  MdSave,
  MdOutlineTableRows,
  MdBusiness,
  MdSearch,
  MdDelete,
  MdSettings,
  MdDownload,
  MdShare,
  MdClose,

  MdAdd
} from "react-icons/md";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle the sidebar state
  };


  return (
    <div className="container mx-auto my-2 p-4 bg-gray-900 text-gray-800 rounded-lg">
      {/* <!-- Header --> */}
      <div className="bg-gray-800 text-white p-4 rounded-lg flex items-center justify-between mb-4 lg:hidden">
        <div className="flex items-center space-x-2">
          <div className="lg:hidden">
            {/* Sidebar */}
            <div
              className={`fixed z-50 left-0 top-0 h-screen bg-gray-800 transition-transform duration-500 ease-in-out transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
              <div className="flex flex-col justify-between h-full p-4">
                <div className="flex flex-col space-y-4">
                  <MdMenu
                    className="text-xl hover:text-gray-400 cursor-pointer"
                    onClick={toggleSidebar}
                  />
                  <MdNotifications className="text-xl hover:text-gray-400 cursor-pointer" />
                  <MdAccountCircle className="text-xl hover:text-gray-400 cursor-pointer" />
                  <MdArrowBack className="text-xl hover:text-gray-400 cursor-pointer" />
                </div>
                {isSidebarOpen && (
                  <MdClose
                    className="text-xl hover:text-gray-400 cursor-pointer"
                    onClick={toggleSidebar}
                  />
                )}
              </div>
            </div>
            <MdMenu
              className="text-xl hover:text-gray-400 cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <MdNotifications className="text-xl hover:text-gray-400 cursor-pointer" />
          <MdAccountCircle className="text-xl hover:text-gray-400 cursor-pointer" />
        </div>
      </div>

      {/* <!-- Main Content --> */}
      <div className="bg-white rounded-lg shadow-lg">

        <div className="flex  flex-row items-center justify-between p-2 border-b border-gray-200 gap-2">
          <div className="flex items-center gap-1">
            <MdArrowBack className="text-gray-500 hover:text-gray-700 cursor-pointer" />
            <input
              type="text"
              className="border-none focus:ring-0 focus:outline-none text-lg placeholder-gray-500 rounded-lg w-full"
              placeholder="Name of the file"
            />
          </div>
          <div className="flex items-center gap-1">
            <label className="inline-flex items-center cursor-pointer">
              <div className="relative">
                
                <div className="toggle-path bg-green-500 w-8 h-4 rounded-full"></div>
                <div className="toggle-circle bg-white w-4 h-4 rounded-full absolute top-0 left-0 transition transform"></div>
              </div>
              <span className="ml-2 font-semibold text-green-500 text-sm hidden md:block">Auto Save</span>
            </label>
            <MdAccountCircle className=" hover:text-gray-400 cursor-pointer text-red-600 hidden text-2xl lg:block" />
          </div>


        </div>

        <div className="flex gap-2">
          <div className="text-white border-r-2 border-gray-200 p-4 flex-col gap-2 items-center justify-between mb-4 lg:flex hidden">
            <div className="flex flex-col items-center space-x-2">
              <div className="lg:block hidden">
                <div className="flex flex-col gap-2">
                  <MdSave className="text-xl hover:text-gray-400 cursor-pointer text-black" />
                  <MdSearch className="text-xl hover:text-gray-400 cursor-pointer text-black" />
                  <MdSettings className="text-xl hover:text-gray-400 cursor-pointer text-black" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <MdNotifications className="text-xl hover:text-gray-400 cursor-pointer text-black" />
              <MdAccountCircle className="text-xl hover:text-gray-400 cursor-pointer text-black" />
            </div>
          </div>
          <div className="p-4 w-full">
            <div className="flex flex-col md:flex-row items-center justify-between md:items-start   gap-2 mb-4">
              <div className="mb-2 md:mb-0 flex flex-col lg:flex-row gap-4 items-center justify-center md:justify-end w-full md:w-auto">
                <div className="flex items-center gap-2 w-full bg-gray-100 rounded-lg px-2 py-1">
                  <MdSearch className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                  <input
                    type="text"
                    className="border-none focus:ring-0 focus:outline-none placeholder-gray-500 bg-gray-100 w-full p-1"
                    placeholder="Search"
                  />
                </div>
                <div className="flex justify-between items-center flex-wrap md:flex-nowrap md:gap-1 !text-sm">
                  <button className="p-1 px-2 rounded-lg hover:bg-gray-300 flex justify-center items-center gap-1 w-1/2 sm:w-auto">
                    <  MdOutlineTableRows className="text-black" />
                    <div className=" whitespace-nowrap">1/1Row </div>
                  </button>
                  <button className="p-1 px-2 rounded-lg hover:bg-gray-300 flex justify-center items-center gap-1  w-1/2 sm:w-auto">
                    <  BsLayoutThreeColumns className="text-black" />
                    <div className=" whitespace-nowrap">1/1Row </div>
                  </button>
                  <button className="p-1 px-2 rounded-lg hover:bg-gray-300 flex justify-center items-center gap-1  w-1/2 sm:w-auto">
                    <  CiFilter className="text-black" />
                    <div className=" whitespace-nowrap">0 Filter </div>
                  </button>
                  <button className="p-2 px-2 rounded-lg  hover:bg-gray-300 flex justify-center items-center gap-1  w-1/2 sm:w-auto">
                    <  BiSortAlt2 className="text-black " />
                    <div className=" whitespace-nowrap">sort </div>
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 items-center justify-center md:justify-end md:py-1">
                <button className="bg-black text-white px-4 py-1 rounded-lg hover:bg-blue-950">
                  <div className="flex items-center space-x-2">
                    < BsStars className="text-2xl text-white" />
                    <div className="ml-20">Enrich </div>
                  </div>
                </button>
                <MdShare className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                <MdDownload className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                <MdDelete className="text-red-500 hover:text-red-700 cursor-pointer" />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="w-full bg-gray-100 border-b border-gray-200">
                    <th className="py-2 px-4 text-left border-r border-gray-200">

                    </th>
                    <th className="py-2 px-4 text-left border-r border-gray-200">

                    </th>
                    <th className="py-2 px-4 text-left border-r border-gray-200 bg-yellow-200">
                      <div className=" flex space-x-2 ">
                        <FaAppStoreIos className=" text-2xl font-bold right-1 bottom-1 text-black" />
                        <span>Input Column</span>

                      </div>
                    </th>
                    <th className="py-2 px-4 text-left border-r border-gray-200">
                      <div className=" flex space-x-2 ">
                        <AiOutlineOpenAI className=" text-2xl font-bold right-1 bottom-1 text-black" />
                        <span>Action Column</span>

                      </div>
                    </th>
                    <th className="flex justify-between py-2 px-4 text-left border-r border-gray-200">
                      <div className="flex items-center space-x-2">
                        < MdBusiness className="text-2xl " />
                        <div className="ml-20">Enrich Company</div>
                      </div>
                      <CiPlay1 className="font-bold " />
                    </th>
                    <th className="py-2 px-4 text-left">
                      <div className=" flex space-x-1">
                        <MdAdd className=" text-2xl font-bold right-1 bottom-1 text-black" />
                        <span>Add Column</span>

                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 border-r border-gray-200">
                      1
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">
                      <IoPlayCircleOutline className="text-blue-600 text-3xl" />
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">
                      Oct 12, 2024 at 14:08 PM
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">
                      Bitscale Evaluation - Account relev...
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">

                      <div className=" flex space-x-1">
                        <TbBrandFigma className=" text-1xl font-bold right-1 bottom-1 text-red-600" />
                        <span>   Bitscale Evaluation - Account r...</span>

                      </div>

                    </td>
                    <td className="py-2 px-4"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 border-r border-gray-200">
                      2
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">
                      <IoPlayCircleOutline className="text-blue-600 text-3xl" />
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">
                      Oct 12, 2024 at 14:08 PM
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">

                      <div className=" flex space-x-1">
                        <IoWarningOutline className=" text-1xl font-bold right-1 bottom-1 text-red-600" />
                        <span> cell data size exceeds limit</span>

                      </div>
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">

                      <div className=" flex space-x-1">
                        <MdSave className=" text-1xl font-bold right-1 bottom-1 text-red-600" />
                        <span>BMW Evaluation - Relevancy che...</span>

                      </div>
                    </td>
                    <td className="py-2 px-4"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 border-r border-gray-200">
                      3
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">
                      <IoPlayCircleOutline className="text-blue-600 text-3xl" />
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">
                      Oct 12, 2024 at 14:08 PM
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">


                      <div className=" flex space-x-1 items-center ">
                        <GrShare className=" text-base font-bold right-1 bottom-1 text-blue-500 " />
                        <a
                          href="https://www.linkedin.com/bitscale"
                          className="text-blue-500 hover:underline"
                        >
                          https://www.linkedin.com/bits...
                        </a>

                      </div>
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">

                      <div className=" flex space-x-1">
                        <FaAppStoreIos className=" text-1xl font-bold right-1 bottom-1 text-red-600" />
                        <span>   Google Evaluation - Lilevancy...</span>

                      </div>
                    </td>
                    <td className="py-2 px-4"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 border-r border-gray-200">
                      4
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">
                      <IoPlayCircleOutline className="text-blue-600 text-3xl" />
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">
                      Oct 12, 2024 at 14:08 PM
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">
                      <div className=" flex space-x-1">
                        <RiLoader2Fill className=" text-2xl font-bold right-1 bottom-1 text-black" />
                        <span> Loading data, Please wait </span>

                      </div>
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">
                      <div className=" flex space-x-1">
                        <RiLoader2Fill className=" text-2xl font-bold right-1 bottom-1 text-black" />
                        <span>Loading data, Please wait</span>

                      </div>
                    </td>
                    <td className="py-2 px-4"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 border-r border-gray-200">
                      5
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">
                      <IoPlayCircleOutline className="text-blue-600 text-3xl" />
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">
                      Oct 12, 2024 at 14:08 PM
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">
                      <div className=" flex space-x-1">
                        <RiLoader2Fill className=" text-2xl font-bold right-1 bottom-1 text-black" />
                        <span>Loading data, Please wait</span>

                      </div>
                    </td>
                    <td className="py-2 px-4 border-r border-gray-200">

                      <div className=" flex space-x-1">
                        <TbBrandFigma className=" text-1xl font-bold right-1 bottom-1 text-red-600" />
                        <span>   Figma Evaluation - Evancy che...</span>

                      </div>
                    </td>
                    <td className="py-2 px-4"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 border-r border-gray-200">

                    </td>
                    <td className=" border-r border-gray-200">

                    </td>
                    <td className=" border-r border-gray-200 flex py-2 px-4">
                      <MdAdd className=" text-2xl font-bold right-1 bottom-1 text-black" />
                      <span>Add Row</span>

                    </td>
                    <td className="  border-r border-gray-200">

                    </td>
                    <td className=" border-r border-gray-200">

                    </td>
                    <td ></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 border-r border-gray-200">

                    </td>
                    <td className=" border-r border-gray-200">

                    </td>
                    <td className=" border-r border-gray-200">

                    </td>
                    <td className="  border-r border-gray-200">

                    </td>
                    <td className=" border-r border-gray-200">

                    </td>
                    <td ></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 border-r border-gray-200">

                    </td>
                    <td className=" border-r border-gray-200">

                    </td>
                    <td className=" border-r border-gray-200">

                    </td>
                    <td className="  border-r border-gray-200">

                    </td>
                    <td className=" border-r border-gray-200">

                    </td>
                    <td ></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 border-r border-gray-200">

                    </td>
                    <td className=" border-r border-gray-200">

                    </td>
                    <td className=" border-r border-gray-200">

                    </td>
                    <td className="  border-r border-gray-200">

                    </td>
                    <td className=" border-r border-gray-200">

                    </td>
                    <td ></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 border-r border-gray-200">

                    </td>
                    <td className=" border-r border-gray-200">

                    </td>
                    <td className=" border-r border-gray-200">

                    </td>
                    <td className="  border-r border-gray-200">

                    </td>
                    <td className=" border-r border-gray-200">

                    </td>
                    <td ></td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
