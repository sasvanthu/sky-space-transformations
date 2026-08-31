import before from "@/assets/before-rooftop.jpg";
import after from "@/assets/after-rooftop.jpg";
import fitness from "@/assets/sol-fitness.jpg";
import wellness from "@/assets/sol-wellness.jpg";
import work from "@/assets/sol-work.jpg";
import green from "@/assets/sol-green.jpg";
import hospitality from "@/assets/sol-hospitality.jpg";
import luxury from "@/assets/sol-luxury.jpg";

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  type: string;
  location: string;
  summary: string;
  image: string;
  before: string;
  after: string;
  gallery: string[];
  startingPoint: string;
  vision: string;
  transformation: string;
  result: string;
  considerations: string[];
};

export const projectFilters = [
  "Residential",
  "Commercial",
  "Hospitality",
  "Corporate",
  "Wellness",
  "Outdoor",
  "Custom",
];

const baseConsiderations = [
  "Structural coordination and load distribution",
  "Waterproofing and drainage continuity",
  "Access, circulation and safety edges",
  "Shade, ventilation and daylight control",
  "Material durability under exposure",
];

export const projects: Project[] = [
  {
    slug: "terrace-residence-concept",
    index: "01",
    title: "Terrace Residence Concept",
    category: "Residential",
    type: "Private terrace conversion",
    location: "Location placeholder",
    summary:
      "An unused private terrace reconsidered as an open-sky living room with structured shade and planted edges.",
    image: after,
    before,
    after,
    gallery: [after, green, luxury],
    startingPoint:
      "A bare concrete terrace used only for services — exposed to full sun, without shade, drainage clarity or usable circulation.",
    vision:
      "To extend the home upward: a sheltered lounge, a dining edge and a planted threshold that make the terrace part of daily life.",
    transformation:
      "A slatted pergola establishes the primary shade structure. Levels are resolved to protect the waterproofing layer, and planters define the perimeter without loading the parapet.",
    result:
      "A calm outdoor room used through the day, adding functional and experiential value to the property.",
    considerations: baseConsiderations,
  },
  {
    slug: "sky-wellness-deck-concept",
    index: "02",
    title: "Sky Wellness Deck Concept",
    category: "Wellness",
    type: "Wellness and relaxation deck",
    location: "Location placeholder",
    summary:
      "A restorative roof deck combining water, timber and screening for privacy above a dense urban context.",
    image: wellness,
    before,
    after: wellness,
    gallery: [wellness, green, after],
    startingPoint:
      "An open roof slab overlooked on three sides, with no privacy and heavy afternoon heat gain.",
    vision: "A sanctuary sequence: arrival, screening, water, rest.",
    transformation:
      "Vertical timber screening controls sightlines while allowing airflow. Surfaces are layered for slip resistance and thermal comfort.",
    result: "A private wellness environment used year-round in comfort.",
    considerations: baseConsiderations,
  },
  {
    slug: "rooftop-studio-concept",
    index: "03",
    title: "Rooftop Studio Concept",
    category: "Corporate",
    type: "Work and learning pavilion",
    location: "Location placeholder",
    summary:
      "A daylight-led pavilion for focused work, positioned to capture north light and cross-ventilation.",
    image: work,
    before,
    after: work,
    gallery: [work, after, green],
    startingPoint: "A flat roof with unused area adjacent to a stair core.",
    vision: "A quiet, glazed studio room that borrows the sky rather than blocking it.",
    transformation:
      "A light enclosure is coordinated with the existing structural grid; openings are placed for daylight without glare.",
    result: "An additional professional workspace created without extending the footprint.",
    considerations: baseConsiderations,
  },
  {
    slug: "roof-cafe-concept",
    index: "04",
    title: "Roof Café Concept",
    category: "Hospitality",
    type: "Hospitality terrace",
    location: "Location placeholder",
    summary:
      "A commercial rooftop terrace designed around service flow, shade and a strong arrival moment.",
    image: hospitality,
    before,
    after: hospitality,
    gallery: [hospitality, luxury, after],
    startingPoint: "An unused roof above an existing ground-floor operation.",
    vision: "A destination terrace with its own identity and operational independence.",
    transformation:
      "A pergola run organises seating zones; service, storage and circulation are screened into the architecture.",
    result: "A distinct hospitality environment with clear revenue potential.",
    considerations: baseConsiderations,
  },
  {
    slug: "green-roof-concept",
    index: "05",
    title: "Green Roof Concept",
    category: "Outdoor",
    type: "Planted roof landscape",
    location: "Location placeholder",
    summary:
      "A planted roof landscape that softens the building envelope and creates a walkable garden route.",
    image: green,
    before,
    after: green,
    gallery: [green, after, wellness],
    startingPoint: "A large exposed roof surface with high heat absorption.",
    vision: "A garden walk rather than a garden object.",
    transformation:
      "Lightweight planting systems, gravel drainage margins and a defined path resolve maintenance access.",
    result: "A green amenity that improves both microclimate and daily experience.",
    considerations: baseConsiderations,
  },
  {
    slug: "elevated-fitness-concept",
    index: "06",
    title: "Elevated Fitness Concept",
    category: "Custom",
    type: "Roof-level fitness enclosure",
    location: "Location placeholder",
    summary:
      "A glazed training enclosure planned around equipment loading, ventilation and skyline outlook.",
    image: fitness,
    before,
    after: fitness,
    gallery: [fitness, work, luxury],
    startingPoint: "A roof area used for storage with an unresolved edge condition.",
    vision: "A training room that feels open while remaining weather-protected.",
    transformation:
      "Equipment zones are set out against the structural grid; the envelope is detailed for ventilation and daylight.",
    result: "A private amenity that changes how the building is used every morning.",
    considerations: baseConsiderations,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
