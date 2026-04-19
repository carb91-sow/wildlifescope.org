export type Species = {
  id: string
  name: string
  scientificName: string
  status: string
  region: string
  habitat: string
  population: string
  trend: string
  threat: string
  importance: string
  image: string
  description: string
  featured?: boolean

  insight?: string
  insightTitle?: string
  insightDescription?: string
}

export const species: Species[] = [
  {
    id: "bengal-tiger",
    name: "Royal Bengal Tiger",
    scientificName: "Panthera tigris tigris",
    status: "Endangered",
    region: "Sundarbans, Bangladesh",
    habitat: "Mangrove Forest",
    population: "~114",
    trend: "Decreasing",
    threat: "Habitat loss & human-wildlife conflict",
    importance: "Top predator maintaining ecosystem balance",
    image: "/images/bengal-tiger.jpg",
    description:
      "The iconic tiger of the Sundarbans mangrove forest, adapted to swimming and hunting in tidal waterways.",
    featured: true,

    insight: "/insights/tiger-role-ecosystem-sundarbans",
    insightTitle:
      "How Bengal Tigers Maintain Ecosystem Balance in the Sundarbans",
    insightDescription:
      "Explore how Bengal tigers regulate prey populations, reduce overgrazing, and support mangrove ecosystem stability.",
  },

  {
    id: "clouded-leopard",
    name: "Clouded Leopard",
    scientificName: "Neofelis nebulosa",
    status: "Vulnerable",
    region: "Chittagong Hill Tracts",
    habitat: "Tropical Forest",
    population: "Unknown",
    trend: "Unknown",
    threat: "Forest loss & habitat fragmentation",
    importance:
      "A rare forest predator representing the richness of Bangladesh's wild forests.",
    image: "/images/clouded-leopard.jpg",
    description:
      "A secretive forest cat with distinctive cloud-shaped markings, rarely seen in Bangladesh's forests.",
    featured: true,

    insight: "/insights/clouded-leopard-bangladesh",
    insightTitle: "Clouded Leopard in Bangladesh",
    insightDescription:
      "Discover habitat, threats, and conservation efforts for the Clouded Leopard in Bangladesh.",
  },

  {
    id: "fishing-cat",
    name: "Fishing Cat",
    scientificName: "Prionailurus viverrinus",
    status: "Vulnerable",
    region: "Bangladesh Wetlands",
    habitat: "Wetlands",
    population: "Unknown",
    trend: "Unknown",
    threat: "Wetland destruction & pollution",
    importance:
      "A unique wetland predator important for ecological balance.",
    image: "/images/fishing-cat.jpg",
    description:
      "A medium-sized wild cat uniquely adapted to wetland habitats, skilled at catching fish.",
    featured: true,

    insight: "/insights/fishing-cat-threats",
    insightTitle: "Bangladesh’s Fishing Cat: A Wetland Species Under Threat",
    insightDescription:
      "Discover how habitat loss, human conflict, illegal captivity, and pollution are pushing Bangladesh’s fishing cat toward decline.",
  },

  {
    id: "marbled-cat",
    name: "Marbled Cat",
    scientificName: "Pardofelis marmorata",
    status: "Near Threatened",
    region: "Chittagong Hill Tracts",
    habitat: "Tropical Forest",
    population: "Unknown",
    trend: "Decreasing",
    threat: "Deforestation & habitat fragmentation",
    importance:
      "A rare forest cat that reflects the health of Bangladesh’s remaining hill forests.",
    image: "/images/marbled-cat.jpg",
    description:
      "The marbled cat is a small and elusive wild feline of dense forests, known for its striking cloud-like coat patterns and strong climbing ability.",
    featured: false,

    insight: "/insights/marbled-cat-bangladesh",
    insightTitle: "Marbled Cat in Bangladesh: A Rare Forest Hunter at Risk",
    insightDescription:
      "Learn about the marbled cat’s habitat, ecological role, and the growing threats from forest loss and fragmentation in Bangladesh.",
  },

  {
    id: "ganges-dolphin",
    name: "Ganges River Dolphin",
    scientificName: "Platanista gangetica",
    status: "Endangered",
    region: "Bangladesh Rivers",
    habitat: "Freshwater Rivers",
    population: "~1,200-1,800",
    trend: "Decreasing",
    threat: "River pollution & fishing net entanglement",
    importance:
      "An indicator species for the health of freshwater ecosystems.",
    image: "/images/ganges-dolphin.jpg",
    description:
      "A freshwater dolphin found in the Ganges-Brahmaputra river system, nearly blind and using echolocation.",
  },

  {
    id: "asian-elephant",
    name: "Asian Elephant",
    scientificName: "Elephas maximus",
    status: "Endangered",
    region: "Chittagong Hill Tracts",
    habitat: "Hill Forests",
    population: "~268",
    trend: "Decreasing",
    threat: "Habitat fragmentation & human-elephant conflict",
    importance:
      "A keystone species that shapes and supports forest ecosystems.",
    image: "/images/asian-elephant.jpg",
    description:
      "Bangladesh's largest land mammal, facing habitat fragmentation and human-elephant conflict.",
  },

  {
    id: "saltwater-crocodile",
    name: "Saltwater Crocodile",
    scientificName: "Crocodylus porosus",
    status: "Critically Endangered",
    region: "Sundarbans, Bangladesh",
    habitat: "Estuarine Waters",
    population: "~150-200",
    trend: "Decreasing",
    threat: "Habitat disturbance & nesting site loss",
    importance:
      "Helps maintain balance in coastal and estuarine food chains.",
    image: "/images/saltwater-crocodile.jpg",
    description:
      "The world's largest living reptile, found in the estuarine waters of the Sundarbans.",
  },

  {
    id: "hoolock-gibbon",
    name: "Western Hoolock Gibbon",
    scientificName: "Hoolock hoolock",
    status: "Endangered",
    region: "Sylhet Division",
    habitat: "Evergreen Forest",
    population: "~200-300",
    trend: "Decreasing",
    threat: "Deforestation & forest fragmentation",
    importance:
      "Bangladesh's only ape, vital for forest biodiversity awareness.",
    image: "/images/hoolock-gibbon.jpg",
    description:
      "Bangladesh's only ape species, known for their loud morning calls and acrobatic movement.",
  },

  {
  id: "asian-golden-cat",
  name: "Asian Golden Cat",
  scientificName: "Catopuma temminckii",
  status: "Near Threatened",
  region: "Chittagong Hill Tracts",
  habitat: "Tropical and Hill Forests",
  population: "Unknown",
  trend: "Decreasing",
  threat: "Deforestation, habitat fragmentation & hunting",
  importance:
    "A rare forest predator that reflects the health of Bangladesh’s remaining hill forests.",
  image: "/images/asian-golden-cat.jpg",
  description:
    "The Asian Golden Cat is a rare and powerful wild feline of forest ecosystems, known for its striking coat and elusive behavior.",
  featured: false,

  insight: "/insights/asian-golden-cat-bangladesh",
  insightTitle: "Asian Golden Cat in Bangladesh",
  insightDescription:
    "Explore the habitat, threats, and conservation importance of the Asian Golden Cat in Bangladesh.",
},

  {
    id: "gharial",
    name: "Gharial",
    scientificName: "Gavialis gangeticus",
    status: "Critically Endangered",
    region: "Bangladesh Rivers",
    habitat: "Large River Systems",
    population: "~100",
    trend: "Decreasing",
    threat: "River degradation & loss of nesting habitat",
    importance:
      "A rare river reptile that reflects the health of aquatic ecosystems.",
    image: "/images/gharial.jpg",
    description:
      "A fish-eating crocodilian with a distinctive long, narrow snout, critically endangered in Bangladesh.",
  },
]
