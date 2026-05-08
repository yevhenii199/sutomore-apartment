import { useState } from "react";
import { format, differenceInCalendarDays } from "date-fns";
import { CalendarIcon, Loader2, Check } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { property } from "@/lib/property";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(5, "Please enter a phone number").max(40),
  guests: z.coerce.number().int().min(1).max(8),
  checkIn: z.date({ message: "Pick a check-in date" }),
  checkOut: z.date({ message: "Pick a check-out date" }),
  notes: z.string().max(500).optional(),
}).refine((d) => d.checkOut > d.checkIn, {
  message: "Check-out must be after check-in",
  path: ["checkOut"],
});

export function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("2");
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const nights =
    checkIn && checkOut ? Math.max(0, differenceInCalendarDays(checkOut, checkIn)) : 0;
  const total = nights * property.pricePerNight;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ name, phone, guests, checkIn, checkOut, notes });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    try {
      // TODO: Wire to /api/public/booking endpoint that forwards to Telegram bot.
      await new Promise((r) => setTimeout(r, 900));
      setDone(true);
      toast.success("Request sent! The host will contact you shortly.");
    } catch {
      toast.error("Could not send request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="book" className="py-24 md:py-32 bg-graphite text-background">
      <div className="mx-auto max-w-7xl container-px">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.25em] text-background/60 mb-3">
              Reserve your stay
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-balance">
              Send a request, get a reply in hours.
            </h2>
            <p className="mt-6 text-background/70 text-lg max-w-md">
              Tell us when you&apos;d like to come. We&apos;ll confirm availability and walk you through everything you need to know.
            </p>

            <div className="mt-10 space-y-4 text-background/80">
              <div className="flex items-baseline justify-between border-b border-background/15 pb-3">
                <span>Price per night</span>
                <span className="font-display text-2xl text-background">€{property.pricePerNight}</span>
              </div>
              {nights > 0 && (
                <>
                  <div className="flex items-baseline justify-between text-sm">
                    <span>{nights} {nights === 1 ? "night" : "nights"}</span>
                    <span>€{total}</span>
                  </div>
                  <div className="flex items-baseline justify-between border-t border-background/15 pt-3">
                    <span>Estimated total</span>
                    <span className="font-display text-3xl text-sand">€{total}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-7 rounded-3xl bg-background text-foreground p-6 md:p-10 shadow-2xl shadow-black/30"
          >
            {done ? (
              <div className="py-16 text-center">
                <div className="mx-auto size-14 rounded-full bg-sand/30 grid place-items-center mb-5">
                  <Check className="size-7" />
                </div>
                <h3 className="font-display text-3xl">Request sent</h3>
                <p className="mt-3 text-muted-foreground max-w-sm mx-auto">
                  Thank you, {name.split(" ")[0]}. The host will contact you on {phone} shortly.
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="mt-2 h-11" />
                </div>

                <div>
                  <Label>Check-in</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn("mt-2 w-full h-11 justify-start font-normal", !checkIn && "text-muted-foreground")}>
                        <CalendarIcon className="mr-2 size-4" />
                        {checkIn ? format(checkIn, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={checkIn} onSelect={setCheckIn}
                        disabled={(d) => d < new Date(new Date().setHours(0,0,0,0))}
                        className="p-3 pointer-events-auto" />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label>Check-out</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn("mt-2 w-full h-11 justify-start font-normal", !checkOut && "text-muted-foreground")}>
                        <CalendarIcon className="mr-2 size-4" />
                        {checkOut ? format(checkOut, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={checkOut} onSelect={setCheckOut}
                        disabled={(d) => !checkIn || d <= checkIn}
                        className="p-3 pointer-events-auto" />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label htmlFor="guests">Guests</Label>
                  <Input id="guests" type="number" min={1} max={8} value={guests} onChange={(e) => setGuests(e.target.value)} className="mt-2 h-11" />
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+382 …" className="mt-2 h-11" />
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="notes">Notes (optional)</Label>
                  <Input id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Anything we should know?" className="mt-2 h-11" />
                </div>

                <Button type="submit" disabled={loading}
                  className="sm:col-span-2 mt-2 h-12 rounded-full bg-foreground text-background hover:bg-foreground/90 text-base">
                  {loading ? <><Loader2 className="mr-2 size-4 animate-spin" /> Sending…</> : "Send booking request"}
                </Button>
                <p className="sm:col-span-2 text-xs text-muted-foreground text-center">
                  No payment required to submit. The host will confirm availability.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
