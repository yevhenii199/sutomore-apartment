import { Toaster } from "sonner";

import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Gallery } from "@/components/site/Gallery";
import { Amenities } from "@/components/site/Amenities";
import { LocationMap } from "@/components/site/LocationMap";
import { BookingForm } from "@/components/site/BookingForm";
import { Reviews } from "@/components/site/Reviews";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Gallery />
      <Amenities />
      <LocationMap />
      <BookingForm />
      <Reviews />
      <FAQ />
      <Footer />
      <Toaster position="top-center" richColors />
    </main>
  );
}
