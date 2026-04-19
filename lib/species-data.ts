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
      "The iconic tiger of the Sundarbans mangrove forest.",
    featured: true,
    insight: "/insights/tiger-role-ecosystem-sundarbans",
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
    importance: "Rare forest predator",
    image: "/images/clouded-leopard.jpg",
    description:
      "A secretive forest cat.",
    featured: true,
    insight: "/insights/clouded-leopard-bangladesh",
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
    importance: "Wetland predator",
    image: "/images/fishing-cat.jpg",
    description:
      "A wild cat adapted to wetland hunting.",
    featured: true,
    insight: "/insights/fishing-cat-threats",
  },
]
