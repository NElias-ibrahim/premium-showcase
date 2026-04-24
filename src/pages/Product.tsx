import { Link, useParams } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRef } from "react";
import { getProduct, products } from "@/data/products";
import { Reveal } from "@/components/Reveal";
import NotFound from "./NotFound";

const Product = () => {
  const { slug } = useParams();
  const product = slug ? getProduct(slug) : undefined;
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  if (!product) return <NotFound />;

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <div className="container-tight pt-12">
        <Link to="/collection" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft size={16} /> Retour à la collection
        </Link>
      </div>

      <section className="py-12 lg:py-20">
        <div className="container-tight grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div ref={imgRef} className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{ y }}
              className="aspect-[4/5] overflow-hidden rounded-3xl bg-secondary shadow-product"
            >
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </motion.div>
          </div>

          <div className="lg:sticky lg:top-28">
            <Reveal as="p" className="eyebrow">{product.category}</Reveal>
            <Reveal as="h1" delay={0.05} className="display-serif text-5xl md:text-6xl mt-4 leading-[1]">
              {product.name}
            </Reveal>
            <Reveal delay={0.1}>
              <p className="display-serif italic text-2xl text-accent mt-4">{product.tagline}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg text-muted-foreground leading-relaxed mt-8">{product.description}</p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex items-baseline justify-between border-y border-border py-6">
                <span className="eyebrow">Prix</span>
                <span className="display-serif text-3xl">{product.price}</span>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="flex-1 inline-flex items-center justify-center rounded-full bg-foreground px-7 py-4 text-sm text-primary-foreground hover:scale-[1.02] transition-transform duration-500">
                  Demander un essayage
                </Link>
                <Link to="/boutiques" className="flex-1 inline-flex items-center justify-center rounded-full border border-border px-7 py-4 text-sm hover:bg-secondary transition-colors duration-500">
                  Trouver en boutique
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-12">
                <p className="eyebrow mb-4">Caractéristiques</p>
                <dl className="divide-y divide-border">
                  {product.details.map((d) => (
                    <div key={d.label} className="flex justify-between py-4 text-sm">
                      <dt className="text-muted-foreground">{d.label}</dt>
                      <dd className="text-right max-w-[60%]">{d.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="container-tight">
          <Reveal as="h2" className="display-serif text-4xl md:text-5xl mb-12">
            Vous aimerez aussi.
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1}>
                <Link to={`/collection/${p.slug}`} className="group block">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
                    <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                  </div>
                  <div className="mt-5 flex justify-between items-baseline">
                    <h3 className="display-serif text-xl">{p.name}</h3>
                    <p className="text-sm text-muted-foreground">{p.price}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
