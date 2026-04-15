import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, ArrowRight, Clock3, MapPin } from "lucide-react"

type StorySection = {
  heading: string
  content: string[]
}

type Story = {
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
  relatedSlugs?: string[]
  sections: StorySection[]
}

const stories: Story[] = [
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
    relatedSlugs: ["radio-telemetry-bengal-slow-loris"],
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

function getStoryBySlug(slug: string) {
  return stories.find((story) => story.slug === slug)
}

function getRelatedStories(slugs: string[] = []) {
  return stories.filter((story) => slugs.includes(story.slug))
}

export async function generateStaticParams() {
  return stories.map((story) => ({
    slug: story.slug,
  }))
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const story = getStoryBySlug(slug)

  if (!story) notFound()

  const relatedStories = getRelatedStories(story.relatedSlugs)

  return (
    <>
      <Header />

      <main className="bg-[#0b0d09] pt-20 text-white">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="relative min-h-[80vh]">
            <Image
              src={story.image}
              alt={story.title}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/85" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(244,197,66,0.14),transparent_28%)]" />
            <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.45)]" />

            <div className="relative mx-auto flex min-h-[80vh] max-w-6xl items-end px-6 pb-16 pt-32 lg:px-8 lg:pb-20">
              <div className="max-w-4xl">
                <Link
                  href="/conservation"
                  className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.22em] text-[#f4c542] transition hover:text-[#ffd45c]"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Stories
                </Link>

                <p className="mt-8 text-sm font-medium uppercase tracking-[0.32em] text-[#f4c542]">
                  {story.label}
                </p>

                <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.02] text-white md:text-6xl lg:text-7xl">
                  {story.title}
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85 md:text-xl">
                  {story.summary}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-5 text-[11px] font-medium uppercase tracking-[0.22em] text-white/60">
                  <span>{story.date}</span>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="h-3.5 w-3.5 text-[#f4c542]" />
                    {story.readTime}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-[#f4c542]" />
                    {story.location}
                  </span>
                  <span>By {story.author}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#11130f] py-20 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.72fr_0.28fr] lg:px-8">
            <article className="min-w-0">
              <div className="rounded-[32px] border border-white/10 bg-[#141611] p-8 md:p-10 lg:p-12">
                <p className="text-lg leading-8 text-white/78">
                  {story.excerpt}
                </p>

                <div className="mt-12 space-y-12">
                  {story.sections.map((section) => (
                    <section key={section.heading}>
                      <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
                        {section.heading}
                      </h2>

                      <div className="mt-6 space-y-6">
                        {section.content.map((paragraph, index) => (
                          <p
                            key={index}
                            className="text-lg leading-9 text-white/76"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            </article>

            <aside className="space-y-6">
              <div className="rounded-[28px] border border-white/10 bg-[#141611] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f4c542]">
                  Story Details
                </p>

                <div className="mt-6 space-y-5 text-sm text-white/75">
                  <div>
                    <p className="uppercase tracking-[0.2em] text-white/40">Category</p>
                    <p className="mt-2">{story.label}</p>
                  </div>

                  <div>
                    <p className="uppercase tracking-[0.2em] text-white/40">Location</p>
                    <p className="mt-2">{story.location}</p>
                  </div>

                  <div>
                    <p className="uppercase tracking-[0.2em] text-white/40">Published</p>
                    <p className="mt-2">{story.date}</p>
                  </div>

                  <div>
                    <p className="uppercase tracking-[0.2em] text-white/40">Reading Time</p>
                    <p className="mt-2">{story.readTime}</p>
                  </div>

                  <div>
                    <p className="uppercase tracking-[0.2em] text-white/40">Author</p>
                    <p className="mt-2">{story.author}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#141611] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f4c542]">
                  Explore More
                </p>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  Discover more research stories, biodiversity monitoring work,
                  and conservation awareness from Bangladesh.
                </p>

                <Link
                  href="/conservation"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#f4c542] transition hover:gap-3"
                >
                  View All Stories
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {relatedStories.length > 0 && (
          <section className="bg-[#0d0f0c] py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mb-12">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]">
                  Related Stories
                </p>
                <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-5xl">
                  Continue reading
                </h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {relatedStories.map((item) => (
                  <article
                    key={item.slug}
                    className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#141611] transition-all duration-300 hover:-translate-y-1 hover:border-[#f4c542]/35"
                  >
                    <Link href={`/stories/${item.slug}`} className="block">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                        <div className="absolute left-0 top-0 h-full w-2 bg-[#f4c542]" />

                        <div className="absolute bottom-0 left-0 p-6">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f4c542]">
                            {item.label}
                          </p>
                          <h3 className="mt-3 font-serif text-2xl font-bold leading-tight text-white">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <div className="p-6">
                        <p className="text-sm leading-7 text-white/72">
                          {item.excerpt}
                        </p>

                        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#f4c542] transition-all duration-300 group-hover:gap-3">
                          Read Story
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}
