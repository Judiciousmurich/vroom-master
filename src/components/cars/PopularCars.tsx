import PopularCar from "./PopularCar";

const PopularCars = () => {
  const popularCars = [
    {
      carBrandImg: "/ferrarilogo.png",
      carImg: "/car1.png",
      carName: "Porsche 911",
      carModel: "Turbo S - 2021",
      amountPday: "",
      ownerName: "Judicious Murich",
      ownerImg: "/judy.jpg",
      bgColor: "bg-[#eef1fa]",
      bg2Color: "bg-[#e6e9f3]",
    },
    {
      carBrandImg: "/nissanlogo.png",
      carImg: "/nissanGTR.png",
      carName: "Nissan GT-R-2023",
      carModel: "Nismo 3.8 V6",
      amountPday: "",
      ownerName: "Amos Mwongela",
      ownerImg: "https://avatars.githubusercontent.com/u/86522089?v=4",
      bgColor: "bg-[#e9f2ff]",
      bg2Color: "bg-[#e0eaf9]",
    },
    {
      carBrandImg: "/chevroletlogo.png",
      carImg: "/chevrolet2.png",
      carName: "Chevrolet C8",
      carModel: "Corvette Stringray",
      amountPday: "",
      ownerName: "Joshua Musira",
      ownerImg: "https://avatars.githubusercontent.com/u/116023336?v=4",
      bgColor: "bg-[#ffe9f2]",
      bg2Color: "bg-[#f9dfea]",
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
