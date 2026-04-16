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
    title:
      "Nigel Marven Documents Slow Loris Conservation in Bangladesh: A Rare Field Interview from the Frontline",
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
  },
  {
    slug: "pittachhara-red-junglefowl-rescue",
    title:
      "Protecting Pittachhara Forest: A Wildlife Rescue in Bangladesh and the Fight Against Poaching",
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
          "“Wildlife poaching can be reduced through active field monitoring, community education, stronger enforcement of the Bangladesh Wildlife Act, and data-driven conservation strategies that track and prevent illegal activities.”",
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
    slug: "tracking-bengal-slow-loris-pittachhara-radio-telemetry",
    title:
      "Tracking a Bengal Slow Loris in Pittachhara Forest: A Night of Radio Telemetry in Bangladesh",
    label: "Field Research",
    excerpt:
      "A night of radio telemetry in Pittachhara Forest revealed the movement, habitat use, and fragile reality of one of Bangladesh’s most elusive nocturnal primates.",
    summary:
      "On June 15, 2025, an all-night radio telemetry session in Pittachhara Forest followed a radio-collared Bengal Slow Loris through dense forest, offering critical field insight into movement ecology and conservation in Bangladesh.",
    image: "/images/loris-team-field.jpg",
    date: "June 15, 2025",
    readTime: "7 min read",
    location: "Pittachhara Forest, Bangladesh",
    author: "Md. Rahenur Islam Sourov",
    featured: true,
    relatedSlugs: [
      "radio-telemetry-bengal-slow-loris",
      "nigel-marven-slow-loris-conservation-bangladesh",
      "gis-spatial-ecology-wildlife-research",
    ],
    sections: [
      {
        heading: "The Beginning: A Long Night Ahead",
        content: [
          "Most people will never see a Bengal Slow Loris in the wild. Even fewer will spend an entire night following one through dense forest, guided only by faint signals in the dark.",
          "On June 15, 2025, while working as a Field Manager with Plumploris e.V., we tracked a radio-collared slow loris deep inside Pittachhara Forest. What began as a routine telemetry session became a powerful reminder of how fragile, and how extraordinary, this species really is.",
          "We started before dusk with the essential equipment ready: radio telemetry receiver, directional antenna, GPS logging tools, and the goal of locating and monitoring a radio-collared Bengal Slow Loris.",
        ],
        image: "/images/loris-team-field.jpg",
        imageCaption:
          "Field team resting after an all-night Bengal Slow Loris tracking session in Pittachhara Forest, Bangladesh.",
      },
      {
        heading: "Moving Through the Dark: Following Signals, Not Sight",
        content: [
          "Tracking a slow loris is not about seeing. It is about listening and interpreting signals.",
          "Each step required adjusting antenna direction, reading signal strength, and moving quietly through uneven terrain. As darkness settled, the signal came alive. A faint rhythmic beep echoed through the receiver. Somewhere ahead, hidden in the canopy, the loris was moving.",
          "The forest changed at night. Sounds sharpened. Visibility dropped. Every movement felt slower, more deliberate. For hours, we followed the signal. Sometimes it grew stronger. Sometimes it vanished completely. Each time it disappeared, we stopped, recalibrated, and searched again.",
        ],
      },
      {
        heading: "The Moment: Encounter Under Red Light",
        content: [
          "After hours of tracking, we finally located her.",
          "High in the branches, barely visible, the Bengal Slow Loris moved slowly across the canopy. Under red-filtered light, her presence felt almost unreal.",
          "She paused, gripping a branch, scanning her surroundings. Silent. Alert. Completely adapted to a world most people never enter. In that moment, the data became something more than numbers. It became a living story.",
        ],
        image: "/images/loris-canopy.jpg",
        imageCaption:
          "A Bengal Slow Loris observed in the canopy during radio telemetry tracking in Pittachhara Forest.",
      },
      {
        heading: "Data Collection in the Night",
        content: [
          "Throughout the night, we recorded movement patterns, tree usage, feeding behavior, and GPS coordinates.",
          "This data is critical for understanding habitat use, identifying conservation priorities, and protecting slow loris populations in Bangladesh. But collecting it is never easy. Hours passed in near darkness, guided only by signal pulses and instinct.",
        ],
        image: "/images/radio-telemetry-night.jpg",
        imageCaption:
          "Night-time radio telemetry tracking using red light to observe a Bengal Slow Loris without disturbance.",
      },
      {
        heading: "After the Night: Exhaustion and Reflection",
        content: [
          "By dawn, the forest changed again. The signal faded. The loris disappeared into the canopy. And we stopped.",
          "The first light revealed what the night had hidden: tired bodies, muddy clothes, and silent satisfaction. That moment, sitting on the forest floor, exhausted but curious, captured something deeper than research. It captured commitment.",
        ],
      },
      {
        heading: "Why Bengal Slow Loris Conservation Matters",
        content: [
          "The Bengal Slow Loris (Nycticebus bengalensis) is one of the most elusive primates in Bangladesh.",
          "Despite being listed as Endangered, it faces constant threats including habitat loss, illegal wildlife trade, and lack of awareness.",
          "Radio telemetry studies like this help answer critical questions: where do they move, what habitats do they depend on, and how can we protect them effectively? Without this data, conservation becomes guesswork.",
        ],
      },
      {
        heading: "Field Insight: What Radio Telemetry Reveals",
        content: [
          "Radio-collar tracking allows conservationists to monitor nocturnal species with minimal disturbance, map home ranges, and understand survival challenges.",
          "In forests like Pittachhara, this remains one of the most effective tools for primate conservation in Bangladesh.",
          "“Conservation is not always dramatic. Sometimes, it is quiet, slow, and exhausting. But it matters.”",
        ],
      },
      {
        heading: "What You Can Do",
        content: [
          "Support wildlife conservation efforts in Bangladesh.",
          "Raise awareness about slow loris protection.",
          "Never support illegal wildlife trade.",
          "Every small action contributes to protecting species like the Bengal Slow Loris.",
        ],
      },
    ],
  },
  {
  slug: "bengal-slow-loris-rescue-dighinala-pittachhara",
  title:
    "We Rescued an Injured Bengal Slow Loris from Poaching in Bangladesh and Returned It to the Forest",
  label: "Wildlife Rescue",
  excerpt:
    "A Bengal Slow Loris rescued from poaching in Dighinala, Khagrachari was treated at Pittachhara and successfully released back into the wild.",
  summary:
    "On May 6, 2025, a Bengal Slow Loris rescued from illegal capture in Dighinala was brought to Pittachhara for treatment. After careful rehabilitation and monitoring, the animal recovered and was released back into its natural forest habitat.",
  image: "/images/slow-loris-rescue.jpg",
  date: "May 6, 2025",
  readTime: "6 min read",
  location: "Dighinala, Khagrachari, Bangladesh",
  author: "Md. Rahenur Islam Sourov",
  featured: true,
  relatedSlugs: [
    "nigel-marven-slow-loris-conservation-bangladesh",
    "pittachhara-red-junglefowl-rescue",
  ],
  sections: [
    {
      heading: "A Rescue That Started with a Call",
      content: [
        "Wildlife rescue in Bangladesh often begins quietly, through local networks and urgent calls. On May 6, 2025, we received information from a volunteer about a Bengal Slow Loris captured by a poacher in Dighinala, Khagrachari.",
        "By the time the animal reached our Pittachhara rehabilitation center, it was already showing signs of stress and injury. Cases like this are common but rarely documented, making each rescue both critical and urgent.",
      ],
      image: "/images/slow-loris-rescue.jpg",
      imageCaption:
        "Rescued Bengal Slow Loris after being recovered from illegal poaching in Dighinala, Khagrachari.",
    },
    {
      heading: "First Condition: Injured and Stressed",
      content: [
        "The Bengal Slow Loris (Nycticebus bengalensis) is an endangered primate, highly sensitive to stress and handling. Upon arrival, the animal showed visible injuries likely caused during capture, along with signs of dehydration and trauma.",
        "Wild animals under these conditions often deteriorate quickly. Immediate intervention is essential to prevent further decline and increase the chances of survival.",
      ],
    },
    {
      heading: "Emergency First Aid and Stabilization",
      content: [
        "We began first aid treatment immediately. Using protective handling techniques, we carefully cleaned wounds, assessed the extent of injuries, and provided supportive care.",
        "Handling a slow loris requires caution, not only because of its fragile condition but also because it is one of the few venomous primates. Every step was controlled to minimize stress while ensuring proper treatment.",
      ],
      image: "/images/slow-loris-treatment.jpg",
      imageCaption:
        "Providing first aid treatment to an injured Bengal Slow Loris during rehabilitation at Pittachhara.",
    },
    {
      heading: "Monitoring Recovery in Rehabilitation",
      content: [
        "After initial treatment, the focus shifted to monitoring. Recovery in wildlife is not immediate, especially for nocturnal species like the slow loris.",
        "We observed feeding behavior, movement, grip strength, and overall activity. Over time, the animal began to show signs of improvement, becoming more stable and responsive to its environment.",
        "This stage is often the most important, as it determines whether the animal can survive independently in the wild.",
      ],
    },
    {
      heading: "The Decision to Release",
      content: [
        "Once the loris showed consistent signs of recovery, we prepared for release. The goal of any wildlife rescue is not long-term captivity, but a safe return to natural habitat.",
        "We selected a suitable forest area adjacent to Pittachhara, ensuring the environment matched the species’ ecological needs.",
      ],
    },
    {
      heading: "Return to the Forest",
      content: [
        "The release was quiet and deliberate. As the loris moved back into the forest, it quickly disappeared into the trees, returning to the environment it belongs to.",
        "Moments like this define conservation work. There is no celebration, only a quiet confirmation that the effort was worth it.",
      ],
    },
    {
      heading: "Why Slow Loris Conservation Matters",
      content: [
        "The Bengal Slow Loris faces ongoing threats in Bangladesh, including poaching, habitat loss, and illegal wildlife trade. Many individuals are captured for sale or local use, and few survive long enough to be rescued.",
        "Each successful rehabilitation and release contributes to maintaining wild populations and protecting biodiversity in forest ecosystems.",
      ],
    },
    {
      heading: "The Role of Local Conservation Efforts",
      content: [
        "This rescue highlights the importance of local volunteers, rapid response, and field-based conservation networks.",
        "Without timely information and coordinated action, many wildlife cases would go unnoticed. Conservation is not only about research but also about immediate intervention and community involvement.",
      ],
    },
    {
      heading: "What You Can Do",
      content: [
        "Report illegal wildlife activities in your area.",
        "Support conservation organizations and local initiatives.",
        "Raise awareness about endangered species like the Bengal Slow Loris.",
        "Avoid supporting any form of wildlife trade.",
        "Protecting biodiversity requires both field action and public awareness.",
      ],
    },
  ],
},
  {
  slug: "entomological-day-pittachhara-children-awareness",
  title:
    "A Night of Light and Learning in Bangladesh: Teaching Forest Children the Hidden World of Insects",
  label: "Education & Outreach",
  excerpt:
    "An entomological awareness night in Pittachhara brought Tripura and Chakma children face-to-face with moths, light traps, and the unseen importance of insects.",
  summary:
    "On April 14, 2025, an entomological awareness program in Pittachhara Forest introduced local children to moths, insects, and their ecological importance through light trapping, visual learning, and interactive engagement.",
  image: "/images/entomology-hero.jpg",
  date: "April 14, 2025",
  readTime: "5 min read",
  location: "Pittachhara Forest, Bangladesh",
  author: "Md. Rahenur Islam Sourov",
  featured: false,
  relatedSlugs: [
    "conservation-awareness-public-engagement",
    "pittachhara-forest-biodiversity-conservation",
  ],
  sections: [
    {
      heading: "A Night That Began with Light",
      content: [
        "On April 14, 2025, in a village near Pittachhara Forest, we gathered with children from Tripura and Chakma communities for something simple, yet powerful: an entomological awareness night.",
        "As darkness settled, we set up a light trap under a tree. Within minutes, the glowing sheet began to attract insects from the surrounding forest. What started as curiosity quickly turned into fascination.",
      ],
      image: "/images/entomology-hero.jpg",
      imageCaption:
        "Children gathered around a light trap during an entomological awareness night near Pittachhara Forest.",
    },
    {
      heading: "Curiosity Turns into Discovery",
      content: [
        "The children sat closely, watching insects arrive one by one. Moths, beetles, and other nocturnal species appeared under the light, each one becoming a subject of curiosity.",
        "We guided them through simple explanations, showing the names of visible insects and helping them observe differences in shape, size, and color.",
        "For many of them, it was the first time seeing these creatures not as something to fear, but as something to understand.",
      ],
    },
    {
      heading: "Learning Through Seeing",
      content: [
        "Using visual materials, we showed images of different moth species and explained how to identify them. The children compared what they saw on the sheet with the images in hand.",
        "We also explained the difference between moths and butterflies, helping them understand how these species behave, when they are active, and why they matter.",
        "Learning was not one-sided. The children asked questions, pointed at insects, and tried to identify them themselves.",
      ],
      image: "/images/entomology-learning.jpg",
      imageCaption:
        "Children engaging with insect visuals and learning to identify moths during the awareness session.",
    },
    {
      heading: "Why Insects Matter More Than We Think",
      content: [
        "We explained that insects are not just small creatures in the forest. They are essential to ecosystems.",
        "Moths and other insects contribute to pollination, act as food sources for birds and mammals, and play a role in maintaining ecological balance.",
        "Understanding insects is one of the first steps toward understanding biodiversity itself.",
      ],
    },
    {
      heading: "More Than a Children’s Program",
      content: [
        "Although the program was designed for children, adults from the community also joined. They stood around, observed, and listened.",
        "This unexpected participation made the experience more meaningful. Awareness does not stay limited to one group; it spreads through shared experience.",
      ],
    },
    {
      heading: "Learning Through Interaction",
      content: [
        "To make the session more engaging, we organized a simple quiz. Using images of moths, we asked the children to identify features and recall what they had learned.",
        "Their responses showed something important: they were not just watching, they were understanding.",
      ],
    },
    {
      heading: "Why Community Awareness Matters",
      content: [
        "Conservation is not only about research or fieldwork. It begins with awareness.",
        "When children understand the value of insects, forests, and biodiversity, they grow into individuals who are more likely to protect them.",
        "Programs like this create a connection between people and nature that cannot be built through theory alone.",
      ],
    },
    {
      heading: "A Quiet Impact",
      content: [
        "That night ended without any formal conclusion. The light dimmed, the insects disappeared, and people slowly returned home.",
        "But something stayed.",
        "A new way of seeing the forest, not just as a place, but as a living system filled with small, important lives.",
      ],
    },
  ],
},
  {
  slug: "lawachara-national-park-mammal-survey-fieldwork",
  title:
    "Field Study in Lawachara National Park: Exploring Mammal Diversity in Bangladesh’s Forest Ecosystem",
  label: "Field Research",
  excerpt:
    "An academic field visit to Lawachara National Park focused on surveying mammal diversity and gaining practical insights into wildlife research in Bangladesh.",
  summary:
    "On March 13, 2025, an academic field visit to Lawachara National Park in Sylhet explored mammalian diversity through direct observation and field-based learning under expert guidance.",
  image: "/images/lawachara-field.jpg",
  date: "March 13, 2025",
  readTime: "6 min read",
  location: "Lawachara National Park, Sylhet, Bangladesh",
  author: "Md. Rahenur Islam Sourov",
  relatedSlugs: [
    "gis-spatial-ecology-wildlife-research",
    "nigel-marven-slow-loris-conservation-bangladesh",
  ],
  sections: [
    {
      heading: "Entering the Forest Landscape",
      content: [
        "On March 13, 2025, we visited the Sylhet region as part of our academic fieldwork, focusing on the ecological richness of Lawachara National Park.",
        "The forest presented a complex landscape of dense vegetation, narrow trails, and layered canopy structures, offering an ideal environment for studying wildlife diversity, particularly mammals.",
      ],
      image: "/images/lawachara-field.jpg",
      imageCaption:
        "Academic field team observing forest canopy and habitat structure in Lawachara National Park.",
    },
    {
      heading: "Understanding Mammal Diversity in the Field",
      content: [
        "The primary objective of the field visit was to survey mammalian diversity within the park. Lawachara is known for its rich assemblage of species, including primates, small carnivores, and arboreal mammals.",
        "Field observation focused on identifying habitat features, movement signs, and ecological indicators that suggest the presence of different mammalian groups.",
      ],
    },
    {
      heading: "Learning Through Direct Observation",
      content: [
        "Unlike classroom learning, field-based study requires interpreting subtle signs such as tracks, sounds, and vegetation patterns.",
        "We examined forest structure, canopy connectivity, and understory density, all of which influence mammal distribution and behavior.",
      ],
      image: "/images/lawachara-trail.jpg",
      imageCaption:
        "Field discussion on habitat structure and mammal ecology along forest trails in Lawachara.",
    },
    {
      heading: "Guidance from Field Expertise",
      content: [
        "During the fieldwork, our supervisor, Dr. Jadob Kumar, provided key insights into mammalian ecology and research methodology.",
        "He explained how different species utilize forest strata, how ecological niches are formed, and how researchers interpret field data to understand species presence and distribution.",
        "These insights bridged the gap between theoretical knowledge and real-world application.",
      ],
    },
    {
      heading: "Fieldwork as a Research Foundation",
      content: [
        "This visit also supported our thesis work, reinforcing the importance of field data in ecological research.",
        "Understanding mammal diversity is not limited to species identification. It involves analyzing habitat relationships, ecological interactions, and environmental pressures.",
      ],
    },
    {
      heading: "Why Lawachara National Park Matters",
      content: [
        "Lawachara National Park is one of Bangladesh’s most important protected areas, supporting a wide range of biodiversity.",
        "Its role as a habitat for mammals makes it critical for conservation research, ecological monitoring, and long-term biodiversity protection.",
      ],
    },
    {
      heading: "The Value of Academic Field Experience",
      content: [
        "Field visits like this are essential for developing practical understanding in wildlife research.",
        "They allow students and researchers to connect theoretical concepts with real ecosystems, strengthening both analytical skills and conservation awareness.",
      ],
    },
  ],
},
  {
  slug: "amphibian-survey-pittachhara-rainy-morning-return",
  title:
    "Amphibian Survey in Pittachhara Forest: A Night of Field Research and a Rain-Soaked Return",
  label: "Field Research",
  excerpt:
    "A night survey of amphibians in Pittachhara Forest highlights field challenges, nocturnal research, and the realities of biodiversity monitoring in Bangladesh.",
  summary:
    "On April 27, 2025, a field survey of amphibians in Pittachhara Forest extended through the night, ending with a rain-soaked return at dawn, reflecting the realities of ecological research in Bangladesh.",
  image: "/images/amphibian-field-return.jpg",
  date: "April 27, 2025",
  readTime: "5 min read",
  location: "Pittachhara Forest, Bangladesh",
  author: "Md. Rahenur Islam Sourov",
  relatedSlugs: [
    "bengal-slow-loris-radio-telemetry-pittachhara",
    "pittachhara-forest-biodiversity-conservation",
  ],
  sections: [
    {
      heading: "A Night in Search of Amphibians",
      content: [
        "On April 27, 2025, we conducted a nocturnal field survey of amphibians in an area adjacent to Pittachhara Forest. Amphibian research requires working at night, when most species become active and detectable.",
        "The survey focused on identifying species presence, observing habitat conditions, and recording ecological indicators that reflect amphibian diversity in the region.",
      ],
      image: "/images/amphibian-night.jpg",
      imageCaption:
        "Field team during a nocturnal amphibian survey near Pittachhara Forest.",
    },
    {
      heading: "Field Conditions and Challenges",
      content: [
        "Working at night in forest environments presents continuous challenges. Limited visibility, uneven terrain, and constant environmental noise make detection and movement more difficult.",
        "Amphibians are often identified through subtle cues such as calls, moisture-rich microhabitats, and brief visual encounters, requiring patience and careful observation.",
      ],
    },
    {
      heading: "Data Collection in the Dark",
      content: [
        "Throughout the night, we documented species observations, habitat conditions, and environmental parameters. Each record contributes to understanding amphibian distribution and ecosystem health.",
        "Amphibians are sensitive indicators of environmental change, making their presence or absence important for assessing forest biodiversity.",
      ],
    },
    {
      heading: "The Return at Dawn",
      content: [
        "By early morning, the survey concluded. As we began returning to our station, light rain started to fall across the landscape.",
        "The narrow trails became muddy and difficult to navigate. The forest, quiet during the night, shifted again with the arrival of morning.",
        "Walking back through wet terrain, carrying equipment after hours of fieldwork, reflected the physical reality behind ecological research.",
      ],
      image: "/images/amphibian-morning-return.jpg",
      imageCaption:
        "Field team returning at dawn after an overnight amphibian survey in Pittachhara Forest.",
    },
    {
      heading: "Why Amphibian Surveys Matter",
      content: [
        "Amphibians play a critical role in ecosystems as both predators and prey, helping maintain ecological balance.",
        "They are also highly sensitive to environmental changes, making them key indicators of habitat quality and ecosystem health.",
        "Monitoring amphibian populations helps identify conservation priorities and supports long-term biodiversity protection in forest ecosystems like Pittachhara.",
      ],
    },
    {
      heading: "Field Insight",
      content: [
        "Field-based research is often quiet, physically demanding, and repetitive. Yet it provides the data necessary for understanding ecosystems and guiding conservation decisions.",
        "Experiences like this highlight that conservation is built on consistent effort, careful observation, and the willingness to work in challenging conditions.",
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
