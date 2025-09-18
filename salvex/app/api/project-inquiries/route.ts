import { NextRequest, NextResponse } from 'next/server'
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const inquiryId = await convex.mutation(api.projectInquiries.createProjectInquiry, {
      name: body.name,
      email: body.email,
      businessName: body.businessName,
      currentWebsite: body.currentWebsite || '',
      googleReviews: body.googleReviews || '',
      location: body.location,
      submittedAt: body.submittedAt || new Date().toISOString(),
    });

    return NextResponse.json({ success: true, id: inquiryId })
  } catch (error) {
    console.error('Error saving inquiry:', error)
    return NextResponse.json(
      { error: 'Failed to save inquiry' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const inquiries = await convex.query(api.projectInquiries.getProjectInquiries);
    return NextResponse.json(inquiries)
  } catch (error) {
    console.error('Error fetching inquiries:', error)
    return NextResponse.json(
      { error: 'Failed to fetch inquiries' },
      { status: 500 }
    )
  }
}