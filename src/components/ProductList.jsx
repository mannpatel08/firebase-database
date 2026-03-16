import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
import ProductItem from "./ProductItem";

export default function ProductList() {

  const dispatch = useDispatch();

  const products = useSelector(
    (state) => state.products.list
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="bg-white p-4 shadow rounded">

      <h2 className="text-xl font-bold mb-3">
        Inventory
      </h2>

      <table className="w-full border">

        <thead className="bg-gray-200">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}