import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lucia's Apartment — Rent in Sutomore, Montenegro from €70/night" },
      {
        name: "description",
        content:
          "A quiet, modern apartment 100m from the Adriatic in Sutomore, Montenegro. Free parking, Wi-Fi, full kitchen. Book your stay from €70 per night.",
      },
      { property: "og:title", content: "Lucia's Apartment — Sutomore, Montenegro" },
      {
        property: "og:description",
        content: "A quiet escape, 100 meters from the sea. From €70 per night.",
      },
      {
        property: "og:image",
        content:
          "https://yevhenii199.github.io/rent-apartment-in-sutomore/images/terrace.webp",
      },
      {
        name: "twitter:image",
        content:
          "https://yevhenii199.github.io/rent-apartment-in-sutomore/images/terrace.webp",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
});

function Index() {
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
