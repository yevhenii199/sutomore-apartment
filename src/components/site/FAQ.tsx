import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How far is the apartment from the beach?",
    a: "Just 100 meters — about a 2-minute walk to the Adriatic shore.",
  },
  {
    q: "Is parking really free?",
    a: "Yes. There is free private parking in the yard, available to all guests.",
  },
  {
    q: "What languages does the host speak?",
    a: "Luka speaks English, Serbian and Russian and is happy to help with any questions.",
  },
  {
    q: "How do I confirm and pay for my booking?",
    a: "Send a booking request through the form. The host will reply with availability and payment instructions, usually within a few hours.",
  },
  {
    q: "Are check-in times flexible?",
    a: "Standard check-in is from 14:00 and check-out by 11:00, but we try to be flexible — just ask.",
  },
  {
    q: "Is the apartment good for families?",
    a: "Yes — quiet street, secure entry, full kitchen and washing machine. Comfortable for up to 4 guests.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl container-px">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
            Frequently asked
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-balance">
            Good to know.
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="text-left text-lg md:text-xl font-display py-6 hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground pb-6 leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
