import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedProduct, setEditedProduct] = useState({});
  const [isDeleted, setIsDeleted] = useState(false);
  const [productCounter, setProductCounter] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://estebanapastor.pythonanywhere.com/products/");
        const data = await response.json();
        const product = data.find((p) => p.id == id);
        setProducts(product ? [product] : []);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchProducts();
  }, [id]);

  const handleEdit = () => {
    setIsEditMode(true);
    setEditedProduct({ ...products[0] });
  };

  const handleSave = () => {
    setProducts([editedProduct]);
    setIsEditMode(false);
  };

  const handleDelete = () => {
    setIsDeleted(true);
  };

  const handleCancel = () => {
    setIsEditMode(false);
    setIsDeleted(false);
  };

  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now(),
      name: "New Product",
      price: 0,
      description: "Product description",
      image_url: products[0]?.image_url || "default_image_url.jpg", 
    };

    setProducts([newProduct]);
    setProductCounter((prevCounter) => prevCounter + 1);
  };

  const handleDeleteProduct = () => {
    setIsDeleted(true);
  };



  const { name, price, image_url, description } = isEditMode
    ? editedProduct
    : products[0];

  return (
    <div className="mt-28 max-w-screen-2xl container mx-auto xl-px-28 px-4">
      <div className="p-3 max-w-7xl m-auto">
        <div className="mt-6 sm:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
            <div>
              <img
                src={image_url}
                alt="product-image"
                className="w-full"
                loading="lazy"
                onError={() => setImageError(true)}
              />
              {imageError && <p>Image not available</p>}
            </div>
            <div>
              <h1 className="title text-left">
                {isEditMode ? (
                  <input
                    type="text"
                    value={editedProduct.name}
                    onChange={(e) =>
                      setEditedProduct({
                        ...editedProduct,
                        name: e.target.value,
                      })
                    }
                  />
                ) : (
                  name
                )}
              </h1>
              <p className="mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-4">
                {isEditMode ? (
                  <textarea
                    value={editedProduct.description}
                    onChange={(e) =>
                      setEditedProduct({
                        ...editedProduct,
                        description: e.target.value,
                      })
                    }
                  />
                ) : (
                  description
                )}
              </p>
              <p className="text-xl text-red-500 font-semibold sm:text-2xl">
                $
                {isEditMode ? (
                  <input
                    type="number"
                    value={editedProduct.price}
                    onChange={(e) =>
                      setEditedProduct({
                        ...editedProduct,
                        price: e.target.value,
                      })
                    }
                  />
                ) : (
                  price
                )}
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
