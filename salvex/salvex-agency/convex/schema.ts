import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  projectInquiries: defineTable({
    name: v.string(),
    email: v.string(),
    businessName: v.string(),
    location: v.string(),
    currentWebsite: v.optional(v.string()),
    googleReviews: v.optional(v.string()),
    submittedAt: v.string(),
    status: v.union(v.literal("new"), v.literal("contacted"), v.literal("converted"), v.literal("archived")),
  })
    .index("by_email", ["email"])
    .index("by_status", ["status"])
    .index("by_submitted_at", ["submittedAt"]),
});
