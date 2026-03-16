import { useDispatch } from "react-redux";
import { deleteProduct } from "../features/products/productSlice";

export default function ProductItem({ product }) {

  const dispatch = useDispatch();

  return (
    <tr className="border text-center">

      <td className="p-2">{product.name}</td>

      <td>{product.price}</td>

      <td>{product.stock}</td>

      <td>
        <button
          onClick={() =>
            dispatch(deleteProduct(product.id))
          }
          className="bg-red-500 text-white px-3 py-1"
        >
          Delete
        </button>
      </td>

    </tr>
  );
}