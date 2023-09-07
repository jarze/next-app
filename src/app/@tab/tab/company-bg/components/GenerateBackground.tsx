'use client';
import BarChart from './BarChart';
import EnergyCompare from './EnergyCompare';
import GeogMap from './GeogMap';

export default function GenerateBackground() {
  return (
    <div className='flex overflow-x-auto'>
      <BarChart />
      <GeogMap />
      <EnergyCompare />
    </div>
  );
}
