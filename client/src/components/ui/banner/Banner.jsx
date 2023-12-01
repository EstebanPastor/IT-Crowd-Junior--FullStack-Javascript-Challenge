const Banner = () => {
  return (
    <div className="bg-gray-200 py-12 xl:px-28 px-4" >
      <div className="py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14">
        <div className="md:w-1/2">
          <img src="/shopping-woman.png" alt="shopping-woman" className="rounded-lg w-72"/>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-5xl font-light mb-5">Collections</h1>
          <p className="text-xl mb-7">Explore the best products here</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
