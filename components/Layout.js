import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { Store } from "@/utils/Store";
import SelectionModal from "@/components/SelectionModal";
import { cars } from "@/utils/cars";
import CarCard from "./CarCard";
import { useRouter } from "next/router";
import { useRef } from "react";

//we will remove this variable and selectedVehicleImage state later when data for cars is complete
let imageToShow = "0";

function Layout({ title, children }) {
  const router = useRouter();
  const modalSearchRef = useRef();
  const [show, setShow] = useState(null);
  const {
    state,
    setModalOpen,
    modalOpen,
    setSelectedVehicle,
    selectedVehicle,
    setSelectedVehicleImage,
    searchInfo,
    setSearchInfo,
  } = useContext(Store);


  const { cart } = state;


  // function that handle the search bar
  const search = (returnData, [keywords]) => {
    const searchedValue = () => {
      return returnData.filter((items) =>
        [keywords].some((key) => {
          return items[key].toLowerCase().includes(searchInfo);
        })
      );
    };
    if (searchedValue().length > 0) {
      return searchedValue();
    } else {
      return [];
    }
  };

  return (
    <>
      <Head>
        <title>
          {title ? title + " - ExpertsMechanic" : "ExpertsMechanic"}
        </title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="">
        <div className="bg-gray-200 h-full w-full  ">
          {/* Code block starts */}
          <nav className="w-full bg-white hidden xl:block shadow fixed overflow-y-auto z-40 top-0">
            <div className="container px-6 h-16 flex justify-between items-center lg:items-stretch mx-auto ">
              <div className="flex items-center">
                <div className="mr-10 flex items-center">
                  <Link href="/">
                    <Image
                      src="/em-logo.svg"
                      alt="Picture of the author"
                      width={200}
                      height={0}
                    />
                  </Link>
                </div>
                <ul className="hidden xl:flex items-center h-full">
                  <li className="cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-gray-800 tracking-normal transition duration-150 ease-in-out">
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-grid"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <rect x={4} y={4} width={6} height={6} rx={1} />
                        <rect x={14} y={4} width={6} height={6} rx={1} />
                        <rect x={4} y={14} width={6} height={6} rx={1} />
                        <rect x={14} y={14} width={6} height={6} rx={1} />
                      </svg>
                    </span>
                    <Link href="/services">Services</Link>
                  </li>
                  <li className="cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-gray-800 mx-10 tracking-normal transition duration-150 ease-in-out">
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-puzzle"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                      </svg>
                    </span>
                    <Link href="/about">About us</Link>
                  </li>
                  <li className="cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-gray-800 mr-10 tracking-normal transition duration-150 ease-in-out">
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-compass"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="8 16 10 10 16 8 14 14 8 16" />
                        <circle cx={12} cy={12} r={9} />
                      </svg>
                    </span>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li className="cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-gray-800 tracking-normal transition duration-150 ease-in-out">
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-code"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="7 8 3 12 7 16" />
                        <polyline points="17 8 21 12 17 16" />
                        <line x1={14} y1={4} x2={10} y2={20} />
                      </svg>
                    </span>
                    <Link href="/blogpage">Blogs</Link>
                  </li>
                </ul>
              </div>

              {/* search */}
              <div className="flex items-center gap-10">
                <div className="">
                  <Link href="/cart" className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    {cart.cartItems.length > 0 && (
                      <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </span>
                    )}
                  </Link>
                </div>

                <form className="flex items-center">
                  <label for="simclassNameple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </form>
              </div>
              <div className="flex items-center xl:hidden">
                <ul className="p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16 hidden">
                  <li className="flex md:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-grid"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <rect x={4} y={4} width={6} height={6} rx={1} />
                        <rect x={14} y={4} width={6} height={6} rx={1} />
                        <rect x={4} y={14} width={6} height={6} rx={1} />
                        <rect x={14} y={14} width={6} height={6} rx={1} />
                      </svg>
                      <span className="ml-2 font-bold">
                        <Link href="/services">Services</Link>
                      </span>
                    </div>
                  </li>
                  <li className="flex md:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none justify-center">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-puzzle"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                      </svg>
                      <span className="ml-2 font-bold">
                        <Link href="/services">About us</Link>
                      </span>
                    </div>
                  </li>
                  <li className="flex md:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700  items-center focus:text-indigo-700 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-compass"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="8 16 10 10 16 8 14 14 8 16" />
                      <circle cx={12} cy={12} r={9} />
                    </svg>
                    <span className="ml-2 font-bold">
                      <Link href="/services">Contact</Link>
                    </span>
                  </li>
                  <li className="border-b border-gray-300 flex md:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none  justify-center">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-code"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="7 8 3 12 7 16" />
                        <polyline points="17 8 21 12 17 16" />
                        <line x1={14} y1={4} x2={10} y2={20} />
                      </svg>
                      <span className="ml-2 font-bold">
                        <Link href="/services">Blogs</Link>
                      </span>
                    </div>
                  </li>
                  <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                    <div className="flex items-center">
                      <div className="w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out">
                        <img
                          className="rounded h-10 w-10 object-cover"
                          src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png"
                          alt="logo"
                        />
                      </div>
                      <p className="text-sm ml-2 cursor-pointer">Jane Doe</p>
                      <div className="sm:ml-2 text-gray-800 relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                  </li>
                  <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-user"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={12} cy={7} r={4} />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                      </svg>
                      <span className="ml-2">Profile</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* Navbar */}
          <nav>
            <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-white fixed top-0 z-40">
              <div className="w-24">
                <Image
                  src="/em-logo.svg"
                  alt="Picture of the author"
                  width={150}
                  height={0}
                />
              </div>

              <div className="flex gap-5">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>
                <div
                  id="menu"
                  className="text-gray-800"
                  onClick={() => setShow(!show)}
                >
                  {show ? (
                    " "
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-menu-2"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1={4} y1={6} x2={20} y2={6} />
                      <line x1={4} y1={12} x2={20} y2={12} />
                      <line x1={4} y1={18} x2={20} y2={18} />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            {/*Mobile responsive sidebar*/}
            <div
              className={
                show
                  ? "fixed xl:hidden w-full h-full transform -translate-x-0 z-40 transition "
                  : "fixed xl:hidden w-full h-full  transform -translate-x-full z-40 transition"
              }
              id="mobile-nav"
            >
              <div
                className="bg-gray-800 opacity-50 w-full h-full "
                onClick={() => setShow(!show)}
              />
              <div className="w-64  fixed overflow-y-auto z-40 top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition -ease-in-out delay-150">
                <div className="px-6 h-full">
                  <div className="flex flex-col justify-between h-full w-full">
                    <div>
                      <div className="mt-6 flex w-full items-center justify-between">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center">
                            <Image
                              src="/em-logo.svg"
                              alt="Picture of the author"
                              width={150}
                              height={0}
                            />
                          </div>
                          <div
                            id="cross"
                            className="text-gray-800"
                            onClick={() => setShow(!show)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-x"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <line x1={18} y1={6} x2={6} y2={18} />
                              <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <ul className="f-m-m">
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 text-indigo-700">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-grid"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x={4} y={4} width={6} height={6} rx={1} />
                                <rect
                                  x={14}
                                  y={4}
                                  width={6}
                                  height={6}
                                  rx={1}
                                />
                                <rect
                                  x={4}
                                  y={14}
                                  width={6}
                                  height={6}
                                  rx={1}
                                />
                                <rect
                                  x={14}
                                  y={14}
                                  width={6}
                                  height={6}
                                  rx={1}
                                />
                              </svg>
                            </div>
                            <p className="text-indigo-700 xl:text-sm text-base ml-3">
                              <Link href="/services">Services</Link>
                            </p>
                          </div>
                        </li>

                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon icon-tabler icon-tabler-puzzle"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                </svg>
                              </div>
                              <p className="text-gray-800 xl:text-sm md:text-xl text-base ml-3">
                                <Link href="/about">About us</Link>
                              </p>
                            </div>
                          </div>
                        </li>

                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-compass"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                <circle cx={12} cy={12} r={9} />
                              </svg>
                            </div>
                            <p className="text-gray-800 xl:text-sm md:text text-base ml-3">
                              <Link href="/contact">Contact</Link>
                            </p>
                          </div>
                        </li>
                        <li className="text-gray-800 pt-8 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon icon-tabler icon-tabler-code"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <polyline points="7 8 3 12 7 16" />
                                  <polyline points="17 8 21 12 17 16" />
                                  <line x1={14} y1={4} x2={10} y2={20} />
                                </svg>
                              </div>
                              <p className="text-gray-800 xl:text-sm md:textsm text-base ml-3">
                                <Link href="/blogpage">Blogs</Link>
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="w-full pt-4">
                      <div className="flex justify-center mb-4 w-full">
                        <div className="relative w-full">
                          <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-search"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              strokeWidth={1}
                              stroke="#A0AEC0"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <circle cx={10} cy={10} r={7} />
                              <line x1={21} y1={21} x2={15} y2={15} />
                            </svg>
                          </div>
                          <input
                            className=" focus:outline-none rounded w-full text-sm text-gray-500 bg-gray-700 pl-10 py-2"
                            type="text"
                            placeholder="Search"
                          />
                        </div>
                      </div>
                      <div className="border-t border-gray-300">
                        <div className="w-full flex items-center justify-between pt-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          {/* Sidebar ends */}
          {/* Code block ends */}
        </div>
      </header>

      <main className="">
        {children}{" "}
        {modalOpen && (
          <SelectionModal
            isOpen={modalOpen}
            handleClose={() => {
              setSearchInfo("");
              setModalOpen(!modalOpen);
            }}
          >
            <div className="flex flex-col justify-between overflow-y-scroll overflow-x-hidden w-full lg:px-20 px-10 mb-5">
              {/* Search */}
              <div className="flex items-center  sm:fixed lg:relative">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSearchInfo(modalSearchRef.current.value);
                  }}
                  className="flex items-center w-full"
                >
                  <label for="simclassNameple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500  focus:border-blue-500 outline-blue-500"
                      placeholder="Search"
                      ref={modalSearchRef}
                    />
                  </div>
                  <button
                    type="submit"
                    className="p-2.5  text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </form>
              </div>
              {/* fetch cars and display */}

              {search(cars, ["name"]).length > 0 ? (
                <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 h-full py-5 ">
                  {!router.query.carModel || router.query.carModel === ""
                    ? search(cars, ["name"])?.map((items) => {
                        return (
                          <CarCard
                            key={items.id}
                            id={items.id}
                            name={items.name}
                            image={items.image}
                            showAsSelected={false}
                          />
                        );
                      })
                    : search(
                        cars.find((items) => {
                          imageToShow = items.id;
                          return items.id == router.query.carModel;
                        })?.models,
                        ["model"]
                      )?.map((items, index) => {
                        const allModelsinSelectedBrand = items;

                        return (
                          <CarCard
                            key={index}
                            id={index}
                            name={items.model}
                            image={cars[router.query.carModel].car_images}
                            showAsSelected={false}
                            onClick={() => {
                              setSelectedVehicle([
                                { ...allModelsinSelectedBrand, discount: 40 },
                              ]);
                              setModalOpen(!modalOpen);
                              setSelectedVehicleImage(imageToShow);
                            }}
                          />
                        );
                      })}{" "}
                </div>
              ) : (
                <span className="pt-10 m-0 font-bold text-xl text-center">
                  <span className="text-3xl text-blue-700">Oops! </span> <br />{" "}
                  The vehicle you searched for is not available
                </span>
              )}
            </div>
          </SelectionModal>
        )}
      </main>
      <footer>
        <div className>
          <div className="relative flex justify-start md:justify-center md:items-end ">
            <img
              className="absolute object-cover top-10 h-full w-full xl:mt-10 z-0"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_5_marketing_background.png"
              alt="background"
            />
            <div className="flex pt-36 md:pt-32 lg:pt-40 xl:pt-96   px-4 md:px-6  xl:px-20 flex-col justify-start items-start md:justify-center md:items-center relative z-10">
              <div className="flex  flex-col items-start justify-start xl:justify-center xl:space-x-20 xl:flex-row">
                <div className="flex justify-start items-center space-x-4">
                  <h1 className="text-white font-bold text-9xl">EM</h1>
                </div>
                <div className="mt-12 xl:mt-0 grid grid-cols-1 sm:grid-cols-3 gap-y-12 sm:gap-y-0 w-full md:w-auto sm:gap-x-20 md:gap-x-28 xl:gap-8">
                  <div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6">
                    <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">
                      Community
                    </h2>
                    <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                      About Us
                    </button>
                    <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                      Guidelines and how to
                    </button>
                    <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                      Quote from the best
                    </button>
                    <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                      How to start a blog
                    </button>
                  </div>
                  <div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6">
                    <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">
                      Getting Started
                    </h2>
                    <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                      About Us
                    </button>
                    <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                      Guidelines and how to
                    </button>
                    <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                      Quote from the best
                    </button>
                    <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                      How to start a blog
                    </button>
                    <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                      Quote from the best
                    </button>
                    <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                      Guidelines and how to
                    </button>
                  </div>
                  <div className=" xl:w-72 flex justify-start items-start flex-col space-y-6">
                    <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">
                      Resources
                    </h2>
                    <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                      Accessibility
                    </button>
                    <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                      Usability
                    </button>
                    <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                      Marketplace
                    </button>
                    <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                      Design &amp; Dev
                    </button>
                    <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                      Marketplace
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-12 flex  xl:justify-between xl:flex-row flex-col-reverse items-center xl:items-start w-full ">
                <p className="mt-10 md:mt-12 xl:mt-0 text-sm leading-none text-white">
                  2020 The Good Company. All Rights Reserved
                </p>
                <div className="mt-10 md:mt-12 xl:mt-0 md:flex-row flex-col flex md:justify-center w-full md:w-auto justify-start items-start space-y-4 md:space-y-0 md:items-center md:space-x-4 xl:space-x-6">
                  <button className="text-base leading-none text-white hover:text-gray-300">
                    Terms of service
                  </button>
                  <button className="text-base leading-none text-white hover:text-gray-300">
                    Privacy Policy
                  </button>
                  <button className="text-base leading-none text-white hover:text-gray-300">
                    Security
                  </button>
                  <button className="text-base leading-none text-white hover:text-gray-300">
                    Sitemap
                  </button>
                </div>
                <div className="flex  justify-start md:justify-end items-start  w-full md:w-auto md:items-center space-x-6 ">
                  <button className="text-white hover:text-gray-200 w-6">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.25 5.13282C22.406 5.49955 21.513 5.74116 20.5992 5.85001C21.5595 5.28769 22.2817 4.39434 22.6303 3.33751C21.7224 3.86841 20.7307 4.24092 19.6978 4.43907C19.2629 3.98322 18.7397 3.62059 18.1603 3.3732C17.5808 3.12581 16.9571 2.99884 16.327 3.00001C13.7761 3.00001 11.7117 5.03438 11.7117 7.5422C11.7099 7.89102 11.7499 8.23881 11.8308 8.57813C10.0016 8.49238 8.2104 8.02575 6.57187 7.2081C4.93333 6.39044 3.48351 5.23977 2.31516 3.8297C1.90527 4.52069 1.6885 5.30909 1.6875 6.11251C1.6875 7.68751 2.50922 9.0797 3.75 9.89532C3.01487 9.87787 2.29481 9.68331 1.65094 9.32813V9.38438C1.65094 11.5875 3.24469 13.4203 5.35406 13.8375C4.9574 13.9433 4.54864 13.9968 4.13812 13.9969C3.84683 13.9974 3.5562 13.9691 3.27047 13.9125C3.85687 15.7172 5.56359 17.0297 7.58531 17.0672C5.94252 18.3333 3.9256 19.0175 1.85156 19.0125C1.48341 19.012 1.11561 18.99 0.75 18.9469C2.85993 20.2942 5.31255 21.0068 7.81594 21C16.3172 21 20.9616 14.0766 20.9616 8.07188C20.9616 7.87501 20.9564 7.67813 20.947 7.48595C21.8485 6.84472 22.6283 6.04787 23.25 5.13282V5.13282Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button className="text-white hover:text-gray-200 w-6">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.5 12.0645C22.5 6.26602 17.7984 1.56445 12 1.56445C6.20156 1.56445 1.5 6.26602 1.5 12.0645C1.5 17.3051 5.33906 21.649 10.3594 22.4374V15.1005H7.69266V12.0645H10.3594V9.75117C10.3594 7.12008 11.9273 5.66555 14.3255 5.66555C15.4744 5.66555 16.6763 5.87086 16.6763 5.87086V8.45508H15.3516C14.048 8.45508 13.6402 9.26414 13.6402 10.0957V12.0645H16.552L16.087 15.1005H13.6406V22.4384C18.6609 21.6504 22.5 17.3065 22.5 12.0645Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button className="text-white hover:text-gray-200 w-6">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 1.5C6.20297 1.5 1.5 6.20297 1.5 12C1.5 17.797 6.20297 22.5 12 22.5C17.797 22.5 22.5 17.8022 22.5 12C22.5 6.19781 17.797 1.5 12 1.5ZM18.6666 6.33984C19.8815 7.76805 20.6046 9.54925 20.7291 11.4202C18.8367 11.3217 16.5727 11.3217 14.7572 11.4914C14.5275 10.9116 14.2922 10.343 14.0353 9.79594C16.1288 8.88844 17.7422 7.69594 18.6666 6.33984ZM12 3.24984C14.0395 3.24634 16.0156 3.95866 17.5837 5.26266C16.6322 6.46547 15.1392 7.51266 13.2797 8.30297C12.2625 6.42188 11.092 4.80328 9.84375 3.52875C10.5482 3.3469 11.2725 3.25322 12 3.24984V3.24984ZM8.04047 4.20703C9.30375 5.46469 10.4906 7.06641 11.5298 8.94141C9.55547 9.54469 7.29141 9.89062 4.875 9.89062C4.41562 9.89062 3.9675 9.87422 3.52453 9.84656C3.83266 8.63935 4.3949 7.5118 5.17367 6.53927C5.95244 5.56673 6.92981 4.77161 8.04047 4.20703V4.20703ZM3.26625 11.5842C3.76406 11.6063 4.26703 11.617 4.77562 11.6119C7.53187 11.5791 10.0969 11.1469 12.3009 10.44C12.5088 10.8722 12.7056 11.3152 12.8916 11.7689C12.6252 11.8272 12.3637 11.9056 12.1092 12.0033C9.09609 13.2689 6.72281 15.3084 5.4375 17.775C4.02813 16.1814 3.25007 14.1274 3.24984 12C3.24984 11.8594 3.25547 11.7211 3.26625 11.5842ZM12 20.7502C10.056 20.7525 8.16724 20.1036 6.63516 18.907C7.8 16.5994 9.87797 14.6883 12.4978 13.5037C12.7439 13.3889 13.072 13.2961 13.4494 13.2141C13.7619 14.0778 14.0408 14.9747 14.2861 15.9047C14.6525 17.3083 14.9223 18.7354 15.0938 20.1759C14.1061 20.5543 13.0576 20.7489 12 20.7502V20.7502ZM16.7306 19.3556C16.5595 17.9001 16.2871 16.4584 15.9155 15.0408C15.728 14.3297 15.5166 13.6406 15.2869 12.968C17.0039 12.8273 19.0603 12.8475 20.6953 12.968C20.5512 14.2606 20.1206 15.5047 19.4347 16.6097C18.7488 17.7148 17.825 18.6529 16.7306 19.3556V19.3556Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button className="text-white hover:text-gray-200 w-6">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 1.5C6.20156 1.5 1.5 6.32344 1.5 12.2672C1.5 17.025 4.50937 21.0562 8.68125 22.4812C8.73977 22.494 8.79949 22.5002 8.85938 22.5C9.24844 22.5 9.39844 22.2141 9.39844 21.9656C9.39844 21.7078 9.38906 21.0328 9.38437 20.1328C9.03705 20.2142 8.68173 20.2567 8.325 20.2594C6.30469 20.2594 5.84531 18.6891 5.84531 18.6891C5.36719 17.4469 4.67813 17.1141 4.67813 17.1141C3.76406 16.4719 4.67344 16.4531 4.74375 16.4531H4.74844C5.80313 16.5469 6.35625 17.5687 6.35625 17.5687C6.88125 18.4875 7.58437 18.7453 8.2125 18.7453C8.62783 18.737 9.03673 18.6412 9.4125 18.4641C9.50625 17.7703 9.77812 17.2969 10.0781 17.025C7.74844 16.7531 5.29688 15.8297 5.29688 11.7047C5.29688 10.5281 5.70469 9.56719 6.375 8.81719C6.26719 8.54531 5.90625 7.44844 6.47812 5.96719C6.55483 5.94883 6.63368 5.94095 6.7125 5.94375C7.09219 5.94375 7.95 6.08906 9.36563 7.07344C11.0857 6.59218 12.9049 6.59218 14.625 7.07344C16.0406 6.08906 16.8984 5.94375 17.2781 5.94375C17.357 5.94095 17.4358 5.94883 17.5125 5.96719C18.0844 7.44844 17.7234 8.54531 17.6156 8.81719C18.2859 9.57187 18.6937 10.5328 18.6937 11.7047C18.6937 15.8391 16.2375 16.7484 13.8984 17.0156C14.2734 17.3484 14.6109 18.0047 14.6109 19.0078C14.6109 20.4469 14.5969 21.6094 14.5969 21.9609C14.5969 22.2141 14.7422 22.5 15.1312 22.5C15.1942 22.5003 15.2571 22.494 15.3187 22.4812C19.4953 21.0562 22.5 17.0203 22.5 12.2672C22.5 6.32344 17.7984 1.5 12 1.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
