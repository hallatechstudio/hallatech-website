import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Compass, PenTool, Rocket, LineChart, Quote } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import heroDevices from "@/assets/hero-devices.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HallaTech — We build & grow tech products" },
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
  { name: "Soundhalla", tag: "Music & Entertainment", blurb: "Amplify your sound — data-driven artist growth.", url: "https://soundhalla.com/" },
  { name: "Cashwyre", tag: "Fintech", blurb: "Send money simply across borders, on crypto rails.", url: "https://cashwyre.com/" },
  { name: "Aldora", tag: "Gaming", blurb: "Turning raw game metrics into clear intelligence.", url: "https://www.aldora.com/" },
  { name: "TuneNova", tag: "Music & Entertainment", blurb: "Grow your fanbase across Spotify, Apple & YouTube.", url: "https://www.tunenova.com/" },
  { name: "Sharp Pocket", tag: "Fintech", blurb: "Pay bills, buy airtime and data — fast and secure.", url: "https://www.mysharppocket.com/" },
  { name: "Teilorr", tag: "Fashion Tech", blurb: "Streamline your tailoring business with intuitive digital tools.", url: "https://www.teilorr.com/" },
  { name: "ShopNSure", tag: "Fintech", blurb: "Secure escrow that holds buyer funds until delivery.", url: "https://www.shopnsure.com/" },
];

function Index() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--accent)_0%,_transparent_55%)] opacity-20" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-display text-[3.25rem] leading-[1.02] md:text-[5.5rem] md:leading-[0.98] tracking-tight text-foreground">
                We build & grow
                <br />
                <span className="italic text-accent">tech products</span> that scale globally.
              </h1>
              <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground">
                Most tech never reaches its potential. We pair sharp product development with growth strategy — so the right people actually use what you ship.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/work"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90"
                >
                  Explore our work
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground transition hover:bg-secondary"
                >
                  What we do
                </Link>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
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
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-6 rounded-[3rem] bg-accent/15 blur-3xl" />
                <img
                  src={heroDevices}
                  alt="HallaTech product previews"
                  width={1280}
                  height={1280}
                  className="relative w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE / TRUST */}
      <section className="border-y border-border overflow-hidden">
        <div className="relative mx-auto max-w-7xl py-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex w-max animate-marquee gap-16 pr-16">
            {[...products, ...products, ...products].map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="flex items-center gap-3 shrink-0 opacity-70 hover:opacity-100 transition"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-accent/15 text-accent font-display text-sm">
                  {p.name.charAt(0)}
                </span>
                <span className="font-display text-lg text-foreground/80 whitespace-nowrap">
                  {p.name}
                </span>
              </div>
            ))}
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
              <div className="h-32 rounded-2xl bg-gradient-to-br from-secondary to-card flex items-center justify-center mb-5 overflow-hidden">
                <span className="font-display text-4xl text-accent/70">{String(i + 1).padStart(2, "0")}</span>
              </div>
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
              { quote: "Halla didn't just build our app — they helped us find our first 10,000 users. The most embedded partner we've ever had.", who: "Daniel O.", role: "Founder, Soundhalla" },
              { quote: "Sharp team, sharper execution. They shipped our MVP in eight weeks and it actually felt like a v3.", who: "Ifeoma N.", role: "CEO, Tracla" },
              { quote: "Design, engineering, growth — all under one roof, and all genuinely good. Rare combo.", who: "Tunde A.", role: "Product Lead, Cashwyre" },
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
