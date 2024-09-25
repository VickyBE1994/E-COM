import React from "react";
import Title from "../components/Title";
import NewsLetterBox from '../components/NewsLetterBox'
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="text-2xl text-center pt-8 border-t">
      <Title text1={"ABOUT"} text2={"US"} />
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to V-Comm, your ultimate destination for fashion-forward
            styles and timeless elegance. Founded with a passion for fashion and
            a commitment to quality
          </p>

          <p>
            Born out of a love for all things fashion, V-Comm was created to
            offer a seamless shopping experience, combining the convenience of
            online shopping
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At V-Comm, we believe that fashion is more than just clothing – it's
            a form of self-expression. Our mission is to provide a diverse range
            of styles, from classic pieces to bold,
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-800">
            At V-Comm, quality is at the heart of everything we do. We believe
            that fashion should not only look good but also feel good and stand
            the test of time.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convinience</b>
          <p className="text-gray-800">
            We stand behind the quality of our products and are committed to
            your satisfaction. If for any reason you are not completely happy
            with your purchase, our dedicated customer support team is here to
            help with easy returns and exchanges
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exeptional Customer Service:</b>
          <p className="text-gray-800">
            Quality doesnt just mean creating beautiful products; it also means
            being mindful of our impact on the environment. We are committed to
            implementing sustainable practices throughout our production proces
          </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default About;
