import React, { useState, useEffect } from "react";
import Country from "../components/country";
import styles from "./style.module.css";

function CountryList() {
  const [countries, setCountries] = useState([]);
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");

  const url = "https://restcountries.eu/rest/v2/all";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  // search counties through name
  useEffect(() => {
    const res = countries.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
    setResult(res);
  }, [search]);

  return (
    <div className="sm:p-5">
      <div className="w-full px-4 flex flex-col tablet:flex-row justify-between">
        <div className="pr-2 w-full tablet:w-80 laptop:w-96">
          <input
            placeholder="Search for a country..."
            onChange={(e) => setSearch(e.target.value)}
            className="shadow-md w-full p-2 rounded"
          />
        </div>
        <div className="pt-4 w-56 tablet:pt-0">
          <select className={`p-2 w-full appearance-none shadow-md rounded ${styles.arrow}`}>
            <option>Filter by region</option>
            <option>Africa</option>
            <option>America</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
          </select>
        </div>
      </div>

      <div className="w-full flex flex-wrap pt-5">
        {/* if search value, return country list with search result*/}
        {search.length !== 0 &&
          result.map((country) => (
            <Country data={country} key={country.name} />
          ))}
        {/* if no search value, return full country list */}
        {search.length === 0 &&
          countries.map((country) => (
            <Country data={country} key={country.name} />
          ))}
      </div>
    </div>
  );
}

export default CountryList;
