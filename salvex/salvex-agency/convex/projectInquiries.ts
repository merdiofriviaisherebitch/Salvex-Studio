import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Create a new project inquiry
export const createInquiry = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    businessName: v.string(),
    location: v.string(),
    currentWebsite: v.optional(v.string()),
    googleReviews: v.optional(v.string()),
    submittedAt: v.string(),
  },
  handler: async (ctx, args) => {
    const inquiryId = await ctx.db.insert("projectInquiries", {
      ...args,
      status: "new",
    });
    return inquiryId;
  },
});

// Get all project inquiries
export const getAllInquiries = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("projectInquiries").collect();
  },
});

// Get inquiries by status
export const getInquiriesByStatus = query({
  args: { status: v.union(v.literal("new"), v.literal("contacted"), v.literal("converted"), v.literal("archived")) },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("projectInquiries")
      .withIndex("by_status", (q) => q.eq("status", args.status))
      .collect();
  },
});

// Update inquiry status
export const updateInquiryStatus = mutation({
  args: {
    id: v.id("projectInquiries"),
    status: v.union(v.literal("new"), v.literal("contacted"), v.literal("converted"), v.literal("archived")),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { status: args.status });
  },
});

// Get inquiry by email
export const getInquiryByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("projectInquiries")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();
  },
});

// Get recent inquiries (last 30 days)
export const getRecentInquiries = query({
  args: {},
  handler: async (ctx) => {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    return await ctx.db
      .query("projectInquiries")
      .withIndex("by_submitted_at")
      .filter((q) => q.gte(q.field("submittedAt"), thirtyDaysAgo.toISOString()))
      .order("desc")
      .collect();
  },
});

// Delete an inquiry
export const deleteInquiry = mutation({
  args: { id: v.id("projectInquiries") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});