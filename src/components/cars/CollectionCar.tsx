
const CollectionCar = ({ carInfo }: { carInfo: {  carImg: string, carName: string, carModel: string, amountPday: string,  } }) => {
  return (
    <div className="rounded">
      <h1 className='font-bold capitalize'>Our Collection</h1>
      <div>
        <h1 className="font-bold">911 Carrera GTS</h1>
        <p className="text-[#999999] font-bold text-base" >Type 992</p>
      </div>
    </div>
  );
};

export default CollectionCar;
