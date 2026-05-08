import { motion } from "framer-motion";
import {
  Wifi, Car, Snowflake, Tv, ChefHat, Bath, KeyRound, WashingMachine,
  Microwave, Refrigerator, Coffee, Utensils,
} from "lucide-react";

const items = [
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Snowflake, label: "Air conditioning" },
  { icon: Car, label: "Free private parking" },
  { icon: KeyRound, label: "Secure key entry" },
  { icon: Tv, label: "TV in living room" },
  { icon: ChefHat, label: "Fully equipped kitchen" },
  { icon: Refrigerator, label: "Fridge" },
  { icon: Microwave, label: "Microwave & stove" },
  { icon: WashingMachine, label: "Washing machine" },
  { icon: Bath, label: "Hot & cold water" },
  { icon: Coffee, label: "Kettle" },
  { icon: Utensils, label: "Cookware & utensils" },
];

export function Amenities() {
  return (
    <section id="amenities" className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl container-px">
        <div className="grid md:grid-cols-12 gap-12 mb-14">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
              Everything included
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-balance">
              Comforts of home, by the sea.
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 text-muted-foreground text-lg self-end max-w-lg">
            Move in with just a suitcase. Everything you need for a comfortable stay is already here, waiting.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
              className="bg-background p-6 md:p-8 flex items-start gap-4 hover:bg-card transition-colors"
            >
              <div className="rounded-xl bg-sand/30 p-3 text-foreground">
                <it.icon className="size-5" strokeWidth={1.6} />
              </div>
              <div>
                <div className="font-medium">{it.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
