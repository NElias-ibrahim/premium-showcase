export interface Product {
  slug: string;
  name: string;
  category: "Horlogerie" | "Maroquinerie" | "Accessoires" | "Souliers";
  price: string;
  tagline: string;
  description: string;
  image: string;
  details: { label: string; value: string }[];
}

import watch1 from "@/assets/hero-watch.jpg";
import watch2 from "@/assets/product-watch-2.jpg";
import bag from "@/assets/product-bag.jpg";
import shoes from "@/assets/product-shoes.jpg";
import scarf from "@/assets/product-scarf.jpg";

export const products: Product[] = [
  {
    slug: "alba-meridien",
    name: "Alba Méridien",
    category: "Horlogerie",
    price: "€ 8 400",
    tagline: "L'heure, à sa juste mesure.",
    description:
      "Mouvement automatique manufacture, cadran bleu nuit soleillé, boîtier acier 39mm. Une pièce intemporelle, héritière d'un siècle de précision.",
    image: watch1,
    details: [
      { label: "Mouvement", value: "Automatique calibre AL-21" },
      { label: "Boîtier", value: "Acier poli 39 mm" },
      { label: "Cadran", value: "Bleu soleillé, index appliqués" },
      { label: "Bracelet", value: "Alligator bleu nuit, boucle ardillon" },
      { label: "Réserve", value: "72 heures" },
      { label: "Étanchéité", value: "50 mètres" },
    ],
  },
  {
    slug: "alba-aurora",
    name: "Alba Aurora",
    category: "Horlogerie",
    price: "€ 12 200",
    tagline: "Or rose, lumière éternelle.",
    description:
      "Boîtier en or rose 18 carats, cadran champagne et bracelet trois maillons. Une élégance solaire, signée Alba.",
    image: watch2,
    details: [
      { label: "Mouvement", value: "Automatique calibre AL-23" },
      { label: "Boîtier", value: "Or rose 18 ct, 36 mm" },
      { label: "Cadran", value: "Champagne satiné" },
      { label: "Bracelet", value: "Or rose, fermoir déployant" },
    ],
  },
  {
    slug: "sac-victoire",
    name: "Sac Victoire",
    category: "Maroquinerie",
    price: "€ 4 950",
    tagline: "Le geste, l'allure, le détail.",
    description:
      "Cuir de veau pleine fleur, finitions or 24 carats. Cousu main par nos artisans selliers à Florence, en édition numérotée.",
    image: bag,
    details: [
      { label: "Matière", value: "Cuir de veau pleine fleur" },
      { label: "Finitions", value: "Métal plaqué or 24 ct" },
      { label: "Origine", value: "Atelier de Florence" },
      { label: "Dimensions", value: "28 × 20 × 12 cm" },
    ],
  },
  {
    slug: "richelieu-saint-honore",
    name: "Richelieu Saint-Honoré",
    category: "Souliers",
    price: "€ 1 280",
    tagline: "L'art du bottier.",
    description:
      "Cuir box noir, montage cousu Goodyear. Forme italienne, semelle cuir vieilli. Confort souverain dès le premier pas.",
    image: shoes,
    details: [
      { label: "Cuir", value: "Box calf noir patiné" },
      { label: "Montage", value: "Cousu Goodyear" },
      { label: "Semelle", value: "Cuir tanné végétal" },
      { label: "Origine", value: "Northampton, Angleterre" },
    ],
  },
  {
    slug: "carre-eden",
    name: "Carré Éden",
    category: "Accessoires",
    price: "€ 480",
    tagline: "La soie, en suspens.",
    description:
      "Carré de soie 90×90 cm, twill main de soie de Lyon. Imprimé d'après une aquarelle de notre atelier création.",
    image: scarf,
    details: [
      { label: "Matière", value: "Soie twill 100%" },
      { label: "Dimensions", value: "90 × 90 cm" },
      { label: "Tissage", value: "Manufacture lyonnaise" },
      { label: "Roulotté", value: "Main, fil de soie" },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
