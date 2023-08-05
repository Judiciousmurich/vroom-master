// CarComponent.tsx

import { FaSearch } from "react-icons/fa";

interface CarProps {
  carBrand: string;
  carModel: string;
  pickupLocation: string;
  pickupDateAndReturnDate: string;
}

const CarComponent: React.FC<CarProps> = ({
  carBrand,
  carModel,
  pickupLocation,
  pickupDateAndReturnDate,
}) => {
  return (
    <>
      <div className="flex gap-4 justify-around">
        <div className="grid grid-cols-4 bg-white border rounded-[20px]  gap-10  mb-6">
          <div className="p-4 border-r-2">
            <p className="text-sm text-gray-500 ">CAR BRAND</p>
            <p className="text-sm text-gray-800 font-bold">{carBrand}</p>
          </div>
          <div className="border-r-2 p-4">
            <p className="text-sm text-gray-500 ">CAR MODEL</p>
            <p className="text-sm text-gray-800 font-bold">{carModel}</p>
          </div>
          <div className="border-r-2 p-4">
            <p className="text-sm text-gray-500 ">PICKUP LOCATION</p>
            <p className="text-sm text-gray-800 font-bold">{pickupLocation}</p>
          </div>
          <div className="p-4 h-full">
            <p className="text-sm text-gray-500 ">PICKUP DATE & RETURN DATE</p>
            <p className="text-sm text-gray-800 font-bold ">{pickupDateAndReturnDate}</p>
          </div>

        </div>

        <button className="mb-6 px-6 py-1 flex bg-[#415ff2] text-white items-center justify-center rounded-[20px] gap-4"> <FaSearch />Search</button>

      </div>

    </>

  );
};

export default CarComponent;
