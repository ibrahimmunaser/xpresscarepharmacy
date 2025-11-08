import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // TODO: Implement actual contact form processing
    // - Send email notification
    // - Store in CRM
    // - Optional: trigger fax if needed
    
    console.log('Long-term care contact form submission:', {
      firstName: body.firstName,
      lastName: body.lastName,
      facility: body.facility,
      phone: body.phone,
      email: body.email,
      message: body.message?.substring(0, 100) + '...', // Log first 100 chars only
      timestamp: new Date().toISOString()
    });
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return NextResponse.json({ 
      ok: true, 
      message: 'Contact form submitted successfully' 
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { ok: false, error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}
















