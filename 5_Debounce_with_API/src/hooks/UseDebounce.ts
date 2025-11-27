import { useEffect, useState } from "react";

export default function useWikiSearch(text: string) {
  const [items, setItems] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!text) {
      setItems([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${text}&limit=10&origin=*&format=json`);
        const data = await res.json();
        setItems(data[1]);
      } catch (e) {
        console.log(e);
        setItems([]);
      } finally {
        setLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [text]);

  return { items, loading };
}
