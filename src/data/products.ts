import materials from "@/assets/materials.jpg";
import after from "@/assets/after-rooftop.jpg";
import climate from "@/assets/climate.jpg";
import green from "@/assets/sol-green.jpg";
import wellness from "@/assets/sol-wellness.jpg";
import work from "@/assets/sol-work.jpg";
import luxury from "@/assets/sol-luxury.jpg";
import hospitality from "@/assets/sol-hospitality.jpg";
import fitness from "@/assets/sol-fitness.jpg";

export type Product = {
  slug: string;
  index: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  applications: string[];
  technical: string;
  image: string;
};

/**
 * Placeholder catalogue framework.
 * Product names, features and technical data are category-level placeholders
 * and are intended to be replaced with verified SKY SPACE product data.
 */
export const products: Product[] = [
  {
    slug: "roof-structures",
    index: "01",
    name: "Roof Structures",
    category: "Structure",
    description:
      "Primary structural systems that establish the frame of a roof-level environment.",
    features: ["Category placeholder", "Configuration to be confirmed", "Finish options pending"],
    applications: ["Terrace rooms", "Roof pavilions", "Covered decks"],
    technical: "Technical information will be published once product data is confirmed.",
    image: after,
  },
  {
    slug: "pergola-systems",
    index: "02",
    name: "Pergola Systems",
    category: "Shade & Structure",
    description: "Structured shade frameworks that make an open terrace usable through the day.",
    features: ["Category placeholder", "Span options pending", "Material options pending"],
    applications: ["Open lounges", "Dining decks", "Hospitality terraces"],
    technical: "Technical information will be published once product data is confirmed.",
    image: hospitality,
  },
  {
    slug: "outdoor-living-elements",
    index: "03",
    name: "Outdoor Living Elements",
    category: "Lifestyle",
    description: "Built and loose elements that give an outdoor room its function and comfort.",
    features: ["Category placeholder", "Range to be confirmed", "Finish options pending"],
    applications: ["Seating zones", "Dining zones", "Fire and gathering areas"],
    technical: "Technical information will be published once product data is confirmed.",
    image: luxury,
  },
  {
    slug: "roof-enclosure-solutions",
    index: "04",
    name: "Roof Enclosure Solutions",
    category: "Envelope",
    description: "Enclosure systems for weather-protected roof rooms and studios.",
    features: ["Category placeholder", "Glazing options pending", "Ventilation detail pending"],
    applications: ["Roof studios", "Fitness enclosures", "Meeting rooms"],
    technical: "Technical information will be published once product data is confirmed.",
    image: work,
  },
  {
    slug: "flooring-surface-solutions",
    index: "05",
    name: "Flooring / Surface Solutions",
    category: "Surfaces",
    description: "Walkable surfaces selected for exposure, drainage and slip performance.",
    features: ["Category placeholder", "Format options pending", "Substrate detail pending"],
    applications: ["Decks", "Walkways", "Play and activity zones"],
    technical: "Technical information will be published once product data is confirmed.",
    image: materials,
  },
  {
    slug: "shading-solutions",
    index: "06",
    name: "Shading Solutions",
    category: "Climate",
    description: "Louvres, screens and canopies that manage sun, glare and heat gain.",
    features: ["Category placeholder", "Louvre profiles pending", "Operation options pending"],
    applications: ["Terraces", "Cafés", "Wellness decks"],
    technical: "Technical information will be published once product data is confirmed.",
    image: climate,
  },
  {
    slug: "landscape-green-roof-elements",
    index: "07",
    name: "Landscape / Green Roof Elements",
    category: "Nature",
    description: "Planting, containment and drainage components for planted roof environments.",
    features: ["Category placeholder", "System build-up pending", "Irrigation detail pending"],
    applications: ["Green roofs", "Terrace gardens", "Urban farming"],
    technical: "Technical information will be published once product data is confirmed.",
    image: green,
  },
  {
    slug: "wellness-elements",
    index: "08",
    name: "Wellness Elements",
    category: "Wellness",
    description: "Water, heat and rest components integrated into roof-level wellness spaces.",
    features: ["Category placeholder", "Unit range pending", "Service requirements pending"],
    applications: ["Spa decks", "Plunge and jacuzzi zones", "Relaxation lounges"],
    technical: "Technical information will be published once product data is confirmed.",
    image: wellness,
  },
  {
    slug: "custom-architectural-components",
    index: "09",
    name: "Custom Architectural Components",
    category: "Bespoke",
    description: "Project-specific elements developed to suit a particular roof and brief.",
    features: ["Category placeholder", "Bespoke to project", "Developed with design team"],
    applications: ["Signature roof spaces", "Brand-specific designs", "Complex conditions"],
    technical: "Technical information will be published once product data is confirmed.",
    image: fitness,
  },
];

export const productCategories = Array.from(new Set(products.map((p) => p.category)));

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
