import Banner from "../../components/ui/banner/Banner";
import Category from "./Category";
import Products from "../../components/products/Products";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <Category />
        <Products />
      </div>
    </>
  );
};

export default Home;
