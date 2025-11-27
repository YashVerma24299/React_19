import { useState } from "react";
import DataFetcher from "./components/DataFetcher";
import ScrollLoader from "./components/ScrollLoader";
import ProductTable from "./components/ProductTable";
import "./App.css";

export default function App() {
  const [data, setData] = useState<any[]>([]);
  const [visible, setVisible] = useState(30);
  const [loading, setLoading] = useState(false);

  return (
    <div className="container">
      <h2>Infinite Products Table</h2>

      <DataFetcher setData={setData} />

      <ScrollLoader
        total={data.length}
        visible={visible}
        setVisible={setVisible}
        setLoading={setLoading}
      />

      <ProductTable data={data} visible={visible} />

      {loading && <p className="loading">Loading...</p>}
    </div>
  );
}
