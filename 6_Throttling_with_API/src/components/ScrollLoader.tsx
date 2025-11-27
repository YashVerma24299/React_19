import { useEffect, useRef } from "react";

export default function ScrollLoader({
  total,
  visible,
  setVisible,
  setLoading,
}: any) {
    const isRunning = useRef(false);
  useEffect(() => {
    function onScroll(){

      if (window.innerHeight + window.scrollY >=document.documentElement.scrollHeight - 50) {
        if (visible < total && !isRunning.current) {
            isRunning.current = true;
          setLoading(true);
          setTimeout(() => {
            setVisible((prev: number) => prev + 10);
            setLoading(false);
            isRunning.current = false;
          }, 800);
        }
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [visible, total]);

  return null;
}
