import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Dummy blog posts data
const posts = [
  {
    date: "May 5, 2019",
    category: "Design",
    title: "The Best Tips to Make You Rich.",
    image: "https://i.ibb.co.com/RT0QJs0k/micheile-henderson-So-T4-m-Zhyh-E-unsplash.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
  {
    date: "Oct 6, 2019",
    category: "Logo",
    title: "How to Create a Great Business.",
    image: "https://i.ibb.co.com/60jtqrJz/seo-galaxy-z-Z7-J5qri6q-Y-unsplash.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
  {
    date: "Sep 20, 2019",
    category: "Branding",
    title: "Steps to Encourage Yourself to Work.",
    image: "https://i.ibb.co.com/RTxk6jXZ/mario-gogh-VBLHICVh-l-I-unsplash.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
];

// Custom arrow buttons
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-full shadow absolute -top-12 right-12 z-20"
  >
    <FaArrowLeft size={14} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-full shadow absolute -top-12 right-2 z-20"
  >
    <FaArrowRight size={14} />
  </button>
);

const RecentPost = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <p className="text-sm text-blue-500 uppercase font-semibold mb-1">
              What are the latest news
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Creative Recent Posts
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-md mt-4 md:mt-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <Slider {...settings}>
            {posts.map((post, index) => (
              <div key={index} className="px-2">
                <div className="bg-white rounded-lg overflow-hidden border border-blue-50 hover:shadow-lg transition duration-300">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between text-xs text-blue-500 font-semibold mb-2 uppercase">
                      <span>{post.date}</span>
                      <span>{post.category}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3 border-l-2 border-blue-500 pl-4">
                      {post.description}
                    </p>
                    <a
                      href="#"
                      className="text-xs font-semibold text-blue-500"
                    >
                      ▸ Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default RecentPost;