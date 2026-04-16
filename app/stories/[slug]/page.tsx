import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  getRelatedStories,
  getStoryBySlug,
  stories,
} from "../../../data/stories"
import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  MapPin,
  Camera,
  Leaf,
  Quote,
} from "lucide-react"

export function generateStaticParams() {
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
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="relative min-h-[84vh]">
            <Image
              src={story.image}
              alt={story.title}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(244,197,66,0.14),transparent_28%)]" />
            <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.45)]" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0b0d09] to-transparent" />

            <div className="relative mx-auto flex min-h-[84vh] max-w-6xl items-end px-6 pb-16 pt-32 lg:px-8 lg:pb-20">
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

        {/* Story Body */}
        <section className="bg-[#11130f] py-20 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.72fr_0.28fr] lg:px-8">
            <article className="min-w-0">
              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#141611]">
                <div className="border-b border-white/10 p-8 md:p-10 lg:p-12">
                  <div className="flex items-center gap-3 text-[#f4c542]">
                    <Leaf className="h-5 w-5" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.28em]">
                      Field Story
                    </span>
                  </div>

                  <p className="mt-6 text-lg leading-8 text-white/80 md:text-xl md:leading-9">
                    {story.excerpt}
                  </p>
                </div>

                <div className="p-8 md:p-10 lg:p-12">
                  <div className="space-y-16">
                    {story.sections.map((section, index) => (
                      <section key={section.heading} className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="h-px w-14 bg-[#f4c542]" />
                          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f4c542]">
                            Section {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <h2 className="font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
                          {section.heading}
                        </h2>

                        {section.image && (
                          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#10120f]">
                            <div className="relative aspect-[16/10] w-full overflow-hidden">
                              <Image
                                src={section.image}
                                alt={section.heading}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 800px"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                            </div>

                            {section.imageCaption && (
                              <div className="flex items-start gap-3 border-t border-white/10 px-5 py-4">
                                <Camera className="mt-0.5 h-4 w-4 shrink-0 text-[#f4c542]" />
                                <p className="text-sm leading-7 text-white/60">
                                  {section.imageCaption}
                                </p>
                              </div>
                            )}
                          </div>
                        )}

                        <div className="space-y-6">
                          {section.content.map((paragraph, i) => {
                            const trimmed = paragraph.trim()
                            const isQuote =
                              trimmed.startsWith("“") ||
                              trimmed.startsWith('"')
                            const isShortLine =
                              trimmed.length < 110 &&
                              !trimmed.includes(". ") &&
                              !isQuote

                            if (isQuote) {
                              return (
                                <div
                                  key={i}
                                  className="my-10 overflow-hidden rounded-[24px] border border-[#f4c542]/25 bg-[#1a1d17]"
                                >
                                  <div className="flex items-start gap-4 px-6 py-6 md:px-8 md:py-8">
                                    <Quote className="mt-1 h-5 w-5 shrink-0 text-[#f4c542]" />
                                    <p className="font-serif text-xl italic leading-9 text-white/90 md:text-2xl">
                                      {trimmed}
                                    </p>
                                  </div>
                                </div>
                              )
                            }

                            if (isShortLine) {
                              return (
                                <div
                                  key={i}
                                  className="rounded-2xl border border-white/8 bg-[#171a15] px-5 py-4"
                                >
                                  <p className="text-base leading-8 text-white/78">
                                    {trimmed}
                                  </p>
                                </div>
                              )
                            }

                            return (
                              <p
                                key={i}
                                className="text-lg leading-9 text-white/76"
                              >
                                {trimmed}
                              </p>
                            )
                          })}
                        </div>
                      </section>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-[28px] border border-white/10 bg-[#141611] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f4c542]">
                  Story Details
                </p>

                <div className="mt-6 space-y-5 text-sm text-white/75">
                  <div>
                    <p className="uppercase tracking-[0.2em] text-white/40">
                      Category
                    </p>
                    <p className="mt-2">{story.label}</p>
                  </div>

                  <div>
                    <p className="uppercase tracking-[0.2em] text-white/40">
                      Location
                    </p>
                    <p className="mt-2">{story.location}</p>
                  </div>

                  <div>
                    <p className="uppercase tracking-[0.2em] text-white/40">
                      Published
                    </p>
                    <p className="mt-2">{story.date}</p>
                  </div>

                  <div>
                    <p className="uppercase tracking-[0.2em] text-white/40">
                      Reading Time
                    </p>
                    <p className="mt-2">{story.readTime}</p>
                  </div>

                  <div>
                    <p className="uppercase tracking-[0.2em] text-white/40">
                      Author
                    </p>
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

        {/* Related Stories */}
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
