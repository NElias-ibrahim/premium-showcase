import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { Reveal } from "@/components/Reveal";

const categories = ["Tout", "Horlogerie", "Maroquinerie", "Souliers", "Accessoires"] as const;

const Collection = () => {
  const [active, setActive] = useState<(typeof categories)[number]>("Tout");

  const filtered = useMemo(
    () => (active === "Tout" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  return (
    <>
      <section className="pt-24 pb-12">
        <div className="container-tight text-center">
          <Reveal as="p" className="eyebrow">La Collection</Reveal>
          <Reveal as="h1" delay={0.1} className="display-serif text-6xl md:text-8xl mt-6 leading-[0.95]">
            Tout ce qui nous
            <br />
            <span className="italic">émeut.</span>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl mx-auto text-muted-foreground">
              Une sélection rigoureuse, pensée comme une garde-robe pour la vie.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sticky top-16 z-30 glass-nav border-y border-border/60">
        <div className="container-tight flex items-center gap-2 overflow-x-auto py-4 no-scrollbar">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`relative shrink-0 rounded-full px-5 py-2 text-sm transition-colors duration-300 ${
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

      <section className="py-20">
        <div className="container-tight grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filtered.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: (i % 6) * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={`/collection/${p.slug}`} className="group block">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <div>
                    <p className="eyebrow text-[10px]">{p.category}</p>
                    <h3 className="display-serif text-2xl mt-2 group-hover:text-accent transition-colors duration-300">{p.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.tagline}</p>
                  </div>
                  <p className="text-sm whitespace-nowrap">{p.price}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Collection;
