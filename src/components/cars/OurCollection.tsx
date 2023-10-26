import CollectionCar from "./CollectionCar";

const OurCollection = () => {
  const OurCollection = [
    {
      carBrandImg: "/ferrarilogo.png",
      carImg: "/car1.png",
      carName: "Porsche 911",
      carModel: "Turbo S - 2021",
      amountPday: "",
      bgColor: "bg-[#eef1fa]",
      bg2Color: "bg-[#e6e9f3]",
    },
    {
      carBrandImg: "/nissanlogo.png",
      carImg: "/nissanGTR.png",
      carName: "Nissan GT-R-2023",
      carModel: "Nismo 3.8 V6",
      amountPday: "",
      bgColor: "bg-[#e9f2ff]",
      bg2Color: "bg-[#e0eaf9]",
    },
    {
      carBrandImg: "/chevroletlogo.png",
      carImg: "/chevrolet2.png",
      carName: "Chevrolet C8",
      carModel: "Corvette Stringray",
      amountPday: "",
      bgColor: "bg-[#ffe9f2]",
      bg2Color: "bg-[#f9dfea]",
    },
  ];
  return (
    <div className="bg-[#f9fafc] p-8">
      <h1 className="font-bold text-xl mb-4">🔥 Popular Cars</h1>
      <div className="grid grid-cols-3 gap-[1.5rem] md:flex md:justify-center md:borde">
        {OurCollection.map((car) => (
          <CollectionCar carInfo={car} />
        ))}
      </div>
    </div>
  );
};

export default OurCollection;
