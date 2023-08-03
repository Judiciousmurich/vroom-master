import PopularCar from "./PopularCar"

const PopularCars = () => {
  return (
    <div className="grid grid-cols-3 gap-[1.5rem] md:flex md:justify-center md:borde">
        <PopularCar/>
        <PopularCar/>
        <PopularCar/>
    </div>
  )
}

export default PopularCars