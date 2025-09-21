import React from "react";
import bannerImg from "../assets/images/bannerImg.png";
import { Link } from "react-router";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <section
        id="banner"
        style={{
          background: `URL(${bannerImg})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
        }}
        className=" bg-left lg:backgroundPosition: center, w-full pt-[163px] pb-[199px]  relative z-999 lg:py-[228px]"
      >
        <div className=" absolute top-0 left-0 bg-linear-to-r from-[#13102260] to-[#13102298] w-full h-100"></div>

        <div className="container">
          <div id="banner-row" className=" z-999">
            <div id="heading" className="w-[856px] z-9999">
              <div className="w-[856px] text-center">
                <h1 className="text-[72px] z-9999 font-extrabold font-main text-white">
                  The Best IT Solutions for Your Business
                </h1>
              </div>
              <div className="w-[856px] text-center">
                <p className="text-[20px] font-normal font-main text-[#fff]">
                  We carry out the widest range of high quality IT services and
                  solutions to our customers making their business better.
                </p>
              </div>
              <button className="w-[200px] py-[13px] text-[16px] font-semibold font-main text-[#fff] rounded-[8px] bg-[#6366F1]">
                Start your project
              </button>
            </div>
            {/* ----------- icons */}
            <div className=" flex items-center gap-[8px] ">
              <div className="w-[44px] h-[44px] bg-[#ffffff1e] shadow-[20px_20px_60px_-15px_rgba(255,_255,_255,_0.5)] group  hover:bg-white duration-[.3s] rounded-full flex justify-center items-center">
                <Link to={"/"}>
                  <FaLinkedinIn className="text-white group-hover:text-sky-400" />
                </Link>
              </div>

              <div className="w-[44px] h-[44px] bg-[#ffffff1e] shadow-[20px_20px_60px_-15px_rgba(255,_255,_255,_0.5)] group  hover:bg-white duration-[.3s] rounded-full flex justify-center items-center">
                <Link to={"/"}>
                  <FaFacebookSquare className="text-white group-hover:text-sky-400" />
                </Link>
              </div>

              <div className="w-[44px] h-[44px] bg-[#ffffff1e] shadow-[20px_20px_60px_-15px_rgba(255,_255,_255,_0.5)] group  hover:bg-white duration-[.3s] rounded-full flex justify-center items-center">
                <Link to={"/"}>
                  <FaTwitter className="text-white group-hover:text-black" />
                </Link>
              </div>

              <div className="w-[44px] h-[44px] bg-[#ffffff1e] shadow-[20px_20px_60px_-15px_rgba(255,_255,_255,_0.5)] group  hover:bg-white duration-[.3s] rounded-full flex justify-center items-center">
                <Link to={"/"}>
                  <FaYoutube className="text-white group-hover:text-red-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
