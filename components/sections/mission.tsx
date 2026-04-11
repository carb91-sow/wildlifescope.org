"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Leaf, Shield, Heart, Users } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "Habitat Preservation",
    description: "Protecting natural ecosystems to ensure wildlife have safe spaces to thrive and flourish.",
  },
  {
    icon: Shield,
    title: "Species Protection",
    description: "Implementing anti-poaching measures and sanctuary programs for endangered animals.",
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Providing rehabilitation and veterinary care for injured and orphaned wildlife.",
  },
  {
    icon: Users,
    title: "Community Engagement",
    description: "Empowering local communities through education and sustainable livelihood programs.",
  },
]

export function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sticky Heading */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-sm font-medium text-accent tracking-widest uppercase mb-4"
              >
                Our Mission
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight text-balance"
              >
                Conservation Through Action
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-6 text-muted-foreground leading-relaxed"
              >
                We believe that protecting wildlife is not just a responsibility but a calling. Our comprehensive approach combines scientific research, community partnerships, and direct action to create lasting change.
              </motion.p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-8 p-8 bg-primary rounded-2xl text-primary-foreground"
            >
              <div className="text-center">
                <div className="font-serif text-3xl md:text-4xl font-bold">150+</div>
                <div className="text-sm text-primary-foreground/80 mt-1">Species Protected</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-3xl md:text-4xl font-bold">2.5M</div>
                <div className="text-sm text-primary-foreground/80 mt-1">Acres Preserved</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-3xl md:text-4xl font-bold">40+</div>
                <div className="text-sm text-primary-foreground/80 mt-1">Countries Active</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
