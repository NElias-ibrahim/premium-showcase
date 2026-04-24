import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "@/data/products";

const categories = ["All", "Category A", "Category B", "Category C", "Category D"] as const;

const Collection = () => {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  return (
    <>
      <section className="pt-20 pb-10 bg-background">
        <div className="container-tight text-center">
          <p className="eyebrow">Collection</p>
          <h1 className="headline-lg mt-3">Explore the lineup.</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </section>

      <section className="sticky top-12 z-30 glass-nav border-y border-border/60">
        <div className="container-tight flex items-center gap-2 overflow-x-auto py-3 no-scrollbar justify-start md:justify-center">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`relative shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-colors duration-300 ${
                active === c ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {active === c && (
                <motion.span
                  layoutId="cat-pill"
                  className="absolute inset-0 rounded-full bg-foreground"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative">{c}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 bg-background min-h-[40vh]">
        <div className="container-tight">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-20">No items in this category.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (i % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link to={`/collection/${p.slug}`} className="group block">
                    <div className="aspect-square overflow-hidden rounded-2xl bg-surface">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-xs text-muted-foreground">{p.category}</p>
                      <h3 className="text-lg font-semibold mt-1">{p.name}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{p.tagline}</p>
                      <p className="mt-3 text-sm text-accent group-hover:underline underline-offset-4">
                        Discover ›
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Collection;
