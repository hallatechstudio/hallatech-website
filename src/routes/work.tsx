import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — HallaTech" },
      { name: "description", content: "A selection of products HallaTech has built and grown across fintech, music, gaming, lifestyle and more." },
      { property: "og:title", content: "HallaTech — Selected Work" },
      { property: "og:description", content: "Products we've built and grown across fintech, music, gaming and more." },
    ],
  }),
  component: WorkPage,
});

const projects = [
  { name: "Soundhalla", tag: "Music & Entertainment", tagline: "Amplify Your Sound", body: "An intelligent platform that fuels artist growth with data-driven marketing and accessible funding solutions.", url: "https://soundhalla.com/" },
  { name: "Cashwyre", tag: "Fintech", tagline: "Send Money, Simplified", body: "Simplifying global payments for individuals and businesses. Cashwyre uses Bitcoin and crypto rails to make cross-border transfers faster, easier, and more affordable than traditional methods.", url: "https://cashwyre.com/" },
  { name: "Aldora", tag: "Gaming", tagline: "Gaming Analytics", body: "ALDORA bridges the interpretation gap between raw metrics and actionable intelligence in gaming's $250 billion ecosystem.", url: "https://www.aldora.com/" },
  { name: "TuneNova", tag: "Music & Entertainment", tagline: "Music Discovery Reimagined", body: "Grow your fanbase across Spotify, Apple Music, and YouTube.", url: "https://www.tunenova.com/" },
  { name: "Sharp Pocket", tag: "Fintech", tagline: "Smart Spending Solutions", body: "Pay bills, buy airtime and data, settle electricity, and send or withdraw money — fast, simple and secure.", url: "https://www.mysharppocket.com/" },
  { name: "Teilorr", tag: "Fashion Tech", tagline: "Streamline Your Tailoring Business", body: "Teilorr helps professional tailors organize client information, track measurements, and grow their business with intuitive digital tools designed specifically for the tailoring industry.", url: "https://www.teilorr.com/" },
  { name: "ShopNSure", tag: "Fintech", tagline: "Shop with Confidence", body: "A secure online payment platform that prevents scams by holding the buyer's money safely until they confirm successful delivery of goods.", url: "https://www.shopnsure.com/" },
];

function WorkPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-16">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Selected work</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl tracking-tight max-w-4xl">
          Real products. <span className="italic text-accent">Real impact.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground text-lg">
          From startups to scale-ups, we build products that people love — across fintech, music, gaming, and beyond.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-accent/40">
              <div className="h-40 mb-6 rounded-2xl bg-gradient-to-br from-secondary via-card to-background flex items-end p-5">
                <span className="font-display text-5xl text-accent/60">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{p.tag}</p>
                  <h3 className="mt-3 font-display text-3xl">{p.name}</h3>
                  <p className="mt-1 text-accent text-sm">{p.tagline}</p>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
