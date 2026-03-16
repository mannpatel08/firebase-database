import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/products/productSlice";

export default function ProductForm() {

  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    stock: ""
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));

    setProduct({
      name: "",
      price: "",
      stock: ""
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 shadow rounded mb-6"
    >
      <h2 className="text-xl font-bold mb-3">
        Add Product
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleChange}
        className="border p-2 mr-2"
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
        className="border p-2 mr-2"
      />

      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={product.stock}
        onChange={handleChange}
        className="border p-2 mr-2"
      />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </form>
  );
}