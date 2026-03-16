import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {

  return (
    <div className="container mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Inventory Tracking System
      </h1>

      <ProductForm />

      <ProductList />

    </div>
  );
}

export default App;