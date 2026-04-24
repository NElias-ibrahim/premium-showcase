import { stockImages } from "@/data/products";
import { Reveal } from "@/components/Reveal";

const Maison = () => {
  return (
    <>
      <section className="pt-20 pb-12 bg-background text-center">
        <div className="container-narrow">
          <p className="eyebrow">About</p>
          <h1 className="headline-lg mt-3">Designed with intention.</h1>
          <p className="mt-5 text-xl md:text-2xl font-medium text-foreground/80">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </section>

      <section className="pb-12 bg-background">
        <div className="container-tight">
          <Reveal>
            <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-surface">
              <img src={stockImages.craftHands} alt="" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-narrow text-center space-y-12">
          <Reveal>
            <h2 className="headline-md">Our values.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container-tight grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { n: "0000", l: "Founded" },
            { n: "00", l: "Locations" },
            { n: "00M+", l: "Customers" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 0.1}>
              <p className="text-6xl md:text-7xl font-semibold tracking-tight">{s.n}</p>
              <p className="text-sm text-muted-foreground mt-2">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-tight">
          <Reveal as="h2" className="headline-md mb-12 text-center">A short history.</Reveal>
          <div className="space-y-10 max-w-3xl mx-auto">
            {[
              { year: "0000", title: "First milestone", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
              { year: "0000", title: "Second milestone", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
              { year: "0000", title: "Third milestone", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
              { year: "0000", title: "Fourth milestone", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="grid grid-cols-12 gap-4 border-t border-border pt-6">
                  <div className="col-span-3 text-base font-semibold text-accent">{step.year}</div>
                  <div className="col-span-9">
                    <p className="text-base font-semibold">{step.title}</p>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Maison;
