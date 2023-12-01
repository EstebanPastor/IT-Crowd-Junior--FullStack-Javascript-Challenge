import { Link } from "react-router-dom";

const Category = () => {
  const companyLogo = [
    { id: 1, img: "/company/brand1.png" },
    { id: 2, img: "/company/brand2.png" },
    { id: 3, img: "/company/brand3.png" },
    { id: 4, img: "/company/brand4.png" },
    { id: 5, img: "/company/brand5.png" },
  ];
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28">
      <div className="flex items-center justify-around flex-wrap gap-4 py-5">
        {companyLogo.map(({ id, img }) => {
          return (
            <div key={id}>
              <img src={img} alt="brand-images" />
            </div>
          );
        })}
      </div>
      <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
        <p className="font-semibold uppercase md:-rotate-90 text-center bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex">
          Explore new and popular styles
        </p>
        <div>
          <Link to="/">
            <img
              src="/category/image1.png"
              alt="category-image"
              className="w-full hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-2">
            <img
              src="/category/image2.png"
              alt="category-image"
              className="w-full hover:scale-105 transition-all duration-200"
            />
            <img
              src="/category/image3.png"
              alt="category-image"
              className="w-full hover:scale-105 transition-all duration-200"
            />
            <img
              src="/category/image4.png"
              alt="category-image"
              className="w-full hover:scale-105 transition-all duration-200"
            />
            <img
              src="/category/image5.png"
              alt="category-image"
              className="w-full hover:scale-105 transition-all duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
