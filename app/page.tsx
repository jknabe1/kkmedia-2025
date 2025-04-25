import OpeningCarousel from '@/app/components/Landing/OpeningCarousel';
import Intro from './components/Landing/Intro';
import SelectedCase from './components/Landing/SelectedCase';
import Offerings from './components/Landing/Offerings';

export default async function Page() {
  return (
    <>
      <OpeningCarousel />
      <Intro />
      <Offerings />
      <SelectedCase />
    </>
  );
}
