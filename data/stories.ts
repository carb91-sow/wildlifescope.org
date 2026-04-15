export type StorySection = {
  heading: string
  content: string[]
}

export type Story = {
  slug: string
  title: string
  label: string
  excerpt: string
  summary: string
  image: string
  date: string
  readTime: string
  location: string
  author: string
  featured?: boolean
  relatedSlugs?: string[]
  sections: StorySection[]
}

export const stories: Story[] = [
  {
    slug: "radio-telemetry-bengal-slow-loris",
    title: "Radio telemetry monitoring of Bengal Slow Loris",
    label: "Field Research",
    excerpt:
      "Following nocturnal movement through forest habitats to better understand ecology, behavior, and habitat use in one of Bangladesh’s lesser-known primates.",
    summary:
      "Field-based radio telemetry work in Sreemangal helped support movement ecology research, habitat-use understanding, and long-term conservation planning for Bengal Slow Loris.",
    image: "/images/conservation-hero.jpg",
    date: "May 2025",
    readTime: "5 min read",
    location: "Sreemangal, Bangladesh",
    author: "Md. Rahenur Islam Sourov",
    featured: true,
    relatedSlugs: [
      "camera-trap-surveys-forest-habitats",
      "community-response-wildlife-rescue-awareness",
    ],
    sections: [
      {
        heading: "Background",
        content: [
          "The Bengal Slow Loris is one of the lesser-known nocturnal primates of Bangladesh, yet its ecology and habitat use are critically important for effective conservation planning.",
          "Field-based radio telemetry creates opportunities to follow animal movement, understand habitat preference, and build evidence that supports stronger species protection.",
        ],
      },
      {
        heading: "Field Context",
        content: [
          "This work took place in the forest landscapes of Sreemangal, where dense vegetation, variable terrain, and nocturnal conditions shaped the pace and difficulty of monitoring.",
          "Tracking at night required patience, repeated observation, and consistent movement through forest trails and edge habitats.",
        ],
      },
      {
        heading: "Methods and Monitoring",
        content: [
          "Radio telemetry was used to support the monitoring of movement patterns and habitat use. Field observations were paired with ecological note-taking, landscape awareness, and location-based interpretation.",
          "This process helped connect individual movements with broader ecological questions related to space use, behavior, and conservation planning.",
        ],
      },
      {
        heading: "Why It Matters",
        content: [
          "Understanding where a species moves, rests, and forages is essential for identifying habitat priorities and long-term conservation needs.",
          "Research like this helps translate fieldwork into practical knowledge that can guide protection strategies for vulnerable wildlife populations.",
        ],
      },
    ],
  },
  {
    slug: "camera-trap-surveys-forest-habitats",
    title: "Camera trap surveys across forest habitats",
    label: "Biodiversity Monitoring",
    excerpt:
      "Using camera trap networks to strengthen biodiversity documentation, monitor species presence, and support long-term ecological observation.",
    summary:
      "Camera trap implementation across forest habitats supported biodiversity documentation, ecological monitoring, and stronger conservation understanding.",
    image: "/images/habitat-restoration.jpg",
    date: "April 2025",
    readTime: "4 min read",
    location: "Forest Landscapes, Bangladesh",
    author: "Md. Rahenur Islam Sourov",
    relatedSlugs: [
      "radio-telemetry-bengal-slow-loris",
      "gis-spatial-ecology-wildlife-research",
    ],
    sections: [
      {
        heading: "Overview",
        content: [
          "Camera trapping provides a non-invasive way to document species presence and activity across landscapes that are difficult to observe continuously.",
          "It is one of the most effective tools for building long-term ecological records in forest environments.",
        ],
      },
      {
        heading: "Field Implementation",
        content: [
          "Survey work included placement planning, camera deployment, logistical coordination, and repeated monitoring across multiple sites.",
          "The process required balancing field practicality with ecological reasoning to maximize the value of each survey station.",
        ],
      },
      {
        heading: "Conservation Value",
        content: [
          "Camera trap records strengthen biodiversity documentation and help reveal patterns that may otherwise remain hidden.",
          "This supports future planning, research communication, and broader understanding of forest wildlife communities.",
        ],
      },
    ],
  },
  {
    slug: "community-response-wildlife-rescue-awareness",
    title: "Community response and wildlife rescue awareness",
    label: "Human–Wildlife Conflict",
    excerpt:
      "Exploring how awareness, rapid response, and local engagement can reduce conflict and build stronger support for wildlife protection.",
    summary:
      "Awareness activities and community response efforts helped improve understanding of wildlife conservation and reduce conflict pressures.",
    image: "/images/team.jpg",
    date: "March 2025",
    readTime: "4 min read",
    location: "Bangladesh",
    author: "Md. Rahenur Islam Sourov",
    relatedSlugs: ["conservation-awareness-public-engagement"],
    sections: [
      {
        heading: "Human and Wildlife in Shared Landscapes",
        content: [
          "Conservation is not only about species in remote habitats. It also involves the everyday realities of people and wildlife sharing space.",
          "Where misunderstanding or fear exists, conflict can grow quickly.",
        ],
      },
      {
        heading: "Awareness and Response",
        content: [
          "Community engagement, rescue awareness, and response support can help reduce tension while promoting safer outcomes for both people and wildlife.",
          "These actions are especially important in places where conservation depends on public trust and local participation.",
        ],
      },
      {
        heading: "Why Community Matters",
        content: [
          "Long-term conservation becomes stronger when people are included as informed participants rather than distant observers.",
          "Awareness work helps connect ecological protection with daily human experience.",
        ],
      },
    ],
  },
  {
    slug: "pittachhara-forest-biodiversity-conservation",
    title: "Pittachhara forest and biodiversity conservation work",
    label: "Landscape Conservation",
    excerpt:
      "Field coordination, ecological documentation, and long-term conservation planning in a landscape shaped by biodiversity richness and environmental pressure.",
    summary:
      "Conservation work in Pittachhara supported ecological documentation, field coordination, and landscape-focused biodiversity protection.",
    image: "/images/education.jpg",
    date: "February 2025",
    readTime: "5 min read",
    location: "Pittachhara, Bangladesh",
    author: "Md. Rahenur Islam Sourov",
    relatedSlugs: ["camera-trap-surveys-forest-habitats"],
    sections: [
      {
        heading: "Landscape Perspective",
        content: [
          "Forest conservation requires looking beyond single species and considering the ecological integrity of the wider landscape.",
          "Pittachhara represents the importance of place-based biodiversity protection rooted in long-term observation and coordination.",
        ],
      },
      {
        heading: "Field Coordination",
        content: [
          "This work involved practical support for ecological documentation, logistics, and conservation-focused field organization.",
          "Such coordination often makes the difference between isolated effort and meaningful long-term impact.",
        ],
      },
    ],
  },
  {
    slug: "gis-spatial-ecology-wildlife-research",
    title: "GIS and spatial ecology for wildlife research",
    label: "Ecological Analysis",
    excerpt:
      "How spatial tools like R, QGIS, and ArcGIS help turn raw ecological observations into stronger habitat understanding and conservation insight.",
    summary:
      "Spatial ecology tools supported habitat assessment, home range interpretation, and stronger ecological understanding for conservation research.",
    image: "/images/marine-conservation.jpg",
    date: "January 2025",
    readTime: "6 min read",
    location: "Bangladesh",
    author: "Md. Rahenur Islam Sourov",
    relatedSlugs: ["radio-telemetry-bengal-slow-loris"],
    sections: [
      {
        heading: "From Data to Insight",
        content: [
          "Field observations become far more valuable when they are organized and interpreted through spatial tools.",
          "GIS and ecological analysis help connect movement, habitat, and landscape structure in ways that strengthen conservation decisions.",
        ],
      },
      {
        heading: "Tools and Workflow",
        content: [
          "R, QGIS, and ArcGIS can support habitat-use analysis, mapping, and broader ecological interpretation.",
          "These tools make it possible to move from raw field records toward clearer research communication and conservation planning.",
        ],
      },
    ],
  },
  {
    slug: "conservation-awareness-public-engagement",
    title: "Conservation awareness through public engagement",
    label: "Education & Outreach",
    excerpt:
      "Connecting people with species, habitats, and environmental responsibility through public awareness and long-term conservation communication.",
    summary:
      "Public engagement helps build a stronger conservation culture by linking ecological understanding with awareness and responsibility.",
    image: "/images/habitat-restoration.jpg",
    date: "December 2024",
    readTime: "4 min read",
    location: "Bangladesh",
    author: "Md. Rahenur Islam Sourov",
    relatedSlugs: ["community-response-wildlife-rescue-awareness"],
    sections: [
      {
        heading: "Why Awareness Matters",
        content: [
          "Conservation knowledge is most powerful when it reaches people clearly and meaningfully.",
          "Awareness work creates connections between species protection, ecosystems, and everyday public understanding.",
        ],
      },
      {
        heading: "Building Long-Term Support",
        content: [
          "Public engagement is not a side activity. It is part of long-term conservation itself.",
          "When people understand why wildlife matters, support for biodiversity protection becomes stronger and more durable.",
        ],
      },
    ],
  },
]

export function getStoryBySlug(slug: string) {
  return stories.find((story) => story.slug === slug)
}

export function getRelatedStories(slugs: string[] = []) {
  return stories.filter((story) => slugs.includes(story.slug))
}

export function getFeaturedStory() {
  return stories.find((story) => story.featured) ?? stories[0]
}
