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
  id: "asian-palm-civet",
  name: "Asian Palm Civet",
  scientificName: "Paradoxurus hermaphroditus",
  status: "Least Concern",
  region: "Forests and rural landscapes of Bangladesh",
  habitat: "Forests, orchards, village edges, and mixed tree cover",
  population: "Unknown",
  trend: "Decreasing",
  threat: "Habitat loss, fragmentation & persecution",
  importance:
    "An important nocturnal mammal that helps with seed dispersal and ecosystem balance.",
  image: "/images/asian-palm-civet.jpg",
  description:
    "The Asian Palm Civet is a shy, nocturnal mammal found in forests and mixed landscapes, where it plays a quiet but valuable ecological role.",
  featured: false,

  insight: "/insights/asian-palm-civet-bangladesh",
  insightTitle: "Asian Palm Civet in Bangladesh",
  insightDescription:
    "Explore the habitat, ecological role, threats, and conservation importance of the Asian Palm Civet in Bangladesh.",
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
  id: "indian-leopard",
  name: "Indian Leopard",
  scientificName: "Panthera pardus fusca",
  status: "Vulnerable",
  region: "Chittagong Hill Tracts",
  habitat: "Hill Forests and Dense Woodlands",
  population: "Unknown",
  trend: "Decreasing",
  threat: "Habitat loss, fragmentation & human-leopard conflict",
  importance:
    "A top predator that helps maintain ecological balance in forest ecosystems.",
  image: "/images/indian-leopard.jpg",
  description:
    "The Indian Leopard is a powerful and elusive wild cat that survives in forested landscapes and plays a key role in maintaining biodiversity.",
  featured: false,

  insight: "/insights/indian-leopard-bangladesh",
  insightTitle: "Indian Leopard in Bangladesh",
  insightDescription:
    "Explore the habitat, ecological role, threats, and conservation importance of the Indian Leopard in Bangladesh.",
},
]
