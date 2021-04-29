import CountryList from "../components/countryList";
import Header from "../components/nav";

function Home() {
      return (
        <div>
          <Header />
          <div className="pt-28 p-3 tablet:px-5 laptop:px-10 desktop:px-16">
            <CountryList />
          </div>
        </div>
      );
    }
    
    export default Home;
    