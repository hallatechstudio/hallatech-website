import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — HallaTech" },
      { name: "description", content: "Get in touch with HallaTech. Tell us about your project and we'll respond within one business day." },
      { property: "og:title", content: "Contact HallaTech" },
      { property: "og:description", content: "Reach out about your product, growth or design project." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Get in touch</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl tracking-tight max-w-4xl">
          Let's build <span className="italic text-accent">something good</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground text-lg">
          Whether you need a complete product team or specialised growth support, we're here to help. Reach out anytime.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-4 md:grid-cols-2 max-w-3xl">
          {[
            { icon: Mail, label: "Email", value: "support@hallatechnologies.com", href: "mailto:support@hallatechnologies.com" },
            { icon: Phone, label: "Phone", value: "+234 805 667 9806", href: "tel:+2348056679806" },
            { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/2348056679806" },
          ].map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} className="group flex items-center justify-between gap-6 rounded-2xl border border-border bg-card p-6 transition hover:border-accent/40">
              <div className="flex items-center gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
                  <div className="mt-1 text-sm text-foreground">{value}</div>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent" />
            </a>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
