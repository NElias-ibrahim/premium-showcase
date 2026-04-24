import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { getProduct, products } from "@/data/products";
import { Reveal } from "@/components/Reveal";
import NotFound from "./NotFound";

const Product = () => {
  const { slug } = useParams();
  const product = slug ? getProduct(slug) : undefined;

  if (!product) return <NotFound />;

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="pt-16 pb-10 text-center bg-background">
        <div className="container-tight">
          <p className="eyebrow">{product.category}</p>
          <h1 className="headline-lg mt-3">{product.name}</h1>
          <p className="mt-4 text-xl md:text-2xl font-medium text-foreground/80">{product.tagline}</p>
          <div className="mt-5 flex items-center justify-center gap-5">
            <Link to="#buy" className="pill-btn-primary">Buy</Link>
            <Link to="#learn" className="pill-btn-ghost">Learn more <ChevronRight size={14} className="ml-1" /></Link>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">From {product.price} or $00.00/mo. for 12 mo.*</p>
        </div>
      </section>

      <section className="pb-16 bg-background">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[16/10] overflow-hidden rounded-3xl bg-surface"
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container-narrow">
          <Reveal as="h2" className="headline-md mb-6">Get the highlights.</Reveal>
          <Reveal>
            <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {product.details.map((d) => (
              <Reveal key={d.label}>
                <div className="bg-background p-6">
                  <p className="text-xs text-muted-foreground">{d.label}</p>
                  <p className="text-base font-semibold mt-1">{d.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-tight">
          <Reveal as="h2" className="headline-md mb-8">You may also like.</Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link to={`/collection/${p.slug}`} className="group block">
                  <div className="aspect-square overflow-hidden rounded-2xl bg-surface">
                    <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-xs text-muted-foreground">{p.category}</p>
                    <p className="text-base font-semibold mt-1">{p.name}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">From {p.price}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/collection" className="text-sm text-accent hover:underline underline-offset-4 inline-flex items-center gap-1">
              <ArrowLeft size={14} /> Back to shop
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
