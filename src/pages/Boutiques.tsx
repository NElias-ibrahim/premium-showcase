import { Reveal } from "@/components/Reveal";
import boutique from "@/assets/boutique.jpg";

const stores = [
  { city: "Paris", address: "12 rue de la Paix, 75002", phone: "+33 1 42 60 00 00", hours: "Lun – Sam : 10h – 19h" },
  { city: "Genève", address: "8 rue du Rhône, 1204", phone: "+41 22 318 00 00", hours: "Lun – Sam : 10h – 18h" },
  { city: "Florence", address: "Via de' Tornabuoni 14, 50123", phone: "+39 055 264 0000", hours: "Mar – Sam : 10h – 19h" },
  { city: "London", address: "47 Old Bond Street, W1S 4QX", phone: "+44 20 7491 0000", hours: "Mon – Sat : 10h – 19h" },
  { city: "Tokyo", address: "Ginza 6-9-1, Chuo-ku", phone: "+81 3 6228 0000", hours: "10:00 – 20:00" },
  { city: "New York", address: "693 Fifth Avenue, NY 10022", phone: "+1 212 752 0000", hours: "Mon – Sat : 10h – 19h" },
];

const Boutiques = () => {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="container-narrow text-center">
          <Reveal as="p" className="eyebrow">Nos Boutiques</Reveal>
          <Reveal as="h1" delay={0.1} className="display-serif text-6xl md:text-8xl mt-6 leading-[0.95]">
            Six adresses,
            <br />
            <span className="italic">une même âme.</span>
          </Reveal>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-tight">
          <Reveal>
            <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-elevated">
              <img src={boutique} alt="Intérieur boutique" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container-tight grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {stores.map((s, i) => (
            <Reveal key={s.city} delay={(i % 3) * 0.08}>
              <div className="bg-background p-10 h-full hover:bg-surface transition-colors duration-500 group">
                <p className="eyebrow text-accent">Boutique</p>
                <h3 className="display-serif text-4xl mt-3 group-hover:text-accent transition-colors duration-500">{s.city}</h3>
                <div className="mt-8 space-y-2 text-sm text-muted-foreground leading-relaxed">
                  <p>{s.address}</p>
                  <p>{s.phone}</p>
                  <p className="text-foreground">{s.hours}</p>
                </div>
                <a href="#" className="mt-8 inline-block link-underline text-sm">
                  Prendre rendez-vous →
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
