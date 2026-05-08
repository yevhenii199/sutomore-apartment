import { Instagram, MessageCircle, Phone, Mail, Send } from "lucide-react";
import { property } from "@/lib/property";

export function Footer() {
  const { host } = property;
  return (
    <footer className="bg-graphite text-background/80 pt-20 pb-10">
      <div className="mx-auto max-w-7xl container-px">
        <div className="grid md:grid-cols-3 gap-12 pb-14 border-b border-background/15">
          <div>
            <div className="flex items-center gap-2 text-background">
              <span className="h-2 w-2 rounded-full bg-sand" />
              <span className="font-display text-xl">Lucia&apos;s Apartment</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              A quiet, modern stay in the southern part of Sutomore — 100 meters from the Adriatic.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-background/50 mb-4">Host</div>
            <div className="text-background font-medium">{host.name}</div>
            <div className="text-sm mt-1">Speaks {host.languages.join(", ")}</div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-background/50 mb-4">Contact</div>
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${host.phone.replace(/\s/g,"")}`} className="rounded-full bg-background/10 hover:bg-sand hover:text-sand-foreground transition-colors p-3"><Phone className="size-4" /></a>
              <a href={`mailto:${host.email}`} className="rounded-full bg-background/10 hover:bg-sand hover:text-sand-foreground transition-colors p-3"><Mail className="size-4" /></a>
              <a href={host.whatsapp} target="_blank" rel="noopener" className="rounded-full bg-background/10 hover:bg-sand hover:text-sand-foreground transition-colors p-3"><MessageCircle className="size-4" /></a>
              <a href={host.telegram} target="_blank" rel="noopener" className="rounded-full bg-background/10 hover:bg-sand hover:text-sand-foreground transition-colors p-3"><Send className="size-4" /></a>
              <a href={host.instagram} target="_blank" rel="noopener" className="rounded-full bg-background/10 hover:bg-sand hover:text-sand-foreground transition-colors p-3"><Instagram className="size-4" /></a>
            </div>
            <div className="mt-4 text-sm">{host.phone}</div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/50">
          <div>© {new Date().getFullYear()} Lucia&apos;s Apartment, Sutomore.</div>
          <div>Made with care on the Adriatic coast.</div>
        </div>
      </div>
    </footer>
  );
}
