"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ProjectInquiryModal } from "@/components/project-inquiry-modal";
import { PrivacyConsentCard } from "@/components/privacy-consent-card";
import { ArcTimeline } from "@/components/ui/arc-timeline";
import { FlipWords } from "@/components/ui/flip-words";
import GradientPattern from "@/components/ui/gradient-pattern";
import { TrendingUp, Zap, Users } from "lucide-react";
const features = [
  {
    title: "Strategy-First Design",
    description:
      "Data-driven design decisions backed by user research, conversion optimization, and brand positioning strategy.",
    meta: "Research & Strategy",
  },
  {
    title: "Lightning-Fast Development",
    description:
      "Modern tech stack with optimized performance, ensuring sub-second load times and seamless user experiences.",
    meta: "Next.js & Performance",
  },
  {
    title: "Conversion Focused",
    description:
      "Every element designed with one goal: turning visitors into customers through strategic UX and persuasive design.",
    meta: "CRO & Analytics",
  },
];

const portfolioItems = [
  {
    title: "Creative Portfolio Platform",
    category: "Digital Agency",
    description: "Elegant portfolio showcase featuring dynamic visualizations and seamless user experience for creative professionals",
    image: "/1.png",
    metrics: "340% portfolio engagement"
  },
  {
    title: "Omega AI Solutions",
    category: "AI Technology",
    description: "Cutting-edge AI automation platform delivering intelligent workflows and exponential business growth solutions",
    image: "/2.png",
    metrics: "250% efficiency increase"
  },
  {
    title: "Calm Meditation App",
    category: "Wellness & Mindfulness",
    description: "Serene meditation platform promoting mindful living with tranquil design and immersive user journeys",
    image: "/3.png",
    metrics: "180% user retention"
  },
  {
    title: "Flowly Workflow Management",
    category: "SaaS Platform",
    description: "Comprehensive workflow automation platform streamlining business operations with intuitive analytics dashboard",
    image: "/4.png",
    metrics: "500% productivity boost"
  },
  {
    title: "AI Personal Assistant",
    category: "AI Technology",
    description: "Revolutionary AI-powered personal agent delivering intelligent automation and personalized productivity enhancement",
    image: "/5.png",
    metrics: "220% task completion"
  },
  {
    title: "Invoify Subscription Manager",
    category: "FinTech SaaS",
    description: "Intelligent subscription management platform automating recurring payments with sophisticated lifecycle workflows",
    image: "/6.png",
    metrics: "300% payment efficiency"
  }
];

const testimonials = [
  {
    quote: "Honestly, I was skeptical about redesigning our site again, but Salvex really listened to what we needed. The new page feels so much more 'us' and our trial signups have been through the roof. Best investment we made this year.",
    author: "Maya Patel",
    role: "Co-founder",
    company: "FlowState Analytics",
    avatar: "MP",
    rating: 5,
    metric: "280% trial signups"
  },
  {
    quote: "These guys get it. They didn't just make things look pretty, they actually understood our customers and built something that works. Our checkout flow went from painful to seamless, and it shows in our numbers.",
    author: "James Park",
    role: "Head of Growth",
    company: "Bloom Botanicals",
    avatar: "JP",
    rating: 5,
    metric: "190% completion rate"
  },
  {
    quote: "Working with Salvex felt like having an extension of our team. They were patient with our feedback, super responsive, and delivered exactly what we envisioned. Our users love the new experience.",
    author: "Alex Rivera",
    role: "Product Lead",
    company: "Zenith Wellness",
    avatar: "AR",
    rating: 5,
    metric: "150% user engagement"
  }
];

