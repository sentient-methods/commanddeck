import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PhilosophyExhibit from '@/components/PhilosophyExhibit';
import WhoPlays from '@/components/WhoPlays';
import ArenaBlueprint from '@/components/ArenaBlueprint';
import HistoricalGallery from '@/components/HistoricalGallery';
import CrewPassExhibition from '@/components/CrewPassExhibition';
import TestimonialArchive from '@/components/TestimonialArchive';
import FrontlineBridge from '@/components/FrontlineBridge';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <PhilosophyExhibit />
        <WhoPlays />
        <ArenaBlueprint />
        <HistoricalGallery />
        <CrewPassExhibition />
        <TestimonialArchive />
        <FrontlineBridge />
      </main>
      <Footer />
    </div>
  );
}
