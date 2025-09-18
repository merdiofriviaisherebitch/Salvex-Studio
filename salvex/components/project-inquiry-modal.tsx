"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Clock, ShieldCheck, Sparkles, X } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ProjectInquiryModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

interface FormData {
  name: string
  email: string
  businessName: string
  currentWebsite: string
  googleReviews: string
  location: string
}

const highlightFeatures: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Strategy-Led Discovery",
    description: "A 45-minute session to map business goals, audiences, and conversion levers together.",
    icon: Sparkles,
  },
  {
    title: "Conversion Architecture",
    description: "UX wireframes, messaging hierarchy, and analytics baked in from day one of the build.",
    icon: ShieldCheck,
  },
  {
    title: "Delivery In Weeks",
    description: "Launch-ready site in as little as 21 days with optimization support after go-live.",
    icon: Clock,
  },
]

const quickFacts = [
  { label: "Avg. timeline", value: "2–4 weeks" },
  { label: "Response time", value: "Under 48 hours" },
  { label: "Satisfaction", value: "100%" },
]

const formFields: Array<{
  id: keyof FormData
  label: string
  type: string
  required?: boolean
  autoComplete?: string
  placeholder: string
  colSpan?: string
}> = [
  {
    id: "name",
    label: "Full Name",
    type: "text",
    required: true,
    autoComplete: "name",
    placeholder: "Full name",
  },
  {
    id: "email",
    label: "Work Email",
    type: "email",
    required: true,
    autoComplete: "email",
    placeholder: "name@company.com",
  },
  {
    id: "businessName",
    label: "Business or Product",
    type: "text",
    required: true,
    autoComplete: "organization",
    placeholder: "Brand or product",
  },
  {
    id: "location",
    label: "Primary Location",
    type: "text",
    required: true,
    autoComplete: "country-name",
    placeholder: "City, country",
  },
  {
    id: "currentWebsite",
    label: "Current Website (if any)",
    type: "url",
    autoComplete: "url",
    placeholder: "https://",
    colSpan: "sm:col-span-2",
  },
  {
    id: "googleReviews",
    label: "Google Business Profile (if any)",
    type: "url",
    autoComplete: "url",
    placeholder: "https://",
    colSpan: "sm:col-span-2",
  },
]

