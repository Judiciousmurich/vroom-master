import CollectionCar from "../components/cars/CollectionCar";
import PopularCars from "../components/cars/PopularCars";
import MainComponent from "../components/dreamcar/MainComponent";

const Home = () => {
  return (
    <div className="rounded-t-[30px] bg-white py-6">
      <h1 className="font-bold mb-5 text-xl  px-6">
        Drive the Car of your dreams
      </h1>
      <MainComponent />
      <PopularCars />
      <CollectionCar/>
    </div>
  );
};

export default Home;
