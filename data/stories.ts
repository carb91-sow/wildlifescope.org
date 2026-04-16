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
  slug: "nigel-marven-slow-loris-conservation-bangladesh",
  title: "Nigel Marven Documents Slow Loris Conservation in Bangladesh: A Rare Field Interview from the Frontline",
  label: "Field Documentation",
  excerpt:
    "On January 10, 2026, wildlife presenter Nigel Marven visited Bangladesh to document the Plumploris e.V. Slow Loris conservation project, revealing real field challenges and conservation realities.",
  summary:
    "A field-based interview with Nigel Marven during his visit to Bangladesh highlights the challenges, research importance, and conservation efforts behind protecting Slow Loris populations.",
  image: "/images/conservation-hero.jpg",
  date: "January 10, 2026",
  readTime: "6 min read",
  location: "Sreemangal, Bangladesh",
  author: "Md. Rahenur Islam Sourov",
  relatedSlugs: [
    "radio-telemetry-bengal-slow-loris",
    "gis-spatial-ecology-wildlife-research",
  ],
  sections: [
    {
      heading: "A Rare Visit to the Field",
      content: [
        "On January 10, 2026, renowned wildlife presenter Nigel Marven visited Bangladesh to document the Plumploris e.V. Slow Loris conservation project.",
        "This visit brought international attention to one of the most important yet underrepresented wildlife conservation efforts in South Asia.",
      ],
      image: "/images/conservation-hero.jpg",
      imageCaption:
        "Nigel Marven documenting Slow Loris conservation work during his visit to Bangladesh.",
    },

    {
      heading: "Field Interview with Nigel Marven",
      content: [
        "As a Research Assistant working on the project, I had the opportunity to interview Nigel Marven directly during his field visit.",
        "We discussed what we do, why Slow Loris conservation matters, and the real conditions faced by researchers working in forest environments.",
        "The conversation highlighted not only scientific goals but also the physical and logistical challenges of conservation in Bangladesh.",
      ],
    },

    {
      heading: "Key Insight from the Field",
      content: [
        "“Conservation is not just about protecting animals — it is about understanding their world and the pressures they face every day.”",
      ],
    },

    {
      heading: "Understanding the Slow Loris Conservation Project",
      content: [
        "The Plumploris e.V. project focuses on monitoring and protecting Slow Loris populations through field research, ecological observation, and conservation planning.",
        "In Bangladesh, Slow Loris species face increasing threats from habitat loss, illegal wildlife trade, and lack of awareness.",
        "Research-based conservation is essential to understand their behavior, habitat use, and long-term survival.",
      ],
    },

    {
      heading: "Challenges of Field-Based Conservation",
      content: [
        "Conservation work in forest environments is physically demanding and often unpredictable.",
        "Night tracking, dense vegetation, weather conditions, and limited infrastructure create continuous challenges for field researchers.",
        "These realities were emphasized during the interview, showing that conservation is not theoretical but deeply practical and demanding.",
      ],
    },

    {
      heading: "Why International Documentation Matters",
      content: [
        "Documentation by global wildlife presenters like Nigel Marven helps bring visibility to conservation efforts that often remain unnoticed.",
        "Such exposure strengthens awareness, encourages support, and highlights the importance of protecting species like the Bengal Slow Loris.",
      ],
    },

    {
      heading: "Why Slow Loris Conservation Is Important",
      content: [
        "Slow Loris are ecologically important primates that contribute to forest ecosystem balance.",
        "Their survival depends on habitat protection, scientific research, and reducing illegal wildlife trade.",
        "Protecting Slow Loris populations helps preserve biodiversity and supports long-term ecological stability.",
      ],
    },

    {
      heading: "Field Insight and Future Direction",
      content: [
        "This interaction reinforced the importance of combining research, fieldwork, and storytelling in conservation.",
        "Effective conservation requires long-term monitoring, collaboration, and awareness at both local and global levels.",
        "Documenting real field experiences helps bridge the gap between science and public understanding.",
      ],
    },
  ],
}
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
