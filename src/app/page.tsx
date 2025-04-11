import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PetCard } from '@/components/PetCard';
import { WeightGraph } from '@/components/WeightGraph';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
      <h1>Welcome to PawTrack</h1>
        <WeightGraph />
        <PetCard />
      </main>
      <Footer />
    </>
  );
};
