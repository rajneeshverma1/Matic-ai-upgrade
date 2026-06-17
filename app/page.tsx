import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Carousel from '@/components/Carousel';
import VideoPreview from '@/components/VideoPreview';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Section 1: Matic AI Landing Page */}
      <section className="min-h-screen flex flex-col justify-between py-4">
        <Header brand="matic" />
        <div className="flex-1 flex flex-col justify-center items-center">
          <Hero brand="matic" />
          <Carousel />
        </div>
      </section>

      {/* Section 2: Knowlify Platform Landing Page */}
      <section className="min-h-screen flex flex-col justify-center items-center py-12 border-t border-black/5 dark:border-white/5 relative">
        {/* Subtle spot-light gradient for section 2 */}
        <div className="pointer-events-none absolute inset-x-0 top-12 mx-auto h-64 w-[80%] rounded-full bg-blue-500/5 blur-3xl" aria-hidden="true" />
        
        <div className="flex flex-col justify-center items-center z-10 w-full">
          <Hero brand="knowlify" />
          <VideoPreview />
        </div>
      </section>

      {/* Section 3: Testimonials Section */}
      <section className="min-h-screen flex flex-col justify-center items-center py-16 border-t border-black/5 dark:border-white/5 relative bg-white/50">
        <div className="pointer-events-none absolute inset-x-0 bottom-12 mx-auto h-64 w-[80%] rounded-full bg-purple-500/5 blur-3xl" aria-hidden="true" />
        <div className="z-10 w-full">
          <Testimonials />
        </div>
      </section>
    </div>
  );
}
