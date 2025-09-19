import { useState } from "react";

const Country = ({ country, handleVisitedCountries, handleFlags }) => {
  const { name, flags, population, capital } = country;
  //   console.log();

  const [visited, setVisited] = useState(false);
  const handleBtn = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
  };
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure>
        <img
          className="w-full h-30 object-cover"
          src={flags.flags.png}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Country Name : {name.common}</h2>
        <p>Population: {population.population}</p>
        <p>Capital : {capital.capital}</p>
      </div>
      <button
        onClick={handleBtn}
        className={`btn ${visited ? " bg-green-400" : "bg-red-950"} `}
      >
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button
        className="btn"
        onClick={() => {
          handleFlags(flags.flags.png);
        }}
      >
        Add Flag
      </button>
    </div>
  );
};

export default Country;
