import { useEffect, useState } from "react";
import Cards from "../ui/cards/Cards";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://estebanapastor.pythonanywhere.com/products/");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchProducts();
  }, []);

  const handleSortChange = (option) => {
    setSortOption(option);

    let sortedProductsItems = [...products];

    switch (option) {
      case "A-Z":
        sortedProductsItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedProductsItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedProductsItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedProductsItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(sortedProductsItems);
  };

  const handleFilterClick = () => {
    setFilteredProducts(products);

    setSortOption("default");
  };

  useEffect(() => {
    handleSortChange("default");
  }, [products]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-screen2xl container mx-auto xl:px-28 px-4 mb-12">
      <h2 className="title">Or subscribe to the newsletter</h2>
      <div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          <div className="flex justify-end mb-4 rounded-sm gap-1">
            <div className="bg-black p-2" onClick={handleFilterClick}>
              <div className="bg-black text-white p-2 ">
               
                All products
              
              </div>
            </div>
            <select
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className="bg-black text-white px-2 py-1 rounded-sm"
            >
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>
        <Cards filteredItems={currentItems} />
        <div className="flex justify-center mt-4">
          {Array.from(
            { length: Math.ceil(filteredProducts.length / itemsPerPage) },
            (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className="mx-2 px-3 py-1 bg-gray-300"
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
