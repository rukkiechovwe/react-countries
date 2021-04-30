import React from "react";
import { useLocation, useHistory } from "react-router";

function CountryDetail() {
  const data = useLocation().state.data;
  const history = useHistory();
  return (
    <div className="pt-28 py-10 px-8 desktop:px-8 desktop:px-24">
      <button
        onClick={() => history.goBack()}
        className="shadow-md rounded px-6 py-1 flex bg-white bg-primaryWhite dark:bg-primaryDarkBlue text-veryDarkLightkBlue dark:text-primaryWhite"
      >
        <img
          src="https://img.icons8.com/fluent-systems-filled/48/000000/long-arrow-left.png"
          className="w-4"
          alt="arrow"
        />
        <span className="pl-3">Back</span>
      </button>

      <div className="flex flex-col pt-6 items-center tablet:flex-row tablet:items-start tablet:justify-between">
        <div className="w-full tablet:w-3/5 desktop:w-2/5">
          <img src={data.flag} alt={data.name} className="w-full" />
        </div>
        <div className="w-full pt-8 pl-0 tablet:w-1/2 tablet:pl-6 tablet:pt-0">
          <p className="text-2xl font-bold pb-4 text-veryDarkLightkBlue dark:text-primaryWhite">{data.name}</p>
          <div className="flex-col phone:flex-row justify-between ">
            <div>
              <p className="text-sm py-1 text-veryDarkLightkBlue dark:text-primaryWhite">
                <span className="font-semibold">Native Name: </span>
                {data.nativeName}
              </p>
              <p className="text-sm py-1 text-veryDarkLightkBlue dark:text-primaryWhite">
                <span className="font-semibold">Population: </span>
                {data.population}
              </p>
              <p className="text-sm py-1 text-veryDarkLightkBlue dark:text-primaryWhite">
                <span className="font-semibold">Region: </span>
                {data.region}
              </p>
              <p className="text-sm py-1 text-veryDarkLightkBlue dark:text-primaryWhite">
                <span className="font-semibold">Sub Region: </span>
                {data.subregion}
              </p>
              <p className="text-sm py-1 text-veryDarkLightkBlue dark:text-primaryWhite">
                <span className="font-semibold">Capital: </span>
                {data.capital}
              </p>
            </div>
            <div>
              <p className="text-sm py-1 text-veryDarkLightkBlue dark:text-primaryWhite">
                <span className="font-semibold">Top Level Doamin: </span>
                {data.topLevelDomain}
              </p>
              <p className="text-sm py-1 text-veryDarkLightkBlue dark:text-primaryWhite">
                <span className="font-semibold">Languages: </span>
                {data.languages.map((language) => (
                  <span>{language.name}</span>
                ))}
              </p>
              <p className="text-sm py-1 text-veryDarkLightkBlue dark:text-primaryWhite">
                <span className="font-semibold">Currency: </span>
                {data.currencies.map((currency) => (
                  <span>{currency.name}</span>
                ))}
              </p>
            </div>
          </div>
          <p className="pt-8 flex flex-wrap w-full">
            {data.borders.map((border) => (
              <span className="shadow-md rounded px-6 py-2 my-2 mr-3 bg-white bg-primaryWhite dark:bg-primaryDarkBlue text-veryDarkLightkBlue text-veryDarkLightkBlue dark:text-primaryWhite" key={data.name}>
                {border}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
