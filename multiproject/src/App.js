import React from "react";
import ProductList from "./Components/products/ProductList";
// import EventManagementSystem from "./Components/Events/EventManagementSystem";

export default function App() {
  return (
    <div className="bg-slate-900 mix-h-screen text-white">
      {/* <EventManagementSystem /> */}
      <h1>Product Catalog</h1>
      <ProductList />
    </div>
  );
}
