import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent" />
              <span className="font-display text-2xl">HallaTech</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              We build sleek tech products and help founders grow them into companies that matter.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-accent">Services</Link></li>
              <li><Link to="/work" className="hover:text-accent">Work</Link></li>
              <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="mailto:support@hallatechnologies.com" className="hover:text-accent">support@hallatechnologies.com</a></li>
              <li><a href="https://wa.me/2348056679806" className="hover:text-accent">+234 805 667 9806</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} HallaTech. Built with care.</p>
          <p>Lagos · Remote · Worldwide</p>
        </div>
      </div>
    </footer>
  );
}
