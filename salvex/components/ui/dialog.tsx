"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const Dialog = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }
>(({ className, open, onOpenChange, children, ...props }, ref) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Enhanced Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 bg-background/90 backdrop-blur-md"
            onClick={() => onOpenChange?.(false)}
          />

          {/* Animated Background Orbs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute left-1/4 top-1/4 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(214,169,157,0.2),rgba(214,169,157,0)_70%)] blur-3xl" />
            <div className="absolute right-1/4 bottom-1/4 h-[25rem] w-[25rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(156,175,170,0.15),rgba(156,175,170,0)_68%)] blur-3xl" />
          </motion.div>

          {/* Modal Container */}
          <motion.div
            ref={ref}
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
            exit={{
              opacity: 0,
              scale: 0.85,
              y: 20,
              rotateX: -5,
              filter: "blur(4px)"
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              filter: { duration: 0.3 }
            }}
            className={cn(
              "relative z-50 w-full max-w-lg rounded-2xl border border-white/20 bg-card/95 p-6 shadow-[0_60px_140px_-60px_rgba(6,10,18,0.95)] backdrop-blur-2xl",
              "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-white/10 before:to-transparent before:opacity-50",
              className
            )}
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d"
            }}
            {...props}
          >
            {/* Subtle glow effect */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/20 via-white/5 to-transparent opacity-50" />

            {/* Content */}
            <div className="relative z-10">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
})
Dialog.displayName = "Dialog"

const DialogContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-6", className)} {...props}>
    {children}
  </div>
))
DialogContent.displayName = "DialogContent"

const DialogHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("space-y-3 text-center", className)}
    {...props}
  />
))
DialogHeader.displayName = "DialogHeader"

const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-tight text-foreground", className)}
    {...props}
  />
))
DialogTitle.displayName = "DialogTitle"

const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = "DialogDescription"

export {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
}