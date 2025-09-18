import { NextRequest, NextResponse } from "next/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { name, email, businessName, location, currentWebsite, googleReviews, submittedAt } = body;

    if (!name || !email || !businessName || !location) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, businessName, location" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create the inquiry in Convex
    const inquiryId = await convex.mutation(api.projectInquiries.createInquiry, {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      businessName: businessName.trim(),
      location: location.trim(),
      currentWebsite: currentWebsite?.trim() || undefined,
      googleReviews: googleReviews?.trim() || undefined,
      submittedAt: submittedAt || new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        inquiryId,
        message: "Project inquiry submitted successfully"
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error creating project inquiry:", error);
    return NextResponse.json(
      { error: "Failed to submit project inquiry" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const inquiries = await convex.query(api.projectInquiries.getAllInquiries);
    return NextResponse.json({ inquiries });
  } catch (error) {
    console.error("Error fetching project inquiries:", error);
    return NextResponse.json(
      { error: "Failed to fetch project inquiries" },
      { status: 500 }
    );
  }
}