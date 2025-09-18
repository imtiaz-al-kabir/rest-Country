import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries";

function App() {
  const fetchCountryData = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/all");
    const countryData = res.json();
    return countryData;
  };
  const countryData = fetchCountryData();
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Suspense
        fallback={
          <span className="loading loading-spinner text-error text-center"></span>
        }
      >
        <Countries countryData={countryData}></Countries>
      </Suspense>
    </div>
  );
}

export default App;
