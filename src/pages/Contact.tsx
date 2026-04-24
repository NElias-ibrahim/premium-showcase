import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { toast } from "sonner";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Votre message nous est bien parvenu. Nous reviendrons vers vous sous 24h.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <>
      <section className="pt-32 pb-16">
        <div className="container-narrow text-center">
          <Reveal as="p" className="eyebrow">Concierge</Reveal>
          <Reveal as="h1" delay={0.1} className="display-serif text-6xl md:text-8xl mt-6 leading-[0.95]">
            À votre <span className="italic text-accent">écoute.</span>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg text-muted-foreground">
              Une question, un conseil, une demande particulière. Notre service
              concierge vous répond avec le même soin que celui apporté à nos pièces.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-tight grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-12">
            <Reveal>
              <div>
                <p className="eyebrow">Téléphone</p>
                <p className="display-serif text-3xl mt-3">+33 1 42 60 00 00</p>
                <p className="text-muted-foreground text-sm mt-2">Du lundi au samedi, 9h–19h (CET)</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <p className="eyebrow">Email</p>
                <p className="display-serif text-3xl mt-3">concierge@maisonalba.com</p>
                <p className="text-muted-foreground text-sm mt-2">Réponse sous 24 heures</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <p className="eyebrow">Maison-mère</p>
                <p className="display-serif text-3xl mt-3">12 rue de la Paix</p>
                <p className="text-muted-foreground text-sm mt-2">75002 Paris, France</p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <form onSubmit={onSubmit} className="space-y-8 bg-surface rounded-3xl p-8 md:p-12 border border-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Field label="Prénom" name="firstName" required />
                  <Field label="Nom" name="lastName" required />
                </div>
                <Field label="Email" name="email" type="email" required />
                <Field label="Sujet" name="subject" />
                <div>
                  <label className="eyebrow block mb-3">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-transparent border-b border-border focus:border-foreground transition-colors py-3 text-sm focus:outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-4 text-sm text-primary-foreground hover:scale-[1.02] transition-transform duration-500 disabled:opacity-60"
                >
                  {sending ? "Envoi en cours…" : "Envoyer le message"}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

const Field = ({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) => (
  <div>
    <label className="eyebrow block mb-3">{label}</label>
    <input
      type={type}
      name={name}
      required={required}
      className="w-full bg-transparent border-b border-border focus:border-foreground transition-colors py-3 text-sm focus:outline-none"
    />
  </div>
);

export default Contact;
