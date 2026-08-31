import fitness from "@/assets/sol-fitness.jpg";
import wellness from "@/assets/sol-wellness.jpg";
import work from "@/assets/sol-work.jpg";
import leisure from "@/assets/sol-leisure.jpg";
import green from "@/assets/sol-green.jpg";
import yoga from "@/assets/sol-yoga.jpg";
import kids from "@/assets/sol-kids.jpg";
import hospitality from "@/assets/sol-hospitality.jpg";
import luxury from "@/assets/sol-luxury.jpg";
import climate from "@/assets/climate.jpg";
import materials from "@/assets/materials.jpg";
import after from "@/assets/after-rooftop.jpg";

export type Solution = {
  slug: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  benefits: string[];
  spaces: string[];
  filters: string[];
  image: string;
};

export const solutionFilters = [
  "Lifestyle",
  "Wellness",
  "Work",
  "Family",
  "Outdoor",
  "Commercial",
  "Nature",
  "Sports",
  "Creative",
  "Healthcare",
  "Sustainability",
  "Revenue",
];

export const solutions: Solution[] = [
  {
    slug: "fitness-activity-spaces",
    number: "01",
    title: "Fitness & Activity Spaces",
    headline: "Where Strength Meets The Sky",
    description:
      "Designed to energise both body and mind, rooftop fitness spaces create powerful environments for movement, discipline and personal growth. Elevated away from everyday distractions, these spaces use natural light, fresh air and openness while maintaining structural and environmental responsibility.",
    benefits: [
      "Inspires consistent fitness and healthy habits",
      "Enhances physical strength and mental clarity",
      "Creates a private and motivating workout environment",
      "Adds premium lifestyle value to the property",
    ],
    spaces: [
      "Gym",
      "Fitness Studio",
      "Yoga Centre",
      "Meditation Hall",
      "Dance / Aerobics Studio",
      "Jogging & Activity Track",
    ],
    filters: ["Wellness", "Sports", "Lifestyle"],
    image: fitness,
  },
  {
    slug: "wellness-relaxation-spaces",
    number: "02",
    title: "Wellness & Relaxation Spaces",
    headline: "Architecture That Heals",
    description:
      "Wellness spaces are sanctuaries where silence, comfort and sensory balance restore the body and mind.",
    benefits: [
      "Relieves stress and mental fatigue",
      "Enhances emotional and physical well-being",
      "Creates a luxury wellness experience",
      "Elevates residential and hospitality value",
    ],
    spaces: [
      "Spa",
      "Therapy Rooms",
      "Jacuzzi Deck",
      "Steam & Sauna",
      "Relaxation Lounge",
      "Healing Garden",
    ],
    filters: ["Wellness", "Lifestyle"],
    image: wellness,
  },
  {
    slug: "work-learning-spaces",
    number: "03",
    title: "Work & Learning Spaces",
    headline: "Clarity, Focus & Inspiration Elevated",
    description:
      "Rooftop work and learning environments create calm, focused spaces for productivity, creativity and intellectual growth.",
    benefits: [
      "Improves productivity and concentration",
      "Encourages creativity and learning",
      "Supports modern work-from-home lifestyles",
      "Adds professional functional space",
    ],
    spaces: [
      "Study Room",
      "Home Office",
      "Work-from-Roof Studio",
      "Library",
      "Reading Lounge",
      "Creative Studio",
      "Co-working Lounge",
    ],
    filters: ["Work", "Lifestyle"],
    image: work,
  },
  {
    slug: "leisure-social-spaces",
    number: "04",
    title: "Leisure & Social Spaces",
    headline: "Spaces That Bring People Together",
    description:
      "Rooftop leisure environments are designed for gathering — generous, comfortable and considered settings where people relax, celebrate and connect above the everyday.",
    benefits: [
      "Encourages social interaction",
      "Enhances lifestyle and entertainment value",
      "Ideal for gatherings and celebrations",
      "Creates memorable experiences",
    ],
    spaces: ["Rooftop Lounge", "Entertainment Room", "Party Deck", "Bar & Seating Area"],
    filters: ["Lifestyle", "Outdoor"],
    image: leisure,
  },
  {
    slug: "family-lifestyle-spaces",
    number: "05",
    title: "Family & Lifestyle Spaces",
    headline: "Designed For Everyday Life",
    description:
      "Adaptable roof environments that give a household more room to live — for play, hobbies and shared time across every age group.",
    benefits: [
      "Strengthens family connection",
      "Safe and adaptable for different age groups",
      "Reduces indoor congestion",
      "Adds meaningful living space",
    ],
    spaces: ["Kids Play Area", "Indoor Games Room", "Hobby Room", "Multipurpose Family Space"],
    filters: ["Family", "Lifestyle"],
    image: kids,
  },
  {
    slug: "outdoor-living-spaces",
    number: "06",
    title: "Outdoor Living Spaces",
    headline: "Open-Sky Living, Perfectly Designed",
    description:
      "Sheltered and open zones that extend the home outward — shaded, comfortable and made for daily use in real climatic conditions.",
    benefits: [
      "Enhances connection with nature",
      "Improves everyday living",
      "Ideal for relaxation and entertainment",
      "Adds premium outdoor lifestyle value",
    ],
    spaces: ["Pergola", "Gazebo", "Open Seating", "Deck", "BBQ & Dining Zone", "Viewing Deck"],
    filters: ["Outdoor", "Lifestyle"],
    image: after,
  },
  {
    slug: "hospitality-commercial-spaces",
    number: "07",
    title: "Hospitality & Commercial Spaces",
    headline: "Design That Attracts. Experiences That Last.",
    description:
      "Roof levels reimagined as commercial assets — atmospheric, operationally practical and built around the guest experience.",
    benefits: [
      "Generates additional revenue",
      "Strengthens brand identity",
      "Increases footfall and engagement",
      "Enhances commercial property value",
    ],
    spaces: [
      "Rooftop Café",
      "Rooftop Restaurant",
      "Boutique Event Space",
      "Wellness Studio",
      "Co-working Roof Lounge",
    ],
    filters: ["Commercial", "Revenue"],
    image: hospitality,
  },
  {
    slug: "green-nature-based-spaces",
    number: "08",
    title: "Green & Nature-Based Spaces",
    headline: "Living Architecture Above The City",
    description:
      "Planted roof environments that soften the built surface and bring measurable environmental and experiential benefit to a building.",
    benefits: [
      "Helps reduce heat and energy demand",
      "Improves air quality",
      "Enhances mental well-being",
      "Supports sustainable design goals",
    ],
    spaces: ["Terrace Garden", "Green Roof", "Lawn Area", "Urban Farming", "Meditation Garden"],
    filters: ["Nature", "Sustainability"],
    image: green,
  },
  {
    slug: "utility-support-spaces",
    number: "09",
    title: "Utility & Support Spaces",
    headline: "Efficiency Without Visual Compromise",
    description:
      "Service functions organised, screened and integrated so the roof remains clean, usable and architecturally resolved.",
    benefits: [
      "Improves operational efficiency",
      "Maintains clean aesthetics",
      "Maximises usable roof area",
      "Adds hidden functional value",
    ],
    spaces: ["Storage", "Laundry", "Drying Areas", "Service Zones", "Architectural Screening"],
    filters: ["Lifestyle", "Commercial"],
    image: materials,
  },
  {
    slug: "hybrid-bespoke-roof-spaces",
    number: "10",
    title: "Hybrid & Bespoke Roof Spaces",
    headline: "Design Without Boundaries",
    description:
      "Where a single use is not enough. Layered, flexible roof programmes shaped entirely around a client's brief.",
    benefits: [
      "Maximises roof potential",
      "Fully customisable",
      "Creates signature spaces",
      "Future-ready",
    ],
    spaces: [
      "Mixed-use Roof Spaces",
      "Custom Lifestyle Concepts",
      "Brand-specific Designs",
      "Theme-based Designs",
    ],
    filters: ["Lifestyle", "Commercial", "Creative"],
    image: after,
  },
  {
    slug: "luxury-lifestyle-spaces",
    number: "11",
    title: "Luxury Lifestyle Spaces",
    headline: "A Statement Above The Skyline",
    description:
      "Refined roof environments conceived as the signature feature of a property — material-led, atmospheric and enduring.",
    benefits: [
      "Elevates luxury living",
      "Creates iconic property features",
      "Attracts premium buyers",
      "Increases asset value",
    ],
    spaces: [
      "Sky Lounge",
      "Sunset Deck",
      "Open-Air Living Room",
      "Fireplace Lounge",
      "Sky Dining Pavilion",
    ],
    filters: ["Lifestyle", "Outdoor"],
    image: luxury,
  },
  {
    slug: "health-medical-oriented-spaces",
    number: "12",
    title: "Health & Medical-Oriented Spaces",
    headline: "Wellness With Care & Responsibility",
    description:
      "Accessible, calm roof environments designed to support recovery, mobility and senior-oriented use with appropriate safety considerations.",
    benefits: [
      "Supports recovery and mobility",
      "Improves comfort",
      "Suitable for healthcare environments",
      "Enhances care environments",
    ],
    spaces: [
      "Physiotherapy Zone",
      "Rehabilitation Zone",
      "Walking Track",
      "Senior Wellness Area",
      "Healing Garden",
      "Recovery Deck",
    ],
    filters: ["Healthcare", "Wellness"],
    image: wellness,
  },
  {
    slug: "corporate-professional-spaces",
    number: "13",
    title: "Corporate & Professional Spaces",
    headline: "Better Work Begins With Better Space",
    description:
      "Roof levels that give organisations more room to think, meet and recover — without extending the building footprint.",
    benefits: [
      "Improves productivity",
      "Encourages innovation",
      "Enhances employee satisfaction",
      "Utilises unused roof area",
    ],
    spaces: [
      "Executive Breakout Lounge",
      "Meeting Zone",
      "Brainstorming Zone",
      "Corporate Cafeteria Extension",
      "Team Recreation Area",
    ],
    filters: ["Work", "Commercial"],
    image: work,
  },
  {
    slug: "hospitality-experience-based-spaces",
    number: "14",
    title: "Hospitality & Experience-Based Spaces",
    headline: "Rooftops That Become Destinations",
    description:
      "Experience-driven roof programmes designed for atmosphere, occasion and repeat visitation.",
    benefits: [
      "High revenue potential",
      "Strong brand visibility",
      "Premium guest experiences",
      "Memorable destinations",
    ],
    spaces: [
      "Infinity Pool Deck",
      "Open-Air Theatre",
      "Screening Area",
      "Event & Wedding Space",
      "Live Music Deck",
      "Performance Deck",
    ],
    filters: ["Commercial", "Revenue", "Lifestyle"],
    image: leisure,
  },
  {
    slug: "spiritual-cultural-spaces",
    number: "15",
    title: "Spiritual & Cultural Spaces",
    headline: "Silence, Meaning & Reflection",
    description:
      "Quiet, proportioned roof environments shaped around ritual, gathering and stillness.",
    benefits: [
      "Encourages inner peace",
      "Supports traditions and culture",
      "Creates timeless spaces",
      "Enhances emotional well-being",
    ],
    spaces: [
      "Prayer Pavilion",
      "Meditation Pavilion",
      "Spiritual Gathering Hall",
      "Cultural Activity Space",
      "Reflection Zone",
    ],
    filters: ["Wellness", "Creative"],
    image: yoga,
  },
  {
    slug: "sports-recreation-zones",
    number: "16",
    title: "Sports & Recreation Zones",
    headline: "Active Living, Safely Designed",
    description:
      "Compact play and practice zones planned with surfacing, enclosure and safety awareness appropriate to a roof level.",
    benefits: [
      "Promotes active lifestyles",
      "Safe and accessible",
      "Low-maintenance design",
      "Encourages community interaction",
    ],
    spaces: [
      "Badminton Practice Court",
      "Table Tennis",
      "Indoor Sports Deck",
      "Mini Basketball Practice Zone",
      "Rooftop Jogging Track",
    ],
    filters: ["Sports", "Family"],
    image: fitness,
  },
  {
    slug: "creative-artistic-spaces",
    number: "17",
    title: "Creative & Artistic Spaces",
    headline: "Spaces That Inspire Creation",
    description:
      "Daylight-led studios and workshops for making, recording, exhibiting and practising.",
    benefits: [
      "Encourages creativity",
      "Supports focused practice",
      "Suitable for individuals and institutions",
      "Adds cultural value",
    ],
    spaces: [
      "Art Studio",
      "Gallery",
      "Music Practice Room",
      "Recording Room",
      "Photography Studio",
      "Content Studio",
      "Workshop Area",
    ],
    filters: ["Creative", "Work"],
    image: work,
  },
  {
    slug: "children-youth-oriented-spaces",
    number: "18",
    title: "Children & Youth-Oriented Spaces",
    headline: "Designed For Growing Minds",
    description:
      "Protected, stimulating roof environments planned around supervision, safe surfacing and age-appropriate activity.",
    benefits: [
      "Supports cognitive and social development",
      "Encourages curiosity",
      "Safe and supervised design",
      "Ideal for families and schools",
    ],
    spaces: [
      "Learning Play Zone",
      "Activity-Based Learning Area",
      "Indoor Adventure Play",
      "STEM / Robotics Practice Space",
    ],
    filters: ["Family", "Creative"],
    image: kids,
  },
  {
    slug: "sustainable-future-ready-spaces",
    number: "19",
    title: "Sustainable & Future-Ready Spaces",
    headline: "Designed For Tomorrow",
    description:
      "Roof concepts that integrate energy, water and growing systems into a usable architectural environment.",
    benefits: [
      "Supports reduced energy consumption",
      "Supports green design goals",
      "Future-proofs buildings",
      "Enhances long-term value",
    ],
    spaces: [
      "Solar-Integrated Roof Lounge",
      "Rainwater Harvesting Display Deck",
      "Climate-Controlled Greenhouse",
      "Net-Zero Energy Roof Concept",
    ],
    filters: ["Sustainability", "Nature"],
    image: climate,
  },
  {
    slug: "revenue-generating-roof-spaces",
    number: "20",
    title: "Revenue-Generating Roof Spaces",
    headline: "Where Design Meets Return",
    description:
      "Roof areas converted into productive assets with a clear operational and commercial logic.",
    benefits: [
      "Creates recurring revenue opportunities",
      "Improves ROI potential",
      "Attractive to developers",
      "Converts roofs into productive assets",
    ],
    spaces: [
      "Rooftop Café",
      "Cloud Kitchen",
      "Membership Yoga Studio",
      "Fitness Studio",
      "Paid Event Space",
      "Party Space",
      "Rental Lounge",
    ],
    filters: ["Revenue", "Commercial"],
    image: hospitality,
  },
];

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug);

export const featuredSolutions = [
  {
    slug: "fitness-activity-spaces",
    label: "Rooftop Gym",
    copy: "An elevated training environment shaped by daylight, air and discipline.",
    image: fitness,
  },
  {
    slug: "work-learning-spaces",
    label: "Study / Home Office",
    copy: "A quiet, daylight-led room above the noise of the household.",
    image: work,
  },
  {
    slug: "wellness-relaxation-spaces",
    label: "Spa & Wellness",
    copy: "Water, timber and stone composed for restoration.",
    image: wellness,
  },
  {
    slug: "wellness-relaxation-spaces",
    label: "Yoga & Meditation",
    copy: "A sheltered platform for stillness, breath and morning light.",
    image: yoga,
  },
  {
    slug: "family-lifestyle-spaces",
    label: "Kids Play Area",
    copy: "Safe surfacing, shade and enclosure designed for younger users.",
    image: kids,
  },
  {
    slug: "outdoor-living-spaces",
    label: "Pergola & Open Lounge",
    copy: "Structured shade that makes the terrace usable through the day.",
    image: after,
  },
];
