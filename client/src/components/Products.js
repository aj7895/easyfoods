import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions/productActions.js";
import ProductCard from "./ProductCard.js";
const Products = () => {
  const getProducts = useSelector((state) => state.getAllProductsReducer);
  const { loading, products, error } = getProducts;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="flex items-center justify-center flex-wrap gap-14 lg:px-4 2xl:px-32 py-24">
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error</h1>
      ) : (
        products &&
        products.slice(0, 8).map((product) => <ProductCard product={product} />)
      )}
    </div>
  );
};

export default Products;
