import { Link } from "react-router-dom";

export const Footer = () => {
  const cols = [
    {
      title: "Shop and Learn",
      items: ["Products", "Collection", "New", "Gift cards", "Accessories"],
    },
    {
      title: "Account",
      items: ["Manage account", "Orders", "Wishlist", "Newsletter"],
    },
    {
      title: "Brand",
      items: ["About", "Newsroom", "Careers", "Investors"],
    },
    {
      title: "Support",
      items: ["Contact", "Stores", "Returns", "Shipping", "FAQ"],
    },
  ];

  return (
    <footer className="bg-surface border-t border-border mt-24">
      <div className="container-tight py-12">
        <p className="text-xs text-muted-foreground mb-10">
          More ways to shop:{" "}
          <Link to="/boutiques" className="text-accent hover:underline">Find a store</Link>{" "}
          or{" "}
          <Link to="/contact" className="text-accent hover:underline">call 1-800-000-0000</Link>.
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
          <p>Copyright © {new Date().getFullYear()} Brand Inc. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Sales and Refunds</a>
            <a href="#" className="hover:underline">Legal</a>
            <a href="#" className="hover:underline">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
