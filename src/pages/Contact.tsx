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
      toast.success("Message sent. We'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <>
      <section className="pt-20 pb-12 bg-background text-center">
        <div className="container-narrow">
          <p className="eyebrow">Support</p>
          <h1 className="headline-lg mt-3">We're here to help.</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
        </div>
      </section>

      <section className="pb-24 bg-background">
        <div className="container-tight grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-10">
            <Reveal>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-2xl font-semibold mt-1">+0 (000) 000-0000</p>
                <p className="text-sm text-muted-foreground mt-1">Mon – Sat, 9am – 7pm</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-2xl font-semibold mt-1">support@example.com</p>
                <p className="text-sm text-muted-foreground mt-1">Reply within 24h</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <p className="text-xs text-muted-foreground">Headquarters</p>
                <p className="text-2xl font-semibold mt-1">0000 Sample Street</p>
                <p className="text-sm text-muted-foreground mt-1">City, Country</p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <form onSubmit={onSubmit} className="space-y-6 bg-surface rounded-3xl p-8 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="First name" name="firstName" required />
                  <Field label="Last name" name="lastName" required />
                </div>
                <Field label="Email" name="email" type="email" required />
                <Field label="Subject" name="subject" />
                <div>
                  <label className="text-xs text-muted-foreground block mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="pill-btn-primary disabled:opacity-60"
                >
                  {sending ? "Sending…" : "Send message"}
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
    <label className="text-xs text-muted-foreground block mb-2">{label}</label>
    <input
      type={type}
      name={name}
      required={required}
      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
    />
  </div>
);

export default Contact;
