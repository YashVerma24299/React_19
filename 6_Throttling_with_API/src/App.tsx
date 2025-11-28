import { useState } from "react";
import DataFetcher from "./components/DataFetcher";
import ScrollLoader from "./components/ScrollLoader";
import ProductTable from "./components/ProductTable";

export default function App() {
  const [data, setData] = useState<any[]>([]);
  const [visible, setVisible] = useState(30);
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-full bg-[#f4f6f8] font-[arial] p-6">
      <h2 className="text-center text-2xl">Infinite Products Table</h2>

      <DataFetcher setData={setData} />

      <ScrollLoader
        total={data.length}
        visible={visible}
        setVisible={setVisible}
        setLoading={setLoading}
      />

      <ProductTable data={data} visible={visible} />

      {loading && <p className="text-center font-bold my-5">Loading...</p>}
    </div>
  );
}
