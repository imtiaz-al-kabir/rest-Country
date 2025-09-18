import { use, useState } from "react";
import Country from "./Country";

const Countries = ({ countryData }) => {
  const [visitedCountries, SetVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log("lasjld", country);
    const newCountries = [...visitedCountries, country];
    SetVisitedCountries(newCountries);
  };
  const countriesData = use(countryData);
  const countries = countriesData.countries;
  return (
    <>
      <h1 className="text-3xl text-black text-center">
        In the Country : {visitedCountries.length}
      </h1>
      <h1 className="text-3xl text-black text-center">
        Total Country Visited : {countries.length}
      </h1>
      <div className="grid grid-cols-5 gap-5 p-10">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
