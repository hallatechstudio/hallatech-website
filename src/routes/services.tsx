import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Code2, TrendingUp, Megaphone, Palette, BarChart3, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — HallaTech" },
      { name: "description", content: "Product development, growth marketing, design, analytics and more — end-to-end services to build and grow tech products." },
      { property: "og:title", content: "HallaTech Services" },
      { property: "og:description", content: "End-to-end product, growth and design services." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Code2, title: "Product Development", body: "We design and ship sustainable, scalable products with cutting-edge tech and clean architecture." },
  { icon: TrendingUp, title: "Growth Marketing", body: "User & revenue growth through proven acquisition, retention and lifecycle strategies." },
  { icon: Megaphone, title: "Digital Advertising", body: "Strategic paid campaigns that convert and maximize marketing ROI across channels." },
  { icon: Palette, title: "UI / UX Design", body: "Beautiful, intuitive interfaces that turn first-time visitors into long-term users." },
  { icon: BarChart3, title: "Data & Analytics", body: "Turn raw data into clear, actionable insights with dashboards and experimentation." },
  { icon: ShieldCheck, title: "Security & Compliance", body: "Ship products that are secure by design and protect the people who use them." },
];

function ServicesPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Services</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl tracking-tight max-w-4xl">
          Everything you need to <span className="italic text-accent">launch & scale</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground text-lg">
          We partner with startups and established teams to build MVPs, grow traction, and scale impact — with the right mix of product, growth and design.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, body }) => (
            <article key={title} className="group rounded-3xl border border-border bg-card p-8 transition hover:border-accent/40 hover:-translate-y-1">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
              <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground group-hover:text-accent">
                Learn more <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2.5rem] border border-border p-12 md:p-16 text-center">
          <h2 className="font-display text-4xl md:text-5xl tracking-tight">Let's build the thing.</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Tell us about your idea. We'll get back within one business day.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground">
            Start a project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
