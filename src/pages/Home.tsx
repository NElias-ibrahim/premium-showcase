import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { products, stockImages } from "@/data/products";
import { Reveal } from "@/components/Reveal";

const Home = () => {
  const [feat1, feat2, feat3, feat4] = products;

  return (
    <>
      {/* HERO — Apple-style: huge centered title + product below */}
      <section className="bg-background pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="container-tight text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-base font-semibold mb-2"
          >
            Product One
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="headline-xl"
          >
            Big. Bigger.<br />Biggest.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-xl md:text-2xl font-medium text-foreground/80"
          >
            Lorem ipsum dolor sit amet consectetur.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 flex items-center justify-center gap-5 text-base"
          >
            <Link to="/collection" className="pill-btn-primary">Buy</Link>
            <Link to="/collection/product-one" className="pill-btn-ghost">
              Learn more <ChevronRight size={14} className="ml-1" />
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-3 text-xs text-muted-foreground"
          >
            From $0,000 or $00.00/mo. for 12 mo.*
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 mx-auto max-w-5xl"
          >
            <div className="aspect-[16/10] rounded-3xl overflow-hidden bg-surface">
              <img
                src={feat1.image}
                alt="Hero product"
                className="w-full h-full object-cover"
                width={1920}
                height={1200}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* TWO STACKED FEATURE TILES — Apple grid */}
      <section className="bg-background pb-3">
        <div className="container-tight">
          <Reveal>
            <FeatureTile
              image={feat2.image}
              eyebrow="Product Two"
              headline={<>Pro. Beyond.</>}
              sub="Lorem ipsum dolor sit amet."
              dark
              tall
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-background pb-3">
        <div className="container-tight grid grid-cols-1 md:grid-cols-2 gap-3">
          <Reveal>
            <FeatureTile
              image={feat3.image}
              eyebrow="Product Three"
              headline={<>Made to move.</>}
              sub="Lorem ipsum dolor sit amet consectetur."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <FeatureTile
              image={feat4.image}
              eyebrow="Product Four"
              headline={<>Crafted simply.</>}
              sub="Lorem ipsum dolor sit amet consectetur."
              dark
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-background pb-3">
        <div className="container-tight grid grid-cols-1 md:grid-cols-2 gap-3">
          <Reveal>
            <FeatureTile
              image={stockImages.craftHands}
              eyebrow="Story"
              headline={<>Built for everyone.</>}
              sub="Lorem ipsum dolor sit amet."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <FeatureTile
              image={stockImages.boutique}
              eyebrow="Stores"
              headline={<>Visit us in store.</>}
              sub="Lorem ipsum dolor sit amet."
              dark
            />
          </Reveal>
        </div>
      </section>

      {/* HORIZONTAL SHOP STRIP */}
      <section className="py-20 bg-background">
        <div className="container-tight">
          <Reveal as="h2" className="headline-md mb-8">
            The lineup.
          </Reveal>
          <div className="flex gap-5 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6 snap-x">
            {products.map((p) => (
              <Link
                key={p.slug}
                to={`/collection/${p.slug}`}
                className="group shrink-0 w-[260px] md:w-[300px] snap-start"
              >
                <div className="aspect-square rounded-2xl bg-surface overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-xs text-muted-foreground">{p.category}</p>
                  <p className="text-base font-semibold mt-1">{p.name}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">From {p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const FeatureTile = ({
  image,
  eyebrow,
  headline,
  sub,
  dark = false,
  tall = false,
}: {
  image: string;
  eyebrow: string;
  headline: React.ReactNode;
  sub: string;
  dark?: boolean;
  tall?: boolean;
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl ${
        tall ? "aspect-[16/10] md:aspect-[21/10]" : "aspect-[4/5] md:aspect-[5/6]"
      }`}
    >
      <img src={image} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div
        className={`absolute inset-0 ${
          dark ? "bg-gradient-to-b from-black/10 via-transparent to-black/60" : "bg-gradient-to-b from-white/0 via-white/0 to-white/40"
        }`}
      />
      <div className={`absolute inset-x-0 top-0 p-8 md:p-12 text-center ${dark ? "text-white" : "text-foreground"}`}>
        <p className="text-sm font-semibold mb-1">{eyebrow}</p>
        <h3 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">{headline}</h3>
        <p className="mt-3 text-base md:text-lg opacity-80">{sub}</p>
        <div className="mt-5 flex items-center justify-center gap-5">
          <button className={`pill-btn ${dark ? "bg-white text-black hover:bg-white/90" : "bg-accent text-accent-foreground hover:bg-accent/90"}`}>
            Buy
          </button>
          <button className={`pill-btn ${dark ? "text-white hover:underline" : "text-accent hover:underline"} underline-offset-4`}>
            Learn more <ChevronRight size={14} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
