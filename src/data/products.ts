export interface Product {
  slug: string;
  name: string;
  category: "Category A" | "Category B" | "Category C" | "Category D";
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
    slug: "product-one",
    name: "Product One",
    category: "Category A",
    price: "$ 1,299",
    tagline: "A short, punchy product tagline.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    image: stockImages.heroWatch,
    details: [
      { label: "Feature", value: "Lorem ipsum value" },
      { label: "Material", value: "Sample material" },
      { label: "Dimensions", value: "00 × 00 × 00 cm" },
      { label: "Weight", value: "000 g" },
      { label: "Warranty", value: "2 years" },
      { label: "Origin", value: "Country of origin" },
    ],
  },
  {
    slug: "product-two",
    name: "Product Two",
    category: "Category A",
    price: "$ 1,899",
    tagline: "Another short, punchy tagline.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    image: stockImages.watch2,
    details: [
      { label: "Feature", value: "Lorem ipsum value" },
      { label: "Material", value: "Sample material" },
      { label: "Dimensions", value: "00 × 00 × 00 cm" },
      { label: "Weight", value: "000 g" },
    ],
  },
  {
    slug: "product-three",
    name: "Product Three",
    category: "Category B",
    price: "$ 799",
    tagline: "A short product tagline.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    image: stockImages.bag,
    details: [
      { label: "Feature", value: "Lorem ipsum value" },
      { label: "Material", value: "Sample material" },
      { label: "Dimensions", value: "00 × 00 × 00 cm" },
      { label: "Origin", value: "Country of origin" },
    ],
  },
  {
    slug: "product-four",
    name: "Product Four",
    category: "Category C",
    price: "$ 449",
    tagline: "Tagline goes here.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: stockImages.shoes,
    details: [
      { label: "Feature", value: "Lorem ipsum value" },
      { label: "Material", value: "Sample material" },
      { label: "Sizes", value: "00 – 00" },
      { label: "Origin", value: "Country of origin" },
    ],
  },
  {
    slug: "product-five",
    name: "Product Five",
    category: "Category D",
    price: "$ 199",
    tagline: "Tagline goes here.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: stockImages.scarf,
    details: [
      { label: "Feature", value: "Lorem ipsum value" },
      { label: "Material", value: "Sample material" },
      { label: "Dimensions", value: "00 × 00 cm" },
      { label: "Care", value: "Sample care instruction" },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
