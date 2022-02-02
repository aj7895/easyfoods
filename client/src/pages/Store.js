import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions/productActions.js";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter.js";
const Store = () => {
  const getProducts = useSelector((state) => state.getAllProductsReducer);
  const { loading, products, error } = getProducts;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      <Filter />
      <div className="flex items-center justify-center flex-wrap gap-14 lg:px-4 2xl:px-32 py-24">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          products &&
          products.map((product) => <ProductCard product={product} />)
        )}
      </div>
    </>
  );
};

export default Store;
