import { NextRequest, NextResponse } from "next/server";
import { ConvexHttpClient } from "convex/browser";
import type { FunctionReference } from "convex/server";
import { api, internal } from "@/convex/_generated/api";

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL;
const ADMIN_API_TOKEN = process.env.ADMIN_API_TOKEN;
const CONVEX_ADMIN_AUTH_TOKEN = process.env.CONVEX_ADMIN_AUTH_TOKEN;

const getProjectInquiriesInternal = internal.projectInquiries.getProjectInquiries as unknown as FunctionReference<"query">;
type InquiryPayload = {
  name: string;
  email: string;
  businessName: string;
  currentWebsite?: string;
  googleReviews?: string;
  location: string;
  submittedAt?: string;
};

const REQUIRED_FIELDS: Array<keyof InquiryPayload> = [
  "name",
  "email",
  "businessName",
  "location",
];

function createClient() {
  if (!CONVEX_URL) {
    throw new Error("NEXT_PUBLIC_CONVEX_URL is not configured");
  }

  return new ConvexHttpClient(CONVEX_URL);
}

function sanitizeInput(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function normalizeTimestamp(value?: string) {
  if (!value) {
    return new Date().toISOString();
  }

  const parsed = Date.parse(value);
  if (Number.isNaN(parsed)) {
    return new Date().toISOString();
  }

  return new Date(parsed).toISOString();
}

function extractAdminToken(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const headerFallback = request.headers.get("x-admin-token");

  const rawToken = authHeader?.startsWith("Bearer ")
    ? authHeader.slice(7)
    : authHeader;

  return (rawToken ?? headerFallback ?? "").trim();
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Partial<InquiryPayload>;

    const payload: InquiryPayload = {
      name: sanitizeInput(body.name, 120),
      email: sanitizeInput(body.email, 160).toLowerCase(),
      businessName: sanitizeInput(body.businessName, 160),
      currentWebsite: sanitizeInput(body.currentWebsite, 256),
      googleReviews: sanitizeInput(body.googleReviews, 256),
      location: sanitizeInput(body.location, 160),
      submittedAt: normalizeTimestamp(body.submittedAt),
    };

    const missingField = REQUIRED_FIELDS.find((field) => !payload[field]);
    if (missingField) {
      return NextResponse.json(
        { error: `Missing required field: ${missingField}` },
        { status: 400 },
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(payload.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    const convex = createClient();
    const inquiryId = await convex.mutation(api.projectInquiries.createProjectInquiry, {
      name: payload.name,
      email: payload.email,
      businessName: payload.businessName,
      currentWebsite: payload.currentWebsite,
      googleReviews: payload.googleReviews,
      location: payload.location,
      submittedAt: payload.submittedAt,
    });

    return NextResponse.json({ success: true, id: inquiryId });
  } catch (error) {
    console.error("Error saving inquiry:", error);
    return NextResponse.json(
      { error: "Failed to save inquiry" },
      { status: 500 },
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const providedToken = extractAdminToken(request);

    if (!ADMIN_API_TOKEN || providedToken !== ADMIN_API_TOKEN) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!CONVEX_ADMIN_AUTH_TOKEN) {
      console.error("Missing CONVEX_ADMIN_AUTH_TOKEN env var");
      return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
    }

    const convex = createClient();
    convex.setAdminAuth(CONVEX_ADMIN_AUTH_TOKEN);
    const inquiries = await convex.query(getProjectInquiriesInternal);

    return NextResponse.json(inquiries);
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    return NextResponse.json(
      { error: "Failed to fetch inquiries" },
      { status: 500 },
    );
  }
}
