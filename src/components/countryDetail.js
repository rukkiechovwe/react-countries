import React from "react";
import { useLocation, useHistory } from "react-router";

function CountryDetail() {
  const data = useLocation().state.data;
  const history = useHistory();
  return (
    <div className="px-24 py-10">
      <button
        onClick={() => history.goBack()}
        className="shadow-md rounded px-6 py-1 flex bg-white"
      >
        <img
          src="https://img.icons8.com/fluent-systems-filled/48/000000/long-arrow-left.png"
          className="w-4"
        />
        <span className="pl-3">Back</span>
      </button>
      <div className="flex flex-col pt-10 justify-between md:flex-row">
        <div className="w-2/5">
          <img src={data.flag} alt={data.name} className="w-full" />
        </div>
        <div className="w-1/2 pl-6">
          <p className="text-2xl font-bold pb-4">{data.name}</p>
          <div className="flex justify-between ">
            <div>
              <p className="text-sm py-1">
                <span className="font-semibold">Native Name: </span>
                {data.nativeName}
              </p>
              <p className="text-sm py-1">
                <span className="font-semibold">Population: </span>
                {data.population}
              </p>
              <p className="text-sm py-1">
                <span className="font-semibold">Region: </span>
                {data.region}
              </p>
              <p className="text-sm py-1">
                <span className="font-semibold">Sub Region: </span>
                {data.subregion}
              </p>
              <p className="text-sm py-1">
                <span className="font-semibold">Capital: </span>
                {data.capital}
              </p>
            </div>
            <div>
              <p className="text-sm py-1">
                <span className="font-semibold">Top Level Doamin: </span>
                {data.topLevelDomain}
              </p>
              <p className="text-sm py-1">
                <span className="font-semibold">Languages: </span>
                {data.languages.map((language) => (
                  <span>{language.name}</span>
                ))}
              </p>
              <p className="text-sm py-1">
                <span className="font-semibold">Currency: </span>
                {data.currencies.map((currency) => (
                  <span>{currency.name}</span>
                ))}
              </p>
            </div>
          </div>
          <p className="pt-10 flex flex-wrap w-full">
            {data.borders.map((border) => (
              <span className="shadow-md rounded px-6 py-2 m-2 bg-white">{border}</span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
