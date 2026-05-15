import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Compass, PenTool, Rocket, LineChart, Quote } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";


import heroDevices from "@/assets/artists.png";
import metaLogo from "@/assets/meta.png";
import amazonLogo from "@/assets/Amazon.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HallaTech - We build & grow tech products" },
      {
        name: "description",
        content:
          "HallaTech is a venture studio building sleek tech products and growing them into companies that matter.",
      },
      { property: "og:title", content: "HallaTech — Build & grow tech products" },
      {
        property: "og:description",
        content: "Product development, growth marketing, and design for ambitious founders.",
      },
    ],
  }),
  component: Index,
});

const products = [
  { name: "TuneNova", tag: "Music & Entertainment", blurb: "Music Discovery Reimagined Grow your fanbase across Spotify, Apple Music, and YouTube.", url: "https://www.tunenova.com/" },
  { name: "Tracla", tag: "Honest Feedback", blurb: "Tracla is a simple platform that lets businesses collect genuine customer ratings, complaints, tips, and honest reviews using just one QR code.", url: "https://www.tracla.com/" },
  { name: "Aldora", tag: "Gaming Analytics", blurb: "ALDORA bridges the interpretation gap between raw metrics and actionable intelligence in gaming’s $250 billion ecosystem.", url: "https://www.aldora.com/" },
  { name: "Cashwyre", tag: "Fintech", blurb: "Send Money, Simplified Simplifying global payments for individuals and businesses. Cashwyre uses Bitcoin and crypto rails to make cross-border transfers faster, easier, and more affordable than traditional methods.", url: "https://cashwyre.com/" },
  { name: "Sharp Pocket", tag: "Fintech", blurb: "Smart Spending Solutions Pay bills, buy airtime and data, settle electricity, and send or withdraw money fast, simple, and secure.", url: "https://www.mysharppocket.com/" },
  { name: "Teilorr", tag: "Fashion tech", blurb: "Streamline Your Tailoring Business Teilor helps professional tailors organize client information, track measurements, and grow their business with intuitive digital tools designed specifically for the tailoring industry", url: "https://www.teilorr.com/" },
];

