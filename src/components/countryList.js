import React, { useState, useEffect } from "react";
import Country from "../components/country";
import styles from "./style.module.css";

function CountryList() {
  const [countries, setCountries] = useState([]);
  const [result, setResult] = useState([]);
  const [Option, setOption] = useState("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  const url = "https://restcountries.eu/rest/v2/all";
  // search counties through name
  useEffect(() => {
    const res = countries.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
    setResult(res);
  }, [search]);

  const URL =
    Option.length === 0
      ? url
      : `https://restcountries.eu/rest/v2/region/${Option}`;
  useEffect(() => {
    setError(null);
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.status === 404) {
          setError(data.message);
        } else {
          setCountries(data);
        }
      })
      .catch((error) => {
        setError(error.toString());
        console.log(error);
      });
  }, [Option]);

  //console.log(countries);
  return (
    <div className="sm:p-5">
      <div className="w-full px-0 flex flex-col tablet:flex-row px-4 justify-between">
        <div className="pr-2 w-full tablet:w-80 laptop:w-96">
          <input
            placeholder="Search for a country..."
            onChange={(e) => setSearch(e.target.value)}
            className="shadow-md w-full p-2 rounded bg-primaryWhite dark:bg-primaryDarkBlue"
          />
        </div>
        <div className="pt-4 w-56 tablet:pt-0">
          <select
            className={`p-2 w-full appearance-none shadow-md rounded ${styles.arrow} bg-primaryWhite dark:bg-primaryDarkBlue text-veryDarkLightkBlue dark:text-primaryWhite`}
            onChange={(e) => {
              setOption(e.target.value);
            }}
          >
            <option value="">All</option>
            <option value="africa">Africa</option>
            <option value="americas">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>

      <div className="w-full flex flex-wrap pt-5">
        {/* if search value, return country list with search result*/}
        {search.length !== 0 &&
          countries.length !== 0 &&
          result.map((country) => (
            <Country data={country} key={country.name} />
          ))}
        {/* if no search value, return full country list */}
        {search.length === 0 &&
          error == null &&
          countries.map((country) => (
            <Country data={country} key={country.name} />
          ))}
        {error !== null && <center>Error={error}</center>}
      </div>
    </div>
  );
}

export default CountryList;
