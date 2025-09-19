import { use, useState } from "react";
import Country from "./Country";

const Countries = ({ countryData }) => {
  const [visitedCountries, SetVisitedCountries] = useState([]);
  const [showFlags, SetShoFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log("lasjld", country);
    const newCountries = [...visitedCountries, country];
    SetVisitedCountries(newCountries);
  };
  const handleFlags = (flags) => {
    const newFlags = [...showFlags, flags];
    SetShoFlags(newFlags);
    console.log("clicked", flags);
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
      <div className="px-10 flex gap-5 flex-wrap pt-6">
        {showFlags.map((flag, index) => (
          <img className="w-[60px]" key={index} src={flag}></img>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-5 p-10">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleFlags={handleFlags}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
