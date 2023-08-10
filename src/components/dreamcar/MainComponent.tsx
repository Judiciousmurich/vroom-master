// MainComponent.tsx
import React from 'react';
import CarComponent from '../dreamcar/CarComponent';

const MainComponent: React.FC = () => {
  return (
    <CarComponent
      carBrand="Porsche"
      carModel="Any"
      pickupLocation="Judicious M. Murich Airport"
      pickupDateAndReturnDate="Apr 27 - june 1"
    />
  );
};

export default MainComponent;
