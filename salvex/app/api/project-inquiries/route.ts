import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), 'data')
const INQUIRIES_FILE = path.join(DATA_DIR, 'project-inquiries.json')

interface ProjectInquiry {
  id: string
  name: string
  email: string
  businessName: string
  currentWebsite: string
  googleReviews: string
  location: string
  submittedAt: string
}

async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR)
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true })
  }
}

async function getInquiries(): Promise<ProjectInquiry[]> {
  try {
    await ensureDataDir()
    const data = await fs.readFile(INQUIRIES_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function saveInquiries(inquiries: ProjectInquiry[]): Promise<void> {
  await ensureDataDir()
  await fs.writeFile(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2))
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const newInquiry: ProjectInquiry = {
      id: Date.now().toString(),
      name: body.name,
      email: body.email,
      businessName: body.businessName,
      currentWebsite: body.currentWebsite || '',
      googleReviews: body.googleReviews || '',
      location: body.location,
      submittedAt: body.submittedAt || new Date().toISOString(),
    }

    const inquiries = await getInquiries()
    inquiries.push(newInquiry)
    await saveInquiries(inquiries)

    return NextResponse.json({ success: true, id: newInquiry.id })
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
    const inquiries = await getInquiries()
    return NextResponse.json(inquiries)
  } catch (error) {
    console.error('Error fetching inquiries:', error)
    return NextResponse.json(
      { error: 'Failed to fetch inquiries' },
      { status: 500 }
    )
  }
}