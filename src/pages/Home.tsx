import PopularCars from "../components/cars/PopularCars";
import MainComponent from "../components/dreamcar/MainComponent";

const Home = () => {
  return (
    <div>
      <h1 className="font-bold mb-5 text-xl  px-6">
        Drive the Car of your dreams
      </h1>
      <MainComponent />
      <PopularCars />
    </div>
  );
};

export default Home;
