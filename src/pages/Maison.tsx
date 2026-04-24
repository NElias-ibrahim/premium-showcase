import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import craftHands from "@/assets/craft-hands.jpg";
import boutique from "@/assets/boutique.jpg";
import { Reveal } from "@/components/Reveal";

const Maison = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <>
      <section className="pt-32 pb-24">
        <div className="container-narrow text-center">
          <Reveal as="p" className="eyebrow">La Maison</Reveal>
          <Reveal as="h1" delay={0.1} className="display-serif text-6xl md:text-8xl mt-6 leading-[0.95]">
            Cent ans d'un même
            <br />
            <span className="italic text-accent">geste.</span>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 text-lg text-muted-foreground leading-relaxed">
              En 1923, Léonard Alba ouvre une modeste échoppe rue de la Paix à Paris.
              Il y assemble, à la main, des montres dont la précision n'a d'égale que
              la beauté. Cent ans plus tard, nous sommes restés fidèles à son intuition :
              le luxe ne se décrète pas, il se transmet.
            </p>
          </Reveal>
        </div>
      </section>

      <section ref={ref} className="overflow-hidden">
        <div className="container-tight">
          <motion.div style={{ y }} className="aspect-[16/9] rounded-3xl overflow-hidden shadow-elevated">
            <img src={craftHands} alt="Artisan dans l'atelier" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="py-32">
        <div className="container-tight grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <Reveal as="p" className="eyebrow">Notre philosophie</Reveal>
            <Reveal as="h2" delay={0.1} className="display-serif text-4xl md:text-5xl mt-4 leading-[1.05]">
              Faire moins, faire mieux, faire pour durer.
            </Reveal>
          </div>
          <div className="lg:col-span-7 space-y-8 text-lg text-muted-foreground leading-relaxed">
            <Reveal>
              <p>
                Nous croyons aux objets dont on hérite. À la patine du temps. Aux
                matières qui parlent. Chaque pièce signée Maison Alba répond à une
                exigence simple : être là, encore, dans cinquante ans.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Nos artisans — horlogers à Genève, selliers à Florence, bottiers à
                Northampton — travaillent avec la lenteur que mérite l'excellence.
                Aucune machine ne remplace la main qui sait.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-foreground text-primary-foreground">
        <div className="container-tight">
          <Reveal as="p" className="eyebrow text-primary-foreground/60">Chronologie</Reveal>
          <Reveal as="h2" delay={0.1} className="display-serif text-5xl md:text-6xl mt-4 mb-20">
            Quelques dates.
          </Reveal>

          <div className="space-y-16">
            {[
              { year: "1923", title: "Naissance", text: "Léonard Alba ouvre son atelier rue de la Paix à Paris." },
              { year: "1947", title: "Première montre signature", text: "Le calibre AL-1 est présenté au Salon de l'Horlogerie." },
              { year: "1968", title: "Atelier de Florence", text: "Maison Alba s'ouvre à la maroquinerie d'art." },
              { year: "1995", title: "Boutique de Tokyo", text: "Première implantation hors d'Europe, à Ginza." },
              { year: "2023", title: "Centenaire", text: "Cent ans, et la même obstination tranquille." },
            ].map((step, i) => (
              <Reveal key={step.year} delay={i * 0.06}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-primary-foreground/15 pt-8">
                  <div className="md:col-span-2 display-serif text-3xl text-accent">{step.year}</div>
                  <div className="md:col-span-3 display-serif text-2xl">{step.title}</div>
                  <p className="md:col-span-7 text-primary-foreground/70 leading-relaxed">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container-tight">
          <Reveal>
            <div className="aspect-[21/9] rounded-3xl overflow-hidden">
              <img src={boutique} alt="Boutique Maison Alba" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Maison;
