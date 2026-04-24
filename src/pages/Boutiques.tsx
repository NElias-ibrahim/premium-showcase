import { Reveal } from "@/components/Reveal";
import { stockImages } from "@/data/products";

const stores = [
  { city: "City One", address: "0000 Sample Street", phone: "+0 000 000 0000", hours: "Mon – Sat: 10am – 7pm" },
  { city: "City Two", address: "0000 Sample Avenue", phone: "+0 000 000 0000", hours: "Mon – Sat: 10am – 7pm" },
  { city: "City Three", address: "0000 Sample Road", phone: "+0 000 000 0000", hours: "Tue – Sat: 10am – 7pm" },
  { city: "City Four", address: "0000 Sample Lane", phone: "+0 000 000 0000", hours: "Mon – Sat: 10am – 7pm" },
  { city: "City Five", address: "0000 Sample Boulevard", phone: "+0 000 000 0000", hours: "10am – 8pm" },
  { city: "City Six", address: "0000 Sample Place", phone: "+0 000 000 0000", hours: "Mon – Sat: 10am – 7pm" },
];

const Boutiques = () => {
  return (
    <>
      <section className="pt-20 pb-10 bg-background text-center">
        <div className="container-narrow">
          <p className="eyebrow">Stores</p>
          <h1 className="headline-lg mt-3">Find a store.</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </section>

      <section className="pb-12 bg-background">
        <div className="container-tight">
          <Reveal>
            <div className="aspect-[21/9] rounded-3xl overflow-hidden bg-surface">
              <img src={stockImages.boutique} alt="" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-tight grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((s, i) => (
            <Reveal key={s.city} delay={(i % 3) * 0.08}>
              <div className="bg-surface rounded-2xl p-8 h-full hover:bg-secondary transition-colors duration-300 group">
                <p className="text-xs text-accent font-semibold">Store</p>
                <h3 className="text-2xl font-semibold mt-2">{s.city}</h3>
                <div className="mt-6 space-y-1.5 text-sm text-muted-foreground">
                  <p>{s.address}</p>
                  <p>{s.phone}</p>
                  <p className="text-foreground">{s.hours}</p>
                </div>
                <a href="#" className="mt-6 inline-block text-sm text-accent hover:underline underline-offset-4">
                  Get directions ›
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};

export default Boutiques;
