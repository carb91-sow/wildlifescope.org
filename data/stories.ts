export type StorySection = {
  heading: string
  content: string[]
  image?: string
  imageCaption?: string
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
      "gis-spatial-ecology-wildlife-research",
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
    relatedSlugs: [
      "conservation-awareness-public-engagement",
      "pittachhara-red-junglefowl-rescue",
    ],
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
    slug: "pittachhara-red-junglefowl-rescue",
    title: "Protecting Pittachhara Forest: A Wildlife Rescue in Bangladesh and the Fight Against Poaching",
    label: "Wildlife Rescue",
    excerpt:
      "A field rescue of a Red Junglefowl in Pittachhara Forest reveals how small-scale poaching threatens biodiversity in Bangladesh and why rapid response matters.",
    summary:
      "On January 27, 2024, a field intervention in Pittachhara Forest led to the rescue, treatment, and release of a Red Junglefowl captured by a poacher, highlighting the urgency of wildlife protection in Bangladesh.",
    image: "/images/pittachhara-rescue.jpg",
    date: "January 27, 2024",
    readTime: "6 min read",
    location: "Pittachhara Forest, Bangladesh",
    author: "Md. Rahenur Islam Sourov",
    relatedSlugs: [
      "community-response-wildlife-rescue-awareness",
      "pittachhara-forest-biodiversity-conservation",
    ],
    sections: [
      {
        heading: "A Rescue in Real Time",
        content: [
          "A wildlife rescue in Bangladesh is not just about saving one animal. It is about protecting an entire ecosystem under pressure.",
          "On January 27, 2024, in the biodiverse Pittachhara Forest, I led a field operation to rescue a Red Junglefowl captured by a poacher for consumption. What followed was a reminder that conservation is not theory. It is immediate, physical, and often urgent.",
        ],
        image: "/images/pittachhara-rescue.jpg",
        imageCaption:
          "Field rescue operation after intercepting a Red Junglefowl captured by a poacher in Pittachhara Forest.",
      },
      {
        heading: "What Happened",
        content: [
          "A local poacher had captured a female Red Junglefowl with the intent to sell or consume it. Acting on field intelligence, we intervened before the bird could enter the illegal wildlife chain.",
          "The rescue operation involved locating and intercepting the bird, safely securing it from the poacher, assessing visible injuries caused during capture, providing immediate first aid, and releasing the bird back into Pittachhara Forest after stabilization.",
          "This kind of rapid-response wildlife rescue is critical in regions where small-scale poaching often goes undocumented.",
        ],
      },
      {
        heading: "The Condition of the Bird",
        content: [
          "The bird had visible injuries caused during capture. Immediate intervention was necessary to prevent further stress and possible death.",
          "We carefully handled the individual, cleaned the wound, and applied basic first aid in the field before preparing it for release.",
        ],
        image: "/images/pittachhara-treatment.jpg",
        imageCaption:
          "Providing first aid to the injured Red Junglefowl during the rescue operation.",
      },
      {
        heading: "Why Red Junglefowl Conservation Matters",
        content: [
          "The Red Junglefowl is more than a wild bird. It is the genetic ancestor of all domestic chickens and plays a key role in forest ecosystems.",
          "In forests like Pittachhara, they contribute to seed dispersal, insect population control, and maintaining forest floor biodiversity balance.",
          "While globally listed as Least Concern, local populations in Bangladesh face increasing pressure from illegal hunting, habitat fragmentation, and weak enforcement in remote areas.",
        ],
      },
      {
        heading: "The Real Threat: Poaching in Bangladesh Forests",
        content: [
          "Poaching in Bangladesh is often underestimated because it is small-scale and local. But its cumulative impact is severe.",
          "In regions like the Chittagong Hill Tracts, wildlife is frequently hunted for meat consumption, informal trade networks exist at the village level, and many incidents go unreported.",
          "Even pressure on a single species can disrupt broader ecosystem balance.",
        ],
      },
      {
        heading: "Why Pittachhara Forest Matters",
        content: [
          "Pittachhara Forest is one of Bangladesh’s lesser-documented yet ecologically important areas. It acts as a biodiversity corridor, supporting birds, mammals, and plant species critical to regional ecological stability.",
          "Protecting species like the Red Junglefowl helps preserve habitat integrity, food chain stability, and the long-term conservation value of the forest.",
        ],
      },
      {
        heading: "Field Insight: What Effective Wildlife Rescue Requires",
        content: [
          "Successful conservation depends on active field monitoring, community-based conservation, and data-driven decision-making.",
          "Field presence matters because boots on the ground can stop poaching before greater damage is done.",
          "Community awareness is equally important. When local people understand the ecological value of wildlife, hunting pressure can decrease.",
          "Every rescue operation can also contribute to conservation knowledge by helping identify poaching hotspots, species vulnerability patterns, and habitat trends.",
        ],
      },
      {
        heading: "How Wildlife Poaching Can Be Reduced",
        content: [
          "Wildlife poaching can be reduced through active field monitoring, community education, stronger enforcement of the Bangladesh Wildlife Act, and data-driven conservation strategies that track and prevent illegal activities.",
        ],
      },
      {
        heading: "What You Can Do",
        content: [
          "Report illegal hunting activities in your area.",
          "Support local conservation initiatives.",
          "Raise awareness about biodiversity protection.",
          "Follow WildlifeScope for real field updates and research.",
          "Protecting wildlife is not just the responsibility of conservationists. It requires collective awareness and action.",
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
    relatedSlugs: [
      "pittachhara-red-junglefowl-rescue",
      "camera-trap-surveys-forest-habitats",
    ],
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
