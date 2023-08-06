// MainComponent.tsx
import React from 'react';
import CarComponent from '../dreamcar/CarComponent';

const MainComponent: React.FC = () => {
  return (
    <div className="justify-center items-center  ">
      <CarComponent
        carBrand ="Porsche"
        carModel="Any"
        pickupLocation="Judicious M. Murich Airport"
        pickupDateAndReturnDate="Apr 27 - May 1"
      />
    </div>
  );
};

export default MainComponent;