export function ProjectInquiryModal({ open, onOpenChange }: ProjectInquiryModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    businessName: "",
    currentWebsite: "",
    googleReviews: "",
    location: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/project-inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        window.open("https://calendly.com/mehrdad-salvex/30min", "_blank")
        onOpenChange(false)
        setFormData({
          name: "",
          email: "",
          businessName: "",
          currentWebsite: "",
          googleReviews: "",
          location: "",
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = Boolean(formData.name && formData.email && formData.businessName && formData.location)

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6">
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,169,157,0.32),rgba(214,203,175,0.46)_45%,rgba(156,175,170,0.72))] backdrop-blur-3xl md:backdrop-blur-[55px]"
            onClick={() => onOpenChange(false)}
          />

          <motion.section
            key="project-inquiry-modal"
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-h-[96vh] max-w-5xl overflow-y-auto rounded-[28px] sm:rounded-[32px]"
            onClick={event => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="relative flex flex-col overflow-hidden rounded-[28px] border border-white/20 bg-card/95 shadow-[0_35px_90px_-45px_rgba(94,106,109,0.65)] backdrop-blur-3xl transition-all duration-500 dark:border-white/5 dark:bg-background/90 sm:rounded-[32px] md:flex-row md:rounded-[36px] md:border-white/15 md:shadow-[0_40px_100px_-60px_rgba(94,106,109,0.75)]">
              <div className="pointer-events-none absolute inset-0">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.12 }}
                  className="absolute -top-40 -left-24 h-[21rem] w-[21rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(214,169,157,0.3),transparent_68%)] blur-3xl"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="absolute -bottom-32 -right-20 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(156,175,170,0.26),transparent_70%)] blur-3xl"
                />
              </div>

              <motion.button
                type="button"
                onClick={() => onOpenChange(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/50 backdrop-blur-xl transition hover:bg-white/70 dark:border-white/15 dark:bg-white/15 dark:hover:bg-white/25"
                aria-label="Close project inquiry modal"
              >
                <X className="h-4 w-4 text-foreground transition group-hover:rotate-90" />
              </motion.button>

              <div className="relative z-10 flex flex-col gap-8 bg-[linear-gradient(142deg,rgba(214,169,157,0.92),rgba(214,203,175,0.88)_50%,rgba(156,175,170,0.85))] px-7 py-10 text-primary-foreground sm:px-10 md:basis-[40%] md:py-12">
                <div className="absolute inset-0 opacity-50 mix-blend-screen">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.32),transparent_68%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.2),transparent_55%)]" />
                </div>

                <div className="relative flex flex-col gap-6">
                  <div className="flex flex-wrap items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#5e6a6d]/80">
                    <Sparkles className="h-4 w-4" />
                    <span>Premium Web Experiences</span>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.18 }}
                    className="space-y-3"
                  >
                    <h2 className="text-3xl font-semibold tracking-tight text-[#5e6a6d]/90">
                      Let&apos;s craft your flagship launchpad
                    </h2>
                    <p className="text-sm leading-6 text-[#5e6a6d]/80">
                      A discovery-led engagement uncovering growth opportunities, refined messaging, and a conversion-ready web experience tailored to your ideal customers.
                    </p>
                  </motion.div>

                  <motion.ul
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.3 }}
                    className="space-y-4"
                  >
                    {highlightFeatures.map(feature => (
                      <li key={feature.title} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full border border-white/35 bg-white/30 text-[#5e6a6d]">
                          <feature.icon className="h-4 w-4" />
                        </div>
                        <div className="space-y-1.5">
                          <p className="text-sm font-semibold text-[#5e6a6d]/90">{feature.title}</p>
                          <p className="text-xs leading-relaxed text-[#5e6a6d]/75">{feature.description}</p>
                        </div>
                      </li>
                    ))}
                  </motion.ul>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.48 }}
                  className="flex items-center gap-3 text-xs text-white/75"
                >
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/30 text-[#5e6a6d]">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#5e6a6d]/90">You&apos;ll leave the call with:</p>
                    <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#5e6a6d]/75">Action plan | Success path | Investment clarity</p>
                  </div>
                </motion.div>
              </div>

              <div className="relative z-10 flex-1 bg-background px-7 py-10 text-[#5e6a6d] sm:px-12 md:py-12">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.16 }}
                  className="space-y-5"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5e6a6d]">
                      Tell us about your project
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-[#5e6a6d]">
                      We reply with a tailored growth blueprint in under 48 hours.
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5e6a6d]">
                      Share just the essentials—our strategists review your presence ahead of the call so we arrive ready with next-step recommendations.
                    </p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.24 }}
                    className="grid gap-3 sm:grid-cols-3"
                  >
                    {quickFacts.map((fact, index) => (
                      <motion.div
                        key={fact.label}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.3 + index * 0.1,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        whileHover={{
                          y: -2,
                          scale: 1.02,
                          transition: { duration: 0.2 }
                        }}
                        className="rounded-2xl border border-border/60 bg-white/60 px-4 py-3 text-left text-xs text-[#5e6a6d] shadow-[0_12px_28px_-20px_rgba(94,106,109,0.55)] transition-all duration-300 hover:shadow-[0_16px_32px_-20px_rgba(94,106,109,0.65)] sm:text-center"
                      >
                        <p className="text-[0.6rem] uppercase tracking-[0.28em] text-[#5e6a6d]">{fact.label}</p>
                        <p className="mt-2 text-lg font-semibold text-[#5e6a6d]">{fact.value}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.32 }}
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-6"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {formFields.map(field => (
                      <div key={field.id} className={`space-y-2 ${field.colSpan ?? ""}`}>
                        <Label
                          htmlFor={field.id}
                          className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5e6a6d]"
                        >
                          {field.label}{field.required ? " *" : ""}
                        </Label>
                        <Input
                          id={field.id}
                          type={field.type}
                          autoComplete={field.autoComplete}
                          value={formData[field.id]}
                          onChange={event => handleInputChange(field.id, event.target.value)}
                          required={field.required}
                          placeholder={field.placeholder}
                          className="h-11 rounded-2xl border border-border/70 bg-white/70 px-4 text-sm text-[#5e6a6d] placeholder:text-[#5e6a6d] transition-all duration-300 focus:border-accent/60 focus:bg-white focus:ring-2 focus:ring-accent/20 focus:ring-offset-0"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4 pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={!isFormValid || isSubmitting}
                      className="frosted-button w-full sm:w-auto disabled:opacity-60 disabled:translate-y-0"
                    >
                      <span className="frosted-button__inner inline-flex items-center gap-3">
                        {isSubmitting ? (
                          <>
                            <motion.span
                              className="flex h-4 w-4 items-center justify-center"
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            >
                              <span className="inline-flex h-4 w-4 rounded-full border-2 border-white/40 border-t-white" />
                            </motion.span>
                            <span>Booking Your Session</span>
                          </>
                        ) : (
                          <>
                            <span>Reserve Discovery Call</span>
                            <ArrowUpRight className="h-4 w-4" />
                          </>
                        )}
                      </span>
                    </Button>

                    <p className="text-center text-xs leading-relaxed text-[#5e6a6d]">
                      We&apos;ll redirect you to Calendly to pick a time that works for you. No spam&mdash;just a strategic roadmap for your next launch.
                    </p>
                  </div>
                </motion.form>
              </div>
            </div>
          </motion.section>
        </div>
      )}
    </AnimatePresence>
  )
}









