import { MdVerifiedUser } from "react-icons/md";
const PopularCar = () => {
  return (
    <div className="w-fit border">
        <div className="flex justify-between">
            <div className="flex ">
                <img src="" alt="logo" />
                <div>
                    <h1 className="font-bold">Porsche 911</h1>
                    <p>Turbo S - 2021</p>
                </div>
            </div>
            <div>
                <h1>2 Unit available</h1>
            </div>
        </div>
        <div><img src="" alt="car" /></div>
        <div className="flex justify-between gap-[3rem]">
            <div className="flex gap-2">
                <img src="" alt="profile" />
                <div className="">
                    <h1>Leslie A lexander</h1>
                    <p className="flex gap-2 items-center"><MdVerifiedUser  className="text-[#55b4dc]"/>verified User</p>
                </div>
            </div>
            <div>
                <h1 className="font-bold text-2xl">$950<span className="font-normal">/day</span></h1>
            </div>
        </div>
    </div>
  )
}

export default PopularCar