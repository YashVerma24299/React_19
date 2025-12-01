// Lazy-Loading => Jab jarurat ho tbb hi vo kaam ho
import { useState, lazy, Suspense } from "react";

const User = lazy(() => import("./User"));

export default function App() {
  const [load, setLoad] = useState(false);

  return (
    <div>
      <h1>Lazy Loading</h1>

      <button onClick={() => setLoad(true)}>
        Load Data
      </button>

      {load && (
        <Suspense fallback={<p>Loading user...</p>}>
          <User />
        </Suspense>
      )}
    </div>
  );
}
