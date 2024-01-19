import { Link } from "react-router-dom";
import { Container } from "..";
import rocket from "/large-rocket-2.png";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import playCircle from "/play_circle_filled_black.svg";
import earth1 from "/earth.png";
import earth2 from "/earth2.png";

const Hero = () => {
  return (
    <Container className="flex">
      <div className="flex w-[615px] flex-col px-4 pb-12 pt-24">
        <div className="mb-4 text-6xl font-bold animate-diagonal">
          أنشئ متجرك الالكتروني في دقائق
        </div>
        <p className="my-6 text-2xl">
          امتلك متجرا الكترونيا الان بأقل سعر و بدون عموله
        </p>
        <div className="mt-4 flex">
          <Link
            to="register"
            className="self-start rounded-full border-black bg-indigo-800 px-14 py-4 font-semibold text-white transition-colors duration-500 ease-in-out hover:bg-indigo-900"
          >
            أنشىء متجرك اﻵن
          </Link>
          <Link to="/">
            <img
              className="animate-rotating mr-7 w-[60px] rounded-full bg-indigo-900"
              src={playCircle}
              alt=""
            />
          </Link>
        </div>
      </div>

      <div className="animate-shipping w-[492px] px-4">
        <div>
          <img
            src={earth2}
            alt=""
            className="-right-110 animate-earth1 absolute top-2/3"
          />
          <img
            src={earth1}
            alt=""
            className="-left-110 -z-1 animate-earth2 absolute top-[40%]"
          />
        </div>
        <img src={rocket} alt="" />
      </div>
    </Container>
  );
};

export default Hero;
