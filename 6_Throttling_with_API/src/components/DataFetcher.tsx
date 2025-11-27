import { useEffect } from "react";

export default function DataFetcher({ setData }: any) {
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://dummyjson.com/products?limit=150"
        );
        const json = await res.json();
        setData(json.products);
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, []);

  return null;
}
