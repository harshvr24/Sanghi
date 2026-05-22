export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features?: string[];
  specs?: Record<string, string>;
  image?: string;
  basePrice?: string;
}

export const categories = [
  "Ductile Iron Pipes",
  "Cast Iron Pipes",
  "DI Fittings",
  "CI Fittings",
  "Valves",
  "Others"
];

export const products: Product[] = [
  // Ductile Iron Pipes
  {
    id: "di-spun-pipe-k9",
    name: "K9 DI Spun Pipe",
    category: "Ductile Iron Pipes",
    description: "High-strength centrifugally cast ductile iron pipe with K9 pressure rating, ideal for water transmission.",
    specs: {
      "Pressure Class": "K9",
      "Standard": "IS:8329",
      "Joint Type": "Tyton / Push-on"
    },
    basePrice: "1000"
  },
  {
    id: "di-double-flanged-pipe",
    name: "Ductile Iron Double Flanged Pipe",
    category: "Ductile Iron Pipes",
    description: "Precision-engineered double flanged DI pipes for vertical installations and pump house applications.",
    specs: {
      "Type": "Welded / Screwed Flanges",
      "Standard": "IS:8329 / IS:9523",
      "Pressure Class": "K9"
    },
    basePrice: "1250"
  },
  // Cast Iron Pipes
  {
    id: "ci-la-pipe",
    name: "CI LA Pipe",
    category: "Cast Iron Pipes",
    description: "Traditional centrifugally cast iron pipes for sewage and water supply lines.",
    specs: {
      "Class": "LA",
      "Standard": "IS:1536",
      "Material": "Cast Iron"
    },
    basePrice: "1800"
  },
  // DI Fittings
  {
    id: "di-flange-tee",
    name: "DI Flange Tee",
    category: "DI Fittings",
    description: "All flanged tee for ductile iron piping systems, ensuring leak-proof connections.",
    specs: {
      "Standard": "IS:9523",
      "Coating": "Bitumen / Epoxy"
    },
    basePrice: "2210"
  },
  {
    id: "di-mj-collar",
    name: "DI MJ Collar",
    category: "DI Fittings",
    description: "Mechanical joint collar for connecting spigot ends of ductile iron pipes.",
    specs: {
      "Type": "Mechanical Joint",
      "Standard": "IS:9523"
    }
  },
  // CI Fittings
  {
    id: "ci-df-pipe-fitting",
    name: "CI Double Flanged Fitting",
    category: "CI Fittings",
    description: "Cast iron flanged fittings for water and industrial applications.",
    specs: {
      "Material": "Cast Iron",
      "Standard": "IS:1538"
    }
  },
  // Valves
  {
    id: "di-sluice-valve",
    name: "Ductile Iron Sluice Valve",
    category: "Valves",
    description: "Resilient seated gate valve for isolation in water supply networks.",
    specs: {
      "Type": "Non-Rising Stem",
      "Rating": "PN10 / PN16",
      "Standard": "IS:14846"
    },
    basePrice: "4500"
  },
  {
    id: "non-return-valve",
    name: "Non Return Valve",
    category: "Valves",
    description: "Check valve designed to prevent backflow in piping systems.",
    specs: {
      "Type": "Swing Check",
      "Standard": "IS:5312"
    }
  },
  // Others
  {
    id: "hdpe-round-pipe",
    name: "HDPE Round Pipe",
    category: "Others",
    description: "High-density polyethylene pipes for portable water supply and industrial use.",
    specs: {
      "Material": "PE-100",
      "Standard": "IS:4984"
    }
  },
  {
    id: "tmt-bar",
    name: "Iron TMT Bar",
    category: "Others",
    description: "High-strength reinforcement bars for construction and structural stability.",
    specs: {
      "Grade": "Fe 500 / 550",
      "Diameter": "8mm - 32mm"
    }
  }
];
