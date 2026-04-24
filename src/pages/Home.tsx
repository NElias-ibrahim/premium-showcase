import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import heroWatch from "@/assets/hero-watch.jpg";
import craftHands from "@/assets/craft-hands.jpg";
import boutique from "@/assets/boutique.jpg";
import { products } from "@/data/products";
import { Reveal } from "@/components/Reveal";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const featured = products.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[100svh] flex flex-col items-center justify-center bg-gradient-hero overflow-hidden">
        <motion.div style={{ opacity: heroOpacity }} className="container-tight relative z-10 text-center pt-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow"
          >
            Nouvelle Collection — Printemps 2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="display-serif mt-6 text-[clamp(3rem,10vw,9rem)] leading-[0.95] font-medium"
          >
            L'élégance,
            <br />
            <span className="italic text-accent">incarnée.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            Maison Alba façonne des objets d'exception depuis 1923. Chaque pièce est
            la rencontre d'un geste séculaire et d'un regard contemporain.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/collection"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm text-primary-foreground transition-all duration-500 hover:scale-[1.03] hover:shadow-elevated"
            >
              Découvrir la collection
              <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/maison"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm text-foreground border border-border hover:bg-secondary transition-colors duration-500"
            >
              Notre Maison
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="relative z-10 mt-16 w-full max-w-5xl px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[16/10] rounded-[2rem] overflow-hidden shadow-product"
          >
            <img
              src={heroWatch}
              alt="Montre Alba Méridien, cadran bleu nuit"
              className="w-full h-full object-cover"
              width={1920}
              height={1200}
            />
          </motion.div>
        </motion.div>

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none z-20" />
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border py-6 overflow-hidden bg-surface">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-16 pr-16">
              {["Paris", "Florence", "London", "Tokyo", "New York", "Genève", "Milano", "Hong Kong"].map((city) => (
                <span key={`${i}-${city}`} className="display-serif text-3xl text-muted-foreground/70 italic">
                  {city}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-32">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
            <div>
              <Reveal as="p" className="eyebrow">Pièces signature</Reveal>
              <Reveal as="h2" delay={0.1} className="display-serif text-5xl md:text-7xl mt-4 leading-[0.95]">
                Trois icônes,
                <br />
                <span className="italic">une signature.</span>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <Link to="/collection" className="link-underline text-sm inline-flex items-center gap-2">
                Voir toute la collection <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.12}>
                <Link to={`/collection/${p.slug}`} className="group block">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-6 flex items-start justify-between">
                    <div>
                      <p className="eyebrow">{p.category}</p>
                      <h3 className="display-serif text-2xl mt-2">{p.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{p.price}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CRAFT STORY */}
      <section className="py-32 bg-foreground text-primary-foreground overflow-hidden">
        <div className="container-tight grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={craftHands}
                alt="Artisan travaillant un bracelet de cuir à l'atelier"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal as="p" className="eyebrow text-primary-foreground/60">Savoir-faire</Reveal>
            <Reveal as="h2" delay={0.1} className="display-serif text-5xl md:text-6xl mt-4 leading-[1]">
              Cent ans
              <br />
              <span className="italic text-accent">de patience.</span>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-primary-foreground/70 leading-relaxed text-lg">
                À la Maison Alba, le temps est notre matière première. Chaque pièce naît
                de gestes patiemment transmis, dans nos ateliers de Paris, Florence et
                Genève. Nous ne produisons rien — nous façonnons.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link
                to="/maison"
                className="mt-10 inline-flex items-center gap-2 link-underline text-sm text-primary-foreground"
              >
                Découvrir notre histoire <ArrowUpRight size={16} />
              </Link>
            </Reveal>

            <div className="mt-16 grid grid-cols-3 gap-8 pt-10 border-t border-primary-foreground/15">
              {[
                { n: "1923", l: "Fondation" },
                { n: "07", l: "Ateliers" },
                { n: "32", l: "Boutiques" },
              ].map((s, i) => (
                <Reveal key={s.l} delay={0.1 * i}>
                  <p className="display-serif text-4xl">{s.n}</p>
                  <p className="text-xs uppercase tracking-widest text-primary-foreground/60 mt-2">{s.l}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOUTIQUE INVITATION */}
      <section className="py-32">
        <div className="container-tight">
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden">
            <img src={boutique} alt="Intérieur d'une boutique Maison Alba" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-16">
              <Reveal as="p" className="eyebrow text-primary-foreground/80">L'expérience</Reveal>
              <Reveal as="h2" delay={0.1} className="display-serif text-4xl md:text-6xl text-primary-foreground mt-3 max-w-2xl leading-[1.05]">
                Visitez nos maisons.
              </Reveal>
              <Reveal delay={0.2}>
                <Link
                  to="/boutiques"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm text-foreground hover:bg-primary-foreground/90 transition-colors duration-500 w-fit"
                >
                  Trouver une boutique <ArrowRight size={16} />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
