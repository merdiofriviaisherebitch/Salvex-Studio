import { internalMutation, internalQuery, mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createProjectInquiry = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    businessName: v.string(),
    currentWebsite: v.optional(v.string()),
    googleReviews: v.optional(v.string()),
    location: v.string(),
    submittedAt: v.string(),
  },
  handler: async (ctx, args) => {
    const now = Date.now();

    const inquiryId = await ctx.db.insert("projectInquiries", {
      name: args.name,
      email: args.email,
      businessName: args.businessName,
      currentWebsite: args.currentWebsite || "",
      googleReviews: args.googleReviews || "",
      location: args.location,
      submittedAt: args.submittedAt,
      status: "new",
      createdAt: now,
    });

    return inquiryId;
  },
});

export const getProjectInquiries = internalQuery({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("projectInquiries")
      .order("desc")
      .collect();
  },
});

export const getProjectInquiryById = query({
  args: { id: v.id("projectInquiries") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const updateProjectInquiryStatus = internalMutation({
  args: {
    id: v.id("projectInquiries"),
    status: v.union(
      v.literal("new"),
      v.literal("reviewed"),
      v.literal("contacted"),
      v.literal("converted"),
      v.literal("declined")
    ),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { status: args.status });
  },
});

