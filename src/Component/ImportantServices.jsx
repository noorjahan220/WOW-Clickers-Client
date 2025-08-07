import React from "react";
import { FaLaptopCode, FaMobileAlt, FaGift } from "react-icons/fa";
import { MdDesignServices, MdOutlineBrandingWatermark } from "react-icons/md";
import { PiPaintBrushBroad } from "react-icons/pi";
import { BiWorld } from "react-icons/bi";

const services = [
  {
    icon: <FaLaptopCode className="text-3xl text-blue-500" />,
    title: "Web Design",
  },
  {
    icon: <MdDesignServices className="text-3xl text-blue-500" />,
    title: "Graphic Design",
  },
  {
    icon: <MdOutlineBrandingWatermark className="text-3xl text-blue-500" />,
    title: "Branding",
  },
  {
    icon: <FaMobileAlt className="text-3xl text-blue-500" />,
    title: "Mobile Apps",
  },
  {
    icon: <FaGift className="text-3xl text-blue-500" />,
    title: "Online Marketing",
  },
  {
    icon: <BiWorld className="text-3xl text-blue-500" />,
    title: "Development",
  },
];

const ImportantServices = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <p className="text-sm text-blue-500 uppercase font-semibold mb-1">
              What we provide
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Best & Important Services
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-md mt-4 md:mt-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-4 bg-white p-4 rounded-md border border-blue-50"
            >
              <div className="shrink-0">{service.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm mb-2 border-l-2 border-blue-500 pl-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry simply dummy text typesetting.
                </p>
                <a
                  href="#"
                  className="text-xs font-semibold text-blue-500"
                >
                  ▸ Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantServices;
