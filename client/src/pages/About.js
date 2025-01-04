import React from "react";
import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="flex flex-wrap justify-center items-center p-10 mt-20">
        {/* Image Section */}
        <div className="w-full md:w-1/2 p-4">
          <img
            src="/images/about.jpeg"
            alt="About us"
            className="w-full rounded-md shadow-md"
          />
        </div>
        {/* Text Section */}
        <div className="w-full md:w-1/3 p-4">
          <p className="text-justify mt-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
