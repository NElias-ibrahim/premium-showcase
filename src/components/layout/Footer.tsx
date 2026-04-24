import { Link } from "react-router-dom";

export const Footer = () => {
  const cols = [
    {
      title: "Collection",
      items: ["Overview", "New", "Featured", "All products"],
    },
    {
      title: "Brand",
      items: ["About", "Story", "Press", "Careers"],
    },
    {
      title: "Visit",
      items: ["Stores", "Showrooms", "Events", "Appointments"],
    },
    {
      title: "Contact",
      items: ["Get in touch", "FAQ", "Newsletter", "Social"],
    },
  ];

  return (
    <footer className="bg-surface border-t border-border mt-24">
      <div className="container-tight py-12">
        <p className="text-xs text-muted-foreground mb-10">
          Visit one of our locations or{" "}
          <Link to="/contact" className="text-accent hover:underline">contact us</Link>{" "}
          for any inquiry.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-10 border-t border-border">
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold mb-3">{c.title}</p>
              <ul className="space-y-2">
                {c.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-xs text-muted-foreground hover:text-foreground hover:underline transition-colors">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Legal</a>
            <a href="#" className="hover:underline">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
