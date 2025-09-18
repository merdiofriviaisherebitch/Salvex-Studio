import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Users table for authentication and user management
  users: defineTable({
    name: v.string(),
    email: v.string(),
    role: v.union(v.literal("admin"), v.literal("user")),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_email", ["email"]),

  // Projects table for client projects
  projects: defineTable({
    title: v.string(),
    description: v.string(),
    status: v.union(
      v.literal("planning"),
      v.literal("active"),
      v.literal("completed"),
      v.literal("on_hold")
    ),
    clientId: v.id("users"),
    budget: v.optional(v.number()),
    startDate: v.optional(v.number()),
    endDate: v.optional(v.number()),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_client", ["clientId"]).index("by_status", ["status"]),

  // Project inquiries from potential clients
  projectInquiries: defineTable({
    name: v.string(),
    email: v.string(),
    businessName: v.string(),
    currentWebsite: v.optional(v.string()),
    googleReviews: v.optional(v.string()),
    location: v.string(),
    submittedAt: v.string(),
    status: v.union(
      v.literal("new"),
      v.literal("reviewed"),
      v.literal("contacted"),
      v.literal("converted"),
      v.literal("declined")
    ),
    createdAt: v.number(),
  }).index("by_status", ["status"]).index("by_email", ["email"]).index("by_created", ["createdAt"]),

  // Services offered by the agency
  services: defineTable({
    name: v.string(),
    description: v.string(),
    category: v.string(),
    pricing: v.optional(v.object({
      type: v.union(v.literal("fixed"), v.literal("hourly"), v.literal("custom")),
      amount: v.optional(v.number()),
      currency: v.optional(v.string()),
    })),
    isActive: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_category", ["category"]).index("by_active", ["isActive"]),
});