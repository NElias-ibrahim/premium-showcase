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

// Stock photography from Unsplash (free to use, no attribution required)
export const stockImages = {
  heroWatch: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1920&q=80",
  watch2: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=1200&q=80",
  bag: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80",
  shoes: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1200&q=80",
  scarf: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=1200&q=80",
  craftHands: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1920&q=80",
  boutique: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80",
};

export const products: Product[] = [
  {
    slug: "alba-meridien",
    name: "Alba Méridien",
    category: "Horlogerie",
    price: "€ 8 400",
    tagline: "L'heure, à sa juste mesure.",
    description:
      "Mouvement automatique manufacture, cadran bleu nuit soleillé, boîtier acier 39mm. Une pièce intemporelle, héritière d'un siècle de précision.",
    image: stockImages.heroWatch,
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
    image: stockImages.watch2,
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
    image: stockImages.bag,
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
    image: stockImages.shoes,
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
    image: stockImages.scarf,
    details: [
      { label: "Matière", value: "Soie twill 100%" },
      { label: "Dimensions", value: "90 × 90 cm" },
      { label: "Tissage", value: "Manufacture lyonnaise" },
      { label: "Roulotté", value: "Main, fil de soie" },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
