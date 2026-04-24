import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground mt-32">
      <div className="container-tight py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <h3 className="display-serif text-4xl md:text-5xl leading-[1.05]">
              L'élégance, <br /> sans concession.
            </h3>
            <p className="mt-6 max-w-md text-primary-foreground/60 text-sm leading-relaxed">
              Inscrivez-vous au Cercle Alba pour recevoir nos collections en avant-première
              et nos invitations privées.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex max-w-md border-b border-primary-foreground/30 focus-within:border-primary-foreground transition-colors"
            >
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 bg-transparent py-3 text-sm placeholder:text-primary-foreground/40 focus:outline-none"
              />
              <button className="text-sm py-3 px-2 link-underline">S'inscrire →</button>
            </form>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-primary-foreground/60">Maison</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/maison" className="link-underline text-primary-foreground/80 hover:text-primary-foreground">Notre histoire</Link></li>
              <li><Link to="/maison" className="link-underline text-primary-foreground/80 hover:text-primary-foreground">Savoir-faire</Link></li>
              <li><Link to="/boutiques" className="link-underline text-primary-foreground/80 hover:text-primary-foreground">Boutiques</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-primary-foreground/60">Collection</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/collection" className="link-underline text-primary-foreground/80 hover:text-primary-foreground">Horlogerie</Link></li>
              <li><Link to="/collection" className="link-underline text-primary-foreground/80 hover:text-primary-foreground">Maroquinerie</Link></li>
              <li><Link to="/collection" className="link-underline text-primary-foreground/80 hover:text-primary-foreground">Accessoires</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-primary-foreground/60">Service client</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/contact" className="link-underline text-primary-foreground/80 hover:text-primary-foreground">Contact</Link></li>
              <li className="text-primary-foreground/80">+33 1 42 60 00 00</li>
              <li className="text-primary-foreground/80">concierge@maisonalba.com</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors"><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors"><Facebook size={18} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-accent transition-colors"><Twitter size={18} /></a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Maison Alba. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
