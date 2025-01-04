import React from "react";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import Layout from "../components/layout/Layout";

const Contact = () => {
  return (
    <Layout title='contact us'>
      <div className="flex flex-col md:flex-row justify-center mt-20 items-center gap-8 p-8">
        {/* Left section with image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            className="w-full h-auto"
          />
        </div>

        {/* Right section with contact info */}
        <div className="w-full md:w-1/3 bg-gray-800 text-white p-6 rounded-lg shadow-lg">
          <h1 className="text-xl font-bold bg-gray-900 p-4 text-center rounded-lg mb-4">
            CONTACT US
          </h1>
          <p className="text-justify mb-4">
            For any queries or information about our products, feel free to call us anytime. We are available 24x7.
          </p>
          <div className="space-y-3">
            <p className="flex items-center">
              <BiMailSend className="mr-2" /> www.help@ecommerceapp.com
            </p>
            <p className="flex items-center">
              <BiPhoneCall className="mr-2" /> 012-3456789
            </p>
            <p className="flex items-center">
              <BiSupport className="mr-2" /> 1800-0000-0000 (toll-free)
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