const arcTimelineData = [
  {
    time: "Performance",
    steps: [
      {
        icon: <TrendingUp className="h-6 w-6" />,
        content: (
          <div className="space-y-2">
            <div className="text-[#f5e9d7]xl font-bold text-foreground">300%</div>
            <div className="text-sm font-semibold text-foreground">Avg. conversion boost</div>
            <div className="text-xs text-muted-foreground">Average increase in conversions across all client projects.</div>
          </div>
        ),
      },
    ],
  },
  {
    time: "Speed",
    steps: [
      {
        icon: <Zap className="h-6 w-6" />,
        content: (
          <div className="space-y-2">
            <div className="text-[#f5e9d7]xl font-bold text-foreground">0.8s</div>
            <div className="text-sm font-semibold text-foreground">Load time</div>
            <div className="text-xs text-muted-foreground">Average page load time across all delivered projects.</div>
          </div>
        ),
      },
    ],
  },
  {
    time: "Trust",
    steps: [
      {
        icon: <Users className="h-6 w-6" />,
        content: (
          <div className="space-y-2">
            <div className="text-[#f5e9d7]xl font-bold text-foreground">50+</div>
            <div className="text-sm font-semibold text-foreground">Happy clients</div>
            <div className="text-xs text-muted-foreground">Successful projects delivered across various industries.</div>
          </div>
        ),
      },
    ],
  },
];

const heroVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <motion.main id="hero"
        initial={{
          opacity: 0,
          scale: 0.8,
          y: 40,
          rotateX: 15,
          filter: "blur(8px)"
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          rotateX: 0,
          filter: "blur(0px)"
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2,
          filter: { duration: 0.5 }
        }}
        className="relative isolate scroll-mt-40 overflow-hidden rounded-[28px] border border-white/12 bg-white/8 px-6 py-10 shadow-[0_25px_90px_-45px_rgba(6,10,18,0.55)] backdrop-blur-2xl sm:px-10 md:px-14 md:py-16 aurora-card"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d"
        }}
      >
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <GradientPattern />
        </div>

        <div className="relative">
          <motion.section
            initial="hidden"
            animate="visible"
            variants={heroVariants}
            transition={{
              duration: 1.0,
              ease: "easeOut",
              delay: 0.6,
            }}
            className="flex flex-col justify-center space-y-12 text-center"
          >
            <div className="flex flex-col gap-8">
              <div className="mx-auto flex flex-col items-center gap-3 text-center">
                <span className="text-[0.55rem] uppercase tracking-[0.6em] text-[#7e8e92]">Conversion Atelier</span>
                <div className="flex items-center gap-3 text-[#5e6a6d]">
                  <span className="grid w-12 gap-1" aria-hidden="true">
                    <span className="h-px bg-gradient-to-r from-transparent via-primary/80 to-primary/50" />
                    <span className="h-[2px] bg-gradient-to-r from-primary/60 via-primary/45 to-transparent" />
                    <span className="h-px bg-gradient-to-r from-transparent via-primary/70 to-primary/40" />
                    <span className="h-[2px] bg-gradient-to-r from-primary/55 via-primary/35 to-transparent" />
                    <span className="h-px bg-gradient-to-r from-transparent via-primary/60 to-primary/30" />
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-[0.35em]">Salvex Studio</span>
                  <span className="grid w-12 gap-1" aria-hidden="true">
                    <span className="h-px bg-gradient-to-l from-transparent via-accent/80 to-accent/50" />
                    <span className="h-[2px] bg-gradient-to-l from-accent/60 via-accent/45 to-transparent" />
                    <span className="h-px bg-gradient-to-l from-transparent via-accent/70 to-accent/40" />
                    <span className="h-[2px] bg-gradient-to-l from-accent/55 via-accent/35 to-transparent" />
                    <span className="h-px bg-gradient-to-l from-transparent via-accent/60 to-accent/30" />
                  </span>
                </div>
                <span className="text-xs font-medium text-foreground/65">Conversion-focused landing page studio</span>
              </div>
              <div className="space-y-8 pt-2">

                <h1 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl xl:text-5xl" style={{ color: '#5e6a6d' }}>
                  <span className="inline-flex flex-wrap items-center justify-center gap-2 text-center">
                    <span>Salvex crafts</span>
                    <FlipWords
                      words={[
                        "boardroom-ready",
                        "conversion-grade",
                        "investor-trusted",
                        "deal-closing"
                      ]}
                      duration={2600}
                      className="px-1 font-bold text-[#f7efe6]"
                    />
                    <span>landing experiences.</span>
                  </span>
                </h1>
                <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
                  Strategic design meets lightning-fast development. We build high-performance landing pages that turn your visitors into customers with measurable results.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                <Button
                  size="lg"
                  className="frosted-button"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span className="frosted-button__inner">Start Your Project</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="outline-pearl"
                  onClick={scrollToPortfolio}
                >
                  <span className="outline-pearl__inner">View Our Work</span>
                </Button>
              </div>
              <div className="flex items-center justify-center gap-8 pt-6 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-3 text-[#6f7f83]"><span className="breathing-dot inline-flex h-2 w-2 items-center justify-center rounded-full bg-accent/85" aria-hidden="true" />Free consultation</span>
                <span className="inline-flex items-center gap-3 text-[#6f7f83]"><span className="breathing-dot inline-flex h-2 w-2 items-center justify-center rounded-full bg-accent/85" aria-hidden="true" />2-4 week delivery</span>
                <span className="inline-flex items-center gap-3 text-[#6f7f83]"><span className="breathing-dot inline-flex h-2 w-2 items-center justify-center rounded-full bg-accent/85" aria-hidden="true" />300% avg conversion boost</span>
              </div>
            </div>

          </motion.section>
        </div>
      </motion.main>

      {/* Features Section */}
      <section id="approach" className="space-y-16 scroll-mt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="relative inline-flex items-center gap-4 rounded-full bg-accent/15 px-7 py-3.5 backdrop-blur-sm border border-accent/30 shadow-sm">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40" />
            <div className="h-2 w-2 rounded-full bg-accent shadow-sm" />
            <span className="relative text-[0.75rem] font-semibold tracking-[0.3em] uppercase text-[#7e8e92]">
              How We Work
            </span>
            <div className="h-2 w-2 rounded-full bg-accent shadow-sm" />
          </div>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
            Our Three-Pillar Approach
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Every successful landing page is built on these fundamental principles that drive real business results.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/12 bg-white/8 p-8 shadow-[0_24px_50px_-36px_rgba(8,12,20,0.45)] backdrop-blur-xl transition-all duration-500 hover:border-white/20"
            >
              {/* Subtle highlight for Three-Pillar cards */}
              <div className="absolute inset-0 opacity-100 transition-opacity duration-500 group-hover:opacity-110 z-10 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(94,106,109,0.04),rgba(94,106,109,0)_75%)]" />
              </div>
              {/* Subtle highlight for testimonial cards */}
              <div className="absolute inset-0 opacity-100 transition-opacity duration-500 group-hover:opacity-120 z-10 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(94,106,109,0.05),rgba(94,106,109,0)_75%)]" />
              </div>
              <div className="relative flex flex-col gap-4">
                <div className="relative -mx-8 px-8 py-2">
                  <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                    <div className="h-[1.5rem] w-full bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20 opacity-90 shadow-[0_0_18px_rgba(214,169,157,0.3)] transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                  <span className="relative z-10 inline-flex h-[1.5rem] items-center text-[0.6rem] uppercase tracking-[0.35em] text-[#7e8e92] font-semibold">
                    {feature.meta}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Interactive Stats Section */}
        <div id="impact" className="scroll-mt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-16"
        >
          <div className="text-center space-y-6 mb-12">
            <div className="relative inline-flex items-center gap-4 rounded-full bg-accent/15 px-7 py-3.5 backdrop-blur-sm border border-accent/30 shadow-sm">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40" />
              <div className="h-2 w-2 rounded-full bg-accent shadow-sm" />
              <span className="relative text-[0.75rem] font-semibold tracking-[0.3em] uppercase text-[#7e8e92]">
                Our Impact
              </span>
              <div className="h-2 w-2 rounded-full bg-accent shadow-sm" />
            </div>
            <h3 className="text-[#f5e9d7]xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
              Results That Speak for Themselves
            </h3>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Click on each metric to explore how we deliver exceptional results for our clients.
            </p>
          </div>

          <div className="relative">
            <ArcTimeline
              data={arcTimelineData}
              className="mx-auto"
              arcConfig={{
                circleWidth: 4000,
                angleBetweenMinorSteps: 0.4,
                lineCountFillBetweenSteps: 15,
                boundaryPlaceholderLinesCount: 30,
              }}
              defaultActiveStep={{
                time: "Performance",
                stepIndex: 0,
              }}
            />
          </div>
        </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="space-y-16 scroll-mt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="relative inline-flex items-center gap-4 rounded-full bg-accent/15 px-7 py-3.5 backdrop-blur-sm border border-accent/30 shadow-sm">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40" />
            <div className="h-2 w-2 rounded-full bg-accent shadow-sm" />
            <span className="relative text-[0.75rem] font-semibold tracking-[0.3em] uppercase text-[#7e8e92]">
              Our Work
            </span>
            <div className="h-2 w-2 rounded-full bg-accent shadow-sm" />
          </div>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
            Recent Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Discover how we&apos;ve helped businesses across industries achieve remarkable growth through strategic design and development.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/12 bg-white/8 shadow-[0_24px_50px_-36px_rgba(8,12,20,0.45)] backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:shadow-[0_32px_60px_-40px_rgba(8,12,20,0.6)]"
            >
              {/* Subtle highlight for portfolio cards */}
              <div className="absolute inset-0 opacity-100 transition-opacity duration-500 group-hover:opacity-110 z-10 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(94,106,109,0.04),rgba(94,106,109,0)_75%)]" />
              </div>
              {/* Subtle highlight for portfolio cards */}
              <div className="absolute inset-0 opacity-100 transition-opacity duration-500 group-hover:opacity-120 z-10 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(94,106,109,0.05),rgba(94,106,109,0)_75%)]" />
              </div>
              {/* 16:9 Landscape Image Area */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-accent/20 to-background/40">
                <Image
                  src={item.image}
                  alt={`${item.title} preview`}
                  fill
                  className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                    item.image === '/1.png'
                      ? 'object-left'
                      : item.image === '/2.png' || item.image === '/5.png'
                      ? ''
                      : 'object-center'
                  }`}
                  style={
                    item.image === '/2.png' || item.image === '/5.png'
                      ? { objectPosition: '-45px center' }
                      : {}
                  }
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  priority={index === 0}
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Metrics Badge */}
                <div className="absolute top-4 right-4 translate-y-4 transform opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="inline-block rounded-full bg-accent/90 px-3 py-1 text-xs font-medium text-background backdrop-blur-sm">
                    {item.metrics}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="relative -mx-6 px-6 py-2">
                  <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                    <div className="h-[1.75rem] w-full bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20 opacity-95 shadow-[0_0_24px_rgba(214,169,157,0.3)] transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                  <span className="relative z-10 inline-flex h-[1.75rem] items-center text-[0.65rem] uppercase tracking-[0.35em] text-[#7e8e92] font-semibold leading-none">
                    {item.category}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative space-y-16 scroll-mt-40">
        {/* Background Elements */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/4 top-0 h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(214,169,157,0.2),rgba(214,169,157,0)_70%)] blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(156,175,170,0.15),rgba(156,175,170,0)_68%)] blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="relative inline-flex items-center gap-4 rounded-full bg-accent/15 px-7 py-3.5 backdrop-blur-sm border border-accent/30 shadow-sm">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40" />
            <div className="h-2 w-2 rounded-full bg-accent shadow-sm" />
            <span className="relative text-[0.75rem] font-semibold tracking-[0.3em] uppercase text-[#7e8e92]">
              Client Success Stories
            </span>
            <div className="h-2 w-2 rounded-full bg-accent shadow-sm" />
          </div>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Real results from real businesses. See how we&apos;ve helped companies transform their digital presence.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/12 bg-white/8 p-8 shadow-[0_24px_50px_-36px_rgba(8,12,20,0.45)] backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:shadow-[0_32px_60px_-40px_rgba(8,12,20,0.6)] hover:-translate-y-1"
            >
              {/* Subtle highlight for testimonial cards */}
              <div className="absolute inset-0 opacity-100 transition-opacity duration-500 group-hover:opacity-110 z-10 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(94,106,109,0.04),rgba(94,106,109,0)_75%)]" />
              </div>
              {/* Subtle highlight for testimonial cards */}
              <div className="absolute inset-0 opacity-100 transition-opacity duration-500 group-hover:opacity-120 z-10 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(94,106,109,0.05),rgba(94,106,109,0)_75%)]" />
              </div>

              {/* Quote Icon */}
              <div className="relative mb-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20 text-[#7e8e92] shadow-[0_12px_30px_-18px_rgba(214,169,157,0.45)] backdrop-blur-md">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>
              </div>

              <div className="relative space-y-6">
                {/* Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-[#f5e9d7]ccent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#99a5a8]ase leading-relaxed text-foreground/90 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Metric Badge */}
                <div className="inline-block">
                  <span className="rounded-full border border-primary/30 bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20 px-3 py-1 text-xs font-medium text-[#7e8e92] backdrop-blur-sm shadow-[0_12px_30px_-18px_rgba(214,169,157,0.45)]">
                    {testimonial.metric}
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-primary/20 text-sm font-semibold text-foreground">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} / {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center pt-8"
        >
          <div className="relative inline-flex items-center gap-6 rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl">
            {/* Subtle highlight for social proof */}
            <div className="absolute inset-0 opacity-100 z-10 pointer-events-none">
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(94,106,109,0.04),rgba(94,106,109,0)_75%)]" />
            </div>
            <div className="relative z-20">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 border-2 border-background"></div>
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-background"></div>
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-accent/20 to-primary/40 border-2 border-background"></div>
                </div>
                <span className="text-sm font-medium text-foreground">50+ Happy Clients</span>
              </div>
              <div className="h-4 w-px bg-muted/60"></div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-[#f5e9d7]ccent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm font-medium text-foreground">5.0 Average</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="relative isolate scroll-mt-40 overflow-hidden rounded-[28px] border border-white/12 bg-white/8 px-6 py-16 shadow-[0_25px_90px_-45px_rgba(6,10,18,0.55)] backdrop-blur-2xl sm:px-10 md:px-14 md:py-20 aurora-card">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <GradientPattern />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative text-center space-y-8"
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-foreground md:text-[#f5e9d7]xl xl:text-4xl whitespace-nowrap">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Let&apos;s discuss your project and create a landing page that drives real results. Get a free consultation and discover how we can help your business grow.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="frosted-button"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="frosted-button__inner">
                Start Your Project
              </span>
            </Button>
            <a
              href="mailto:hi@salvex.app"
              className="outline-pearl outline-pearl--email"
            >
              <div className="outline-pearl__inner">
                <span className="outline-pearl__label">Prefer email?</span>
                <span className="outline-pearl__value">hi@salvex.app</span>
              </div>
            </a>
          </div>

          {/* Compact Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mt-8 pt-6"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center">
              <div className="flex flex-col items-center">
                <span className="text-xl font-semibold text-foreground">48h</span>
                <span className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground/70">Response Time</span>
              </div>

              <div className="hidden h-8 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent sm:block" />

              <div className="flex flex-col items-center">
                <span className="text-xl font-semibold text-foreground">2-4 weeks</span>
                <span className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground/70">Project Timeline</span>
              </div>

              <div className="hidden h-8 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent sm:block" />

              <div className="flex flex-col items-center">
                <span className="text-xl font-semibold text-foreground">100%</span>
                <span className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground/70">Satisfaction Rate</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Project Inquiry Modal */}
      <ProjectInquiryModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />

      {/* Privacy Consent Card */}
      <PrivacyConsentCard />
    </div>
  );
}




