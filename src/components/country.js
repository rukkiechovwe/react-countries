import { useHistory } from "react-router-dom";
import styles from "./style.module.css";

function Country({ data }) {
  const history = useHistory();
  return (
    <div className="p-1 w-full phone:w-1/2 tablet:w-1/3 p-2 laptop:w-1/4 p-4">
      <div
        onClick={() => history.push(`/${data.name}`, { data: data })}
        className={`block shadow-md rounded-b-lg ${styles.hoverEffect}`}
      >
        <div className="w-full overflow-hidden">
          <img
            src={data.flag}
            className="object-cover rounded-t-lg w-full h-36 transform scale-1 duration-500"
            alt={data.name}
          />
        </div>
        <div className="px-5 pt-5 pb-7 bg-primaryWhite rounded-b-lg flex flex-col items-start shadow-inner dark:bg-primaryDarkBlue">
          <p className="text-lg font-bold pb-3 whitespace-nowrap overflow-hidden overflow-ellipsis w-full text-veryDarkLightkBlue dark:text-primaryWhite">
            {data.name}
          </p>
          <p className="py-1 text-veryDarkLightkBlue dark:text-primaryWhite">
            <span className="font-bold pr-2">Poulation:</span>
            {data.population}
          </p>
          <p className="py-1 text-veryDarkLightkBlue dark:text-primaryWhite">
            <span className="font-bold pr-2">Region:</span>
            {data.region}
          </p>
          <p className="py-1 text-veryDarkLightkBlue dark:text-primaryWhite">
            <span className="font-bold pr-2">Capital:</span>
            {data.capital}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Country;
