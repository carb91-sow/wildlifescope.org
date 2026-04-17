"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  ArrowRight,
  ShieldAlert,
  Trees,
  Users,
  BookOpen,
  Camera,
  Radio,
  PawPrint,
  Leaf,
  Globe2,
  HeartHandshake,
  HandCoins,
} from "lucide-react"

// paste your full homepage code here
export default function HomePageClient() {
  return (
    <>
      <Header />
      <main>{/* homepage sections */}</main>
      <Footer />
    </>
  )
}