function Index() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative">
        {/* Background overlay image */}
        <div className="absolute inset-0 -z-10">
          <img
            src={heroDevices}
            alt="Background overlay"
            className="w-full h-full object-cover object-center opacity-20"
            style={{ pointerEvents: 'none', userSelect: 'none' }}
          />
          <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--accent)_0%,_transparent_55%)] opacity-20" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-display text-[3.25rem] leading-[1.02] md:text-[5.5rem] md:leading-[0.98] tracking-tight text-foreground">
                We build & grow
                <br />
                <span className="italic text-accent">websites and apps</span> for global companies.
              </h1>
              {/* <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground">
              We help build and grow tech products for global companies 
              </p> */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90"
                >
                  Contact us
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
              {/* <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                {[
                  { k: "20+", v: "Products built" },
                  { k: "1M+", v: "Users reached" },
                  { k: "85", v: "Countries" },
                ].map((s) => (
                  <div key={s.v}>
                    <div className="font-display text-3xl text-foreground">{s.k}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.v}</div>
                  </div>
                ))}
              </div> */}
            </div>
            {/* <div className="lg:col-span-5 flex items-start">
              <img
                src={heroDevices}
                alt="Fan engagement preview"
                width={1280}
                height={1280}
                className="w-full h-auto"
                style={{ margin: 0, padding: 0, boxShadow: 'none', borderRadius: 0 }}
              />
            </div> */}
          </div>
        </div>
      </section>


      {/* LOGOS / TRUST (Static Centered) */}
      <section className="border-y border-border overflow-hidden">
        <div className="relative mx-auto max-w-7xl py-8 flex justify-center">
          <div className="flex gap-16">
            <div className="flex items-center">
              <span className="inline-flex h-20 w-32 items-center justify-center rounded-md bg-white">
                <img src={metaLogo} alt="Meta" className="object-contain h-16 w-28" />
              </span>
            </div>
            <div className="flex items-center">
              <span className="inline-flex h-20 w-32 items-center justify-center rounded-md bg-white">
                <img src={amazonLogo} alt="Amazon" className="object-contain h-16 w-28" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="rounded-2xl bg-card/60 p-8 text-center shadow-sm border border-border">
            <div className="font-display text-5xl md:text-6xl text-foreground">20+</div>
            <div className="mt-2 text-xl font-semibold text-foreground">Products Built</div>
            <div className="mt-1 text-muted-foreground">Innovative solutions delivered</div>
          </div>
          <div className="rounded-2xl bg-card/60 p-8 text-center shadow-sm border border-border">
            <div className="font-display text-5xl md:text-6xl text-foreground">5+</div>
            <div className="mt-2 text-xl font-semibold text-foreground">Industries Served</div>
            <div className="mt-1 text-muted-foreground">Diverse market expertise</div>
          </div>
          <div className="rounded-2xl bg-card/60 p-8 text-center shadow-sm border border-border">
            <div className="font-display text-5xl md:text-6xl text-foreground">1M+</div>
            <div className="mt-2 text-xl font-semibold text-foreground">Users Reached</div>
            <div className="mt-1 text-muted-foreground">Global impact achieved</div>
          </div>
          <div className="rounded-2xl bg-card/60 p-8 text-center shadow-sm border border-border">
            <div className="font-display text-5xl md:text-6xl text-foreground">85+</div>
            <div className="mt-2 text-xl font-semibold text-foreground">Countries</div>
            <div className="mt-1 text-muted-foreground">Worldwide presence</div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-accent">Selected work</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">
              Products people actually use.
            </h2>
          </div>
          <Link to="/work" className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            See all <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
{products.map((p, i) => (
               <a
                 key={p.name}
                 href={p.url}
                 target="_blank"
                 rel="noreferrer"
                 className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-accent/40"
               >
                {/* Removed number/visual section */}
                 <div className="flex items-center justify-between">
                   <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{p.tag}</span>
                   <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-accent" />
                 </div>
                 <h3 className="mt-3 font-display text-2xl">{p.name}</h3>
                 <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
               </a>
             ))}
        </div>
      </section>

      {/* SERVICES PEEK */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2.5rem] border border-border bg-card/60 p-10 md:p-16">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-accent">What we do</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">
                Build fast. Grow smart.
                <br />
                Focus on impact.
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                From zero-to-one MVPs to scaling traction, we partner with founders end-to-end across product, growth and design.
              </p>
              <Link
                to="/services"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90"
              >
                Explore services <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="divide-y divide-border">
              {[
                "Product Development",
                "Growth Marketing",
                "UI / UX Design",
                "Digital Advertising",
                "Data & Analytics",
                "Security & Compliance",
              ].map((s, i) => (
                <li key={s} className="flex items-center justify-between py-5">
                  <div className="flex items-center gap-5">
                    <span className="text-xs text-muted-foreground tabular-nums">0{i + 1}</span>
                    <span className="font-display text-2xl">{s}</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-accent">How we work</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">
              A simple, sharp process.
            </h2>
          </div>
          <p className="hidden md:block max-w-sm text-sm text-muted-foreground">
            Four focused stages — from rough idea to a product growing in the wild.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Compass, step: "01", title: "Discover", body: "We dig into the problem, the users, and the market — then sharpen the bet worth taking." },
            { icon: PenTool, step: "02", title: "Design", body: "Flows, screens and a system. Beautiful, intentional, and ready to build against." },
            { icon: Rocket, step: "03", title: "Build", body: "Lean engineering with weekly demos. You see progress, not just status updates." },
            { icon: LineChart, step: "04", title: "Grow", body: "Launch, measure, iterate. We help you find the channels that actually compound." },
          ].map(({ icon: Icon, step, title, body }) => (
            <div key={step} className="group relative rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-accent/40">
              <div className="flex items-center justify-between">
                <span className="font-display text-sm text-accent tabular-nums">{step}</span>
                <Icon className="h-5 w-5 text-muted-foreground group-hover:text-accent" />
              </div>
              <h3 className="mt-8 font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2.5rem] border border-border bg-card/40 p-10 md:p-16">
          <div className="flex items-center gap-3 mb-12">
            <Quote className="h-5 w-5 text-accent" />
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Trusted by founders</p>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              { quote: "Halla built a fast and reliable app that powers our transactions perfectly. They didn’t just deliver the product, they helped us grow to thousands of active users.", who: "Sunday O.", role: "Founder, Cashwyre" },
              { quote: "They delivered a seamless transaction experience and helped us scale smoothly. Extremely reliable team.", who: "David.", role: "CEO, Sharp pocket" },
              { quote: "Design, engineering, growth, all under one roof, and all genuinely good. Rare combo.", who: "Tunde A.", role: "Product Lead, Aldora" },
            ].map((t) => (
              <figure key={t.who} className="flex flex-col">
                <blockquote className="font-display text-2xl leading-snug text-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent text-sm font-medium">
                    {t.who.charAt(0)}
                  </span>
                  <div>
                    <div className="text-sm text-foreground">{t.who}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-accent text-accent-foreground p-12 md:p-20">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display text-4xl md:text-6xl tracking-tight">
              Got an idea worth building?
            </h2>
            <p className="mt-5 text-base md:text-lg opacity-80">
              Tell us about it. We'll help you scope it, ship it, and grow it — without the noise.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground hover:opacity-90"
            >
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-background/20 blur-3xl" />
        </div>
      </section>
    </SiteShell>
  );
}
