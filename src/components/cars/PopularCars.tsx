import PopularCar from "./PopularCar";

const PopularCars = () => {
  const popularCars = [
    {
      carBrandImg: "",
      carImg: "",
      carName: "Porsche 911",
      carModel: "Turbo S - 2021",
      amountPday: "",
      ownerName: "Judicious Murich",
      ownerImg: "",
      bgColor: "",
      bg2Color: "",
    },
    {
      carBrandImg: "",
      carImg: "",
      carName: "Nissan GT-R-2023",
      carModel: "Nismo 3.8 V6",
      amountPday: "",
      ownerName: "Amos Mwongela",
      ownerImg: "",
      bgColor: "",
      bg2Color: "",
    },
    {
      carBrandImg: "",
      carImg: "",
      carName: "Chevrolet C8",
      carModel: "Corvette Stringray",
      amountPday: "",
      ownerName: "Joshua Musira",
      ownerImg: "",
      bgColor: "",
      bg2Color: "",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-[1.5rem] md:flex md:justify-center md:borde">
      {popularCars.map((car) => (
        <PopularCar carInfo={car} />
      ))}
    </div>
  );
};

export default PopularCars;
